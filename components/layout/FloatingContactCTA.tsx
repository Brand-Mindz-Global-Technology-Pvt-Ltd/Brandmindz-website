import Link from "next/link";
import "../../style/floating-cta/floating-cta.css";

export default function FloatingContactCTA() {
  return (
    <Link
      href="/contact#contact-form"
  className="floating-contact-cta"
  aria-label="Reach us through the contact form"
    >
      <span>Reach Us</span>
      <span className="floating-contact-arrow">→</span>
    </Link>
  );
}