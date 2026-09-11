import Link from "next/link";

const institucional = [
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/instituicao", label: "A instituição" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog e comunicados" },
];

const contas = [
  { href: "/transparencia", label: "Transparência" },
  { href: "/apoie", label: "Apoie" },
  { href: "/privacidade", label: "Privacidade" },
];

const contato = [
  { href: "/contato", label: "Fale com a associação" },
  { href: "/mapa-do-site", label: "Mapa do site e acessibilidade" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-gold">
        {title}
      </div>
      <ul className="m-0 grid list-none gap-2.5 p-0 text-[15px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-green-mist no-underline hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-green-dark px-5 pb-8 pt-14 text-green-mist">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-9 border-b border-cream/15 pb-9">
          <div>
            <div className="mb-3.5 font-mono text-[15px] font-bold tracking-[0.02em] text-cream">
              APEA-CA
            </div>
            <p className="max-w-[34ch] text-sm leading-relaxed">
              Associação de Pais, Educadores e Agricultores de Caeté-Açu · Vale
              do Capão · Palmeiras, Bahia
            </p>
          </div>
          <FooterColumn title="Institucional" links={institucional} />
          <FooterColumn title="Prestação de contas" links={contas} />
          <FooterColumn title="Contato" links={contato} />
        </div>
        <div className="flex flex-wrap justify-between gap-5 pt-6 font-mono text-[11px] uppercase tracking-[0.06em] text-green-soft-ink">
          <span>CNPJ 01.234.567/0001-89 · dado de exemplo</span>
          <span>Portal APEA-CA · v1 · 2026</span>
        </div>
      </div>
    </footer>
  );
}
