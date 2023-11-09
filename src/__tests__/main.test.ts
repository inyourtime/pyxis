import FastifyServer from "utils/fastify";
import prisma from "./helpers/prisma";

describe(`app`, () => {
  it(`health-check`, async () => {
    const res = await global.server.inject({
      method: "GET",
      url: "/api/user",
    });

    console.log(res.body)
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe("hekko");
  });
});
