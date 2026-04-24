import { uploadPoodleAssets } from './scripts/uploadHelper.js'

const mainImage = '../assets/dan4.jpeg'
const gallery = [
  '../assets/dan2.jpeg',
  '../assets/dan3.jpeg',
  '../assets/dan4.jpeg',
  '../assets/dan5.jpeg',
  '../assets/dan6.jpeg',
  '../assets/dan7.jpeg',
  '../assets/dan8.jpeg',
  '../assets/dan9.jpeg',
  '../assets/dan10.jpeg',
  '../assets/dan11.jpeg',
  '../assets/dan12.jpeg',
  '../assets/dan13.jpeg',
  '../assets/dan14.jpeg',
  '../assets/dan15.jpeg',
  '../assets/dan16.jpeg',
  '../assets/dan17.jpeg'
]
const videos = [
  '../assets/danVid1.mp4',
  '../assets/danVid2.mp4',
  '../assets/danVid3.mp4',
  '../assets/danVid4.mp4'
]

uploadPoodleAssets('Dan Dan', 'danDanPictures', 'danDanVideos', mainImage, gallery, videos)
