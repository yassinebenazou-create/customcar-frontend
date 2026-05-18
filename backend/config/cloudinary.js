import { v2 as cloudinary } from 'cloudinary'

export function configureCloudinary() {
  if (process.env.CLOUDINARY_URL) {
    cloudinary.config(true)
    return cloudinary
  }
  if (
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  ) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })
    return cloudinary
  }
  return null
}

export async function uploadFileMulter(file) {
  const cld = configureCloudinary()
  if (!cld || !file?.buffer) return null
  return new Promise((resolve, reject) => {
    const stream = cld.uploader.upload_stream(
      { folder: 'customcar', resource_type: 'auto' },
      (err, res) => {
        if (err) reject(err)
        else resolve(res)
      },
    )
    stream.end(file.buffer)
  })
}
