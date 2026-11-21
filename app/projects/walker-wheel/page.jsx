import ProjectPage, { Section, Docs } from "../../components/ProjectPage";

export const metadata = { title: "Walker Wheel · Rafael Petrosian" };

export default function WalkerWheelPage() {
  return (
    <ProjectPage
      title="Walker Wheel Prototype"
      meta="UC Berkeley course project"
      oneLiner="A walker wheel that rolls smoothly and is simple to build. I designed it in CAD, prototyped it, and tested it on stairs."
      hero={{
        src: "/img/walker.webp",
        alt: "Walker wheel prototype on a stair test rig",
        caption: "Testing how the prototype rolls and clears obstacles on stairs.",
      }}
      did={[
        "Designed the hub and spoke geometry in CAD.",
        "Chose how to build each prototype part.",
        "Set the tolerances and fits for the bearings, axles, and fasteners so it goes together the same way every time.",
      ]}
    >
      <Section title="Full report">
        <Docs items={[{ label: "Walker wheel project report", href: "/Walker%20Wheel%20Project.pdf", note: "PDF · includes GD&T drawings" }]} />
      </Section>
    </ProjectPage>
  );
}
