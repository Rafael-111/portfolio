import ProjectPage, { Section, Gallery, Docs, DeepDive, Sub, Prose, P, Specs, Bullets } from "../../components/ProjectPage";

export const metadata = { title: "Thermal Paste Experiment · Rafael Petrosian" };

const results = [
  { paste: "No paste (baseline)", dt: "36.48" },
  { paste: "Noctua NT-H2", dt: "15.55" },
  { paste: "Arctic MX-6", dt: "11.15" },
  { paste: "Thermal Grizzly Kryonaut", dt: "7.66", best: true },
];

export default function ThermalPastePage() {
  return (
    <ProjectPage
      title="Thermal Paste Experiment"
      meta="Analyst · Team of 4 · ME 103 with Professor Hayden Taylor · UC Berkeley · Aug – Dec 2024"
      oneLiner="Which CPU thermal paste actually moves heat best? We built our own test rig to find out, and confirmed **Thermal Grizzly Kryonaut** beats the other top pastes."
      hero={{
        src: "/img/thermal-rig.webp",
        alt: "Aluminum test blocks wrapped in insulation on the hot plate",
        caption: "The test rig, insulated so heat only flows through the paste.",
      }}
      stats={[
        { value: "4", label: "setups tested: three top pastes plus a bare-metal baseline" },
        { value: "7.66 °C", label: "temperature drop across the best paste (Kryonaut)" },
        { value: "36.48 °C", label: "drop with no paste at all" },
        { value: "3", label: "calibrated K-type thermocouples logged by an ESP32" },
      ]}
      did={[
        "Designed the experiment: two aluminum blocks stacked on a hot plate with paste between them, so I could compare how well each paste lets heat cross the joint.",
        "Milled the aluminum test blocks from engineering drawings, with smooth mating faces and precisely bored thermocouple holes.",
        "Built the data logger: an ESP32 reading three K-type thermocouples through amplifiers, programmed in Thonny and saving to CSV.",
        "Calibrated every thermocouple against ice water and boiling water with a script I wrote to fit each sensor.",
        "Processed and smoothed the data in MATLAB and ranked the pastes on one clear metric.",
        "Changed the experiment's method when the first plan didn't work, and documented why.",
      ]}
      hard="We wanted a heat flux sensor, but it was out of our budget, so we switched to K-type thermocouples. Then our first plan, measuring each paste's thermal conductivity, failed because the hot plate never reached steady state. I changed the metric to a clean ranking by temperature drop."
      result="All three pastes beat bare metal, and **Kryonaut** had the smallest temperature drop, so it conducts heat best. The ranking matches published conductivity figures."
    >
      <Section title="Results">
        <p className="mb-4 text-[16px] leading-[1.6] text-[var(--muted)]">
          Temperature drop between the hot plate and the top block, measured when the plate reached 80 °C (a typical
          CPU under a semi-heavy load). Smaller is better: it means heat crosses the paste more easily.
        </p>
        <div className="sans overflow-hidden rounded-lg border border-[var(--line)] bg-white">
          <table className="w-full text-left text-[14.5px]">
            <thead className="bg-[var(--paper)] text-[12px] uppercase tracking-[0.1em] text-[var(--muted)]">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Paste</th>
                <th className="px-4 py-2.5 text-right font-semibold">Temperature drop (°C)</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r) => (
                <tr
                  key={r.paste}
                  className={`border-t border-[var(--line)] ${r.best ? "bg-[var(--accent-soft)] font-semibold" : ""}`}
                >
                  <td className="px-4 py-2.5">
                    {r.paste}
                    {r.best ? " (best)" : ""}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{r.dt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <DeepDive />

      <Section title="How the test works">
        <Prose>
          <P text="Heat flows from a hot plate up through a bottom aluminum block, across the paste layer, and into a top aluminum block. The better the paste, the less the temperature falls across that joint. So the measurement is simple: **the temperature drop across the paste is the score**, and a smaller drop wins." />
          <P text="A thermocouple sits at the center of each block, and a third sits against the hot plate, held in a channel milled into the underside of the bottom block so the block sits flat on the plate. A fiber insulation blanket wrapped in aluminum tape keeps heat moving straight up instead of leaking out the sides. When we ran trials without the blanket, lateral heat loss inflated the temperature drops, which told us the insulation was doing its job." />
        </Prose>
        <Specs
          head={["Part", "Detail"]}
          rows={[
            ["Test blocks", "Two identical custom-milled aluminum blocks, faces machined smooth to limit surface-roughness effects"],
            ["Sensors", "Three K-type thermocouples with amplifiers, embedded at each block center and at the hot plate"],
            ["Heat source", "Temperature-controlled hot plate (PID), run past 100 °C; metric read when the plate hit 80 °C"],
            ["Data logging", "ESP32 + breadboard, Thonny, saved as CSV, smoothed in MATLAB"],
            ["Pastes", "Noctua NT-H2, Arctic MX-6, Thermal Grizzly Kryonaut, plus a no-paste baseline"],
          ]}
        />
      </Section>

      <Section title="Calibration">
        <Prose>
          <P text="A thermocouple only reads voltage, so each one had to be mapped to a real temperature. I calibrated all three at the same time at two known points, boiling water and ice water, and wrote a script that fits a linear parameter for each thermocouple and amplifier pair from 100 readings spaced 0.5 seconds apart." />
          <P text="Our reference thermometer read 95 °C in the boiling water, below the true 100 °C. The likely causes were heat lost from the uncovered kettle, uneven heating, and the thermometer's own ±1.5 °C tolerance, so we noted it as an error source. We also ran a continuous 0 to 100 °C sweep to confirm the sensors respond linearly, and soldered the amplifier connections and braided the wires to rule out noise from loose screw terminals." />
        </Prose>
      </Section>

      <Section title="What didn't work, and what I changed">
        <Prose>
          <P text="The original goal was to calculate each paste's thermal conductivity in W/m·K. That calculation assumes the setup reaches steady state. It never did:" />
        </Prose>
        <div className="mt-4">
          <Bullets
            items={[
              "The first hot plate was not temperature-controlled. It supplied heat at a constant rate, so temperatures kept climbing and never settled.",
              "We switched to a PID-controlled plate. That gave steady readings, but the plate ramped very slowly, so the temperature differences between thermocouples were about the same size as the sensor noise, and the three traces crossed over each other.",
              "The middle and top thermocouples even read hotter than the plate sensor, which points to uneven heating from the plate's element. Soldering and braiding the wires did not meaningfully reduce the noise.",
              "Using those readings in the steady-state equations sometimes produced negative conductivities, so the numbers could not be trusted.",
            ]}
          />
        </div>
        <Prose>
          <div className="mt-4">
            <P text="So I changed the question from “what is each paste's conductivity?” to “which paste is best?” The temperature drop across the joint, measured at the same hot plate temperature for every run, answers that cleanly and does not depend on steady state." />
          </div>
        </Prose>
      </Section>

      <Section title="How we checked the answer">
        <Bullets
          items={[
            "**Ranking matches published data.** Third-party tests list Kryonaut near 12.5 W/m·K, MX-6 around 8.5 to 10.5, and NT-H2 around 1.9 to 2.7. Our order, Kryonaut then MX-6 then NT-H2, is the same.",
            "**Consistent behavior across runs.** The pastes showed steady slopes through the heating phase, as expected for a material property, while the no-paste case showed the slow, uneven climb of a gap full of air.",
            "**Insulation test.** Runs without the blanket showed lateral heat loss and larger gradients, confirming the blanket was needed.",
          ]}
        />
      </Section>

      <Section title="Limits, and what I'd do next">
        <Bullets
          items={[
            "Paste thickness was not controlled or measured, and it matters at the micron scale. A fixture that sets a fixed bond line would tighten the comparison.",
            "We used Arctic MX-6 on the thermocouple tips and under the bottom block as a control. It performed in the middle of the pack, so it may slightly insulate the sensor tips.",
            "Airflow, ambient temperature, and humidity were left out. Next steps would be a thickness-controlled joint and long-term thermal cycling.",
          ]}
        />
      </Section>

      <Section title="The setup">
        <Gallery
          items={[
            {
              src: "/img/thermal-blocks.webp",
              alt: "The two milled aluminum blocks stacked",
              caption: "The milled aluminum blocks. Paste goes between them.",
            },
            {
              src: "/img/thermal-diagram.webp",
              alt: "Diagram of the blocks, paste layer, and thermocouple locations",
              caption: "Where each thermocouple sits.",
            },
            {
              src: "/img/thermal-wiring.webp",
              alt: "Wiring of the ESP32 and three thermocouple amplifiers",
              caption: "ESP32 data logger with three K-type thermocouple amplifiers.",
            },
          ]}
        />
      </Section>

      <Section title="The data">
        <Gallery
          items={[
            { src: "/img/thermal-plot-none.webp", alt: "Temperature vs time with no paste", caption: "No paste." },
            { src: "/img/thermal-plot-nth2.webp", alt: "Temperature vs time, Noctua NT-H2", caption: "Noctua NT-H2." },
            { src: "/img/thermal-plot-mx6.webp", alt: "Temperature vs time, Arctic MX-6", caption: "Arctic MX-6." },
            {
              src: "/img/thermal-plot-kryonaut.webp",
              alt: "Temperature vs time, Thermal Grizzly Kryonaut",
              caption: "Thermal Grizzly Kryonaut: the lines sit closest together.",
            },
          ]}
        />
      </Section>

      <Section title="Full report">
        <Docs
          items={[
            {
              label: "Thermal paste project report",
              href: "/Thermal%20Paste%20Performance%20Project.pdf",
              note: "PDF · method, calibration, and results",
            },
          ]}
        />
      </Section>
    </ProjectPage>
  );
}
