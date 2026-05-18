export function toMysqlBoolean(value, fallback = false) {
  if (value === undefined) return fallback ? 1 : 0
  return value ? 1 : 0
}

export function toApiDate(value) {
  return value instanceof Date ? value.toISOString() : value
}

export function withMongoCompat(row, map = {}) {
  if (!row) return null

  const output = {}
  for (const [key, value] of Object.entries(row)) {
    output[map[key] || key] = value
  }

  if (row.id !== undefined) {
    output.id = row.id
    output._id = String(row.id)
  }

  if (row.created_at !== undefined) {
    output.createdAt = toApiDate(row.created_at)
    delete output.created_at
  }

  if (row.updated_at !== undefined) {
    output.updatedAt = toApiDate(row.updated_at)
    delete output.updated_at
  }

  return output
}

export function buildInsert(table, data, fields) {
  const columns = []
  const placeholders = []
  const values = []

  for (const field of fields) {
    const apiKey = field.apiKey || field.dbKey
    if (Object.hasOwn(data, apiKey) && data[apiKey] !== undefined) {
      columns.push(field.dbKey)
      placeholders.push('?')
      values.push(field.cast ? field.cast(data[apiKey]) : data[apiKey])
    }
  }

  if (!columns.length) {
    throw new Error(`No valid fields provided for ${table}`)
  }

  return {
    sql: `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`,
    values,
  }
}

export function buildUpdate(table, id, data, fields) {
  const assignments = []
  const values = []

  for (const field of fields) {
    const apiKey = field.apiKey || field.dbKey
    if (Object.hasOwn(data, apiKey) && data[apiKey] !== undefined) {
      assignments.push(`${field.dbKey} = ?`)
      values.push(field.cast ? field.cast(data[apiKey]) : data[apiKey])
    }
  }

  if (!assignments.length) return null

  return {
    sql: `UPDATE ${table} SET ${assignments.join(', ')} WHERE id = ?`,
    values: [...values, id],
  }
}
