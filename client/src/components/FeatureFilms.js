import React from 'react';
import { motion } from 'framer-motion';
import './FeatureFilms.css';

const films = [
  { id: 1, title: "Urja", img: "/assets/Films/farzand.jpg", type: "feature" },
  { id: 2, title: "Basta", img: "/assets/Films/basta.jpg", type: "stacked" },
  { id: 3, title: "Asehi Ekda Vhave", img: "/assets/Films/asehi.jpg", type: "stacked" },
  { id: 4, title: "Raya", img: "/assets/Films/raya.jpg", type: "feature" },
  { id: 5, title: "PPMS", img: "/assets/Films/ppms.jpg", type: "feature" },
  { id: 6, title: "Udaharnarth Nemade", img: "/assets/Films/nemade.jpg", type: "stacked" },
  { id: 7, title: "Rajkumar", img: "/assets/Films/rajkumar.jpg", type: "stacked" },
  { id: 8, title: "Dr. Kashinath Ghanekar", img: "/assets/Films/drkashinath.jpg", type: "feature" },
];

export default function FeatureFilms() {
  return (
    <section className="films-section" id="work">
      <div className="container">
        <div className="films-header">
          <span className="letter-spaced">FEATURE FILMS</span>
        </div>

        <div className="films-masonry">
          {films.map((film, i) => (
            <motion.div 
              key={film.id}
              className={`film-poster-card ${film.type}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={film.img} alt={film.title} />
              <div className="poster-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}