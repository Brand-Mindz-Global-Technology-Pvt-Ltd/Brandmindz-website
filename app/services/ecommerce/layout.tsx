import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Ecommerce Website Development Company | Brand Mindz Global",
  },
  description: "Launch and grow your online store with Brand Mindz Global. Expert ecommerce development, Shopify, WooCommerce, and custom solutions that boost sales.",
};

export default function EcommerceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
