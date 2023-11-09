import { FastifyInstance } from "fastify";

declare global {
  var server: FastifyInstance;
}

export {};
