import { OAuth2Namespace } from '@fastify/oauth2';
import axios from 'axios';
import configs from 'cores/config/configs';
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from 'fastify';
import { UserRepository } from 'repositories/user.repository';
import ApiError from 'utils/responseHandler/apiError';
import { STATUS_CODE } from 'utils/responseHandler/statusCode';

export default (server: FastifyInstance, options: FastifyPluginOptions, done: any) => {
  server.route({
    method: 'GET',
    url: `/user`,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      const userRepo = new UserRepository();
      return userRepo.findAll();
    },
  });

  server.route({
    method: 'GET',
    url: `/auth/google/callback`,
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      // ต้องใช้ any
      const result = await (<OAuth2Namespace>(<any>server).googleOAuth2)
        .getAccessTokenFromAuthorizationCodeFlow(request)
        .catch((e) => {
          throw ApiError.createError(`[Google Callback] ${e}`, STATUS_CODE.BAD_REQUEST);
        });

      const res = await axios.get(
        `${configs.GOOGLE.INFO_ENDPOINT}?access_token=${result.token.access_token}`,
      );

      reply.send(res.data);
    },
  });

  done();
};
