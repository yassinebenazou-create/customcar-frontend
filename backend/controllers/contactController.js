import Contact from '../models/Contact.js'
import { sendNotification } from '../utils/mailer.js'

export async function createContact(req, res) {
  try {
    const c = await Contact.create(req.body)
    await sendNotification(
      `Contact - ${c.subject}`,
      `De: ${c.name} <${c.email}>\n\n${c.message}`,
    )
    res.status(201).json(c)
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: 'Validation error' })
  }
}

export async function listContacts(_req, res) {
  const items = await Contact.findAll()
  res.json({ items })
}
