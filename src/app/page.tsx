import FeatureSection from "@/components/FeaturesSection";
import FilterSearch from "@/components/FilterSearch";
import OverlayCarousel from "@/components/OverlayCarousel";
import { heroCarouselImages, tours } from "@/lib/content-data";
import TourCard from "@/components/TourCard";

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

                    <FilterSearch className="mt-8" />
                </div>
            </OverlayCarousel>

            <div className="px-4 sm:px-8 max-w-7xl mx-auto">
                <FeatureSection />

                <div className="flex flex-col py-12">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center pb-8">
                        Get inspired for your next tour
                    </h3>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 py-6">
                        {tours.map((tour) => (
                            <TourCard tour={tour} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
