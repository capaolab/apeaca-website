import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState, PageHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos da APEA-CA: período de execução, parceiros, resultados e documentos. Página em desenvolvimento.",
};

export default function Projetos() {
  return (
    <div className="mx-auto max-w-[840px] px-5 pb-20 pt-14">
      <PageHeader
        crumb="Início › Projetos"
        title="Projetos"
        lead="Cada projeto reúne período de execução, parceiros, resultados, documentos e a timeline de atualizações publicadas no blog."
      />
      <EmptyState label="Em desenvolvimento" title="Página de projetos em construção">
        A listagem completa de projetos, com filtros por status e páginas de
        detalhe, será publicada em uma próxima etapa do portal. Enquanto isso,
        conheça a associação em{" "}
        <Link href="/quem-somos">Quem somos</Link> ou apoie o trabalho pela
        página <Link href="/apoie">Apoie</Link>.
      </EmptyState>
    </div>
  );
}
