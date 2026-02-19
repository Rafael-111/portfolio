export default function PyRobotPage() {
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
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-[-0.01em]">πRo-Bot</h1>

        {/* NEW INTRO TEXT */}
        <p className="text-[15px] leading-relaxed text-black/80 max-w-2xl">
        πRo-Bot is a fire-suppression robot designed to autonomously navigate interior spaces using a thermal IR camera to detect heat signatures and locate active fires.  
        The system scans environments in real time, identifies hotspots, and triggers a targeted suppression response without human intervention.  
        The demo below shows the robot traversing obstacles and executing its detection and suppression routine in a controlled test environment.
        </p>


        <div className="w-full aspect-video rounded-lg overflow-hidden border border-black/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/1t1cayGuPRw?autoplay=1&mute=1"
            title="πRo-Bot Demo"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">Project Report</h2>

          <div className="w-full h-[900px] border border-black/10 rounded-lg overflow-hidden bg-white/30">
            <iframe
              src="/Fire Supression Robot Project.pdf"
              className="w-full h-full"
              title="πRo-Bot Report"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
