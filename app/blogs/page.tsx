import Link from "next/link";
import { posts } from "./posts";

export const metadata = { title: "Blogs · Rafael Petrosian" };

export default function BlogsPage() {
  return (
    <div className="mx-auto w-full max-w-[860px] px-4 py-10 sm:px-10 lg:py-16">
      <header className="border-b-2 border-[var(--ink)] pb-5">
        <h1 className="sans text-[34px] font-bold leading-none tracking-[-0.02em] sm:text-[42px]">Blogs</h1>
        <p className="mt-3 text-[17px] text-[var(--muted)]">Projects I worked on outside of school, and what they taught me.</p>
      </header>
      <div className="mt-8 flex flex-col gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blogs/${p.slug}`}
            className="group flex flex-col gap-4 rounded-lg border border-[var(--line)] bg-white p-4 hover:border-[var(--ink)] sm:flex-row"
          >
            <div className="shot h-[160px] w-full shrink-0 sm:w-[200px]">
              <img src={p.cover} alt="" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="sans text-[12.5px] text-[var(--muted)]">{p.date}</p>
              <h2 className="sans mt-1 text-[19px] font-semibold leading-snug group-hover:text-[var(--accent)]">{p.title}</h2>
              <p className="mt-2 text-[15.5px] leading-[1.5]">{p.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
