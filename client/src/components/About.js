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
            <h2 className="section-title">Nine Years<br />of <em>Craft</em></h2>
            <p className="about-body" style={{ marginTop: '1.5rem' }}>
             We established on 1st jan 2017 aiming to do work in Audio-Video Industry
              in this journey we proudly associated with some well known production houses, and films,
               music albums and many more things.
            </p>
            <p className="about-body">
              Following services and work done in MediaWorks Studio in Recent Years.
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
