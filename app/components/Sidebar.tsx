"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { contact } from "../data";

const nav = [
  { label: "Home", href: "/", external: false },
  { label: "Projects", href: "/projects", external: false },
  { label: "Resume", href: contact.resume, external: true },
  { label: "Contact", href: `mailto:${contact.email}`, external: false },
  { label: "LinkedIn", href: contact.linkedin, external: true },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <ul className="space-y-1">
      {nav.map((item) => {
        const active =
          !item.external &&
          !item.href.startsWith("mailto:") &&
          (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href));
        const cls = `group flex items-center justify-between rounded-md px-3 py-2 text-[14.5px] transition-colors ${
          active
            ? "bg-[var(--accent-soft)] text-[var(--accent)] font-semibold"
            : "text-[var(--ink)] hover:bg-black/[0.04]"
        }`;
        const arrow = item.external ? (
          <span aria-hidden="true" className="text-[var(--faint)] group-hover:text-[var(--ink)]">
            ↗
          </span>
        ) : null;
        return (
          <li key={item.label}>
            {item.external || item.href.startsWith("mailto:") ? (
              <a
                href={item.href}
                className={cls}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={onNavigate}
              >
                {item.label}
                {arrow}
              </a>
            ) : (
              <Link href={item.href} className={cls} onClick={onNavigate}>
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop side panel */}
      <aside className="sans fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-w)] flex-col border-r border-[var(--line)] bg-[var(--paper)] px-5 py-8 lg:flex">
        <Link href="/" className="block px-3">
          <div className="text-[19px] font-bold tracking-[-0.01em] leading-tight">Rafael Petrosian</div>
          <div className="mt-1 text-[13px] text-[var(--muted)]">Mechanical Engineer</div>
        </Link>

        <nav className="mt-8" aria-label="Main">
          <NavLinks />
        </nav>

        <div className="mt-auto px-3 text-[12.5px] leading-relaxed text-[var(--muted)]">
          <div>{contact.location}</div>
          <a href={`mailto:${contact.email}`} className="hover:text-[var(--ink)]">
            {contact.email}
          </a>
        </div>
      </aside>

      {/* Phone / tablet top bar */}
      <header className="sans sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="leading-tight" onClick={() => setOpen(false)}>
            <div className="text-[16px] font-bold">Rafael Petrosian</div>
            <div className="text-[12px] text-[var(--muted)]">Mechanical Engineer</div>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md border border-[var(--line)] px-3 py-1.5 text-[13.5px] font-medium"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="border-t border-[var(--line)] px-2 pb-3 pt-2" aria-label="Main">
            <NavLinks onNavigate={() => setOpen(false)} />
          </nav>
        )}
      </header>
    </>
  );
}
