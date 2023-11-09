import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { UserRepository } from "repositories/user.repository";

export default (server: FastifyInstance, options: FastifyPluginOptions, done: any) => {
  server.route({
    method: "GET",
    url: `/user`,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const userRepo = new UserRepository();
      return userRepo.findAll();
    },
  });

  done();
};
