import React, { useState } from "react";
import { iconWhatsapp } from "../assets";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function WhatsappChat() {
  const [textVisibility, setTextVisibility] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 z-30 hidden flex-col items-end md:flex">
      {textVisibility ? (
        <div className="mb-2 flex items-center gap-x-2">
          <span className="rounded-2xl border-2 border-green-500 bg-primary-50 px-3 py-1 text-sm font-medium">
            Chat With Us
          </span>
          <button
            onClick={() => setTextVisibility(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-slate-500"
          >
            <FontAwesomeIcon icon={faClose} className="rounded-full" />
          </button>
        </div>
      ) : null}
      <Link to="https://wa.me/919147047488" target="_blank">
        <img
          src={iconWhatsapp}
          alt="whatsapp icon"
          className="w-12 cursor-pointer transition-all hover:scale-105"
        />
      </Link>
    </div>
  );
}

export default WhatsappChat;
