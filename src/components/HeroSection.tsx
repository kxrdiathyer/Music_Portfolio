import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement>(null);
  const [spectrum, setSpectrum] = React.useState<number[]>(Array(32).fill(10));
  const audioCtxRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  React.useEffect(() => {
    let animationId: number;
    if (isPlaying && audioRef.current) {
      // Cierra el contexto anterior si existe
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = audioCtxRef.current.createMediaElementSource(audioRef.current);
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioCtxRef.current.destination);
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      const animate = () => {
        analyserRef.current!.getByteFrequencyData(dataArray);
        setSpectrum(Array.from(dataArray.slice(0, 32)));
        animationId = requestAnimationFrame(animate);
      };
      animate();
    } else {
      // Animación decorativa cuando no está reproduciendo
      const animateDecor = () => {
        // Genera valores aleatorios suaves para decoración
        const decorative = Array.from({ length: 32 }, () => Math.floor(8 + Math.random() * 12));
        setSpectrum(decorative);
        animationId = requestAnimationFrame(animateDecor);
      };
      animateDecor();
    }
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      analyserRef.current = null;
    };
  }, [isPlaying]);
  // Referencia global para el audio
  const beats = [
    "/beats/KT_EDM_Beat_Oh_Darling_Tagged.wav",
    "/beats/KT_Hyperpop_Beat_Bubblecore_Tagged.wav",
    "/beats/KT_R&B_Beat_Lovely_Tagged.wav",
    "/beats/KT_TrapSad_Beat_Let_You_Down_Tagged.wav",
    "/beats/KT_Trap_Beat_Limit_Tagged.wav",
    "/beats/KT_Hard_Trap_Beat_Bullet_Tagged.wav",
    "/beats/KT_TrapSad_Beat_No_Lovin_Tagged.wav",
    "/beats/KT_TrapSad_Beat_Nothing_Like_Us_Tagged.wav",
    "/beats/KT_TrapSad_Beat_Remember_Me_Tagged.wav"
  ];
  const handlePlayPause = () => {
    if (!isPlaying) {
      // Reproducir beat aleatorio
      const randomIndex = Math.floor(Math.random() * beats.length);
      // Elimina el audio anterior
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      // Crea un nuevo elemento de audio
      const newAudio = document.createElement('audio');
      newAudio.src = beats[randomIndex];
      newAudio.onended = () => setIsPlaying(false);
      newAudio.play();
      audioRef.current = newAudio;
      setIsPlaying(true);
    } else {
      // Pausar
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Studio de producción musical"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-primary">
            <Headphones size={20} />
            <span className="text-sm font-medium tracking-[0.3em] uppercase">KXRDIA THYER</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
            <span className="text-foreground">BEATS QUE</span>
            <br />
            <span className="text-gradient-gold">INSPIRAN</span>
          </h1>

          <p className="max-w-lg mx-auto text-muted-foreground text-lg md:text-xl bg-black/25 rounded-lg px-4 py-2 shadow-lg text-white backdrop-blur-sm" style={{textShadow: '0 2px 8px #000, 0 1px 1px #000'}}> 
            Instrumentales diferentes y únicas para artistas que buscan un sonido auténtico.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row items-center justify-center gap-4">
                <button
                  onClick={e => {
                    e.preventDefault();
                    handlePlayPause();
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 glow-gold transition-all duration-300"
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  Escuchar Beats
                  <audio ref={audioRef} />
                </button>
                <a
                  href="#contact"
                  onClick={e => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (!el) return;
                    const startY = window.scrollY;
                    const endY = el.getBoundingClientRect().top + window.scrollY;
                    const distance = endY - startY;
                    const duration = 1200;
                    let startTime = null;
                    function animateScroll(currentTime) {
                      if (!startTime) startTime = currentTime;
                      const timeElapsed = currentTime - startTime;
                      const progress = Math.min(timeElapsed / duration, 1);
                      const ease = progress < 0.5
                        ? 2 * progress * progress
                        : -1 + (4 - 2 * progress) * progress;
                      window.scrollTo(0, startY + distance * ease);
                      if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                      }
                    }
                    requestAnimationFrame(animateScroll);
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Contactar
                </a>
              </div>
              {/* Onda de sonido animada debajo de los botones */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex items-end justify-center gap-0.5 mt-24" style={{height: '152px', minHeight: '152px', alignItems: 'flex-end', maxWidth: '200px', margin: '0 auto'}}
              >
                {spectrum.map((value, i) => (
                  <div
                    key={i}
                    className="w-1 bg-primary/30 rounded-full"
                    style={{
                      height: `${Math.max(value * 0.4, 6)}px`,
                      transition: 'height 0.1s',
                      display: 'inline-block',
                      verticalAlign: 'bottom',
                      width: '8px',
                      marginRight: '2px',
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Waveform decoration */}
        {/* Eliminado espectro de audio decorativo extra */}
      </div>
    </section>
  );
};

export default HeroSection;
