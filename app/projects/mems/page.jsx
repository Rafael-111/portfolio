import ProjectPage, { Section, Gallery, Docs, DeepDive, Prose, P, Specs, Bullets } from "../../components/ProjectPage";

export const metadata = { title: "MEMS Exhaust Valve · Rafael Petrosian" };

export default function MemsPage() {
  return (
    <ProjectPage
      title="MEMS Microfluidic Exhaust Valve"
      meta="Team of 2 · MEMS course with Professor Liwei Lin · UC Berkeley"
      oneLiner="A microscopic valve for microfluidic chips. Heat pushes a plug into a tiny channel to close it, and an electric charge holds it shut."
      hero={{
        src: "/img/mems-layout.webp",
        alt: "Layout of the thermal actuator array and valve plug",
        caption: "The thermal actuator array that drives the valve plug.",
        fit: "contain",
      }}
      stats={[
        { value: "6", label: "thermal actuators linked into one yoke array" },
        { value: "93 µN", label: "estimated plug force at 8 µm of travel" },
        { value: "5", label: "masks needed in the standard MUMPS process" },
        { value: "2 µm", label: "minimum feature size the design follows" },
      ]}
      did={[
        "Designed the valve around a thermal yoke-array actuator that pushes a triangular plug into the channel.",
        "Added electrostatic latching with a gold-chromium layer so the valve seals better and leaks less.",
        "Calculated the force and deflection the actuator array can deliver, building on published actuator data.",
        "Laid out the design so it can be built with the standard five-mask MUMPS surface micromachining process, following its 2 µm design rules.",
        "Identified the open problems: actuator wiring, how to apply voltage to the metal layer, and fluid simulation.",
      ]}
      hard="At this scale a valve has to push hard and still not leak. One actuator only gives about 4.4 µN, so I worked out how to combine six into a yoke array and added electrostatic latching to hold the seal."
      result="A complete valve design that fits the standard five-mask MUMPS process, with an estimated 93 µN of plug force at 8 µm of travel. It is calculated, not yet fabricated."
    >
      <Section title="Design">
        <Gallery cols={1} items={[{ src: "/img/mems-render.webp", alt: "Render of the valve plug in the channel", caption: "The plug seated in the channel." }]} />
      </Section>

      <DeepDive />

      <Section title="The problem">
        <Prose>
          <P text="Microfluidic chips move tiny amounts of fluid through channels thinner than a hair. Fluid **leakage** is a major problem for valves at this scale. We set out to design an exhaust valve that closes with a lot of force and then locks closed without needing the actuator to keep working." />
        </Prose>
      </Section>

      <Section title="How the valve works">
        <Prose>
          <P text="Six **lateral thermal actuators** are connected through a shared beam, called a yoke array, with a triangular plug on the tip. Each actuator is a pair of beams, one thin “hot” arm and one wide “cold” arm. Current heats the thin arm more, it expands more, and the pair bends sideways. Six of them working together multiply the force." />
          <P text="Once the plug is in the channel, a voltage on a gold-chromium layer creates an **electrostatic attraction** that pulls the plug face against the channel wall. That latches the seal, which is the leak-prevention step. The latching idea is inspired by scratch drive actuators, and since electrostatic force grows with the square of the voltage, the clamping force can be tuned finely." />
        </Prose>
      </Section>

      <Section title="Force estimate">
        <Prose>
          <P text="We adapted a published thermal actuator (hot arm 2.5 µm wide and 240 µm long, cold arm 16 µm wide and 200 µm long, 2 µm gap) that can deflect 16 µm unloaded at 3 V and 3.5 mA, and delivers about 4.4 µN of force at 8 µm of deflection. From that I estimated the array:" />
        </Prose>
        <Specs
          head={["Configuration", "Force at 8 µm deflection"]}
          rows={[
            ["One actuator", "about 4.4 µN"],
            ["Six actuators in a yoke array", "about 26.4 µN minimum"],
            ["Yoke array with back-bending", "about 93 µN (about 15.5 µN per actuator)"],
          ]}
          note="Calculated from the published single-actuator data, not measured on fabricated hardware."
        />
        <Prose>
          <P text="That 93 µN is pressed through a triangular tip into a 4 µm-wide channel, which spreads the force evenly around the seal." />
        </Prose>
      </Section>

      <Section title="Manufacturing plan">
        <Prose>
          <P text="The device is designed for **MUMPS**, a standard polysilicon surface micromachining process, and needs only five masks. All features meet the process's 2 µm design rule, and the gap between the anchor and the first polysilicon layer is 4 µm, as the process requires." />
        </Prose>
        <Specs
          head={["Mask", "Layer"]}
          rows={[
            ["1", "Poly 0 (bright etch)"],
            ["2", "Poly 0 to Poly 1 via (dark)"],
            ["3", "Poly 1 (bright etch)"],
            ["4", "Oxide 2 via (bright)"],
            ["5", "Metal, gold-chromium (bright etch)"],
          ]}
        />
      </Section>

      <Section title="What's still open">
        <Bullets
          items={[
            "We have not designed the circuitry to drive the actuator array, and the vertical channel walls will make the wiring tricky.",
            "We still need a method to apply voltage across the metal layer for latching.",
            "Fluid simulation is needed to confirm the seal actually stops flow.",
            "Pressing hard on the plug could damage the polysilicon over time. That needs checking.",
          ]}
        />
      </Section>

      <Section title="Full report">
        <Docs items={[{ label: "MEMS valve project report", href: "/Microfluidic%20Exhaust%20Valve%20Project.pdf", note: "PDF" }]} />
      </Section>
    </ProjectPage>
  );
}
