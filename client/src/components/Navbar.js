import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import FeatureFilms from './FeatureFilms';

const links = ['Services', 'Work','FeatureFilms' ,'About', 'Podcast', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 40), []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = id => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-mark"><span>MW</span></div>
          <div className="logo-text">
            <span className="logo-name">MediaWorks</span>
            <span className="logo-tagline">Production Studio</span>
          </div>
        </button>

        <ul className="nav-links">
          {links.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => scrollTo('Contact')}>
          Book a Session
        </button>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
          <li>
            <button className="mobile-cta" onClick={() => scrollTo('Contact')}>
              → Book a Session
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
