export default function Home() {
  const links = [
    { label: "Projects", href: "/projects", external: false },
    { label: "Email", href: "mailto:rafael1@berkeley.edu", external: false },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rafaelpetrosian/", external: true },
    { label: "Resume", href: "/Rafael Petrosian-Resume.pdf", external: false },
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
        className="mx-auto w-full max-w-3xl px-8 py-10"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
      >
        <div className="py-14 space-y-10">
          <section className="space-y-6">
            <h1 className="text-xl sm:text-2xl tracking-[-0.01em] font-medium">
              🛠️ Hello, I’m <span className="font-semibold">Rafael</span>
            </h1>

            <div className="space-y-5 text-[15.5px] leading-[1.75] tracking-[0.01em] max-w-2xl">
              <p>
                UC Berkeley Mechanical Engineering graduate{" "}
                <a
                  href="https://www.berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.03] px-2 py-0.5 text-sm hover:bg-black/[0.06] transition"
                >
                  🎓 UC Berkeley
                </a>
                . Built and tested hardware across aero and motorsports:{" "}
                <a
                  href="https://asae.studentorg.berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.03] px-2 py-0.5 text-sm hover:bg-black/[0.06] transition"
                >
                  ✈️ Aero SAE
                </a>{" "}
                where I worked on wing CAD, MATLAB aero studies, and manufacturing support, and{" "}
                <a
                  href="https://msoc.studentorg.berkeley.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.03] px-2 py-0.5 text-sm hover:bg-black/[0.06] transition"
                >
                  🏍️ MotoStudent
                </a>{" "}
                where I helped design and validate rear suspension and chassis components.
              </p>

              <p>
                My projects span robotics, microfabrication, and thermal systems. On πRo-Bot, I
                designed the electrical architecture, integrated sensors and control hardware, and
                supported system testing to ensure reliable fire-detection response. I also developed
                a MEMS microfluidic exhaust valve, working through device physics, fabrication
                constraints, and validation strategy. Separately, I ran a controlled thermal paste
                experiment using thermocouples and an ESP32 DAQ, building calibration workflows in
                MATLAB to quantify performance differences.
              </p>

              <p>
                In industry at{" "}
                <a
                  href="https://www.precisionaviationgroup.com/our-companies/edn-aviation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-black/[0.03] px-2 py-0.5 text-sm hover:bg-black/[0.06] transition"
                >
                  <img
                    src="/Precision_Aviation_Group_Logo.jpg"
                    alt="PAG"
                    className="w-3.5 h-3.5 object-contain"
                  />
                  EDN Aviation
                </a>
                , I primarily designed and built a hardware test box used for validation and system
                integration, taking it from CAD through fabrication and assembly. Alongside that work,
                I created digital twins for CNC manufacturing, prepared BOMs for procurement, and
                supported additional test hardware builds. I’m most interested in aerospace and
                electromechanical systems where integration, reliability, and real-world performance
                matter.
              </p>

              <p className="opacity-70">Feel free to view my work below and/or reach out.</p>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap gap-3 pt-4 text-[14.5px] font-semibold tracking-[0.01em]">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-lg border border-black/15 bg-black/[0.02] px-3 py-2 hover:bg-black/[0.05] hover:translate-x-1 transition"
                >
                  <span aria-hidden="true">↗</span>
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
