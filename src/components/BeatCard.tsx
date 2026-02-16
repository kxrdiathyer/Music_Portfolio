import { useState, useRef, useEffect } from "react";
import { Play, Pause, Clock, Music, Download } from "lucide-react";
import { motion } from "framer-motion";

interface BeatCardProps {
  title: string;
  genre: string;
  bpm: number;
  key?: string;
  duration: string;
  audioUrl: string;
  index: number;
  isActive: boolean;
  onPlay: () => void;
}

const BeatCard = ({ title, genre, bpm, duration, audioUrl, index, isActive, onPlay }: BeatCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!isPlaying) {
      onPlay(); // Notifica al padre que este debe ser el activo
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Si no es el activo, pausa
  useEffect(() => {
    if (!isActive && isPlaying && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
    }
  }, [audioUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:glow-gold-sm transition-all duration-500"
    >
      {/* Waveform/Progress bar visual */}
      <div className="flex items-end gap-[2px] h-16 mb-4 px-1 cursor-pointer" onClick={(e) => {
        if (audioRef.current) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = x / rect.width;
          audioRef.current.currentTime = percentage * audioRef.current.duration;
        }
      }}>
        {Array.from({ length: 40 }).map((_, i) => {
          const barProgress = (i / 40) * 100;
          const isActive = barProgress < progress;
          
          return (
            <div
              key={i}
              className={`flex-1 rounded-full transition-colors duration-300 ${
                isActive 
                  ? "bg-primary" 
                  : isPlaying 
                  ? "bg-muted-foreground/30" 
                  : "bg-muted-foreground/20 group-hover:bg-primary/30"
              }`}
              style={{
                height: `${Math.sin(i * 0.4) * 30 + Math.random() * 20 + 10}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          );
        })}
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
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 glow-gold-sm transition-all duration-300"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} />
    </motion.div>
  );
};

export default BeatCard;
