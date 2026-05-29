import Various from "@/components/home/Various";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Sustainability } from "@/components/sustainability/sustainability";



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