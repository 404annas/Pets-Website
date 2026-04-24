export default {
  name: 'rickyPictures',
  title: 'Ricky Pictures',
  type: 'document',
  fields: [
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
