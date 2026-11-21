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

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div
      className={`mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--line)] ${
        items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
      }`}
    >
      {items.map((s) => (
        <div key={s.label} className="bg-white px-4 py-4">
          <p className="sans text-[24px] font-semibold leading-none tracking-[-0.01em] text-[var(--ink)] sm:text-[26px]">
            {s.value}
          </p>
          <p className="sans mt-2 text-[12.5px] leading-snug text-[var(--muted)]">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-[17px] leading-[1.65]">{children}</div>;
}

export function P({ text }: { text: string }) {
  return (
    <p>
      <Rich text={text} />
    </p>
  );
}

export function Sub({ children }: { children: ReactNode }) {
  return <h3 className="sans mb-3 mt-9 text-[17px] font-semibold first:mt-0">{children}</h3>;
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="dash-list text-[17px] leading-[1.6]">
      {items.map((d) => (
        <li key={d}>
          <Rich text={d} />
        </li>
      ))}
    </ul>
  );
}

export function Specs({
  head,
  rows,
  note,
}: {
  head: string[];
  rows: string[][];
  note?: string;
}) {
  return (
    <div className="my-5">
      <div className="sans overflow-x-auto rounded-lg border border-[var(--line)] bg-white">
        <table className="w-full min-w-[420px] text-left text-[14.5px]">
          <thead className="bg-[var(--paper)] text-[12px] uppercase tracking-[0.08em] text-[var(--muted)]">
            <tr>
              {head.map((h) => (
                <th key={h} className="px-4 py-2.5 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-[var(--line)] align-top">
                {r.map((c, i) => (
                  <td key={i} className={`px-4 py-2.5 ${i === 0 ? "font-medium" : "tabular-nums"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="sans mt-2 text-[12.5px] leading-snug text-[var(--muted)]">{note}</p>}
    </div>
  );
}

/** Divider between the quick summary (top) and the full engineering story (below). */
export function DeepDive({ children }: { children?: ReactNode }) {
  return (
    <div className="mt-16 border-t-2 border-[var(--ink)] pt-5">
      <h2 className="sans text-[22px] font-bold tracking-[-0.01em]">Engineering detail</h2>
      <p className="mt-1 max-w-[620px] text-[16px] leading-[1.55] text-[var(--muted)]">
        {children ?? "The full story for anyone who wants to dig in: design decisions, numbers, and what didn't work."}
      </p>
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
  stats?: { value: string; label: string }[];
  heroVideo?: { src: string; poster?: string; caption?: string };
  children?: ReactNode;
};

export default function ProjectPage({ title, meta, hero, oneLiner, did, hard, result, stats, heroVideo, children }: Props) {
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

      {heroVideo && (
        <figure className="mt-8">
          <div className="shot">
            <video controls preload="metadata" playsInline className="block w-full" poster={heroVideo.poster}>
              <source src={heroVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {heroVideo.caption && (
            <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">{heroVideo.caption}</figcaption>
          )}
        </figure>
      )}

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

      {stats && <Stats items={stats} />}

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
