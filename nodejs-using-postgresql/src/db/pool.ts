import { Pool } from 'pg';

export default new Pool({
  host: process.env.HOST,
  user: process.env.ROLE_NAME,
  database: process.env.DATABASE,
  password: process.env.ROLE_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432'),
});
