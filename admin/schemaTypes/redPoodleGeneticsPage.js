export default {
  name: 'redPoodleGenetics',
  title: 'Red Poodle Genetics Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title (Internal Use)',
      type: 'string',
      initialValue: 'Red Poodle Genetics Images'
    },
    {
      name: 'heroImage1',
      title: 'Hero Image 1 (Left/Top)',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
    {
      name: 'heroImage2',
      title: 'Hero Image 2 (Right/Bottom)',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }
  ]
}