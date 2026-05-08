// import React, { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import Work from './components/Work';
// import About from './components/About';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import './App.css';
// import Podcast from './components/Podcast';
// function App() {
//   // Intersection Observer for scroll reveals
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
//       { threshold: 0.12 }
//     );
//     document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <div className="app">
//       <Navbar />
//       <main>
//         <Hero />
//         <Services />
//         <Podcast/>
//         <Work />
//         <About />
//         <Testimonials />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useRef } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Podcast from './components/Podcast';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeatureFilms from './components/FeatureFilms';
import StudioGallery from './components/StudioGallery';
function CustomCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });
  const raf     = useRef(null);

  useEffect(() => {
    const onMove = e => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      const lerp = (a, b, t) => a + (b - a) * t;
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top  = `${mouse.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="custom-cursor">
      <div className="cursor-ring" ref={ringRef} style={{ position: 'fixed', top: 0, left: 0 }} />
      <div className="cursor-dot"  ref={dotRef}  style={{ position: 'fixed', top: 0, left: 0 }} />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <FeatureFilms/>
        <About />
        <Podcast />
        <StudioGallery/>
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
