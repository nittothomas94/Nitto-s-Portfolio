declare module 'payload/uploads' {
  export interface FileData {
    filename: string
    mimeType: string
    filesize: number
    width?: number
    height?: number
    url?: string
  }

  export interface UploadOptions {
    file: {
      buffer: Buffer
      filename: string
      mimetype: string
      size: number
    }
  }

  export interface GeneratedAdapter {
    upload: (args: UploadOptions) => Promise<FileData>
    delete?: (filename: string) => Promise<void>
  }
}
