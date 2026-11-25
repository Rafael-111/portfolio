import Link from "next/link";
import Byline from "../Byline";
import { Prose, P, Bullets, Specs } from "../../components/ProjectPage";

export const metadata = { title: "Part Penguin · Rafael Petrosian" };

const B = "/img/blog/partpenguin/";

function H({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="sans mt-14 scroll-mt-6 text-[23px] font-semibold leading-snug tracking-[-0.01em]">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="sans mt-8 text-[17.5px] font-semibold leading-snug">{children}</h3>;
}

function Shot({ src, alt, cap, bleed }: { src: string; alt: string; cap: string; bleed?: boolean }) {
  return (
    <figure className={`mt-6 ${bleed ? "xl:-mx-32" : ""}`}>
      <a href={src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-[var(--line)] bg-white">
        <img src={src} alt={alt} loading="lazy" className="h-auto w-full" />
      </a>
      <figcaption className="sans mt-2 text-[13px] leading-snug text-[var(--muted)]">{cap}</figcaption>
    </figure>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 rounded-lg border-l-4 border-[var(--accent)] bg-white px-5 py-4 text-[16px] leading-[1.6]">{children}</div>;
}

const toc = [
  ["problem", "The problem with getting a part made"],
  ["idea", "The idea: an auction house for parts"],
  ["plan", "Planning it on paper first"],
  ["build", "Building it with Cursor and GPT"],
  ["site", "What we shipped"],
  ["hard", "The website was the easy part"],
  ["now", "Where it is now"],
  ["learned", "What I learned"],
];

export default function PartPenguinPost() {
  return (
    <article className="mx-auto w-full max-w-[780px] px-4 py-10 sm:px-10 lg:py-16">
      <Link href="/blogs" className="sans text-[13.5px] text-[var(--muted)] hover:text-[var(--ink)]">
        ← All blogs
      </Link>
      <header className="mt-4 border-b-2 border-[var(--ink)] pb-5">
        <h1 className="sans text-[30px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
          Part Penguin: we built a marketplace for machine shops and never launched it
        </h1>
        <p className="mt-3 text-[18px] leading-[1.5] text-[var(--muted)]">
          A bidding site where anyone can post a part and machine shops compete to make it. Two mechanical engineers, Cursor, ChatGPT, one
          summer, and a full-stack MVP without a $50–100k developer bill. Then we found out the website was the easy part.
        </p>
        <Byline verb="Built" when="Side project · Summer 2025 · partpenguin.com" />
      </header>

      <Shot
        src={`${B}site-hero.webp`}
        alt="Part Penguin home page"
        cap="The Part Penguin home page, still live at partpenguin.com."
      />

      <div className="sans mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["1", "summer to an MVP"],
          ["2", "mechanical engineers, zero web devs"],
          ["$0", "spent on developers"],
          ["0", "launches (yet)"],
        ].map(([v, l]) => (
          <div key={l} className="rounded-lg border border-[var(--line)] bg-white px-4 py-3">
            <div className="text-[24px] font-bold leading-none">{v}</div>
            <div className="mt-1 text-[12.5px] leading-snug text-[var(--muted)]">{l}</div>
          </div>
        ))}
      </div>

      <nav className="sans mt-8 rounded-lg border border-[var(--line)] bg-white px-5 py-4">
        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">Contents</p>
        <ol className="mt-2 grid gap-x-6 gap-y-1 text-[14px] sm:grid-cols-2">
          {toc.map(([id, t], i) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-[var(--accent)]">
                {i + 1}. {t}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <H id="problem">The problem with getting a part made</H>
      <Prose>
        <P text="If you've ever tried to get a single custom part machined, you know the drill. You email a few local shops. One answers in a week. One wants you to call. One sends a quote on letterhead as a PDF attached to a reply-all. A lot of machine shops still run on phone calls, email, and whoever happens to know whom." />
        <P text="The fast alternative is an instant-quote platform like **Xometry**. Upload a CAD file and get a price in minutes. It's genuinely great, and you pay for that convenience. For a hobbyist, a student team, or a small business that needs a few brackets, it can be a lot." />
        <P text="And on the other side of the counter, plenty of small shops have open machine time and no good way to find the people who need it." />
      </Prose>

      <H id="idea">The idea: an auction house for parts</H>
      <Prose>
        <P text="So Armen and I asked: **why not let shops bid on the work?** An online B2B and B2C service where anyone (a business, a hobbyist, a university team, even another shop) posts the part they need with their drawings, and verified machine shops compete to make it." />
        <P text="Our original outline described it as a public work auction tailored to machine shops, similar to Upwork, with listings sorted by which auction ends soonest, like Bring a Trailer. Clients see every bid, can message shops, and accept the one that fits. Shops scroll live work orders and bid on what they can actually make." />
      </Prose>
      <Specs
        head={["", "For clients (engineers and creators)", "For shops (manufacturers)"]}
        rows={[
          ["Pitch", "Get parts made fast", "Find your next customer"],
          ["How", "Post a work order, compare bids from multiple shops", "Browse admin-reviewed work orders that match your capabilities"],
          ["Cost", "No platform fee: quote + tax + payment processing", "0.5–5% commission, only on completed jobs"],
          ["Protection", "Payment held in escrow until you receive the part", "Guaranteed payment on NET-21 terms"],
          ["Trust", "Verified shops with ratings and reviews", "Build an online reputation and ratings"],
        ]}
      />

      <H id="plan">Planning it on paper first</H>
      <Prose>
        <P text="Before writing a single line of code, we mapped every page and every way a user could move between them. Being mechanical engineers, we treated it like any other system: define the states, define the transitions, then build." />
      </Prose>
      <Shot
        src={`${B}flowchart.webp`}
        alt="Part Penguin website flow chart"
        cap="The flow chart behind the site. Click to open full size."
        bleed
      />
      <Prose>
        <div className="mt-6" />
        <P text="How to read it: everyone lands on a **welcome page** that handles log in. New users **sign up as a client or a shop**, then sign in again. From there the site splits:" />
      </Prose>
      <Bullets
        items={[
          "**Client side:** the client home page leads to a profile page, a **create work order** page, and each work order they've posted. From a work order, they can open the **accept bid** page.",
          "**Shop side:** the shop home page leads to **my work orders**, any posted work order (which opens a **create bid** page that recommends jobs the shop is a good fit for), an **outgoing bids** page, a profile page, and **active projects**.",
          "**The crossover:** a shop can also be a client. If a shop needs to outsource a part, it posts a work order exactly like a client would.",
          "If you're already logged in, the site skips the welcome page and drops you on your home page.",
        ]}
      />
      <Prose>
        <div className="mt-4" />
        <P text="The written outline went into more detail on each page: a work order has a title, description, precision, industry, materials, required certifications, a needed-by date, and file uploads. Shops can comment with questions, edit a bid within an hour (in case you fat-finger a zero), and build a public record of completed jobs that clients rate." />
      </Prose>

      <H id="build">Building it with Cursor and GPT</H>
      <Prose>
        <P text="Neither of us is a software engineer. A full-stack marketplace with accounts, two user types, file uploads, bidding, messaging, an admin review queue, escrow payments, and email verification is the kind of thing agencies quote at **$50,000 to $100,000**." />
        <P text="We built it ourselves with **Cursor** and **ChatGPT**. It took the entire summer. The workflow looked a lot like hardware prototyping: build a version, click through every path on the flow chart, write down everything that breaks, fix it, repeat." />
        <P text="Our first revision list was a good example of what 'MVP' actually means. A few highlights:" />
      </Prose>
      <Bullets
        items={[
          "Signing up as a client failed with 'Password can't be blank,' even with a password entered. Shops could sign up fine.",
          "Shops could browse and bid before an admin approved them. Not ideal for a 'verified shops' platform.",
          "After a client accepted a bid, other shops could still bid. Clients could accept more than one.",
          "Clicking 'view work orders' as a client showed you the shop view, which let you place a bid on your own part.",
          "Messaging a shop from its profile redirected to a completely unrelated website.",
          "No new-message or new-bid counters, no download-all-files button for shops, and no file type limits on uploads.",
        ]}
      />
      <Prose>
        <div className="mt-4" />
        <P text="Each of those became a fix: email verification, an admin approval gate for shops, one accepted bid per work order, bid counts next to each work order, a messaging box on every work order page, and uploads limited to PDF, JPEG, PNG, STL, STEP, PRT, SLDPRT, DXF, and AI files." />
      </Prose>

      <H id="site">What we shipped</H>
      <Prose>
        <P text="By the end of the summer we had a working MVP. The full client flow, start to finish:" />
      </Prose>
      <Specs
        head={["Step", "What happens"]}
        rows={[
          ["1. Create an account", "Sign up as a client and pick a role: business, hobbyist, government, or academia. Verify your email."],
          ["2. Submit a work order", "Title, part number, description, CAD files (STL, PRT, SLDPRT), PDFs, quantity, deadline, and how long the listing stays up (1–4 weeks)."],
          ["3. Admin review", "We review it within 24 hours, clarify anything missing, generate a thumbnail, and publish it to qualified shops."],
          ["4. Receive bids", "Shops bid with price, lead time, and shipping. Message them directly."],
          ["5. Accept and pay", "Accept one bid. Payment is collected and held in escrow."],
          ["6. Receive and rate", "Approve the part, the shop gets paid, and both sides leave a rating."],
        ]}
      />
      <Prose>
        <div className="mt-4" />
        <P text="Shops had their own path: register with capabilities (milling, turning, 3D printing, welding) and certifications like ISO or AS9100, get **verified with a 5-character code sent by physical mail**, browse work orders, download files, bid, and get paid on **NET-21** terms, meaning 21 days after shipping or when the client approves, whichever comes first." />
        <P text="We also wrote **technical standards** so everyone knew the defaults: what a drawing has to include, ±0.005 in on machined metal, ±0.010 in on plastics, 125 Ra finish, sheet metal bend tolerances, 3D printing tolerances, and no material substitutions without written approval. That part felt the most like engineering." />
      </Prose>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <figure>
          <a href={`${B}site-how-client.webp`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-[var(--line)] bg-white">
            <img src={`${B}site-how-client.webp`} alt="How it works for clients" loading="lazy" className="h-auto w-full" />
          </a>
          <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">How it works, client side.</figcaption>
        </figure>
        <figure>
          <a href={`${B}site-how-shop.webp`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-[var(--line)] bg-white">
            <img src={`${B}site-how-shop.webp`} alt="How it works for shops" loading="lazy" className="h-auto w-full" />
          </a>
          <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">How it works, shop side.</figcaption>
        </figure>
      </div>
      <Shot src={`${B}site-home-split.webp`} alt="Home page sections for manufacturers and engineers" cap="The two-sided pitch on the home page, and the four-step flow." />
      <div className="mt-6 grid items-start gap-4 sm:grid-cols-[1fr_220px]">
        <figure>
          <a href={`${B}site-signup.webp`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-[var(--line)] bg-white">
            <img src={`${B}site-signup.webp`} alt="Client sign up page" loading="lazy" className="h-auto w-full" />
          </a>
          <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">Client sign up. Shops get their own sign up page.</figcaption>
        </figure>
        <figure>
          <a href={`${B}site-mobile.webp`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-[var(--line)] bg-white">
            <img src={`${B}site-mobile.webp`} alt="Part Penguin on a phone" loading="lazy" className="h-auto w-full" />
          </a>
          <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">It works on a phone too.</figcaption>
        </figure>
      </div>

      <H id="hard">The website was the easy part</H>
      <Prose>
        <P text="Here's the twist. We never launched." />
        <P text="A marketplace is worthless until both sides show up. Shops won't sign up without work orders, and clients won't post work orders without shops. Building the website took a summer. Building the **customer network** is the actual business, and that takes marketing, sales, and a lot of phone calls." />
        <P text="We did see it coming. Our marketing doc listed the target customers (university engineering teams and machine shops, car forums, 3D printing farms, woodshops, small local shops, factories that need replacement parts) and the plan to reach them: cold calls, forums, podcasts, trade shows, and Instagram and Reddit machining pages. It also listed the risks:" />
      </Prose>
      <Bullets
        items={[
          "**Sticker shock.** Real shop quotes can surprise people who've never bought a machined part.",
          "**The ratio problem.** Too many clients and orders sit unmade. Too many shops and they leave for lack of work. We even did the math: if a shop can take on about four extra jobs and a client posts about two, you need roughly two clients per shop.",
          "**Bugs and scale.** File uploads, payments, and traffic all have to hold up from day one.",
          "**Fees.** Take too big a cut and the model breaks.",
          "**Shipping, quality, and scams.** Without a solid rating system and moderation, trust disappears fast.",
        ]}
      />
      <Callout>
        One line from our own notes summed it up: <em>&quot;You either have to be the first, or the best. We must be first.&quot;</em> We weren&apos;t first. Platforms like Xometry and Jiga
        already had the network, the reputation, and the shops.
      </Callout>

      <H id="now">Where it is now</H>
      <Prose>
        <P text="The site is still up at **partpenguin.com**, and it's a good snapshot of what two mechanical engineers can build with AI tools in a summer." />
        <P text="And the tools have only gotten better. Today, with something like **Claude Code**, the build we spent a summer on would go a lot faster. That makes the lesson even sharper: when building the product gets cheap, the network and the distribution are what's actually worth something." />
        <P text="If you need this service, check out **Jiga**. It's essentially the same idea: upload your part, get quotes from vetted manufacturers, and get it made." />
      </Prose>
      <div className="mt-4 flex flex-wrap gap-3">
        {[
          ["Visit Part Penguin ↗", "https://partpenguin.com/"],
          ["Check out Jiga ↗", "https://jiga.io/"],
        ].map(([l, h]) => (
          <a key={h} href={h} target="_blank" rel="noopener noreferrer" className="sans inline-block rounded-md border border-[var(--line)] bg-white px-4 py-2.5 text-[14px] font-medium hover:border-[var(--ink)]">
            {l}
          </a>
        ))}
      </div>

      <H id="learned">What I learned</H>
      <Bullets
        items={[
          "**The product is the easy part. Distribution is the hard part.** Especially for a two-sided marketplace, where you have to win both sides at once.",
          "**Validate before you build.** Call twenty machine shops and ask if they want more work before writing any code. (Yes, this is the same lesson as Sparkli. Apparently I needed to learn it twice.)",
          "**AI tools make software accessible to engineers.** We built a working full-stack marketplace without paying a developer. That's a real skill, and it carries over to every engineering job: scripts, tools, dashboards, automation.",
          "**Plan it like a system.** The flow chart and the page-by-page outline kept the build sane. Every bug we found was a path on the flow chart we hadn't tested.",
          "**Being first matters in a marketplace.** The network is the moat, and the incumbents already had it.",
        ]}
      />

      <div className="mt-12 border-t border-[var(--line)] pt-6">
        <Link href="/blogs" className="sans text-[14px] text-[var(--accent)]">
          ← Back to all blogs
        </Link>
      </div>
    </article>
  );
}
