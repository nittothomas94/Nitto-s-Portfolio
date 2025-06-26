import type { Config } from 'src/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

type Global = keyof Config['globals']

let resolvedConfig: Awaited<typeof configPromise> | null = null

async function getGlobal(slug: Global, depth = 0) {
  if (!resolvedConfig) {
    const configResult = await configPromise
    resolvedConfig = {
      ...configResult,
      secret: process.env.PAYLOAD_SECRET || 'your-fallback-secret',
    }
  }

  const payload = await getPayload({
    config: resolvedConfig,
  })

  const global = await payload.findGlobal({
    slug,
    depth,
  })

  return global
}

export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(() => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  })
