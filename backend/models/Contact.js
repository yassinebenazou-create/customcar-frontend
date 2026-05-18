import { query } from '../config/db.js'
import { buildInsert, toMysqlBoolean, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'name' },
  { dbKey: 'email' },
  { dbKey: 'subject' },
  { dbKey: 'message' },
  { dbKey: 'is_read', apiKey: 'read', cast: (value) => toMysqlBoolean(value) },
]

function mapContact(row) {
  const contact = withMongoCompat(row, { is_read: 'read' })
  if (contact?.read !== undefined) contact.read = Boolean(contact.read)
  return contact
}

const Contact = {
  async create(data) {
    const payload = {
      ...data,
      name: data.name || data.title || data.email || 'Visiteur CUSTOMCAR',
      subject: data.subject || data.title || data.type || 'Contact CUSTOMCAR',
      read: data.read ?? false,
    }
    const { sql, values } = buildInsert('contacts', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async findAll() {
    const rows = await query('SELECT * FROM contacts ORDER BY created_at DESC')
    return rows.map(mapContact)
  },

  async findById(id) {
    const rows = await query('SELECT * FROM contacts WHERE id = ? LIMIT 1', [id])
    return mapContact(rows[0])
  },
}

export default Contact
