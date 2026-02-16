import { motion } from "framer-motion";
import BeatCard from "./BeatCard";

const beats = [
  { title: "Midnight Flow", genre: "Trap", bpm: 140, musicalKey: "Cm", duration: "3:24" },
  { title: "Golden Hour", genre: "R&B", bpm: 90, musicalKey: "Ab", duration: "3:48" },
  { title: "Dark Vibes", genre: "Hip-Hop", bpm: 85, musicalKey: "Dm", duration: "4:02" },
  { title: "Neon Dreams", genre: "Trap Soul", bpm: 130, musicalKey: "Em", duration: "3:15" },
  { title: "Ocean Drive", genre: "Pop", bpm: 110, musicalKey: "F", duration: "3:36" },
  { title: "Shadow Play", genre: "Drill", bpm: 145, musicalKey: "Gm", duration: "2:58" },
];

const BeatShowcase = () => {
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
            Explora mi colección de instrumentales producidos con la más alta calidad.
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeatShowcase;
