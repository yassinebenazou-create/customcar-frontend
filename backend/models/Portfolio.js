import { query } from '../config/db.js'
import { buildInsert, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'title' },
  { dbKey: 'brand' },
  { dbKey: 'media_type', apiKey: 'mediaType' },
  { dbKey: 'media_url', apiKey: 'mediaUrl' },
  { dbKey: 'before_url', apiKey: 'beforeUrl' },
  { dbKey: 'after_url', apiKey: 'afterUrl' },
  { dbKey: 'description' },
]

function mapPortfolio(row) {
  return withMongoCompat(row, {
    media_type: 'mediaType',
    media_url: 'mediaUrl',
    before_url: 'beforeUrl',
    after_url: 'afterUrl',
  })
}

const Portfolio = {
  async findAll() {
    const rows = await query('SELECT * FROM portfolio_items ORDER BY created_at DESC')
    return rows.map(mapPortfolio)
  },

  async create(data) {
    const payload = {
      mediaType: 'image',
      beforeUrl: '',
      afterUrl: '',
      description: '',
      ...data,
    }
    const { sql, values } = buildInsert('portfolio_items', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async deleteById(id) {
    await query('DELETE FROM portfolio_items WHERE id = ?', [id])
  },

  async findById(id) {
    const rows = await query('SELECT * FROM portfolio_items WHERE id = ? LIMIT 1', [id])
    return mapPortfolio(rows[0])
  },
}

export default Portfolio
