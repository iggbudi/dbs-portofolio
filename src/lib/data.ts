export const profile = {
  name: "Dwi Budi Santoso",
  role: "Full-Stack Developer & AI Engineer",
  location: "Indonesia",
  email: "nayantaka@gmail.com",
  github: "https://github.com/iggbudi",
  githubLabel: "github.com/iggbudi",
  x: "https://x.com/nayantaka",
  xLabel: "x.com/nayantaka",
  summary:
    "Full-stack developer specializing in PHP, TypeScript/Node.js, and AI/multi-agent systems. I have built and operated 40+ production applications on self-managed VPS infrastructure, spanning admin systems, LMS, WhatsApp/Telegram/Slack bots, DeFi tools, AI-powered apps, and academic journal platforms. Comfortable across the full cycle: architecture, coding, deployment, and server maintenance.",
  pitch:
    "I build software end to end, and keep it running in production.",
  subpitch:
    "From zero to production — architecture, code, deploy, and operate.",
};

export const stats = [
  { value: "40+", label: "production applications" },
  { value: "30+", label: "live domains", context: "education, gov, fintech, AI" },
  { value: "1", label: "self-managed VPS" },
];

export type FeaturedProject = {
  name: string;
  url: string;
  category: string;
};

export const featuredProjects: FeaturedProject[] = [
  { name: "Biro Jurnal", url: "https://birojurnal.com", category: "Academic Journals" },
  { name: "IBRAA", url: "https://ibraa.or.id", category: "Organization" },
  { name: "SafeSphere", url: "https://safesphere.my.id", category: "Anti-Bullying App" },
];



export type Category = {
  slug: string;
  label: string;
  blurb: string;
};

export const categories: Category[] = [
  { slug: "institutional", label: "Institutional & Admin", blurb: "QA, LMS, mail, and admin systems" },
  { slug: "ai", label: "AI & Multi-Agent", blurb: "LLM apps and agent orchestration" },
  { slug: "bots", label: "Messaging & Bots", blurb: "WhatsApp, Telegram, Slack" },
  { slug: "finance", label: "Finance & Dashboards", blurb: "Crypto charts, invoices, auctions" },
  { slug: "ml", label: "ML & Research", blurb: "Prediction models and landing pages" },
  { slug: "publishing", label: "Publishing & SEO", blurb: "Academic journals and content sites" },
  { slug: "social", label: "Social Impact", blurb: "Reporting, community, commerce" },
  { slug: "experiments", label: "Experiments", blurb: "Edge runtimes and zero-dep apps" },
];

export const categoryCounts: Record<string, number> = {
  institutional: 10,
  ai: 8,
  bots: 4,
  finance: 4,
  ml: 2,
  publishing: 3,
  social: 3,
  experiments: 2,
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  category: string;
};

