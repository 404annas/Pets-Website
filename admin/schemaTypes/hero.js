export default {
  name: 'hero', // Component pehchanne ke liye
  title: 'Hero Section', // Studio mein nazar aane wala naam
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Hero Section Content',
      readOnly: true,
    },
    {
      name: 'heroMain',
      title: 'Main Hero Image (Dog)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroBottom',
      title: 'Bottom Curve Image',
      type: 'image',
    },
    {
      name: 'heroPaw',
      title: 'Paw Decoration Image',
      type: 'image',
    },
    {
      name: 'poodleTrigger',
      title: 'Small Circle Poodle (Trigger)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'poodleModal',
      title: 'Popup Modal Poodle Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'manSupport',
      title: 'Support Man Icon (Bottom Right)',
      type: 'image',
    },
  ],
}