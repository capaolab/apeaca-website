import type { Metadata } from "next";
import Link from "next/link";
import { posts, projetos } from "../data";
import { Breadcrumb, Kicker } from "../components/ui";

export const metadata: Metadata = {
  title: "Mapa do site e acessibilidade",
  description:
    "Todas as páginas do portal APEA-CA e a declaração de acessibilidade (WCAG 2.2 AA).",
};

const acessibilidade = [
  "Contraste mínimo de 4,5:1 para texto corrido e 3:1 para títulos.",
  "Foco visível de 2px com deslocamento de 2px em todo elemento interativo.",
  "Atalho para o conteúdo principal como primeiro elemento focável da página.",
  "Nenhuma informação transmitida apenas por cor.",
  "Imagem não é publicada sem texto alternativo; PDF não é publicado sem resumo em HTML e tamanho declarado.",
  "Estrutura de títulos hierárquica e marcos de navegação identificados.",
];

export default function MapaDoSite() {
  return (
    <div className="mx-auto max-w-[840px] px-5 pb-20 pt-14">
      <Breadcrumb>Início › Mapa do site</Breadcrumb>
      <h1 className="mb-9 font-serif text-[clamp(32px,5vw,46px)] leading-tight tracking-[-0.02em]">
        Mapa do site e acessibilidade
      </h1>

      <h2 className="mb-5 font-serif text-[26px]">Todas as páginas</h2>
      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7 border-b border-line pb-11">
        <div>
          <Kicker className="mb-3 text-green">Institucional</Kicker>
          <ul className="m-0 grid list-none gap-2.5 p-0 text-base">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link href="/instituicao">A instituição</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <Kicker className="mb-3 text-green">Projetos</Kicker>
          <ul className="m-0 grid list-none gap-2.5 p-0 text-base">
            <li>
              <Link href="/projetos">Todos os projetos</Link>
            </li>
            {projetos.map((p) => (
              <li key={p.slug}>
                <Link href={`/projetos/${p.slug}`}>{p.nome}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Kicker className="mb-3 text-green">Blog</Kicker>
          <ul className="m-0 grid list-none gap-2.5 p-0 text-base">
            <li>
              <Link href="/blog">Todas as publicações</Link>
            </li>
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.titulo}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Kicker className="mb-3 text-green">Recursos e contas</Kicker>
          <ul className="m-0 grid list-none gap-2.5 p-0 text-base">
            <li>
              <Link href="/apoie">Apoie</Link>
            </li>
            <li>
              <Link href="/transparencia">Transparência</Link>
            </li>
            <li>
              <Link href="/privacidade">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/mapa-do-site">Mapa do site</Link>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="mb-4 font-serif text-[26px]">
        Declaração de acessibilidade
      </h2>
      <p className="mb-6 max-w-[60ch] text-[17px] leading-relaxed">
        Este portal é desenvolvido para atender à WCAG 2.2 nível AA, adotando
        também as recomendações do eMAG que são aplicáveis a uma organização da
        sociedade civil. O compromisso é de critério de aceite, não de intenção:
        a verificação automatizada roda a cada alteração e a navegação por
        teclado é testada manualmente.
      </p>
      <ul className="mb-7 grid list-disc gap-2.5 pl-[22px] text-base leading-relaxed text-ink">
        {acessibilidade.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="max-w-[60ch] text-base leading-relaxed">
        Encontrou uma barreira de acesso? Descreva o problema pela{" "}
        <Link href="/contato">página de contato</Link>. Barreiras relatadas
        entram na fila de correção com prioridade sobre novas funcionalidades.
      </p>
    </div>
  );
}
