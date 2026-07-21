import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BrandMindzConnect from "@/components/brand-mindz-connect/BrandMindzConnect";
import "@/style/industries/industries.css";

export { metadata } from "@/components/brand-mindz-connect/BrandMindzConnect";

export default function BrandMindzConnectPage() {
  return (
    <>
      <Header />
      <BrandMindzConnect />
      <Footer />
    </>
  );
}


