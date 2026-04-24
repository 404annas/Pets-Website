import { uploadPoodleAssets } from './scripts/uploadHelper.js'

const mainImage = '../assets/poodle18.jfif'
const gallery = [
  '../assets/left3.jfif',
  '../assets/poodle11.jfif',
  '../assets/mainPoodle.jfif',
  '../assets/poodle4.jfif',
  '../assets/poodle5.jfif',
  '../assets/poodle6.jfif',
  '../assets/poodle7.jfif',
  '../assets/poodle3.jfif',
  '../assets/poodle13.jfif',
  '../assets/small1.jfif',
  '../assets/small2.jfif',
  '../assets/poodle21.jfif',
  '../assets/poodle22.jfif',
  '../assets/poodle23.jfif',
  '../assets/poodle24.jfif',
  '../assets/poodle25.jfif'
]
const videos = [
  '../assets/video1.mp4',
  '../assets/video2.mp4',
  '../assets/video3.mp4',
  '../assets/video4.mp4',
  '../assets/video5.mp4',
  '../assets/video6.mp4',
  '../assets/video7.mp4',
  '../assets/video8.mp4',
  '../assets/video9.mp4'
]

uploadPoodleAssets('Ricky', 'rickyPictures', 'rickyVideos', mainImage, gallery, videos)
