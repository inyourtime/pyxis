import configs from 'cores/config/configs';
import DiscordWebhook from 'cores/discordWebhookHandler';
import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { ZodError } from 'zod';

export default function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    reply.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      issues: error.issues,
    });
    return;
  }
  if (error.statusCode == undefined) {
    new DiscordWebhook(<string>configs.DISCORD).send(error.message, request);
  }
  reply.send(error);
}
