const projects = [
  {
    title: "ZAP Lang",
    category: "Developer tools",
    short: "ZAP",
    image: "assets/projects/zap-lang.svg",
    role: "Creator & Lead Engineer",
    period: "2023 — Present",
    desc: "A fast, expressive programming language and developer tool with a Rust runtime, dynamic typing and a self-hosting compiler toolchain.",
    metrics: ["Self-hosting compiler", "Rust runtime", "VS Code extension"],
    stack: ["Rust", "Compiler", "CLI", "TypeScript"],
    tags: ["Rust", "Compiler", "Developer tools"],
    color: "#352124",
    live: "https://zap-lang.hidecard1500.workers.dev/",
    source: "https://github.com/hidecard/zap",
    proof: "https://marketplace.visualstudio.com/items?itemName=ArkarYan.zap-language-support",
    status: "Active",
  },
  {
    title: "CortexEnv",
    category: "Security / AI",
    short: "CORTEX",
    image: "assets/projects/cortexenv.svg",
    role: "Creator & Lead Engineer",
    period: "2024 — Present",
    desc: "A secure execution sandbox and Rust workspace for AI-generated code featuring Wasmtime WASM isolation and resource limits.",
    metrics: ["Wasmtime sandboxing", "CPU & memory limits", "AI-code safe execution"],
    stack: ["Rust", "Wasmtime", "WebAssembly", "Security"],
    tags: ["Rust", "Wasmtime", "Security"],
    color: "#1e2e38",
    source: "https://github.com/hidecard/CortexEnv",
    status: "Open source",
  },
  {
    title: "YBS AI",
    category: "AI / Product",
    short: "YBS",
    image: "assets/projects/ybs-ai.svg",
    role: "Founder & Lead Developer",
    period: "2023 — Present",
    desc: "An intelligent bus route guide for Yangon with offline functionality, NFC card reading, BFS routing and Burmese voice alerts.",
    metrics: ["Offline maps", "NFC card reading", "Burmese voice TTS"],
    stack: ["Flutter", "Dart", "Gemini AI", "SQLite"],
    tags: ["Flutter", "Dart", "Gemini AI"],
    color: "#403318",
    live: "https://play.google.com/store/apps/details?id=net.arkaryan.ybs_ai",
    source: "https://github.com/hidecard/yangon-ybs-guide",
    sourceLabel: "Route data",
    extraLinks: [{ label: "App source", url: "https://github.com/hidecard/YBS-AI-App" }],
    status: "Play Store",
  },
  {
    title: "WeCare",
    category: "Social / Web",
    short: "CARE",
    image: "assets/projects/wecare.svg",
    role: "Full-Stack Developer",
    period: "2022 — 2023",
    desc: "A charitable web application built for supporting underprivileged street elders in Myanmar with transparent financial tracking.",
    metrics: ["Transparent donations", "Elder profiles", "Myanmar-based"],
    stack: ["Laravel", "React", "MySQL", "Tailwind"],
    tags: ["Laravel", "React", "MySQL"],
    color: "#24362b",
    live: "https://wecare.spacetikapp.com/",
    source: "https://github.com/hidecard/WeCare_MM",
    status: "Launched",
  },
  {
    title: "SmartZay",
    category: "E-Commerce",
    short: "ZAY",
    image: "assets/projects/smartzay.svg",
    role: "Full-Stack Developer",
    period: "2022 — 2023",
    desc: "A SaaS e-commerce marketplace platform for sellers and buyers featuring custom product attributes, POS integration and P2P chat.",
    metrics: ["Seller & buyer dashboards", "POS integration", "P2P chat"],
    stack: ["Laravel", "Inertia.js", "MySQL", "Vue"],
    tags: ["Laravel", "Inertia.js", "MySQL"],
    color: "#38281d",
    live: "https://easyzaymm.com/",
    status: "Launched",
  },
  {
    title: "MM Match",
    category: "Bot / Platform",
    short: "MM",
    image: "assets/projects/mm-match.svg",
    role: "Creator & Backend Engineer",
    period: "2022 — Present",
    desc: "A Telegram dating bot with swipe functionality, built for reliable scale and a playful user experience.",
    metrics: ["Telegram bot API", "Swipe matching", "Profile chat"],
    stack: ["Node.js", "Telegram", "Turso", "SQLite"],
    tags: ["Node.js", "Telegram", "Turso"],
    color: "#3b1d2a",
    live: "https://t.me/mmcupid_bot",
    source: "https://github.com/hidecard/mm-match",
    status: "Active",
  },
  {
    title: "MM Career AI",
    category: "AI / Product",
    short: "CAREER",
    image: "assets/projects/mm-career-ai.svg",
    role: "Founder & AI Engineer",
    period: "2024 — Present",
    desc: "A career guidance platform for Myanmar professionals with skill assessment, job matching and learning roadmaps.",
    metrics: ["Skill assessment", "AI job matching", "Learning roadmaps"],
    stack: ["TypeScript", "AI", "Vite", "Tailwind"],
    tags: ["TypeScript", "AI", "Vite"],
    color: "#25362f",
    live: "https://mm-career-ai.vercel.app/",
    source: "https://github.com/hidecard/mm-career-ai",
    caseStudy: "/projects/mm-career-ai/",
    status: "Beta",
  },
  {
    title: "Zap VS Code Ext",
    category: "Developer tools",
    short: "ZAP-EX",
    image: "assets/projects/zap-vscode-ext.svg",
    role: "Creator & Maintainer",
    period: "2023 — Present",
    desc: "Official Visual Studio Code syntax highlighting and language extension for the ZAP programming language.",
    metrics: ["Syntax highlighting", "Language features", "VS Code marketplace"],
    stack: ["TypeScript", "VS Code API", "tmLanguage"],
    tags: ["TypeScript", "VS Code", "Extension"],
    color: "#301c24",
    live: "https://marketplace.visualstudio.com/items?itemName=ArkarYan.zap-language-support",
    source: "https://github.com/hidecard/zap-vscode-extension",
    status: "Published",
  },
  {
    title: "Code Notes Manager",
    category: "Utility",
    short: "NOTES",
    image: "assets/projects/code-notes-manager.svg",
    role: "Creator & Maintainer",
    period: "2023 — Present",
    desc: "A developer-focused VS Code extension for organizing code snippets, learning notes and documentation.",
    metrics: ["Snippet manager", "Note linking", "VS Code extension"],
    stack: ["TypeScript", "VS Code API"],
    tags: ["TypeScript", "VS Code", "Productivity"],
    color: "#1c2a38",
    live: "",
    status: "Published",
  },
  {
    title: "OneKit Library",
    category: "Library",
    short: "ONE",
    image: "assets/projects/onekit-library.svg",
    role: "Creator & Maintainer",
    period: "2022 — Present",
    desc: "A lightweight JavaScript library published on npm for DOM manipulation, animation, reactive state and routing.",
    metrics: ["npm package", "ES modules", "Reactive state"],
    stack: ["JavaScript", "ES Modules", "DOM"],
    tags: ["JavaScript", "ES Modules", "Library"],
    color: "#49371c",
    live: "https://www.npmjs.com/package/onekit-js",
    source: "https://github.com/hidecard/onekit-js",
    status: "npm",
  },
  {
    title: "CSS-Labs Playground",
    category: "Tool",
    short: "CSS",
    image: "assets/projects/css-labs-playground.svg",
    role: "Creator & Educator",
    period: "2022 — Present",
    desc: "A live playground for learning Flexbox and Grid with preview, code generation and practical experiments.",
    metrics: ["Flexbox & Grid", "Live preview", "Code generation"],
    stack: ["React", "CSS", "Education"],
    tags: ["React", "CSS", "Education"],
    color: "#2e263e",
    live: "https://css-labs.vercel.app/",
    status: "Free",
  },
  {
    title: "Solo VPN",
    category: "Mobile",
    short: "VPN",
    image: "assets/projects/solo-vpn.svg",
    role: "Android Developer",
    period: "2021 — 2022",
    desc: "A native Android VPN application focused on secure protocols, encryption and high-performance connectivity.",
    metrics: ["OpenVPN protocol", "AES encryption", "Native Android"],
    stack: ["Java", "OpenVPN", "Android SDK"],
    tags: ["Java", "OpenVPN", "Android"],
    color: "#1d303b",
    live: "",
    status: "Archived",
  },
  {
    title: "KG English App",
    category: "Mobile",
    short: "KG",
    image: "assets/projects/kg-english-app.svg",
    role: "Mobile Developer",
    period: "2021 — 2022",
    desc: "A gamified English learning app for young students with audio, animation and approachable lessons.",
    metrics: ["Kids gamification", "Audio lessons", "SQLite offline"],
    stack: ["Flutter", "Dart", "SQLite"],
    tags: ["Flutter", "Dart", "SQLite"],
    color: "#42321d",
    live: "",
    status: "Archived",
  },
  {
    title: "Security Labs",
    category: "Education",
    short: "LABS",
    image: "assets/projects/security-labs.svg",
    role: "Founder & Instructor",
    period: "2020 — Present",
    desc: "An interactive cybersecurity learning platform designed around practical labs and curated resources.",
    metrics: ["Hands-on labs", "Curated resources", "Security curriculum"],
    stack: ["Next.js", "Prisma", "Security", "PostgreSQL"],
    tags: ["Next.js", "Prisma", "Security"],
    color: "#352327",
    live: "",
    source: "https://github.com/hidecard/CyberSec-Lab",
    status: "Active",
  },
];
const services = [
  {
    no: "01",
    title: "Product engineering",
    summary: "From a clear brief to a dependable, responsive product that is ready to ship.",
    details: ["Full product lifecycle — discovery, design, build and launch", "Responsive web and mobile frontends", "API design, databases and production deployment"],
    stack: ["TypeScript", "React", "Laravel", "Rust", "Flutter"],
    idealFor: "Startups and product teams",
    timeframe: "4–12 weeks",
  },
  {
    no: "02",
    title: "Web & mobile apps",
    summary: "Thoughtful interfaces and strong technical foundations across web, Flutter and native Android.",
    details: ["Custom web applications (React, Laravel, Inertia.js)", "Flutter cross-platform mobile apps", "Native Android (Java, OpenVPN)"],
    stack: ["React", "Flutter", "Dart", "Java", "Laravel"],
    idealFor: "Businesses needing web + mobile",
    timeframe: "6–16 weeks",
  },
  {
    no: "03",
    title: "AI & automation",
    summary: "Useful AI features and workflows that solve a real problem instead of adding noise.",
    details: ["Gemini AI integrations and assistants", "AI-generated code sandboxing (Wasmtime)", "Routing, recommendation and voice-alert features"],
    stack: ["Gemini AI", "TypeScript", "Rust", "Wasmtime"],
    idealFor: "Teams adding practical AI",
    timeframe: "3–8 weeks",
  },
  {
    no: "04",
    title: "Teaching & mentoring",
    summary: "Practical guidance for people learning to build, debug and think like developers.",
    details: ["Full-stack web & mobile bootcamps", "1-on-1 code reviews and debugging", "Cybersecurity fundamentals labs"],
    stack: ["JavaScript", "TypeScript", "Flutter", "Security"],
    idealFor: "Students and junior developers",
    timeframe: "Ongoing",
  },
];
const experience = [
  {
    date: "2024 — Present",
    role: "Programming Instructor & Project Manager",
    company: "YHA Computer",
    location: "Yangon, Myanmar",
    type: "Full-time",
    desc: "Leading development projects and teaching full-stack web and mobile frameworks to students and junior developers.",
    achievements: ["Full-stack web and mobile instruction", "Student project delivery and mentoring", "Development project leadership"],
  },
  {
    date: "2022 — 2024",
    role: "Founder",
    company: "Power Agriculture Myanmar",
    location: "Yangon, Myanmar",
    type: "Founder",
    desc: "Established an agricultural brand and managed the supply chain, label design, and distribution of agricultural nutrient and pest control products.",
    achievements: ["Founded Power Agriculture brand", "Managed agricultural product supply chain", "Designed custom packaging and distribution networks"],
  },
  {
    date: "2020 — Present",
    role: "Cybersecurity Consultant",
    company: "Myanmar Cyber Ghost",
    location: "Yangon, Myanmar",
    type: "Consulting",
    desc: "Sharing practical security knowledge and providing protection strategies for individuals and organizations.",
    achievements: ["Security audits for local businesses", "Cybersecurity curriculum design", "Incident response guidance"],
  },
  {
    date: "2019 — Present",
    role: "Founder & CEO",
    company: "k Square",
    location: "Yangon, Myanmar",
    type: "Founder",
    desc: "Directing a software firm focused on custom enterprise solutions and SaaS architecture.",
    achievements: ["Founded k Square software firm", "Custom enterprise SaaS deliveries", "Team leadership and client relations"],
  },
  {
    date: "2014 — Present",
    role: "Independent Software Developer",
    company: "Freelance",
    location: "Yangon, Myanmar",
    type: "Freelance",
    desc: "Building and delivering software products and client solutions since 2014, alongside teaching and mentoring.",
    achievements: ["Building digital products independently since 2014", "Selected product and client work", "Teaching and mentoring experience"],
  },
];
const skills = [
  {
    no: "1",
    title: "Programming Languages & Core Tech",
    intro: "Languages and frameworks I build with daily.",
    groups: [
      {
        label: "Languages",
        items: ["JavaScript", "TypeScript", "PHP", "Python", "C#", "Rust", "Dart", "Java", "ZAP", "SQL / Query Languages"],
      },
      {
        label: "Development & Frameworks",
        items: ["Next.js", "React.js", "Vue.js", "Node.js", "Express.js", "Laravel", "Inertia.js", "Flutter & Dart", "Bootstrap", "Tailwind CSS", "OneKit (Custom JS Library)"],
      },
      {
        label: "Databases & ORM",
        items: ["MongoDB", "MySQL", "Turso LibSQL", "Supabase", "Firebase", "Prisma", "Drizzle ORM", "SQLite"],
      },
    ],
  },
  {
    no: "2",
    title: "System Administration, DevOps & Tools",
    intro: "Servers, cloud edge and the tools that ship code.",
    groups: [
      {
        label: "Operating Systems & Environment",
        items: ["Linux (Ubuntu, Parrot OS Security Edition)", "Windows (UEFI boot, Advanced configuration)"],
      },
      {
        label: "Shell Scripting & Automation",
        items: ["Bash / Shell Scripting (bash, sh)", "System automation and server deployment scripts"],
      },
      {
        label: "Serverless & Cloud Edge",
        items: ["AWS", "Vercel", "Hostinger", "Cloudflare Workers"],
      },
      {
        label: "Version Control & Workflows",
        items: ["Git & Advanced Branching Workflows", "GitHub", "pnpm / npm"],
      },
      {
        label: "CI/CD & Deployment Pipelines",
        items: ["Docker", "GitHub Actions (Automated testing & building)", "Automated npm Package Publishing (onekit-js)", "VS Code Marketplace Extensions Deployment", "Vercel Continuous Deployment (CD)"],
      },
    ],
  },
  {
    no: "3",
    title: "Cybersecurity & Ethical Hacking",
    intro: "Defensive security, sandboxing and vulnerability research.",
    groups: [
      {
        label: "Security Tools",
        items: ["Burp Suite", "Nmap", "Proxychains", "UFW", "Wireshark", "Wasmtime (WASM Sandbox isolation)"],
      },
      {
        label: "Network & Security Foundation",
        items: ["Network Engineering", "CCNA", "Linux System Administration", "Vulnerability Research"],
      },
    ],
  },
  {
    no: "4",
    title: "Mobile & Cross-Platform Development",
    intro: "Native and cross-platform mobile with hardware integration.",
    groups: [
      {
        label: "Mobile Apps",
        items: ["Flutter (Android/iOS)", "Native Android (Java)"],
      },
      {
        label: "Hardware & Protocols Integration",
        items: ["NFC Card Reading (APDU ISO 7816 protocols)", "POS Integration", "Push notifications (Pusher)"],
      },
    ],
  },
  {
    no: "5",
    title: "Teaching, Management & Content Creation",
    intro: "Mentoring, curriculum design and technical publishing.",
    groups: [
      {
        label: "Instruction & Project Management",
        items: ["Full-stack Web & Mobile Development teaching", "Curriculum design", "Student mentoring (YHA Computer & Freelance)"],
      },
      {
        label: "Creative & Design",
        items: ["Figma", "Adobe XD", "Graphic Design", "Motion Video Editing", "Social Media Page Management"],
      },
      {
        label: "Publishing",
        items: ['Technical Writing” "Flutter: From Basic to Advance"', "VS Code Extensions Development"],
      },
    ],
  },
  {
    no: "6",
    title: "Business Ventures, Supply Chain & Architecture",
    intro: "Agricultural branding, supply chain management and software architecture.",
    groups: [
      {
        label: "Business & Operations (Power Agriculture Myanmar)",
        items: ["Agricultural Product Branding & Label Design", "Supply Chain & Distribution Management", "Agricultural Nutrient & Pest Control Packaging"],
      },
      {
        label: "Natural Languages",
        items: ["Burmese (Native)", "English"],
      },
    ],
  },
];
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const tr = (text) => window.portfolioTranslate ? window.portfolioTranslate(text) : text;
function renderFilters() {
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  $("[data-filters]").innerHTML = cats
    .map(
      (c, i) =>
        `<button class="${i === 0 ? "is-active" : ""}" data-filter="${c}">${tr(c)}</button>`,
    )
    .join("");
}
let activeFilter = "All",
  visibleCount = 6;
