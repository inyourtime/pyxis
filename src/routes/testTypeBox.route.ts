import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { FastifyZod } from "utils/fastify/declaration/server.interface";

const Aha = z.object({
  name: z.string(),
});

type IAha = z.infer<typeof Aha>;

export default (server: FastifyInstance) => {
  server.route({
    method: "POST",
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
};
