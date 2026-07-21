import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import GlobalCapabilityPageContent from "@/components/global-capability/GlobalCapabilityPageContent";

export { metadata } from "@/components/global-capability/GlobalCapabilityPageContent";

export default function GlobalCapabilityPage() {
  return (
    <>
      <Header />
      <GlobalCapabilityPageContent />
      <Footer />
    </>
  );
}


