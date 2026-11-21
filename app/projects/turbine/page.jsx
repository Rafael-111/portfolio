import ProjectPage, { Section, Gallery, Docs, DeepDive, Prose, P, Specs, Bullets } from "../../components/ProjectPage";

export const metadata = { title: "Wind Turbine · Rafael Petrosian" };

export default function TurbinePage() {
  return (
    <ProjectPage
      title="Wind Turbine Design and Testing"
      meta="Team of 6 · E26 with Professor Ken Youssefi · UC Berkeley · Fall 2023"
      oneLiner="We designed a small wind turbine to be stiff, light, and make as much power as possible, then 3D-printed it and tested it."
      hero={{
        src: "/img/turbine-test.webp",
        alt: "3D-printed wind turbine tower under test in the lab",
        caption: "Testing the printed turbine in the lab.",
      }}
      stats={[
        { value: "1.56 W", label: "peak power in a 25 mph wind" },
        { value: "~262 g", label: "total weight of the printed tower" },
        { value: "0.53 mm", label: "tower deflection under a 1 kg load" },
        { value: "~18.5 N/mm", label: "measured tower stiffness" },
      ]}
      did={[
        "Worked on the rotor blade design: three blades, SG6043 airfoil, 13° angle of attack and 12° twist, tuned for a 25 mph wind.",
        "Worked on the tower: a triangular, cross-braced truss designed for the most stiffness per gram within a fixed volume.",
        "Modeled the parts in SolidWorks and ran FEA on the tower to predict how much it bends under load.",
        "Helped test power output at a controlled wind speed with a tachometer and a variable electrical load.",
        "Helped measure the tower's stiffness by hanging weights from it and recording deflection.",
      ]}
      hard="Getting the most stiffness per gram inside a fixed volume, while also tuning the blades for a 25 mph wind. The tower had to be light and stiff at once."
      result="The turbine made a peak of 1.56 W at 25 mph, and the tower held a 1 kg load with just 0.53 mm of deflection."
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

      <DeepDive />

      <Section title="The assignment">
        <Prose>
          <P text="Design a wind turbine rotor and tower that maximize **stiffness** and **power output** while keeping **weight** and volume low. The generator, gearbox, and brake were out of scope, so the work was entirely in the blades and the structure that holds them." />
        </Prose>
      </Section>

      <Section title="Rotor blade">
        <Specs
          head={["Parameter", "Choice", "Why"]}
          rows={[
            ["Number of blades", "3", "More blades add little beyond three, and fewer blades keep weight and drag down"],
            ["Airfoil", "SG6043", "Picked from published small-turbine airfoil comparisons for power output"],
            ["Angle of attack", "13°", "Research pointed to 10 to 15°; chosen to maximize lift at the design wind speed"],
            ["Twist", "12°", "Keeps the angle of attack effective along the blade; research supports about 12° for a 23 mph wind"],
            ["Design wind", "25 mph", "Matched to the test setup"],
            ["Material", "3D-printed ABS", "Fast to iterate; blades are light and lightly stressed"],
          ]}
        />
        <Prose>
          <P text="One limitation: the 3D printer couldn't produce the very thin edges of the airfoil, so the blade ends had to be filleted. That changes the airfoil shape slightly, and it's the first thing I'd revisit by picking an airfoil that prints cleanly." />
        </Prose>
      </Section>

      <Section title="Tower">
        <Prose>
          <P text="The tower is designed only for stiffness. Its shape borrows from an electrical transmission tower: an equilateral-triangle base for rigidity, with crossing trusses instead of solid walls. The trusses cut the volume compared with solid infill while keeping the structure stiff. It is 16.5 in tall with a 4.8 in base and a total volume of 16.83 in³." />
          <P text="The tower is too big for the printer in one piece, so it is split in two with slots that align the halves before gluing." />
        </Prose>
      </Section>

      <Section title="FEA versus the real thing">
        <Prose>
          <P text="I applied a 1 kg force normal to the back of the motor housing at the top of the tower, with the base fixed. The simulation predicted a maximum deflection of **0.276 mm**, with the highest stress at the corners where the back wall of the motor housing meets the tower." />
          <P text="In the lab we hung weights in 100 g steps up to 1 kg and measured **0.53 mm**, about double the prediction. Load versus deflection came out linear, as expected. The report points to the base clamps not holding perfectly and to a simulation that assumes ideal conditions. We did not test to failure." />
        </Prose>
      </Section>

      <Section title="Power test">
        <Prose>
          <P text="We placed the turbine in front of a fan blowing about 25.5 mph, 18.7 in away, and put reflective tape on a blade so a tachometer could read speed. A variable load on the control circuit let us sweep from lightly loaded to heavily loaded while we logged voltage, current, power, and rpm at 12 points." />
        </Prose>
        <Specs
          head={["Operating point", "Voltage", "Current", "Power", "Blade speed"]}
          rows={[
            ["Unloaded", "5.08 V", "0", "0", "6,970 rpm"],
            ["Light load", "4.60 V", "0.082 A", "0.37 W", "6,640 rpm"],
            ["Peak power", "2.60 V", "0.589 A", "1.557 W", "4,791 rpm"],
            ["Heavy load", "1.71 V", "0.673 A", "1.16 W", "4,024 rpm"],
          ]}
          note="Power peaks in the middle of the load range and falls as the load gets heavy, the classic maximum-power-transfer shape."
        />
      </Section>

      <Section title="What we'd improve">
        <Bullets
          items={[
            "**Truss layout:** the number and arrangement of trusses was chosen by judgment. A real truss analysis or a SolidWorks optimization could cut deflection further.",
            "**Motor mount:** zip-tying the motor through the printed slits lifted it out of the hub, so the mount needed a redesign.",
            "**FEA accuracy:** a more realistic model of the clamps and glue joints would close the gap between predicted and measured deflection.",
            "**Duct:** a shroud around the rotor could harvest more wind, and we'd test it with a few extra prototypes.",
          ]}
        />
      </Section>

      <Section title="Full report">
        <Docs items={[{ label: "Wind turbine project report", href: "/Wind%20Turbine%20Design%20Project.pdf", note: "PDF" }]} />
      </Section>
    </ProjectPage>
  );
}
