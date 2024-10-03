import type { ImageData } from "@/components/OverlayCarousel";
import type { Tour } from "@/components/TourCard";
import {
    IconMoneybag,
    IconCamera,
    IconBook,
    IconAward,
} from "@tabler/icons-react";

export const heroCarouselImages: ImageData[] = [
    {
        url: "https://images.unsplash.com/photo-1515888368305-5a7eba31b4e3",
        alt: "",
    },
    {
        url: "https://images.unsplash.com/photo-1470010762743-1fa2363f65ca",
        alt: "",
    },
    {
        url: "https://images.unsplash.com/photo-1471995606044-d5222f0f91d2",
        alt: "",
    },
];

export const features = [
    {
        icon: IconMoneybag,
        title: "Ultimate flexibility",
    },
    {
        icon: IconCamera,
        title: "Memorable experiences",
    },
    {
        icon: IconBook,
        title: "Quality at our core",
    },
    {
        icon: IconAward,
        title: "Award-winning support",
    },
];

export const tours: Tour[] = [
    {
        title: "Cox's Bazar Beach Getaway",
        slug: "coxs-bazar-beach-getaway",
        image: "https://images.unsplash.com/photo-1515888368305-5a7eba31b4e3",
        rating: 4.5,
        reviews: 120,
        startingPrice: 5000,
        duration: "3 days",
    },
    {
        title: "Sundarbans Mangrove Forest Adventure",
        slug: "sundarbans-mangrove-forest-adventure",
        image: "https://images.unsplash.com/photo-1470010762743-1fa2363f65ca",
        rating: 4.8,
        reviews: 85,
        startingPrice: 8000,
        duration: "4 days",
    },
    {
        title: "Srimangal Tea Gardens Tour",
        slug: "srimangal-tea-gardens-tour",
        image: "https://images.unsplash.com/photo-1471995606044-d5222f0f91d2",
        rating: 4.2,
        reviews: 50,
        startingPrice: 3500,
        duration: "2 days",
    },
    {
        title: "Saint Martin's Island Escape",
        slug: "saint-martins-island-escape",
        image: "https://images.unsplash.com/photo-1515888368305-5a7eba31b4e3",
        rating: 4.7,
        reviews: 95,
        startingPrice: 7000,
        duration: "3 days",
    },
    {
        title: "Dhaka City Tour",
        slug: "dhaka-city-tour",
        image: "https://images.unsplash.com/photo-1470010762743-1fa2363f65ca",
        rating: 4.0,
        reviews: 70,
        startingPrice: 2500,
        duration: "1 day",
    },
];
