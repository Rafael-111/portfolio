import Link from "next/link";
import { contact } from "../data";
import { proofIntro, proofItems } from "../hardwareProof";

export const metadata = { title: "Hardware Proof · Rafael Petrosian" };

export default function HardwareProofPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] px-4 py-10 sm:px-10 lg:py-16">
      <header className="border-b-2 border-[var(--ink)] pb-5">
        <h1 className="sans text-[34px] font-bold leading-none tracking-[-0.02em] sm:text-[42px]">Hardware Proof</h1>
        <p className="mt-3 max-w-[680px] text-[17px] leading-[1.55] text-[var(--muted)]">{proofIntro}</p>
        <a
          href="/Rafael%20Petrosian-Hardware-Proof.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="sans mt-4 inline-block rounded-md bg-[var(--ink)] px-3.5 py-2 text-[13.5px] font-medium text-white hover:bg-[var(--accent)]"
        >
          Download one-page PDF
        </a>
      </header>
      <section className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {proofItems.map((p) => (
          <div key={p.title}>
            <div className="shot aspect-[4/3]">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <h3 className="sans mt-3 text-[16.5px] font-semibold leading-snug">{p.title}</h3>
            <p className="mt-1 text-[15px] leading-[1.5]"><strong>What I did:</strong> {p.did}</p>
            <p className="mt-1 text-[15px] leading-[1.5]"><strong>What was hard:</strong> {p.hard}</p>
            <Link href={p.href} className="link-arrow sans mt-1 inline-block text-[13.5px]">Full project →</Link>
          </div>
        ))}
      </section>
      <p className="sans mt-12 text-[13.5px] text-[var(--muted)]">
        {contact.email} · rafaelpetrosian.com
      </p>
    </div>
  );
}