export const projects: Project[] = [
  // Institutional & Admin
  {
    name: "SIMPMU DPMP2",
    description: "Quality assurance inspection system for institutional audits.",
    stack: ["PHP", "MySQL", "Bootstrap", "Playwright"],
    category: "institutional",
  },
  {
    name: "LK UKMs",
    description: "Proposal and report management for student organization administration.",
    stack: ["PHP", "MySQL", "Composer", "TCPDF", "PWA"],
    category: "institutional",
  },
  {
    name: "Ruang Belajar Terbuka",
    description: "LMS and e-learning platform with Google OAuth and AI assistance.",
    stack: ["PHP", "MySQL", "Google OAuth", "OpenAI API", "Quill"],
    category: "institutional",
  },
  {
    name: "AIDIS Disposisi Surat",
    description: "Mail disposition and routing system for institutional correspondence.",
    stack: ["PHP", "Composer"],
    category: "institutional",
  },
  {
    name: "Al-Barokah",
    description: "Mosque website with content and administration management.",
    stack: ["PHP", "Composer"],
    category: "institutional",
  },
  {
    name: "SIMPEL-U",
    description: "General-purpose institutional web application.",
    stack: ["PHP"],
    category: "institutional",
  },
  {
    name: "SHM My ID",
    description: "Land certificate (SHM) management platform.",
    stack: ["PHP", "MySQL", "MariaDB"],
    category: "institutional",
  },
  {
    name: "IBRAA",
    description: "Organization web application hosted at ibraa.or.id.",
    stack: ["PHP"],
    category: "institutional",
  },
  {
    name: "Biro Jurnal",
    description: "Academic journal portal hosted at birojurnal.com.",
    stack: ["PHP"],
    category: "institutional",
  },
  {
    name: "Node PJDigital",
    description: "OJS-style journal system hosted at node.pjdigital.top.",
    stack: ["PHP", "OJS"],
    category: "institutional",
  },

  // AI & Multi-Agent
  {
    name: "Slack Multi-Agent Bridge",
    description: "Multi-agent orchestration layer coordinated through Slack.",
    stack: ["TypeScript", "Express", "SQLite", "Pi SDK"],
    category: "ai",
  },
  {
    name: "X Creator Agent",
    description: "AI writing tool for content creators.",
    stack: ["Next.js", "TypeScript", "Prisma", "Pi Agent"],
    category: "ai",
  },
  {
    name: "Pi Meteora",
    description: "DeFi multi-agent decision layer for liquidity pool strategy.",
    stack: ["TypeScript", "Solana", "Meteora", "Jupiter"],
    category: "ai",
  },
  {
    name: "SocAI",
    description: "Autonomous AI content automation pipeline.",
    stack: ["Node.js", "Autonomous AI"],
    category: "ai",
  },
  {
    name: "VibePlan AI",
    description: "AI-assisted planning application.",
    stack: ["Next.js", "Laravel"],
    category: "ai",
  },
  {
    name: "AI Study Buddy",
    description: "AI learning assistant powered by fast inference.",
    stack: ["Laravel", "MongoDB", "Groq API"],
    category: "ai",
  },
  {
    name: "Quizify SocAI",
    description: "Quiz and learning application with AI-generated content.",
    stack: ["Laravel", "PHP", "Vite"],
    category: "ai",
  },
  {
    name: "EduGuide SocAI",
    description: "Education guidance application with split frontend and backend.",
    stack: ["Frontend", "Backend"],
    category: "ai",
  },

  // Messaging & Bots
  {
    name: "WA Dwibudi Multi-Device",
    description: "WhatsApp gateway supporting multi-device sessions.",
    stack: ["Node.js", "Express", "Baileys", "MariaDB"],
    category: "bots",
  },
  {
    name: "SIMPEL-U Telegram Bot",
    description: "Telegram bot interfacing with the SIMPEL-U platform.",
    stack: ["Node.js", "TypeScript", "Python"],
    category: "bots",
  },
  {
    name: "Cmaestro BengkelBot",
    description: "Workshop bot and web service.",
    stack: ["Node.js"],
    category: "bots",
  },
  {
    name: "BotJB Nanariset",
    description: "Bot and web utility tool.",
    stack: ["Static", "PHP"],
    category: "bots",
  },

  // Finance & Dashboards
  {
    name: "Lelangu Bitcoin Chart",
    description: "Cryptocurrency chart dashboard with live exchange data.",
    stack: ["HTML", "CSS", "JS", "Tokocrypto API"],
    category: "finance",
  },
  {
    name: "Dompet Bitget",
    description: "Crypto wallet and balance dashboard.",
    stack: ["Node.js", "Fullstack"],
    category: "finance",
  },
  {
    name: "CLAW Invoice",
    description: "Invoice workspace with an API proxy layer.",
    stack: ["Static", "PHP", "API Proxy"],
    category: "finance",
  },
  {
    name: "SJM Lelangu",
    description: "Auction platform built in native PHP.",
    stack: ["PHP", "Native"],
    category: "finance",
  },

  // ML & Research
  {
    name: "Fetal PJD",
    description: "Pregnancy risk prediction model for maternal and fetal outcomes.",
    stack: ["Python", "Flask", "scikit-learn", "SHAP", "Gunicorn"],
    category: "ml",
  },
  {
    name: "Nana Research",
    description: "Research landing page with a URL shortener.",
    stack: ["PHP", "Tailwind CDN", "JSON Storage"],
    category: "ml",
  },

  // Publishing & SEO
  {
    name: "EclipseTrack",
    description: "SEO content site with search console integration.",
    stack: ["PHP", "Supabase", "Google Search Console"],
    category: "publishing",
  },
  {
    name: "Brainboard SocAI",
    description: "Laravel web application with a Vite build pipeline.",
    stack: ["Laravel", "PHP", "Composer", "Vite"],
    category: "publishing",
  },
  {
    name: "SHM Publisher Network",
    description: "Six academic journals: DIEF, JOGASTO, JOHMPE, JOISER, JOSCEX, JOSRE.",
    stack: ["PHP", "SHM Platform"],
    category: "publishing",
  },

  // Social Impact
  {
    name: "SafeSphere",
    description: "Anonymous anti-bullying reporting application.",
    stack: ["Static", "Node.js", "Express", "SQLite"],
    category: "social",
  },
  {
    name: "Arisan PKK",
    description: "Community savings group (arisan) activity app.",
    stack: ["Vite", "TypeScript", "Node Runtime"],
    category: "social",
  },
  {
    name: "Kausar Leather",
    description: "Leather commerce landing page and admin.",
    stack: ["PHP", "Native", "MySQL"],
    category: "social",
  },

  // Experiments
  {
    name: "Toko Curhat",
    description: "Anonymous venting app with zero dependencies on Deno KV.",
    stack: ["Deno", "Deno KV", "Zero Dependency"],
    category: "experiments",
  },
  {
    name: "PLK App",
    description: "Community activity PWA on an edge database.",
    stack: ["Vite", "TypeScript", "Turso", "libSQL"],
    category: "experiments",
  },
];

