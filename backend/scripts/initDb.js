import 'dotenv/config'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { pool, connectDb } from '../config/db.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemaPath = path.join(__dirname, '../database/schema.sql')

function splitSql(sql) {
  return sql
    .split(';')
    .map((statement) => statement.trim())
    .filter(Boolean)
}

async function initDb() {
  await connectDb()
  const schema = await fs.readFile(schemaPath, 'utf8')
  const statements = splitSql(schema)

  for (const statement of statements) {
    await pool.query(statement)
  }

  console.log(`[db] schema ready (${statements.length} statements)`)
  await pool.end()
}

initDb().catch(async (error) => {
  console.error('[db] schema initialization failed', error)
  await pool.end()
  process.exit(1)
})
