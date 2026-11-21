export const proofIntro =
  "I build hardware, test it, and change course when it fails. Each photo below is a physical thing I built or helped build, with what I personally did and what went wrong. For a hardware company that moves fast, this is the habit I would bring: get it built, find out what breaks, fix it.";

export const proofItems = [
  {
    img: "/img/robot-turret.webp",
    title: "πRo-Bot fire-fighting turret",
    did: "Designed the chassis and electronics, wrote the firmware, and built and wired the whole robot.",
    hard: "Calibrating the thermal camera and tuning stepper control took many firmware versions.",
    href: "/projects/pyrobot",
  },
  {
    img: "/img/aero-plane.webp",
    title: "Cal Aero SAE, 15 ft plane",
    did: "Set the wing shape, sized the spar (10% less material), laser-cut the ribs, and built the balsa wing.",
    hard: "Learned the laser cutter and wing assembly from scratch. The plane flew and placed top 15.",
    href: "/projects/aerosae",
  },
  {
    img: "/img/thermal-blocks.webp",
    title: "Thermal paste test blocks",
    did: "Milled the aluminum blocks with precisely bored thermocouple holes.",
    hard: "Tight mating faces and hole positions had to be right for the measurement to mean anything.",
    href: "/projects/thermal-paste",
  },
  {
    img: "/img/thermal-rig.webp",
    title: "Thermal paste test rig",
    did: "Built the rig and ESP32 data logger, and calibrated three thermocouples.",
    hard: "The first plan failed because the hot plate never reached steady state, so I changed the metric.",
    href: "/projects/thermal-paste",
  },
  {
    img: "/img/turbine-test.webp",
    title: "3D-printed wind turbine tower",
    did: "Worked on the blade and truss design in SolidWorks, ran FEA, and helped test it (team of 6).",
    hard: "Getting the most stiffness per gram. Result: 0.53 mm deflection under 1 kg at about 262 g.",
    href: "/projects/turbine",
  },
  {
    img: "/img/walker.webp",
    title: "Stair-climbing walker wheel",
    did: "Designed the wheel, chose how to make each part, and set the fits (team of 4).",
    hard: "We cut the scope down to just the wheel so we could get it working.",
    href: "/projects/walker-wheel",
  },
];
