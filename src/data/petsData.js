import { Heart, Pill, Cpu, ShieldCheck, Activity, Thermometer } from 'lucide-react';

export const petData = [
    {
        id: 1,
        name: "Bella",
        breed: "TOY POODLE",
        description: "Bella is a handsome Toy Poodle with a playful and outgoing personality. She has a boundless amount of energy and loves nothing more than running around and playing with her favorite toys. Bella is incredibly friendly and enjoys meeting new people and dogs.",
        weight: "6 lbs",
        gender: "Female",
        age: "4 months",
        adoptionFee: "$1200",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: "https://images.unsplash.com/photo-1655964107490-4b90c428e4d0?w=1000&q=80",
        health: [
            { name: "Health Check", icon: Heart, active: true },
            { name: "Wormed", icon: Pill, active: true },
            { name: "Microchip", icon: Cpu, active: true },
            { name: "Heartworm treated", icon: ShieldCheck, active: false },
            { name: "Vaccinated", icon: Activity, active: true },
            { name: "De-sexed", icon: Thermometer, active: false },
        ]
    },
    {
        id: 2,
        name: "Max",
        breed: "MINIATURE POODLE",
        description: "Max is an energetic Miniature Poodle who loves outdoor adventures. He is very responsive to training and has a playful spirit that is contagious. He weighs around 14 pounds and is great with active families.",
        weight: "14 lbs",
        gender: "Male",
        age: "6 months",
        adoptionFee: "$1000",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: "https://images.unsplash.com/photo-1602165640367-68676c0ec5f0?w=1000&q=80",
        health: [
            { name: "Health Check", icon: Heart, active: true },
            { name: "Wormed", icon: Pill, active: true },
            { name: "Microchip", icon: Cpu, active: true },
            { name: "Heartworm treated", icon: ShieldCheck, active: true },
            { name: "Vaccinated", icon: Activity, active: true },
            { name: "De-sexed", icon: Thermometer, active: true },
        ]
    },
    {
        id: 3,
        name: "Luna",
        breed: "STANDARD POODLE",
        description: "Luna is a graceful Standard Poodle. She is highly intelligent and calm. She enjoys long walks and being part of family activities. Luna is one year old and weighs around 45 pounds.",
        weight: "45 lbs",
        gender: "Female",
        age: "1 year",
        adoptionFee: "$1500",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: "https://images.unsplash.com/photo-1614261812340-5ee9a3ed33a3?w=1000&q=80",
        health: [
            { name: "Health Check", icon: Heart, active: true },
            { name: "Wormed", icon: Pill, active: true },
            { name: "Microchip", icon: Cpu, active: true },
            { name: "Heartworm treated", icon: ShieldCheck, active: true },
            { name: "Vaccinated", icon: Activity, active: true },
            { name: "De-sexed", icon: Thermometer, active: true },
        ]
    },
    {
        id: 4,
        name: "Charlie",
        breed: "TOY POODLE",
        description: "Charlie is a small Toy Poodle with a big personality. He is very brave and loves to explore. He is 5 months old and is perfect for someone looking for a tiny companion with lots of character.",
        weight: "7 lbs",
        gender: "Male",
        age: "5 months",
        adoptionFee: "$1100",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: "https://images.unsplash.com/photo-1625760492002-15adf1fe003e?w=1000&q=80",
        health: [
            { name: "Health Check", icon: Heart, active: true },
            { name: "Wormed", icon: Pill, active: true },
            { name: "Microchip", icon: Cpu, active: true },
            { name: "Heartworm treated", icon: ShieldCheck, active: true },
            { name: "Vaccinated", icon: Activity, active: true },
            { name: "De-sexed", icon: Thermometer, active: false },
        ]
    }
];