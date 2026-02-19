export default function ThermalPastePage() {
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
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-[-0.01em]">
          Thermal Paste Performance Experiment
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base leading-relaxed text-black/80">
          Designed and executed a controlled heat-transfer experiment to compare common CPU thermal
          pastes using custom-machined aluminum blocks, K-type thermocouples, and an ESP32 DAQ.
          Processed and smoothed sensor data in MATLAB, using ΔT across the paste layer as the
          performance metric to rank materials under repeatable conditions.
        </p>

        {/* PDF VIEWER */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Project Report</h2>

          <div className="w-full h-[900px] border border-black/10 rounded-lg overflow-hidden bg-white/30">
            <iframe
              src="/Thermal Paste Performance Project.pdf"
              className="w-full h-full"
              title="Thermal Paste Performance Report"
            />
          </div>

          {/* OPEN PDF LINK */}
          <a
            href="/Thermal Paste Performance Project.pdf"
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
