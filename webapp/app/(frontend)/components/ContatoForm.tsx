"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-[3px] border border-line-strong bg-cream px-3.5 py-3 font-sans text-[15px]";
const labelClass = "mb-[7px] block text-sm font-semibold";

export function ContatoForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid max-w-[460px] gap-4"
    >
      <div>
        <label htmlFor="c-nome" className={labelClass}>
          Nome
        </label>
        <input id="c-nome" type="text" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="c-email" className={labelClass}>
          E-mail
        </label>
        <input
          id="c-email"
          type="email"
          required
          placeholder="nome@exemplo.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="c-msg" className={labelClass}>
          Mensagem
        </label>
        <textarea
          id="c-msg"
          rows={5}
          required
          className={`${inputClass} resize-y`}
        />
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
