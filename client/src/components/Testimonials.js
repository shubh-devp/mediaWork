// import React, { useState, useEffect } from 'react';
// import './Testimonials.css';

// const testimonials = [
//   {
//     quote: "MediaWorks redefined what we thought was possible for our film's sound. The mix is extraordinary — every session felt like a masterclass in precision.",
//     name: 'Vikram Anand',
//     role: 'Director, Phantom Films',
//     initials: 'VA',
//   },
//   {
//     quote: "The score they composed for our commercial was a major factor in it going viral. They understood our brand better than most agencies we've worked with.",
//     name: 'Meera Joshi',
//     role: 'CMO, Tata Consumer Products',
//     initials: 'MJ',
//   },
//   {
//     quote: "Working with MediaWorks means working with people who genuinely care. They didn't just deliver a product — they delivered something we're proud of.",
//     name: 'Rahul Khanna',
//     role: 'Executive Producer, Emmay Entertainment',
//     initials: 'RK',
//   },
// ];

// export default function Testimonials() {
//   const [idx, setIdx] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5500);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section className="testimonials" id="testimonials">
//       <div className="testimonials-bg-word">Voices</div>
//       <div className="container">
//         <div className="testimonials-header reveal">
//           <div>
//             <span className="eyebrow">Testimonials</span>
//             <h2 className="section-title">What Clients <em>Say</em></h2>
//           </div>
//           <div className="t-dots">
//             {testimonials.map((_, i) => (
//               <button
//                 key={i}
//                 className={`t-dot${i === idx ? ' active' : ''}`}
//                 onClick={() => setIdx(i)}
//                 aria-label={`Testimonial ${i + 1}`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="testimonials-cards reveal" style={{ transitionDelay: '0.15s' }}>
//           {testimonials.map((t, i) => (
//             <div key={t.name} className={`t-card${i === idx ? ' active-card' : ''}`}>
//               <div>
//                 <span className="t-quote-mark">"</span>
//                 <p className="t-quote">{t.quote}</p>
//               </div>
//               <div className="t-author-wrap">
//                 <div className="t-avatar">{t.initials}</div>
//                 <p className="t-name">{t.name}</p>
//                 <p className="t-role">{t.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "MediaWorks redefined the sonic experience of our film. The sound design and Foley work was extraordinary — every session felt like a masterclass in precision and storytelling.",
    name: 'Film Director',
    role: 'Marathi Feature Film',
    initials: 'FD',
  },
  {
    quote: "The music production and dubbing work they delivered was a major factor in the film's success. They understood the emotional tone of our story from the very first session.",
    name: 'Producer',
    role: 'Production House, Pune',
    initials: 'PR',
  },
  {
    quote: "Working with MediaWorks means working with people who genuinely care about the craft. They didn't just deliver — they delivered something we're truly proud of.",
    name: 'Music Director',
    role: 'Marathi Film Industry',
    initials: 'MD',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-bg-word">Voices</div>
      <div className="container">
        <div className="testimonials-header reveal">
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">What Clients <em>Say</em></h2>
          </div>
          <div className="t-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`t-dot${i === idx ? ' active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-cards reveal" style={{ transitionDelay: '0.15s' }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`t-card${i === idx ? ' active-card' : ''}`}>
              <div>
                <span className="t-quote-mark">"</span>
                <p className="t-quote">{t.quote}</p>
              </div>
              <div className="t-author-wrap">
                <div className="t-avatar">{t.initials}</div>
                <p className="t-name">{t.name}</p>
                <p className="t-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
