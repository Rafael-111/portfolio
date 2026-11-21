import ProjectPage, { Section, Gallery, Docs } from "../../components/ProjectPage";

export const metadata = { title: "Wind Turbine · Rafael Petrosian" };

export default function TurbinePage() {
  return (
    <ProjectPage
      title="Wind Turbine Design and Testing"
      meta="UC Berkeley course project"
      oneLiner="We designed a small wind turbine to be stiff, light, and make as much power as possible, then 3D-printed it and tested it."
      hero={{
        src: "/img/turbine-test.webp",
        alt: "3D-printed wind turbine tower under test in the lab",
        caption: "Testing the printed turbine in the lab.",
      }}
      did={[
        "Worked on the rotor blade shape and the tower structure.",
        "Ran FEA on the tower to check how much it bends under load.",
        "Helped test power output at controlled wind speeds.",
      ]}
    >
      <Section title="Design and analysis">
        <Gallery
          cols={3}
          items={[
            { src: "/img/turbine-cad.webp", alt: "Wind turbine CAD", caption: "Turbine CAD." },
            { src: "/img/turbine-blade.webp", alt: "Rotor blade CAD", caption: "Rotor blades." },
            { src: "/img/turbine-fea.webp", alt: "FEA of the tower", caption: "FEA deflection of the tower." },
          ]}
        />
      </Section>
      <Section title="Full report">
        <Docs items={[{ label: "Wind turbine project report", href: "/Wind%20Turbine%20Design%20Project.pdf", note: "PDF" }]} />
      </Section>
    </ProjectPage>
  );
}
