import { motion } from "framer-motion";
import BeatCard from "./BeatCard";

const beats = [
  { title: "Oh darling", genre: "EDM", bpm: 150, musicalKey: "Fm", duration: "4:01", audioUrl: "/beats/KT_EDM_Beat_Oh_Darling_Tagged.wav" },
  { title: "Bubblecore", genre: "Hyperpop", bpm: 80, musicalKey: "GM", duration: "3:43", audioUrl: "/beats/KT_Hyperpop_Beat_Bubblecore_Tagged.wav" },
  { title: "Lovely", genre: "R&B", bpm: 140, musicalKey: "Am", duration: "3:06", audioUrl: "/beats/KT_R&B_Beat_Lovely_Tagged.wav" },
  { title: "Let You Down", genre: "Trap Sad", bpm: 80, musicalKey: "Dm", duration: "3:46", audioUrl: "/beats/KT_TrapSad_Beat_Let_You_Down_Tagged.wav" },
  { title: "Limit", genre: "Trap", bpm: 140, musicalKey: "Dm", duration: "3:02", audioUrl: "/beats/KT_Trap_Beat_Limit_Tagged.wav" },
  { title: "Pray", genre: "Trap", bpm: 72, musicalKey: "C♯m", duration: "3:12", audioUrl: "/beats/KT_Trap_Beat_Pray_Tagged.wav" },
];

const BeatShowcase = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section id="beats" className="py-24 bg-noise">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Catálogo</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-3 text-foreground">
            Mis <span className="text-gradient-gold">Beats</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Explora mi colección variada de instrumentales. Encontrarás beats de Trap, Hyperpop, R&B y más, 
            cada uno diseñado para inspirar tu creatividad y elevar tu música al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {beats.map((beat, index) => (
            <BeatCard
              key={beat.title}
              title={beat.title}
              genre={beat.genre}
              bpm={beat.bpm}
              duration={beat.duration}
              audioUrl={beat.audioUrl}
              index={index}
              isActive={activeIndex === index}
              onPlay={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
export default BeatShowcase;
