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
  const [menuOpen, setMenuOpen] = useState(false);
  // Track the route so we can auto-close the mobile menu on navigation
  // without an effect (adjusting state during render, per React guidance).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string) =>
    `rounded-[3px] px-[11px] py-2 text-sm no-underline transition-colors hover:bg-green-tint hover:text-green-dark ${
      isActive(href) ? "bg-green-tint text-green-dark" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1120px] items-center gap-5 px-5 py-3">
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

        {/* Desktop navigation */}
        <nav
          aria-label="Principal"
          className="ml-auto hidden flex-wrap items-center gap-0.5 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={navLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/apoie" className="btn btn-green ml-1.5 px-4 py-2 text-sm">
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

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          className="ml-auto flex h-10 w-10 cursor-pointer items-center justify-center rounded-[3px] border border-line-strong text-ink transition-colors hover:border-green hover:text-green lg:hidden"
        >
          {menuOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {menuOpen ? (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="border-t border-line bg-cream px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1120px] flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`${navLinkClass(link.href)} py-2.5`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apoie"
              className="btn btn-green mt-2 px-4 py-2.5 text-center text-sm"
            >
              Apoie
            </Link>
            <button
              type="button"
              onClick={() => setLang((l) => (l === "pt" ? "en" : "pt"))}
              aria-label="Alternar idioma"
              className="mt-1 cursor-pointer self-start rounded-[3px] border border-line-strong px-2.5 py-2 font-mono text-[11px] tracking-[0.06em] text-ink-muted transition-colors hover:border-green hover:text-green"
            >
              {lang === "pt" ? "PT / en" : "pt / EN"}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
