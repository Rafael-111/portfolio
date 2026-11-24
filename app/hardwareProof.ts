export type ProofImage = { src: string; cap: string; fit?: "contain" };
export type ProofItem = {
  title: string;
  did: string;
  hard: string;
  href?: string;
  images: ProofImage[];
};

export const proofIntro =
  "Hardware I built, tested, and fixed: what I did on each, and what was hard.";

export const proofItems: ProofItem[] = [
  {
    title: "Cal Aero SAE plane: wing and spar",
    did: "Ran the dihedral and airfoil simulations in XFLR5 and MATLAB that set the wing's final shape, designed the wing structure in CAD, sized the spar in MATLAB from shear, bending moment, stress, and deflection (10% less material while still meeting strength and stiffness targets), laser-cut the airfoil ribs, and built the balsa wing. The plane flew and placed top 15 in the Regular Class.",
    hard: "There was no prior documentation on dihedral analysis, so I learned it from scratch and built my own models in MATLAB. Manufacturing was new too: I had never used a laser cutter or worked with thin, fragile wood like balsa.",
    href: "/projects/aerosae",
    images: [
      { src: "/img/hp/aero-plane-runway.webp", cap: "The finished plane at flight test" },
      { src: "/img/hp/aero-hollowfoil.webp", cap: "Hollowfoil wing sections" },
      { src: "/img/hp/aero-loadtest.webp", cap: "Load testing a wing section" },
      { src: "/img/hp/aero-truss.webp", cap: "Aluminum truss internals" },
      { src: "/img/hp/aero-spar-notes.webp", cap: "My spar joint and bolt shear calcs" },
    ],
  },
  {
    title: "πRo-Bot fire-fighting turret",
    did: "Designed the chassis and the water gun's internal firing mechanism in Fusion 360, designed the electrical system (power, wiring harnesses, two ESP32s, the thermal camera, stepper drivers, and the firing motor circuit), wrote the C++ firmware that reads the thermal camera, streams it to the controller, aims, and fires, and built and wired the whole robot.",
    hard: "Configuring the sensors and getting them to talk to the motor control in an autonomous system was difficult, even with the documentation available online.",
    href: "/projects/pyrobot",
    images: [
      { src: "/img/hp/robot-bench.webp", cap: "The turret and its control box on the bench" },
      { src: "/img/hp/robot-live.webp", cap: "Live test: aiming at a candle" },
      { src: "/img/hp/robot-close.webp", cap: "Turret, ESP32, and stepper drivers" },
      { src: "/img/hp/robot-wiring.webp", cap: "Wiring diagram", fit: "contain" },
      { src: "/img/hp/robot-firing.webp", cap: "Firing mechanism (CAD)", fit: "contain" },
    ],
  },
  {
    title: "Thermal paste test rig and sensor calibration",
    did: "Designed the experiment, built the insulated rig and an ESP32 logger for three K-type thermocouples, calibrated every thermocouple in ice water and boiling water with a fitting script I wrote, and processed the data in MATLAB to rank the pastes on one clear metric.",
    hard: "Designing the experiment in the first place. I consulted Professor Hayden Taylor. We wanted heat flux sensors, but they were too expensive, so we worked out a way to do it with just thermocouples.",
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
    did: "Calibrated a strain gauge, an accelerometer, and an LVDT against a linear encoder through an NI DAQ (15 runs of 40,000 samples each), then added mass to the beam and used FFTs on the calibrated data to find its natural frequency, which fell from about 12.3 Hz to 9 Hz with 94 g added.",
    hard: "The sensors fought back: the LVDT showed a discontinuity and non-linearity, and the strain gauge picked up noise and thermal drift. Moving the analysis into the frequency domain separated the signal from the noise, and I propagated the uncertainty from mass, length, frequency, and calibration.",
    images: [
      { src: "/img/hp/beam-rig.webp", cap: "The vibrating beam rig" },
      { src: "/img/hp/beam-calib.webp", cap: "Accelerometer calibration", fit: "contain" },
      { src: "/img/hp/beam-freq.webp", cap: "Natural frequency vs. mass", fit: "contain" },
    ],
  },
  {
    title: "SolarSync automatic window blinds (ME100)",
    did: "Built a device that opens and closes blinds based on sunlight: a photoresistor on one ESP32 sends to a second ESP32 over ESP-NOW, which drives a DC motor through an H-bridge. 3D-printed the motor connector in three fits to get the right one.",
    hard: "Tuning the motor, stopping false triggers from passing light, and tracking whether the blinds were open or closed.",
    images: [
      { src: "/img/hp/solar-blind.webp", cap: "Mounted on the blinds" },
      { src: "/img/hp/solar-diagram.webp", cap: "How the parts connect", fit: "contain" },
    ],
  },
  {
    title: "MotoStudent rear suspension",
    did: "Led the rear suspension subteam and owned the whole rear end: coil-over shock, swing arm, rocker, and linkage, and how it mounts to the chassis. Compared solid-body and trellis swing arms in Onshape, worked out packaging and clearances with the chassis team, did the full CAD, and released it to manufacturing.",
    hard: "All of it at once: managing the team and rebuilding it with committed people, iterating through hundreds of designs to get a wheel rate that stays nearly linear and then stiffens hard at the end, and working with constraints that kept changing.",
    href: "/projects/motostudent",
    images: [
      { src: "/img/hp/moto-rear.webp", cap: "Rear linkage, rocker, and swing arm" },
      { src: "/img/hp/moto-wheelrate.webp", cap: "Wheel rate vs. wheel travel", fit: "contain" },
      { src: "/img/hp/moto-chassis.webp", cap: "Chassis with rear suspension", fit: "contain" },
    ],
  },
];
