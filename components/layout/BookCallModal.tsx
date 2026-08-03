"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { GetStartedSection } from "@/components/contactus/Contactform";
import "../../style/contactus/contactus.css";
import "../../style/header/book-call-modal.css";

type BookCallModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="book-call-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Book a call"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="book-call-modal__panel">
        <button
          type="button"
          className="book-call-modal__close"
          onClick={onClose}
          aria-label="Close book a call form"
        >
          <FiX />
        </button>

        <GetStartedSection />
      </div>
    </div>
  );
}
