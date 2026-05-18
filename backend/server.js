import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDb, pool } from './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import portfolioRoutes from './routes/portfolioRoutes.js'
import testimonialRoutes from './routes/testimonialRoutes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

app.set('trust proxy', 1)
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/api/health', (_req, res) => res.json({ ok: true }))

app.use('/api/contacts', contactRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/testimonials', testimonialRoutes)

app.use('/api', (_req, res) => {
  res.status(404).json({ message: 'API route not found' })
})

app.use((err, _req, res, _next) => {
  console.error(err)
  const status = err.status || 500
  const message = process.env.NODE_ENV === 'production' && status === 500 ? 'Server error' : err.message
  res.status(status).json({ message: message || 'Server error' })
})

const PORT = process.env.PORT || 5000

async function boot() {
  await connectDb()
  app.listen(PORT, () => {
    console.log(`CUSTOMCAR API listening on http://localhost:${PORT}`)
  })
}

boot().catch((err) => {
  console.error('Failed to boot API', err)
  process.exit(1)
})

async function shutdown(signal) {
  console.log(`${signal} received, closing database pool`)
  await pool.end()
  process.exit(0)
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))
