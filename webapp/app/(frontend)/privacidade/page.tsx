import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "../components/ui";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a APEA-CA trata dados pessoais coletados no portal, nos termos da LGPD (Lei 13.709/2018).",
};

const secoes = [
  {
    titulo: "Quem trata os dados",
    conteudo: [
      "A APEA-CA — Associação de Pais, Educadores e Agricultores de Caeté-Açu, CNPJ 01.234.567/0001-89, com sede na Vila de Caeté-Açu, Palmeiras/BA — é a controladora dos dados pessoais coletados neste portal, nos termos da Lei 13.709/2018 (LGPD).",
    ],
  },
  {
    titulo: "Quais dados coletamos",
    conteudo: [
      "Somente o que você digita nos formulários de contato e de pedido de associação: nome, e-mail e a mensagem enviada. Se você doar por PIX e solicitar recibo, a tesouraria também trata o comprovante e os dados fiscais necessários para emiti-lo.",
      "O portal não usa cookies de identificação, não integra redes de publicidade e não faz perfilamento de visitantes.",
    ],
  },
  {
    titulo: "Para que usamos",
    conteudo: [
      "Responder ao seu contato, processar o pedido de associação, emitir recibo de doação e cumprir obrigações legais e contábeis da associação. Não vendemos, alugamos nem cedemos dados pessoais a terceiros para fins comerciais.",
    ],
  },
  {
    titulo: "Por quanto tempo guardamos",
    conteudo: [
      "Mensagens de contato ficam armazenadas por até 24 meses. Dados de associados são mantidos enquanto durar o vínculo e, depois, pelo prazo exigido pela legislação contábil e fiscal.",
    ],
  },
  {
    titulo: "Medição de audiência",
    conteudo: [
      "Caso a associação passe a medir acessos, usará ferramenta sem cookie de identificação e sem compartilhamento com terceiros, e esta política será atualizada com a data da mudança.",
    ],
  },
];

export default function Privacidade() {
  return (
    <div className="mx-auto max-w-[700px] px-5 pb-20 pt-14">
      <Breadcrumb>Início › Privacidade</Breadcrumb>
      <h1 className="mb-3.5 font-serif text-[clamp(32px,5vw,46px)] leading-tight tracking-[-0.02em]">
        Política de privacidade
      </h1>
      <p className="mb-9 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
        Versão 1 · setembro de 2026 · minuta para revisão jurídica
      </p>

      {secoes.map((secao) => (
        <section key={secao.titulo}>
          <h2 className="mb-3 font-serif text-2xl">{secao.titulo}</h2>
          {secao.conteudo.map((paragrafo, i) => (
            <p
              key={i}
              className={`text-[17px] leading-relaxed ${
                i < secao.conteudo.length - 1 ? "mb-4" : "mb-7"
              }`}
            >
              {paragrafo}
            </p>
          ))}
        </section>
      ))}

      <section>
        <h2 className="mb-3 font-serif text-2xl">Seus direitos</h2>
        <p className="mb-7 text-[17px] leading-relaxed">
          Você pode pedir confirmação de tratamento, acesso, correção,
          anonimização, portabilidade ou eliminação dos seus dados, além de
          revogar consentimento. O pedido pode ser feito pela{" "}
          <Link href="/contato">página de contato</Link> e é respondido em até
          15 dias.
        </p>
      </section>

      <div className="border-l-[3px] border-gold bg-sand p-5">
        <p className="text-[15px] leading-relaxed text-sand-ink">
          Este texto é uma minuta escrita para a estrutura do portal. Antes de
          publicar, precisa de revisão por quem responde juridicamente pela
          associação, com os dados cadastrais reais e o encarregado de dados
          nomeado.
        </p>
      </div>
    </div>
  );
}
