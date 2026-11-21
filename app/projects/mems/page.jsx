import ProjectPage, { Section, Gallery, Docs } from "../../components/ProjectPage";

export const metadata = { title: "MEMS Exhaust Valve · Rafael Petrosian" };

export default function MemsPage() {
  return (
    <ProjectPage
      title="MEMS Microfluidic Exhaust Valve"
      meta="UC Berkeley course project"
      oneLiner="A microscopic valve for microfluidic chips. Heat pushes a plug into a tiny channel to close it, and an electric charge holds it shut."
      hero={{
        src: "/img/mems-layout.webp",
        alt: "Layout of the thermal actuator array and valve plug",
        caption: "The thermal actuator array that drives the valve plug.",
        fit: "contain",
      }}
      did={[
        "Designed the valve around a thermal yoke-array actuator that pushes a plug into the channel.",
        "Added electrostatic latching so the valve seals better and leaks less.",
        "Checked force, deflection, and whether it could be built with standard surface micromachining.",
      ]}
    >
      <Section title="Design">
        <Gallery cols={1} items={[{ src: "/img/mems-render.webp", alt: "Render of the valve plug in the channel", caption: "The plug seated in the channel." }]} />
      </Section>
      <Section title="Full report">
        <Docs items={[{ label: "MEMS valve project report", href: "/Microfluidic%20Exhaust%20Valve%20Project.pdf", note: "PDF" }]} />
      </Section>
    </ProjectPage>
  );
}
