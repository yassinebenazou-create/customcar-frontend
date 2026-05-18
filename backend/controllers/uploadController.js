import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import multer from 'multer'
import { uploadFileMulter } from '../config/cloudinary.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 80 * 1024 * 1024 },
})

export async function uploadHandler(req, res) {
  try {
    const file = req.file
    if (!file) return res.status(400).json({ message: 'No file' })

    const uploaded = await uploadFileMulter(file)
    if (uploaded) {
      return res.json({ url: uploaded.secure_url, resourceType: uploaded.resource_type })
    }

    const uploadDir = path.join(__dirname, '../uploads')
    fs.mkdirSync(uploadDir, { recursive: true })
    const name = `${Date.now()}-${file.originalname.replace(/[^\w.]+/g, '_')}`
    const dest = path.join(uploadDir, name)
    fs.writeFileSync(dest, file.buffer)
    const url = `${req.protocol}://${req.get('host')}/uploads/${name}`
    const resourceType = file.mimetype.startsWith('video') ? 'video' : 'image'
    return res.json({ url, resourceType })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Upload failed' })
  }
}
