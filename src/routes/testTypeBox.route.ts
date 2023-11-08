import DiscordWebhook from "cores/discordWebhookHandler";
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import ApiError from "utils/responseHandler/apiError";
import { STATUS_CODE } from "utils/responseHandler/statusCode";
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
      // querystring: z.object({
      //   name: z.string().min(4),
      // }),
      // body: Aha,
    },
    handler: async (request: FastifyRequest<{ Querystring: IAha }>, reply: FastifyReply) => {
      // throw ApiError.createError(`vvvvvvv`, STATUS_CODE.NOT_FOUND)
      const {name} = request.query
      name.trim()
      reply.send(`It's working`);
    },
  });

  done();
};
