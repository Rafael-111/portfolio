export default function ProjectsPage() {
  const projects = [
    ["πRo-Bot (Autonomous Fire Suppression Robot)", "/projects/pyrobot"],
    ["MotoStudent Racing Motorcycle", "/projects/motostudent"],
    ["Aero SAE Aircraft", "/projects/aerosae"],
    ["MEMS Microfluidic Exhaust Valve", "/projects/mems"],
    ["Wind Turbine Design + Testing", "/projects/turbine"],
    ["Thermal Paste Experiment", "/projects/thermal-paste"],
    ["Statistical Analysis", "/projects/stats-analysis"],
    ["Rollator Wheel Hub Prototype", "/projects/walker-wheel"],
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

      <div
        className="mx-auto max-w-3xl px-8 py-10"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div className="py-14">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-[-0.01em] underline underline-offset-4 mb-10">
            Projects
          </h1>

          <div className="space-y-2 text-[15.5px] leading-[1.75] tracking-[0.01em]">
            {projects.map(([title, link]) => (
              <a
                key={title}
                href={link}
                className="block py-1 hover:translate-x-1 transition duration-150"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
