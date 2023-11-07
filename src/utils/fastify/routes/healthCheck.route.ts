import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export default (server: FastifyInstance) => {
  server.route({
    method: "GET",
    url: `/health-check`,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      reply.send(`this server still OK`);
    },
  });
};
