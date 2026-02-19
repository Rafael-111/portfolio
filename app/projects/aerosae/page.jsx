export default function AeroPage() {
  // URL-encoded paths (handles spaces in filenames)
  const PLANE_RENDER = "/Final%20Plane%20Render.JPG";
  const CAD_PDF = "/Final%20CAD%20Drawing%20PDF.pdf";
  const DESIGN_REPORT_PDF = "/FINAL_Design_Report_23-24.pdf";

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

      {/* BACK TO PROJECTS ICON */}
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
          Aero SAE Wing Analysis &amp; Manufacturing Support
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base leading-relaxed text-black/80">
          Supported UC Berkeley Aero SAE wing development through stability geometry calculations
          (dihedral trade studies) and structural sizing. Also supported manufacturing by laser
          cutting airfoils/ribs and building the wing structure with balsa. The outputs below reflect the analysis and build work used to guide real
          design decisions.
        </p>

        {/* HERO / FINAL RENDER */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Final Configuration</h2>
          <img
            src={PLANE_RENDER}
            alt="Final aircraft CAD render"
            className="w-full rounded-lg border border-black/10"
          />
          <p className="text-sm text-black/60">
            Final assembly render used as the reference configuration for analysis and build.
          </p>
        </div>

        {/* CONTRIBUTIONS */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium">My Contributions</h2>
          <ul className="list-disc pl-5 space-y-1 text-[15.5px] leading-relaxed text-black/80">
            <li>
              Supported wing CAD updates and geometry refinement in SolidWorks to reflect
              analysis-driven configuration changes.
            </li>
            <li>
              Built dihedral sensitivity tools to evaluate lateral stability tradeoffs and guide wing
              configuration selection.
            </li>
            <li>
              Modeled spar bending, shear, stress, and deflection behavior to meet stiffness/strength
              targets with manufacturable geometry.
            </li>
            <li>
              Supported manufacturing by laser cutting airfoils/ribs and assembling the wing with
              balsa, translating analysis-driven geometry into a buildable structure.
            </li>
          </ul>
        </div>

        {/* FLIGHT FOOTAGE */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Flight Test Footage</h2>

          {/* 16:9 responsive container (YouTube-style size) */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg border border-black/10 bg-white/20"
                controls
                preload="metadata"
                playsInline
              >
                <source src="/flight.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <p className="text-sm text-black/60 text-center">
            Field footage from Aero SAE testing validating aircraft configuration, stability,
            and structural integration in real operating conditions.
          </p>
        </div>

        {/* STABILITY / DIHEDRAL OUTPUTS */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Stability &amp; Dihedral Trade Study</h2>

          <p className="text-[15.5px] leading-relaxed text-black/80">
            Evaluated a kinked-wing dihedral configuration (outer-panel dihedral starting at a spanwise
            kink) to estimate roll stability contribution versus performance cost. The plots below show
            how dihedral angle and kink location affect a roll-stability proxy and induced-drag penalty,
            supporting a geometry choice that met handling requirements without over-penalizing efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <img
                src="/dihedral1.png"
                alt="Roll stability vs dihedral for multiple kink locations"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Roll stability proxy versus outer-panel dihedral for multiple kink locations.
              </p>
            </div>

            <div className="space-y-2">
              <img
                src="/dihedral2.png"
                alt="Required dihedral to meet target stability vs kink location"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Required dihedral to meet a target stability level as a function of kink location.
              </p>
            </div>

            <div className="space-y-2">
              <img
                src="/dihedral3.png"
                alt="Induced drag penalty vs kink location at required dihedral"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Estimated induced-drag penalty at the required dihedral (projected-span reduction).
              </p>
            </div>

            <div className="space-y-2">
              <img
                src="/dihedral4.png"
                alt="Trade space contour showing objective and feasible stability boundary"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Trade space over kink location and dihedral angle (objective + stability constraint).
              </p>
            </div>
          </div>
        </div>

        {/* STRUCTURAL OUTPUTS */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Structural Analysis Outputs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <img
                src="/aero1.png"
                alt="Stress distribution along spar"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Stress distribution used to verify allowable margins near the root.
              </p>
            </div>

            <div className="space-y-2">
              <img
                src="/aero3.png"
                alt="Bending moment distribution"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Bending moment diagram guiding spar sizing and material placement.
              </p>
            </div>

            <div className="space-y-2">
              <img
                src="/aero2.png"
                alt="Shear force distribution"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Shear distribution validating load transfer across the span.
              </p>
            </div>

            <div className="space-y-2">
              <img
                src="/aero4.png"
                alt="Predicted spar deflection"
                className="w-full max-w-md mx-auto rounded-lg border border-black/10 bg-white/30"
              />
              <p className="text-sm text-black/60 text-center">
                Deflection profile ensuring stiffness targets were met.
              </p>
            </div>
          </div>
        </div>

        {/* FINAL CAD DRAWING PDF */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Final CAD Drawing &amp; Key Specs</h2>
          <p className="text-[15.5px] leading-relaxed text-black/80">
            Final assembly drawing used to communicate configuration and baseline aircraft parameters
            (wingspan, area, aspect ratio, empty weight, and CG).
          </p>

          <div className="rounded-lg border border-black/10 overflow-hidden bg-white/20">
            <object data={CAD_PDF} type="application/pdf" className="w-full h-[78vh]">
              <iframe
                src={CAD_PDF}
                className="w-full h-[78vh]"
                title="Final CAD Drawing PDF"
              />
            </object>
          </div>

          <p className="text-sm text-black/60">
            Assembly sheet showing primary geometry and mass properties, used as a single source of truth
            for stability and packaging work.
          </p>
        </div>

        {/* FULL DESIGN REPORT PDF */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Technical Design Report</h2>
          <p className="text-[15.5px] leading-relaxed text-black/80">
            Full team design report covering system overview, aerodynamic sizing, stability/control,
            structural methods, and manufacturing approach.
          </p>

          <div className="rounded-lg border border-black/10 overflow-hidden bg-white/20">
            <object data={DESIGN_REPORT_PDF} type="application/pdf" className="w-full h-[78vh]">
              <iframe
                src={DESIGN_REPORT_PDF}
                className="w-full h-[78vh]"
                title="Aero SAE Technical Design Report PDF"
              />
            </object>
          </div>

          <p className="text-sm text-black/60">
            Includes the team’s final design rationale, loads, and verification approach used to support
            manufacturing and testing.
          </p>
        </div>
      </div>
    </main>
  );
}
