// import React from 'react';
// import './Services.css';

// const services = [
//   {
//     num: '01',
//     icon: '🎬',
//     title: 'Film Production',
//     desc: 'End-to-end production from concept and scripting through principal photography, editorial, and final delivery.',
//     tags: ['Cinematography', 'Directing', 'Editing', 'Color Grade'],
//   },
//   {
//     num: '02',
//     icon: '🎙',
//     title: 'Sound Design',
//     desc: 'Purpose-built sonic environments for film and media — from dialogue editing and ADR through to full immersive mix.',
//     tags: ['Foley', 'SFX', 'ADR', 'Immersive Audio'],
//   },
//   {
//     num: '03',
//     icon: '🎼',
//     title: 'Music Composition',
//     desc: 'Original scores and custom music tailored to the emotional arc of your project — orchestral, electronic, or hybrid.',
//     tags: ['Orchestral', 'Electronic', 'Hybrid', 'Live Recording'],
//   },
//   {
//     num: '04',
//     icon: '🖥',
//     title: 'Post Production',
//     desc: 'Full post services including VFX integration, final mix, mastering, and multi-format delivery for all platforms.',
//     tags: ['VFX', 'Final Mix', 'Mastering', 'DCP Delivery'],
//   },
// ];

// export default function Services() {
//   return (
//     <section className="services" id="services">
//       <div className="services-bg-num">04</div>
//       <div className="container">
//         <header className="services-header">
//           <div className="services-header-left reveal">
//             <span className="eyebrow">Our Services</span>
//             <h2 className="section-title">What We <em>Do</em></h2>
//           </div>
//           <p className="services-header-right reveal" style={{ transitionDelay: '0.15s' }}>
//             A full-service production studio covering every stage of the creative 
//             process — from first concept to final deliverable.
//           </p>
//         </header>

//         <div className="services-grid">
//           {services.map((s, i) => (
//             <div
//               key={s.num}
//               className="service-card reveal"
//               style={{ transitionDelay: `${i * 0.1}s` }}
//             >
//               <div className="card-top">
//                 <div className="card-icon">{s.icon}</div>
//                 <span className="card-num">{s.num}</span>
//               </div>
//               <h3 className="card-title">{s.title}</h3>
//               <p className="card-desc">{s.desc}</p>
//               <div className="card-tags">
//                 {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import './Services.css';

const services = [
  {
    num: '01',
    icon: '🎬',
    title: 'Video Services',
    desc: 'Full-spectrum video production — from concept and shoot through editing, VFX, colour grading, and final DPX print delivery.',
    tags: ['Video Shoot', 'Video Edit', 'VFX Design', 'CC & DI', 'DPX Print', 'Animation'],
  },
  {
    num: '02',
    icon: '🎙',
    title: 'Audio Services',
    desc: 'Purpose-built sonic environments for film and media — from dialogue editing, Foley, and SFX design through to full 5.1 premix and final mix.',
    tags: ['Audio Recording', 'Sound Design', 'Foley', 'SFX Design', 'Audio Dubbing', '5.1 Mix'],
  },
  {
    num: '03',
    icon: '🎼',
    title: 'Music Production',
    desc: 'Original music composition and intricate programming tailored to the emotional arc of your project — from full orchestral arrangements to contemporary beats.',
    tags: ['Music Composition', 'Programming', 'Arrangement', 'Live Recording'],
  },
  {
    num: '04',
    icon: '🖥',
    title: 'Post Production',
    desc: 'Complete audio post services including sound design, Foley, dubbing, final mix, and multi-format delivery for theatrical and OTT platforms.',
    tags: ['Audio Post', 'DCP Delivery', 'Dubbing', 'Final Mix', 'Mastering'],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-bg-num">04</div>
      <div className="container">
        <header className="services-header">
          <div className="services-header-left reveal">
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">What We <em>Do</em></h2>
          </div>
          <p className="services-header-right reveal" style={{ transitionDelay: '0.15s' }}>
            A full-service production studio covering every stage of the creative
            process — from first concept to final deliverable, for film, sound, and music.
          </p>
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="card-top">
                <div className="card-icon">{s.icon}</div>
                <span className="card-num">{s.num}</span>
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <div className="card-tags">
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
