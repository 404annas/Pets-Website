import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const client = createClient({
  projectId: 'm951hq80',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-04-24',
  token: process.env.SANITY_TOKEN, // User needs to provide this
})

async function uploadAsset(filePath, type = 'image') {
  console.log(`Uploading ${type}: ${filePath}`)
  const absolutePath = path.resolve(__dirname, '..', 'src', 'assets', filePath.replace('../assets/', ''))
  
  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`)
    return null
  }

  const asset = await client.assets.upload(type, fs.createReadStream(absolutePath), {
    filename: path.basename(absolutePath)
  })
  return asset
}

export async function uploadPoodleAssets(poodleName, pictureDocType, videoDocType, mainImagePath, galleryPaths, videoPaths) {
  if (!process.env.SANITY_TOKEN) {
    console.error('Error: SANITY_TOKEN environment variable is not set.')
    process.exit(1)
  }

  try {
    // 1. Upload Main Image
    let mainImageAsset = null
    if (mainImagePath) {
      mainImageAsset = await uploadAsset(mainImagePath, 'image')
    }

    // 2. Upload Gallery
    const galleryAssets = []
    for (const imgPath of galleryPaths) {
      const asset = await uploadAsset(imgPath, 'image')
      if (asset) {
        galleryAssets.push({
          _key: Math.random().toString(36).substring(2, 9),
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id
          }
        })
      }
    }

    // 3. Create/Update Pictures Document
    console.log(`Creating/Updating ${pictureDocType} document...`)
    const pictureDoc = {
      _type: pictureDocType,
      _id: pictureDocType, // Using type as ID for singleton-like behavior
    }

    if (mainImageAsset) {
      pictureDoc.mainImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: mainImageAsset._id
        }
      }
    }
    pictureDoc.gallery = galleryAssets

    await client.createOrReplace(pictureDoc)
    console.log(`Successfully updated ${pictureDocType}`)

    // 4. Upload Videos
    const videoAssets = []
    for (const vidPath of videoPaths) {
      const asset = await uploadAsset(vidPath, 'file')
      if (asset) {
        videoAssets.push({
          _key: Math.random().toString(36).substring(2, 9),
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: asset._id
          }
        })
      }
    }

    // 5. Create/Update Videos Document
    console.log(`Creating/Updating ${videoDocType} document...`)
    const videoDoc = {
      _type: videoDocType,
      _id: videoDocType,
      videos: videoAssets
    }

    await client.createOrReplace(videoDoc)
    console.log(`Successfully updated ${videoDocType}`)

    console.log(`Done with ${poodleName}!`)
  } catch (err) {
    console.error(`Error uploading assets for ${poodleName}:`, err)
  }
}
