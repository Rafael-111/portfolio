import Link from "next/link";
import { contact } from "../data";
import { proofIntro, proofItems, type ProofImage } from "../hardwareProof";

export const metadata = { title: "Hardware Proof · Rafael Petrosian" };

function Tile({ img, className = "" }: { img: ProofImage; className?: string }) {
  const contain = img.fit === "contain";
  return (
    <figure className={`relative overflow-hidden rounded-md border border-[var(--line)] ${contain ? "bg-white" : "bg-black/5"} ${className}`}>
      <img
        src={img.src}
        alt={img.cap}
        loading="lazy"
        className={`absolute inset-0 h-full w-full ${contain ? "object-contain p-1.5 pb-5" : "object-cover"}`}
      />
      <figcaption className="sans absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2 pb-1 pt-4 text-[11px] font-medium leading-tight text-white">
        {img.cap}
      </figcaption>
    </figure>
  );
}

export default function HardwareProofPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 py-8 sm:px-8 lg:py-10">
      <header className="flex flex-col gap-3 border-b-2 border-[var(--ink)] pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="sans text-[30px] font-bold leading-none tracking-[-0.02em] sm:text-[36px]">Hardware Proof</h1>
          <p className="mt-2 text-[16px] leading-[1.5] text-[var(--muted)]">{proofIntro}</p>
        </div>
        <a
          href="/Rafael%20Petrosian-Hardware-Proof.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="sans shrink-0 self-start rounded-md bg-[var(--ink)] px-3.5 py-2 text-[13.5px] font-medium text-white hover:bg-[var(--accent)] sm:self-auto"
        >
          One-page PDF
        </a>
      </header>

      <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2">
        {proofItems.map((p) => {
          const [main, ...rest] = p.images;
          const rows = Math.max(rest.length, 1);
          return (
            <article key={p.title} className="flex flex-col">
              <div
                className="grid h-[250px] gap-1.5 sm:h-[280px]"
                style={{ gridTemplateColumns: rest.length ? "1.7fr 1fr" : "1fr", gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
              >
                <div style={{ gridRow: `1 / span ${rows}` }} className="h-full"><Tile img={main} className="h-full" /></div>
                {rest.length > 0 &&
                  rest.map((img, i) => (
                    <Tile key={img.src} img={img} className="h-full" />
                  ))}
              </div>
              <h2 className="sans mt-3 text-[16.5px] font-semibold leading-snug">{p.title}</h2>
              <p className="sans text-[12.5px] text-[var(--muted)]">{p.context}</p>
              <p className="mt-1.5 text-[14.5px] leading-[1.45]"><strong>What I did:</strong> {p.did}</p>
              <p className="mt-1 text-[14.5px] leading-[1.45]"><strong>What was hard:</strong> {p.hard}</p>
              {p.href && (
                <Link href={p.href} className="link-arrow sans mt-1 text-[13px]">Full project →</Link>
              )}
            </article>
          );
        })}
      </section>
      <p className="sans mt-10 text-[13px] text-[var(--muted)]">{contact.email} · rafaelpetrosian.com</p>
    </div>
  );
}
