const { useEffect, useState } = React;
const h = React.createElement;
const A = ({ href, children, className = '', ...props }) => h('a', { href, className, ...props }, children);
const Arrow = () => h('span', { className: 'arrow', 'aria-hidden': true }, '↗');

const projects = [
  { name: 'Zap', type: 'Programming language', description: 'A simple, fast, beginner-friendly language with a clear syntax and standalone native runtime.', tech: 'Rust · Compiler · Runtime', href: 'https://github.com/hidecard/zap', mark: 'ZAP', tone: 'red' },
  { name: 'OneKit.js', type: 'JavaScript library', description: 'A compact toolkit for DOM work, animation, reactive state, routing and everyday browser APIs.', tech: 'TypeScript · Web · Library', href: 'https://github.com/hidecard/onekit-js', mark: 'ONE', tone: 'lime' },
  { name: 'YBS AI', type: 'AI product', description: 'An intelligent Yangon bus route guide designed to make local travel easier to understand.', tech: 'React · Maps · AI', href: 'https://ybs-mm-v2.vercel.app/', mark: 'YBS', tone: 'blue' },
  { name: 'CSS Labs', type: 'Learning tool', description: 'A hands-on playground for learning Flexbox and Grid through live previews and generated code.', tech: 'React · CSS · Education', href: 'https://css-labs.vercel.app/', mark: 'CSS', tone: 'violet' }
];
const experience = [
  ['2024 — now', 'Programming Instructor & Project Manager', 'YHA Computer Training Center'],
  ['2020 — now', 'Cybersecurity Consultant', 'Myanmar Cyber Ghost'],
  ['2019 — now', 'Founder & CEO', 'k Square'],
  ['2017 — now', 'Independent Software Developer', 'Freelance']
];

function Header({ menuOpen, setMenuOpen }) {
  const nav = ['about', 'work', 'journey', 'contact'];
  return h('header', { className: 'site-header' },
    A({ href: '#top', className: 'wordmark', 'aria-label': 'Arkar Yan home' }, h('span', { className: 'wordmark-mark' }, 'AY'), h('span', null, 'Arkar Yan')),
    h('nav', { className: 'desktop-nav', 'aria-label': 'Main navigation' }, nav.map(item => A({ key: item, href: '#' + item }, item[0].toUpperCase() + item.slice(1)))),
    h('div', { className: 'header-right' }, h('span', { className: 'availability' }, h('i'), ' Open to good work'), h('button', { className: 'menu-toggle', onClick: () => setMenuOpen(!menuOpen), 'aria-expanded': menuOpen, 'aria-label': 'Toggle menu' }, h('span'), h('span'))),
    menuOpen && h('nav', { className: 'mobile-nav', 'aria-label': 'Mobile navigation' }, nav.map((item, index) => A({ key: item, href: '#' + item, onClick: () => setMenuOpen(false) }, h('span', null, '0' + (index + 1)), item)))
  );
}

function Hero() {
  return h('section', { className: 'hero', id: 'top' },
    h('div', { className: 'hero-grid' },
      h('div', { className: 'hero-copy' }, h('p', { className: 'eyebrow' }, h('span', { className: 'eyebrow-line' }), ' Developer / educator / builder'), h('h1', null, 'Making the', h('br'), h('em', null, 'complex'), ' useful.'), h('p', { className: 'hero-lede' }, 'I’m Arkar Yan, a developer from Yangon building practical software, programming languages and learning tools for the web.'), h('div', { className: 'hero-links' }, h('a', { className: 'pill-link', href: '#work' }, 'Explore selected work ', h(Arrow)), A({ className: 'quiet-link', href: 'https://github.com/hidecard', target: '_blank', rel: 'noreferrer' }, 'GitHub profile ', h(Arrow)))),
      h('div', { className: 'hero-art', 'aria-label': 'Arkar Yan portrait' }, h('div', { className: 'hero-art-label' }, '01 / PROFILE'), h('div', { className: 'portrait-wrap' }, h('img', { src: 'assets/hero-character.png', alt: 'Illustrated portrait of Arkar Yan' }), h('span', { className: 'portrait-note' }, 'BUILD', h('br'), 'WITH', h('br'), h('b', null, 'INTENT'))), h('div', { className: 'hero-meta' }, h('span', null, 'Yangon, Myanmar'), h('span', null, '16° 48′ N / 96° 09′ E')))
    ),
    h('div', { className: 'hero-ticker', 'aria-hidden': true }, h('span', null, 'RUST   /   TYPESCRIPT   /   REACT   /   SYSTEMS   /   EDUCATION   /   '), h('span', null, 'RUST   /   TYPESCRIPT   /   REACT   /   SYSTEMS   /   EDUCATION   /   '))
  );
}

