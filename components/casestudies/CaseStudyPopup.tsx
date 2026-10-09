"use client";

import { useEffect, useState } from "react";
import BookCallModal from "@/components/layout/BookCallModal";

export default function CaseStudyPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return <BookCallModal isOpen={isOpen} onClose={closePopup} />;
}
