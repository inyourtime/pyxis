export default {
  CONFIG: {
    SERVERPORT: Number(process.env.CONFIG_SERVERPORT),
    API_PREFIX: process.env.CONFIG_API_PREFIX,
  },
  JWT: {
    SECRETKEY: process.env.JWT_SECRETKEY,
  },
  DISCORD: process.env.DISCORD,
  TYPEORM: {
    TYPE: process.env.TYPEORM_TYPE,
    HOST: process.env.TYPEORM_HOST,
    PORT: Number(process.env.TYPEORM_PORT),
    USERNAME: process.env.TYPEORM_USERNAME,
    PASSWORD: process.env.TYPEORM_PASSWORD,
    DATABASE: process.env.TYPEORM_DATABASE,
    ENTITIES: process.env.TYPEORM_ENTITIES,
    SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE?.toLowerCase() === "true" ? true : false,
    SCHEMA: process.env.TYPEORM_SCHEMA,
    // CACHE: process.env.TYPEORM_CACHE
  },
  TYPEORM_TEST: {
    TYPE: process.env.TYPEORM_TEST_TYPE,
    HOST: process.env.TYPEORM_TEST_HOST,
    PORT: Number(process.env.TYPEORM_TEST_PORT),
    USERNAME: process.env.TYPEORM_TEST_USERNAME,
    PASSWORD: process.env.TYPEORM_TEST_PASSWORD,
    DATABASE: process.env.TYPEORM_TEST_DATABASE,
    ENTITIES: process.env.TYPEORM_TEST_ENTITIES,
    SYNCHRONIZE: process.env.TYPEORM_TEST_SYNCHRONIZE?.toLowerCase() === "true" ? true : false,
    SCHEMA: process.env.TYPEORM_TEST_SCHEMA,
  },
  MONGODB: {
    URL: process.env.MONGODB_URL,
    DATABASE: process.env.MONGODB_DATABASE,
  },
  MONGODB_TEST: {
    URL: process.env.MONGODB_TEST_URL,
    DATABASE: process.env.MONGODB_TEST_DATABASE,
  },
  REDIS: {
    HOST: process.env.REDIS_HOST,
    PORT: Number(process.env.REDIS_PORT),
    PASSWORD: process.env.REDIS_PASSWORD,
  },
  OBJECTSTORAGE: {
    ENDPOINT: process.env.OBJECTSTORAGE_ENDPOINT,
    REGION: process.env.OBJECTSTORAGE_REGION,
    ACCESSKEYID: process.env.OBJECTSTORAGE_ACCESSKEYID,
    SECRETACCESSKEY: process.env.OBJECTSTORAGE_SECRETACCESSKEY,
    BUCKET: process.env.OBJECTSTORAGE_BUCKET,
    FOLDER: process.env.OBJECTSTORAGE_FOLDER || "dev",
    SIGNATUREVERSION: process.env.OBJECTSTORAGE_SIGNATUREVERSION,
  },
};
