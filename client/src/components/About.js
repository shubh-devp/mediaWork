import React from 'react';
import './About.css';

const team = [
  { name: 'Arjun Mehta',   role: 'Creative Director',     exp: '14 yrs', initials: 'AM' },
  { name: 'Priya Nair',    role: 'Lead Sound Designer',   exp: '11 yrs', initials: 'PN' },
  { name: 'Rohan Das',     role: 'Music Composer',        exp: '9 yrs',  initials: 'RD' },
  { name: 'Sneha Kapoor',  role: 'Post Production Head',  exp: '12 yrs', initials: 'SK' },
];

const values = [
  'Craft over speed',
  'Story over spectacle',
  'Collaboration over hierarchy',
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-text reveal">
            <span className="eyebrow">About Us</span>
            <h2 className="section-title">Fourteen Years<br />of <em>Craft</em></h2>
            <p className="about-body" style={{ marginTop: '1.5rem' }}>
              MediaWorks Studio was founded in 2010 in Mumbai with a single belief: 
              <strong> great storytelling deserves great craft.</strong> We are a multidisciplinary 
              production house where film, sound, and music converge.
            </p>
            <p className="about-body">
              Every project we deliver carries the mark of careful, deliberate work — 
              from the first frame to the final mix. We don't just produce content; 
              we build something lasting.
            </p>
            <div className="about-values">
              {values.map((v, i) => (
                <div key={v} className="value-item">
                  <span>0{i + 1}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="team-list">
              {team.map((m, i) => (
                <div
                  key={m.name}
                  className="team-card"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="team-avatar">{m.initials}</div>
                  <div>
                    <p className="team-name">{m.name}</p>
                    <p className="team-role">{m.role}</p>
                  </div>
                  <span className="team-exp">{m.exp}</span>
                </div>
              ))}
            </div>

            <div className="studio-card">
              <p className="studio-card-label">Our Studio</p>
              <p>
                2,400 sq ft. production facility in Lower Parel, Mumbai — with two 
                mixing suites, a live recording room with 7.1 monitoring, and a 
                DCI-compliant screening bay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
