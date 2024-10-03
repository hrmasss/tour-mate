import OverlayCarousel from "@/components/OverlayCarousel";
import { heroCarouselImages } from "@/lib/content-data";

export default function HomePage() {
    return (
        <main>
            <OverlayCarousel images={heroCarouselImages}>
                <div className="size-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 py-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
                        Go to world's end and beyond.
                    </h1>
                    <p className="text-xl md:text-2xl text-center">
                        Let us help you to make your own adventures.
                    </p>
                </div>
            </OverlayCarousel>
        </main>
    );
}
