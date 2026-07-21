import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PartnerWithUs from "@/components/partner-with-us/PartnerWithUs";
import "@/style/industries/industries.css";

export { metadata } from "@/components/partner-with-us/PartnerWithUs";

export default function PartnerWithUsPage() {
  return (
    <>
      <Header />
      <PartnerWithUs />
      <Footer />
    </>
  );
}


