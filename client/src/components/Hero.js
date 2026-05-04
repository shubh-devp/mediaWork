import React, { useEffect, useRef } from 'react';
import './Hero.css';

const stats = [
  { value: 14, suffix: '+', label: 'Years in Mumbai' },
  { value: 320, suffix: '+', label: 'Projects Delivered' },
  { value: 48, suffix: '', label: 'Industry Awards' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export default function Hero() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('[data-count]').forEach(el => {
          const end = +el.dataset.count;
          const suffix = el.dataset.suffix || '';
          const dur = 1800;
          const start = performance.now();
          const tick = now => {
            const progress = Math.min((now - start) / dur, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * end) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-deco">
        <div className="hero-deco-line v1" />
        <div className="hero-deco-line v2" />
        <div className="hero-deco-circle c1" />
        <div className="hero-deco-circle c2" />
      </div>

      <div className="hero-year-badge">
        <span>Est.</span>
        <span>2010</span>
      </div>

      <div className="hero-inner container">
        <div className="hero-content">
          <div className="hero-overline">
            <div className="hero-overline-line" />
            <span>Mumbai Production Studio</span>
          </div>

          <h1 className="hero-title">
            Film, Sound
            <span className="hero-title-italic">&amp; Music</span>
            <span className="hero-title-line3">Done Right.</span>
          </h1>

          <p className="hero-sub">
            MediaWorks delivers end-to-end production for brands, directors, 
            and artists who hold their work to the highest standard. 
            Every frame. Every frequency.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </button>
            <button
              className="btn-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </button>
            <span className="hero-scroll-hint">
              <div className="scroll-arrow" />
              Scroll
            </span>
          </div>
        </div>
      </div>

      <div className="hero-stats-strip" ref={statsRef}>
        <div className="hero-stats-inner container">
          {stats.map(s => (
            <div className="hero-stat" key={s.label}>
              <div
                className="stat-number"
                data-count={s.value}
                data-suffix={s.suffix}
              >
                {s.value}{s.suffix}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
