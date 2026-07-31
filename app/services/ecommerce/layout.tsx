import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Ecommerce Website Development Company | Brand Mindz Global",
  },
  description: "Launch and grow your online store with Brand Mindz Global. Expert ecommerce development, Shopify, WooCommerce, and custom solutions that boost sales.",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.brandmindz.com/services/ecommerce",
  },
  openGraph: {
    type: "website",
    url: "https://brandmindz.com",
    title: "Our Services | Branding, Design, Development, Digital Marketing & E-commerce Solutions – Brand Mindz Global",
    description: "Grow your business with Brand Mindz Global's 360° services, including branding, web development, digital marketing, SEO, social media, and e-commerce solutions.",
    images: [
      {
        url: "/logo.png",
        alt: "Brand Mindz Global services – Branding, Design, Development, Digital Marketing & E-commerce Solutions",
      },
    ],
  },
};

export default function EcommerceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
