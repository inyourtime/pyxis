describe(`health-check`, () => {
  it(`server ok 😀`, async () => {
    const res = await global.server.inject({
      method: 'GET',
      url: '/api/service/health-check',
    });

    expect(res.statusCode).toBe(200);
  });
});
