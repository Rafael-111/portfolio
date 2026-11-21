import ProjectPage, { Section, DeepDive, Prose, P, Specs, Bullets } from "../../components/ProjectPage";

export const metadata = { title: "EDN Aviation · Rafael Petrosian" };

export default function EdnPage() {
  return (
    <ProjectPage
      title="Circuit Test Box at EDN Aviation"
      meta="Assistant Engineer · EDN Aviation (Precision Aviation Group) · Van Nuys, CA · Jun – Aug 2025"
      oneLiner="A defense client needed a way to check its circuits before they shipped. I designed and built the test box that does it, in **one month**."
      stats={[
        { value: "1 month", label: "from the client's schematic to finished hardware" },
        { value: "~10 hrs", label: "of labor saved every week by the QR label script" },
        { value: "Defense", label: "client, with a schematic to build from" },
      ]}
      did={[
        "Transcribed the client's schematic into a working circuit design.",
        "Designed the analog test circuitry in CircuitJS and checked it in simulation before anything was built.",
        "Designed the test box enclosure in CAD and built the bill of materials (BOM).",
        "Sent the full package to the shop floor for manufacturing after senior engineer review.",
        "Measured and modeled parts in Onshape so the CNC shop got them right the first time.",
        "Wrote a script that prints a unique QR label for every package, saving about **10 labor hours a week**.",
      ]}
      hard="The circuit analysis had a real learning curve. I tested design after design until one worked, and worked through the modeling problems with the team."
      result="The test box went from schematic to finished hardware in **one month**, and the shop got a complete package it could build from."
    >
      <DeepDive>How the project went, step by step, and the smaller jobs around it.</DeepDive>

      <Section title="The job">
        <Prose>
          <P text="A defense client's circuits needed to be verified before they left the building. Without a purpose-built test box, those checks would stay slow and manual. My project was to build that box." />
        </Prose>
      </Section>

      <Section title="From schematic to shop floor">
        <Specs
          head={["Step", "What I did"]}
          rows={[
            ["1. Understand the circuit", "Transcribed the client's schematic into a working circuit design I could analyze."],
            ["2. Design and simulate", "Built the analog test circuitry in CircuitJS and tested it in simulation. Simulation catches cheap mistakes before any parts are bought or cut."],
            ["3. Package it", "Designed the enclosure in CAD and put together the bill of materials, so every part was specified and could be ordered."],
            ["4. Review", "Had a senior engineer review the design before it went anywhere."],
            ["5. Release", "Sent the complete package (circuit, CAD, and BOM) to the shop floor for manufacturing."],
          ]}
        />
        <Prose>
          <P text="The hardest part was the circuit analysis. It was new to me, and I tested design after design in simulation until one worked." />
        </Prose>
      </Section>

      <Section title="CNC modeling in Onshape">
        <Prose>
          <P text="Alongside the test box, I measured parts and modeled them in Onshape for the CNC shop. A model that matches the real part means the machinist can program it correctly the first time instead of finding out at the machine." />
        </Prose>
      </Section>

      <Section title="QR labels">
        <Prose>
          <P text="I also wrote a script that prints a unique QR label for every package. It removed a repetitive manual task and saves about **10 labor hours a week**." />
        </Prose>
      </Section>

      <Section title="Where I worked">
        <div className="flex flex-col gap-5 rounded-lg border border-[var(--line)] bg-white p-5 sm:flex-row sm:items-center">
          <img
            src="/Precision_Aviation_Group_Logo.jpg"
            alt="Precision Aviation Group logo"
            className="h-16 w-auto object-contain"
          />
          <p className="text-[16px] leading-[1.55]">
            EDN Aviation is part of Precision Aviation Group. I worked in a production setting, on the floor
            with the engineers and machinists who build and ship aviation hardware.{" "}
            <a
              href="https://www.precisionaviationgroup.com/our-companies/edn-aviation/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              About EDN ↗
            </a>
          </p>
        </div>
      </Section>
    </ProjectPage>
  );
}
