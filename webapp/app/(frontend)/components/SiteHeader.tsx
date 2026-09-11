"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/instituicao", label: "A instituição" },
  { href: "/blog", label: "Blog" },
  { href: "/transparencia", label: "Transparência" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"pt" | "en">("pt");

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-5 px-5 py-3">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-2.5 text-ink no-underline"
        >
          <Image
            src="/apea-ca-logo.jpg"
            alt="APEA-CA"
            width={40}
            height={40}
            className="h-10 w-10 object-contain mix-blend-multiply"
            priority
          />
          <span className="font-mono text-[15px] font-bold tracking-[0.02em]">
            APEA-CA
          </span>
        </Link>

        <nav
          aria-label="Principal"
          className="ml-auto flex flex-wrap items-center gap-0.5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-[3px] px-[11px] py-2 text-sm no-underline transition-colors hover:bg-green-tint hover:text-green-dark ${
                isActive(link.href)
                  ? "bg-green-tint text-green-dark"
                  : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apoie"
            className="ml-1.5 rounded-[3px] bg-green px-4 py-2 text-sm font-semibold text-cream no-underline transition-colors hover:bg-green-dark hover:text-cream"
          >
            Apoie
          </Link>
          <button
            type="button"
            onClick={() => setLang((l) => (l === "pt" ? "en" : "pt"))}
            aria-label="Alternar idioma"
            className="ml-2 cursor-pointer rounded-[3px] border border-line-strong px-2.5 py-[7px] font-mono text-[11px] tracking-[0.06em] text-ink-muted transition-colors hover:border-green hover:text-green"
          >
            {lang === "pt" ? "PT / en" : "pt / EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
