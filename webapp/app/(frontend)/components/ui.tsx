import Link from "next/link";
import type { Post, Projeto } from "../data";
import { categoriaBadge, statusBadge } from "../data";

/** Small monospace breadcrumb line, e.g. "Início › Quem somos". */
export function Breadcrumb({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
      {children}
    </div>
  );
}

/** Monospace uppercase eyebrow / kicker label. */
export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[11px] uppercase tracking-[0.1em] ${className}`}
    >
      {children}
    </div>
  );
}

/** Status badge for a project card. */
export function StatusBadge({ status }: { status: Projeto["status"] }) {
  const { bg, ink } = statusBadge(status);
  return (
    <span
      className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-1"
      style={{ background: bg, color: ink }}
    >
      {status}
    </span>
  );
}

/** Category badge for a blog post card. */
export function CategoriaBadge({
  categoria,
}: {
  categoria: Post["categoria"];
}) {
  const { bg, ink } = categoriaBadge(categoria);
  return (
    <span
      className="font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-0.5"
      style={{ background: bg, color: ink }}
    >
      {categoria}
    </span>
  );
}

/** Project card used on the home page and (later) the projects listing. */
export function ProjetoCard({ projeto }: { projeto: Projeto }) {
  return (
    <Link
      href={`/projetos/${projeto.slug}`}
      className="block border border-line bg-paper p-6 text-ink no-underline transition-colors hover:border-green"
    >
      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        <StatusBadge status={projeto.status} />
        <span className="font-mono text-[11px] text-ink-faint">
          {projeto.periodo} · {projeto.area}
        </span>
      </div>
      <h3 className="mb-2.5 font-serif text-[23px] leading-tight">
        {projeto.nome}
      </h3>
      <p className="mb-4 text-[15px] leading-relaxed text-ink-muted">
        {projeto.resumo}
      </p>
      <div className="font-mono text-[11px] leading-normal text-ink-faint">
        {projeto.parceiros}
      </div>
    </Link>
  );
}

/** Compact blog post card used on the home page. */
export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block border border-line bg-paper p-[22px] text-ink no-underline transition-colors hover:border-green"
    >
      <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
        <CategoriaBadge categoria={post.categoria} />
        <span className="font-mono text-[11px] text-ink-faint">
          {post.data}
        </span>
      </div>
      <h3 className="mb-2 font-serif text-[20px] leading-snug">{post.titulo}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{post.resumo}</p>
    </Link>
  );
}

/** Standard header block for interior static pages. */
export function PageHeader({
  crumb,
  title,
  lead,
  maxWidth = "60ch",
}: {
  crumb: React.ReactNode;
  title: string;
  lead?: string;
  maxWidth?: string;
}) {
  return (
    <>
      <Breadcrumb>{crumb}</Breadcrumb>
      <h1 className="mb-[22px] font-serif text-[clamp(34px,5.5vw,52px)] leading-[1.08] tracking-[-0.02em]">
        {title}
      </h1>
      {lead ? (
        <p
          className="mb-9 text-lg leading-relaxed text-ink-soft"
          style={{ maxWidth }}
        >
          {lead}
        </p>
      ) : null}
    </>
  );
}

/** Dashed "empty state" box reused on several pages. */
export function EmptyState({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-dashed border-line-strong bg-paper p-7">
      <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-rust">
        {label}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
        {children}
      </p>
    </div>
  );
}
