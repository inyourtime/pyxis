import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const Aha = z.object({
  name: z.string(),
});

type IAha = z.infer<typeof Aha>;

export default (server: FastifyInstance, options: FastifyPluginOptions, done: any) => {
  server.route({
    method: "GET",
    url: `/`,
    schema: {
      querystring: z.object({
        name: z.string().min(4),
      }),
      // body: Aha,
    },
    handler: async (request: FastifyRequest<{ Querystring: IAha }>, reply: FastifyReply) => {
      const { name } = request.query;
      console.log(name.trim());
      reply.send(`It's working`);
    },
  });

  done();
};
