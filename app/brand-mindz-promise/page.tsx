import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BrandMindzPromise from "@/components/brand-mindz-promise/Brand-Mindz-Promise";
import "@/style/industries/industries.css";

export { metadata } from "@/components/brand-mindz-promise/Brand-Mindz-Promise";

export default function BrandMindzPromisePage() {
  return (
    <>
      <Header />
      <BrandMindzPromise />
      <Footer />
    </>
  );
}
