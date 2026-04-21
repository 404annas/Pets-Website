// schemas/soldSection.js
export default {
  name: 'soldSection',
  title: 'Sold Section',
  type: 'document',
  fields: [
    {
      name: 'soldPetImage',
      title: 'Sold Pet Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}