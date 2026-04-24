// schemas/breedProgram.ts

export default {
    name: 'breedProgram',
    title: 'Breed Program Page',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Page Title (For Internal Reference)',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Section Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'raisingImage1',
            title: 'Raising Section Image 1 (Left)',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'raisingImage2',
            title: 'Raising Section Image 2 (Right)',
            type: 'image',
            options: { hotspot: true },
        }
    ]
}