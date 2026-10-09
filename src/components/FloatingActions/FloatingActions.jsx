import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

import "./FloatingActions.css";

export default function FloatingActions() {
  const openChatbot = () => {
    window.dispatchEvent(new Event("open-shilpkar-chatbot"));
  };

  return (
    <div className="floating-actions">

      {/* SHILPKAR AI */}
      <button
        className="floating-action floating-ai"
        onClick={openChatbot}
        aria-label="Open SHILPKAR AI"
      >
        <HiSparkles />
      </button>

      {/* YouTube */}
      <a
href="https://www.youtube.com/@shilpkarfactory"
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-youtube"
        aria-label="YouTube"
      >
        <FaYoutube />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/shilpkar_factory/"
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-instagram"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      {/* Call */}
      <a
        href="tel:+918171771229"
        className="floating-action floating-call"
        aria-label="Call SHILPKAR"
      >
        <FiPhoneCall />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918171771229"
        target="_blank"
        rel="noreferrer"
        className="floating-action floating-whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}