// schemas/contactSection.ts
export default {
  name: 'contactSection',
  title: 'Contact Us Section',
  type: 'document',
  fields: [
    {
      name: 'contactImage',
      title: 'Contact Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}