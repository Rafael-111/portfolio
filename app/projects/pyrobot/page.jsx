import ProjectPage, { Section, Gallery, Docs } from "../../components/ProjectPage";

export const metadata = { title: "πRo-Bot · Rafael Petrosian" };

export default function PyRobotPage() {
  return (
    <ProjectPage
      title="πRo-Bot: Autonomous Fire-Fighting Robot"
      meta="Lead Programmer · UC Berkeley · Jan – May 2025"
      oneLiner="A turret that spots a fire with a thermal camera, aims itself, and puts the fire out with no one at the controls. I designed its chassis and electronics, wrote its code, and built it."
      hero={{
        src: "/img/robot-turret.webp",
        alt: "πRo-Bot turret with labeled parts: thermal camera, water gun barrel, plunger and rack gear, joystick controller",
        caption: "The finished robot, with the main parts labeled.",
      }}
      did={[
        "Designed the robot's chassis in CAD.",
        "Designed the electrical system: power, wiring, the microcontroller, the thermal camera, and the stepper motors.",
        "Wrote the C++ firmware that reads the thermal camera, finds the fire, aims the turret with stepper motors, and fires.",
        "Built and assembled the whole robot, wiring harnesses included.",
      ]}
      hard="Reading and calibrating the thermal sensor was tough, and I was new to NEMA 17 stepper control. The firmware took a lot of versions before the robot aimed and fired the way it should."
      result="A **competition-ready** robot that finds and puts out a fire on its own. Watch it work in the video below."
    >
      <Section title="Demo">
        <div className="shot aspect-video">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/1t1cayGuPRw"
            title="πRo-Bot demo video"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Section>

      <Section title="Hardware and CAD">
        <Gallery
          items={[
            {
              src: "/img/robot-turret-side.webp",
              alt: "Side view of the turret showing the NEMA 17 stepper motor",
              caption: "A NEMA 17 stepper motor turns the turret.",
            },
            {
              src: "/img/robot-drawing.webp",
              alt: "Line drawing of the full turret assembly",
              caption: "Full turret assembly.",
            },
            {
              src: "/img/robot-render.webp",
              alt: "Render of the firing mechanism",
              caption: "The firing mechanism.",
            },
            {
              src: "/img/robot-controller.webp",
              alt: "Exploded view of the controller housing",
              caption: "Custom controller housing: top shell, joystick, limit switch, and bottom shell.",
            },
          ]}
        />
      </Section>

      <Section title="Electronics">
        <Gallery
          cols={1}
          items={[
            {
              src: "/img/robot-wiring.webp",
              alt: "Wiring diagram for the robot's electronics",
              caption: "The wiring diagram I designed for the motors, sensors, and microcontroller.",
            },
          ]}
        />
      </Section>

      <Section title="Full report">
        <Docs
          items={[
            {
              label: "πRo-Bot project report",
              href: "/Fire%20Supression%20Robot%20Project.pdf",
              note: "PDF · design, electronics, firmware, and testing",
            },
          ]}
        />
      </Section>
    </ProjectPage>
  );
}
