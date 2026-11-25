const people = {
  rafael: { name: "Rafael Petrosian", href: "https://www.linkedin.com/in/rafaelpetrosian/" },
  armen: { name: "Armen Arakelyan", href: "https://www.linkedin.com/in/armen-arakelyan-171b71219/" },
};

function Person({ p }: { p: { name: string; href: string } }) {
  return (
    <a href={p.href} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-2 hover:text-[var(--accent)]">
      {p.name}
    </a>
  );
}

export default function Byline({ verb = "Engineered", when }: { verb?: string; when: string }) {
  return (
    <div className="sans mt-4 space-y-1 text-[13.5px] text-[var(--muted)]">
      <p>
        {verb} by <Person p={people.rafael} /> and <Person p={people.armen} />
      </p>
      <p>{when}</p>
    </div>
  );
}
