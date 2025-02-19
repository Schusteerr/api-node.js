import 'dotenv/config'
import postgres from 'postgres'

// Configuração da conexão usando variáveis de ambiente
export const sql = postgres({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});
