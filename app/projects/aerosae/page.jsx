import ProjectPage, { Section, Gallery, Docs } from "../../components/ProjectPage";

export const metadata = { title: "Cal Aero SAE · Rafael Petrosian" };

export default function AeroPage() {
  return (
    <ProjectPage
      title="Cal Aero SAE Wing"
      meta="Wing Design Engineer · Cal Aero SAE · UC Berkeley · Sep 2023 – Apr 2024"
      oneLiner="I worked out the final shape of the wing for our competition plane, sized its spar, and helped build it. The plane flew and placed **top 15** in the Regular Class at SAE Aero Design West 2024."
      hero={{
        src: "/img/aero-plane.webp",
        alt: "The Cal Aero SAE plane on the runway",
        caption: "Our plane on the runway.",
      }}
      did={[
        "Ran airfoil and dihedral simulations in XFLR5 and MATLAB to set the wing geometry.",
        "Designed the wing structure in CAD.",
        "Sized the spar in MATLAB to hit strength and stiffness targets with **10% less material**.",
        "Laser-cut the airfoils and built the balsa wing.",
      ]}
      hard="The dihedral simulations were complicated and confusing at first. I also had to learn manufacturing from scratch: the laser cutter, cutting airfoils, and building the wing."
      result="The wing we built matched the design, the plane flew, and we placed **top 15** in the Regular Class at SAE Aero Design West 2024."
    >
      <Section title="Flight test">
        <div className="shot">
          <video controls preload="metadata" playsInline className="block w-full" poster="/img/aero-render.webp">
            <source src="/flight.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="sans mt-2 text-[13px] text-[var(--muted)]">Flight testing the plane.</p>
      </Section>

      <Section title="Dihedral study">
        <p className="mb-5 text-[16px] leading-[1.6] text-[var(--muted)]">
          Dihedral is the upward angle of the wing tips. Too little and the plane won't stay steady in a roll. Too
          much and you lose lift. I built these tools to find a setup that was stable without wasting performance.
        </p>
        <Gallery
          items={[
            {
              src: "/dihedral1.png",
              alt: "Roll stability vs dihedral for multiple kink locations",
              caption: "Roll stability vs. outer-panel dihedral, for different kink locations.",
            },
            {
              src: "/dihedral2.png",
              alt: "Required dihedral vs kink location",
              caption: "Dihedral needed to hit our stability target.",
            },
            {
              src: "/dihedral3.png",
              alt: "Induced drag penalty vs kink location",
              caption: "Drag cost of that dihedral.",
            },
            {
              src: "/dihedral4.png",
              alt: "Trade space contour of kink location and dihedral",
              caption: "The full trade space. The black line is the stability limit.",
            },
          ]}
        />
      </Section>

      <Section title="Spar sizing">
        <p className="mb-5 text-[16px] leading-[1.6] text-[var(--muted)]">
          The spar is the beam inside the wing that carries the load. These checks let me take out 10% of the
          material and still meet strength and stiffness targets.
        </p>
        <Gallery
          items={[
            { src: "/aero1.png", alt: "Stress along the spar", caption: "Stress along the spar, checked near the root." },
            { src: "/aero3.png", alt: "Bending moment diagram", caption: "Bending moment, used to place material." },
            { src: "/aero2.png", alt: "Shear force along the span", caption: "Shear force along the span." },
            { src: "/aero4.png", alt: "Predicted spar deflection", caption: "Tip deflection, checked against our stiffness target." },
          ]}
        />
      </Section>

      <Section title="Final design">
        <Gallery
          cols={1}
          items={[
            {
              src: "/img/aero-render.webp",
              alt: "Final CAD render of the aircraft",
              caption: "Final CAD of the plane.",
            },
          ]}
        />
      </Section>

      <Section title="Documents">
        <Docs
          items={[
            {
              label: "Final CAD drawing",
              href: "/Final%20CAD%20Drawing%20PDF.pdf",
              note: "PDF · wingspan, area, weight, and CG",
            },
            {
              label: "Team design report",
              href: "/FINAL_Design_Report_23-24.pdf",
              note: "PDF · full Cal Aero SAE report",
            },
          ]}
        />
      </Section>
    </ProjectPage>
  );
}
