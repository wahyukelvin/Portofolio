'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { DATA as D } from '../lib/data';

/* ---------------- Ikon ---------------- */
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const Ic = {
  download: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 3v12" /><path d="m7 11 5 5 5-5" /><path d="M4 20h16" /></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7.5 9 6 9-6" /></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v4a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 3 5.2 2 2 0 0 1 5 3z" /></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>,
  arrow: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>,
  left: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></svg>,
  up: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></svg>,
  ext: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></svg>,
  link: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></svg>,
  menu: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>,
  close: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="m6 6 12 12" /><path d="M18 6 6 18" /></svg>,
  sun: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" /></svg>,
  moon: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" /></svg>,
  star: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z" /></svg>,
  cap: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="m12 4 10 5-10 5L2 9z" /><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" /></svg>,
  spark: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>,
  users: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="9" cy="8" r="3.4" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 5.2a3.4 3.4 0 0 1 0 6.6" /><path d="M18 14.4A6.5 6.5 0 0 1 21.5 20" /></svg>,
  megaphone: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 10v4a2 2 0 0 0 2 2h2l8 4V4L8 8H6a2 2 0 0 0-2 2z" /><path d="M19 9a3.5 3.5 0 0 1 0 6" /></svg>,
  map: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="m9 4 6 2.5L21 4v14l-6 2.5L9 18l-6 2.5V6z" /><path d="M9 4v14M15 6.5v14" /></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" /></svg>,
  book: (p) => <svg viewBox="0 0 24 24" {...s} {...p}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5A2.5 2.5 0 0 1 4 20.5z" /></svg>,
  linkedin: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2.01 0-2.32 1.57-2.32 3.2V21H9z" /></svg>,
  github: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>,
};

const GRAD = [
  'linear-gradient(140deg,#2563eb,#6aa3ff)',
  'linear-gradient(140deg,#1746a2,#4f8cf5)',
  'linear-gradient(140deg,#f5a524,#ffd76a)',
  'linear-gradient(140deg,#0e7490,#3fc0d8)',
  'linear-gradient(140deg,#4338ca,#8b8ff5)',
  'linear-gradient(140deg,#b45309,#ffc93c)',
];

/* ---------------- Potongan kecil ---------------- */
const Photo = ({ src, alt, className }) =>
  src ? <img className={className} src={src} alt={alt} loading="lazy" />
      : <div className={className + ' ph'}>Slot foto<br />{alt}</div>;

const Ticks = ({ items }) => <ul className="ticks">{items.map((t, i) => <li key={i}>{t}</li>)}</ul>;
const Tags = ({ items }) => !items?.length ? null : <div className="tags">{items.map((t, i) => <span className="tag" key={i}>{t}</span>)}</div>;

const SecHead = ({ eyebrow, title, sub }) => (
  <div className="sec-head rv">
    <span className="eyebrow"><Ic.spark style={{ width: 13, height: 13 }} />{eyebrow}</span>
    <h2>{title}</h2>
    {sub && <p>{sub}</p>}
  </div>
);

const pad = (n) => String(n).padStart(2, '0');

/* Baris yang bisa digeser (carousel & timeline organisasi) */
function useRow() {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 2 });
  }, []);
  useEffect(() => { sync(); }, [sync]);
  const move = (dir) => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 18 : 300;
    el.scrollBy({ left: step * dir, behavior: 'smooth' });
  };
  return { ref, edge, sync, move };
}

const RowCtl = ({ row }) => (
  <div className="rowctl rv">
    <button className="iconbtn" aria-label="Geser ke kiri" disabled={row.edge.start} onClick={() => row.move(-1)}><Ic.left /></button>
    <button className="iconbtn" aria-label="Geser ke kanan" disabled={row.edge.end} onClick={() => row.move(1)}><Ic.arrow /></button>
  </div>
);

const Records = ({ id, eyebrow, title, sub, list, kind, row, onOpen }) => (
  <section id={id}>
    <div className="sec-top">
      <SecHead eyebrow={eyebrow} title={title} sub={sub} />
      <RowCtl row={row} />
    </div>
    <div className="railrow" ref={row.ref} onScroll={row.sync}>
      {list.map((c, i) => (
        <button className="record rv" key={c.title} onClick={() => onOpen({ kind, index: i })}>
          {c.img ? <img className="rec-img" src={c.img} alt={c.title} loading="lazy" /> : <div className="rec-img ph">Slot foto</div>}
          <div className="rec-body">
            <span className="rec-date">{c.date}</span>
            <h3>{c.title}</h3>
            <span className="rec-sub">{c.issuer}</span>
            <span className="rec-more">Lihat detail <Ic.arrow /></span>
          </div>
        </button>
      ))}
    </div>
  </section>
);

