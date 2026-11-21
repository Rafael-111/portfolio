import ProjectPage, { Section, Gallery, Docs } from "../../components/ProjectPage";

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
      meta="Analyst · ME 103 with Professor Hayden Taylor · UC Berkeley · Aug – Dec 2024"
      oneLiner="Which CPU thermal paste actually moves heat best? We built our own test rig to find out, and confirmed **Thermal Grizzly Kryonaut** beats the other top pastes."
      hero={{
        src: "/img/thermal-rig.webp",
        alt: "Aluminum test blocks wrapped in insulation on the hot plate",
        caption: "The test rig, insulated so heat only flows through the paste.",
      }}
      did={[
        "Designed and ran a test of the top three CPU thermal pastes against a no-paste baseline.",
        "Milled the 6061 aluminum test blocks.",
        "Programmed the ESP32 data logger in Thonny to read three K-type thermocouples.",
        "Calibrated the sensors in MATLAB and cleaned the data so the ranking could be trusted.",
      ]}
      hard="We wanted a heat flux sensor, but it was out of our budget. So we switched to K-type thermocouples and built our analysis around them."
      result="All three pastes beat bare metal, and **Kryonaut** had the smallest temperature drop, so it conducts heat best."
    >
      <Section title="Results">
        <p className="mb-4 text-[16px] leading-[1.6] text-[var(--muted)]">
          Temperature drop between the hot plate and the top block. Smaller is better: it means heat crosses the
          paste more easily.
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

      <Section title="The setup">
        <Gallery
          items={[
            {
              src: "/img/thermal-blocks.webp",
              alt: "The two milled aluminum blocks stacked",
              caption: "The milled 6061 aluminum blocks. Paste goes between them.",
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
