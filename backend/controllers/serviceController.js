import Service from '../models/Service.js'

export async function listServices(_req, res) {
  const items = await Service.findActive()
  res.json({ items })
}

export async function createService(req, res) {
  try {
    const s = await Service.create(req.body)
    res.status(201).json(s)
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: 'Unable to create service' })
  }
}

export async function patchService(req, res) {
  const s = await Service.updateById(req.params.id, req.body)
  if (!s) return res.status(404).json({ message: 'Not found' })
  res.json(s)
}

export async function removeService(req, res) {
  await Service.deleteById(req.params.id)
  res.json({ ok: true })
}
