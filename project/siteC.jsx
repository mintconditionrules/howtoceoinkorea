/* siteC.jsx — Direction C · Bold graphic. Oversized Archivo, Space Mono
   labels, high-contrast black banner, numbered index table. Black & white. */

(function () {
  if (document.getElementById('siteC-css')) return;
  const s = document.createElement('style');
  s.id = 'siteC-css';
  s.textContent = `
  .C{--ink:#0a0a0a;--paper:#f4f2ee;--mut:#79756d;--line:rgba(10,10,10,.16);
     background:var(--paper);color:var(--ink);font-family:'Archivo',sans-serif;
     width:1280px;position:relative;}
  .C *{box-sizing:border-box;}
  .C .mono{font-family:'Space Mono',monospace;}
  .C .lbl{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;}
  .C a{color:inherit;text-decoration:none;}
  .C .nl{font-family:'Space Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:.04em;
     transition:opacity .15s;}
  .C .nl:hover{opacity:.5;}
  .C .btn{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:var(--paper);
     padding:16px 26px;font-size:14px;font-weight:700;border:none;cursor:pointer;
     text-transform:uppercase;letter-spacing:.03em;transition:opacity .15s;}
  .C .btn:hover{opacity:.85;}
  .C .btn.inv{background:var(--paper);color:var(--ink);}
  .C .irow{display:grid;grid-template-columns:78px 1fr 150px 56px;gap:24px;align-items:center;
     padding:30px 0;border-top:1px solid var(--line);cursor:pointer;transition:padding .2s,background .2s;}
  .C .irow:hover{background:var(--ink);color:var(--paper);padding-left:24px;padding-right:24px;}
  .C .irow:hover .imut{color:rgba(244,242,238,.6);}
  .C .irow:hover .iarr{transform:translateX(5px);}
  .C .iarr{transition:transform .2s;justify-self:end;}
  .C .imut{color:var(--mut);transition:color .2s;}
  .C .field{flex:1;border:2px solid var(--paper);background:transparent;padding:15px 16px;
     font-family:'Space Mono',monospace;font-size:14px;color:var(--paper);}
  .C .field::placeholder{color:rgba(244,242,238,.5);}
  `;
  document.head.appendChild(s);
})();

function SiteC() {
  const { IconArrow, ICONS } = window;
  return (
    <div className="C">
      {/* top bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '22px 52px', borderBottom: '2px solid var(--ink)' }}>
        <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.02em', textTransform: 'uppercase' }}>How&nbsp;to&nbsp;CEO&nbsp;in&nbsp;Korea</span>
        <nav style={{ display: 'flex', gap: 26 }}>
          {SITE.nav.map((n) => <a key={n} className="nl" href="#">{n}</a>)}
        </nav>
      </header>

      {/* banner — black full-bleed */}
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '60px 52px 54px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="lbl" style={{ color: 'rgba(244,242,238,.6)' }}>{BANNER.kicker} / Operations</div>
          <div className="lbl" style={{ color: 'rgba(244,242,238,.6)' }}>2026 edition</div>
        </div>
        <h1 style={{ fontSize: 78, lineHeight: 0.98, fontWeight: 800, letterSpacing: '-.035em', margin: '26px 0 0', maxWidth: 1000 }}>
          5 things you need<br />to know before you<br />start a company<br />in Korea.
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 40 }}>
          <p style={{ fontSize: 17, color: 'rgba(244,242,238,.72)', lineHeight: 1.55, maxWidth: 440 }}>{BANNER.dek}</p>
          <button className="btn inv">{BANNER.cta} <IconArrow size={17} stroke="var(--ink)" /></button>
        </div>
        {/* numbered strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, marginTop: 52,
          borderTop: '1px solid rgba(244,242,238,.2)' }}>
          {BANNER.steps.map((st, i) => (
            <div key={st.n} style={{ padding: '24px 22px 4px 0', borderLeft: i ? '1px solid rgba(244,242,238,.2)' : 'none',
              paddingLeft: i ? 22 : 0 }}>
              <div className="mono" style={{ fontSize: 13, color: 'rgba(244,242,238,.5)' }}>{st.n}</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 12, lineHeight: 1.15 }}>{st.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* article index */}
      <section style={{ padding: '56px 52px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', textTransform: 'uppercase' }}>The Index</h2>
          <span className="lbl imut">{ARTICLES.length} articles · updated weekly</span>
        </div>
        <div style={{ borderBottom: '1px solid var(--line)' }}>
          {ARTICLES.map((a, i) => {
            const Icon = ICONS[a.icon];
            return (
              <article key={a.id} className="irow">
                <div className="mono imut" style={{ fontSize: 15 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <Icon size={26} stroke="currentColor" sw={1.5} />
                  <div>
                    <h3 style={{ fontSize: 25, fontWeight: 700, letterSpacing: '-.015em', lineHeight: 1.12 }}>{a.title}</h3>
                    <p className="imut" style={{ fontSize: 14, lineHeight: 1.5, marginTop: 6, maxWidth: 580 }}>{a.dek}</p>
                  </div>
                </div>
                <div className="lbl imut" style={{ justifySelf: 'start' }}>{a.cat} · {a.read}</div>
                <IconArrow className="iarr" size={22} stroke="currentColor" />
              </article>
            );
          })}
        </div>
      </section>

      {/* newsletter — black band */}
      <section style={{ background: 'var(--ink)', color: 'var(--paper)', margin: '40px 0 0', padding: '56px 52px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48 }}>
          <div style={{ maxWidth: 560 }}>
            <div className="lbl" style={{ color: 'rgba(244,242,238,.55)' }}>Newsletter — {NEWSLETTER.name}</div>
            <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-.025em', margin: '14px 0 14px', lineHeight: 1 }}>
              One email. Every Tuesday.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(244,242,238,.7)', lineHeight: 1.55, maxWidth: 420 }}>{NEWSLETTER.pitch}</p>
          </div>
          <div style={{ width: 380, flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 0 }}>
              <input className="field" placeholder={NEWSLETTER.placeholder} />
              <button className="btn inv" style={{ borderRadius: 0 }}>{NEWSLETTER.cta}</button>
            </div>
            <p className="mono" style={{ fontSize: 11.5, color: 'rgba(244,242,238,.5)', marginTop: 14 }}>4,200+ founders. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer style={{ padding: '40px 52px 46px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 20, textTransform: 'uppercase', letterSpacing: '-.02em' }}>How to CEO in Korea</div>
          <p className="mono" style={{ fontSize: 11.5, color: 'var(--mut)', marginTop: 12, maxWidth: 340, lineHeight: 1.6 }}>{SITE.cert}</p>
        </div>
        <div style={{ display: 'flex', gap: 44 }}>
          {[['Read', ['Articles', 'Market', 'Policy', 'Funding']], ['Company', ['About', 'Consulting', 'Contact', 'Privacy']]].map(([h, items]) => (
            <div key={h}>
              <div className="lbl imut" style={{ marginBottom: 14 }}>{h}</div>
              {items.map((i) => <a key={i} href="#" className="nl" style={{ display: 'block', marginBottom: 10 }}>{i}</a>)}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

window.SiteC = SiteC;
