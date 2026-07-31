import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Sustainability } from "@/components/sustainability/sustainability";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Sustainability | Driving Responsible Business Growth | Brand Mindz Global",
    },
    description: "Explore Brand Mindz Global's commitment to sustainability through ethical business practices, innovation, and responsible growth that creates lasting impact.",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
        canonical: "https://www.brandmindz.com/sustainability",
    },
    openGraph: {
        type: "website",
        url: "https://brandmindz.com/sustainability",
        title: "Sustainability at Brand Mindz Global | Growth Systems Built to Last",
        description: "Discover how sustainability shapes the way we work — building scalable, ethical growth systems for clients instead of short-term campaign spikes.",
        images: [
            {
                url: "/logo.png",
                alt: "Sustainability at Brand Mindz Global — ethical, long-term growth systems",
            },
        ],
    },
};


export default function sustainability() {
    return (
        <>
            <Header />
            <main>
                <Sustainability />
                <Various />


                {/* <BrandingService/> */}
            </main>
            <Footer />
        </>

    )
}
