import { fastifyOauth2 } from '@fastify/oauth2';
import configs from 'cores/config/configs';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { fastifyPlugin } from 'fastify-plugin';

export const GoogleAuthenticate = fastifyPlugin(
  (server: FastifyInstance, options: FastifyPluginOptions, done) => {
    server.register(fastifyOauth2, {
      name: 'googleOAuth2',
      scope: ['profile', 'email'],
      credentials: {
        client: {
          id: configs.GOOGLE.ID as string,
          secret: configs.GOOGLE.SECRET as string,
        },
        auth: fastifyOauth2.GOOGLE_CONFIGURATION,
      },
      startRedirectPath: configs.GOOGLE.ENDPOINT,
      callbackUri: configs.GOOGLE.CALLBACK as string,
    });

    done();
  },
);
