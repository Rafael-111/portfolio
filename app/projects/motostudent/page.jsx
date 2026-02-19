// app/projects/motostudent/page.jsx
import Image from "next/image";

export default function MotoStudentPage() {
  const BIKE_ASSEMBLY = "/bike%20assembly.png";
  const REAR_CLOSEUP = "/rear%20suspension%20close%20up.png";
  const CHASSIS_INTEGRATION = "/chassis%20suspension%20swing%20arm%20integration.png";

  const cadImages = [
    {
      src: REAR_CLOSEUP,
      alt: "Rear suspension close-up showing coil-over, swing arm, rocker, and link",
      caption:
        "Rear suspension architecture showing the geometry used in the final design for manufacturing and integration.",
    },
    {
      src: CHASSIS_INTEGRATION,
      alt: "Chassis to rear suspension and swing arm integration render",
      caption:
        "Chassis ↔ swing arm integration layout. The dimensions shown here were carried into the final design used for manufacturing.",
    },
  ];

  const plots = [
    {
      src: "/motodata%201.png",
      alt: "Spring and wheel forces vs vertical wheel movement",
      caption:
        "Spring and wheel forces vs. vertical wheel movement. MotoChassis outputs informed the final rear-end setup used for manufacturing decisions.",
    },
    {
      src: "/motodata%202.png",
      alt: "Actual wheel rate vs vertical wheel movement",
      caption:
        "Wheel rate behavior across travel used to validate performance targets before manufacturing geometry was finalized.",
    },
    {
      src: "/motodata%203.png",
      alt: "Wheel/shock motion ratio vs vertical wheel movement",
      caption:
        "Motion ratio results used to guide linkage sizing and shock selection for the final design.",
    },
    {
      src: "/motodata%204.png",
      alt: "Shock displacement vs vertical wheel movement",
      caption:
        "Shock displacement vs. travel confirming stroke requirements prior to manufacturing decisions.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F1E8] text-black">
      {/* HOME ICON */}
      <a
        href="/"
        className="fixed top-6 left-6 z-50 bg-white/40 backdrop-blur-sm rounded-md p-1 hover:scale-105 transition"
      >
        <img
          src="/home icon.png"
          alt="Home"
          className="w-6 h-6 opacity-80 hover:opacity-100 transition"
        />
      </a>

      {/* BACK ICON */}
      <a
        href="/projects"
        className="fixed top-6 left-16 z-50 bg-white/40 backdrop-blur-sm rounded-md p-1 hover:scale-105 transition"
      >
        <img
          src="/back-arrow-icon.png"
          alt="Back to Projects"
          className="w-6 h-6 opacity-80 hover:opacity-100 transition"
        />
      </a>

      <div
        className="mx-auto max-w-3xl px-8 py-16 space-y-10"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.01em]">
          MotoStudent — Rear Suspension &amp; Chassis Integration
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base leading-relaxed text-black/80">
          Rear Suspension Lead for UC Berkeley’s MotoStudent team, overseeing a subteam of 5. I owned
          rear-geometry development (coil-over, swing arm, rocker, linkage) and was responsible for
          chassis + swing arm integration—packaging, interfaces, and clearance-driven iteration guided
          by kinematic analysis.
        </p>

        <p className="text-sm text-black/60">
          The bike wasn’t fully built within my timeframe, but the geometry, dimensions, and analysis
          outputs shown here were used to guide the final design and manufacturing decisions.
        </p>

        {/* HERO */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium">System Context</h2>
          <img
            src={BIKE_ASSEMBLY}
            alt="MotoStudent bike CAD assembly render"
            className="w-full rounded-lg border border-black/10"
          />
          <p className="text-sm text-black/60">
            Assembly context used to drive rear-end packaging decisions and integration checks.
          </p>
        </div>

        {/* CONTRIBUTIONS */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium">My Contributions</h2>
          <ul className="list-disc pl-5 space-y-1 text-[15.5px] leading-relaxed text-black/80">
            <li>
              Led rear suspension development and coordinated a 5-person subteam across CAD, integration,
              and analysis tasks.
            </li>
            <li>
              Owned chassis ↔ rear-end integration: swing arm mounting, shock/linkage packaging, and
              clearance validation against the full bike layout.
            </li>
            <li>
              Used MotoChassis outputs (motion ratio, wheel rate, shock travel) to guide geometry sizing,
              with simulation results informing the configuration carried into manufacturing.
            </li>
            <li>
              Produced integration-ready CAD views that defined dimensions ultimately used in the final
              manufactured design.
            </li>
          </ul>
        </div>

        {/* CAD */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Rear Geometry &amp; Integration CAD</h2>

          <div className="space-y-8">
            {cadImages.map((imgItem) => (
              <div key={imgItem.src} className="space-y-2">
                <img
                  src={imgItem.src}
                  alt={imgItem.alt}
                  className="w-full rounded-lg border border-black/10 bg-white/20"
                />
                <p className="text-sm text-black/60">{imgItem.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KINEMATICS */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Kinematic Analysis Outputs (MotoChassis)</h2>

          <p className="text-[15.5px] leading-relaxed text-black/80">
            These simulation results were used to iterate motion ratio, wheel rate, and shock travel,
            with the resulting values informing the final geometry and manufacturing configuration.
          </p>

          <div className="space-y-10">
            {plots.map((p) => (
              <div key={p.src} className="space-y-2">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full rounded-lg border border-black/10 bg-white/20"
                />
                <p className="text-sm text-black/60">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
