import Testimonial from '../models/Testimonial.js'

export async function listTestimonials(_req, res) {
  const items = await Testimonial.findAll()
  res.json({ items })
}

export async function createTestimonial(req, res) {
  try {
    const t = await Testimonial.create(req.body)
    res.status(201).json(t)
  } catch (e) {
    console.error(e)
    res.status(400).json({ message: 'Unable to create testimonial' })
  }
}

export async function removeTestimonial(req, res) {
  await Testimonial.deleteById(req.params.id)
  res.json({ ok: true })
}
