/* siteA.jsx — Editorial, centered single column. Image banner, circular RSS
   thumbnails, hashtag + date below summary. Rendered directly as the page. */

(function () {
  if (document.getElementById('siteA-css')) return;
  const s = document.createElement('style');
  s.id = 'siteA-css';
  s.textContent = `
  .A{--ink:#15120d;--paper:#fbfbf9;--mut:#6c675e;--hair:rgba(20,16,10,.14);
     background:var(--paper);color:var(--ink);font-family:'Public Sans',sans-serif;
     width:100%;min-height:100%;position:relative;container-type:inline-size;container-name:a;}
  .A *{box-sizing:border-box;}
  .A .serif{font-family:'Newsreader',Georgia,'Times New Roman',serif;}
  .A .lbl{font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:600;}
  .A a{color:inherit;text-decoration:none;}

  .A .wrap{max-width:700px;margin:0 auto;padding:0 28px;}

  /* masthead — brand (no spaces) + Learn more | Contact */
  .A .mast{text-align:center;padding:58px 28px 34px;}
  .A .nameplate{font-size:40px;font-weight:500;letter-spacing:-.01em;line-height:1;}
  .A .nameplate .com{color:var(--mut);font-style:normal;}
  .A .tagline{font-size:18px;color:var(--mut);line-height:1.45;margin:16px auto 0;max-width:430px;}
  .A .byline{font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:var(--mut);margin-top:16px;}
  .A .mast-links{display:flex;justify-content:center;align-items:center;gap:18px;margin-top:18px;}
  .A .mast-links a{font-size:13.5px;color:var(--mut);transition:color .15s;white-space:nowrap;}
  .A .mast-links a:hover{color:var(--ink);}
  .A .mast-links .sep{color:var(--hair);font-size:13px;}

  /* banner — wide rectangle with image + overlaid title */
  .A .bannerwrap{padding:0 0 52px;}
  .A .banner{position:relative;height:340px;overflow:hidden;}
  .A .banner-img{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;}
  .A .banner-scrim{position:absolute;inset:0;pointer-events:none;
     background:linear-gradient(180deg,rgba(10,8,5,0) 28%,rgba(10,8,5,.62) 100%);}
  .A .banner-h1{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:40px;
     color:#fff;font-size:38px;line-height:1.1;font-weight:500;letter-spacing:-.012em;max-width:640px;
     text-shadow:0 1px 30px rgba(0,0,0,.3);}

  /* article list — circular thumbnail · hashtag + date after summary */
  .A .posts{border-bottom:1px solid var(--hair);}
  .A .post{display:flex;gap:24px;align-items:flex-start;padding:30px 0;
     border-top:1px solid var(--hair);cursor:pointer;transition:background .2s;}
  .A .post:hover{background:rgba(20,16,10,.025);}
  .A .post:hover .post-ttl{text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px;}
  .A .thumb{width:88px;height:88px;flex-shrink:0;border-radius:50%;background:#ecebe6;
     display:flex;align-items:center;justify-content:center;overflow:hidden;}
  .A .thumb img{width:100%;height:100%;object-fit:cover;display:block;}
  .A .post-body{flex:1;min-width:0;}
  .A .post-ttl{font-size:24px;font-weight:500;line-height:1.2;letter-spacing:-.01em;}
  .A .post-summary{font-size:15px;color:var(--mut);line-height:1.55;margin-top:8px;}
  .A .post-meta{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin-top:14px;}
  .A .tag{font-size:13px;font-weight:600;color:var(--ink);}
  .A .post-date{font-size:12.5px;color:var(--mut);}
  .A .dot{width:3px;height:3px;border-radius:50%;background:var(--hair);}

  /* newsletter — centered */
  .A .news{text-align:center;padding:66px 0 8px;}
  .A .news-h{font-size:34px;font-weight:500;margin:12px 0 12px;line-height:1.1;}
  .A .news-pitch{font-size:16px;color:var(--mut);line-height:1.6;max-width:440px;margin:0 auto;}
  .A .news-form{display:flex;gap:12px;max-width:460px;margin:26px auto 0;}
  .A .field{flex:1;min-width:0;border:1px solid var(--hair);background:transparent;padding:14px 16px;
     font-family:inherit;font-size:14px;color:var(--ink);text-align:center;}
  .A .field::placeholder{color:var(--mut);}
  .A .cta{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--ink);
     color:var(--paper);padding:14px 26px;font-size:14px;font-weight:600;border:none;cursor:pointer;
     white-space:nowrap;transition:opacity .15s;}
  .A .cta:hover{opacity:.82;}
  .A .news-fine{font-size:12.5px;color:var(--mut);margin-top:16px;}

  /* footer — centered */
  .A .foot{border-top:1px solid var(--ink);margin-top:62px;padding:40px 0 56px;text-align:center;}
  .A .foot-brand{font-size:22px;font-weight:500;margin-bottom:8px;}
  .A .foot-role{font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:var(--mut);margin-bottom:22px;}
  .A .foot-cert{font-size:12.5px;color:var(--mut);margin:12px auto 22px;max-width:340px;line-height:1.5;}
  .A .foot-links{display:flex;justify-content:center;flex-wrap:wrap;gap:14px 26px;}
  .A .foot-links a{font-size:13px;color:var(--mut);transition:color .15s;white-space:nowrap;}
  .A .foot-links a:hover{color:var(--ink);}

  /* mobile */
  @container a (max-width: 560px){
    .A .wrap{padding:0 20px;}
    .A .mast{padding:36px 20px 24px;}
    .A .nameplate{font-size:30px;}
    .A .tagline{font-size:15.5px;margin-top:13px;}
    .A .byline{margin-top:13px;}
    .A .bannerwrap{padding:0 0 34px;}
    .A .banner{height:210px;}
    .A .banner-h1{font-size:25px;padding:24px;}
    .A .post{gap:16px;padding:24px 0;}
    .A .thumb{width:64px;height:64px;}
    .A .post-ttl{font-size:19px;}
    .A .post-summary{font-size:14px;}
    .A .news{padding:46px 0 4px;}
    .A .news-h{font-size:27px;}
    .A .news-form{flex-direction:column;}
    .A .foot{margin-top:42px;padding:34px 0 44px;}
  }
  `;
  document.head.appendChild(s);
})();

