import { query } from '../config/db.js'
import { buildInsert, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'name' },
  { dbKey: 'email' },
  { dbKey: 'password_hash', apiKey: 'passwordHash' },
  { dbKey: 'role' },
]

function mapUser(row) {
  const user = withMongoCompat(row, { password_hash: 'passwordHash' })
  if (user) delete user.passwordHash
  return user
}

const User = {
  async create(data) {
    const payload = {
      role: 'user',
      ...data,
    }
    const { sql, values } = buildInsert('users', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async findById(id) {
    const rows = await query('SELECT * FROM users WHERE id = ? LIMIT 1', [id])
    return mapUser(rows[0])
  },

  async findByEmail(email) {
    const rows = await query('SELECT * FROM users WHERE email = ? LIMIT 1', [email])
    return mapUser(rows[0])
  },
}

export default User
