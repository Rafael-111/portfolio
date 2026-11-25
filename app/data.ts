// One place for everything the homepage and projects page show.
// Text wrapped in **double stars** is shown in bold.

export const contact = {
  name: "Rafael Petrosian",
  title: "Mechanical Engineer",
  location: "Los Angeles, CA",
  email: "rp@rafaelpetrosian.com",
  linkedin: "https://www.linkedin.com/in/rafaelpetrosian/",
  resume: "/RP_resume.pdf",
};

export const summary = [
  "UC Berkeley mechanical engineer who takes hardware from concept to working parts in aerospace, motorsport, and robotics.",
  "Shipped a defense client's circuit test box in **one month**, led a **5-person** motorcycle suspension team, and helped a 15 ft plane place **top 15** at SAE Aero Design West.",
];

export type Entry = {
  slug: string;
  org: string;
  role: string;
  place?: string;
  dates: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

export const experience: Entry[] = [
  {
    slug: "edn",
    org: "EDN Aviation",
    role: "Assistant Engineer",
    place: "Van Nuys, CA",
    dates: "Jun – Aug 2025",
    bullets: [
      "Hired to build a test box that checks a defense client's circuits before shipping; delivered it from schematic to hardware in **one month**.",
      "Learned circuit analysis on the job, iterating circuits in CircuitJS until one worked, then released the BOM and CAD to the shop floor.",
      "Scripted a unique QR label for every package, saving about **10 labor hours a week**.",
    ],
    image: "/Precision_Aviation_Group_Logo.jpg",
    imageAlt: "Precision Aviation Group logo (EDN Aviation's parent company)",
    imageFit: "contain",
  },
];

export const projects: Entry[] = [
  {
    slug: "motostudent",
    org: "MotoStudent",
    role: "Rear Suspension Lead",
    place: "UC Berkeley",
    dates: "Sep 2024 – Dec 2025",
    bullets: [
      "Led a **5-person** team on a race motorcycle's rear suspension for an international competition in Spain, rebuilding the team after the first group fell through.",
      "Iterated **hundreds** of linkage designs under shifting chassis constraints to get a near-linear wheel rate that stiffens at full travel.",
    ],
    image: "/img/moto-bike.webp",
    imageAlt: "CAD render of the MotoStudent race motorcycle with rider",
  },
  {
    slug: "pyrobot",
    org: "πRo-Bot, Autonomous Fire-Fighting Robot",
    role: "Lead Programmer",
    dates: "Jan – May 2025",
    bullets: [
      "Designed the chassis and electrical system, then built and wired the robot.",
      "Wrote C++ firmware so it finds and fights fires on its own; linking the thermal camera to stepper control took many versions.",
    ],
    image: "/img/robot-turret.webp",
    imageAlt: "The πRo-Bot fire-fighting turret with its controller",
  },
  {
    slug: "thermal-paste",
    org: "Thermal Paste Experiment",
    role: "Analyst",
    place: "UC Berkeley",
    dates: "Aug – Dec 2024",
    bullets: [
      "Designed a test of three top CPU thermal pastes; heat flux sensors were too costly, so worked with Prof. Hayden Taylor to use thermocouples alone.",
      "Milled the rig, programmed the ESP32 logger, calibrated sensors in MATLAB, and found Kryonaut conducts heat best.",
    ],
    image: "/img/thermal-rig.webp",
    imageAlt: "Insulated aluminum test blocks used to compare thermal pastes",
  },
  {
    slug: "aerosae",
    org: "Cal Aero SAE",
    role: "Wing Design Engineer",
    place: "UC Berkeley",
    dates: "Sep 2023 – Apr 2024",
    bullets: [
      "With no prior documentation, learned dihedral analysis from scratch and built the XFLR5 and MATLAB models that set the wing geometry.",
      "Sized the spar for **10%** less material at equal strength and stiffness, then learned laser cutting and balsa building to make the wing.",
    ],
    image: "/img/aero-plane.webp",
    imageAlt: "Cal Aero SAE plane on the runway",
  },
];

export const education = {
  school: "University of California, Berkeley",
  degree: "B.S. Mechanical Engineering",
  dates: "Dec 2025",
};

// Cards for the Projects page. "featured" ones are the projects on the resume.
export type Card = {
  slug: string;
  title: string;
  line: string;
  tag: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
};

export const cards: Card[] = [
  {
    slug: "motostudent",
    title: "MotoStudent Race Motorcycle",
    line: "Led the team that designed the bike's rear suspension and swing arm.",
    tag: "Suspension · CAD · Kinematics",
    image: "/img/moto-bike.webp",
    imageAlt: "MotoStudent motorcycle CAD render",
    featured: true,
  },
  {
    slug: "pyrobot",
    title: "πRo-Bot Fire-Fighting Robot",
    line: "Built a turret that finds a fire with a thermal camera and puts it out on its own.",
    tag: "Electrical · Firmware · CAD",
    image: "/img/robot-turret.webp",
    imageAlt: "πRo-Bot turret",
    featured: true,
  },
  {
    slug: "edn",
    title: "Circuit Test Box at EDN Aviation",
    line: "Designed and built a defense client's circuit test box in one month.",
    tag: "Industry · Test hardware",
    image: "/Precision_Aviation_Group_Logo.jpg",
    imageAlt: "Precision Aviation Group logo",
    imageFit: "contain",
    featured: true,
  },
  {
    slug: "thermal-paste",
    title: "Thermal Paste Experiment",
    line: "Built a test rig and proved which of the top three CPU pastes moves heat best.",
    tag: "Heat transfer · DAQ · MATLAB",
    image: "/img/thermal-rig.webp",
    imageAlt: "Thermal paste test rig",
    featured: true,
  },
  {
    slug: "aerosae",
    title: "Cal Aero SAE Wing",
    line: "Set the wing geometry and sized the spar. The plane placed top 15 at SAE Aero Design West 2024.",
    tag: "Aero · Structures · Build",
    image: "/img/aero-plane.webp",
    imageAlt: "Cal Aero SAE plane",
    featured: true,
  },
  {
    slug: "turbine",
    title: "Wind Turbine Design and Testing",
    line: "Designed and tested a small wind turbine for stiffness and power output.",
    tag: "FEA · Testing",
    image: "/img/turbine-test.webp",
    imageAlt: "3D-printed wind turbine tower under test",
  },
  {
    slug: "mems",
    title: "MEMS Microfluidic Exhaust Valve",
    line: "Designed a tiny heat-driven valve that seals a microfluidic channel.",
    tag: "MEMS · Microfabrication",
    image: "/img/mems-render.webp",
    imageAlt: "MEMS valve render",
  },
  {
    slug: "walker-wheel",
    title: "Walker Wheel Prototype",
    line: "Designed and prototyped a walker wheel that rolls smoothly and is easy to build.",
    tag: "Product design · Prototyping",
    image: "/img/walker.webp",
    imageAlt: "Walker wheel prototype on a stair test",
  },
  {
    slug: "stats-analysis",
    title: "Predicting Caffeine Intake",
    line: "Built Python models to predict how lifestyle affects student caffeine use.",
    tag: "Python · Machine learning",
    image: "/img/stats-curves.webp",
    imageAlt: "Training and validation curves",
    imageFit: "contain",
  },
];
