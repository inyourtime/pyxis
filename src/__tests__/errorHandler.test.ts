import { FastifyReply } from 'fastify';
import errorHandler from 'utils/fastify/errorHandler';
import { ZodError } from 'zod';

describe(`errorHandler`, () => {
  it(`handles ZodError`, async () => {
    const zodError = new ZodError([
      { code: 'custom', path: ['foo'], message: 'something went wrong' },
    ]);

    const reply = {
      send: jest.fn(),
      status: jest.fn().mockImplementation(() => {
        return {
          send: jest.fn(),
        };
      }),
    };

    errorHandler(zodError as any, null as any, reply as any);

    expect(reply.status).toHaveBeenCalledWith(400);
    expect(reply.status.mock.results[0].value.send).toHaveBeenCalledWith({
      statusCode: 400,
      error: 'Bad Request',
      issues: zodError.issues,
    });
  });

  it(`handles errors`, async () => {
    const error = new Error('bar');
    const request = {
      method: 'GET',
      url: '/test/jaaaa',
      hostname: 'localhost:9999',
    };
    const reply = {
      send: jest.fn(),
    };

    errorHandler(error as any, request as any, reply as any);

    expect(reply.send).toHaveBeenCalledWith(error);
  });
});
