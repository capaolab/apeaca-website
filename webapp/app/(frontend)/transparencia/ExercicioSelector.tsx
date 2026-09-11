"use client";

import { useState } from "react";
import { anosExercicio, exercicios } from "../data";
import { EmptyState, Kicker } from "../components/ui";

export function ExercicioSelector() {
  const [ano, setAno] = useState(anosExercicio[0]);
  const exercicio = exercicios[ano];

  const linhas = [
    { rotulo: "Receitas", valor: `R$ ${exercicio.receitas}` },
    { rotulo: "Despesas", valor: `R$ ${exercicio.despesas}` },
    { rotulo: "Saldo", valor: `R$ ${exercicio.saldo}`, destaque: true },
    { rotulo: "Aprovado em assembleia", valor: exercicio.aprovado },
  ];

  return (
    <div>
      <div
        role="group"
        aria-label="Escolher exercício"
        className="mb-8 flex flex-wrap gap-2"
      >
        {anosExercicio.map((a) => {
          const ativo = a === ano;
          return (
            <button
              key={a}
              type="button"
              onClick={() => setAno(a)}
              aria-pressed={ativo}
              className={`cursor-pointer rounded-[3px] border px-5 py-2.5 font-mono text-[13px] tracking-[0.06em] transition-colors ${
                ativo
                  ? "border-green bg-green text-cream"
                  : "border-line-strong bg-transparent text-ink-muted hover:border-green"
              }`}
            >
              {a}
            </button>
          );
        })}
      </div>

      <div className="mb-6 border border-line bg-paper p-8">
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-serif text-[26px]">Exercício {exercicio.ano}</h2>
          <Kicker className="tracking-[0.08em] text-rust">
            Valores de exemplo
          </Kicker>
        </div>
        <dl className="mb-7 border-t border-line-soft">
          {linhas.map((linha) => (
            <div
              key={linha.rotulo}
              className="flex justify-between gap-5 border-b border-line-soft py-[15px]"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                {linha.rotulo}
              </dt>
              <dd
                className={`m-0 font-mono text-lg ${
                  linha.destaque ? "text-green" : ""
                }`}
              >
                {linha.valor}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center gap-3.5">
          <span className="text-base font-semibold text-green">
            Balanço completo
          </span>
          <span className="font-mono text-xs text-ink-faint">
            PDF · {exercicio.peso}
          </span>
        </div>
      </div>

      <EmptyState
        label="Exercícios anteriores a 2023"
        title="Nenhuma prestação de contas publicada ainda"
      >
        Os balanços aprovados em assembleia são publicados aqui com o PDF
        anexado. Para pedir um documento anterior, fale com a tesouraria pela
        página de contato.
      </EmptyState>
    </div>
  );
}