function About() {
  const principles = [['01', 'Curious by default'], ['02', 'Useful over noisy'], ['03', 'Share what I learn']];
  return h('section', { className: 'about section', id: 'about' },
    h('div', { className: 'section-grid' },
      h('p', { className: 'section-kicker' }, '01 / About'),
      h('div', { className: 'about-content' },
        h('h2', null, 'Software should feel ', h('em', null, 'clear.')),
        h('p', { className: 'large-copy' }, 'I like turning big, messy problems into small, dependable experiences. My work moves between low-level systems and friendly interfaces — always with a focus on clarity, speed and people who are learning.'),
        A({ className: 'under-link', href: 'https://www.linkedin.com/in/arkar-yan-6128a0291', target: '_blank', rel: 'noreferrer' }, 'More about my journey ', h(Arrow))
      )
    ),
    h('div', { className: 'principles' }, principles.map(([num, text]) => h('div', { key: num }, h('strong', null, num), h('span', null, text))))
  );
}

function ProjectCard({ project, index }) {
  return A({ className: 'project-card project-' + project.tone, href: project.href, target: '_blank', rel: 'noreferrer' }, h('div', { className: 'project-top' }, h('span', null, '0' + (index + 1)), h('span', null, project.type)), h('div', { className: 'project-mark' }, project.mark), h('div', { className: 'project-info' }, h('h3', null, project.name), h('p', null, project.description), h('div', { className: 'project-bottom' }, h('span', null, project.tech), h(Arrow))));
}
function Work() {
  return h('section', { className: 'work section', id: 'work' }, h('div', { className: 'section-intro' }, h('div', null, h('p', { className: 'section-kicker' }, '02 / Selected work'), h('h2', null, 'Built in the', h('br'), h('em', null, 'real world.'))), h('p', { className: 'section-note' }, 'A few open-source projects, products and experiments from the desk.')), h('div', { className: 'projects-grid' }, projects.map((project, index) => h(ProjectCard, { key: project.name, project, index }))), A({ className: 'all-work', href: 'https://github.com/hidecard?tab=repositories', target: '_blank', rel: 'noreferrer' }, 'View all repositories ', h(Arrow)));
}
function Journey() {
  return h('section', { className: 'journey section', id: 'journey' },
    h('div', { className: 'section-intro' },
      h('div', null, h('p', { className: 'section-kicker' }, '03 / Journey'), h('h2', null, 'Always', h('br'), h('em', null, 'learning.'))),
      h('p', { className: 'section-note' }, 'Teaching keeps me honest. Building keeps me curious.')
    ),
    h('div', { className: 'timeline' }, experience.map(([date, role, company]) => h('div', { className: 'timeline-row', key: role }, h('time', null, date), h('div', null, h('h3', null, role), h('p', null, company)), h(Arrow))))
  );
}
function Contact() {
  const links = [['GitHub', 'https://github.com/hidecard'], ['LinkedIn', 'https://www.linkedin.com/in/arkar-yan-6128a0291'], ['X / Twitter', 'https://x.com/hidecard969']];
  return h('section', { className: 'contact section', id: 'contact' }, h('div', { className: 'contact-grid' }, h('div', null, h('p', { className: 'section-kicker' }, '04 / Say hello'), h('h2', null, 'Have a good', h('br'), h('em', null, 'idea?')), h('p', { className: 'contact-copy' }, 'I’m always interested in thoughtful products, open-source ideas and conversations about teaching technology.'), h('a', { className: 'pill-link light', href: 'mailto:info@arkaryan.net' }, 'Start a conversation ', h(Arrow))), h('div', { className: 'contact-details' }, h('span', null, 'Find me online'), h('a', { href: 'mailto:info@arkaryan.net' }, 'info@arkaryan.net'), ...links.map(([name, href]) => A({ key: name, href, target: '_blank', rel: 'noreferrer' }, name, h(Arrow))))));
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.title = 'Arkar Yan — Developer & Builder'; }, []);
  return h(React.Fragment, null, h(Header, { menuOpen, setMenuOpen }), h('main', null, h(Hero), h(About), h(Work), h(Journey), h(Contact)), h('footer', { className: 'footer' }, h('span', null, 'AY / ARKAR YAN'), h('span', null, '© ' + new Date().getFullYear() + ' — Made in Yangon'), h('a', { href: '#top' }, 'Back to top ↑')));
}
ReactDOM.createRoot(document.getElementById('root')).render(h(App));
