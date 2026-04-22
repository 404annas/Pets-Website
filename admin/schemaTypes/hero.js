// schemaTypes/hero.ts
export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'leftImage',
      title: 'Left Image (Cat)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'middleImage',
      title: 'Middle Image (Dog)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'rightImage',
      title: 'Right Image (Rabbit)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}