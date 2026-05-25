export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location?: string;
  description: string;
};

export const experience: Experience[] = [
  {
    company: "Crypted",
    role: "CEO & Founder",
    start: "2025",
    end: "Present",
    location: "New York, NY",
    description:
      "Building an AI driven studio at crypted.ai. Leading product vision, engineering, and growth from the ground up.",
  },
  {
    company: "Pfizer",
    role: "Scientist",
    start: "Jul 2025",
    end: "Present",
    location: "Pearl River, NY",
    description:
      "Developing and validating automated vaccine research workflows on Hamilton liquid handlers. Built and deployed an internal Python web application integrated with lab data systems, and connected LIMS and ELN platforms to reduce manual errors by 30% and increase throughput by 25%.",
  },
  {
    company: "Outlier AI",
    role: "AI Trainer",
    start: "Jan 2024",
    end: "Present",
    location: "Remote",
    description:
      "Prompt engineering and RLHF on STEM domain models. Improved accuracy by 15% and compliance by 20% across complex R&D datasets, aligning models with client and regulatory standards.",
  },
  {
    company: "GlaxoSmithKline",
    role: "Drug & Device Development Intern",
    start: "May 2024",
    end: "Sep 2024",
    location: "Collegeville, PA",
    description:
      "Feasibility assessments and risk mitigation for next generation combination products. Applied structured problem solving to streamline corrective actions in early R&D.",
  },
  {
    company: "Biotrial",
    role: "Clinical Research Laboratory Manager",
    start: "Nov 2022",
    end: "May 2024",
    location: "Newark, NJ",
    description:
      "Maintained FDA, CDC, IRB, IEC, and OSHA compliance across R&D lab operations. Led team training, equipment calibration, and sponsor communication, reducing equipment downtime through proactive maintenance.",
  },
  {
    company: "One Health Labs",
    role: "QC Specialist",
    start: "Sep 2021",
    end: "Sep 2022",
    location: "New York, NY",
    description:
      "Led the QC team to 100% inspection compliance and secured CLIA certification for the NYC laboratory site. Improved validation and robotics workflows.",
  },
  {
    company: "Bloomfield Police Department",
    role: "Emergency Medical Technician",
    start: "Nov 2018",
    end: "Sep 2023",
    location: "Bloomfield, NJ",
    description:
      "911 emergency response and chain of custody compliance. Mentored junior staff on triage protocols and improved team response efficiency by roughly 12%.",
  },
  {
    company: "Sampled",
    role: "Laboratory Researcher / Shift Lead",
    start: "Jan 2021",
    end: "Sep 2021",
    location: "Piscataway, NJ",
    description:
      "Led high throughput COVID variant research using PCR and qPCR. Improved onboarding efficiency by 30% and reduced instrument downtime by 25%.",
  },
];

export type Project = {
  title: string;
  blurb: string;
  year: string;
  href?: string;
  external?: boolean;
  size: "lg" | "md" | "sm";
};

export const projects: Project[] = [
  {
    title: "Crypted",
    blurb: "Software studio for small and mid sized businesses.",
    year: "2026",
    href: "https://crypted.ai",
    external: true,
    size: "lg",
  },
  {
    title: "Internal Lab Application",
    blurb: "Fully integrated Python web app supporting day to day lab workflows at a large pharma R&D org.",
    year: "2025",
    size: "md",
  },
  {
    title: "AI Alignment, Outlier",
    blurb: "RLHF and prompt engineering on STEM domain models. 15% accuracy lift.",
    year: "2024",
    size: "md",
  },
  {
    title: "CLIA Certification, NYC",
    blurb: "Led the team that secured CLIA certification for the One Health Labs NYC site.",
    year: "2022",
    size: "sm",
  },
];

export type ArchiveProject = {
  title: string;
  blurb: string;
  year: string;
  href: string;
  image: string;
  tag: "Frontend" | "Backend" | "Group";
};

