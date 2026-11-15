// Regenerate the crawlable HTML snapshots after editing project, service, experience, or skill data in app.js.
// Run from the repository root with: node scripts/prerender.cjs
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const htmlPath = path.join(__dirname, '..', 'index.html');
const appPath = path.join(__dirname, '..', 'app.js');
const app = fs.readFileSync(appPath, 'utf8');
function getArray(name) {
  const match = app.match(new RegExp(`const ${name} = \\[([\\s\\S]*?)\\n\\];`));
  if (!match) throw new Error(`Cannot find ${name} array`);
  const context = {};
  vm.runInNewContext(`const ${name} = [${match[1]}\n]; globalThis.result = ${name};`, context);
  return context.result;
}
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const projects = getArray('projects');
const experience = getArray('experience');
const services = getArray('services');
const skills = getArray('skills');
const projectHtml = projects.map((p, i) => {
  const links = [
    p.live && `<a class="project-visit" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">${esc(p.liveLabel || (p.title === 'YBS AI' ? 'Google Play ↗' : 'Live ↗'))}</a>`,
    p.source && `<a class="project-visit" href="${esc(p.source)}" target="_blank" rel="noopener noreferrer">${esc(p.sourceLabel ? `${p.sourceLabel} ↗` : 'Source ↗')}</a>`,
    p.proof && `<a class="project-visit" href="${esc(p.proof)}" target="_blank" rel="noopener noreferrer">Marketplace ↗</a>`,
    p.caseStudy && `<a class="project-visit" href="${esc(p.caseStudy)}">Case study ↗</a>`,
    ...(p.extraLinks || []).map(link => `<a class="project-visit" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`)
  ].filter(Boolean).join('');
  return `<article class="project-card" data-category="${esc(p.category)}"><div class="project-visual" style="--project-color:${esc(p.color)}"><span class="project-badge">${esc(p.category)}</span><img src="${esc(p.image)}" alt="${esc(p.title)} logo" loading="lazy"></div><div class="project-body"><div class="project-top"><span class="project-number">${String(i+1).padStart(2,'0')}</span><span class="status-badge">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="stack">${p.stack.slice(0,4).map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="project-foot"><button class="text-link" data-project="${esc(p.title)}">Case details</button><span class="project-links">${links}</span></div></div></article>`;
}).join('\n');
const experienceHtml = experience.map(e => `<article class="timeline-item"><time>${esc(e.date)}</time><div><h3>${esc(e.role)}</h3><span class="project-category">${esc(e.company)}</span><span class="timeline-meta">${esc(e.location)} · ${esc(e.type)}</span></div><p>${esc(e.desc)}</p><ul class="achievements">${e.achievements.map(a=>`<li>${esc(a)}</li>`).join('')}</ul></article>`).join('\n');
const servicesHtml = services.map(s => `<article class="service-item"><div class="service-left"><span class="service-number">${esc(s.no)}</span><h3>${esc(s.title)}</h3><p>${esc(s.summary)}</p><div class="service-meta"><span>${esc(s.idealFor)}</span><span>${esc(s.timeframe)}</span></div></div><div class="service-right"><ul class="service-details">${s.details.map(d=>`<li>${esc(d)}</li>`).join('')}</ul><div class="stack">${s.stack.map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></article>`).join('\n');
const skillsHtml = skills.map(s => `<section class="skill-group" id="skill-${esc(s.no)}"><div class="skill-head"><span class="skill-number">0${esc(s.no)}</span><div class="skill-head-copy"><h3>${esc(s.title)}</h3><p class="skill-intro">${esc(s.intro)}</p></div></div><div class="skill-cols">${s.groups.map(g=>`<div class="skill-column"><span class="skill-column-label">${esc(g.label)}</span><ul class="skill-list">${g.items.map(i=>`<li class="skill-item"><span class="skill-name">${esc(i)}</span></li>`).join('')}</ul></div>`).join('')}</div></section>`).join('\n');
let html = fs.readFileSync(htmlPath, 'utf8');
html = html.replace(/<div class="project-grid" data-projects>[\s\S]*?<\/div><div class="center-action">/, `<div class="project-grid" data-projects>\n${projectHtml}\n</div><div class="center-action">`);
html = html.replace(/<div class="timeline" data-experience>[\s\S]*?<\/div><\/div><\/section>/, `<div class="timeline" data-experience>\n${experienceHtml}\n</div></div></section>`);
html = html.replace(/<div class="service-list" data-services>[\s\S]*?<\/div><\/div><\/section>/, `<div class="service-list" data-services>\n${servicesHtml}\n</div></div></section>`);
const skillsSectionStart = html.indexOf('<section class="skills section-paper" id="skills">');
const skillsSectionEnd = html.indexOf('<section class="contact section-dark"', skillsSectionStart);
if (skillsSectionStart < 0 || skillsSectionEnd < 0) throw new Error('Cannot locate skills section boundaries');
const skillsSection = `<section class="skills section-paper" id="skills"><div class="container"><div class="section-head reveal"><p class="section-label">06 / Technical Skills</p><h2>Tools I<br><em>work with.</em></h2><p class="section-description">Programming, systems, security, mobile and teaching — grouped by discipline so you can see what fits your project.</p></div><div data-skills>\n${skillsHtml}\n</div></div></section>\n\n    `;
html = html.slice(0, skillsSectionStart) + skillsSection + html.slice(skillsSectionEnd);
fs.writeFileSync(htmlPath, html);
console.log(`Prerendered ${projects.length} projects, ${experience.length} experience entries, ${services.length} services and ${skills.length} skill groups.`);
