export default {
  name: 'danDanVideos',
  title: 'Dan Dan Videos',
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
