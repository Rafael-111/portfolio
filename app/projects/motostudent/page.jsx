import ProjectPage, { Section, Gallery } from "../../components/ProjectPage";

export const metadata = { title: "MotoStudent · Rafael Petrosian" };

export default function MotoStudentPage() {
  return (
    <ProjectPage
      title="MotoStudent Race Motorcycle"
      meta="Rear Suspension Lead · UC Berkeley · Sep 2024 – Dec 2025"
      oneLiner="I led the **5-person** team that designed the back half of a race motorcycle: the swing arm, shock, and linkage that keep the rear wheel planted on the track."
      hero={{
        src: "/img/moto-bike.webp",
        alt: "CAD render of the full MotoStudent motorcycle with rider",
        caption: "The full bike in CAD. My team owned everything behind the chassis.",
      }}
      did={[
        "Led a 5-person subteam designing the rear suspension for an international competition in Spain.",
        "Owned the rear geometry and swing arm: coil-over, swing arm, rocker, and linkage.",
        "Ran kinematics in MotoChassis to set the motion ratio, wheel rate, and shock travel.",
        "Did the full CAD for the rear end, set the chassis mounts and clearances, and released it to manufacturing.",
      ]}
      hard="My first subteam wasn't committed, and there was no documentation from earlier years. I carried a lot of the work myself until I rebuilt the team. Now I set expectations and write things down from day one."
      result="The geometry and dimensions I set were carried into the design that went to manufacturing. The full bike wasn't finished before I graduated."
    >
      <Section title="Rear suspension CAD">
        <Gallery
          items={[
            {
              src: "/img/moto-rear.webp",
              alt: "Close-up of the rear suspension: coil-over, swing arm, rocker, and link",
              caption: "Rear suspension layout used in the final design.",
            },
            {
              src: "/img/moto-chassis.webp",
              alt: "Chassis to swing arm integration render",
              caption: "How the swing arm mounts to the chassis. These dimensions went into the final design.",
            },
          ]}
        />
      </Section>

      <Section title="Kinematics (MotoChassis)">
        <p className="mb-5 text-[16px] leading-[1.6] text-[var(--muted)]">
          These plots set how the suspension behaves as the wheel moves up and down. I used them to size the
          linkage and pick the shock.
        </p>
        <Gallery
          items={[
            {
              src: "/motodata%201.png",
              alt: "Spring and wheel forces vs vertical wheel movement",
              caption: "Spring and wheel forces vs. wheel travel.",
            },
            {
              src: "/motodata%202.png",
              alt: "Wheel rate vs vertical wheel movement",
              caption: "Wheel rate across travel, checked against our targets.",
            },
            {
              src: "/motodata%203.png",
              alt: "Motion ratio vs vertical wheel movement",
              caption: "Motion ratio, used to size the linkage and choose the shock.",
            },
            {
              src: "/motodata%204.png",
              alt: "Shock displacement vs vertical wheel movement",
              caption: "Shock displacement vs. travel, confirming the stroke we needed.",
            },
          ]}
        />
      </Section>
    </ProjectPage>
  );
}
