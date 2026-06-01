/* siteB.jsx — Direction B · Modern startup. Space Grotesk + IBM Plex Mono
   labels, card grid, subtle gray panels. Black & white. */

(function () {
  if (document.getElementById('siteB-css')) return;
  const s = document.createElement('style');
  s.id = 'siteB-css';
  s.textContent = `
  .B{--ink:#0c0d0e;--paper:#ffffff;--panel:#f4f4f3;--mut:#71726f;--line:#e4e4e1;
     background:var(--paper);color:var(--ink);font-family:'IBM Plex Sans',sans-serif;
     width:1280px;position:relative;}
  .B *{box-sizing:border-box;}
  .B .gk{font-family:'Space Grotesk',sans-serif;}
  .B .mono{font-family:'IBM Plex Mono',monospace;}
  .B .tag{font-family:'IBM Plex Mono',monospace;font-size:11px;letter-spacing:.04em;
     text-transform:uppercase;color:var(--mut);}
  .B a{color:inherit;text-decoration:none;}
  .B .nl{font-size:14px;transition:color .15s;}
  .B .nl:hover{color:var(--mut);}
  .B .btn{display:inline-flex;align-items:center;gap:9px;background:var(--ink);color:#fff;
     padding:13px 20px;font-size:14px;font-weight:500;border:none;cursor:pointer;border-radius:8px;
     font-family:'Space Grotesk',sans-serif;transition:transform .15s,opacity .15s;}
  .B .btn:hover{opacity:.88;transform:translateY(-1px);}
  .B .btn.ghost{background:transparent;color:var(--ink);border:1px solid var(--line);}
  .B .card{border:1px solid var(--line);border-radius:14px;padding:26px;cursor:pointer;
     background:#fff;transition:border-color .2s,transform .2s,box-shadow .2s;}
  .B .card:hover{border-color:var(--ink);transform:translateY(-3px);box-shadow:0 12px 30px rgba(0,0,0,.06);}
  .B .card:hover .ar{transform:translate(3px,-3px);}
  .B .ar{transition:transform .2s;}
  .B .chip{width:46px;height:46px;border:1px solid var(--line);border-radius:10px;
     display:flex;align-items:center;justify-content:center;}
  .B .field{flex:1;border:1px solid var(--line);border-radius:8px;background:#fff;padding:13px 15px;
     font-family:inherit;font-size:14px;color:var(--ink);}
  .B .field::placeholder{color:var(--mut);}
  `;
  document.head.appendChild(s);
})();

