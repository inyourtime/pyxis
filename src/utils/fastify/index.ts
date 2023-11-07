import fastify, {
  FastifyError,
  FastifyInstance,
  FastifyListenOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import path from "path";
import fs from "fs";
import { ZodError, z } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

export default class FastifyServer {
  private server: FastifyInstance;
  private opt: FastifyListenOptions;

  constructor(options: FastifyListenOptions = { port: 6899, host: "0.0.0.0" }) {
    this.server = FastifyServer.getServer();
    this.opt = options;
  }

  private static getServer(): FastifyInstance {
    return fastify()
      .setValidatorCompiler(validatorCompiler)
      .setSerializerCompiler(serializerCompiler);
  }

  private setErrorHandler() {
    this.server.setErrorHandler(
      (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
        if (error instanceof ZodError) {
          reply.status(400).send({
            statusCode: 400,
            error: "Bad Request",
            issues: error.issues,
          });
          return;
        }
        console.log(error.message);
        reply.send(error);
      }
    );
  }

  private addRouter(routerFolder: string = "../../routes") {
    const routesDir = path.join(__dirname, routerFolder);
    fs.readdirSync(routesDir).forEach((file) => {
      if (file.endsWith(".route.ts")) {
        const routeFilePath = path.join(routesDir, file);
        const routeModule = require(routeFilePath);
        routeModule.default(this.server);
      }
    });
  }

  start(): Promise<FastifyInstance> {
    return new Promise(async (resolve, reject) => {
      try {
        this.server.get("/", (request, reply) => {
          reply.send("hekko");
        });

        this.setErrorHandler();

        this.addRouter("./routes");
        this.addRouter();

        this.server.listen(this.opt).then(() => resolve(this.server));
      } catch (e) {
        reject(e);
      }
    });
  }
}
