import FastifyServer from 'utils/fastify';

(async () => {
  const server = new FastifyServer();

  server.start().then(async (server) => {
    const serverAddress = server.addresses()[0];
    console.log(`The Pyxis server is running on ${serverAddress.address}:${serverAddress.port} 🚀`);
  });
})();
