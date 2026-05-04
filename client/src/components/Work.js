import React, { useState } from 'react';
import './Work.css';

const filters = ['All', 'Film', 'Sound', 'Music', 'Commercial'];

const projects = [
  { id: 1, title: 'Echoes of the Ghats',   category: 'Film',       year: '2024', role: 'Full Production',       image: '/assets/work/ghats.jpg',   placeholder: 'Film' },
  { id: 2, title: 'Silent City',            category: 'Sound',      year: '2024', role: 'Sound Design',          image: '/assets/work/city.jpg',    placeholder: 'Sound' },
  { id: 3, title: 'Monsoon Score',          category: 'Music',      year: '2023', role: 'Original Composition',  image: '/assets/work/monsoon.jpg', placeholder: 'Music' },
  { id: 4, title: 'Rise — Nike India',     category: 'Commercial', year: '2023', role: 'Direction + Post',      image: '/assets/work/nike.jpg',    placeholder: 'Commercial' },
  { id: 5, title: 'Kali Documentary',       category: 'Film',       year: '2023', role: 'Cinematography',        image: '/assets/work/kali.jpg',    placeholder: 'Film' },
  { id: 6, title: 'Frequency',             category: 'Sound',      year: '2022', role: 'Immersive Audio',       image: '/assets/work/audio.jpg',   placeholder: 'Sound' },
];

export default function Work() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section className="work" id="work">
      <div className="container">
        <header className="work-header reveal">
          <div className="work-header-text">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>Selected Work</span>
            <h2 className="section-title">Projects That <em>Define Us</em></h2>
          </div>
          <div className="work-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        <div className="work-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="work-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="work-card-visual">
                <img
                  src={p.image}
                  alt={p.title}
                  onError={e => { e.target.style.display = 'none'; }}
                />
              </div>
              {/* Placeholder shown when image missing */}
              <div className="work-card-placeholder">
                <div className="work-card-placeholder-inner">{p.placeholder}</div>
              </div>

              <div className="work-cat-badge">{p.category}</div>
              <div className="work-card-play">
                <div className="play-icon" />
              </div>
              <div className="work-card-info">
                <p className="work-card-role">{p.role} — {p.year}</p>
                <h3 className="work-card-title">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="work-cta reveal">
          <p className="work-cta-text">Ready to make something <em>extraordinary?</em></p>
          <button
            className="btn-ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
}
