import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Creative Design Services | UI/UX, Logo & Graphic Design | Brand Mindz Global",
  },
  description: "Elevate your brand with Brand Mindz Global's UI/UX, graphic, logo, and packaging design services that create engaging experiences and lasting impact.",
};

export default function DesigningLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
