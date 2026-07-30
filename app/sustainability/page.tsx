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