function SiteB() {
  const { IconArrowUR, IconGlobe, ICONS } = window;
  return (
    <div className="B">
      {/* top bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 56px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 30, height: 30, background: 'var(--ink)', borderRadius: 7, display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <IconGlobe size={18} stroke="#fff" sw={1.5} />
          </div>
          <span className="gk" style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-.01em' }}>How&nbsp;to&nbsp;CEO&nbsp;in&nbsp;Korea</span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {SITE.nav.map((n) => <a key={n} className="nl" href="#">{n}</a>)}
          <button className="btn">Get consulting</button>
        </nav>
      </header>

      {/* banner — two column */}
      <section style={{ padding: '56px 56px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'center' }}>
        <div>
          <div className="tag">{BANNER.kicker} — 5 essentials</div>
          <h1 className="gk" style={{ fontSize: 52, lineHeight: 1.04, fontWeight: 600, letterSpacing: '-.02em', margin: '20px 0 0' }}>
            {BANNER.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--mut)', lineHeight: 1.6, margin: '22px 0 30px', maxWidth: 440 }}>{BANNER.dek}</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn">{BANNER.cta} <IconArrowUR size={16} stroke="#fff" /></button>
            <button className="btn ghost">Talk to a consultant</button>
          </div>
        </div>
        <div style={{ background: 'var(--panel)', borderRadius: 16, padding: '10px 28px' }}>
          {BANNER.steps.map((st, i) => (
            <div key={st.n} style={{ display: 'flex', gap: 18, alignItems: 'baseline', padding: '17px 0',
              borderTop: i ? '1px solid var(--line)' : 'none' }}>
              <span className="mono" style={{ fontSize: 13, color: 'var(--mut)' }}>{st.n}</span>
              <div>
                <div className="gk" style={{ fontSize: 17, fontWeight: 600 }}>{st.t}</div>
                <div style={{ fontSize: 13.5, color: 'var(--mut)', lineHeight: 1.5, marginTop: 3 }}>{st.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* articles grid */}
      <section style={{ padding: '8px 56px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 }}>
          <h2 className="gk" style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-.01em' }}>Latest articles</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            {['All', 'Market', 'Policy', 'Funding', 'Visa'].map((t, i) => (
              <span key={t} className="mono" style={{ fontSize: 12, padding: '7px 13px', borderRadius: 20,
                border: '1px solid var(--line)', background: i === 0 ? 'var(--ink)' : '#fff', color: i === 0 ? '#fff' : 'var(--mut)' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {ARTICLES.map((a) => {
            const Icon = ICONS[a.icon];
            return (
              <article key={a.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
                  <div className="chip"><Icon size={22} stroke="var(--ink)" sw={1.4} /></div>
                  <IconArrowUR className="ar" size={20} stroke="var(--ink)" />
                </div>
                <div className="tag" style={{ marginBottom: 10 }}>{a.cat} · {a.read}</div>
                <h3 className="gk" style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.18, letterSpacing: '-.01em' }}>{a.title}</h3>
                <p style={{ fontSize: 14.5, color: 'var(--mut)', lineHeight: 1.55, margin: '12px 0 16px' }}>{a.dek}</p>
                <div className="mono" style={{ fontSize: 12, color: 'var(--mut)' }}>{a.date}</div>
              </article>
            );
          })}
        </div>
      </section>

      {/* newsletter */}
      <section style={{ padding: '56px 56px' }}>
        <div style={{ background: 'var(--ink)', borderRadius: 18, padding: '48px 52px', color: '#fff',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div className="tag" style={{ color: 'rgba(255,255,255,.55)' }}>Newsletter</div>
            <h2 className="gk" style={{ fontSize: 32, fontWeight: 600, margin: '12px 0 10px', letterSpacing: '-.01em' }}>{NEWSLETTER.name}</h2>
            <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.7)', lineHeight: 1.6, maxWidth: 380 }}>{NEWSLETTER.pitch}</p>
          </div>
          <div>
            <div style={{ display: 'flex', gap: 10 }}>
              <input className="field" placeholder={NEWSLETTER.placeholder} style={{ border: 'none' }} />
              <button className="btn" style={{ background: '#fff', color: 'var(--ink)' }}>{NEWSLETTER.cta}</button>
            </div>
            <p className="mono" style={{ fontSize: 11.5, color: 'rgba(255,255,255,.5)', marginTop: 12 }}>4,200+ founders · every Tuesday</p>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer style={{ borderTop: '1px solid var(--line)', padding: '40px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ maxWidth: 300 }}>
          <span className="gk" style={{ fontWeight: 600, fontSize: 15 }}>How to CEO in Korea</span>
          <p style={{ fontSize: 12.5, color: 'var(--mut)', marginTop: 10, lineHeight: 1.5 }}>{SITE.cert}</p>
        </div>
        <div style={{ display: 'flex', gap: 56 }}>
          {[['Read', ['Articles', 'Market', 'Policy', 'Funding']], ['Company', ['About', 'Consulting', 'Contact', 'Privacy']]].map(([h, items]) => (
            <div key={h}>
              <div className="tag" style={{ marginBottom: 14 }}>{h}</div>
              {items.map((i) => <a key={i} href="#" className="nl" style={{ display: 'block', marginBottom: 9, fontSize: 13.5 }}>{i}</a>)}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

window.SiteB = SiteB;
