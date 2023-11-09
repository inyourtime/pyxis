export default {
  CONFIG: {
    SERVERPORT: Number(process.env.CONFIG_SERVERPORT),
    API_PREFIX: process.env.CONFIG_API_PREFIX,
  },
  JWT: {
    SECRETKEY: process.env.JWT_SECRETKEY,
  },
  DISCORD: process.env.DISCORD,
  GOOGLE: {
    ID: process.env.GOOGLE_ID,
    SECRET: process.env.GOOGLE_SECRET,
    ENDPOINT: process.env.GOOGLE_ENDPOINT,
    CALLBACK: process.env.GOOGLE_CALLBACK,
    INFO_ENDPOINT: process.env.GOOGLE_INFO_ENDPOINT,
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
    FOLDER: process.env.OBJECTSTORAGE_FOLDER || 'dev',
    SIGNATUREVERSION: process.env.OBJECTSTORAGE_SIGNATUREVERSION,
  },
};
