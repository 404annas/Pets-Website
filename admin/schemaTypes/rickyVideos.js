export default {
  name: 'rickyVideos',
  title: 'Ricky Videos',
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
