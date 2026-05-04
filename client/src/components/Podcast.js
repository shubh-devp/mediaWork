import React from 'react';
import './Podcast.css';

const steps = [
  {
    id: '01',
    title: 'Record',
    desc: 'Multi-track studio sessions with broadcast-grade microphones and a treated live room built for clarity.',
    icon: '🎙️',
  },
  {
    id: '02',
    title: 'Edit',
    desc: 'Noise reduction, leveling, mastering, and tight storytelling cuts — every second earns its place.',
    icon: '✂️',
  },
  {
    id: '03',
    title: 'Publish',
    desc: 'Distribution-ready files, show notes, chapter markers, and promo assets delivered on your timeline.',
    icon: '📡',
  },
];

export default function Podcast() {
  return (
    <section id="podcast" className="podcast-section">
      <div className="podcast-waveform">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 72 }).map((_, i) => {
            const h = 10 + Math.abs(Math.sin(i * 0.45 + 1.2)) * 60;
            return (
              <rect
                key={i}
                x={i * 20 + 2}
                y={(80 - h) / 2}
                width={3}
                height={h}
                fill="#b8933a"
                rx="1.5"
              />
            );
          })}
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="podcast-header">
          <div className="header-left reveal">
            <span className="eyebrow">Featured Service</span>
            <h2 className="podcast-main-title">
              Your Voice.<br />
              <em>Professionally Produced.</em>
            </h2>
          </div>
          <div className="header-right reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="podcast-description">
              Whether you're launching your first show or scaling a syndicated series, 
              our podcast team handles the technical craft so you stay focused on the conversation.
              Walk in with an idea — leave with a release-ready episode.
            </p>
          </div>
        </div>

        <div className="podcast-grid">
          {steps.map((step, i) => (
            <div key={step.id} className="podcast-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="card-top">
                <div className="card-icon-large">{step.icon}</div>
                <span className="card-number">{step.id}</span>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-desc">{step.desc}</p>
              <div className="card-arrow">Listen</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
