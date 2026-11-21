import Link from "next/link";
import Rich from "./components/Rich";
import { contact, summary, experience, projects, education, cards, type Entry } from "./data";

const snapshots = [
  { slug: "aerosae", src: "/img/aero-plane.webp", alt: "Cal Aero SAE plane on the runway", label: "Cal Aero SAE plane" },
  { slug: "motostudent", src: "/img/moto-bike.webp", alt: "MotoStudent race motorcycle CAD", label: "MotoStudent race bike" },
  { slug: "pyrobot", src: "/img/robot-turret.webp", alt: "πRo-Bot fire-fighting turret", label: "πRo-Bot fire turret" },
  { slug: "thermal-paste", src: "/img/thermal-rig.webp", alt: "Thermal paste test rig", label: "Thermal test rig" },
];

function EntryBlock({ e }: { e: Entry }) {
  return (
    <article className="grid gap-x-7 gap-y-4 border-t border-[var(--line)] py-7 first:border-t-0 first:pt-2 sm:grid-cols-[1fr_188px]">
      <div>
        <div className="sans flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-[16px]">
            <Link href={`/projects/${e.slug}`} className="font-semibold hover:text-[var(--accent)]">
              {e.org}
            </Link>
            <span className="font-normal text-[var(--muted)]">
              {" "}
              · {e.role}
              {e.place ? ` · ${e.place}` : ""}
            </span>
          </h3>
          <span className="text-[13px] tabular-nums text-[var(--muted)]">{e.dates}</span>
        </div>
        <ul className="dash-list mt-3 text-[16px] leading-[1.6]">
          {e.bullets.map((b) => (
            <li key={b}>
              <Rich text={b} />
            </li>
          ))}
        </ul>
        <Link href={`/projects/${e.slug}`} className="link-arrow mt-2">
          See the project <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Link
        href={`/projects/${e.slug}`}
        className="shot aspect-[16/9] sm:mt-1 sm:aspect-[4/3]"
        aria-label={`Open ${e.org} project`}
      >
        <img
          src={e.image}
          alt={e.imageAlt}
          loading="lazy"
          style={e.imageFit === "contain" ? { objectFit: "contain", padding: "18%" } : undefined}
        />
      </Link>
    </article>
  );
}

export default function Home() {
  const more = cards.filter((c) => !c.featured);

  return (
    <div className="mx-auto w-full max-w-[860px] px-4 py-10 sm:px-10 lg:py-16">
      {/* Resume header */}
      <header className="flex flex-col gap-4 border-b-2 border-[var(--ink)] pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="sans">
          <h1 className="text-[34px] font-bold leading-none tracking-[-0.02em] sm:text-[42px]">
            {contact.name}
          </h1>
          <p className="mt-2 text-[15px] text-[var(--muted)]">
            {contact.title} · {contact.location}
          </p>
        </div>
        <div className="sans flex flex-wrap gap-2 text-[13.5px] font-medium">
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--ink)] px-3.5 py-2 text-white hover:bg-[var(--accent)]"
          >
            Resume (PDF)
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-md border border-[var(--line)] bg-white px-3.5 py-2 hover:border-[var(--ink)]"
          >
            Email me
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--line)] bg-white px-3.5 py-2 hover:border-[var(--ink)]"
          >
            LinkedIn ↗
          </a>
        </div>
      </header>

      {/* Snapshots */}
      <section className="mt-8" aria-label="Project snapshots">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {snapshots.map((s) => (
            <Link key={s.slug} href={`/projects/${s.slug}`} className="shot group relative aspect-[4/5]">
              <img src={s.src} alt={s.alt} />
              <span className="sans absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2.5 pt-8 text-[13px] font-medium text-white">
                {s.label} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="mt-12">
        <h2 className="label">Summary</h2>
        <div className="mt-4 space-y-2.5 text-[17px] leading-[1.6]">
          {summary.map((s) => (
            <p key={s}>
              <Rich text={s} />
            </p>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="label">Experience</h2>
        <div className="mt-3">
          {experience.map((e) => (
            <EntryBlock key={e.slug} e={e} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-10">
        <h2 className="label">Engineering Projects</h2>
        <div className="mt-3">
          {projects.map((e) => (
            <EntryBlock key={e.slug} e={e} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-10">
        <h2 className="label">Education</h2>
        <div className="sans mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="text-[16px]">
            <span className="font-semibold">{education.school}</span>
            <span className="text-[var(--muted)]"> · {education.degree}</span>
          </p>
          <span className="text-[13px] text-[var(--muted)]">{education.dates}</span>
        </div>
      </section>

      {/* More projects */}
      <section className="mt-14 border-t border-[var(--line)] pt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="label">More Projects</h2>
          <Link href="/projects" className="link-arrow">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {more.map((c) => (
            <Link key={c.slug} href={`/projects/${c.slug}`} className="group block">
              <div className="shot aspect-[4/3]">
                {c.image && (
                  <img
                    src={c.image}
                    alt={c.imageAlt ?? ""}
                    loading="lazy"
                    style={c.imageFit === "contain" ? { objectFit: "contain", padding: "6%" } : undefined}
                  />
                )}
              </div>
              <p className="sans mt-2 text-[13.5px] font-medium leading-snug group-hover:text-[var(--accent)]">
                {c.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="sans mt-16 border-t border-[var(--line)] pt-6 text-[13px] text-[var(--muted)]">
        Want to talk? Email me at{" "}
        <a href={`mailto:${contact.email}`} className="text-[var(--ink)] underline underline-offset-2">
          {contact.email}
        </a>
        .
      </footer>
    </div>
  );
}
