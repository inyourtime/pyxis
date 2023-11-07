import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

export default (server: FastifyInstance, options: FastifyPluginOptions, done: any) => {
  server.route({
    method: "GET",
    url: `/health-check`,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send(`this server still OK`);
    },
  });

  done();
};
