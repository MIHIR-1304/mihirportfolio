import {
  FaYoutube,
  FaFacebook,
  FaJava,
  FaVideo,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
  FaCogs,
  FaLaptopCode,
  FaBrain,
  FaEye,
  FaMicrochip,
  FaTerminal,
  FaBug,
  FaBookOpen,
  FaCube,
  FaProjectDiagram,
  FaUserShield,
} from "react-icons/fa";
import {
  SiBlender,
  SiCplusplus,
  SiPython,
  SiUnrealengine,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiNotion,
  SiCanva,
  SiCinema4D,
  SiExpress,
  SiMysql,
  SiFramer,
  SiGodotengine,
  SiMicrosoftpowerpoint,
  SiMicrosoft,
  SiMicrosoftexcel,
  SiVercel,
  SiCloudflare,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiLinux,
  SiGnubash,
  SiOpencv,
  SiRaspberrypi,
  SiArduino,
  SiPostman,
  SiGit,
  SiJira,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiSwagger,
} from "react-icons/si";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Categorized Technical Skills according to CV (Mihir Mahato)
export const TECHNICAL_SKILLS_CATEGORIES = [
  {
    category: "Languages",
    description: "Core programming and querying languages for high-performance software",
    badge: "Languages",
    accent: "from-blue-500 to-cyan-400",
    skills: [
      { skill_name: "Java", icon: FaJava, color: "#ED8B00", level: "Advanced" },
      { skill_name: "Python", icon: SiPython, color: "#3776AB", level: "Advanced" },
      { skill_name: "C++", icon: SiCplusplus, color: "#00599C", level: "DSA & OOP" },
      { skill_name: "SQL", icon: SiMysql, color: "#4479A1", level: "3NF & Indexing" },
      { skill_name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: "ES6+ Fullstack" },
      { skill_name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: "Strict Typing" },
    ],
  },
  {
    category: "Core CS Fundamentals",
    description: "Fundamental computer science disciplines, algorithms & systems design",
    badge: "Core CS",
    accent: "from-purple-500 to-indigo-400",
    skills: [
      { skill_name: "Data Structures & Algorithms", icon: FaCogs, color: "#A855F7", level: "Strong Foundation" },
      { skill_name: "Object-Oriented Programming (OOP)", icon: FaLaptopCode, color: "#6366F1", level: "SOLID Principles" },
      { skill_name: "System Design", icon: FaNetworkWired, color: "#06B6D4", level: "Distributed & Microservices" },
      { skill_name: "Operating Systems", icon: SiLinux, color: "#FCC624", level: "Concurrency & Memory" },
      { skill_name: "DBMS", icon: FaDatabase, color: "#3B82F6", level: "Relational Design & ACID" },
    ],
  },
  {
    category: "Backend & Microservices",
    description: "Scalable server architectures, RESTful APIs, and distributed microservices",
    badge: "Backend",
    accent: "from-emerald-500 to-teal-400",
    skills: [
      { skill_name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", level: "Microservices & REST" },
      { skill_name: "Microservices", icon: FaProjectDiagram, color: "#10B981", level: "Decoupled Architecture" },
      { skill_name: "REST APIs & Design", icon: SiPostman, color: "#FF6C37", level: "API Contracts" },
      { skill_name: "Authentication & RBAC", icon: FaUserShield, color: "#EC4899", level: "JWT & Role Security" },
      { skill_name: "Node.js", icon: SiNodedotjs, color: "#339933", level: "Event-Driven I/O" },
      { skill_name: "Express.js", icon: SiExpress, color: "#FFFFFF", level: "Modular Monolith" },
      { skill_name: "Redis", icon: SiRedis, color: "#DC382D", level: "In-Memory Cache" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Relational, document, and in-memory databases with schema design and query tuning",
    badge: "Databases",
    accent: "from-cyan-500 to-blue-500",
    skills: [
      { skill_name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: "GIN & Indexing" },
      { skill_name: "MySQL", icon: SiMysql, color: "#00758F", level: "Relational & Procedures" },
      { skill_name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Document Store" },
      { skill_name: "Redis", icon: SiRedis, color: "#DC382D", level: "Sub-ms Caching" },
    ],
  },
  {
    category: "Frontend & UI/UX",
    description: "Modern, responsive component frameworks and interactive interfaces",
    badge: "Frontend",
    accent: "from-pink-500 to-rose-400",
    skills: [
      { skill_name: "React", icon: SiReact, color: "#61DAFB", level: "Hooks & SPA" },
      { skill_name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Responsive Styling" },
      { skill_name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", level: "SSR & Edge Routing" },
      { skill_name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Semantic Structure" },
      { skill_name: "CSS3", icon: SiCss3, color: "#1572B6", level: "Modern Layouts" },
      { skill_name: "Framer Motion", icon: SiFramer, color: "#0055FF", level: "Animations" },
      { skill_name: "Figma", icon: SiFigma, color: "#F24E1E", level: "UI/UX Mockups" },
    ],
  },
  {
    category: "Tools, DevOps & Practices",
    description: "Industry-standard engineering workflows, containers, testing, and OWASP security",
    badge: "Tools & Practices",
    accent: "from-amber-500 to-orange-400",
    skills: [
      { skill_name: "Docker", icon: SiDocker, color: "#2496ED", level: "Containerization" },
      { skill_name: "Docker Compose", icon: SiDocker, color: "#38BDF8", level: "Multi-Service Setup" },
      { skill_name: "Git & GitHub", icon: SiGit, color: "#F05032", level: "Version Control" },
      { skill_name: "Linux / Bash", icon: SiGnubash, color: "#4EAA25", level: "CLI & Scripts" },
      { skill_name: "Unit Testing & Debugging", icon: FaBug, color: "#10B981", level: "End-to-End Testing" },
      { skill_name: "Agile & SDLC", icon: SiJira, color: "#0052CC", level: "Sprint Delivery" },
      { skill_name: "Secure Coding (OWASP)", icon: FaShieldAlt, color: "#E11D48", level: "Security SRS" },
      { skill_name: "Technical Documentation", icon: FaBookOpen, color: "#8B5CF6", level: "Architecture & Specs" },
    ],
  },
  {
    category: "AI, Robotics & 3D Engineering",
    description: "Computer vision, edge neural inference, sensor integration, and 3D visualization",
    badge: "AI / Data / 3D",
    accent: "from-violet-500 to-fuchsia-400",
    skills: [
      { skill_name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", level: "Computer Vision" },
      { skill_name: "YOLO", icon: FaEye, color: "#00FFFF", level: "Object Detection" },
      { skill_name: "Sensor / Data Pipelines", icon: FaMicrochip, color: "#F59E0B", level: "Telemetry & Fusion" },
      { skill_name: "Raspberry Pi 5", icon: SiRaspberrypi, color: "#C51A4A", level: "Edge Computing" },
      { skill_name: "Arduino", icon: SiArduino, color: "#00979D", level: "Hardware Control" },
      { skill_name: "Blender 3D", icon: SiBlender, color: "#F5792A", level: "Spatial Modeling" },
      { skill_name: "Unity 3D", image: "unity.png", width: 70, height: 70, level: "Interactive 3D" },
    ],
  },
];

// Flat lists for backward compatibility and floating animation
export const SKILL_DATA = [
  { skill_name: "Java", icon: FaJava, color: "#ED8B00", width: 75, height: 75 },
  { skill_name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", width: 75, height: 75 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", width: 75, height: 75 },
  { skill_name: "Docker", icon: SiDocker, color: "#2496ED", width: 75, height: 75 },
  { skill_name: "Python", icon: SiPython, color: "#3776AB", width: 75, height: 75 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 50, height: 50 },
  { skill_name: "Redis", icon: SiRedis, color: "#DC382D", width: 75, height: 75 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", icon: SiTailwindcss, color: "#00C4CC", width: 75, height: 75 },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "C++", image: "cplusplus.png", width: 75, height: 75 },
  { skill_name: "C", image: "c.png", width: 75, height: 75 },
  { skill_name: "TypeScript", icon: SiTypescript, color: "#3178C6", width: 75, height: 75 },
  { skill_name: "HTML5", image: "html.png", width: 75, height: 75 },
  { skill_name: "CSS3", image: "css.png", width: 75, height: 75 },
  { skill_name: "Framer Motion", image: "framer.png", width: 75, height: 75 },
  { skill_name: "Blender 3D", icon: SiBlender, color: "#F5792A", width: 75, height: 75 },
  { skill_name: "Figma", image: "figma.png", width: 60, height: 60 },
  { skill_name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "#31A8FF", width: 70, height: 70 },
  { skill_name: "Adobe After Effects", icon: SiAdobeaftereffects, color: "#5e08f4ff", width: 75, height: 75 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Microservices", icon: FaProjectDiagram, color: "#10B981", width: 70, height: 70 },
  { skill_name: "REST APIs", icon: SiPostman, color: "#FF6C37", width: 70, height: 70 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MySQL", icon: SiMysql, color: "#3776AB", width: 75, height: 75 },
  { skill_name: "System Design", icon: FaNetworkWired, color: "#06B6D4", width: 70, height: 70 },
  { skill_name: "Git", image: "git.png", width: 70, height: 70 },
  { skill_name: "GitHub", icon: RxGithubLogo, color: "#FFFFFF", width: 70, height: 70 },
  { skill_name: "Linux / Bash", icon: SiGnubash, color: "#4EAA25", width: 70, height: 70 },
  { skill_name: "OWASP Secure Coding", icon: FaShieldAlt, color: "#E11D48", width: 70, height: 70 },
  { skill_name: "Unit Testing & Debugging", icon: FaBug, color: "#10B981", width: 70, height: 70 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "OpenCV", icon: SiOpencv, color: "#5C3EE8", width: 70, height: 70 },
  { skill_name: "YOLO Object Detection", icon: FaEye, color: "#00FFFF", width: 70, height: 70 },
  { skill_name: "Raspberry Pi 5", icon: SiRaspberrypi, color: "#C51A4A", width: 70, height: 70 },
  { skill_name: "Arduino", icon: SiArduino, color: "#00979D", width: 70, height: 70 },
  { skill_name: "Sensor / Data Pipelines", icon: FaMicrochip, color: "#F59E0B", width: 70, height: 70 },
  { skill_name: "Docker Compose", icon: SiDocker, color: "#38BDF8", width: 70, height: 70 },
  { skill_name: "Vercel", icon: SiVercel, color: "#FFFFFF", width: 70, height: 70 },
  { skill_name: "Cloudflare", icon: SiCloudflare, color: "#FFFFFF", width: 70, height: 70 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Unity 3D", image: "unity.png", width: 70, height: 70 },
  { skill_name: "Unreal Engine", icon: SiUnrealengine, color: "#FFFFFF", width: 70, height: 70 },
  { skill_name: "Cinema 4D", icon: SiCinema4D, color: "#02175D", width: 60, height: 60 },
  { skill_name: "Godot", icon: SiGodotengine, color: "#478CBF", width: 70, height: 70 },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/blender_buddy_13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/mihir-mahato-btech",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/MIHIR-1304",
  },
] as const;

export const PROJECT_CATEGORIES = [
  {
    id: "all",
    name: "All",
    label: "All Projects",
    description: "Browse all software engineering, 3D animations, databases, and robotics creations",
    accent: "from-purple-500 via-indigo-500 to-cyan-500",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10",
    iconName: "layer",
    previews: [
      "/projects/maison-vendome.svg",
      "/projects/taskflow.svg",
      "/projects/examsphere.svg",
      "/projects/project-2.jpg",
    ],
    subcategories: [],
  },
  {
    id: "core-engineering",
    name: "Core Engineering",
    label: "CV Featured Projects",
    description: "Primary engineering projects featured on CV: Microservices, Spring Boot, PostgreSQL, Docker & Robotics",
    accent: "from-cyan-500 via-indigo-500 to-purple-500",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10",
    iconName: "code",
    previews: [
      "/projects/maison-vendome.svg",
      "/projects/taskflow.svg",
      "/projects/examsphere.svg",
      "/projects/project-2.jpg",
    ],
    subcategories: [
      { id: "all-core", label: "All CV Highlights" },
      { id: "microservices", label: "🚀 Microservices & Distributed" },
      { id: "multi-tier", label: "📋 Multi-Tier Full-Stack" },
      { id: "backend-arch", label: "⚙️ Scalable Backend Architecture" },
      { id: "robotics-ai", label: "🤖 Autonomous Robotics & AI" },
      { id: "industrial-3d", label: "🏭 Industrial 3D Navigation" },
    ],
  },
  {
    id: "backend",
    name: "Backend Projects",
    label: "Backend & Systems",
    description: "Scalable REST APIs, enterprise e-commerce platforms, Redis caching, and data pipelines",
    accent: "from-teal-500 via-emerald-500 to-cyan-500",
    badgeColor: "border-teal-500/50 text-teal-300 bg-teal-500/10",
    iconName: "server",
    previews: [
      "/projects/maison-vendome.svg",
      "/projects/examsphere.svg",
      "/projects/taskflow.svg",
      "/projects/Advance_excel.png",
    ],
    subcategories: [
      { id: "all-backend", label: "All Backend" },
      { id: "ecommerce-platform", label: "🛍️ Microservices E-Commerce" },
      { id: "modular-monolith", label: "🏛️ Modular Monolith & Redis" },
      { id: "rest-api", label: "⚙️ REST APIs & Auth" },
      { id: "automation-engine", label: "📑 Data Automation" },
    ],
  },
  {
    id: "web-dev",
    name: "Web Development",
    label: "Web Development",
    description: "Responsive 3D websites, interactive web applications, and autonomous robotics interfaces",
    accent: "from-cyan-500 via-blue-500 to-purple-500",
    badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-500/10",
    iconName: "code",
    previews: [
      "/projects/war-of-web.svg",
      "/projects/project-3.png",
      "/projects/project-1-new.png",
      "/projects/project-2.jpg",
    ],
    subcategories: [
      { id: "all-web", label: "All Web & AI" },
      { id: "industrial-ai", label: "🏭 Industrial AI & Navigation" },
      { id: "space-web", label: "🚀 Space Exploration Web" },
      { id: "autonomous-robotics", label: "🤖 Autonomous Robotics" },
      { id: "interactive-3d", label: "🌐 Interactive 3D Web" },
    ],
  },
  {
    id: "java",
    name: "Java Projects",
    label: "Java Projects",
    description: "Spring Boot microservices, high-concurrency socket servers, and transactional systems",
    accent: "from-amber-500 via-red-500 to-orange-500",
    badgeColor: "border-amber-500/50 text-amber-300 bg-amber-500/10",
    iconName: "java",
    previews: [
      "/projects/maison-vendome.svg",
      "/projects/taskflow.svg",
      "/projects/number-intelligence.svg",
      "/projects/java-banking.svg",
    ],
    subcategories: [
      { id: "all-java", label: "All Java" },
      { id: "spring-boot", label: "🍃 Spring Boot Services" },
      { id: "core-systems", label: "🖥️ Desktop & Core Java" },
      { id: "networking", label: "⚡ Concurrency & Sockets" },
    ],
  },
  {
    id: "sql",
    name: "SQL Projects",
    label: "SQL & Databases",
    description: "3NF relational schemas, composite and GIN indexes, stored procedures & analytics",
    accent: "from-blue-500 via-cyan-500 to-teal-500",
    badgeColor: "border-blue-500/50 text-blue-300 bg-blue-500/10",
    iconName: "database",
    previews: [
      "/projects/examsphere.svg",
      "/projects/sql-hospital.svg",
      "/projects/sql-ecommerce.svg",
      "/projects/sql-inventory.svg",
    ],
    subcategories: [
      { id: "all-sql", label: "All SQL" },
      { id: "relational-schema", label: "🏥 Hospital DBMS (3NF)" },
      { id: "analytics-tuning", label: "📊 E-Commerce Analytics" },
      { id: "reporting-views", label: "📈 Materialized Views & Auditing" },
    ],
  },
  {
    id: "product-design",
    name: "Product Design",
    label: "Product Design",
    description: "Modern, high-fidelity 3D product animations and interactive commercial assets",
    accent: "from-orange-500 via-amber-500 to-red-500",
    badgeColor: "border-orange-500/50 text-orange-300 bg-orange-500/10",
    iconName: "cube",
    previews: [
      "/projects/project-4.png",
      "/projects/project-5.png",
      "/projects/project-8.png",
      "/projects/project-12.png",
    ],
    subcategories: [
      { id: "all-product", label: "All Products" },
      { id: "commercial-showcase", label: "📱 Commercial Showcase" },
      { id: "fluid-cgi", label: "💧 Fluid & CGI" },
      { id: "tech-hardware", label: "🎧 Tech & Audio" },
      { id: "luxury-ad", label: "👓 Luxury Goods" },
    ],
  },
  {
    id: "interior-design",
    name: "Interior Design",
    label: "Interior & 3D Environments",
    description: "Photorealistic architectural visualizations, lighting mockups, room models & cinematic scenes",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    badgeColor: "border-emerald-500/50 text-emerald-300 bg-emerald-500/10",
    iconName: "home",
    previews: [
      "/projects/project-7.png",
      "/projects/project-9.png",
      "/projects/project-6.png",
      "/projects/project-10.png",
    ],
    subcategories: [
      { id: "all-interior", label: "All Environments" },
      { id: "cyberpunk", label: "🌆 Cyberpunk Night City" },
      { id: "cinematic-vfx", label: "🚄 Cinematic Motion" },
      { id: "stylized-3d", label: "⛩️ Stylized & Anime" },
      { id: "moody-fog", label: "🌫️ Atmospheric Scenes" },
    ],
  },
  {
    id: "game-assets",
    name: "Game Assets",
    label: "Game Assets",
    description: "Low-poly and high-poly 3D models, GLTF assets, PBR textures, and interactive props",
    accent: "from-purple-500 via-pink-500 to-indigo-500",
    badgeColor: "border-purple-500/50 text-purple-300 bg-purple-500/10",
    iconName: "game",
    previews: [
      "/projects/project-13.png",
      "/projects/project-14.png",
      "/projects/project-15.png",
    ],
    subcategories: [
      { id: "all-game", label: "All Assets" },
      { id: "interactive-props", label: "🎲 Interactive Props" },
      { id: "pbr-models", label: "⚡ Sci-Fi PBR Models" },
      { id: "anatomy-sculpts", label: "🦴 Anatomical Sculpting" },
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    label: "Graphic Design",
    description: "Futuristic space branding, cyberpunk game UI / HUD layouts, and digital posters",
    accent: "from-pink-500 via-fuchsia-500 to-purple-500",
    badgeColor: "border-pink-500/50 text-pink-300 bg-pink-500/10",
    iconName: "palette",
    previews: [
      "/projects/graphic-brand.svg",
      "/projects/graphic-hud.svg",
      "/projects/graphic-poster.svg",
    ],
    subcategories: [
      { id: "all-graphics", label: "All Graphics" },
      { id: "brand-identity", label: "🎨 Space Brand Identity" },
      { id: "game-hud", label: "🛸 Sci-Fi UI / HUD Concepts" },
      { id: "promos", label: "✨ 3D Motion Graphics Posters" },
    ],
  },
] as const;

export const PROJECTS = [
  // ==========================================
  // FLAGSHIP CV PROJECTS (Mihir Mahato CV)
  // ==========================================
  {
    title: "Microservices E-Commerce Platform",
    shortDescription:
      "Distributed full-stack e-commerce system with independent Spring Boot microservices, React storefront, PostgreSQL & Docker.",
    description:
      "Designed and built an enterprise-grade full-stack e-commerce platform with independent Spring Boot microservices for the backend and a modern React + Tailwind CSS storefront. Implemented core commerce flows including product catalog, order orchestration, cart state, and authentication. Modeled the PostgreSQL schema with relational design, foreign keys, and indexing. Containerized every service and database with Docker and Docker Compose for one-command, consistent setup, and tested service-to-service communication end-to-end.",
    image: "/projects/maison-vendome.svg",
    liveLink: "https://maison-vendome-ecommerce.vercel.app",
    github: "https://github.com/MIHIR-1304/maison-vendome-ecommerce",
    link: "https://maison-vendome-ecommerce.vercel.app",
    category: "Core Engineering",
    subcategory: "Microservices & Distributed Systems",
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "PostgreSQL", "Docker", "Docker Compose", "Microservices", "REST APIs"],
    highlights: [
      "Designed and built a full-stack e-commerce platform with independent Spring Boot microservices for the backend and a React + Tailwind CSS storefront.",
      "Developed REST APIs for core commerce flows and modeled the PostgreSQL schema with relational design and indexing.",
      "Containerized every service and the database with Docker and Docker Compose for one-command, consistent setup.",
      "Tested and debugged service-to-service and frontend-to-backend integration end to end.",
    ],
  },
  {
    title: "TaskFlow – Agile Engineering & Task Platform",
    shortDescription:
      "Linear-grade agile workspace featuring Kanban Drag & Drop, Sortable List views, Sprint Velocity Analytics, Spring Boot REST API & MongoDB.",
    description:
      "Architected and engineered a production-grade multi-tier agile engineering platform featuring a decoupled Spring Boot 3.2 REST API, MongoDB document store, and a Linear/Jira-inspired frontend. Delivers interactive HTML5 drag-and-drop Kanban workflow transitions, GitHub Projects-style sortable table views, live sprint velocity burndown analytics, interactive subtask checklists, story point estimation, and an immutable audit trail. Built with full localStorage persistence, JSON sprint backup export/import, and Docker Compose multi-container orchestration.",
    image: "/projects/taskflow.svg",
    liveLink: "https://mihir-1304.github.io/TaskFlow/",
    github: "https://github.com/MIHIR-1304/TaskFlow",
    link: "https://mihir-1304.github.io/TaskFlow/",
    category: "Core Engineering",
    subcategory: "Multi-Tier Web Apps",
    tags: ["Java 17", "Spring Boot 3.2", "MongoDB", "Docker Compose", "Kanban Engine", "Sprint Analytics", "RBAC", "REST APIs"],
    highlights: [
      "Engineered an enterprise Linear-grade agile workspace with 3 views: Kanban Board, Sortable Data Table, and Velocity Analytics.",
      "Built Spring Boot 3.2 REST APIs with JWT authentication, role-based access control (RBAC), and MongoDB compound indexing.",
      "Implemented optimistic HTML5 Drag-and-Drop state transitions, interactive subtask checklists, and activity audit logging.",
      "Engineered zero-dependency client state persistence with localStorage, JSON sprint backup export/import, and Docker Compose orchestration.",
    ],
  },
  {
    title: "ExamSphere – Scalable Backend Architecture",
    shortDescription:
      "High-scale modular-monolith backend engineered on PostgreSQL, Node.js, Express.js, Redis, and OWASP security.",
    description:
      "Architected a modular-monolith backend system (Auth, Content, Quiz, Search, Progress, Notification, Admin) powered by PostgreSQL and Node.js/Express. Modeled a relational schema of 10+ entities with many-to-many relationships and planned composite and GIN indexes for sub-millisecond query performance. Designed a spaced-repetition scheduling algorithm and a content-verification state machine; authored a comprehensive technical SRS with OWASP-aligned security considerations.",
    image: "/projects/examsphere.svg",
    liveLink: "https://mihir-1304.github.io/ExamSphere/",
    github: "https://github.com/MIHIR-1304/ExamSphere",
    link: "https://mihir-1304.github.io/ExamSphere/",
    category: "Core Engineering",
    subcategory: "Modular Monolith Backend",
    tags: ["PostgreSQL", "Node.js", "Express.js", "Redis", "GIN Indexes", "Spaced Repetition", "OWASP Security", "Modular Monolith"],
    highlights: [
      "Designed a modular-monolith backend (Auth, Content, Quiz, Search, Progress, Notification, Admin) on PostgreSQL.",
      "Modeled a relational schema of 10+ entities with many-to-many relationships and planned composite and GIN indexes.",
      "Designed a spaced-repetition scheduling algorithm and a content-verification state machine; authored a technical SRS with OWASP-aligned security considerations.",
    ],
  },
  {
    title: "NOBoT – AI-Integrated Autonomous Quadruped Robot",
    shortDescription:
      "Autonomous spider quadrobot with live edge AI computer vision, OpenCV/YOLO object detection, and Raspberry Pi 5 + Arduino control.",
    description:
      "Constructed an AI-integrated autonomous spider quadrobot designed for hazardous terrain navigation and rescue operations. Integrated real-time OpenCV and YOLO object detection models with live sensor telemetry for dynamic obstacle navigation. Built a dual-microcontroller orchestration architecture linking Raspberry Pi 5 (high-level vision and inference) with Arduino (kinematics locomotion gait and servo controls), debugging hardware–software communication issues.",
    image: "/projects/project-2.jpg",
    liveLink: "https://mihir-1304.github.io/NOBoT/",
    github: "https://github.com/MIHIR-1304/NOBoT",
    link: "https://mihir-1304.github.io/NOBoT/",
    category: "Core Engineering",
    subcategory: "Autonomous Robotics & AI",
    tags: ["Python", "OpenCV", "YOLO", "Raspberry Pi 5", "Arduino", "Edge AI", "Sensor Fusion", "Robotics"],
    highlights: [
      "Integrated OpenCV/YOLO object detection with live sensor data for autonomous navigation in hazardous terrain; debugged hardware–software issues.",
      "Inverse kinematics locomotion gait for spider quadruped chassis running across Raspberry Pi 5 and Arduino.",
      "Dual-microcontroller sensor fusion architecture with real-time video telemetry stream.",
      "Designed for autonomous deployment in hazardous, search-and-rescue environments.",
    ],
  },
  {
    title: "TataNav – 3D Locator and Navigator Interface",
    shortDescription:
      "Industrial 3D spatial locator & navigator interface built for Tata Power via Python–Blender integration and JavaScript.",
    description:
      "Built an industrial 3D navigation and spatial locator interface for Tata Power, automating pathfinding logic to reduce manual lookup time for employee tracking across complex plant facilities. Integrated Python with Blender 3D for spatial geometry calculations, path optimization, and interactive front-end components in JavaScript and Tkinter.",
    image: "/projects/project-1-new.png",
    video: "/videos/tatanav.mp4",
    github: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
    link: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
    category: "Core Engineering",
    subcategory: "Industrial 3D Navigation",
    tags: ["Python", "Blender", "JavaScript", "Tkinter", "JSON", "Pathfinding", "Tata Power", "3D Visualization"],
    highlights: [
      "Built a 3D navigation interface via Python–Blender integration, automating pathfinding logic to reduce manual lookup time for employee tracking.",
      "Implemented interactive front-end interfaces for 3D visualization of technical information, focused on usability and clear presentation.",
      "Analyzed requirements with stakeholders, then debugged and iterated on the interface across development cycles at Tata Power.",
    ],
  },

  // ==========================================
  // Web Development & Interactive Systems
  // ==========================================
  {
    title: "War of Web: Space Exploration Hub",
    shortDescription:
      "Futuristic space exploration hub showcasing planetary telemetry, celestial archives & galactic animations.",
    description:
      "Futuristic space exploration hub website showcasing celestial bodies, planetary telemetry, interactive galactic archives, dynamic visual effects, and modern responsive UI. Features interactive 3D elements and immersive cosmic themes.",
    image: "/projects/war-of-web.svg",
    liveLink: "https://war-of-web.vercel.app",
    github: "https://github.com/MIHIR-1304/War_Of_Web",
    link: "https://war-of-web.vercel.app",
    category: "Web Development",
    subcategory: "Space Exploration Web",
    tags: ["Next.js", "React", "Space UI", "Tailwind CSS", "Interactive"],
    highlights: [
      "Interactive celestial archives and planetary telemetry",
      "High-performance cosmic animations & particles",
      "Futuristic Sci-Fi HUD aesthetic and responsive layout",
      "Production deployment on Vercel Edge",
    ],
  },
  {
    title: "3D Interactive Portfolio Website (MyPortfolio)",
    shortDescription:
      "Interactive 3D space-themed developer portfolio built with Next.js 14, Three.js & Framer Motion.",
    description:
      "Designed a fully responsive 3D portfolio website showcasing engineering projects, interactive 3D model viewers, skills radar, and career milestones. Integrated interactive Three.js starfields, Spline 3D canvas, smooth Framer Motion transitions, and a modern domain-filtering architecture.",
    image: "/projects/project-3.png",
    liveLink: "https://my-portfolio-xi-self-23.vercel.app",
    github: "https://github.com/MIHIR-1304/MyPortfolio",
    link: "https://my-portfolio-xi-self-23.vercel.app",
    category: "Web Development",
    subcategory: "Interactive 3D Web",
    tags: ["Next.js 14", "Three.js", "Spline 3D", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Three.js interactive starfield & particle background",
      "Hierarchical project card grid with glassmorphism UI",
      "Interactive 3D Model viewer supporting GLTF/GLB formats",
      "Vercel automated deployment and fast loading times",
    ],
  },
  {
    title: "Career Path Navigator",
    shortDescription:
      "Interactive career guidance roadmap helping learners track engineering milestones and tech specializations.",
    description:
      "Interactive roadmap and career guidance web platform designed to help students and developers plan domain mastery, explore engineering specializations (Fullstack, Backend, AI, 3D), track milestones, and visualize tech career trajectories.",
    image: "/projects/carrere-path.svg",
    liveLink: "https://carrere-path.vercel.app",
    github: "https://github.com/MIHIR-1304/carrere_path",
    link: "https://carrere-path.vercel.app",
    category: "Web Development",
    subcategory: "Roadmap & Guidance",
    tags: ["React", "TypeScript", "Career Guidance", "Vercel", "Web App"],
    highlights: [
      "Specialized tech roadmap visualization and skill trees",
      "Milestone tracking for engineering students & developers",
      "Vercel automated deployment and fast response time",
      "Modular components built with React & TypeScript",
    ],
  },

  // ==========================================
  // Backend & Data Automation Projects
  // ==========================================
  {
    title: "Advanced Excel Editor & Data Automation",
    shortDescription:
      "Web-based spreadsheet editor with custom formulas, data validation & automated Excel reporting at Tata Prashikshan.",
    description:
      "High-throughput web-based spreadsheet editor with enhanced data manipulation capabilities, custom formula evaluation, automated data validation, and instantaneous Excel (.xlsx) file generation and exports.",
    image: "/projects/Advance_excel.png",
    github: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
    link: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
    category: "Backend Projects",
    subcategory: "Data Automation",
    tags: ["Python", "Node.js", "Excel Automation", "Data Analysis", "Tata Prashikshan"],
    highlights: [
      "Formula calculation engine and live tabular grid manipulation",
      "Instant export to styled, formatted .xlsx spreadsheets",
      "Data validation rules and column schema enforcement",
      "Streamlined corporate reporting automation workflows",
    ],
  },
  {
    title: "Habit Tracker & Productivity Dashboard",
    shortDescription:
      "Interactive routine and consistency monitor to build daily habits and track productivity streaks.",
    description:
      "Lightweight, intuitive habit tracking application built to monitor daily routines, maintain streaks, and boost personal productivity with interactive progress metrics, streak counters, and local storage data persistence.",
    image: "/projects/habit-tracker.svg",
    github: "https://github.com/MIHIR-1304/Habit_Tracker",
    link: "https://github.com/MIHIR-1304/Habit_Tracker",
    category: "Backend Projects",
    subcategory: "Productivity Dashboard",
    tags: ["JavaScript", "React", "Productivity", "UI/UX", "Streak Tracker"],
    highlights: [
      "Daily streak computation and visual habit rings",
      "Local storage data persistence for offline access",
      "Habit milestone checklists and completion analytics",
      "Lightweight interactive user interface",
    ],
  },
  {
    title: "Scalable RESTful Microservices API Engine",
    shortDescription:
      "Robust backend API service engineered with Node.js, Express, JWT auth, and Swagger documentation.",
    description:
      "Robust backend API service engineered with Node.js and Express, implementing JWT auth, RBAC permissions, rate-limiting, and comprehensive Swagger documentation for distributed service architectures.",
    image: "/projects/backend-api.svg",
    liveLink: "https://mihir-1304.github.io/ExamSphere/",
    github: "https://github.com/MIHIR-1304/ExamSphere",
    link: "https://mihir-1304.github.io/ExamSphere/",
    category: "Backend Projects",
    subcategory: "REST APIs & Auth",
    tags: ["Node.js", "Express.js", "JWT", "REST API", "MongoDB"],
    highlights: [
      "RESTful microservices design with Express.js",
      "JWT token validation & granular permissions middleware",
      "Rate-limiting and sanitization guards",
      "Swagger OpenAPI documentation",
    ],
  },

  // ==========================================
  // Core Java Projects
  // ==========================================
  {
    title: "Number Intelligence Engine",
    shortDescription:
      "Menu-driven core Java computation engine for prime verification, sequences & numerical analysis.",
    description:
      "Menu-driven Java console application for algorithmic number analysis, prime verification, mathematical sequence computation (Fibonacci, Armstrong, Palindromes), and number theory evaluation with optimized complexity.",
    image: "/projects/number-intelligence.svg",
    github: "https://github.com/MIHIR-1304/number-intelligence-engine",
    link: "https://github.com/MIHIR-1304/number-intelligence-engine",
    category: "Java Projects",
    subcategory: "Desktop & Core Java",
    tags: ["Java", "Algorithms", "Core Java", "OOP", "Mathematics"],
    highlights: [
      "Optimized O(sqrt(N)) prime factorization algorithms",
      "Fibonacci, Armstrong, and Palindromic sequence evaluation",
      "Modular OOP architecture with clear class separation",
      "Interactive menu-driven console workflow",
    ],
  },
  {
    title: "Smart Banking & Transaction Management System",
    shortDescription:
      "Enterprise-grade Java desktop banking software with ACID transaction ledger and MySQL JDBC.",
    description:
      "Enterprise-grade Java desktop banking software with ACID transaction ledger, multi-user authentication, OOP design patterns, and MySQL JDBC persistence for financial accounting.",
    image: "/projects/java-banking.svg",
    github: "https://github.com/MIHIR-1304/JavaDSAJourney",
    link: "https://github.com/MIHIR-1304/JavaDSAJourney",
    category: "Java Projects",
    subcategory: "Desktop & Core Java",
    tags: ["Java", "Swing / JavaFX", "OOP", "JDBC", "MySQL"],
    highlights: [
      "ACID transaction ledger ensuring data consistency",
      "Multi-user role authentication and account management",
      "JDBC connectivity to MySQL database",
      "Clean MVC desktop architecture",
    ],
  },
  {
    title: "High-Concurrency Multi-threaded Chat Server",
    shortDescription:
      "Networked communication system using Java Sockets, thread pooling & packet serialization.",
    description:
      "High-performance networked communication system using Java Sockets, thread pooling, custom packet serialization, and multi-client broadcast synchronization for distributed messaging.",
    image: "/projects/java-chat.svg",
    github: "https://github.com/MIHIR-1304/JavaDSAJourney",
    link: "https://github.com/MIHIR-1304/JavaDSAJourney",
    category: "Java Projects",
    subcategory: "Networking",
    tags: ["Java", "Multithreading", "Socket Programming", "TCP/IP"],
    highlights: [
      "TCP/IP socket network programming",
      "Thread pool executor managing concurrent client channels",
      "Broadcast messaging and room synchronization",
      "Custom byte packet serialization",
    ],
  },

  // ==========================================
  // SQL & Relational Databases
  // ==========================================
  {
    title: "CareHealth — Hospital DBMS & Relational SQL Studio",
    shortDescription:
      "Enterprise healthcare relational database normalized to 3NF with live SQL query studio, 7 tables, visual ERD & clinical analytics.",
    description:
      "Architected a production-grade relational healthcare database normalized strictly to Third Normal Form (3NF) across 7 entities (patients, doctors, departments, rooms, admissions, medical records, billing). Includes a clean, professional web-based SQL Query Studio with sub-millisecond execution times, pre-loaded complex analytical queries (multi-table JOINs, GROUP BY, HAVING, window aggregates), a live table data browser, an interactive Entity-Relationship Diagram (ERD), and B-Tree composite indexing strategies.",
    image: "/projects/sql-hospital.svg",
    liveLink: "https://mihir-1304.github.io/Hospital-DBMS-SQL/",
    github: "https://github.com/MIHIR-1304/Hospital-DBMS-SQL",
    link: "https://mihir-1304.github.io/Hospital-DBMS-SQL/",
    category: "SQL Projects",
    subcategory: "Hospital DBMS (3NF)",
    tags: ["PostgreSQL 16", "SQL", "3NF Normalization", "B-Tree Indexes", "Relational ERD", "Complex JOINs", "Window Functions"],
    highlights: [
      "Strict Third Normal Form (3NF) zero-redundancy schema across 7 relational tables with foreign key cascade guards.",
      "In-browser interactive SQL Query Console executing multi-table analytical joins with execution time metrics.",
      "Interactive Entity-Relationship Diagram (ERD) visualizing primary keys, foreign constraints, and 1:N cardinality.",
      "Optimized B-tree composite indexing strategies (idx_patients_name, idx_admissions_patient, idx_rooms_occupied).",
    ],
  },
  {
    title: "E-Commerce High-Volume Data Analytics Engine",
    shortDescription:
      "Advanced analytical SQL query pipeline leveraging window functions & partition optimization.",
    description:
      "Advanced analytical SQL queries utilizing window functions, subquery partitioning, composite indexing, and execution plan optimization for high transaction volume retail environments.",
    image: "/projects/sql-ecommerce.svg",
    liveLink: "https://mihir-1304.github.io/Hospital-DBMS-SQL/",
    github: "https://github.com/MIHIR-1304/Hospital-DBMS-SQL",
    link: "https://mihir-1304.github.io/Hospital-DBMS-SQL/",
    category: "SQL Projects",
    subcategory: "E-Commerce Analytics",
    tags: ["SQL", "Query Optimization", "Window Functions", "Analytics", "PostgreSQL"],
    highlights: [
      "Complex window functions (RANK, DENSE_RANK, NTILE, LAG/LEAD)",
      "Customer lifetime value (CLV) & cohort retention queries",
      "EXPLAIN ANALYZE index scan tuning reducing query time by 80%",
      "Partitioning strategy across monthly transaction tables",
    ],
  },

  // ==========================================
  // 3D Product Animations & Creative Works
  // ==========================================
  {
    title: "iPhone 12 Product Animation",
    shortDescription:
      "3D product animation of the iPhone 12 made in Blender with dynamic lighting and camera moves.",
    description:
      "A 3D product animation of the iPhone 12 made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-4.png",
    video: "/videos/iphone-12-product-animation.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Commercial Showcase",
    tags: ["Blender", "Product Animation", "Hard Surface", "Lighting", "Cycles"],
    highlights: [
      "Photorealistic glass and brushed aluminum PBR materials",
      "Smooth camera orbits and dynamic depth-of-field focus pulls",
      "Cycles multi-pass rendering and compositing",
      "Commercial-grade tech advertisement presentation",
    ],
  },
  {
    title: "Nivea Commercial Animation",
    shortDescription:
      "Fluid simulation and cosmetic packaging animation rendered in Blender.",
    description:
      "A 3D product animation of the Nivea product made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-5.png",
    video: "/videos/Nivea.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Fluid & CGI",
    tags: ["Blender", "Fluid Simulation", "Motion Design", "Commercial", "Shading"],
    highlights: [
      "Viscous fluid splash physics and collision domains",
      "Subsurface scattering skin lotion material shaders",
      "Studio 3-point lighting setup with soft bounce cards",
      "Color grading optimized for commercial broadcast",
    ],
  },
  {
    title: "AirPods Pro Animation",
    shortDescription:
      "Exploded view and magnetic case mechanical animation in Blender.",
    description:
      "A 3D AirPods animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-8.png",
    video: "/videos/Airpods.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Tech & Audio",
    tags: ["Blender", "Exploded View", "Materials", "Commercial", "Lighting"],
    highlights: [
      "Precise mechanical exploded-view disassembly sequencing",
      "Glossy plastic and acoustic mesh micro-textures",
      "Magnetic latch snap and hinge animation rigs",
      "Apple aesthetic minimalist studio backdrop",
    ],
  },
  {
    title: "Spectacles Ad",
    shortDescription:
      "Luxury eyewear optical refraction and studio lighting showcase in Blender.",
    description:
      "A 3D spectacles ad made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-12.png",
    video: "/videos/Specs.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Product Design",
    subcategory: "Luxury Goods",
    tags: ["Blender", "Optics Refraction", "Motion Design", "Lighting", "Glass Shader"],
    highlights: [
      "Dielectric glass dispersion and caustic calculations",
      "Acetate frame tortoiseshell procedural texturing",
      "Macro lens close-ups on precision hinge mechanics",
      "Cinematic motion blur and slow-motion rotations",
    ],
  },

  // ==========================================
  // Environments & Interior Design
  // ==========================================
  {
    title: "Cinematic Night City Scene",
    shortDescription:
      "Cyberpunk urban night environment with volumetric fog, neon signs and reflections.",
    description:
      "A 3D cinematic night city scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-7.png",
    video: "/videos/Cinematic.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Cyberpunk Night City",
    tags: ["Blender", "Cyberpunk", "Lighting", "Environment", "Volumetrics"],
    highlights: [
      "Volumetric mist and neon light emission bleeding",
      "Rain puddle PBR roughness mapping and screen-space reflections",
      "Modular architectural kitbashing for city skyline",
      "Cinematic color grading with cool blues and vibrant magentas",
    ],
  },
  {
    title: "Bullet Train Cinematic Animation",
    shortDescription:
      "High-speed shinkansen train animation passing futuristic rail infrastructure.",
    description:
      "A 3D bullet train cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-9.png",
    video: "/videos/Bullet.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Cinematic Motion",
    tags: ["Blender", "Motion Blur", "Cinematic", "Environment", "Camera Rig"],
    highlights: [
      "Curve-based train tracking with realistic suspension sway",
      "Subtle optical camera shake and speed blur simulation",
      "Overhead gantry and rail ballast procedural scattering",
      "Sunset golden hour atmospheric lighting",
    ],
  },
  {
    title: "Anime Aesthetic Scene",
    shortDescription:
      "Stylized cel-shaded Japanese interior room scene with warm natural lighting.",
    description:
      "A 3D anime scene made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-6.png",
    video: "/videos/Anime.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Stylized & Anime",
    tags: ["Blender", "Cel Shading", "Stylized 3D", "Interior & Lighting"],
    highlights: [
      "Custom NPR (non-photorealistic) toon outline shader nodes",
      "Cozy room prop dressing (desk, tatami, window breeze)",
      "Volumetric sunbeams with dust particle motes",
      "Makoto Shinkai-inspired vibrant color palette",
    ],
  },
  {
    title: "Horror Cinematic",
    shortDescription:
      "Eerie atmospheric horror hallway with flickering lighting and spatial audio cues.",
    description:
      "A 3D horror cinematic animation made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-10.png",
    video: "/videos/Horror.mp4",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Interior Design",
    subcategory: "Atmospheric Scenes",
    tags: ["Blender", "Atmospheric", "Volumetrics", "Environment"],
    highlights: [
      "Stochastic fluorescent light flickering drivers",
      "Distressed peeling wallpaper and grime decal projections",
      "Heavy shadow falloff and claustrophobic framing",
      "Tense pacing with slow, deliberate camera dolly",
    ],
  },

  // ==========================================
  // Game Assets: 3D Models & Interactive GLTF
  // ==========================================
  {
    title: "Interactive Rubix Cube",
    shortDescription:
      "Real-time 3D interactive Rubik's Cube with orbital controls and PBR textures.",
    description:
      "A 3D interactive rubix cube made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-13.png",
    model: "/models/rubix.glb",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Game Assets",
    subcategory: "Interactive Props",
    tags: ["Blender", "Interactive 3D", "Game Asset", "GLTF", "Three.js"],
    highlights: [
      "Interactive 3D OrbitControls directly in the browser",
      "GLTF embedded PBR textures with metallic roughness",
      "Subdivision surface beveling for realistic chamfered edges",
      "Optimized polygon count for 60fps web rendering",
    ],
  },
  {
    title: "Sci-Fi Pokeball",
    shortDescription:
      "High-poly Pokéball with metallic paint shader and emissive center ring.",
    description:
      "A 3D pokeball model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-14.png",
    model: "/models/pokeball.glb",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Game Assets",
    subcategory: "Sci-Fi PBR Models",
    tags: ["Blender", "3D Model", "PBR Texture", "GLTF", "Realtime Asset"],
    highlights: [
      "Multi-material PBR texture set (glossy red, white, anodized ring)",
      "Emissive core LED ring with bloom simulation",
      "Optimized GLTF/GLB web asset pipeline",
      "Interactive 360-degree rotation view",
    ],
  },
  {
    title: "Skeleton Hand Anatomy",
    shortDescription:
      "Medically accurate digital sculpt of human hand skeletal structure.",
    description:
      "A 3D skeleton hand anatomy model made in Blender, focusing on realistic materials, dynamic lighting, and smooth motion to create a modern tech-style showcase.",
    image: "/projects/project-15.png",
    model: "/models/skeleton.glb",
    github: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    link: "https://github.com/MIHIR-1304/-blender-3D-creative-works",
    category: "Game Assets",
    subcategory: "Anatomical Sculpting",
    tags: ["Blender", "Sculpting", "Anatomy", "GLTF", "Subdivision"],
    highlights: [
      "Anatomically correct carpals, metacarpals, and phalanges",
      "High-res multiresolution digital sculpting in Blender",
      "Subsurface bone mineral shader with organic roughness",
      "Bake down to low-poly game mesh with normal maps",
    ],
  },

  // ==========================================
  // Graphic Design
  // ==========================================
  {
    title: "Futuristic Space & Brand Identity Suite",
    shortDescription:
      "Complete brand design system featuring futuristic vector logos and dark-space visual design.",
    description:
      "Complete brand design system featuring futuristic vector logos, bespoke typography guides, and dark-space visual design elements crafted in Photoshop & Canva.",
    image: "/projects/graphic-brand.svg",
    liveLink: "https://mihir-1304.github.io/3d-Portfolio/Website",
    github: "https://github.com/MIHIR-1304/3d-Portfolio",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Space Brand Identity",
    tags: ["Photoshop", "Canva", "Brand Identity", "Vector Design"],
    highlights: [
      "Custom vector logomarks and galactic branding symbols",
      "Typography pairing guides and color palettes",
      "Social media banner templates and vector assets",
      "Dark mode UI aesthetic guidelines",
    ],
  },
  {
    title: "Sci-Fi Game UI / HUD Concept System",
    shortDescription:
      "Interactive cyberpunk HUD layout, tactical minimap designs and modular game interface assets.",
    description:
      "Interactive cyberpunk HUD layout, tactical minimap designs, energy bar gauges, and modular game interface assets created for immersive 3D titles.",
    image: "/projects/graphic-hud.svg",
    liveLink: "https://mihir-1304.github.io/3d-Portfolio/Website",
    github: "https://github.com/MIHIR-1304/3d-Portfolio",
    link: "https://mihir-1304.github.io/3d-Portfolio/Website",
    category: "Graphic Design",
    subcategory: "Sci-Fi UI / HUD Concepts",
    tags: ["UI/UX", "Photoshop", "Game HUD", "Concept Art"],
    highlights: [
      "Futuristic tactical radar and minimap layouts",
      "Energy shield gauges and weapon telemetry widgets",
      "Modular design system ready for Unity & Unreal Engine integration",
      "High-contrast cyberpunk color schemes",
    ],
  },
] as const;

export const EXPERIENCES = [
  {
    role: "Frontend Developer & Graphic Designer",
    company: "Adayrise SARL",
    duration: "March 2026 - Present",
    project: "Client Frontend Engineering & Digital Design",
    description:
      "Developed responsive, reusable front-end components in HTML, CSS and JavaScript from client and design requirements, delivering features independently. Debugged layout and cross-browser issues and iterated on implementations based on stakeholder feedback. Collaborated remotely with clients and designers to refine requirements and improve usability.",
    certificate: "/projects/tata_prashikhsan.png",
    projectImage: "/projects/war-of-web.svg",
    projectLink: "https://github.com/MIHIR-1304/War_Of_Web",
  },
  {
    role: "Frontend Developer & 3D Designer",
    company: "Tata Power",
    duration: "June 2025 - July 2025",
    project: "TataNav: 3D Locator and Navigator Interface",
    description:
      "Implemented interactive front-end interfaces for 3D visualization of technical information, focused on usability and clear presentation. Analyzed requirements with stakeholders, then debugged and iterated on the interface across development cycles. Automated pathfinding logic to reduce manual lookup time for employee tracking.",
    certificate: "/projects/tata_Power.jpg",
    projectImage: "/projects/project-1-new.png",
    projectVideo: "/videos/tatanav.mp4",
    projectLink: "https://github.com/MIHIR-1304/TataNav-3D-Locator-and-Navigator-Interface-Tata-Power-",
  },
  {
    role: "Project Intern",
    company: "Tata Prashikshan",
    duration: "August 2025 - Sep 2025",
    project: "Advanced Excel Editor & Data Automation",
    description:
      "Developed an advanced Excel editor with enhanced data manipulation capabilities. Implemented custom formulas, data validation, and automation scripts to streamline workflows. Delivered a user-friendly interface for complex data management tasks.",
    certificate: "/projects/tata_prashikhsan.png",
    projectImage: "/projects/Advance_excel.png",
    projectLink: "https://github.com/MIHIR-1304/Advanced_Excel_Editor",
  },
  {
    role: "Robotics / AI Developer",
    company: "College Robotics Lab",
    duration: "Jan 2024 - Dec 2024",
    project: "NOBoT – AI-Integrated Autonomous Quadruped Robot",
    description:
      "Built an AI-driven quadrobot for hazardous terrain navigation and rescue scenarios. Integrated real-time OpenCV and YOLO object detection models with live sensor telemetry for autonomous navigation in hazardous terrain. Debugged hardware–software integration across Raspberry Pi 5 and Arduino.",
    certificate: "/projects/tata_prashikhsan.png",
    projectImage: "/projects/project-2.jpg",
    projectLink: "https://github.com/MIHIR-1304/NOBoT",
  },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Chaibasa Engineering College (Jharkhand University of Technology)",
    duration: "2022 - 2026",
    score: "CGPA: 8.13",
    description:
      "Strong fundamentals in Java, Python, C++, SQL, Data Structures & Algorithms, Object-Oriented Programming, and System Design. Built full-stack and microservices applications with Spring Boot, React, PostgreSQL and Docker.",
  },
  {
    degree: "Intermediate (12th Grade)",
    institution: "Central Karimia +2 High School, Sakchi",
    duration: "2019 - 2021",
    score: "Percentage: 72.8%",
    description:
      "Studied Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in logical reasoning and analytical problem-solving.",
  },
  {
    degree: "Matriculation (10th Grade)",
    institution: "High School Dhatkidih",
    duration: "2018 - 2019",
    score: "Percentage: 83.6%",
    description:
      "Completed secondary education with distinction. Volunteered in science fairs, Interschool GK & Mathematics Olympiads.",
  },
] as const;

export const LEADERSHIP = [
  {
    title: "Vice President, Techspire",
    description: "Led technical events, workshops and hackathons for 200+ students; fostered an inclusive, collaborative team culture.",
  },
  {
    title: "Student Placement Representative",
    description: "Coordinated placement activities between students and recruiters.",
  },
  {
    title: "Core Committee Member, Navkriti",
    description: "Supported technical festival event planning.",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/MIHIR-1304",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/channels/igris_the_bloodred_13",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/blender_buddy_13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/mihir-mahato-btech",
      },
    ],
  },
  {
    title: "Contact & Portfolio",
    data: [
      {
        name: "GitHub Profile",
        icon: RxGithubLogo,
        link: "https://github.com/MIHIR-1304",
      },
      {
        name: "Email: mihirmahato1304@gmail.com",
        icon: null,
        link: "mailto:mihirmahato1304@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Education",
    link: "#education",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/MIHIR-1304",
};
