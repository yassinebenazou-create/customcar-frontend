import { query } from '../config/db.js'
import { buildInsert, buildUpdate, toMysqlBoolean, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'title' },
  { dbKey: 'slug' },
  { dbKey: 'description' },
  { dbKey: 'image_url', apiKey: 'imageUrl' },
  { dbKey: 'active', cast: (value) => toMysqlBoolean(value, true) },
]

function mapService(row) {
  const service = withMongoCompat(row, { image_url: 'imageUrl' })
  if (service?.active !== undefined) service.active = Boolean(service.active)
  return service
}

const Service = {
  async findActive() {
    const rows = await query('SELECT * FROM services WHERE active = 1 ORDER BY created_at DESC')
    return rows.map(mapService)
  },

  async create(data) {
    const payload = {
      description: '',
      imageUrl: '',
      active: true,
      ...data,
    }
    const { sql, values } = buildInsert('services', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async updateById(id, data) {
    const statement = buildUpdate('services', id, data, fields)
    if (!statement) return this.findById(id)
    const result = await query(statement.sql, statement.values)
    return result.affectedRows ? this.findById(id) : null
  },

  async deleteById(id) {
    await query('DELETE FROM services WHERE id = ?', [id])
  },

  async findById(id) {
    const rows = await query('SELECT * FROM services WHERE id = ? LIMIT 1', [id])
    return mapService(rows[0])
  },
}

export default Service
