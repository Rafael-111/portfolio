import Link from "next/link";
import type { ReactNode } from "react";
import Rich from "./Rich";

export type Shot = { src: string; alt: string; caption?: string; fit?: "cover" | "contain" };
export type Doc = { label: string; href: string; note?: string };

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="label">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function Gallery({ items, cols = 2 }: { items: Shot[]; cols?: 1 | 2 | 3 }) {
  const grid = cols === 1 ? "" : cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 gap-6 ${grid}`}>
      {items.map((it) => (
        <figure key={it.src}>
          <a href={it.src} target="_blank" rel="noopener noreferrer" className="shot block">
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              style={{ objectFit: it.fit ?? "contain", height: "auto" }}
            />
          </a>
          {it.caption && (
            <figcaption className="sans mt-2 text-[13px] leading-snug text-[var(--muted)]">{it.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function Docs({ items }: { items: Doc[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((d) => (
        <a
          key={d.href}
          href={d.href}
          target="_blank"
          rel="noopener noreferrer"
          className="sans flex items-start justify-between gap-4 rounded-lg border border-[var(--line)] bg-white px-4 py-3 hover:border-[var(--ink)]"
        >
          <span>
            <span className="block text-[14.5px] font-medium">{d.label}</span>
            {d.note && <span className="mt-0.5 block text-[12.5px] text-[var(--muted)]">{d.note}</span>}
          </span>
          <span aria-hidden="true" className="text-[var(--accent)]">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}

type Props = {
  title: string;
  meta: string;
  hero?: Shot;
  oneLiner: string;
  did: string[];
  hard?: string;
  result?: string;
  children?: ReactNode;
};

export default function ProjectPage({ title, meta, hero, oneLiner, did, hard, result, children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[860px] px-4 py-10 sm:px-10 lg:py-16">
      <Link href="/projects" className="link-arrow">
        <span aria-hidden="true">←</span> All projects
      </Link>

      <header className="mt-5 border-b-2 border-[var(--ink)] pb-5">
        <h1 className="sans text-[30px] font-bold leading-tight tracking-[-0.02em] sm:text-[38px]">{title}</h1>
        <p className="sans mt-2 text-[14.5px] text-[var(--muted)]">{meta}</p>
      </header>

      <p className="mt-7 text-[20px] leading-[1.5] sm:text-[22px]">
        <Rich text={oneLiner} />
      </p>

      {hero && (
        <figure className="mt-8">
          <div className="shot">
            <img src={hero.src} alt={hero.alt} style={{ height: "auto", objectFit: hero.fit ?? "cover" }} />
          </div>
          {hero.caption && (
            <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">{hero.caption}</figcaption>
          )}
        </figure>
      )}

      <Section title="What I did">
        <ul className="dash-list text-[17px] leading-[1.6]">
          {did.map((d) => (
            <li key={d}>
              <Rich text={d} />
            </li>
          ))}
        </ul>
      </Section>

      {(hard || result) && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {hard && (
            <div className="rounded-lg border border-[var(--line)] bg-white p-5">
              <h2 className="label">The hard part</h2>
              <p className="mt-2 text-[16px] leading-[1.55]">
                <Rich text={hard} />
              </p>
            </div>
          )}
          {result && (
            <div className="rounded-lg border border-[var(--line)] bg-[var(--accent-soft)] p-5">
              <h2 className="label">How it turned out</h2>
              <p className="mt-2 text-[16px] leading-[1.55]">
                <Rich text={result} />
              </p>
            </div>
          )}
        </div>
      )}

      {children}

      <div className="sans mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 text-[13.5px]">
        <Link href="/projects" className="link-arrow">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <Link href="/" className="link-arrow">
          Back to home
        </Link>
      </div>
    </div>
  );
}
