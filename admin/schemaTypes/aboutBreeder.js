// schemas/aboutBreeder.ts
export default {
  name: 'aboutBreeder',
  type: 'document',
  title: 'About Breeder Images',
  fields: [
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Section Image (Middle Poodle)',
    },
    {
      name: 'originImage',
      type: 'image',
      title: 'Origin Section Image (Small Poodle)',
    },
    {
      name: 'mentorshipImage',
      type: 'image',
      title: 'Mentorship Section Image',
    },
    {
      name: 'raisingImage',
      type: 'image',
      title: 'Raising Puppy Section Image',
    },
    {
      name: 'moment1',
      type: 'image',
      title: 'Moment 1: Opening Eyes',
    },
    {
      name: 'moment2',
      type: 'image',
      title: 'Moment 2: Wobbly Steps',
    },
    {
      name: 'moment3',
      type: 'image',
      title: 'Moment 3: Quiet Sleep',
    },
  ],
}