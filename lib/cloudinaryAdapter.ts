import type { UploadOptions, FileData, GeneratedAdapter } from 'payload/config'
import { v2 as cloudinary } from 'cloudinary'
const streamifier = require('streamifier')

require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const cloudinaryAdapter: GeneratedAdapter = {
  async upload({ file }: UploadOptions): Promise<FileData> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: 'auto' },
        (error, result) => {
          if (error) return reject(error)
          if (!result) return reject(new Error('No result from Cloudinary'))

          resolve({
            filename: result.public_id,
            mimeType: file.mimetype,
            filesize: file.size,
            width: result.width,
            height: result.height,
            url: result.secure_url,
          })
        },
      )

      streamifier.createReadStream(file.buffer).pipe(uploadStream)
    })
  },

  async delete(filename: string) {
    await cloudinary.uploader.destroy(filename, { resource_type: 'auto' })
  },
}
