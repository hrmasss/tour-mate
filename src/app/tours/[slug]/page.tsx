interface TourDetailsPageProps {
    params: {
        slug: string;
    };
}

export default function TourDetailsPage({ params }: TourDetailsPageProps) {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold">Tour Details</h1>
            <p className="mt-8 text-xl">{params.slug}</p>
        </main>
    );
}
