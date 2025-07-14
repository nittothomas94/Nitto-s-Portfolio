import { v2 as cloudinary } from 'cloudinary'
import streamifier from 'streamifier'
import dotenv from 'dotenv'

dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const cloudinaryAdapter = {
  name: 'cloudinary',

  async handleUpload({ file }: { file: Express.Multer.File }) {
    const result: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (err, res) => (err ? reject(err) : resolve(res)),
      )
      streamifier.createReadStream(file.buffer).pipe(uploadStream)
    })

    return {
      filename: result.public_id,
      mimeType: file.mimetype,
      filesize: file.size,
      width: result.width,
      height: result.height,
      url: result.secure_url,
      sizes: {},
    }
  },

  async handleDelete({ key }: { key: string }) {
    await cloudinary.uploader.destroy(key, { resource_type: 'auto' })
  },
} as any
