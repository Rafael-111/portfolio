import Link from "next/link";
import { contact } from "../data";
import { proofIntro, proofItems, type ProofImage } from "../hardwareProof";

export const metadata = { title: "Hardware Proof · Rafael Petrosian" };

function Tile({ img, className = "", style }: { img: ProofImage; className?: string; style?: React.CSSProperties }) {
  const contain = img.fit === "contain";
  return (
    <figure style={style} className={`relative overflow-hidden rounded-md border border-[var(--line)] ${contain ? "bg-white" : "bg-black/5"} ${className}`}>
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
    <div className="mx-auto w-full max-w-[1000px] px-4 py-8 sm:px-8 lg:py-10">
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

      <section className="mt-8 flex flex-col divide-y divide-[var(--line)]">
        {proofItems.map((p, idx) => {
          const [main, ...rest] = p.images;
          const cols = rest.length >= 3 ? 2 : 1;
          const rows = Math.max(Math.ceil(rest.length / cols), 1);
          return (
            <article key={p.title} className={idx === 0 ? "pb-10" : "py-10"}>
              <div className="flex flex-col gap-1.5 sm:h-[360px] sm:flex-row">
                <Tile img={main} className="h-[240px] sm:h-full sm:flex-[1.25]" />
                {rest.length > 0 && (
                  <div
                    className="grid h-[240px] gap-1.5 sm:h-full sm:flex-1"
                    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
                  >
                    {rest.map((img, i) => (
                      <Tile
                        key={img.src}
                        img={img}
                        className="h-full"
                        style={cols === 2 && rest.length % 2 === 1 && i === rest.length - 1 ? { gridColumn: "span 2" } : undefined}
                      />
                    ))}
                  </div>
                )}
              </div>
              <h2 className="sans mt-4 text-[20px] font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 max-w-[820px] text-[16px] leading-[1.55]"><strong>What I did:</strong> {p.did}</p>
              <p className="mt-1.5 max-w-[820px] text-[16px] leading-[1.55]"><strong>What was hard:</strong> {p.hard}</p>
              {p.href && (
                <Link href={p.href} className="link-arrow sans mt-2 inline-block text-[13.5px]">Full project →</Link>
              )}
            </article>
          );
        })}
      </section>
      <p className="sans mt-10 text-[13px] text-[var(--muted)]">{contact.email} · rafaelpetrosian.com</p>
    </div>
  );
}
