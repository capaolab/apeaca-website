import type { Metadata } from "next";
import { cadastro, diretoria, documentos } from "../data";
import { EmptyState, PageHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "A instituição",
  description:
    "Dados cadastrais, missão e valores, diretoria e documentos de governança da APEA-CA.",
};

const valores = [
  {
    titulo: "Decisão em assembleia",
    texto:
      "Nenhuma despesa relevante ou convênio é firmado sem deliberação do quadro de associados.",
  },
  {
    titulo: "Conta prestada",
    texto:
      "Recurso de terceiro entra em conta específica e sai com balanço aprovado e publicado.",
  },
  {
    titulo: "Memória da comunidade",
    texto:
      "Anciãos do vale integram o quadro social e são ouvidos nas decisões sobre território e tradição.",
  },
];

export default function Instituicao() {
  return (
    <div className="mx-auto max-w-[900px] px-5 pb-20 pt-14">
      <PageHeader
        crumb="Início › A instituição"
        title="A instituição"
        lead="Dados cadastrais, regras de funcionamento, valores e documentos de governança da APEA-CA, reunidos para consulta de associados, órgãos públicos e financiadores."
      />

      <h2 className="mb-5 font-serif text-[28px]">Dados cadastrais</h2>
      <dl className="mb-12 border-t border-line">
        {cadastro.map((item) => (
          <div
            key={item.rotulo}
            className="grid grid-cols-[minmax(140px,240px)_1fr] gap-5 border-b border-line-soft py-4"
          >
            <dt className="pt-[3px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
              {item.rotulo}
            </dt>
            <dd className="m-0 text-base leading-normal text-ink">
              {item.valor}
            </dd>
          </div>
        ))}
      </dl>

      <h2 className="mb-4 font-serif text-[28px]">Missão e valores</h2>
      <p className="mb-[26px] max-w-[60ch] text-[17px] leading-relaxed text-ink">
        Organizar os moradores de Caeté-Açu para conquistar e manter os bens
        comuns da comunidade — escola, água, espaços de cultura e condições para
        a agricultura familiar — respeitando a autonomia dos associados e o modo
        de vida do Vale do Capão.
      </p>
      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        {valores.map((v) => (
          <div key={v.titulo} className="border-t-2 border-green-bright pt-4">
            <h3 className="mb-2 text-[17px] font-semibold">{v.titulo}</h3>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              {v.texto}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mb-2 font-serif text-[28px]">Diretoria</h2>
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.08em] text-rust">
        Gestão 2025–2027 · nomes a confirmar pela secretaria
      </p>
      <dl className="mb-12 border-t border-line">
        {diretoria.map((item) => (
          <div
            key={item.cargo}
            className="grid grid-cols-[minmax(140px,240px)_1fr] gap-5 border-b border-line-soft py-3.5"
          >
            <dt className="pt-[3px] font-mono text-[11px] uppercase tracking-[0.08em] text-ink-faint">
              {item.cargo}
            </dt>
            <dd className="m-0 text-base text-ink-muted">{item.nome}</dd>
          </div>
        ))}
      </dl>

      <h2 className="mb-5 font-serif text-[28px]">Estatuto e documentos</h2>
      <div className="mb-5 border-t border-line">
        {documentos.map((doc) => (
          <div
            key={doc.titulo}
            className="grid grid-cols-[1fr_auto] items-center gap-5 border-b border-line-soft py-[18px]"
          >
            <div>
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-green">
                {doc.tipo}
              </div>
              <div className="mb-1 text-[17px] leading-snug">{doc.titulo}</div>
              <div className="text-sm leading-normal text-ink-faint">
                {doc.resumo}
              </div>
            </div>
            <div className="whitespace-nowrap font-mono text-[11px] text-ink-faint">
              {doc.peso}
            </div>
          </div>
        ))}
      </div>
      <p className="mb-11 max-w-[60ch] text-sm leading-relaxed text-ink-faint">
        Todo PDF publicado no portal traz resumo em HTML e tamanho de arquivo
        declarado, para que quem acessa por conexão limitada saiba o custo antes
        de baixar.
      </p>

      <EmptyState label="Estado vazio" title="Arquivos ainda não anexados">
        Os documentos acima estão listados com metadados de exemplo. Assim que a
        secretaria enviar os arquivos vigentes — estatuto registrado, ata de
        eleição, regimento — eles passam a ser baixáveis aqui.
      </EmptyState>
    </div>
  );
}
