'use client';
import { useRef, useState, useEffect } from 'react';
import { DATA as D } from '../lib/data';

/* ---------------- Ikon kecil bubble ---------------- */
const bs = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
const BIc = {
  cap: (p) => <svg viewBox="0 0 24 24" {...bs} {...p}><path d="m12 4 10 5-10 5L2 9z" /><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" /></svg>,
  star: (p) => <svg viewBox="0 0 24 24" {...bs} {...p}><path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z" /></svg>,
  megaphone: (p) => <svg viewBox="0 0 24 24" {...bs} {...p}><path d="M4 10v4a2 2 0 0 0 2 2h2l8 4V4L8 8H6a2 2 0 0 0-2 2z" /><path d="M19 9a3.5 3.5 0 0 1 0 6" /></svg>,
  briefcase: (p) => <svg viewBox="0 0 24 24" {...bs} {...p}><rect x="3" y="7" width="18" height="13" rx="2.4" /><path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" /></svg>,
  up: (p) => <svg viewBox="0 0 24 24" {...bs} {...p}><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></svg>,
};

/* ---------------- Data bubble ---------------- */
const BUBBLES = [
  { icon: 'cap', title: 'Project Manager', subtitle: 'Information Systems', color: 'linear-gradient(140deg,#2563eb,#6aa3ff)', pos: 'bl' },
  { icon: 'star', title: 'Quality Assurance', subtitle: '', color: 'linear-gradient(140deg,#f5a524,#ffd76a)', pos: 'tr' },
  { icon: 'megaphone', title: 'Data Visualization', subtitle: 'Data Science', color: 'linear-gradient(140deg,#12b981,#5ee0b0)', pos: 'br' },
  { icon: 'briefcase', title: 'Business & System Analyst', subtitle: '', color: 'linear-gradient(140deg,#4338ca,#8b8ff5)', pos: 'tl' },
];

function IntroBubble({ icon, title, subtitle, color, pos }) {
  const I = BIc[icon] || BIc.star;
  return (
    <span className={'intro-bubble pos-' + pos}>
      <span className="intro-bubble-ico" style={{ background: color }}><I /></span>
      <span className="intro-bubble-text"><b>{title}</b><small>{subtitle}</small></span>
    </span>
  );
}

export default function IntroCover({ onStart, closing }) {
  const p = D.profile;
  const areaRef = useRef(null);
  const dragging = useRef(false);
  const startY = useRef(0);
  const [dragUp, setDragUp] = useState(0); 

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const THRESHOLD = 90; 

    const onDown = (e) => {
      dragging.current = true;
      startY.current = e.clientY;
      el.setPointerCapture(e.pointerId);
    };
    const onMove = (e) => {
      if (!dragging.current) return;
      const dy = startY.current - e.clientY; 
      setDragUp(Math.max(0, Math.min(1, dy / THRESHOLD)));
    };
    const onUp = (e) => {
      if (!dragging.current) return;
      dragging.current = false;
      const dy = startY.current - e.clientY;
      if (dy > THRESHOLD) {
        onStart();
      } else {
        setDragUp(0);
      }
      try { el.releasePointerCapture(e.pointerId); } catch {}
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
    };
  }, [onStart]);

  return (
    <div
      ref={areaRef}
      className={'intro-cover' + (closing ? ' closing' : '')}
      style={{ transform: `translateY(${-dragUp * 60}px)`, touchAction: 'none' }}
    >
      <div className="intro-blobs">
        <span className="iblob a" /><span className="iblob b" /><span className="iblob c" /><span className="iblob d" />
        <span className="iparticle p1" /><span className="iparticle p2" /><span className="iparticle p3" /><span className="iparticle p4" />
      </div>

      {BUBBLES.map((b) => <IntroBubble key={b.title} {...b} />)}

      <div className="intro-center">
        <span className="intro-eyebrow">✦ Welcome</span>
        <h1 className="intro-title">PORTOFOLIO</h1>
        <p className="intro-sub">{p.name} - {p.headline}</p>
      </div>

      <button className="swipe-up-hint" onClick={onStart} aria-label="Open portfolio">
        <span className="swipe-up-arrow"><BIc.up /></span>
        <span>Swipe Up to Unlock</span>
      </button>
    </div>
  );
}