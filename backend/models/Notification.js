import { query } from '../config/db.js'
import { buildInsert, toMysqlBoolean, withMongoCompat } from './modelUtils.js'

const fields = [
  { dbKey: 'user_id', apiKey: 'userId' },
  { dbKey: 'title' },
  { dbKey: 'message' },
  { dbKey: 'type' },
  { dbKey: 'is_read', apiKey: 'isRead', cast: (value) => toMysqlBoolean(value) },
]

function mapNotification(row) {
  const notification = withMongoCompat(row, {
    user_id: 'userId',
    is_read: 'isRead',
  })
  if (notification?.isRead !== undefined) notification.isRead = Boolean(notification.isRead)
  return notification
}

const Notification = {
  async create(data) {
    const payload = {
      type: 'system',
      isRead: false,
      ...data,
    }
    const { sql, values } = buildInsert('notifications', payload, fields)
    const result = await query(sql, values)
    return this.findById(result.insertId)
  },

  async findById(id) {
    const rows = await query('SELECT * FROM notifications WHERE id = ? LIMIT 1', [id])
    return mapNotification(rows[0])
  },

  async findForUser(userId) {
    const rows = await query(
      'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC',
      [userId],
    )
    return rows.map(mapNotification)
  },

  async markRead(id) {
    await query('UPDATE notifications SET is_read = 1 WHERE id = ?', [id])
    return this.findById(id)
  },
}

export default Notification
