export default function WindPage() {
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
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-[-0.01em]">
          Wind Turbine Design & Testing
        </h1>

        <p className="text-base leading-relaxed text-black/80">
          Designed and tested a small-scale wind turbine to optimize stiffness-to-weight ratio
          and power output. Contributed to rotor blade geometry, tower structure, and experimental
          validation, including FEA deflection analysis and controlled wind-speed power testing.
        </p>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">Project Report</h2>

          <div className="w-full h-[900px] border border-black/10 rounded-lg overflow-hidden bg-white/30">
            <iframe
              src="/Wind Turbine Design Project.pdf"
              className="w-full h-full"
              title="Wind Turbine Report"
            />
          </div>

          <a
            href="/Wind Turbine Design Project.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-sm text-black/70 hover:text-black underline underline-offset-4"
          >
            Open PDF in new tab
          </a>
        </div>
      </div>
    </main>
  );
}
