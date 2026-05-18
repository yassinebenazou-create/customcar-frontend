import { query } from '../config/db.js'
import { buildInsert, buildUpdate, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'user_id', apiKey: 'userId' },
  { dbKey: 'service_id', apiKey: 'serviceId' },
  { dbKey: 'full_name', apiKey: 'fullName' },
  { dbKey: 'phone' },
  { dbKey: 'email' },
  { dbKey: 'brand' },
  { dbKey: 'model' },
  { dbKey: 'vin' },
  { dbKey: 'service_title', apiKey: 'serviceTitle' },
  { dbKey: 'preferred_date', apiKey: 'preferredDate' },
  { dbKey: 'preferred_time', apiKey: 'preferredTime' },
  { dbKey: 'message' },
  { dbKey: 'status' },
]

function mapAppointment(row) {
  return withMongoCompat(row, {
    user_id: 'userId',
    service_id: 'serviceId',
    full_name: 'fullName',
    service_title: 'serviceTitle',
    preferred_date: 'preferredDate',
    preferred_time: 'preferredTime',
  })
}

const Appointment = {
  async create(data) {
    const payload = {
      status: 'pending',
      ...data,
    }
    const { sql, values } = buildInsert('appointments', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async findAll() {
    const rows = await query('SELECT * FROM appointments ORDER BY created_at DESC')
    return rows.map(mapAppointment)
  },

  async findById(id) {
    const rows = await query('SELECT * FROM appointments WHERE id = ? LIMIT 1', [id])
    return mapAppointment(rows[0])
  },

  async updateById(id, data) {
    const statement = buildUpdate('appointments', id, data, fields)
    if (!statement) return this.findById(id)
    const result = await query(statement.sql, statement.values)
    return result.affectedRows ? this.findById(id) : null
  },
}

export default Appointment
