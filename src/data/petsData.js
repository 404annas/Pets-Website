import { Heart, Pill, Cpu, ShieldCheck, Activity, Thermometer, Projector } from 'lucide-react';

import mainPoodle from "../assets/poodle18.jfif";
import poodle1 from "../assets/left3.jfif"
import poodle2 from "../assets/poodle11.jfif"
import poodle3 from "../assets/mainPoodle.jfif"
import poodle4 from "../assets/poodle4.jfif"
import poodle5 from "../assets/poodle5.jfif"
import poodle6 from "../assets/poodle6.jfif"
import poodle7 from "../assets/poodle7.jfif"
import poodle8 from "../assets/poodle3.jfif"
import poodle10 from "../assets/poodle13.jfif"
import poodle9 from "../assets/small1.jfif"
import poodle11 from "../assets/small2.jfif"
import poodle13 from "../assets/poodle21.jfif"
import poodle14 from "../assets/poodle22.jfif"
import poodle15 from "../assets/poodle23.jfif"
import poodle16 from "../assets/poodle24.jfif"
import poodle17 from "../assets/poodle25.jfif"

import dan1 from "../assets/dan1.jpeg";
import dan2 from "../assets/dan2.jpeg";
import dan3 from "../assets/dan3.jpeg";
import dan4 from "../assets/dan4.jpeg";
import dan5 from "../assets/dan5.jpeg";
import dan6 from "../assets/dan6.jpeg";
import dan7 from "../assets/dan7.jpeg";
import dan8 from "../assets/dan8.jpeg";
import dan9 from "../assets/dan9.jpeg";
import dan10 from "../assets/dan10.jpeg";
import dan11 from "../assets/dan11.jpeg";
import dan12 from "../assets/dan12.jpeg";
import dan13 from "../assets/dan13.jpeg";
import dan14 from "../assets/dan14.jpeg";
import dan15 from "../assets/dan15.jpeg";
import dan16 from "../assets/dan16.jpeg";
import dan17 from "../assets/dan17.jpeg";   

import danVid1 from "../assets/danVid1.mp4";
import danVid2 from "../assets/danVid2.mp4";
import danVid3 from "../assets/danVid3.mp4";
import danVid4 from "../assets/danVid4.mp4";

import poodleVideo1 from "../assets/video1.mp4";
import poodleVideo2 from "../assets/video2.mp4";
import poodleVideo3 from "../assets/video3.mp4";
import poodleVideo4 from "../assets/video4.mp4";
import poodleVideo5 from "../assets/video5.mp4";
import poodleVideo6 from "../assets/video6.mp4";
import poodleVideo7 from "../assets/video7.mp4";
import poodleVideo8 from "../assets/video8.mp4";
import poodleVideo9 from "../assets/video9.mp4";

const danGallery = [
    dan2, dan3, dan4, dan5, dan6, dan7, dan8, dan9, dan10, dan11, dan12, dan13, dan14, dan15, dan16, dan17
];

const danVideos = [
    danVid1, danVid2, danVid3, danVid4
];

export const petData = [
    {
        id: 1,
        name: "Ricky",
        breed: "TOY POODLE",
        color: "Deep Red",
        estimatedSize: "Small Toy Class",
        birthdate: "December 15, 2025",
        personalitySnapshot: "Warm snuggler, curious about people and sounds.",
        description: "Bella is a handsome Toy Poodle with a playful and outgoing personality. She has a boundless amount of energy and loves nothing more than running around and playing with her favorite toys. Bella is incredibly friendly and enjoys meeting new people and dogs.",
        weight: "35 oz",
        projectedAdultWeight: "5 - 5.5 pounds",
        fatherWeight: "5.5 lb",
        motherWeight: "5 lb",
        gender: "Male",
        age: "4 months",
        adoptionFee: "5000",
        status: "SOLD",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: mainPoodle,
        gallery: [
            poodle1, poodle2, poodle3, poodle4, poodle5, poodle6, poodle7, poodle8, poodle10, poodle9, poodle11, poodle13, poodle14, poodle15, poodle16, poodle17
        ],
        videos: [
            poodleVideo1, poodleVideo2, poodleVideo3, poodleVideo4, poodleVideo5, poodleVideo6, poodleVideo7, poodleVideo8, poodleVideo9
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
    {
        id: 2,
        name: "YAN",
        breed: "TOY POODLE",
        color: "Deep Red",
        estimatedSize: "Small Toy Class",
        birthdate: "January 10, 2026",
        parents: "Poppy and Pepe",
        personalitySnapshot: "Small and sweet, loves to play and cuddle.",
        description: "YAN is a tiny and adorable Toy Poodle from Poppy and Pepe. She has a sweet temperament and loves being the center of attention. Perfect for a loving home looking for a small companion.",
        weight: "30 oz",
        projectedAdultWeight: "4.5 - 5 pounds",
        fatherWeight: "5.5 lb",
        motherWeight: "5 lb",
        gender: "Female",
        age: "3 months",
        adoptionFee: "5000",
        status: "AVAILABLE",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: dan1,
        gallery: danGallery,
        videos: danVideos,
        health: [
            { name: "Health Check", icon: Heart, active: true },
            { name: "Wormed", icon: Pill, active: true },
            { name: "Microchip", icon: Cpu, active: true },
            { name: "Heartworm treated", icon: ShieldCheck, active: true },
            { name: "Vaccinated", icon: Activity, active: true },
            { name: "De-sexed", icon: Thermometer, active: false },
        ]
    },
    {
        id: 3,
        name: "DAN DAN",
        breed: "TOY POODLE",
        color: "Deep Red",
        estimatedSize: "Toy Class",
        birthdate: "January 10, 2026",
        parents: "Poppy and Pepe",
        personalitySnapshot: "The bigger sister, energetic, friendly, and smart.",
        description: "DAN DAN is the energetic bigger sister of YAN, born to Poppy and Pepe. She is highly intelligent and enjoys exploring. She's a wonderful companion with a great personality.",
        weight: "40 oz",
        projectedAdultWeight: "5.5 - 6 pounds",
        fatherWeight: "5.5 lb",
        motherWeight: "5 lb",
        gender: "Female",
        age: "3 months",
        adoptionFee: "4500",
        status: "AVAILABLE",
        goodWithDogs: "Yes",
        goodWithKids: "Yes",
        image: dan4,
        gallery: danGallery, // Showing 17 images total
        videos: danVideos, // Showing 4 videos total
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