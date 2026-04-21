// schemas/aboutPage.ts
export default {
  name: 'aboutPage',
  title: 'About Page Images',
  type: 'document',
  fields: [
    { name: 'journeyMain', title: 'Journey Main Image', type: 'image', options: { hotspot: true } },
    { name: 'journeySmall', title: 'Journey Small Inset Image', type: 'image', options: { hotspot: true } },
    { name: 'missionMain', title: 'Mission Main Image', type: 'image', options: { hotspot: true } },
    { name: 'missionSmall', title: 'Mission Small Inset Image', type: 'image', options: { hotspot: true } },
    { name: 'lindaImg', title: 'Linda DuBose Portrait', type: 'image', options: { hotspot: true } },
    { name: 'facility1', title: 'Facility Image 1', type: 'image', options: { hotspot: true } },
    { name: 'facility2', title: 'Facility Image 2', type: 'image', options: { hotspot: true } },
  ],
}