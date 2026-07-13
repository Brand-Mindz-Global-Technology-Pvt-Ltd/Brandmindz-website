
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"
import Header from "@/components/layout/header"
import { Banner } from "@/components/home/Banner"
import Aboutus from "@/components/home/Aboutus"
import Ouroffering from "@/components/home/Ouroffering"
import WhyChooseUs from "@/components/home/Whychoose"
import OurBlog from "@/components/home/OurBlog"
import Faq from "@/components/home/Faq"
import Various from "@/components/home/Various"
import Footer from "@/components/layout/footer"
import ProvenGrowthPage from "@/components/home/Salesstatistics"

export const metadata = {
  verification: {
    google: "a55gBWr0MHNf8959SEre1QJYxhdr0roTW4B6zPfJMtY",
  },
  alternates: {
    canonical: "https://www.brandmindz.com",
  },
}

export default function HomePage() {
  return (
    <>
      <link rel="canonical" href="https://www.brandmindz.com" />
      <meta name="google-site-verification" content="a55gBWr0MHNf8959SEre1QJYxhdr0roTW4B6zPfJMtY" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"  
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />

      <Header />
      <main>
        <Banner />
        <Aboutus />
        <Ouroffering />
        <WhyChooseUs />
        <ProvenGrowthPage/>
        <OurBlog />
        <Various/>
        <Faq />
     
      </main>
      <Footer />
    </>
  )
}
