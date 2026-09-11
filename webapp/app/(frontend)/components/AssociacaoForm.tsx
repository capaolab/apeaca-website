"use client";

import Link from "next/link";
import { useState } from "react";

const inputClass =
  "w-full rounded-[3px] border border-line-strong bg-cream px-3.5 py-3 font-sans text-[15px]";
const labelClass = "mb-[7px] block text-sm font-semibold";

export function AssociacaoForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid max-w-[440px] gap-4 border-t border-line-soft pt-[26px]"
    >
      <div>
        <label htmlFor="nome-assoc" className={labelClass}>
          Nome completo
        </label>
        <input
          id="nome-assoc"
          type="text"
          required
          placeholder="Como consta no documento"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email-assoc" className={labelClass}>
          E-mail
        </label>
        <input
          id="email-assoc"
          type="email"
          required
          placeholder="nome@exemplo.com"
          className={inputClass}
        />
        <div className="mt-[7px] text-[13px] text-ink-faint">
          Usado só para responder ao pedido de associação. Ver a{" "}
          <Link href="/privacidade">política de privacidade</Link>.
        </div>
      </div>
      <button
        type="submit"
        className="cursor-pointer justify-self-start rounded-[3px] border-none bg-green px-[26px] py-3.5 font-sans text-[15px] font-semibold text-cream transition-colors hover:bg-green-dark"
      >
        {sent ? "Pedido registrado" : "Enviar"}
      </button>
    </form>
  );
}
