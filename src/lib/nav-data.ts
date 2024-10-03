import {
    IconCalendar,
    IconClock,
    IconStar,
    IconGlobe,
} from "@tabler/icons-react";

export const phoneNumber = "999";
export const homeLink = { title: "Home", url: "/" };
export const toursLink = { title: "Tours", url: "/tours" };
export const navLinks = [
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
];

export const tourTypes = [
    {
        icon: IconCalendar,
        title: "Same Day Tour",
        description:
            "Explore local attractions with our same day guided tours.",
    },
    {
        icon: IconClock,
        title: "Weekend Tour",
        description:
            "Make the most of your weekends with exciting tour packages.",
    },
    {
        icon: IconStar,
        title: "Exclusive Tours",
        description:
            "Exclusive tours for a unique and personalized experience.",
    },
    {
        icon: IconGlobe,
        title: "Adventure Tours",
        description: "Thrilling adventure tours to breathtaking destinations.",
    },
];
