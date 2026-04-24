export default {
  name: 'yanVideos',
  title: 'Yan Videos',
  type: 'document',
  fields: [
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'file', options: {accept: 'video/*'}}],
    },
  ],
}
