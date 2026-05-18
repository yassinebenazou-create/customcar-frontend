import axios from 'axios'
import { API_BASE } from '@/utils/constants.js'

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
})

export default api

export async function submitContact(payload) {
  const { data } = await api.post('/contacts', payload)
  return data
}

export async function fetchPortfolio() {
  const { data } = await api.get('/portfolio')
  return data
}

export async function fetchTestimonials() {
  const { data } = await api.get('/testimonials')
  return data
}
