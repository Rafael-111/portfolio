import Link from "next/link";
import { cards } from "../data";

export const metadata = { title: "Projects · Rafael Petrosian" };

function Card({ c, big, wide }) {
  return (
    <Link href={`/projects/${c.slug}`} className={`group block ${wide ? "sm:col-span-2" : ""}`}>
      <div className={`shot ${wide ? "aspect-[16/10] sm:aspect-[21/9]" : big ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        {c.image && (
          <img
            src={c.image}
            alt={c.imageAlt ?? ""}
            loading="lazy"
            style={c.imageFit === "contain" ? { objectFit: "contain", padding: "14%" } : undefined}
          />
        )}
      </div>
      <p className="sans mt-3 text-[11.5px] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">{c.tag}</p>
      <h3 className="sans mt-1 text-[17px] font-semibold leading-snug group-hover:text-[var(--accent)]">{c.title}</h3>
      <p className="mt-1 text-[15.5px] leading-[1.5] text-[var(--ink)]/85">{c.line}</p>
    </Link>
  );
}

export default function ProjectsPage() {
  const lead = cards.find((c) => c.slug === "aerosae");
  const featured = cards.filter((c) => c.featured && c.slug !== "aerosae");
  const more = cards.filter((c) => !c.featured);

  return (
    <div className="mx-auto w-full max-w-[980px] px-4 py-10 sm:px-10 lg:py-16">
      <header className="border-b-2 border-[var(--ink)] pb-5">
        <h1 className="sans text-[34px] font-bold leading-none tracking-[-0.02em] sm:text-[42px]">Projects</h1>
        <p className="mt-3 max-w-[620px] text-[17px] leading-[1.55] text-[var(--muted)]">
          Things I designed, built, and tested. Click any project for photos, CAD, data, and the full reports.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="label">Featured</h2>
        <div className="mt-5 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          <Card c={lead} big wide />
          {featured.map((c) => (
            <Card key={c.slug} c={c} big />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="label">More Projects</h2>
        <div className="mt-5 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((c) => (
            <Card key={c.slug} c={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
