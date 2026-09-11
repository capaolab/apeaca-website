import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState, PageHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "Blog e comunicados",
  description:
    "Notícias de andamento, comunicados oficiais, artigos e convocações da APEA-CA. Página em desenvolvimento.",
};

export default function Blog() {
  return (
    <div className="mx-auto max-w-[840px] px-5 pb-20 pt-14">
      <PageHeader
        crumb="Início › Blog"
        title="Blog e comunicados"
        lead="Canal de rotina da associação: notícias de andamento, comunicados oficiais, artigos e convocações de assembleia."
      />
      <EmptyState label="Em desenvolvimento" title="Blog em construção">
        As publicações e comunicados da associação ganham interface própria em
        uma próxima etapa. Enquanto isso, acompanhe os avisos na{" "}
        <Link href="/">página inicial</Link> ou fale com a secretaria pela
        página de <Link href="/contato">contato</Link>.
      </EmptyState>
    </div>
  );
}