export type SkillGroup = {
  title: string;
  items: { name: string; level?: string; note?: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & Languages",
    items: [
      { name: "PHP 8.x", level: "Expert", note: "Native, Composer" },
      { name: "TypeScript / JavaScript", level: "Expert", note: "Node.js 22+" },
      { name: "Python", level: "Advanced", note: "Flask, scikit-learn" },
      { name: "Deno", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      { name: "Next.js / React", level: "Advanced" },
      { name: "Tailwind / Bootstrap", level: "Expert" },
      { name: "Vite / PWA", level: "Advanced" },
      { name: "Vanilla HTML / CSS / JS", level: "Expert" },
    ],
  },
  {
    title: "Database & Storage",
    items: [
      { name: "MySQL / MariaDB", note: "Primary RDBMS" },
      { name: "SQLite", note: "Lightweight apps" },
      { name: "Supabase", note: "BaaS, real-time" },
      { name: "Turso / libSQL", note: "Edge database" },
      { name: "MongoDB", note: "Document store" },
      { name: "Deno KV", note: "Key-value store" },
    ],
  },
  {
    title: "AI & Multi-Agent",
    items: [
      { name: "OpenAI / Groq API", note: "LLM integration" },
      { name: "Pi SDK / Coding Agent", note: "Multi-agent orchestration" },
      { name: "scikit-learn / SHAP", note: "ML prediction models" },
      { name: "Multi-agent architecture", note: "Slack, WhatsApp, autonomous" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      { name: "VPS (Ubuntu)", note: "Server administration" },
      { name: "Apache / Nginx", note: "Web server & reverse proxy" },
      { name: "systemd / Gunicorn", note: "Process management" },
      { name: "Git / GitHub", note: "Version control & CI" },
      { name: "SSL / Certbot", note: "Security & HTTPS" },
      { name: "Playwright", note: "E2E testing" },
    ],
  },
  {
    title: "Messaging & Bots",
    items: [
      { name: "WhatsApp", note: "Baileys (Node.js)" },
      { name: "Telegram", note: "Node.js / Python" },
      { name: "Slack", note: "Slack API + Pi Agent" },
    ],
  },
  {
    title: "Blockchain & Web3",
    items: [
      { name: "Solana / web3.js", note: "DeFi interactions" },
      { name: "Meteora DLMM", note: "Liquidity pools" },
      { name: "Jupiter Aggregator", note: "Token swaps" },
      { name: "Dexscreener API", note: "Market data" },
    ],
  },
];

export const infrastructure = [
  { key: "server", label: "Server", value: "VPS · Ubuntu · Apache/Nginx reverse proxy" },
  { key: "domains", label: "Domains", value: "30+ production (*.my.id, *.pjdigital.top, *.shmpublisher.com)" },
  { key: "tls", label: "TLS", value: "Certbot · HTTPS across all production sites" },
  { key: "delivery", label: "Delivery", value: "Git-based deployment" },
  { key: "process", label: "Process", value: "systemd · Gunicorn" },
  { key: "testing", label: "Testing", value: "Playwright E2E" },
];

export const softSkills = [
  {
    lead: "Problem solver",
    detail: "Builds end-to-end solutions from idea to production.",
  },
  {
    lead: "Fast learner",
    detail: "Quick to adopt new stacks: Deno, Next.js, Solana, and more.",
  },
  {
    lead: "Self-motivated",
    detail: "Independently manages 40+ projects on a personal VPS.",
  },
  {
    lead: "Systematic",
    detail: "Structured documentation in an Obsidian vault with templates and maps of content.",
  },
];

export const learning = [
  "Self-taught developer focused on practical, project-based learning.",
  "Active user of AI coding assistants for productivity.",
  "Currently exploring multi-agent AI, DeFi and blockchain, and machine learning.",
];
