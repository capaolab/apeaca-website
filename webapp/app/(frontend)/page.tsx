import Link from "next/link";
import {
  exercicios,
  linhaDoTempo,
  posts,
  projetos,
} from "./data";
import { Kicker, PostCard, ProjetoCard } from "./components/ui";

const dadosEdital = [
  { rotulo: "CNPJ", valor: "01.234.567/0001-89", mono: true },
  { rotulo: "Fundação", valor: "1996", mono: true },
  {
    rotulo: "Natureza jurídica",
    valor: "Associação privada sem fins lucrativos",
  },
  { rotulo: "Último balanço", valor: "Exercício 2025", mono: true },
  { rotulo: "Território", valor: "Palmeiras/BA · Chapada Diamantina" },
];

export default function Home() {
  const destaques = projetos.slice(0, 3);
  const postsRecentes = posts.slice(0, 3);
  const timeline = linhaDoTempo.slice(0, 5);
  const exercicio = exercicios["2025"];

  return (
    <div>
      {/* Hero */}
      <section className="bg-green-dark px-5 pb-14 pt-16 text-cream">
        <div className="mx-auto grid max-w-[1080px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-12">
          <div>
            <Kicker className="mb-[22px] tracking-[0.14em] text-gold">
              Desde 1996 · Caeté-Açu · Vale do Capão (BA)
            </Kicker>
            <h1 className="mb-6 font-serif text-[clamp(38px,6vw,60px)] leading-[1.06] tracking-[-0.02em]">
              Pais, educadores e agricultores de Caeté-Açu
            </h1>
            <p className="mb-8 max-w-[56ch] text-lg leading-relaxed text-green-mist">
              Associação civil sem fins lucrativos que atua há três décadas na
              comunidade de Caeté-Açu, no Vale do Capão. Começou como associação
              de pais e mestres e hoje responde por infraestrutura de água,
              espaços de cultura, educação e turismo sustentável em parceria com
              o poder público e financiadores privados.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/apoie"
                className="rounded-[3px] bg-gold px-[26px] py-3.5 text-[15px] font-semibold text-ink no-underline transition-colors hover:bg-gold-bright hover:text-ink"
              >
                Apoiar a associação
              </Link>
              <Link
                href="/projetos"
                className="rounded-[3px] border border-cream/40 px-[26px] py-3.5 text-[15px] font-medium text-cream no-underline transition-colors hover:bg-cream/10 hover:text-cream"
              >
                Ver os projetos
              </Link>
            </div>
          </div>

          <div className="border border-cream/20 bg-cream/5 p-[26px]">
            <Kicker className="mb-[18px] text-gold">
              Dados para análise de edital
            </Kicker>
            <dl className="m-0 grid grid-cols-1 gap-3.5">
              {dadosEdital.map((item, i) => (
                <div
                  key={item.rotulo}
                  className={`flex justify-between gap-4 ${
                    i < dadosEdital.length - 1
                      ? "border-b border-cream/15 pb-3"
                      : ""
                  }`}
                >
                  <dt className="text-[13px] text-green-soft-ink">
                    {item.rotulo}
                  </dt>
                  <dd
                    className={`m-0 text-right text-[13px] ${
                      item.mono ? "font-mono" : ""
                    }`}
                  >
                    {item.valor}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/instituicao"
              className="mt-5 inline-block text-sm text-gold"
            >
              Estatuto, diretoria e documentos →
            </Link>
          </div>
        </div>
      </section>

      {/* Aviso */}
      <div className="border-b border-green-tint-border bg-green-tint px-5 py-3.5">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-baseline gap-3.5">
          <Kicker className="text-green">Aviso</Kicker>
          <span className="text-[15px] text-green-deep-ink">
            Assembleia geral ordinária em 14/03 na sede, às 9h.
          </span>
          <Link
            href="/blog/convocacao-assembleia-2026"
            className="text-[15px] font-semibold"
          >
            Ver convocação
          </Link>
        </div>
      </div>

      {/* Ações mais atuais */}
      <section className="mx-auto max-w-[1080px] px-5 pt-[72px]">
        <div className="mb-8 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.015em]">
            Ações mais atuais
          </h2>
          <Link href="/projetos" className="text-[15px] font-semibold">
            Todos os projetos →
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {destaques.map((projeto) => (
            <ProjetoCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      </section>

      {/* Trinta anos + linha do tempo */}
      <section className="mx-auto max-w-[1080px] px-5 pt-[72px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-12">
          <div>
            <h2 className="mb-[22px] font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.015em]">
              Trinta anos de atuação documentada
            </h2>
            <p className="mb-4 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">
              A APEA-CA nasceu em 1996 como associação de pais e mestres,
              reunindo famílias que precisavam garantir escola para os filhos
              numa comunidade rural distante da sede do município. O escopo
              cresceu com a comunidade: da educação para a agricultura familiar,
              da agricultura para a infraestrutura básica, e daí para cultura e
              turismo de base comunitária.
            </p>
            <p className="mb-[26px] max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">
              Hoje a associação é reconhecida nos níveis municipal e estadual,
              ocupa assento em colegiado da Prefeitura de Palmeiras e reúne
              anciãos da comunidade entre seus associados.
            </p>
            <Link href="/quem-somos" className="text-[15px] font-semibold">
              História completa →
            </Link>
          </div>
          <div>
            <ol className="m-0 list-none border-l border-line-strong p-0">
              {timeline.map((item) => (
                <li key={item.ano} className="relative py-0 pb-[26px] pl-[22px]">
                  <span className="absolute left-[-4px] top-1.5 h-[7px] w-[7px] rounded-full bg-green-bright" />
                  <div className="mb-1 font-mono text-xs tracking-[0.08em] text-green">
                    {item.ano}
                  </div>
                  <div className="mb-[3px] text-base leading-snug text-ink">
                    {item.titulo}
                  </div>
                  <div className="text-[13px] text-ink-faint">
                    {item.parceiro}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Importância local */}
      <section className="mt-[72px] border-y border-line bg-paper px-5 py-16">
        <div className="mx-auto max-w-[1080px]">
          <Kicker className="mb-3.5 tracking-[0.12em] text-green">
            Importância local
          </Kicker>
          <h2 className="mb-9 max-w-[24ch] font-serif text-[clamp(26px,3.6vw,36px)] leading-tight tracking-[-0.015em]">
            O que a associação sustenta no Vale do Capão
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
            <div>
              <div className="mb-2.5 font-mono text-[34px] text-green">
                150+
              </div>
              <h3 className="mb-2 text-[17px] font-semibold">
                Caixas d&apos;água distribuídas
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                O sistema de distribuição implantado com a CERB e a prefeitura
                abastece a Vila e o entorno, e segue em manutenção pela
                associação.
              </p>
            </div>
            <div>
              <div className="mb-2.5 font-mono text-[34px] text-green">2</div>
              <h3 className="mb-2 text-[17px] font-semibold">
                Espaços comunitários sob gestão
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                A sede própria, construída em 2006, e o espaço Rufino Rocha,
                cedido pela Prefeitura de Palmeiras em 2019.
              </p>
            </div>
            <div>
              <div className="mb-2.5 font-mono text-[34px] text-green">
                1996
              </div>
              <h3 className="mb-2 text-[17px] font-semibold">
                Interlocução contínua
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-muted">
                Espaço de diálogo entre a comunidade e o poder público desde a
                fundação, com assento em colegiado municipal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campanha ativa */}
      <section className="mx-auto max-w-[1080px] px-5 pt-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-center gap-9 bg-green-dark p-9 text-cream">
          <div>
            <Kicker className="mb-3.5 tracking-[0.12em] text-gold">
              Campanha ativa · valores de exemplo
            </Kicker>
            <h2 className="mb-[18px] font-serif text-[30px] leading-tight">
              Revitalização do Rufino Rocha
            </h2>
            <p className="max-w-[48ch] text-base leading-relaxed text-green-mist">
              Recuperação da cobertura, do piso e da instalação elétrica do
              espaço cedido pela prefeitura, para retomar oficinas e assembleias
              no local.
            </p>
          </div>
          <div>
            <div className="mb-2 font-mono text-[13px] text-gold">
              R$ 19.000 de R$ 50.000 · 38%
            </div>
            <div
              className="mb-2.5 h-2 bg-cream/20"
              role="img"
              aria-label="38 por cento da meta arrecadado"
            >
              <div className="h-2 w-[38%] bg-gold" />
            </div>
            <div className="mb-[22px] font-mono text-[11px] tracking-[0.06em] text-green-soft-ink">
              Atualizado em 02/09/2026
            </div>
            <Link
              href="/apoie"
              className="inline-block rounded-[3px] bg-gold px-[26px] py-3.5 text-[15px] font-semibold text-ink no-underline transition-colors hover:bg-gold-bright hover:text-ink"
            >
              Doar por PIX
            </Link>
          </div>
        </div>
      </section>

      {/* Últimas publicações */}
      <section className="mx-auto max-w-[1080px] px-5 pt-16">
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-5">
          <h2 className="font-serif text-[clamp(26px,3.6vw,36px)] leading-tight tracking-[-0.015em]">
            Últimas publicações
          </h2>
          <Link href="/blog" className="text-[15px] font-semibold">
            Blog e comunicados →
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {postsRecentes.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Prestação de contas */}
      <section className="mx-auto max-w-[1080px] px-5 pb-20 pt-16">
        <div className="border border-line bg-paper p-8">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-[26px]">Prestação de contas</h2>
            <Kicker className="tracking-[0.08em] text-rust">
              Exercício 2025 · valores de exemplo
            </Kicker>
          </div>
          <div className="mb-6 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
            <div>
              <Kicker className="mb-1.5 text-ink-faint">Receitas</Kicker>
              <div className="font-mono text-[22px] text-ink">
                R$ {exercicio.receitas}
              </div>
            </div>
            <div>
              <Kicker className="mb-1.5 text-ink-faint">Despesas</Kicker>
              <div className="font-mono text-[22px] text-ink">
                R$ {exercicio.despesas}
              </div>
            </div>
            <div>
              <Kicker className="mb-1.5 text-ink-faint">Saldo</Kicker>
              <div className="font-mono text-[22px] text-green">
                R$ {exercicio.saldo}
              </div>
            </div>
          </div>
          <Link href="/transparencia" className="text-[15px] font-semibold">
            Todos os exercícios e balanços →
          </Link>
        </div>
      </section>
    </div>
  );
}
