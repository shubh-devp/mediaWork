// import React, { useState } from 'react';
// import './Work.css';

// const filters = ['All', 'Film', 'Sound', 'Music', 'Commercial'];

// const projects = [
//   { id: 1, title: 'Echoes of the Ghats',   category: 'Film',       year: '2024', role: 'Full Production',       image: '/assets/work/ghats.jpg',   placeholder: 'Film' },
//   { id: 2, title: 'Silent City',            category: 'Sound',      year: '2024', role: 'Sound Design',          image: '/assets/work/city.jpg',    placeholder: 'Sound' },
//   { id: 3, title: 'Monsoon Score',          category: 'Music',      year: '2023', role: 'Original Composition',  image: '/assets/work/monsoon.jpg', placeholder: 'Music' },
//   { id: 4, title: 'Rise — Nike India',     category: 'Commercial', year: '2023', role: 'Direction + Post',      image: '/assets/work/nike.jpg',    placeholder: 'Commercial' },
//   { id: 5, title: 'Kali Documentary',       category: 'Film',       year: '2023', role: 'Cinematography',        image: '/assets/work/kali.jpg',    placeholder: 'Film' },
//   { id: 6, title: 'Frequency',             category: 'Sound',      year: '2022', role: 'Immersive Audio',       image: '/assets/work/audio.jpg',   placeholder: 'Sound' },
// ];

// export default function Work() {
//   const [active, setActive] = useState('All');
//   const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

//   return (
//     <section className="work" id="work">
//       <div className="container">
//         <header className="work-header reveal">
//           <div className="work-header-text">
//             <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>Selected Work</span>
//             <h2 className="section-title">Projects that <em>defines us</em></h2>
//           </div>
//           <div className="work-filters">
//             {filters.map(f => (
//               <button
//                 key={f}
//                 className={`filter-btn${active === f ? ' active' : ''}`}
//                 onClick={() => setActive(f)}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>
//         </header>

//         <div className="work-grid">
//           {filtered.map((p, i) => (
//             <div
//               key={p.id}
//               className="work-card reveal"
//               style={{ transitionDelay: `${i * 0.08}s` }}
//             >
//               <div className="work-card-visual">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   onError={e => { e.target.style.display = 'none'; }}
//                 />
//               </div>
//               {/* Placeholder shown when image missing */}
//               <div className="work-card-placeholder">
//                 <div className="work-card-placeholder-inner">{p.placeholder}</div>
//               </div>

//               <div className="work-cat-badge">{p.category}</div>
//               <div className="work-card-play">
//                 <div className="play-icon" />
//               </div>
//               <div className="work-card-info">
//                 <p className="work-card-role">{p.role} — {p.year}</p>
//                 <h3 className="work-card-title">{p.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="work-cta reveal">
//           <p className="work-cta-text">Ready to make something <em>extraordinary?</em></p>
//           <button
//             className="btn-ghost"
//             onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//           >
//             Start a Project
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';
import './Work.css';

const filters = ['All', 'Sound Design', 'Audio Post', 'Music & Dubbing', 'Video'];

const projects = [
  // ── AUDIO POST PRODUCTION ──────────────────────────────────────────
  { id: 1,  title: 'Javani Jindabad',                      category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 2,  title: 'Sargam',                               category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 3,  title: 'Beduk',                                category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 4,  title: 'Asehi Ekda Whave',                     category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 5,  title: 'Purushottam',                          category: 'Audio Post',      role: 'Dubbing' },
  { id: 6,  title: 'Ke Sara Sara',                         category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 7,  title: 'Farzand',                              category: 'Music & Dubbing', role: 'Music Production & Dubbing' },
  { id: 8,  title: 'Anand Mai Tera Bhojpuri Film',         category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 9,  title: 'Mahaprayan',                           category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 10, title: 'Lagn Mubarak',                         category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 11, title: 'Re Raya Kar Dhava',                    category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 12, title: 'Cinemascope',                          category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 13, title: 'Basta',                                category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 14, title: 'Lose Control',                         category: 'Music & Dubbing', role: 'Music Production & Dubbing' },
  { id: 15, title: 'Adham',                                category: 'Music & Dubbing', role: 'Music Production & Dubbing' },
  { id: 16, title: 'Ani Dr Kashinath Ghanekar',            category: 'Audio Post',      role: 'Dubbing' },
  { id: 17, title: 'Raan',                                 category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 18, title: 'Petla Man Saa',                        category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 19, title: 'Lalbaug chi Rani',                     category: 'Music & Dubbing', role: 'Music Production & Dubbing' },
  { id: 20, title: 'Udaharnarth Nemade',                   category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 21, title: 'Firki',                                category: 'Sound Design',    role: 'Sound Design & Foley' },
  { id: 22, title: 'Fuli',                                 category: 'Music & Dubbing', role: 'Music Production & Dubbing' },
  { id: 23, title: 'Rajkumar',                             category: 'Audio Post',      role: 'Audio Post Production' },
  { id: 24, title: 'The Story Of Laagir',                  category: 'Audio Post',      role: 'Post Production' },
  { id: 25, title: 'Bunny',                                category: 'Foley',           role: 'Foley' },

  // ── VIDEO PRODUCTION ───────────────────────────────────────────────
  { id: 26, title: 'Safar Maharastachi Thodi aad watechi', category: 'Video',           role: 'Shoot & Edit' },
  { id: 27, title: 'Mukkam Post Dhanori',                  category: 'Video',           role: 'Edit' },
  { id: 28, title: 'Yu Hi Edit',                           category: 'Video',           role: 'Edit' },
  { id: 29, title: 'Tadaiv Lagnam',                        category: 'Video',           role: 'Edit' },
  { id: 30, title: 'Paglya',                               category: 'Video',           role: 'Edit' },
  { id: 31, title: 'Beduk (Video)',                        category: 'Video',           role: 'Edit' },
  { id: 32, title: 'Khopa',                                category: 'Video',           role: 'Final Out' },
  { id: 33, title: 'Premat Petal Man Saar',                category: 'Video',           role: 'Edit' },
];

export default function Work() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section className="work" id="work">
      <div className="container">

        {/* Header */}
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

        {/* Project count */}
        <p className="work-count">
          {filtered.length} of {projects.length} projects
        </p>

        {/* List table */}
        <div className="work-list">
          <div className="work-list-header">
            <span>#</span>
            <span>Project</span>
            <span>Service</span>
            <span>Category</span>
          </div>

          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="work-list-row reveal"
              style={{ transitionDelay: `${Math.min(i * 0.03, 0.4)}s` }}
            >
              <span className="wl-num">{String(p.id).padStart(2, '0')}</span>
              <span className="wl-title">{p.title}</span>
              <span className="wl-role">{p.role}</span>
              <span className={`wl-badge wl-badge--${p.category.toLowerCase().replace(/[^a-z]/g, '-')}`}>
                {p.category}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
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
