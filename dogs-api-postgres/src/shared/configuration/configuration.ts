// Some Enums to access easily the envs
export enum CONFIGURATIONS {
  // Configurations
  PORT = 'port',
  APP_NAME = 'app_name',

  POSTGRES_HOST = 'postgres.host',
  POSTGRES_PORT = 'postgres.port',
  POSTGRES_PASSWORD = 'postgres.password',
  POSTGRES_USERNAME = 'postgres.username',
  POSTGRES_DATABASE= 'postgres.db'
}

export const configurations = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  app_name: 'Dogs API',
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    db: process.env.POSTGRES_DATABASE,
  },
});
