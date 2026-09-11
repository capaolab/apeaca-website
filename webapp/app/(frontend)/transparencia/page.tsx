import type { Metadata } from "next";
import { PageHeader } from "../components/ui";
import { ExercicioSelector } from "./ExercicioSelector";

export const metadata: Metadata = {
  title: "Transparência",
  description:
    "Receitas, despesas, saldo e balanço aprovado em assembleia por exercício. Número sem documento não é publicado.",
};

export default function Transparencia() {
  return (
    <div className="mx-auto max-w-[840px] px-5 pb-20 pt-14">
      <PageHeader
        crumb="Início › Transparência"
        title="Transparência"
        lead="Um exercício por página: receitas, despesas, saldo, balanço completo em PDF e data de aprovação em assembleia. Número sem documento não é publicado."
      />
      <ExercicioSelector />
    </div>
  );
}
