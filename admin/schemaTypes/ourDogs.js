// schemas/ourDogs.ts
export default {
  name: 'ourDogsPage',
  type: 'document',
  title: 'Our Dogs Page Content',
  fields: [
    {
      name: 'heroCollage',
      type: 'array',
      title: 'Hero Collage (6 Images)',
      of: [{ type: 'image' }],
      description: 'Upload exactly 6 images for the hero section collage.'
    },
    {
      name: 'rubyImage',
      type: 'image',
      title: 'Dam: Ruby Image',
    },
    {
      name: 'bellaImage',
      type: 'image',
      title: 'Dam: Bella Image',
    },
    {
      name: 'miloImage',
      type: 'image',
      title: 'Dam: Milo Image',
    },
    {
      name: 'jasperImage',
      type: 'image',
      title: 'Sire: Jasper Image',
    },
    {
      name: 'retiredImage',
      type: 'image',
      title: 'Retired Section Image',
    },
  ],
}