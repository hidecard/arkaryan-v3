const projects = [
  {
    title: "ZAP Lang",
    category: "Developer tools",
    short: "ZAP",
    role: "Creator & Lead Engineer",
    period: "2023 — Present",
    desc: "A fast, expressive programming language and developer tool with a Rust runtime, dynamic typing and a self-hosting compiler toolchain.",
    metrics: ["Self-hosting compiler", "10k+ lines compiled", "VS Code extension"],
    stack: ["Rust", "Compiler", "CLI", "TypeScript"],
    tags: ["Rust", "Compiler", "Developer tools"],
    color: "#352124",
    live: "https://zap-lang.hidecard1500.workers.dev/",
    status: "Active",
  },
  {
    title: "CortexEnv",
    category: "Security / AI",
    short: "CORTEX",
    role: "Creator & Lead Engineer",
    period: "2024 — Present",
    desc: "A secure execution sandbox and Rust workspace for AI-generated code featuring Wasmtime WASM isolation and resource limits.",
    metrics: ["Wasmtime sandboxing", "CPU & memory limits", "AI-code safe execution"],
    stack: ["Rust", "Wasmtime", "WebAssembly", "Security"],
    tags: ["Rust", "Wasmtime", "Security"],
    color: "#1e2e38",
    live: "https://github.com/hidecard/CortexEnv",
    status: "Open source",
  },
  {
    title: "YBS AI",
    category: "AI / Product",
    short: "YBS",
    role: "Founder & Lead Developer",
    period: "2023 — Present",
    desc: "An intelligent bus route guide for Yangon with offline functionality, NFC card reading, BFS routing and Burmese voice alerts.",
    metrics: ["100+ bus routes", "Offline maps", "Burmese voice TTS"],
    stack: ["Flutter", "Dart", "Gemini AI", "SQLite"],
    tags: ["Flutter", "Dart", "Gemini AI"],
    color: "#403318",
    live: "https://play.google.com/store/apps/details?id=net.arkaryan.ybs_ai",
    status: "Play Store",
  },
  {
    title: "WeCare",
    category: "Social / Web",
    short: "CARE",
    role: "Full-Stack Developer",
    period: "2022 — 2023",
    desc: "A charitable web application built for supporting underprivileged street elders in Myanmar with transparent financial tracking.",
    metrics: ["Transparent donations", "Elder profiles", "Myanmar-based"],
    stack: ["Laravel", "React", "MySQL", "Tailwind"],
    tags: ["Laravel", "React", "MySQL"],
    color: "#24362b",
    live: "https://wecare.spacetikapp.com/",
    status: "Launched",
  },
  {
    title: "SmartZay",
    category: "E-Commerce",
    short: "ZAY",
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
    role: "Creator & Backend Engineer",
    period: "2022 — Present",
    desc: "A Telegram dating bot with swipe functionality, built for reliable scale and a playful user experience.",
    metrics: ["Telegram bot API", "Swipe matching", "Profile chat"],
    stack: ["Node.js", "Telegram", "Turso", "SQLite"],
    tags: ["Node.js", "Telegram", "Turso"],
    color: "#3b1d2a",
    live: "https://t.me/mmcupid_bot",
    status: "Active",
  },
  {
    title: "MM Career AI",
    category: "AI / Product",
    short: "CAREER",
    role: "Founder & AI Engineer",
    period: "2024 — Present",
    desc: "A career guidance platform for Myanmar professionals with skill assessment, job matching and learning roadmaps.",
    metrics: ["Skill assessment", "AI job matching", "Learning roadmaps"],
    stack: ["TypeScript", "AI", "Vite", "Tailwind"],
    tags: ["TypeScript", "AI", "Vite"],
    color: "#25362f",
    live: "https://mm-career-ai.vercel.app/",
    status: "Beta",
  },
  {
    title: "DWMBlurGlass",
    category: "Utility",
    short: "GLASS",
    role: "Creator & Maintainer",
    period: "2024 — Present",
    desc: "An open-source Windows utility bringing customizable blur effects and a modern take on classic Aero glass.",
    metrics: ["Windows 10/11", "Custom blur", "Open source"],
    stack: ["C++", "Windows API", "Win32"],
    tags: ["C++", "Windows API", "Open source"],
    color: "#24343b",
    live: "https://liquid-glass-ui-for-window.vercel.app/",
    status: "Open source",
  },
  {
    title: "Zap VS Code Ext",
    category: "Developer tools",
    short: "ZAP-EX",
    role: "Creator & Maintainer",
    period: "2023 — Present",
    desc: "Official Visual Studio Code syntax highlighting and language extension for the ZAP programming language.",
    metrics: ["Syntax highlighting", "Language features", "VS Code marketplace"],
    stack: ["TypeScript", "VS Code API", "tmLanguage"],
    tags: ["TypeScript", "VS Code", "Extension"],
    color: "#301c24",
    live: "https://marketplace.visualstudio.com/",
    status: "Published",
  },
  {
    title: "Code Notes Manager",
    category: "Utility",
    short: "NOTES",
    role: "Creator & Maintainer",
    period: "2023 — Present",
    desc: "A developer-focused VS Code extension for organizing code snippets, learning notes and documentation.",
    metrics: ["Snippet manager", "Note linking", "VS Code extension"],
    stack: ["TypeScript", "VS Code API"],
    tags: ["TypeScript", "VS Code", "Productivity"],
    color: "#1c2a38",
    live: "https://marketplace.visualstudio.com/",
    status: "Published",
  },
  {
    title: "OneKit Library",
    category: "Library",
    short: "ONE",
    role: "Creator & Maintainer",
    period: "2022 — Present",
    desc: "A lightweight JavaScript library published on npm for DOM manipulation, animation, reactive state and routing.",
    metrics: ["npm published", "~5k downloads", "ES modules"],
    stack: ["JavaScript", "ES Modules", "DOM"],
    tags: ["JavaScript", "ES Modules", "Library"],
    color: "#49371c",
    live: "https://www.npmjs.com/package/onekit-js",
    status: "npm",
  },
  {
    title: "CSS-Labs Playground",
    category: "Tool",
    short: "CSS",
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
    role: "Founder & Instructor",
    period: "2020 — Present",
    desc: "An interactive cybersecurity learning platform designed around practical labs and curated resources.",
    metrics: ["Hands-on labs", "Curated resources", "Security curriculum"],
    stack: ["Next.js", "Prisma", "Security", "PostgreSQL"],
    tags: ["Next.js", "Prisma", "Security"],
    color: "#352327",
    live: "",
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
    achievements: ["Taught 500+ students across full-stack cohorts", "Shipped 130+ student projects to production", "Managed 8 concurrent client projects"],
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
    date: "2017 — Present",
    role: "Independent Software Developer",
    company: "Freelance",
    location: "Yangon, Myanmar",
    type: "Freelance",
    desc: "Delivering software solutions and mentoring students through online batches since 2017.",
    achievements: ["10+ years building digital products", "200+ projects shipped", "14.3k students taught"],
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
        items: ["JavaScript", "TypeScript", "PHP", "Python", "C#", "Rust", "Dart", "Java", "HTML/CSS", "SQL / Query Languages"],
      },
      {
        label: "Development & Frameworks",
        items: ["Next.js", "React.js", "Vue.js", "Node.js", "Express.js", "Laravel", "Inertia.js", "Flutter & Dart", "OneKit (Custom JS Library)"],
      },
      {
        label: "Databases & ORM",
        items: ["MongoDB", "MySQL", "Turso LibSQL", "Prisma", "Drizzle ORM", "SQLite"],
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
        items: ["Vercel", "Hostinger", "Cloudflare Workers"],
      },
      {
        label: "Version Control & Workflows",
        items: ["Git & Advanced Branching Workflows", "GitHub", "pnpm / npm"],
      },
      {
        label: "CI/CD & Deployment Pipelines",
        items: ["GitHub Actions (Automated testing & building)", "Automated npm Package Publishing (onekit-js)", "VS Code Marketplace Extensions Deployment", "Vercel Continuous Deployment (CD)"],
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
        items: ["Graphic Design", "Motion Video Editing", "Social Media Page Management"],
      },
      {
        label: "Publishing",
        items: ['Technical Writing — "Flutter: From Basic to Advance"', "VS Code Extensions Development"],
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
function renderFilters() {
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  $("[data-filters]").innerHTML = cats
    .map(
      (c, i) =>
        `<button class="${i === 0 ? "is-active" : ""}" data-filter="${c}">${c}</button>`,
    )
    .join("");
}
let activeFilter = "All",
  visibleCount = 6;
function projectCard(p, i) {
  return `<article class="project-card reveal" data-category="${p.category}"><span class="project-number">0${i + 1}</span><div class="project-visual" style="--project-color:${p.color}">${p.short}</div><span class="project-category">${p.category}</span><h3>${p.title}</h3><div class="project-meta"><span>${p.role}</span><span>${p.period}</span><span class="status-badge"><span class="status-dot-badge" style="background:${p.color}"></span>${p.status}</span></div><p>${p.desc}</p><div class="project-foot"><span>${p.tags.slice(0, 2).join(" · ")}</span><button class="text-link" data-project="${p.title}">Details ↗</button></div><div class="stack">${p.stack.map((t) => `<span>${t}</span>`).join("")}</div><div class="metrics">${p.metrics.join(" · ")}</div></article>`;
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
        `<article class="service-item reveal"><div class="service-left"><span class="service-number">${s.no}</span><h3>${s.title}</h3><p>${s.summary}</p><div class="service-meta"><span>${s.idealFor}</span><span>${s.timeframe}</span></div></div><div class="service-right"><ul class="service-details">${s.details.map((d) => `<li>${d}</li>`).join("")}</ul><div class="stack">${s.stack.map((t) => `<span>${t}</span>`).join("")}</div><span class="service-arrow">↗</span></div></article>`,
    )
    .join("");
}
function renderExperience() {
  $("[data-experience]").innerHTML = experience
    .map(
      (e) =>
        `<article class="timeline-item reveal"><time>${e.date}</time><div><h3>${e.role}</h3><span class="project-category">${e.company}</span><span class="timeline-meta">${e.location} · ${e.type}</span></div><p>${e.desc}</p><ul class="achievements">${e.achievements.map((a) => `<li>${a}</li>`).join("")}</ul></article>`,
    )
    .join("");
}
function renderSkills() {
  $("[data-skills]").innerHTML = skills
    .map(
      (s) =>
        `<section class="skill-group reveal" id="skill-${s.no}"><div class="skill-head"><span class="skill-number">0${s.no}</span><h3>${s.title}</h3></div><p class="skill-intro">${s.intro}</p><div class="skill-cols">${s.groups
          .map(
            (g) =>
              `<div class="skill-column"><span class="skill-column-label">${g.label}</span><ul class="skill-list">${g.items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`,
          )
          .join("")}</div></section>`,
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
  $("[data-modal-content]").innerHTML =
    `<p class="modal-kicker">${p.category}</p><h2>${p.title}</h2><div class="project-meta" style="margin:16px 0 10px"><span>${p.role}</span><span>${p.period}</span><span class="status-badge"><span class="status-dot-badge" style="background:${p.color}"></span>${p.status}</span></div><p>${p.desc}</p><div class="modal-metrics">${p.metrics.map((m) => `<span class="metric">${m}</span>`).join("")}</div><div class="modal-tags">${[...p.tags, ...p.stack].map((t) => `<span>${t}</span>`).join("")}</div>${p.live ? `<a class="button button-accent" href="${p.live}" target="_blank" rel="noreferrer" style="margin-top:28px">Open live project <span>↗</span></a>` : ""}`;
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
function startSplash() {
  const splash = $("[data-splash]"),
    percent = $("[data-loader-percent]"),
    circle = $("[data-loader-circle]");
  if (!splash || !percent || !circle) return;
  document.body.classList.add("is-loading");
  const length = 2 * Math.PI * 43;
  circle.style.strokeDasharray = length;
  circle.style.strokeDashoffset = length;
  const started = performance.now();
  const duration = 1450;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    splash.classList.add("is-complete");
    document.body.classList.remove("is-loading");
    setTimeout(() => splash.remove(), 1000);
  };
  const frame = (now) => {
    if (finished) return;
    const progress = Math.min(1, Math.max(0, (now - started) / duration));
    const value = Math.round(progress * 100);
    percent.textContent = `${value}%`;
    circle.style.strokeDashoffset = length * (1 - progress);
    if (progress >= 1) setTimeout(finish, 180);
    else if (typeof requestAnimationFrame === "function")
      requestAnimationFrame(frame);
  };
  frame(started);
  const fallback = setInterval(() => frame(performance.now()), 100);
  setTimeout(() => {
    clearInterval(fallback);
    finish();
  }, 4000);
  setTimeout(() => clearInterval(fallback), duration + 500);
}
document.addEventListener("DOMContentLoaded", () => {
  startSplash();
  setup();
});
