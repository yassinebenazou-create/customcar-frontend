import Portfolio from '../models/Portfolio.js'

export async function listPortfolio(_req, res) {
  const items = await Portfolio.findAll()
  res.json({ items })
}

export async function createPortfolio(req, res) {
  try {
    const p = await Portfolio.create(req.body)
    res.status(201).json(p)
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: 'Unable to create portfolio item' })
  }
}

export async function removePortfolio(req, res) {
  await Portfolio.deleteById(req.params.id)
  res.json({ ok: true })
}
