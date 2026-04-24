export default {
  name: 'fancyPoodles',
  title: 'Fancy Poodles Page Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Page Title',
      type: 'string',
      initialValue: 'Fancy Poodles Images'
    },
    {
      name: 'heroImageMain',
      title: 'Hero Main Image (Large)',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'heroImageSecondary',
      title: 'Hero Secondary Image (Small)',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'puppyImages',
      title: 'Puppy Litters Images',
      description: 'Upload images for each puppy in order (Calypso, Lupe, Apricot Male, etc.)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'puppyGallery',
          fields: [
            { name: 'puppyId', title: 'Puppy Name/ID', type: 'string' },
            { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] }
          ]
        }
      ]
    },
    {
      name: 'awardImage',
      title: 'Award Image',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}