export const archive: ArchiveProject[] = [
  {
    title: "Horseon",
    blurb: "Refactored an existing site for semantic HTML, accessibility, and SEO performance.",
    year: "2023",
    href: "https://cristianreyes6777.github.io/Optimizing-with-semantics/",
    image: "/projects/horseon.png",
    tag: "Frontend",
  },
  {
    title: "Password Generator",
    blurb: "Browser based password generator with selectable criteria and a responsive UI.",
    year: "2023",
    href: "https://cristianreyes6777.github.io/random-password-generator/",
    image: "/projects/password-generator.png",
    tag: "Frontend",
  },
  {
    title: "Coding Quiz",
    blurb: "Timed coding quiz with event driven JS, DOM manipulation, and a localStorage scoreboard.",
    year: "2023",
    href: "https://cristianreyes6777.github.io/Coding-Quiz/",
    image: "/projects/coding-quiz.png",
    tag: "Frontend",
  },
  {
    title: "Workday Scheduler",
    blurb: "Hour by hour day planner with localStorage persistence and time of day color coding.",
    year: "2023",
    href: "https://cristianreyes6777.github.io/Workday-Scheduler/",
    image: "/projects/workday-scheduler.png",
    tag: "Frontend",
  },
  {
    title: "Weather App",
    blurb: "Current conditions and 5 day forecast lookup by city, with condition aware card styling.",
    year: "2023",
    href: "https://cristianreyes6777.github.io/Weather-Application/",
    image: "/projects/weather-app.png",
    tag: "Frontend",
  },
  {
    title: "README Generator",
    blurb: "Node CLI that scaffolds high quality README files for GitHub projects from a Q&A flow.",
    year: "2023",
    href: "https://github.com/Cristianreyes6777/READme-Generator",
    image: "/projects/readme-generator.jpg",
    tag: "Backend",
  },
  {
    title: "SVG Logo Generator",
    blurb: "Node CLI that generates custom SVG logos with configurable text, shape, and color.",
    year: "2023",
    href: "https://github.com/Cristianreyes6777/SVG-Generator",
    image: "/projects/svg-generator.png",
    tag: "Backend",
  },
  {
    title: "Note Taker",
    blurb: "Express.js note app with persistent JSON storage and a small REST API.",
    year: "2023",
    href: "https://github.com/Cristianreyes6777/Note-Taker-using-Express",
    image: "/projects/note-taker.png",
    tag: "Backend",
  },
  {
    title: "Employee Tracker",
    blurb: "Node CLI for managing departments, roles, and employees against a MySQL database.",
    year: "2023",
    href: "https://github.com/Cristianreyes6777/Employee-Tracking-with-SQL",
    image: "/projects/employee-tracker.png",
    tag: "Backend",
  },
  {
    title: "Multiverse",
    blurb: "Team project. Client side app pulling from multiple server APIs with modal flows and persistent state.",
    year: "2023",
    href: "https://cristianreyes6777.github.io/SEAL-team-6/",
    image: "/projects/multiverse.png",
    tag: "Group",
  },
  {
    title: "MyFolio",
    blurb: "Team project. Portfolio sharing platform on Node, Express, Handlebars, and MySQL via Sequelize. Heroku deployed.",
    year: "2023",
    href: "https://project-two-myfolio-49405d36a478.herokuapp.com/",
    image: "/projects/myfolio.png",
    tag: "Group",
  },
  {
    title: "Spores 'n More",
    blurb: "Team project. Ecommerce platform built for the cultivation supply niche.",
    year: "2023",
    href: "https://sporeshop.onrender.com/",
    image: "/projects/spores-n-more.png",
    tag: "Group",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Engineering",
    items: ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Java", "C#", "HTML/CSS", "Git", "R"],
  },
  {
    label: "Data & Systems",
    items: ["MySQL", "MongoDB", "Full Stack", "Data Analysis", "Scientific Computing"],
  },
  {
    label: "AI / ML",
    items: ["Prompt Engineering", "RLHF", "Model Alignment", "Domain Fine Tuning"],
  },
  {
    label: "Life Sciences",
    items: ["ELISA", "qPCR", "RT-PCR", "Immunoassay Dev", "GLP/GCLP", "cGMP"],
  },
  {
    label: "Lab Automation",
    items: ["Hamilton STAR", "Janus G3", "Tecan", "Benchling", "Harmony"],
  },
  {
    label: "Leadership",
    items: ["Team Management", "Cross Functional Collaboration", "Regulatory Compliance", "Mentorship"],
  },
];

export const contact = {
  email: "cristianreyes6777@gmail.com",
  phone: "+1 (862) 202-5778",
  linkedin: "https://linkedin.com/in/cristian-estiben-reyes",
  github: "https://github.com/Cristianreyes6777",
  location: "New York, NY",
};
