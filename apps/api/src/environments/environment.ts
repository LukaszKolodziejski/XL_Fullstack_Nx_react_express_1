import * as dotenv from 'dotenv';
const envFound = dotenv.config();
if (envFound.error) {
  throw new Error(envFound.error.toString());
}

export const environment = {
  production: false,
  port: parseInt(process.env.PORT, 10),
  db: {
    protocol: process.env.DB_PROTOCOL,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    name: process.env.DB_NAME,
  },
};
