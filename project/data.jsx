/* data.jsx — shared site content for all three directions. */

const SITE = {
  name: 'How to CEO in Korea',
  domain: 'howtoceoinkorea.com',
  tagline: 'The ultimate guide to founding, funding, and running a company in Korea.',
  byline: 'Written by a certified business advisor',
  cert: 'Certified market consulting — supported by Korean government budget.',
  nav: ['Articles', 'Market', 'Policy', 'Consulting', 'About'],
};

// The main banner — an operation / starter guide.
const BANNER = {
  kicker: 'Starter guide',
  title: 'Five things you need to know before you start a company in Korea',
  dek: 'From incorporation paperwork to the visa that lets you sign it — the essentials, in plain English, before you commit a single won.',
  cta: 'Read the guide',
  steps: [
    { n: '01', t: 'Pick the right entity', d: 'Yuhan-hoesa vs. Jusik-hoesa — and why it matters for foreign capital.' },
    { n: '02', t: 'Secure a founder visa', d: 'The D-8 startup track, minimum capital, and the paperwork order.' },
    { n: '03', t: 'Open a corporate account', d: 'Why this is the step most foreign founders underestimate.' },
    { n: '04', t: 'Register for tax & NPS', d: 'National Tax Service, four social insurances, and your first filings.' },
    { n: '05', t: 'Find non-dilutive money', d: 'Government grants and R&D budgets open to foreign-led companies.' },
  ],
};

const ARTICLES = [
  { id: 'market', cat: 'Market', icon: 'market', read: '6 min',
    title: 'The economic trends quietly reshaping Korea in 2026',
    dek: 'Slower growth, an aging workforce, and a won that won\u2019t sit still — what they mean for anyone deploying capital here.',
    date: 'May 28, 2026' },
  { id: 'policy', cat: 'Policy', icon: 'policy', read: '9 min',
    title: 'Korea vs. Japan: how startup policy actually differs',
    dek: 'Two neighbours, two playbooks. A side-by-side on grants, visas, and the appetite for foreign founders.',
    date: 'May 21, 2026' },
  { id: 'biz', cat: 'Operations', icon: 'biz', read: '7 min',
    title: 'The businesses foreigners actually succeed at in Korea',
    dek: 'Where outsider perspective is an edge — and the sectors where it quietly works against you.',
    date: 'May 14, 2026' },
  { id: 'ops', cat: 'Operations', icon: 'ops', read: '5 min',
    title: 'A founder\u2019s guide to Korea\u2019s incorporation paperwork',
    dek: 'The forms, the order, the stamps. A walk-through of the week that turns an idea into a legal entity.',
    date: 'May 7, 2026' },
  { id: 'visa', cat: 'Visa', icon: 'visa', read: '8 min',
    title: 'Visa routes for foreign CEOs: D-8, D-9 and the road to F-5',
    dek: 'Which status lets you run the company, which lets you stay, and how the two finally meet.',
    date: 'Apr 30, 2026' },
  { id: 'fund', cat: 'Funding', icon: 'fund', read: '6 min',
    title: 'Understanding Korea\u2019s government grants and R&D budgets',
    dek: 'Billions are allocated each year. A map of which programs a foreign-led company can realistically reach.',
    date: 'Apr 23, 2026' },
];

const NEWSLETTER = {
  name: 'The Seoul Brief',
  pitch: 'One practical email a week on building and running a company in Korea. No fluff, no spam.',
  placeholder: 'you@company.com',
  cta: 'Subscribe',
};

Object.assign(window, { SITE, BANNER, ARTICLES, NEWSLETTER });
