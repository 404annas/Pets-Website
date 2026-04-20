export default {
  name: 'pageImages',
  title: 'Page Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Image Identity (Unique Name)',
      type: 'string',
      description: 'E.g., "home-hero", "about-main", "logo"'
    },
    {
      name: 'pageName',
      title: 'Konse Page ki hai?',
      type: 'string',
      description: 'E.g., Home, About, Contact'
    },
    {
      name: 'image',
      title: 'Upload Image',
      type: 'image',
      options: {
        hotspot: true, // Isse aap image crop/focus kar sakte hain
      },
    },
  ],
}