/* icons.jsx — minimal line icons (basic shapes only) shared across directions.
   Each takes { size, stroke, sw } and renders a 24-box line glyph. */

function Ic({ d, size = 22, stroke = 'currentColor', sw = 1.4, children, fill = 'none', box = 24 }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${box} ${box}`} fill={fill}
      stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block', flexShrink: 0 }}>
      {d ? <path d={d} /> : children}
    </svg>
  );
}

// Economy / market — trend line
const IconTrend = (p) => (
  <Ic {...p}><polyline points="3 16 9 10 13 13 21 5" /><polyline points="15 5 21 5 21 11" /></Ic>
);
// Policy — document with lines
const IconPolicy = (p) => (
  <Ic {...p}><rect x="5" y="3" width="14" height="18" rx="1" /><line x1="8" y1="8" x2="16" y2="8" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="8" y1="16" x2="13" y2="16" /></Ic>
);
// Business — storefront
const IconBiz = (p) => (
  <Ic {...p}><path d="M4 9l1.2-4h13.6L20 9" /><path d="M4 9v10h16V9" /><rect x="9" y="13" width="6" height="6" /></Ic>
);
// Operations / paperwork — clipboard check
const IconOps = (p) => (
  <Ic {...p}><rect x="5" y="4" width="14" height="17" rx="1" /><path d="M9 4h6v3H9z" /><polyline points="8.5 13 11 15.5 16 10" /></Ic>
);
// Visa — id card
const IconVisa = (p) => (
  <Ic {...p}><rect x="3" y="6" width="18" height="12" rx="1.5" /><circle cx="8" cy="11" r="2" /><line x1="13" y1="10" x2="18" y2="10" /><line x1="13" y1="13.5" x2="17" y2="13.5" /></Ic>
);
// Funding — coin stack
const IconFund = (p) => (
  <Ic {...p}><ellipse cx="12" cy="6" rx="7" ry="2.6" /><path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" /><path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" /></Ic>
);
// Arrow — right
const IconArrow = (p) => (
  <Ic {...p}><line x1="4" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></Ic>
);
// Arrow up-right (diagonal)
const IconArrowUR = (p) => (
  <Ic {...p}><line x1="6" y1="18" x2="18" y2="6" /><polyline points="8 6 18 6 18 16" /></Ic>
);
// Globe (mark)
const IconGlobe = (p) => (
  <Ic {...p}><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><line x1="3" y1="12" x2="21" y2="12" /></Ic>
);

const ICONS = { market: IconTrend, policy: IconPolicy, biz: IconBiz, ops: IconOps, visa: IconVisa, fund: IconFund };

Object.assign(window, {
  Ic, IconTrend, IconPolicy, IconBiz, IconOps, IconVisa, IconFund,
  IconArrow, IconArrowUR, IconGlobe, ICONS,
});
