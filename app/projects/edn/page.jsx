import ProjectPage, { Section } from "../../components/ProjectPage";

export const metadata = { title: "EDN Aviation · Rafael Petrosian" };

export default function EdnPage() {
  return (
    <ProjectPage
      title="Circuit Test Box at EDN Aviation"
      meta="Assistant Engineer · EDN Aviation (Precision Aviation Group) · Van Nuys, CA · Jun – Aug 2025"
      oneLiner="A defense client needed a way to check its circuits before they shipped. I designed and built the test box that does it, in **one month**."
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
