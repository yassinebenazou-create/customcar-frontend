import mysql from 'mysql2/promise'

const required = ['DB_HOST', 'DB_USER', 'DB_NAME']

function requireDatabaseEnv() {
  const missing = required.filter((key) => !process.env[key])
  if (missing.length) {
    throw new Error(`Missing database environment variables: ${missing.join(', ')}`)
  }
}

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: 'Z',
})

export async function query(sql, params = []) {
  const [result] = await pool.execute(sql, params)
  return result
}

export async function connectDb() {
  requireDatabaseEnv()
  const connection = await pool.getConnection()
  try {
    await connection.ping()
    console.log('[db] MySQL connected')
  } finally {
    connection.release()
  }
}