function SiteA() {
  const PHOTO = {
    banner: 'https://loremflickr.com/1600/680/seoul,skyline,city?lock=12',
    market: { p: 'https://loremflickr.com/480/480/seoul,finance?lock=21', f: 'https://picsum.photos/seed/ceokr-market/480' },
    policy: { p: 'https://loremflickr.com/480/480/korea,government?lock=22', f: 'https://picsum.photos/seed/ceokr-policy/480' },
    biz: { p: 'https://loremflickr.com/480/480/seoul,business?lock=23', f: 'https://picsum.photos/seed/ceokr-biz/480' },
    ops: { p: 'https://loremflickr.com/480/480/office,documents?lock=24', f: 'https://picsum.photos/seed/ceokr-ops/480' },
    visa: { p: 'https://loremflickr.com/480/480/passport,airport?lock=25', f: 'https://picsum.photos/seed/ceokr-visa/480' },
    fund: { p: 'https://loremflickr.com/480/480/money,finance?lock=26', f: 'https://picsum.photos/seed/ceokr-fund/480' }
  };
  const onImgErr = (e) => {const t = e.target;if (!t.dataset.fb) {t.dataset.fb = '1';t.src = t.dataset.fallback;}};
  return (
    <div className="A">
      <div className="wrap">
        {/* masthead — brand (no spaces) + links */}
        <header className="mast">
          <div className="nameplate serif">
            Howto<span>CEO</span>inKorea<span className="com"></span>
          </div>
          <p className="tagline serif">{SITE.tagline}</p>
          <div className="byline">{SITE.byline}</div>
          <nav className="mast-links">
            <a href="#">Learn more</a>
            <span className="sep">|</span>
            <a href="#">Contact</a>
          </nav>
        </header>

        {/* banner — image + overlaid title */}
        <section className="bannerwrap">
          <div className="banner">
            <img className="banner-img" src={PHOTO.banner}
            data-fallback="https://picsum.photos/seed/ceokr-banner/1600/680" onError={onImgErr} alt="" />
            <div className="banner-scrim"></div>
            <h1 className="banner-h1 serif">{BANNER.title}</h1>
          </div>
        </section>

        {/* article list — pulled from Medium RSS (circular thumbnails) */}
        <section className="posts">
          {ARTICLES.map((a) => {
            return (
              <article key={a.id} className="post">
                <div className="thumb"><img src={PHOTO[a.id].p} data-fallback={PHOTO[a.id].f} onError={onImgErr} alt="" /></div>
                <div className="post-body">
                  <h3 className="post-ttl serif">{a.title}</h3>
                  <p className="post-summary">{a.dek}</p>
                  <div className="post-meta">
                    <span className="tag">{`#${a.cat}`}</span>
                    <span className="dot"></span>
                    <span className="post-date">{a.date}</span>
                  </div>
                </div>
              </article>);

          })}
        </section>

        {/* newsletter — collect subscribers */}
        <section className="news">
          <div className="lbl" style={{ color: 'var(--mut)' }}>Newsletter</div>
          <h2 className="news-h serif">{NEWSLETTER.name}</h2>
          <div className="news-form">
            <input className="field" placeholder={NEWSLETTER.placeholder} />
            <button className="cta">{NEWSLETTER.cta}</button>
          </div>
          <p className="news-fine">No spam — just insightful emails when there's something worth sending.</p>
        </section>

        {/* footer */}
        <footer className="foot">
          <div className="foot-brand serif">HowtoCEOinKorea</div>
          <div className="foot-role">{SITE.byline}</div>
          <nav className="foot-links">
            {['Learn more', 'Contact', 'Privacy'].map((i) => <a key={i} href="#">{i}</a>)}
          </nav>
        </footer>
      </div>
    </div>);

}

window.SiteA = SiteA;