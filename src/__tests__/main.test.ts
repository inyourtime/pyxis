describe(`app`, () => {
  it(`health-check`, async () => {
    const res = await global.server.inject({
      method: 'GET',
      url: '/api/user',
    });

    expect(JSON.parse(res.body).length).toBe(1);
  });
});
