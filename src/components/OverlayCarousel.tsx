"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

export interface ImageData {
    url: string;
    alt: string;
}

interface OverlayCarouselProps {
    images: ImageData[];
    children?: ReactNode;
}

export default function OverlayCarousel({
    images,
    children,
}: OverlayCarouselProps) {
    const autoplay = useRef(Autoplay({ delay: 5000 }));

    return (
        <div className="relative flex min-h-[500px] md:min-h-[450px]">
            <Carousel
                height="100%"
                style={{ flex: 1 }}
                plugins={[autoplay.current]}
                classNames={{ controls: "hidden" }}>
                {images.map((image, index) => (
                    <Carousel.Slide
                        key={index}
                        className="relative">
                        <Image
                            fill
                            className="object-cover object-center"
                            src={image.url}
                            alt={image.alt}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>

            {children && <div className="absolute inset-0">{children}</div>}
        </div>
    );
}
