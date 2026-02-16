import { useState, useRef } from "react";
import { Play, Pause, Clock, Music } from "lucide-react";
import { motion } from "framer-motion";

interface BeatCardProps {
  title: string;
  genre: string;
  bpm: number;
  key: string;
  duration: string;
  index: number;
}

const BeatCard = ({ title, genre, bpm, duration, index }: BeatCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:glow-gold-sm transition-all duration-500"
    >
      {/* Waveform visual */}
      <div className="flex items-end gap-[2px] h-16 mb-4 px-1">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 rounded-full transition-colors duration-300 ${
              isPlaying ? "bg-primary" : "bg-muted-foreground/20 group-hover:bg-primary/30"
            }`}
            style={{
              height: `${Math.sin(i * 0.4) * 30 + Math.random() * 20 + 10}%`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>

      {/* Info */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-display font-bold text-foreground text-lg">{title}</h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Music size={12} />
              {genre}
            </span>
            <span>{bpm} BPM</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {duration}
            </span>
          </div>
        </div>

        {/* Play button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 glow-gold-sm transition-all duration-300"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
      </div>
    </motion.div>
  );
};

export default BeatCard;
