const projects = [
  {
    title: "ZAP Lang",
    category: "Developer tools",
    short: "ZAP",
    desc: "A fast, expressive programming language and developer tool with Rust runtime, dynamic typing and self-hosting compiler milestones.",
    tags: ["Rust", "Compiler", "Developer tools"],
    color: "#352124",
    live: "https://zap-lang.hidecard1500.workers.dev/",
  },
  {
    title: "CortexEnv",
    category: "Security / AI",
    short: "CORTEX",
    desc: "A secure execution sandbox and Rust workspace for AI-generated code featuring Wasmtime WASM isolation and resource limits.",
    tags: ["Rust", "Wasmtime", "Security"],
    color: "#1e2e38",
    live: "https://github.com/hidecard/CortexEnv",
  },
  {
    title: "YBS AI",
    category: "AI / Product",
    short: "YBS",
    desc: "An intelligent bus route guide for Yangon with offline functionality, NFC card reading, BFS routing and Burmese voice alerts.",
    tags: ["Flutter", "Dart", "Gemini AI"],
    color: "#403318",
    live: "https://ybs-mm-v2.vercel.app/",
  },
  {
    title: "WeCare",
    category: "Social / Web",
    short: "CARE",
    desc: "A charitable web application built for supporting underprivileged street elders in Myanmar with transparent financial tracking.",
    tags: ["Laravel", "React", "MySQL"],
    color: "#24362b",
    live: "https://wecare.spacetikapp.com/",
  },
  {
    title: "SmartZay",
    category: "E-Commerce",
    short: "ZAY",
    desc: "A SaaS e-commerce marketplace platform for sellers and buyers featuring custom product attributes, POS integration and P2P chat.",
    tags: ["Laravel", "Inertia.js", "MySQL"],
    color: "#38281d",
    live: "https://easyzaymm.com/",
  },
  {
    title: "MM Match",
    category: "Bot / Platform",
    short: "MM",
    desc: "A Telegram dating bot with swipe functionality, built for reliable scale and a playful user experience.",
    tags: ["Node.js", "Telegram", "Turso"],
    color: "#3b1d2a",
    live: "https://t.me/mmcupid_bot",
  },
  {
    title: "MM Career AI",
    category: "AI / Product",
    short: "CAREER",
    desc: "A career guidance platform for Myanmar professionals with skill assessment, job matching and learning roadmaps.",
    tags: ["TypeScript", "AI", "Vite"],
    color: "#25362f",
    live: "https://mm-career-ai.vercel.app/",
  },
  {
    title: "DWMBlurGlass",
    category: "Utility",
    short: "GLASS",
    desc: "An open-source Windows utility bringing customizable blur effects and a modern take on classic Aero glass.",
    tags: ["C++", "Windows API", "Open source"],
    color: "#24343b",
    live: "https://liquid-glass-ui-for-window.vercel.app/",
  },
  {
    title: "Zap VS Code Ext",
    category: "Developer tools",
    short: "ZAP-EX",
    desc: "Official Visual Studio Code syntax highlighting and language extension for the ZAP programming language.",
    tags: ["TypeScript", "VS Code", "Extension"],
    color: "#301c24",
    live: "https://marketplace.visualstudio.com/",
  },
  {
    title: "Code Notes Manager",
    category: "Utility",
    short: "NOTES",
    desc: "A developer-focused VS Code extension for organizing code snippets, learning notes and documentation.",
    tags: ["TypeScript", "VS Code", "Productivity"],
    color: "#1c2a38",
    live: "https://marketplace.visualstudio.com/",
  },
  {
    title: "OneKit Library",
    category: "Library",
    short: "ONE",
    desc: "A lightweight JavaScript library published on npm for DOM manipulation, animation, reactive state and routing.",
    tags: ["JavaScript", "ES Modules", "Library"],
    color: "#49371c",
    live: "https://www.npmjs.com/package/onekit-js",
  },
  {
    title: "CSS-Labs Playground",
    category: "Tool",
    short: "CSS",
    desc: "A live playground for learning Flexbox and Grid with preview, code generation and practical experiments.",
    tags: ["React", "CSS", "Education"],
    color: "#2e263e",
    live: "https://css-labs.vercel.app/",
  },
  {
    title: "Solo VPN",
    category: "Mobile",
    short: "VPN",
    desc: "A native Android VPN application focused on secure protocols, encryption and high-performance connectivity.",
    tags: ["Java", "OpenVPN", "Android"],
    color: "#1d303b",
  },
  {
    title: "KG English App",
    category: "Mobile",
    short: "KG",
    desc: "A gamified English learning app for young students with audio, animation and approachable lessons.",
    tags: ["Flutter", "Dart", "SQLite"],
    color: "#42321d",
  },
  {
    title: "Security Labs",
    category: "Education",
    short: "LABS",
    desc: "An interactive cybersecurity learning platform designed around practical labs and curated resources.",
    tags: ["Next.js", "Prisma", "Security"],
    color: "#352327",
  },
];
const services = [
  [
    "01",
    "Product engineering",
    "From a clear brief to a dependable, responsive product that is ready to ship.",
  ],
  [
    "02",
    "Web & mobile apps",
    "Thoughtful interfaces and strong technical foundations across web, Flutter and native Android.",
  ],
  [
    "03",
    "AI & automation",
    "Useful AI features and workflows that solve a real problem instead of adding noise.",
  ],
  [
    "04",
    "Teaching & mentoring",
    "Practical guidance for people learning to build, debug and think like developers.",
  ],
];
const experience = [
  [
    "2024 — Present",
    "Programming Instructor & Project Manager",
    "YHA Computer",
    "Leading development projects and teaching full-stack web and mobile frameworks.",
  ],
  [
    "2020 — Present",
    "Cybersecurity Consultant",
    "Myanmar Cyber Ghost",
    "Sharing practical security knowledge and providing protection strategies.",
  ],
  [
    "2019 — Present",
    "Founder & CEO",
    "k Square",
    "Directing a software firm focused on custom enterprise solutions and SaaS architecture.",
  ],
  [
    "2017 — Present",
    "Independent Software Developer",
    "Freelance",
    "Delivering software solutions and mentoring students through online batches.",
  ],
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
  return `<article class="project-card reveal" data-category="${p.category}"><span class="project-number">0${i + 1}</span><div class="project-visual" style="--project-color:${p.color}">${p.short}</div><span class="project-category">${p.category}</span><h3>${p.title}</h3><p>${p.desc}</p><div class="project-foot"><span>${p.tags.slice(0, 2).join(" · ")}</span><button class="text-link" data-project="${p.title}">Details ↗</button></div></article>`;
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
      ([n, t, d]) =>
        `<article class="service-item reveal"><span class="service-number">${n}</span><h3>${t}</h3><p>${d}</p><span class="service-arrow">↗</span></article>`,
    )
    .join("");
}
function renderExperience() {
  $("[data-experience]").innerHTML = experience
    .map(
      ([date, role, company, desc]) =>
        `<article class="timeline-item reveal"><time>${date}</time><div><h3>${role}</h3><span class="project-category">${company}</span></div><p>${desc}</p></article>`,
    )
    .join("");
}
function observeReveals() {
  const els = $$(".reveal:not(.observed)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("is-visible"));
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
}
function openProject(title) {
  const p = projects.find((x) => x.title === title);
  if (!p) return;
  const modal = $("[data-modal]");
  $("[data-modal-content]").innerHTML =
    `<p class="modal-kicker">${p.category}</p><h2>${p.title}</h2><p>${p.desc}</p><div class="modal-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>${p.live ? `<a class="button button-accent" href="${p.live}" target="_blank" rel="noreferrer" style="margin-top:28px">Open live project <span>↗</span></a>` : ""}`;
  modal.showModal();
}
function setup() {
  renderFilters();
  renderProjects();
  renderServices();
  renderExperience();
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
    `Yangon · ${new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Yangon", hour: "2-digit", minute: "2-digit", hour12: false }).format(now)}`;
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
  // Draw immediately so a throttled first animation frame cannot leave the loader at 0%.
  frame(started);
  const fallback = setInterval(() => frame(performance.now()), 100);
  setTimeout(() => {
    clearInterval(fallback);
    finish();
  }, 4000);
  // Keep the interval from running after the normal animation completes.
  setTimeout(() => clearInterval(fallback), duration + 500);
}
document.addEventListener("DOMContentLoaded", () => {
  startSplash();
  setup();
});