function projectCard(p, i) {
  const logo = p.image ? `<img src="${p.image}" alt="${p.title} logo" loading="lazy">` : `<span class="project-fallback">${p.short}</span>`;
  const liveLabel = p.liveLabel || (p.title === "YBS AI" ? "Google Play ↗" : "Live ↗");
  const liveLink = p.live ? `<a class="project-visit" href="${p.live}" target="_blank" rel="noopener noreferrer">${tr(liveLabel)}</a>` : "";
  const sourceLink = p.source ? `<a class="project-visit" href="${p.source}" target="_blank" rel="noopener noreferrer">${tr(p.sourceLabel ? `${p.sourceLabel} ↗` : "Source ↗")}</a>` : "";
  const proofLink = p.proof ? `<a class="project-visit" href="${p.proof}" target="_blank" rel="noopener noreferrer">${tr("Marketplace ↗")}</a>` : "";
  const extraLinks = (p.extraLinks || []).map((link) => `<a class="project-visit" href="${link.url}" target="_blank" rel="noopener noreferrer">${tr(link.label + " ↗")}</a>`).join("");
  const caseStudyLink = p.caseStudy ? `<a class="project-visit" href="${p.caseStudy}">${tr("Case study ↗")}</a>` : "";
  return `<article class="project-card reveal" data-category="${p.category}">
    <div class="project-visual" style="--project-color:${p.color}"><span class="project-badge">${tr(p.category)}</span>${logo}</div>
    <div class="project-body">
      <div class="project-top"><span class="project-number">0${i + 1}</span><span class="status-badge"><span class="status-dot-badge" style="background:${p.color}"></span>${tr(p.status)}</span></div>
      <h3>${p.title}</h3>
      <p>${tr(p.desc)}</p>
      <div class="stack">${p.stack.slice(0,4).map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="project-foot"><button class="text-link" data-project="${p.title}">${tr("Case details")}</button><span class="project-links">${caseStudyLink}${liveLink}${sourceLink}${proofLink}${extraLinks}</span></div>
    </div>
  </article>`;
}
function renderProjects() {
  const list = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );
  const shown = list.slice(0, visibleCount);
  $("[data-projects]").innerHTML = shown
    .map((p, i) => projectCard(p, i))
    .join("");
  $("[data-more]").style.display =
    visibleCount >= list.length ? "none" : "inline-flex";
  observeReveals();
}
function renderServices() {
  $("[data-services]").innerHTML = services
    .map(
      (s) =>
        `<article class="service-item reveal"><div class="service-left"><span class="service-number">${s.no}</span><h3>${tr(s.title)}</h3><p>${tr(s.summary)}</p><div class="service-meta"><span>${tr(s.idealFor)}</span><span>${tr(s.timeframe)}</span></div></div><div class="service-right"><ul class="service-details">${s.details.map((d) => `<li>${tr(d)}</li>`).join("")}</ul><div class="stack">${s.stack.map((t) => `<span>${t}</span>`).join("")}</div><span class="service-arrow">↗</span></div></article>`,
    )
    .join("");
}
function renderExperience() {
  $("[data-experience]").innerHTML = experience
    .map(
      (e) =>
        `<article class="timeline-item reveal"><time>${e.date.replace("Present", tr("Present"))}</time><div><h3>${tr(e.role)}</h3><span class="project-category">${e.company}</span><span class="timeline-meta">${tr(e.location)} · ${tr(e.type)}</span></div><p>${tr(e.desc)}</p><ul class="achievements">${e.achievements.map((a) => `<li>${tr(a)}</li>`).join("")}</ul></article>`,
    )
    .join("");
}
function skillIcon(name) {
  const n = name.toLowerCase();
  const map = [
    ["html", "devicon-html5-plain colored"],
    ["css", "devicon-css3-plain colored"],
    ["javascript", "devicon-javascript-plain colored"],
    ["typescript", "devicon-typescript-plain colored"],
    ["php", "devicon-php-plain colored"],
    ["python", "devicon-python-plain colored"],
    ["c#", "devicon-csharp-plain colored"],
    ["rust", "devicon-rust-original"],
    ["dart", "devicon-dart-plain colored"],
    ["java", "devicon-java-plain colored"],
    ["react", "devicon-react-original colored"],
    ["vue", "devicon-vuejs-plain colored"],
    ["next.js", "devicon-nextjs-plain"],
    ["node.js", "devicon-nodejs-plain colored"],
    ["node", "devicon-nodejs-plain colored"],
    ["express", "devicon-express-original"],
    ["laravel", "devicon-laravel-original colored"],
    ["flutter", "devicon-flutter-plain colored"],
    ["mongodb", "devicon-mongodb-plain colored"],
    ["mysql", "devicon-mysql-original colored"],
    ["sqlite", "devicon-sqlite-plain colored"],
    ["prisma", "devicon-prisma-original"],
    ["linux", "devicon-linux-plain"],
    ["ubuntu", "devicon-ubuntu-plain colored"],
    ["windows", "devicon-windows11-original colored"],
    ["git &", "devicon-git-plain colored"],
    ["git", "devicon-git-plain colored"],
    ["github", "devicon-github-original"],
    ["bash", "devicon-bash-plain"],
    ["shell", "devicon-bash-plain"],
    ["npm", "devicon-npm-original-wordmark colored"],
    ["pnpm", "devicon-pnpm-plain colored"],
    ["vercel", "devicon-vercel-original"],
    ["cloudflare", "devicon-cloudflare-plain colored"],
    ["docker", "devicon-docker-plain colored"],
    ["aws", "devicon-amazonwebservices-plain-wordmark colored"],
    ["amazon", "devicon-amazonwebservices-plain-wordmark colored"],
    ["figma", "devicon-figma-plain colored"],
    ["adobe xd", "devicon-xd-plain colored"],
    ["xd", "devicon-xd-plain colored"],
    ["supabase", "devicon-supabase-plain colored"],
    ["firebase", "devicon-firebase-plain colored"],
    ["bootstrap", "devicon-bootstrap-plain colored"],
    ["vite", "devicon-vitejs-plain colored"],
    ["tailwind", "devicon-tailwindcss-original colored"],
    ["postgres", "devicon-postgresql-plain colored"],
    ["sql", "devicon-azuresqldatabase-plain colored"],
    ["android", "devicon-android-plain colored"],
    ["wasmtime", "devicon-wasm-original colored"],
    ["webassembly", "devicon-wasm-original colored"],
  ];
  let cls = "";
  for (const [key, val] of map) {
    if (n.includes(key)) { cls = val; break; }
  }
  if (cls) return `<i class="${cls}" aria-hidden="true"></i>`;
  const label = name.replace(/[^A-Za-z0-9+#]/g, "").slice(0, 2).toUpperCase() || "?";
  return `<span class="skill-fallback" aria-hidden="true">${label}</span>`;
}

function renderSkills() {
  $("[data-skills]").innerHTML = skills
    .map(
      (s) =>
        `<section class="skill-group reveal" id="skill-${s.no}">
          <div class="skill-head">
            <span class="skill-number">0${s.no}</span>
            <div class="skill-head-copy">
              <h3>${tr(s.title)}</h3>
              <p class="skill-intro">${tr(s.intro)}</p>
            </div>
          </div>
          <div class="skill-cols">
            ${s.groups
              .map(
                (g) =>
                  `<div class="skill-column">
                    <span class="skill-column-label">${tr(g.label)}</span>
                    <ul class="skill-list">${g.items
                      .map(
                        (i) =>
                          `<li class="skill-item"><span class="skill-icon">${skillIcon(i)}</span><span class="skill-name">${i}</span></li>`,
                      )
                      .join("")}</ul>
                  </div>`,
              )
              .join("")}
          </div>
        </section>`,
    )
    .join("");
}
function countUp() {
  $$("[data-count]").forEach((el) => {
    if (el.dataset.animated) return;
    const target = parseFloat(el.dataset.count);
    const suffix = el.textContent.replace(/[\d.]+/, "");
    const start = performance.now(),
      dur = 1000;
    const frame = (n) => {
      const p = Math.min(1, (n - start) / dur);
      const v = (target * p).toFixed(target % 1 ? 1 : 0);
      el.textContent = v + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.dataset.animated = "1";
    };
    requestAnimationFrame(frame);
  });
}
function observeReveals() {
  const els = $$(".reveal:not(.observed)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("is-visible"));
    countUp();
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  els.forEach((e) => {
    e.classList.add("observed");
    io.observe(e);
  });
  const statEls = $$("[data-count]");
  const sio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          countUp();
          sio.disconnect();
        }
      });
    },
    { threshold: 0.5 },
  );
  statEls.forEach((e) => sio.observe(e));
}
function openProject(title) {
  const p = projects.find((x) => x.title === title);
  if (!p) return;
  const modal = $("[data-modal]");
  const links = [
    p.live && `<a class="button button-accent" href="${p.live}" target="_blank" rel="noopener noreferrer">${tr(p.title === "YBS AI" ? "Google Play ↗" : "Open project ↗")}</a>`,
    p.source && `<a class="button button-outline" href="${p.source}" target="_blank" rel="noopener noreferrer">${tr(p.sourceLabel ? `${p.sourceLabel} ↗` : "GitHub source ↗")}</a>`,
    ...(p.extraLinks || []).map((link) => `<a class="button button-outline" href="${link.url}" target="_blank" rel="noopener noreferrer">${tr(link.label + " ↗")}</a>`),
    p.proof && `<a class="button button-outline" href="${p.proof}" target="_blank" rel="noopener noreferrer">${tr("Marketplace ↗")}</a>`,
    p.caseStudy && `<a class="button button-outline" href="${p.caseStudy}">${tr("Case study ↗")}</a>`,
  ].filter(Boolean).join("");
  $("[data-modal-content]").innerHTML = `
    <p class="modal-kicker">${tr(p.category)}</p>
    <h2>${p.title}</h2>
    <div class="project-meta" style="margin:16px 0 10px">
      <span>${tr(p.role)}</span><span>${p.period.replace("Present", tr("Present"))}</span>
      <span class="status-badge"><span class="status-dot-badge" style="background:${p.color}"></span>${tr(p.status)}</span>
    </div>
    <h3>${tr("Project overview")}</h3><p>${tr(p.desc)}</p>
    <h3>${tr("Highlights")}</h3>
    <div class="modal-metrics">${p.metrics.map((m) => `<span class="metric">${tr(m)}</span>`).join("")}</div>
    <h3>${tr("Technology")}</h3>
    <div class="modal-tags">${[...p.tags, ...p.stack].map((tag) => `<span>${tag}</span>`).join("")}</div>
    <div class="modal-actions">${links}</div>`;
  modal.showModal();
}
function setup() {
  renderFilters();
  renderProjects();
  renderServices();
  renderExperience();
  renderSkills();
  observeReveals();
  $("[data-year]").textContent = new Date().getFullYear();
  const menu = $("[data-mobile-menu]"),
    menuButton = $("[data-menu]");
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", open);
  });
  $$(".mobile-menu a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }),
  );
  $("[data-theme]").addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    localStorage.setItem(
      "arkaryan-visual-theme",
      document.body.classList.contains("theme-light") ? "light" : "dark",
    );
  });
  if (localStorage.getItem("arkaryan-visual-theme") === "light")
    document.body.classList.add("theme-light");
  $("[data-filters]").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    activeFilter = b.dataset.filter;
    visibleCount = 6;
    $$("[data-filter]").forEach((x) =>
      x.classList.toggle("is-active", x === b),
    );
    renderProjects();
  });
  $("[data-more]").addEventListener("click", () => {
    visibleCount += 4;
    renderProjects();
  });
  $("[data-projects]").addEventListener("click", (e) => {
    const b = e.target.closest("[data-project]");
    if (b) openProject(b.dataset.project);
  });
  $("[data-close]").addEventListener("click", () => $("[data-modal]").close());
  $("[data-modal]").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) e.currentTarget.close();
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  onScroll();
  updateTime();
  setInterval(updateTime, 30000);
  const languageButton = $("[data-language]");
  languageButton.textContent = document.documentElement.lang === "my" ? "EN" : "မြန်မာ";
  languageButton.addEventListener("click", () => {
    localStorage.setItem("arkaryan-language", document.documentElement.lang === "my" ? "en" : "my");
    window.location.reload();
  });
}
function onPointerMove(e) {
  const hero = $(".hero-visual");
  if (!hero || window.matchMedia("(pointer:coarse)").matches) return;
  const x = (e.clientX / innerWidth - 0.5) * 12;
  const y = (e.clientY / innerHeight - 0.5) * 8;
  hero.style.setProperty("--pointer-x", `${x}px`);
  hero.style.setProperty("--pointer-y", `${y}px`);
}
function onScroll() {
  const y = window.scrollY;
  $(".site-header").classList.toggle("is-scrolled", y > 30);
  const max = document.documentElement.scrollHeight - innerHeight;
  document.documentElement.style.setProperty(
    "--progress",
    `${max ? (y / max) * 100 : 0}%`,
  );
}
function updateTime() {
  const now = new Date();
  $("[data-time]").textContent =
    `Yangon · ${new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Yangon", hour: "2-digit", minute: "2-digit", hour12: true }).format(now)}`;
}
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = localStorage.getItem("arkaryan-language") === "my" ? "my" : "en";
  setup();
  if (window.portfolioSetStaticLocale) window.portfolioSetStaticLocale();
});

