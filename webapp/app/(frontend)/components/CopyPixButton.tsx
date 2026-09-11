"use client";

import { useState } from "react";
import { PIX_KEY } from "../data";

export function CopyPixButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(PIX_KEY);
    } catch {
      // Clipboard may be unavailable (e.g. insecure context); fail silently.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn btn-green px-[22px] py-[13px] font-sans text-[15px]"
    >
      {copied ? "Chave copiada" : "Copiar chave"}
    </button>
  );
}
