import React, { useState } from 'react';
import './StudioGallery.css';

// ── Replace these src values with your actual image paths ──────────────
// Put your images in: public/assets/studio/
// Suggested filenames shown below
const images = [
  { id: 1, src: '/assets/studio/control-room.jpg',    alt: 'Control room with mixing console and 5.1 monitoring',  label: 'Control Room' },
  { id: 2, src: '/assets/studio/screening-room.jpg',  alt: 'Screening room with projection display',               label: 'Screening Room' },
  { id: 3, src: '/assets/studio/daw-station.jpg',     alt: 'DAW workstation with iMac and Pro Tools session',      label: 'DAW Station' },
  { id: 4, src: '/assets/studio/live-room.jpg',       alt: 'Treated live room with microphone stands',             label: 'Live Room' },
  { id: 5, src: '/assets/studio/recording-booth.jpg', alt: 'Recording booth — musician at session',                label: 'Recording Booth' },
];

export default function StudioGallery() {
  const [lightbox, setLightbox] = useState(null); // index of open image

  const open  = i => setLightbox(i);
  const close = () => setLightbox(null);
  const prev  = () => setLightbox(i => (i - 1 + images.length) % images.length);
  const next  = () => setLightbox(i => (i + 1) % images.length);

  // Keyboard nav
  React.useEffect(() => {
    if (lightbox === null) return;
    const handler = e => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <section className="studio-gallery" id="studio">
      <div className="container">

        {/* Header */}
        <header className="sg-header reveal">
          <div>
            <span className="eyebrow">Our Space</span>
            <h2 className="section-title">Inside the <em>Studio</em></h2>
          </div>
          <p className="sg-desc">
            Three dedicated spaces — a control room with 5.1 surround monitoring,
            a DAW station for post production, a live room for instruments,
            and a treated recording booth built for clarity.
          </p>
        </header>

        {/* Masonry grid */}
        <div className="sg-grid reveal" style={{ transitionDelay: '0.15s' }}>

          {/* Large card — control room (spans 2 rows) */}
          <div className="sg-card sg-card--tall" onClick={() => open(0)}>
            <img src={images[0].src} alt={images[0].alt} />
            <div className="sg-overlay">
              <span className="sg-label">{images[0].label}</span>
              <span className="sg-zoom">&#x2B</span>
            </div>
          </div>

          {/* Top-right */}
          <div className="sg-card" onClick={() => open(1)}>
            <img src={images[1].src} alt={images[1].alt} />
            <div className="sg-overlay">
              <span className="sg-label">{images[1].label}</span>
              <span className="sg-zoom">&#x2B</span>
            </div>
          </div>

          {/* Middle-right top */}
          <div className="sg-card" onClick={() => open(3)}>
            <img src={images[3].src} alt={images[3].alt} />
            <div className="sg-overlay">
              <span className="sg-label">{images[3].label}</span>
              <span className="sg-zoom">&#x2B</span>
            </div>
          </div>

          {/* Middle-right bottom */}
          <div className="sg-card" onClick={() => open(4)}>
            <img src={images[4].src} alt={images[4].alt} />
            <div className="sg-overlay">
              <span className="sg-label">{images[4].label}</span>
              <span className="sg-zoom">&#x2B</span>
            </div>
          </div>

          {/* Bottom wide — DAW station (spans 2 cols) */}
          <div className="sg-card sg-card--wide" onClick={() => open(2)}>
            <img src={images[2].src} alt={images[2].alt} />
            <div className="sg-overlay">
              <span className="sg-label">{images[2].label}</span>
              <span className="sg-zoom">&#x2B</span>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="sg-lightbox" onClick={close}>
          <div className="sg-lb-inner" onClick={e => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="sg-lb-img"
            />
            <div className="sg-lb-bar">
              <span className="sg-lb-label">{images[lightbox].label}</span>
              <span className="sg-lb-count">{lightbox + 1} / {images.length}</span>
            </div>
            <button className="sg-lb-arrow sg-lb-prev" onClick={prev} aria-label="Previous">&#8592;</button>
            <button className="sg-lb-arrow sg-lb-next" onClick={next} aria-label="Next">&#8594;</button>
            <button className="sg-lb-close" onClick={close} aria-label="Close">&#x2715;</button>
          </div>
        </div>
      )}
    </section>
  );
}