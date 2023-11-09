import fastify, { FastifyInstance, FastifyListenOptions } from 'fastify';
import path from 'path';
import fs from 'fs';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import errorHandler from './errorHandler';

export default class FastifyServer {
  private server: FastifyInstance;
  private opt: FastifyListenOptions;

  constructor(options: FastifyListenOptions = { port: 6899, host: '0.0.0.0' }) {
    this.server = FastifyServer.getServer();
    this.opt = options;
  }

  private static getServer(): FastifyInstance {
    return fastify()
      .setValidatorCompiler(validatorCompiler)
      .setSerializerCompiler(serializerCompiler);
  }

  private setErrorHandler() {
    this.server.setErrorHandler(errorHandler);
  }

  private addRouter(routerFolder: string = '../../routes', prefix: string = 'api') {
    const routesDir = path.join(__dirname, routerFolder);
    fs.readdirSync(routesDir).forEach((file) => {
      if (file.endsWith('.route.ts')) {
        const routeFilePath = path.join(routesDir, file);
        this.server.register(require(routeFilePath), { prefix: prefix });
      }
    });
  }

  start(): Promise<FastifyInstance> {
    return new Promise(async (resolve, reject) => {
      try {
        this.server.get('/', (request, reply) => {
          reply.send('hekko');
        });

        this.setErrorHandler();

        this.addRouter('./routes', 'api/service');
        this.addRouter();

        this.server.listen(this.opt).then(() => resolve(this.server));
      } catch (e) {
        reject(e);
      }
    });
  }
}
