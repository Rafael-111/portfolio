export type ProofImage = { src: string; cap: string; fit?: "contain" };
export type ProofItem = {
  title: string;
  context: string;
  did: string;
  hard: string;
  href?: string;
  images: ProofImage[];
};

export const proofIntro =
  "Hardware I built, tested, and fixed. Each block says what I personally did and what was hard.";

export const proofItems: ProofItem[] = [
  {
    title: "Cal Aero SAE plane: wing and spar",
    context: "Wing Design Engineer · 15 ft wingspan · 2023–24",
    did: "Set the wing shape with dihedral and airfoil simulations, sized the telescoping aluminum spar by hand and in MATLAB (10% less material), laser-cut the ribs, and built the balsa wing.",
    hard: "Learned the laser cutter and wing building from scratch. The plane flew and placed top 15 in the Regular Class.",
    href: "/projects/aerosae",
    images: [
      { src: "/img/hp/aero-plane-runway.webp", cap: "The finished plane at flight test" },
      { src: "/img/hp/aero-structure.webp", cap: "Internal structure: ribs and spar", fit: "contain" },
      { src: "/img/hp/aero-hollowfoil.webp", cap: "Hollowfoil wing sections" },
      { src: "/img/hp/aero-spar-notes.webp", cap: "My spar joint and bolt shear calcs" },
    ],
  },
  {
    title: "πRo-Bot fire-fighting turret",
    context: "Team project · Fusion 360, ESP32, C++",
    did: "Designed the chassis and electronics, wrote the C++ firmware, and built and wired the whole turret.",
    hard: "Calibrating the thermal camera and stepper control took many firmware versions. It now finds heat, aims, and fires on its own.",
    href: "/projects/pyrobot",
    images: [
      { src: "/img/hp/robot-turret.webp", cap: "The finished turret" },
      { src: "/img/hp/robot-live.webp", cap: "Live test: tracking a heat source" },
      { src: "/img/hp/robot-side.webp", cap: "Stepper motors and drive" },
      { src: "/img/hp/robot-firing.webp", cap: "Firing mechanism internals (CAD)", fit: "contain" },
    ],
  },
  {
    title: "Thermal paste test rig and sensor calibration",
    context: "Experiment design · ESP32, K-type thermocouples, MATLAB",
    did: "Built the insulated rig and an ESP32 logger for three K-type thermocouples, and calibrated each one in ice water and boiling water.",
    hard: "The hot plate never reached steady state, so I dropped the conductivity measurement and ranked the pastes by temperature drop.",
    href: "/projects/thermal-paste",
    images: [
      { src: "/img/hp/thermal-rig.webp", cap: "Insulated test rig" },
      { src: "/img/hp/thermal-icebath.webp", cap: "Ice-bath calibration" },
      { src: "/img/hp/thermal-calib.webp", cap: "Calibration curve, 3 sensors", fit: "contain" },
      { src: "/img/hp/thermal-wiring.webp", cap: "Logger wiring", fit: "contain" },
    ],
  },
  {
    title: "Vibrating beam: sensor calibration (ME103 Lab 3)",
    context: "Team of 2 · NI DAQ, MATLAB, FFT",
    did: "Calibrated a strain gauge, an accelerometer, and an LVDT against a linear encoder, then used FFTs to find the beam's natural frequency as mass was added.",
    hard: "Pulling clean signal out of noisy sensors: 15 runs of 40,000 samples each. Natural frequency fell from about 12.3 Hz to 9 Hz with 94 g added.",
    images: [
      { src: "/img/hp/beam-rig.webp", cap: "The vibrating beam rig" },
      { src: "/img/hp/beam-calib.webp", cap: "Accelerometer calibration", fit: "contain" },
      { src: "/img/hp/beam-freq.webp", cap: "Natural frequency vs. mass", fit: "contain" },
    ],
  },
  {
    title: "SolarSync automatic window blinds (ME100)",
    context: "Team of 2 · ESP32, ESP-NOW, DC motor",
    did: "Built a device that opens and closes blinds based on sunlight: a photoresistor on one ESP32 sends to a second ESP32 over ESP-NOW, which drives a DC motor through an H-bridge.",
    hard: "Tuning the motor, stopping false triggers from passing light, and tracking whether the blinds were open or closed. We 3D-printed the motor connector in three fits to get it right.",
    images: [
      { src: "/img/hp/solar-blind.webp", cap: "Mounted on the blinds" },
      { src: "/img/hp/solar-diagram.webp", cap: "How the parts connect", fit: "contain" },
    ],
  },
  {
    title: "MotoStudent rear suspension",
    context: "Led rear suspension and swing arm · CAD and simulation",
    did: "Led the rear suspension and swing arm design, working through hundreds of linkage iterations in CAD and simulation.",
    hard: "Getting a wheel rate that stays nearly linear through most of the travel, then stiffens sharply at the end.",
    href: "/projects/motostudent",
    images: [
      { src: "/img/hp/moto-rear.webp", cap: "Rear linkage, rocker, and swing arm" },
      { src: "/img/hp/moto-wheelrate.webp", cap: "Wheel rate vs. wheel travel", fit: "contain" },
      { src: "/img/hp/moto-chassis.webp", cap: "Chassis with rear suspension", fit: "contain" },
    ],
  },
];
