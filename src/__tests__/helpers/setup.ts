import FastifyServer from "utils/fastify";

beforeAll(async () => {
  const server = await new FastifyServer().start();
  global.server = server;
});

afterAll(async () => {
  await global.server.close();
});
