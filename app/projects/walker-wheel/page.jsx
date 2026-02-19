export default function WalkerWheelPage() {
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
          Walker Wheel Prototype
        </h1>

        {/* DESCRIPTION */}
        <p className="text-base leading-relaxed text-black/80">
          Designed and prototyped a custom walker wheel system focused on manufacturability,
          assembly, and smooth rolling performance. Created CAD for the hub/spoke geometry,
          selected prototype processes, and defined tolerance/fit requirements for bearings,
          axles, and fasteners to ensure repeatable assembly.
        </p>

        {/* PROJECT IMAGE */}
        <div className="space-y-2">
          <img
            src="/walker.png"
            alt="Walker prototype test on stairs"
            className="w-full rounded-lg border border-black/10"
          />
          <p className="text-sm text-black/60">
            Prototype testing on stairs to evaluate rolling behavior and obstacle clearance.
          </p>
        </div>

        {/* PDF VIEWER */}
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Project Report</h2>

          <div className="w-full h-[85vh] border border-black/10 rounded-lg overflow-hidden bg-white/30">
            <iframe
              src="/Walker Wheel Project.pdf#zoom=page-width&view=FitH"
              className="w-full h-full"
              title="Walker Wheel Report"
            />
          </div>

          {/* OPEN PDF LINK */}
          <a
            href="/Walker Wheel Project.pdf"
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
