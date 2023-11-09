import FastifyServer from 'utils/fastify';
import { TestingHelper } from './inject.helper';

beforeAll(async () => {
  const server = await new FastifyServer().start();
  global.server = server;
  await TestingHelper.clean();
});

afterAll(async () => {
  await global.server.close();
});
