import Link from "next/link";
import { Prose, P, Bullets, Specs } from "../../components/ProjectPage";

export const metadata = { title: "Sparkli · Rafael Petrosian" };

const B = "/img/blog/sparkli/";
const V = "/video/sparkli/";

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

function Gallery({ items, cols = 3, aspect = "aspect-square" }: { items: { src: string; alt: string; caption?: string }[]; cols?: 2 | 3; aspect?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${cols === 3 ? "sm:grid-cols-3" : ""}`}>
      {items.map((it) => (
        <figure key={it.src}>
          <a href={it.src} target="_blank" rel="noopener noreferrer" className={`flex ${aspect} items-center justify-center overflow-hidden rounded-lg border border-[var(--line)] bg-white p-2`}>
            <img src={it.src} alt={it.alt} loading="lazy" className="max-h-full max-w-full object-contain" />
          </a>
          {it.caption && <figcaption className="sans mt-2 text-[12.5px] leading-snug text-[var(--muted)]">{it.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function Clips({ items }: { items: { n: string; cap: string }[] }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {items.map((c) => (
        <figure key={c.n}>
          <video
            className="aspect-[9/16] w-full rounded-lg border border-[var(--line)] bg-black object-cover"
            src={`${V}test-${c.n}.mp4`}
            poster={`${V}test-${c.n}.jpg`}
            controls
            playsInline
            preload="none"
          />
          <figcaption className="sans mt-2 text-[12.5px] leading-snug text-[var(--muted)]">{c.cap}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function Wide({ src, alt, cap, bleed }: { src: string; alt: string; cap: string; bleed?: boolean }) {
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
  return (
    <div className="mt-6 rounded-lg border-l-4 border-[var(--accent)] bg-white px-5 py-4 text-[16px] leading-[1.6]">{children}</div>
  );
}

const toc = [
  ["why", "Why a carbonator"],
  ["idea", "The idea"],
  ["summer1", "Summer 1: the trigger era"],
  ["mechanism", "How the 2024 mechanism worked"],
  ["parts", "Parts, printers, and McMaster"],
  ["versions", "V1 to V2.8.4 in six weeks"],
  ["straw", "The straw saga"],
  ["tests", "The test matrix"],
  ["videos", "Test footage"],
  ["boom", "Things that exploded"],
  ["patent", "The provisional patent (stupid)"],
  ["summer2", "Summer 2: start over, but smarter"],
  ["onshape", "Sixteen versions in Onshape"],
  ["leaks", "Why it kept leaking"],
  ["business", "The business side we did too late"],
  ["final", "The final model"],
  ["aerflo", "Aerflo beat us to it"],
  ["learned", "What I learned"],
];

export default function SparkliPost() {
  return (
    <article className="mx-auto w-full max-w-[780px] px-4 py-10 sm:px-10 lg:py-16">
      <Link href="/blogs" className="sans text-[13.5px] text-[var(--muted)] hover:text-[var(--ink)]">
        ← All blogs
      </Link>
      <header className="mt-4 border-b-2 border-[var(--ink)] pb-5">
        <h1 className="sans text-[30px] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[40px]">
          Sparkli: two summers trying to put fizz in a Hydro Flask
        </h1>
        <p className="mt-3 text-[18px] leading-[1.5] text-[var(--muted)]">
          A carbonation attachment for your water bottle. Dozens of 3D-printed prototypes, 35+ logged tests, a few housings that
          exploded in our hands, a provisional patent we didn&apos;t need, and a competitor that beat us to market.
        </p>
        <p className="sans mt-3 text-[13px] text-[var(--muted)]">Rafael Petrosian · Side project · Summer 2024 and Summer 2025</p>
      </header>

      <Wide
        src={`${B}cad-evolution.webp`}
        alt="Sparkli CAD versions side by side"
        cap="A few of the Sparkli versions from Onshape, from summer 2025 to the final design (B14, right), which dropped the straw. Every one of these got printed, assembled, and fired."
      />

      <div className="sans mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["2", "summers"],
          ["30+", "CAD versions across two CAD packages"],
          ["35+", "logged firing tests"],
          ["0", "products shipped (yet)"],
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

      <H id="why">Why a carbonator</H>
      <Prose>
        <P text="I've always been into product design. Not the 'sleek render on a white background' kind, the 'can I actually make this thing work on my desk with a 3D printer and a bag of O-rings' kind. Most of my school projects were assigned to me. This one I picked." />
        <P text="The observation was simple: **people really, really love carbonation**. Sparkling water is everywhere, SodaStreams are on every other kitchen counter, and everyone I know carries a Hydro Flask. But nobody wants to lug a SodaStream to the gym. So a friend and I asked the obvious question: what if you could carbonate your water **right in your bottle**, with a little attachment that screws on where the cap goes?" />
        <P text="We started calling it Secco, then Sparkli. (Our daily to-do list had 'Finalize a name' and 'Finalize a logo' on it for about a week straight. Engineering was easier.)" />
      </Prose>

      <H id="idea">The idea</H>
      <Prose>
        <P text="The concept: a cap-sized housing that screws onto a Hydro Flask and holds a small **CO₂ cartridge**. You load the cartridge, screw a cap on top, twist a trigger, and a spring-loaded needle punctures the cartridge. The gas runs down a straw into the water, you shake it, and you have sparkling water. No machine, no counter space, no plug." />
        <P text="Before any CAD, we filled pages of graph paper with ideas: how the cartridge sits, how the trigger releases the spring, how the whole thing resets for the next cartridge, and how to keep gas from going anywhere except into the water." />
      </Prose>
      <div className="mt-6">
        <Gallery
          cols={3}
          aspect="aspect-[3/4]"
          items={[
            { src: `${B}sketch-concepts.webp`, alt: "Concept sketches", caption: "First page: housing, cap, canister seat, and the bottle it all screws into." },
            { src: `${B}sketch-mechanism.webp`, alt: "Mechanism sketches", caption: "Firing mechanism concepts." },
            { src: `${B}sketch-trigger.webp`, alt: "Trigger sketches", caption: "Trigger and reset ideas." },
            { src: `${B}sketch-needle.webp`, alt: "Needle sketches", caption: "Needle and puncture geometry." },
            { src: `${B}sketch-clocking.webp`, alt: "Clocking sketches", caption: "Clocking: how the firing cap rotates back into place." },
            { src: `${B}sketch-snapring.webp`, alt: "Snap ring sketches", caption: "Snap ring retention." },
          ]}
        />
      </div>

      <H id="summer1">Summer 1 (2024): the trigger era</H>
      <Prose>
        <P text="The first summer was all about one question: **can a 3D-printed mechanism reliably puncture a CO₂ cartridge and send the gas where we want it?** It turns out that's actually three questions (puncture, seal, and diffuse), and each one fought us." />
        <P text="We kept a daily task doc the entire time. V1 was CAD'd and printed on June 12. By the end of July we were on **V2.8.4**, with a decimal point doing a lot of heavy lifting." />
      </Prose>

      <H id="mechanism">How the 2024 mechanism worked</H>
      <Prose>
        <P text="By mid-July the design had settled into eight main parts plus hardware. We wrote it all up in a full invention description (more on why in the patent section, where you can read the whole PDF). Here's how it worked:" />
      </Prose>
      <div className="mt-6 grid gap-6 sm:grid-cols-[1.1fr_1fr]">
        <figure>
          <a href={`${B}secco-section.webp`} target="_blank" rel="noopener noreferrer" className="block rounded-lg border border-[var(--line)] bg-white p-2">
            <img src={`${B}secco-section.webp`} alt="Labeled cross section of the 2024 design" className="h-auto w-full" />
          </a>
          <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">Cross section of the 2024 design, with every part labeled.</figcaption>
        </figure>
        <div className="grid grid-cols-2 gap-4">
          <figure>
            <div className="flex h-[300px] items-center justify-center rounded-lg border border-[var(--line)] bg-white p-2">
              <img src={`${B}secco-assembled.webp`} alt="Assembled view" className="max-h-full" />
            </div>
            <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">Assembled.</figcaption>
          </figure>
          <figure>
            <div className="flex h-[300px] items-center justify-center rounded-lg border border-[var(--line)] bg-white p-2">
              <img src={`${B}secco-exploded.webp`} alt="Exploded view" className="max-h-full" />
            </div>
            <figcaption className="sans mt-2 text-[13px] text-[var(--muted)]">Exploded.</figcaption>
          </figure>
        </div>
      </div>
      <Specs
        head={["Part", "What it does"]}
        rows={[
          ["Housing", "The main body. Threads onto the Hydro Flask on the bottom and the top cap on top, with two O-ring grooves and side cutouts for the trigger to slide through."],
          ["Top cap", "Has a hemisphere cavity that sits on the cartridge. Screwing it on pushes the cartridge and trigger down into the loaded position."],
          ["Trigger", "Holds the cartridge. Its bridge features slide down the housing, then rotate. Twisting it lines its legs up with the firing cap and lets the spring go."],
          ["Firing cap", "Carries the needle and a gasket. Gets shot upward into the cartridge, then three tabs ride the ramp to reset it."],
          ["Ramp", "A ring with three slopes and a notch. The slopes rotate the firing cap back to the loaded position after firing."],
          ["Needle", "Hollow stainless steel, sharpened, press-fit into the firing cap. Gas flows through it after puncture."],
          ["Straw", "Threads onto the firing cap and carries the gas down into the water."],
          ["Nozzle", "A brass 3D-printer nozzle threaded onto the end of the straw to set the CO₂ flow rate. Yes, a printer nozzle. It's the right size and it's brass."],
          ["Hardware", "Firing spring, two snap rings, a gasket, and two O-rings (housing to bottle, and housing to straw)."],
        ]}
      />
      <H3>The firing sequence</H3>
      <Bullets
        items={[
          "Screw the housing onto the bottle. The bottle O-ring compresses and seals.",
          "Drop the cartridge into the trigger and screw the top cap on. The cap pushes the cartridge, trigger, and firing cap down, compressing the spring.",
          "Twist the trigger clockwise. Its legs line up with the cavities in the firing cap, and the spring fires the firing cap upward into the cartridge.",
          "The needle punctures the cartridge, the gasket seals around it, and the CO₂ goes through the needle, down the straw, out the nozzle, and into the water.",
          "To reset: remove the cap and cartridge, twist the trigger back, and pull it up. The spring pushes the firing cap up and the ramp rotates it back into place.",
        ]}
      />
      <div className="mt-6">
        <Gallery
          cols={3}
          items={[
            { src: `${B}secco-housing.webp`, alt: "Housing", caption: "Housing, with trigger cutouts and O-ring grooves." },
            { src: `${B}secco-trigger.webp`, alt: "Trigger", caption: "Trigger: holds the cartridge and releases the spring." },
            { src: `${B}secco-firing-cap.webp`, alt: "Firing cap", caption: "Firing cap with the three reset tabs." },
            { src: `${B}secco-firing-cap-gasket.webp`, alt: "Firing cap with gasket and needle", caption: "Needle and gasket seated in the firing cap." },
            { src: `${B}secco-ramp.webp`, alt: "Ramp", caption: "The three-slope ramp that resets the firing cap." },
            { src: `${B}secco-top-cap.webp`, alt: "Top cap", caption: "Top cap with the hemisphere seat for the cartridge." },
            { src: `${B}secco-straw.webp`, alt: "Straw", caption: "Thread-on straw." },
            { src: `${B}secco-spring.webp`, alt: "Firing spring", caption: "Firing spring." },
            { src: `${B}secco-nozzle.webp`, alt: "Brass nozzle", caption: "The brass printer nozzle we used as a flow orifice." },
          ]}
        />
      </div>

      <H id="parts">Parts, printers, and McMaster</H>
      <Prose>
        <P text="Everything plastic was printed on a **Bambu A1**: PLA first, PETG later. Everything else came from **McMaster-Carr** or got salvaged. We ordered snap rings, O-rings, compression and extension springs, and bolts, and we pulled needles and nozzles out of other carbonation bottles when our own weren't cutting it. The CO₂ cartridges were small 9.9 ml ones from Liss America." />
        <P text="We even tracked a BOM for each prototype. Version 1 cost about **$9.50 a unit** in hardware, mostly because extension springs are weirdly expensive. Version 2 switched to a compression spring from a 12-pack, and the hardware cost dropped to about **$1 a unit**." />
      </Prose>
      <figure className="mt-6 grid items-center gap-5 sm:grid-cols-[minmax(0,320px)_1fr]">
        <a href={`${B}print-bambu.webp`} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-[var(--line)]">
          <img src={`${B}print-bambu.webp`} alt="Red PLA Sparkli parts printing on a Bambu Lab printer" loading="lazy" className="h-auto w-full" />
        </a>
        <figcaption className="text-[15.5px] leading-[1.55] text-[var(--muted)]">
          A fresh batch of 2024 trigger-era parts coming off the Bambu: the housing (still on its tree supports) and two of the
          smaller mechanism parts. We printed sets like this almost every day.
        </figcaption>
      </figure>
      <Specs
        head={["Prototype", "Printed parts", "Bought or made"]}
        rows={[
          ["V1", "Top cap, trigger, housing", "Machined puncher, 2 McMaster extension springs, 2 bolts"],
          ["V2", "Top cap, trigger, housing, firing cap", "McMaster compression spring, machined needle, Liss CO₂ cartridge"],
          ["V3 (2025)", "Cap, housing, adapter (all eventually to be molded)", "Housing and adapter O-rings, gasket, needle, needle gasket and sleeve, cartridge"],
        ]}
      />

      <H id="versions">V1 to V2.8.4 in six weeks</H>
      <Prose>
        <P text="Here's a highlight reel from the daily task doc. Every bullet below was a print, an assembly, and a test." />
      </Prose>
      <Specs
        head={["Date (2024)", "What changed"]}
        rows={[
          ["Jun 12", "Finished and printed V1. Tested the threads. Ordered springs."],
          ["Jun 13", "Enlarged the rotation cutouts by 0.020 in, added four stoppers for the bottom cap, lengthened the top cap, changed the trigger spin direction."],
          ["Jun 17–18", "Added an O-ring, started the reload mechanism, completed and printed V2."],
          ["Jun 19–20", "Figured out a torsional firing pin made from music wire, plus the clocking mechanism."],
          ["Jun 21", "Planned an Ansys run on the reloading mechanism. Added the snap ring groove and clocking lobe."],
          ["Jun 23–25", "Made the ramp slopes taller, added the snap ring seat, ordered the McMaster snap ring, adjusted the firing cap arms."],
          ["Jun 26–27", "Longer housing, bigger housing ID, longer ramps, longer firing pin arms, the largest spring we had. V2.6."],
          ["Jun 28–29", "Bigger spring hole, sloped arms, 0.040 in of pretension. Then the triple-ramp design."],
          ["Jul 1", "Fabricated a needle, built a sealing mechanism, added the top snap ring. Printed V2.7.6."],
          ["Jul 2–8", "Straw testing, a thinner needle, the needle seated 0.020 in higher, longer puncture travel, a thread-on straw."],
          ["Jul 9–17", "New sealing configurations every day. Landed on a gasket plus O-rings."],
          ["Jul 26", "Next idea: a check valve in the nozzle."],
        ]}
      />

      <H id="straw">The straw saga</H>
      <Prose>
        <P text="If you dump CO₂ straight into water, it mostly just blows back out the top. The gas has to be broken up and diffused into the water. Our solutions, in chronological order of dignity:" />
      </Prose>
      <Bullets
        items={[
          "**A regular pink drinking straw.** Not glued on. It got blown off completely.",
          "**The same straw, glued on**, with the gas exiting a 0.040 in needle. It slowed the flow, but the straw couldn't hold the pressure.",
          "**A Bic pen** with a hole hammered into the bottom with a nail. The bottom of the pen got blown off.",
          "**A Bic pen with a 4-hole \"shower\" pattern**, each hole 0.032 in. Discharged in about 5 seconds with decent carbonation. Then 8 holes, then 12 holes, then more than 20.",
          "**Dry ice.** CO₂ gets very cold as it expands, and it started freezing into dry ice inside the straw and clogging the holes. That was not on the bingo card.",
          "**A 3D-printed straw** that threads onto the firing cap, with holes melted in by heating **music wire** and pushing it through the plastic. We tried 6 holes and 24 holes, then finally a single 0.020 in hole, which killed the dry ice problem.",
        ]}
      />

      <H id="tests">The test matrix</H>
      <Prose>
        <P text="At some point we stopped guessing and started logging. Every firing went into a spreadsheet: O-ring setup, needle inner and outer diameter, needle taper, spring rate, straw design, whether we shook it, how fast it discharged, and how carbonated the water got. Discharge went from 'Instant' to 'Sluggish' and carbonation from 'None' to 'Fully Carbonated'. Across the project we made **hundreds of changes**, and the matrix alone has 35+ formal tests." />
      </Prose>
      <Specs
        head={["Tests", "Setup", "What happened"]}
        rows={[
          ["1", "76 lb/in spring, pink straw not glued", "Straw blown off. Violent."],
          ["2", "104 lb/in spring, straw glued on", "Flow slowed, straw couldn't hold the pressure. Outer O-ring failed."],
          ["3–5", "Bic pen with 1, 4, 8, then 12 holes", "Fired first try. 4–5 second discharge, decent carbonation, dry ice forming."],
          ["5–7", "Needle seated 0.020 in higher", "Double puncture caused a violent outburst, then a too-small hole."],
          ["8", "New needle, 0.138 in deep taper at 7°", "Big hole, violent spray, weak carbonation."],
          ["9–11", "First 3D-printed straw", "Great puncture. Test 10: the housing ruptured and blew off."],
          ["12–16", "Smaller needle (0.025 in ID), 6 and 24-hole straws", "Good puncture, partial carbonation, dry ice buildup."],
          ["17–18", "One 0.020 in hole", "Dry ice fixed. Gas leaking between the trigger and top cap."],
          ["21–23", "Swapped to a gasket plus O-rings", "Dry tests puncturing on the first try. Small side leaks."],
          ["24–25", "Gasket plus outer O-ring, water in", "First 'perfect carbonation' results."],
          ["26–28", "Added an O-ring around the straw", "Best runs by far. Full carbonation, almost no leaks."],
          ["29–35", "Trigger stick-out (0.220 vs 0.295 in), 75% fill", "Inconsistent. Some great runs, some misfires."],
        ]}
        note="Condensed from our test matrix. The notes column says 'Violent expansion' more times than I'd like to admit."
      />
      <Prose>
        <P text="We ran a separate mini-study on the needle itself: thick wall vs. thin wall, centered vs. off-center. Thin wall and centered won. The first ones didn't puncture at all until we increased the firing distance and sharpened the profile." />
      </Prose>
      <Callout>
        <strong>The best run (test 27):</strong> gasket, outer O-ring, an O-ring around the straw, and a little hot glue. It punctured on the first try with
        perfect carbonation and only a tiny spray from the side. That&apos;s when we got excited enough to call lawyers.
      </Callout>

      <H id="videos">Test footage</H>
      <Prose>
        <P text="We filmed basically every test. Here are a few. Notice how a lot of them moved outside to the sidewalk. That was on purpose." />
      </Prose>
      <Clips
        items={[
          { n: "1530", cap: "Loading a cartridge and screwing on the top cap." },
          { n: "1569", cap: "The wet patches on the sidewalk are from earlier tests." },
          { n: "1642", cap: "Dry fire indoors." },
          { n: "1684", cap: "A newer print. Same question every time: will it puncture?" },
          { n: "1691", cap: "Another test. We made a lot of these." },
        ]}
      />

      <H id="boom">Things that exploded</H>
      <Prose>
        <P text="A CO₂ cartridge holds gas at very high pressure, and our housings were 3D-printed plastic with layer lines. Put those together and parts let go. In test 10 the housing **ruptured and blew off completely** because the snap ring kept hammering the same spot. Straws blew off. Pen bottoms blew off. A few prototypes **exploded in our hands**." />
        <P text="It changed how we tested. We started doing dry tests before filling the bottle, and moved anything sketchy outdoors. Please don't try this at home." />
      </Prose>

      <H id="patent">The provisional patent (stupid)</H>
      <Prose>
        <P text="Once tests 24 to 28 started carbonating, we did the 'responsible' thing and got lawyers. Over about three weeks we had meeting after meeting with two firms, read engagement letters, filled out an invention disclosure form, wrote a full invention description with every part, assembly step, and the firing sequence, and filed a **provisional patent**." />
        <P text="Looking back, that was a lot of time and money spent protecting a product that still leaked, for a market we hadn't validated. The invention description was useful (half the renders in this post come from it), but as a document for us, not as a legal shield." />
      </Prose>
      <a
        href="/Secco-Invention-Description.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex flex-col gap-5 rounded-lg border border-[var(--line)] bg-white p-4 hover:border-[var(--ink)] sm:flex-row sm:items-center"
      >
        <img src={`${B}secco-doc-cover.webp`} alt="Cover of the Secco invention description" className="w-[140px] shrink-0 rounded border border-[var(--line)]" />
        <span>
          <span className="sans block text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">PDF · 18 pages</span>
          <span className="sans mt-1 block text-[18px] font-semibold">Secco Invention Description (2024)</span>
          <span className="mt-1 block text-[15.5px] leading-[1.5]">
            The document behind our provisional patent, for the old trigger model: every component, the extra hardware, assembly
            instructions, assembly images, the mechanical sequence, and how to use it.
          </span>
          <span className="sans mt-2 inline-block text-[14px] text-[var(--accent)]">Read the full PDF ↗</span>
        </span>
      </a>

      <H id="summer2">Summer 2 (2025): start over, but smarter</H>
      <Prose>
        <P text="The next summer we came back with a different approach. Instead of inventing every mechanism from scratch, we bought existing carbonation bottles that already worked (the Tronco and the Asfolia from overseas sellers), studied exactly how they sealed and punctured, and set out to build a version that fit a Hydro Flask." />
        <P text="One of them was held together with **triangle-head security screws**, so we went to **Harbor Freight**, found a triangle bit, and took it apart on the desk to see the design inside. Reverse engineering at its finest." />
        <P text="We also dropped the twist trigger. The new design was simpler: a **cap** that pushes the cartridge down onto a fixed **needle** in the **housing**, an **adapter** with a long straw that threads into the bottle, and gaskets and O-rings matched to parts you can actually buy." />
        <P text="Our design brainstorm doc had a simple rule: make it as simple as possible while keeping the necessary function. Keep the cap's shape and threads but remove the intricacies. Make the housing's main boss a separate part. Make the needle fully machinable. We also flagged a safety issue with the bottle we were copying: dropping the cartridge could accidentally puncture it, so we sketched a safety lever with a plate that blocks the pin." />
      </Prose>

      <H id="onshape">Sixteen versions in Onshape</H>
      <Prose>
        <P text="Summer 2 lived in **Onshape**: 16 saved versions, plus a pile of branches. The version history tells the story better than I can:" />
      </Prose>
      <Specs
        head={["Version", "Date", "Note from the version history"]}
        rows={[
          ["V2", "Jun 14", "First working dry fire."],
          ["V3", "Jun 15", "No pressure release holes, minor fixes so parts sit flush."],
          ["V4", "Jun 17", "Tapered interfaces with holes for gas release."],
          ["V5", "Jun 17", "A printable elongated straw."],
          ["V5", "Jun 21", "Alternate seat for the housing O-ring."],
          ["V6", "Jun 22", "Grooves in the adapter for gas release, smaller O-ring groove, raised adapter threads, removed a chamfer."],
          ["V7", "Jun 22", "Print-ready, closest match to the reference bottle so far."],
          ["V8", "Jun 29", "Working model. Hard to unscrew, no pressure release."],
          ["V9", "Jul 4", "Cap seal version."],
          ["V10", "Jul 6", "Best working version. No leaks, but the cap is hard to unscrew. Needs venting."],
          ["V11", "Jul 18", "Vented variant. Printed well, worked poorly."],
          ["V12", "Jan 4 ('26)", "Snapshot of an older version with through holes. Branched off to try a new 3-piece mechanism."],
          ["V14–V16", "Jan 5 ('26)", "Gas release experiments, O-ring groove moved and squared off."],
        ]}
        note="Dates are 2025 unless marked. V13 doesn't exist, and there are two V5s and two V15s. Version naming was not our strong suit."
      />
      <H3>Every version, cut in half</H3>
      <Prose>
        <P text="Here's the same thing as section views, all at the same scale, so you can see how the internals actually changed: the housing getting taller and beefier, the cartridge seat moving, the cap going from a separate screw-on lid (V4–V5) to a full cover (V6–V8, V10) to a low-profile seal cap (V9, V12, V16), and the nozzle disappearing once the straw took over." />
      </Prose>
      <Wide
        src={`${B}sec-evolution.webp`}
        bleed
        alt="Section views of every Sparkli version at the same scale"
        cap="Section views of V4 through V16, same scale, cut through the center axis. Heads up: the long green straw is in the CAD from V5 on, but the last several versions were actually fired without it in the final assembly."
      />
      <H3>Up close: the sealing end</H3>
      <Prose>
        <P text="Almost all of the leak fighting happened in the top 75 mm, where the cap, housing, and cartridge meet. Zoomed in:" />
      </Prose>
      <div className="mt-4">
        <Gallery
          cols={3}
          aspect="aspect-[2/3]"
          items={[
            { src: `${B}sec-head-v6.webp`, alt: "V6 section", caption: "V6: full-cover cap, adapter grooves for gas release." },
            { src: `${B}sec-head-v8.webp`, alt: "V8 section", caption: "V8: worked, but no way to let the pressure out." },
            { src: `${B}sec-head-v9.webp`, alt: "V9 section", caption: "V9: the cap seal version." },
            { src: `${B}sec-head-v10.webp`, alt: "V10 section", caption: "V10: no leaks. Also no way to open it." },
            { src: `${B}sec-head-v11.webp`, alt: "V11 section", caption: "V11: vented housing. Printed well, worked poorly." },
            { src: `${B}sec-head-v16.webp`, alt: "V16 section", caption: "V16: low-profile seal cap, reworked O-ring groove." },
          ]}
        />
      </div>
      <H3>The housing, version by version</H3>
      <Wide
        src={`${B}cad-housings.webp`}
        bleed
        alt="Housing renders across versions"
        cap="Housing renders from V2 to V16 (not to scale). The slim V2–V6 housings grew a thick middle band from V8 on, V9 added a stepped seal seat, and V11 added the vent ports."
      />
      <H3>The cap, version by version</H3>
      <Wide
        src={`${B}cad-caps.webp`}
        bleed
        alt="Cap renders across versions"
        cap="Cap renders (not to scale). Same job every time: push the cartridge onto the needle and seal. The threads, seat, and depth kept changing."
      />
      <div className="mt-6">
        <Gallery
          cols={3}
          items={[
            { src: `${B}cad-v8.webp`, alt: "V8 assembly", caption: "V8 assembly." },
            { src: `${B}cad-v5-alt-seat.webp`, alt: "V5 assembly", caption: "V5: new O-ring seat, cap lifted off." },
            { src: `${B}cad-plunger.webp`, alt: "Plunger", caption: "Plunger for the gas release." },
            { src: `${B}cad-cap.webp`, alt: "Cap", caption: "Cap with the cartridge seat." },
            { src: `${B}cad-adapter.webp`, alt: "Adapter and straw", caption: "Adapter with the long printable straw." },
            { src: `${B}cad-nozzle.webp`, alt: "Nozzle", caption: "Brass nozzle, modeled from the real printer nozzle." },
            { src: `${B}cad-v11-housing.webp`, alt: "V11 vented housing", caption: "V11: vented housing with heat-set inserts and set screws." },
            { src: `${B}cad-new-housing-cap.webp`, alt: "Housing and cap assembly", caption: "Housing and cap assembled." },
            { src: `${B}cad-v4-exploded.webp`, alt: "V4 assembly", caption: "V4 assembly, cap lifted off." },
          ]}
        />
      </div>
      <Prose>
        <div className="mt-6" />
        <P text="The hardware in the Onshape document is a good snapshot of where our heads were: McMaster **heat-set inserts**, **vented cup-point set screws** (a screw with a hole down the middle, for letting gas out), three different compression springs, soft and hard Buna-N O-rings, and a square-profile O-ring." />
      </Prose>

      <H id="leaks">Why it kept leaking</H>
      <Prose>
        <P text="Most of summer 2 was a fight with leaks. Our notes from that stretch read like a detective novel:" />
      </Prose>
      <Bullets
        items={[
          "**The prints were too coarse to seal.** Printed upside down, the little nub the rubber stopper sits on came out rough from the layers and supports, so the rubber couldn't seal flush. The fix we planned: superfine **SLA** prints in a food-safe resin from Stratasys, plus sanding.",
          "**The gasket seat had to be exact.** We sized it for about 0.010 in of gasket compression, minus printing error, and matched the main O-ring groove to 0.745 in on both the vented and non-vented versions.",
          "**Threads.** More clearance on the needle thread, a bigger insert thread, tapered pipe threads made with Onshape's split feature, and a test cylinder printed just to check the needle fit.",
          "**Pressure math.** The reference bottle uses the same cartridge for a smaller bottle. In a Hydro Flask, the same gas spreads over more headspace, so the pressure should be lower and the vents should still work. We also looked into a 12 g cartridge and whether the housing could hold the extra pressure.",
          "**Sometimes it was the reference bottle.** At one point the Asfolia bottle we were copying stopped working entirely. Six fresh cartridges, every tightness, all leaked. Diagnosis: we had blown out the rubber sleeve on its needle.",
        ]}
      />

      <H id="business">The business side we did too late</H>
      <Prose>
        <P text="In July 2025, while the engineering was still in progress, we finally wrote down the business plan: finish the final design, line up wholesale suppliers for gaskets, O-rings, needles, and cartridges, build an MVP (a superfine, painted print with a box), write a pitch, start investor outreach, then use investment for injection molds and marketing." />
        <P text="We even had a to-do to get honest feedback: show the product to 20+ people in our target market, let them use it with zero instructions, and iterate from what they said. We had more ideas than validation too, like a juicer attachment, a version for a liter of soda, and co-marketing with small brands." />
        <P text="Every one of those steps should have happened in **week one of summer one**, not halfway through summer two." />
      </Prose>

      <H id="final">The final model</H>
      <Prose>
        <P text="And then the final model did the thing. It **carbonated the water with zero water leaking**. Two summers of work, and there it was: sparkling water in a Hydro Flask." />
        <P text="We were thrilled for about thirty seconds, until we tried to unscrew it. It was so pressurized that the cap wouldn't come off, and the **venting mechanism didn't vent**. A water bottle you can carbonate but never open again is a great gag gift and a bad product." />
        <P text="We didn't totally let it go. That winter I reopened the CAD and branched off a new three-piece gas release: a knob, a spring, and a plunger that lets you dump the pressure before opening." />
      </Prose>
      <H3>The final design, part by part</H3>
      <Prose>
        <P text="The final design lives on its own branch in Onshape (B14). Compared to the summer versions, it splits the body into two pieces: a **housing** with built-in gas channels running alongside the central bore, and an **attachment** below it. The cap screws on top, and there is no straw. Here it is cut in half on two planes, so you can see the channels:" />
      </Prose>
      <Wide src={`${B}b14-section.webp`} alt="Two section views of the final design" cap="The final design (B14), sectioned on two planes 90° apart. The vertical slots in the blue housing are the gas channels." />
      <div className="mt-6">
        <Gallery
          cols={3}
          items={[
            { src: `${B}b14-asm-iso.webp`, alt: "Final assembly", caption: "Final assembly: cap, housing, and attachment." },
            { src: `${B}b14-asm-front.webp`, alt: "Final assembly front", caption: "Front view." },
            { src: `${B}b14-housing-cap.webp`, alt: "Housing and cap", caption: "Housing and cap sub-assembly." },
          ]}
        />
      </div>
      <Prose>
        <div className="mt-6" />
        <P text="Like the 2024 version, here's every part of the final design. It has far fewer moving parts than the trigger era. Most of the cleverness moved into the seals." />
      </Prose>
      <Specs
        head={["Part", "What it does"]}
        rows={[
          ["Housing and attachment", "The two-piece body. The housing holds the cartridge and carries the gas channels and seal seats, and the attachment below it threads in underneath."],
          ["Cap", "Screws down over the housing and pushes the cartridge onto the needle. The domed seat matches the end of the cartridge."],
          ["Cap gasket", "A flat square-profile ring that seals the cap to the housing, so gas can only go one way."],
          ["O-rings", "Hard and soft Buna-N O-rings from McMaster, sealing the housing to the bottle and the nozzle to the housing."],
          ["Heat-set insert", "Brass threads melted into the printed plastic, so metal screws can thread into it without stripping the print."],
          ["Vented set screw", "A set screw with a hole down the middle. Screw it in to seal, back it out to let gas escape. This was the venting idea."],
          ["Spring and plunger", "The parts of the later gas release: push the plunger to dump the pressure before you open the cap."],
          ["CO₂ cartridge", "Modeled to the real cartridge's dimensions so every seat, needle depth, and clearance was checked in CAD before printing."],
          ["Brass nozzle", "Same trick as 2024: a 3D-printer nozzle used as a cheap, precise brass orifice."],
        ]}
      />
      <Prose>
        <div className="mt-6" />
        <P text="And every component in the final document:" />
      </Prose>
      <div className="mt-4">
        <Gallery
          cols={3}
          items={[
            { src: `${B}b14-housing.webp`, alt: "Housing", caption: "Housing, with the gas channel holes on top." },
            { src: `${B}b14-attachment.webp`, alt: "Attachment", caption: "Attachment." },
            { src: `${B}b14-cap.webp`, alt: "Cap", caption: "Cap with the cartridge seat." },
            { src: `${B}b14-cap-gasket.webp`, alt: "Cap gasket", caption: "Cap gasket." },
            { src: `${B}b14-canister.webp`, alt: "CO2 cartridge", caption: "The CO₂ cartridge, modeled to size." },
            { src: `${B}b14-nozzle-oring.webp`, alt: "Nozzle with O-ring", caption: "Brass nozzle with its O-ring." },
            { src: `${B}b14-gas-release.webp`, alt: "Gas release", caption: "Gas release: heat-set insert, spring, and plunger." },
            { src: `${B}b14-insert.webp`, alt: "Heat-set insert", caption: "McMaster heat-set insert." },
            { src: `${B}b14-plunger.webp`, alt: "Plunger", caption: "Plunger." },
            { src: `${B}b14-spring.webp`, alt: "Spring", caption: "Stainless compression spring." },
            { src: `${B}b14-set-screw.webp`, alt: "Set screw", caption: "Vented cup-point set screw." },
            { src: `${B}b14-adapter.webp`, alt: "Straw adapter", caption: "The straw adapter. Still in the CAD, but not in the fired final assembly." },
          ]}
        />
      </div>

      <H id="aerflo">Aerflo beat us to it</H>
      <Prose>
        <P text="While we were still fighting the vent, a company called **Aerflo** launched a carbonation attachment made specifically for Hydro Flask. Same idea, already on shelves, with a cartridge exchange program and everything." />
        <P text="Honestly? It's a good product, and it's the cleanest proof that the idea was right. We were just slower, and we spent our time on the wrong things first." />
      </Prose>
      <div className="mt-4">
        <a
          href="https://aerflo.co/products/aerflo-hydro-flask"
          target="_blank"
          rel="noopener noreferrer"
          className="sans inline-block rounded-md border border-[var(--line)] bg-white px-4 py-2.5 text-[14px] font-medium hover:border-[var(--ink)]"
        >
          Shop the Aerflo for Hydro Flask ↗
        </a>
      </div>

      <H id="learned">What I learned</H>
      <Bullets
        items={[
          "**Don't get patents** (at least not that early). A provisional patent on a prototype that leaks is an expensive receipt.",
          "**Validate the business first, then engineer it.** Experimenting and engineering is the fun part, but we should have talked to customers and looked hard at competitors before spending a summer on a trigger mechanism.",
          "**Be careful with high-pressure systems and 3D-printed housings.** Layer lines are weak spots. Some of ours exploded in our hands. Do dry tests first and test outside.",
          "**Write everything down.** The daily task doc and the test matrix are the only reason we made real progress instead of going in circles. They're also why this post could be this long.",
          "**Learn from what already works.** Summer 2 moved faster than summer 1 because we started from a working reference and adapted it, instead of inventing everything.",
          "**The last 10% is the product.** Carbonating the water was the hard part on paper. In reality, getting it open again was what stopped us.",
        ]}
      />
      <Prose>
        <div className="mt-6" />
        <P text="Would I do it again? Absolutely. Just in a different order." />
      </Prose>

      <div className="mt-12 border-t border-[var(--line)] pt-6">
        <Link href="/blogs" className="sans text-[14px] text-[var(--accent)]">
          ← Back to all blogs
        </Link>
      </div>
    </article>
  );
}
