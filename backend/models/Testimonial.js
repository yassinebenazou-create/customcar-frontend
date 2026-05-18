import { query } from '../config/db.js'
import { buildInsert, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'name' },
  { dbKey: 'quote' },
  { dbKey: 'role' },
  { dbKey: 'vehicle' },
  { dbKey: 'image_url', apiKey: 'imageUrl' },
]

function mapTestimonial(row) {
  return withMongoCompat(row, { image_url: 'imageUrl' })
}

const Testimonial = {
  async findAll() {
    const rows = await query('SELECT * FROM testimonials ORDER BY created_at DESC')
    return rows.map(mapTestimonial)
  },

  async create(data) {
    const payload = {
      role: '',
      vehicle: '',
      imageUrl: '',
      ...data,
    }
    const { sql, values } = buildInsert('testimonials', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async deleteById(id) {
    await query('DELETE FROM testimonials WHERE id = ?', [id])
  },

  async findById(id) {
    const rows = await query('SELECT * FROM testimonials WHERE id = ? LIMIT 1', [id])
    return mapTestimonial(rows[0])
  },
}

export default Testimonial
