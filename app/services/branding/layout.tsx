import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Branding Agency | Build Powerful Brands with Brand Mindz Global",
  },
  description: "Build a memorable brand with Brand Mindz Global. We create powerful brand strategies, visual identities, and positioning that drive trust, growth, and recognition.",
};

export default function BrandingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
