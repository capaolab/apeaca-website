import type { Metadata } from "next";
import Link from "next/link";
import { PIX_KEY } from "../data";
import { Kicker } from "../components/ui";
import { CopyPixButton } from "../components/CopyPixButton";
import { AssociacaoForm } from "../components/AssociacaoForm";

export const metadata: Metadata = {
  title: "Apoie",
  description:
    "Apoie a APEA-CA por doação via PIX ou tornando-se associado. Todo recurso entra na prestação de contas do exercício.",
};

const planos = [
  {
    rotulo: "Morador",
    valor: "R$ 20/mês",
    descricao: "Residentes de Caeté-Açu e entorno",
  },
  {
    rotulo: "Apoiador",
    valor: "R$ 50/mês",
    descricao: "Quem apoia de fora da comunidade",
  },
  {
    rotulo: "Institucional",
    valor: "A combinar",
    descricao: "Empresas e organizações parceiras",
  },
];

export default function Apoie() {
  return (
    <div>
      <section className="bg-green-dark px-5 py-14 text-cream">
        <div className="mx-auto max-w-[840px]">
          <Kicker className="mb-5 tracking-[0.12em] text-gold">
            Início › Apoie
          </Kicker>
          <h1 className="mb-[22px] font-serif text-[clamp(34px,5.5vw,52px)] leading-[1.08] tracking-[-0.02em]">
            Apoie a APEA-CA
          </h1>
          <p className="max-w-[56ch] text-lg leading-relaxed text-green-mist">
            Duas formas diretas de sustentar o trabalho: doação por PIX, para
            quem quer contribuir uma vez ou de tempos em tempos, e associação,
            para quem quer participar das decisões. Todo recurso recebido entra
            na prestação de contas do exercício.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[840px] gap-6 px-5 pt-14">
        {/* PIX */}
        <div className="border border-line bg-paper p-8">
          <Kicker className="mb-3.5 text-green">01 · Doação por PIX</Kicker>
          <h2 className="mb-3.5 font-serif text-[28px]">Doar qualquer valor</h2>
          <p className="mb-6 max-w-[56ch] text-base leading-relaxed text-ink-soft">
            A chave PIX é o CNPJ da associação. A conta é de titularidade da
            APEA-CA e a movimentação aparece no balanço do exercício.
          </p>
          <div className="mb-[18px] flex flex-wrap items-center gap-4 border border-line bg-cream p-5">
            <div className="min-w-[200px] flex-1">
              <Kicker className="mb-1.5 text-ink-faint">Chave PIX · CNPJ</Kicker>
              <div className="break-all font-mono text-[19px] text-ink">
                {PIX_KEY}
              </div>
            </div>
            <CopyPixButton />
          </div>
          <p className="text-sm leading-relaxed text-ink-faint">
            Para receber recibo de doação, envie o comprovante e seus dados para
            a tesouraria pela <Link href="/contato">página de contato</Link>.
            Recibos são emitidos em até 15 dias.
          </p>
        </div>

        {/* Associação */}
        <div className="border border-line bg-paper p-8">
          <Kicker className="mb-3.5 text-green">
            02 · Quadro de associados
          </Kicker>
          <h2 className="mb-3.5 font-serif text-[28px]">Torne-se associado</h2>
          <p className="mb-[26px] max-w-[56ch] text-base leading-relaxed text-ink-soft">
            Associado tem voz e voto em assembleia, acesso aos documentos
            internos e prioridade nos programas comunitários — como a
            distribuição de caixas d&apos;água aos sócios. A contribuição mensal
            é o que mantém a associação funcionando entre um projeto e outro.
          </p>
          <div className="mb-[26px] grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {planos.map((plano) => (
              <div key={plano.rotulo} className="border border-line p-5">
                <Kicker className="mb-2 text-ink-faint">{plano.rotulo}</Kicker>
                <div className="mb-1.5 font-mono text-2xl text-ink">
                  {plano.valor}
                </div>
                <div className="text-sm leading-snug text-ink-muted">
                  {plano.descricao}
                </div>
              </div>
            ))}
          </div>
          <AssociacaoForm />
        </div>

        {/* Antes de doar */}
        <div className="border-l-[3px] border-green-bright bg-green-tint p-[26px]">
          <h2 className="mb-2.5 font-serif text-[22px]">
            Antes de doar, confira as contas
          </h2>
          <p className="mb-4 max-w-[56ch] text-base leading-relaxed text-green-deep-ink">
            A associação publica receitas, despesas, saldo e o balanço aprovado
            em assembleia de cada exercício. Nenhum número é publicado sem o
            documento que o sustenta.
          </p>
          <Link href="/transparencia" className="text-[15px] font-semibold">
            Ver prestação de contas →
          </Link>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}
