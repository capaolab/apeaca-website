import type { Metadata } from "next";
import Link from "next/link";
import { linhaDoTempo } from "../data";
import { Breadcrumb } from "../components/ui";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "A história da APEA-CA: uma associação construída pela própria comunidade de Caeté-Açu, no Vale do Capão, desde 1996.",
};

const paragrafos = [
  "A fundação, em 1996, respondeu a uma necessidade concreta: garantir escola para as crianças de uma comunidade rural distante da sede do município. Pais, professores e agricultores se organizaram formalmente para negociar com o poder público aquilo que a comunidade não conseguia obter individualmente.",
  "Nos anos seguintes o escopo se ampliou junto com as demandas locais. A associação passou a articular projetos de infraestrutura — água, sede própria, espaços de uso coletivo — sem abandonar a pauta original de educação. Em 2006 construiu a própria sede com apoio da Natura Cosméticos. Em 2009 recebeu o Centro Digital para a Cidadania, do Governo da Bahia, levando acesso à internet e formação digital para o vale numa época em que isso era raro na Chapada.",
  "A partir de 2017, com o programa Bahia Produtiva, a Companhia de Engenharia Hídrica e de Saneamento da Bahia e a Prefeitura de Palmeiras, executou o sistema de distribuição de água da Vila e do entorno, com mais de 150 caixas d'água distribuídas aos sócios. Em 2019 recebeu a cessão de uso do espaço Rufino Rocha, por cinco anos, para atividades culturais e comunitárias.",
  "A associação também já arrecadou e prestou contas de recursos de terceiros, em conta exclusiva, no âmbito do Movimento ÉduCapão. Essa experiência de execução e prestação de contas é o que hoje sustenta a captação junto a editais e financiadores.",
  "Trinta anos depois, a APEA-CA opera como espaço de diálogo entre a comunidade e o poder público, com reconhecimento municipal e estadual, assento em colegiado da Prefeitura de Palmeiras e anciãos do vale entre seus associados.",
];

export default function QuemSomos() {
  return (
    <div>
      <div className="mx-auto max-w-[760px] px-5 pt-14">
        <Breadcrumb>Início › Quem somos</Breadcrumb>
        <h1 className="mb-[26px] font-serif text-[clamp(34px,5.5vw,52px)] leading-[1.08] tracking-[-0.02em]">
          Uma associação construída pela própria comunidade
        </h1>
        <p className="mb-10 text-[19px] leading-relaxed text-ink-soft">
          A Associação de Pais, Educadores e Agricultores de Caeté-Açu reúne
          moradores do Vale do Capão, no município de Palmeiras, Bahia, em torno
          de educação, agricultura familiar, infraestrutura comunitária e
          cultura.
        </p>
      </div>

      <div className="mx-auto max-w-[680px] px-5 pb-6">
        {paragrafos.map((texto, i) => (
          <p
            key={i}
            className={`text-[17px] leading-relaxed text-ink ${
              i < paragrafos.length - 1 ? "mb-5" : "mb-11"
            }`}
          >
            {texto}
          </p>
        ))}
      </div>

      <div className="mx-auto max-w-[1080px] px-5 pb-20">
        <div className="border-t border-line pt-11">
          <h2 className="mb-8 font-serif text-[30px]">Linha do tempo</h2>
          <ol className="m-0 grid list-none gap-0 p-0">
            {linhaDoTempo.map((item) => (
              <li
                key={item.ano}
                className="grid grid-cols-[minmax(64px,88px)_1fr] gap-6 border-b border-line-soft py-5"
              >
                <div className="font-mono text-sm tracking-[0.04em] text-green">
                  {item.ano}
                </div>
                <div>
                  <div className="mb-1 text-[17px] leading-snug">
                    {item.titulo}
                  </div>
                  <div className="text-sm text-ink-faint">{item.parceiro}</div>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/instituicao"
              className="btn btn-green px-6 py-[13px] text-[15px]"
            >
              Estatuto e diretoria
            </Link>
            <Link
              href="/projetos"
              className="btn btn-outline px-6 py-[13px] text-[15px]"
            >
              Projetos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
