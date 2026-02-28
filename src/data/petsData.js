import { Heart, Pill, Cpu, ShieldCheck, Activity, Thermometer } from 'lucide-react';

export const petData = [
    {
        id: 1,
        name: "Ricky",
        breed: "TOY POODLE",
        color: "Deep Red",
        estimatedSize: "Small Toy Class",
        birthdate: "October 15, 2025",
        goHomeWindow: "December 10–12, 2025",
        personalitySnapshot: "Warm snuggler, curious about people and sounds.",
        description: "Bella is a handsome Toy Poodle with a playful and outgoing personality. She has a boundless amount of energy and loves nothing more than running around and playing with her favorite toys. Bella is incredibly friendly and enjoys meeting new people and dogs.",
        weight: "6 lbs",
        gender: "Female",
        age: "4 months",
        adoptionFee: "$1200",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: "https://images.unsplash.com/photo-1655964107490-4b90c428e4d0?w=1000&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?w=1000&q=80",
            "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000&q=80",
        ],
        health: [
            { name: "Health Check", icon: Heart, active: true },
            { name: "Wormed", icon: Pill, active: true },
            { name: "Microchip", icon: Cpu, active: true },
            { name: "Heartworm treated", icon: ShieldCheck, active: true },
            { name: "Vaccinated", icon: Activity, active: true },
            { name: "De-sexed", icon: Thermometer, active: false },
        ]
    },
    // {
    //     id: 2,
    //     name: "Rufus",
    //     breed: "MINIATURE POODLE",
    //     color: "Rich Red with Black Points",
    //     estimatedSize: "Miniature Class",
    //     birthdate: "Oct 15, 2025",
    //     goHomeWindow: "Dec 10–12, 2025",
    //     personalitySnapshot: "Active explorer, highly responsive to training and play.",
    //     description: "Rufus is an energetic Miniature Poodle who loves outdoor adventures. He is very responsive to training and has a playful spirit that is contagious. He weighs around 14 pounds and is great with active families.",
    //     weight: "14 lbs",
    //     gender: "Male",
    //     age: "6 months",
    //     adoptionFee: "$1000",
    //     goodWithDogs: "Yes",
    //     goodWithKids: "Yes",
    //     image: "https://images.unsplash.com/photo-1602165640367-68676c0ec5f0?w=1000&q=80",
    //     gallery: [
    //         "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=1000&q=80",
    //         "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1000&q=80"
    //     ],
    //     health: [
    //         { name: "Health Check", icon: Heart, active: true },
    //         { name: "Wormed", icon: Pill, active: true },
    //         { name: "Microchip", icon: Cpu, active: true },
    //         { name: "Heartworm treated", icon: ShieldCheck, active: true },
    //         { name: "Vaccinated", icon: Activity, active: true },
    //         { name: "De-sexed", icon: Thermometer, active: true },
    //     ]
    // },
    // {
    //     id: 3,
    //     name: "Luna",
    //     breed: "STANDARD POODLE",
    //     color: "Apricot Red",
    //     estimatedSize: "Standard Class",
    //     birthdate: "Sept 20, 2025",
    //     goHomeWindow: "Waitlist",
    //     personalitySnapshot: "Graceful, calm, and highly intelligent companion.",
    //     description: "Luna is a graceful Standard Poodle. She is highly intelligent and calm. She enjoys long walks and being part of family activities. Luna is one year old and weighs around 45 pounds.",
    //     weight: "45 lbs",
    //     gender: "Female",
    //     age: "1 year",
    //     adoptionFee: "$1500",
    //     goodWithDogs: "Yes",
    //     goodWithKids: "Yes",
    //     image: "https://images.unsplash.com/photo-1614261812340-5ee9a3ed33a3?w=1000&q=80",
    //     gallery: [
    //         "https://images.unsplash.com/photo-1625760492002-15adf1fe003e?w=1000&q=80",
    //         "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1000&q=80"
    //     ],
    //     health: [
    //         { name: "Health Check", icon: Heart, active: true },
    //         { name: "Wormed", icon: Pill, active: true },
    //         { name: "Microchip", icon: Cpu, active: true },
    //         { name: "Heartworm treated", icon: ShieldCheck, active: true },
    //         { name: "Vaccinated", icon: Activity, active: true },
    //         { name: "De-sexed", icon: Thermometer, active: true },
    //     ]
    // },
    // {
    //     id: 4,
    //     name: "Charlie",
    //     breed: "TOY POODLE",
    //     color: "Deep Red",
    //     estimatedSize: "Toy Standard",
    //     birthdate: "October 15, 2025",
    //     goHomeWindow: "December 10–12, 2025",
    //     personalitySnapshot: "Playful explorer, loves gentle games and adventure.",
    //     description: "Charlie is a small Toy Poodle with a big personality. He is very brave and loves to explore. He is 5 months old and is perfect for someone looking for a tiny companion with lots of character.",
    //     weight: "7 lbs",
    //     gender: "Male",
    //     age: "5 months",
    //     adoptionFee: "$1100",
    //     goodWithDogs: "Yes",
    //     goodWithKids: "Yes",
    //     image: "https://images.unsplash.com/photo-1625760492002-15adf1fe003e?w=1000&q=80",
    //     gallery: [
    //         "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?w=1000&q=80",
    //         "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000&q=80"
    //     ],
    //     health: [
    //         { name: "Health Check", icon: Heart, active: true },
    //         { name: "Wormed", icon: Pill, active: true },
    //         { name: "Microchip", icon: Cpu, active: true },
    //         { name: "Heartworm treated", icon: ShieldCheck, active: true },
    //         { name: "Vaccinated", icon: Activity, active: true },
    //         { name: "De-sexed", icon: Thermometer, active: false },
    //     ]
    // }
];