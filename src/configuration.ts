export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT||3001,
     jwt: {
      secret: process.env.SECRETKEY,
      expiresIn: process.env.EXPIRESIN,
    },DB: process.env.DATABASE_URL
  });