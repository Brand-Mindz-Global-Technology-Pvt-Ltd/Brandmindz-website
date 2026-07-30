import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Best Website & App Development Services | Brand Mindz Global",
  },
  description: "Build high-performing websites, mobile apps, and custom software with Brand Mindz Global. Scalable development solutions designed for business growth.",
};

export default function DevelopmentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
