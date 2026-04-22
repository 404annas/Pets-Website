import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
  projectId: 'm951hq80',
  dataset: 'production',
  useCdn: false,
  token: 'skAemfdf2Bvyb1UeycwXmEcFY183905SLPQmahJepXxOhrwjJZukW4eMZ5Z6Qy5npw3TYmI0cK5zymEq8JveN6ZtxK8IiwmrflS5dPM3h27FSqXQd5Lq9gF95RRX7hJjYCSVfbNt52Rmi4xc9IQ3GBzh8QJOjBSyXoIgdBI6Ehpo3W0L5qTB',
  apiVersion: '2023-10-01',
});

// Paths relative to this script
const ASSETS_DIR = path.join(__dirname, '../assets');

// List of images in the exact order as per galleryImages.js (including commented ones)
const imagesToUpload = [
  { file: 'gallery1.jpeg', alt: 'Breeder gallery image 28' },
  { file: 'poodle3.jfif', alt: 'Red poodle portrait 3' },
  { file: 'poodle6.jfif', alt: 'Red poodle portrait 6' },
  { file: 'poodle8.jfif', alt: 'Red poodle portrait 8' },
  { file: 'poodle9.jfif', alt: 'Red poodle portrait 9' },
  { file: 'poodle10.jfif', alt: 'Red poodle portrait 10' },
  { file: 'about7.jfif', alt: 'Breeder gallery image 7' },
  { file: 'poodle11.jfif', alt: 'Red poodle portrait 11' },
  { file: 'poodle12.jfif', alt: 'Red poodle portrait 12' },
  { file: 'poodle15.jfif', alt: 'Red poodle portrait 15' },
  { file: 'poodle13.jfif', alt: 'Red poodle portrait 13' },
  { file: 'about2.jfif', alt: 'Breeder gallery image 2' },
  { file: 'about3.jfif', alt: 'Breeder gallery image 3' },
  { file: 'poodle14.jfif', alt: 'Red poodle portrait 14' },
  { file: 'poodle16.jfif', alt: 'Red poodle portrait 16' },
  { file: 'poodle17.jfif', alt: 'Red poodle portrait 17' },
  { file: 'poodle1.jfif', alt: 'Red poodle portrait 1' },
  { file: 'poodle2.jfif', alt: 'Red poodle portrait 2' },
  { file: 'poodle26.jfif', alt: 'Red poodle portrait 26' },
  { file: 'poodle18.jfif', alt: 'Red poodle portrait 18' },
  { file: 'poodle19.jfif', alt: 'Red poodle portrait 19' },
  { file: 'poodle20.jfif', alt: 'Red poodle portrait 20' },
  { file: 'poodle7.jfif', alt: 'Red poodle portrait 7' },
  { file: 'poodle5.jfif', alt: 'Red poodle portrait 5' },
  { file: 'poodle21.jfif', alt: 'Red poodle portrait 21' },
  { file: 'poodle4.jfif', alt: 'Red poodle portrait 4' },
  { file: 'poodle22.jfif', alt: 'Red poodle portrait 22' },
  { file: 'about9.jfif', alt: 'Breeder gallery image 9' },
  { file: 'about6.jfif', alt: 'Breeder gallery image 6' },
  { file: 'left2.jfif', alt: 'Breeder gallery image 13' },
  { file: 'poodle23.jfif', alt: 'Red poodle portrait 23' },
  { file: 'linda2.jpeg', alt: 'Breeder gallery image 15' },
  { file: 'poodle24.jfif', alt: 'Red poodle portrait 24' },
  { file: 'poodle25.jfif', alt: 'Red poodle portrait 25' },
  { file: 'poodle27.jfif', alt: 'Red poodle portrait 27' },
  { file: 'poodle28.jfif', alt: 'Red poodle portrait 28' },
  { file: 'about1.jfif', alt: 'Breeder gallery image 1' },
  { file: 'small1.jfif', alt: 'Breeder gallery image 24' },
  { file: 'point3.jfif', alt: 'Breeder gallery image 22' },
  { file: 'about4.jfif', alt: 'Breeder gallery image 4' },
  { file: 'about5.jfif', alt: 'Breeder gallery image 5' },
  { file: 'about8.jfif', alt: 'Breeder gallery image 8' },
  { file: 'about10.jfif', alt: 'Breeder gallery image 10' },
  { file: 'about11.jfif', alt: 'Breeder gallery image 11' },
  { file: 'left.jpeg', alt: 'Breeder gallery image 12' },
  { file: 'left3.jfif', alt: 'Breeder gallery image 14' },
  { file: 'linda3.jpeg', alt: 'Breeder gallery image 16' },
  { file: 'mainPoodle.jfif', alt: 'Breeder gallery image 17' },
  { file: 'middle.jpeg', alt: 'Breeder gallery image 18' },
  { file: 'middle2.jfif', alt: 'Breeder gallery image 19' },
  { file: 'point1.jfif', alt: 'Breeder gallery image 20' },
  { file: 'point2.jfif', alt: 'Breeder gallery image 21' },
  { file: 'right.jpeg', alt: 'Breeder gallery image 23' },
  { file: 'small2.jfif', alt: 'Breeder gallery image 25' },
  { file: 'small3.jfif', alt: 'Breeder gallery image 26' },
  { file: 'small4.jfif', alt: 'Breeder gallery image 27' },
  { file: 'linda2.jpeg', alt: 'Breeder gallery image 28' }, // This was pood15 again in the list
];

async function startUpload() {
  console.log(`Starting upload of ${imagesToUpload.length} images...`);
  
  for (let i = 0; i < imagesToUpload.length; i++) {
    const item = imagesToUpload[i];
    const filePath = path.join(ASSETS_DIR, item.file);
    
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}. Skipping.`);
      continue;
    }

    try {
      const asset = await client.assets.upload('image', fs.createReadStream(filePath));
      await client.create({
        _type: 'galleryImage',
        title: item.alt,
        image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
        order: i // Maintain order
      });
      console.log(`Uploaded [${i}]: ${item.file}`);
    } catch (error) {
      console.error(`Error uploading ${item.file}:`, error.message);
    }
  }
  console.log('Upload process completed.');
}

startUpload();