/* Kartu tautan untuk proyek & publikasi */
const LinkCard = ({ item, index, kindLabel }) => {
  const kind = item.kind || kindLabel;
  const url = item.link || item.linkLabel || 'Tautan menyusul';
  const inner = (
    <>
      <div className="lc-label"><span><Ic.link />Link</span><span>{item.year}</span></div>
      <div className="lc-media">
        {item.preview
          ? <img src={item.preview} alt={item.title} loading="lazy" />
          : <div className="lc-fallback" style={{ background: GRAD[index % GRAD.length] }}>
              <span><b>{item.title}</b><small>{kind}</small></span>
            </div>}
      </div>
      <div className="lc-body">
        <span className="lc-title">{kind.toUpperCase()}</span>
        <span className="lc-url">{url}</span>
        <p className="lc-desc">{item.title}</p>
        <p className="lc-note">{item.desc}</p>
        {item.stack && <div className="lc-tags">{item.stack.map((t) => <span className="tag" key={t}>{t}</span>)}</div>}
      </div>
    </>
  );
  return item.link
    ? <a className="linkcard rv" href={item.link} target="_blank" rel="noopener noreferrer">{inner}</a>
    : <div className="linkcard rv">{inner}</div>;
};

/* ---------------- Halaman ---------------- */
export default function Portfolio() {
  const p = D.profile;
  const [theme, setTheme] = useState('light');
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState(0);
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState('');
  const [showTop, setShowTop] = useState(false);
  const [typed, setTyped] = useState('');
  const barRef = useRef(null);
  const toastT = useRef(null);

  const orgRow = useRow();
  const certRow = useRow();
  const achRow = useRow();

  /* Tema */
  useEffect(() => {
    const saved = (() => { try { return localStorage.getItem('wks-theme'); } catch { return null; } })();
    setTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('wks-theme', theme); } catch {}
  }, [theme]);

  /* Mesin ketik */
  useEffect(() => {
    const words = p.typed?.length ? p.typed : p.roles;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTyped(words[0]); return; }
    let w = 0, c = 0, del = false, timer;
    const step = () => {
      const word = words[w];
      c += del ? -1 : 1;
      setTyped(word.slice(0, c));
      let wait = del ? 34 : 62;
      if (!del && c === word.length) { del = true; wait = 1500; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; wait = 260; }
      timer = setTimeout(step, wait);
    };
    timer = setTimeout(step, 400);
    return () => clearTimeout(timer);
  }, [p]);

  /* Reveal, progress bar, scrollspy, progress baca */
    /* Reveal, progress bar, scrollspy, progress baca */
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        en.target.querySelectorAll('[data-bar]').forEach((b) => { b.style.width = b.dataset.bar + '%'; });
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

    const revealVisible = () => {
      document.querySelectorAll('.rv:not(.in)').forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          n.classList.add('in');
          n.querySelectorAll('[data-bar]').forEach((b) => { b.style.width = b.dataset.bar + '%'; });
        }
      });
    };

    document.querySelectorAll('.rv').forEach((n) => io.observe(n));
    revealVisible();
    const t1 = setTimeout(revealVisible, 100);
    const t2 = setTimeout(revealVisible, 300);
    const t3 = setTimeout(revealVisible, 800);
    const t4 = setTimeout(revealVisible, 1500);
    window.addEventListener('load', revealVisible);

    const links = Array.from(document.querySelectorAll('.rail-nav a'));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        links.forEach((a) => a.setAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id ? 'true' : 'false'));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section[id]').forEach((sec) => spy.observe(sec));

    const onScroll = () => {
      const h = document.documentElement;
      const pct = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (barRef.current) barRef.current.style.width = (pct * 100).toFixed(2) + '%';
      setShowTop(h.scrollTop > 700);
      revealVisible();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    requestAnimationFrame(() => document.body.classList.add('ready'));
    setTimeout(() => document.documentElement.classList.add('smooth-ready'), 500);

    return () => {
      io.disconnect();
      spy.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', revealVisible);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setModal(null); setMenu(false); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { document.body.style.overflow = modal ? 'hidden' : ''; }, [modal]);

  const say = (msg) => {
    setToast(msg);
    clearTimeout(toastT.current);
    toastT.current = setTimeout(() => setToast(''), 3600);
  };

  const FILES = {
    cv: { href: '/files/CV-Wahyu-Kelvin-Sihite.pdf', name: 'CV - Wahyu Kelvin Sihite.pdf' },
    portfolio: { href: '/files/Portofolio-Wahyu-Kelvin-Sihite.pdf', name: 'Portofolio - Wahyu Kelvin Sihite.pdf' },
  };
  const DownloadBtn = ({ which, variant, children }) => (
    <a className={'btn ' + (variant || '')} href={FILES[which].href} download={FILES[which].name}
       onClick={() => say('Mengunduh ' + FILES[which].name)}>
      <Ic.download />{children}
    </a>
  );

  const modalData = () => {
    if (!modal) return null;
    if (modal.kind === 'exp') {
      const e = D.experience[modal.index];
      return { img: e.img, alt: e.org, date: `${e.when} · ${e.place}`, title: e.role, sub: e.org, body: e.teaser, points: e.points, tags: e.tags };
    }
    if (modal.kind === 'org') {
      const o = D.organizations[modal.index];
      return { img: o.img, alt: o.caption, date: o.year, title: o.title, sub: o.org, body: o.body, points: o.points, chain: o.chain, tags: o.tags };
    }
    const c = (modal.kind === 'cert' ? D.certificates : D.achievements)[modal.index];
    return { img: c.img, alt: c.title, date: c.date, title: c.title, sub: c.issuer, body: c.desc };
  };
  const m = modalData();

  // const Records = ({ id, eyebrow, title, sub, list, kind, row }) => (
  //   <section id={id}>
  //     <div className="sec-top">
  //       <SecHead eyebrow={eyebrow} title={title} sub={sub} />
  //       <RowCtl row={row} />
  //     </div>
  //     <div className="railrow" ref={row.ref} onScroll={row.sync}>
  //       {list.map((c, i) => (
  //         <button className="record rv" key={c.title} onClick={() => setModal({ kind, index: i })}>
  //           {c.img ? <img className="rec-img" src={c.img} alt={c.title} loading="lazy" /> : <div className="rec-img ph">Slot foto</div>}
  //           <div className="rec-body">
  //             <span className="rec-date">{c.date}</span>
  //             <h3>{c.title}</h3>
  //             <span className="rec-sub">{c.issuer}</span>
  //             <span className="rec-more">Lihat detail <Ic.arrow /></span>
  //           </div>
  //         </button>
  //       ))}
  //     </div>
  //   </section>
  // );

  return (
    <>
      <div className="readbar" ref={barRef} />

      <div className="topbar">
        <b>{p.name}</b>
        <div className="tb-actions">
          <button className="iconbtn" aria-label="Ganti tema" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Ic.sun /> : <Ic.moon />}
          </button>
          <button className="iconbtn" aria-label="Buka menu" onClick={() => setMenu(true)}><Ic.menu /></button>
        </div>
      </div>

      <div className="sheet" data-open={String(menu)}>
        <div className="topbar" style={{ position: 'static', border: 0, padding: 0, background: 'none' }}>
          <b>Daftar isi</b>
          <button className="iconbtn" aria-label="Tutup menu" onClick={() => setMenu(false)}><Ic.close /></button>
        </div>
        <ol>
          {D.nav.map(([id, label], i) => (
            <li key={id}><a href={'#' + id} onClick={() => setMenu(false)}><i>{pad(i + 1)}</i>{label}</a></li>
          ))}
        </ol>
      </div>

      <div className="layout">
        <aside className="rail">
          <div className="rail-inner">
            <div className="rail-mark">
              <span className="sigil">{p.initials}</span>
              <span><b>{p.name}</b><span>{p.headline}</span></span>
            </div>
            <ul className="rail-nav">
              {D.nav.map(([id, label], i) => (
                <li key={id}><a href={'#' + id}><i>{pad(i + 1)}</i><span>{label}</span></a></li>
              ))}
            </ul>
            <div className="rail-foot">
              <button className="iconbtn" aria-label="Ganti tema" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? <Ic.sun /> : <Ic.moon />}
              </button>
              <a className="iconbtn" href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Ic.linkedin /></a>
              <a className="iconbtn" href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Ic.github /></a>
              <a className="iconbtn" href={'mailto:' + p.email} aria-label="Email"><Ic.mail /></a>
            </div>
          </div>
        </aside>

        <main className="wrap">
          {/* Hero */}
          <header className="hero">
            <div className="blobs"><span className="blob b1" /><span className="blob b2" /><span className="blob b3" /></div>
            <div className="hero-grid">
              <div>
                <span className="pill"><i className="dot" /> Terbuka untuk peluang kerja · {p.location.split(',')[0]}</span>
                <h1>
                  <span className="ln"><span>{p.firstName}</span></span>
                  <span className="ln"><span><em>{p.lastName}</em></span></span>
                </h1>
                <div className="type-wrap"><span>{typed}</span><span className="caret" /></div>
                <p className="hero-lede">{p.lede}</p>
                <div className="hero-actions">
                  <DownloadBtn which="cv" variant="btn-solid">Unduh CV</DownloadBtn>
                  <DownloadBtn which="portfolio" variant="btn-yellow">Unduh Portofolio</DownloadBtn>
                  <a className="btn" href={'mailto:' + p.email}><Ic.mail />Hubungi saya</a>
                  <a className="btn" href={p.linkedin} target="_blank" rel="noopener noreferrer"><Ic.linkedin />LinkedIn</a>
                </div>
              </div>
              <div className="portrait">
                <span className="ring" />
                {p.photoCut ? <img className="cut" src={p.photoCut} alt={p.name} /> : <div className="ph">Slot foto profil</div>}
                <span className="float-chip c1">
                  <span className="ico" style={{ background: 'linear-gradient(140deg,#2563eb,#6aa3ff)' }}><Ic.cap /></span>
                  <span>3,69<small>IPK / 4,00</small></span>
                </span>
                <span className="float-chip c2">
                  <span className="ico" style={{ background: 'linear-gradient(140deg,#f5a524,#ffd76a)', color: '#3a2a05' }}><Ic.star /></span>
                  <span>Best Presenter<small>KONSTELASI 2024</small></span>
                </span>
                <span className="float-chip c3">
                  <span className="ico" style={{ background: 'linear-gradient(140deg,#12b981,#5ee0b0)' }}><Ic.megaphone /></span>
                  <span>Duta UAJY<small>2023 — 2026</small></span>
                </span>
              </div>
            </div>
            <div className="hero-stats rv">
              {p.stats.map(([big, small]) => <div key={small}><b>{big}</b><small>{small}</small></div>)}
            </div>
          </header>

          {/* Profil */}
          <section id="profil">
            <SecHead eyebrow="Profil" title="Kenalan dulu, yuk" sub="Siapa saya, dan pekerjaan seperti apa yang saya cari." />
            <div className="about">
              <div className="panel about-body rv">
                {p.about.map((t, i) => <p key={i}>{t}</p>)}
                <h3 style={{ marginTop: 24 }}>Area ketertarikan</h3>
                <div className="interests">{p.interests.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
              </div>
              <div className="panel tint rv">
                <h3 style={{ marginBottom: 16 }}>Data singkat</h3>
                <div className="field-list">
                  {p.facts.map(([k, v]) => <div key={k}><b>{k}</b><span>{v}</span></div>)}
                </div>
              </div>
            </div>
          </section>

          {/* Perjalanan */}
          <section id="perjalanan">
            <SecHead eyebrow="Perjalanan" title="Dari Samarinda ke Yogyakarta" sub="Jejak pendidikan, prestasi, dan mata kuliah yang membentuk cara saya bekerja." />
            <div className="tl">
              {D.journey.map((j) => (
                <article className="tl-item rv" key={j.title}>
                  <div className="tl-card">
                    <span className="tl-year">{j.year}</span>
                    <h3>{j.title}</h3>
                    <div className="tl-org">{j.org}</div>
                    <div className="tl-body with-photo">
                      <div className="tl-photo">
                        <Photo src={j.img} alt={j.caption} className="tl-img" />
                        <span>{j.caption}</span>
                      </div>
                      <div>
                        <p>{j.body}</p>
                        <Ticks items={j.points} />
                        {j.courses && (
                          <>
                            <h4 style={{ margin: '18px 0 8px', fontSize: 13.5 }}>Mata kuliah relevan</h4>
                            <div className="tags" style={{ marginTop: 0 }}>{j.courses.map((c) => <span className="tag" key={c}>{c}</span>)}</div>
                          </>
                        )}
                        <Tags items={j.tags} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pengalaman */}
          <section id="pengalaman">
          <SecHead eyebrow="Pengalaman" title="Tempat saya belajar bekerja" sub="Klik salah satu kartu untuk membaca rincian tanggung jawab dan hasilnya." />
          <div className="jobs">
            {D.experience.map((e, i) => (
              <button className="job rv" key={e.role} onClick={() => setModal({ kind: 'exp', index: i })}>
                <div className="job-meta">
                  {e.img
                    ? <img className="job-logo" src={e.img} alt={e.org} loading="lazy" />
                    : <div className="job-logo ph">{e.org?.[0] || '?'}</div>}
                  <span className="job-when">{e.when}</span>
                </div>
                <div>
                  <h3>{e.role}</h3>
                  <div className="job-org">{e.org}</div>
                  <p className="job-teaser">{e.teaser}</p>
                  <Tags items={e.tags} />
                </div>
                <span className="job-go"><Ic.arrow /></span>
              </button>
            ))}
          </div>
        </section>

          {/* Organisasi — timeline horizontal */}
          <section id="organisasi">
            <div className="sec-top">
              <SecHead eyebrow="Organisasi" title="Alur perjalanan organisasi" sub="Geser ke samping untuk mengikuti urutannya. Klik kartu untuk detail kegiatan." />
              <RowCtl row={orgRow} />
            </div>
            <div className="htl-track" ref={orgRow.ref} onScroll={orgRow.sync}>
              {D.organizations.map((o, i) => {
                const I = Ic[o.icon] || Ic.users;
                return (
                  <div className="htl-step rv" key={o.title + o.year}>
                    <div className="htl-head"><span className="htl-icon"><I /></span><span className="htl-line" /></div>
                    <button className="htl-card" onClick={() => setModal({ kind: 'org', index: i })}>
                      {o.img && <span className="htl-thumb"><img src={o.img} alt={o.caption} loading="lazy" /></span>}
                      <span className="htl-top">
                        <span className="htl-num">{pad(i + 1)}</span>
                        <span className="htl-badge">{o.status || 'Selesai'}</span>
                      </span>
                      <h3>{o.title}</h3>
                      <span className="htl-when">{o.year}</span>
                      <p>{o.org}</p>
                      <span className="htl-more">Lihat detail <Ic.arrow /></span>
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Proyek */}
          <section id="proyek">
            <SecHead eyebrow="Proyek" title="Yang saya bangun dan uji" sub="Klik kartu untuk membuka proyeknya." />
            <div className="linkcards">
              {D.projects.map((pr, i) => <LinkCard key={pr.title} item={pr} index={i} kindLabel="Proyek" />)}
            </div>
          </section>

          {/* Publikasi */}
          <section id="publikasi">
            <SecHead eyebrow="Publikasi" title="Artikel & penelitian" sub="Tulisan dan presentasi ilmiah yang pernah saya kerjakan." />
            <div className="linkcards">
              {D.papers.map((pp, i) => (
                <LinkCard key={pp.title} index={i + 2} kindLabel="Article"
                  item={{ kind: pp.kind || 'Article', title: pp.title, desc: pp.desc, year: pp.year, link: pp.link, linkLabel: pp.meta, preview: pp.preview }} />
              ))}
            </div>
          </section>

          {/* Keahlian */}
          <section id="keahlian">
            <SecHead eyebrow="Keahlian" title="Apa yang bisa saya kerjakan" sub="Persentase adalah penilaian diri berdasarkan intensitas pemakaian pada pekerjaan nyata." />
            <div className="skill-groups">
              {D.skillGroups.map((g) => (
                <div className="skill-group rv" key={g.name}>
                  <h3>{g.name}<em>{g.note}</em></h3>
                  {g.bars.map(([label, pct]) => (
                    <div className="bar-row" key={label}>
                      <div className="bar-top"><span>{label}</span><span>{pct}%</span></div>
                      <div className="bar"><i data-bar={pct} /></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <h3 className="rv" style={{ margin: '28px 0 14px' }}>Perangkat yang saya pakai</h3>
              <div className="skill-groups">
              {D.toolCategories.map((c) => (
                <div className="skill-group tool-group rv" key={c.name}>
                  <h3>{c.name}</h3>
                  <div className="stack">
                    {c.tools.map((t) => (
                      <span className="tool" key={t.name}>
                        {t.img
                          ? <span className="logo"><img src={t.img} alt={t.name} /></span>
                          : <span className="logo" style={{ background: t.color }}>{t.short}</span>}
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Records id="sertifikasi" eyebrow="Sertifikasi" title="Pelatihan & sertifikasi"
                   sub="Geser ke samping. Klik kartu untuk membaca cakupan materinya."
                   list={D.certificates} kind="cert" row={certRow} onOpen={setModal} />

          <Records id="penghargaan" eyebrow="Penghargaan" title="Prestasi yang saya raih"
                   sub="Geser ke samping. Klik kartu untuk membaca konteksnya."
                   list={D.achievements} kind="ach" row={achRow} onOpen={setModal} />

          {/* Aktivitas */}
          <section id="aktivitas">
            <SecHead eyebrow="Aktivitas" title="Kegiatan selama kuliah" sub="Dikelompokkan per bidang. Pilih salah satu tab." />
            <div className="tabs" role="tablist">
              {D.activities.map((a, i) => (
                <button className="tab" role="tab" key={a.name} aria-selected={tab === i} onClick={() => setTab(i)}>
                  {a.name} ({a.items.length})
                </button>
              ))}
            </div>
            {D.activities.map((a, i) => (
              <div className="tabpanel" key={a.name} data-active={String(tab === i)}>
                <ol className="actlist">{a.items.map((t) => <li key={t}><span>{t}</span></li>)}</ol>
              </div>
            ))}
          </section>

          {/* Kontak */}
          <section id="kontak">
            <SecHead eyebrow="Kontak" title="Mari mengobrol" />
            <div className="contact">
              <div className="panel tint rv">
                <h2>Saya siap bergabung dan belajar cepat.</h2>
                <p style={{ color: 'var(--ink-soft)' }}>
                  Email saya dibalas pada hari yang sama. Jika ingin melihat dokumentasi proyek SIMARSITA
                  atau berkas pendukung lain, sebutkan saja saat menghubungi.
                </p>
                <div className="hero-actions">
                  <DownloadBtn which="cv" variant="btn-solid">Unduh CV</DownloadBtn>
                  <DownloadBtn which="portfolio" variant="btn-yellow">Unduh Portofolio</DownloadBtn>
                </div>
              </div>
              <div className="rv">
                <div className="links">
                  {[
                    ['mail', 'Email', p.email, 'mailto:' + p.email],
                    ['linkedin', 'LinkedIn', p.linkedinLabel, p.linkedin],
                    ['github', 'GitHub', p.githubLabel, p.github],
                    ['phone', 'WhatsApp / Telepon', p.phone, 'https://wa.me/' + p.phoneIntl],
                    ['pin', 'Domisili', p.address, ''],
                  ].map(([icon, label, value, href]) => {
                    const I = Ic[icon];
                    const body = (
                      <>
                        <span className="ic-wrap"><I className="ic" /></span>
                        <span><b>{label}</b><span>{value}</span></span>
                        {href && <span className="arw"><Ic.arrow style={{ width: 16, height: 16 }} /></span>}
                      </>
                    );
                    return href
                      ? <a className="link-row" key={label} href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{body}</a>
                      : <div className="link-row" key={label}>{body}</div>;
                  })}
                </div>
              </div>
            </div>
          </section>

          <footer>
            <div className="fwrap">
              <span>© 2026 {p.name}</span>
              <span>Dibangun dengan Next.js — dirancang dan ditulis sendiri.</span>
            </div>
          </footer>
        </main>
      </div>

      {/* Modal */}
      <div className="modal" role="dialog" aria-modal="true" data-open={String(!!modal)}>
        <div className="modal-veil" onClick={() => setModal(null)} />
        <div className="modal-card">
          <button className="modal-close" aria-label="Tutup" onClick={() => setModal(null)}><Ic.close /></button>
          {m && (
            <>
              {m.img ? <img className="m-img" src={m.img} alt={m.alt} /> : <div className="m-img ph">Slot foto — {m.alt}</div>}
              <div className="m-body">
                <span className="m-date">{m.date}</span>
                <h3>{m.title}</h3>
                <div className="m-sub">{m.sub}</div>
                <p>{m.body}</p>
                {m.points && <Ticks items={m.points} />}
                {m.chain && <div className="chain">{m.chain.map((c) => <span key={c}>{c}</span>)}</div>}
                {m.tags && <Tags items={m.tags} />}
              </div>
            </>
          )}
        </div>
      </div>

      <button className="iconbtn totop" aria-label="Kembali ke atas" data-show={String(showTop)}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <Ic.up />
      </button>

      <div className="toast" data-open={String(!!toast)}>{toast}</div>
    </>
  );
}
