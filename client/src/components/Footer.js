import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const scroll = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <div className="footer-logo-mark"><span>MW</span></div>
              <span className="footer-logo-name">MediaWorks Studio</span>
            </div>
            <p>Film, sound, and music production.<br />Based in Mumbai, India since 2010.</p>
          </div>

          <div className="footer-col">
            <span className="footer-col-label">Navigate</span>
            <ul>
              {['Services', 'Work', 'About', 'Podcast', 'Contact'].map(l => (
                <li key={l}><button onClick={() => scroll(l)}>{l}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-label">Connect</span>
            <ul>
              {['Instagram', 'Vimeo', 'LinkedIn', 'YouTube'].map(s => (
                <li key={s}>
                  <a href={`https://${s.toLowerCase()}.com`} target="_blank" rel="noreferrer">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-cta-col">
            <span className="footer-col-label">Start a Project</span>
            <p className="footer-cta-text">Have something <em>extraordinary</em> in mind?</p>
            <button className="btn-ghost" onClick={() => scroll('Contact')}>
              Book a Session
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} MediaWorks Studio. All rights reserved.</p>
          <p>Lower Parel, Mumbai 400013</p>
        </div>
      </div>
    </footer>
  );
}
