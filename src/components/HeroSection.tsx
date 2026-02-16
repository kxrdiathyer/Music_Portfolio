import { motion } from "framer-motion";
import { Play, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-studio.jpg";

const HeroSection = () => {
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
            <span className="text-sm font-medium tracking-[0.3em] uppercase">Productor Musical</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none">
            <span className="text-foreground">BEATS QUE</span>
            <br />
            <span className="text-gradient-gold">INSPIRAN</span>
          </h1>

          <p className="max-w-lg mx-auto text-muted-foreground text-lg md:text-xl">
            Instrumentales profesionales para artistas que buscan el sonido perfecto. 
            Trap, Hip-Hop, R&B y más.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#beats"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 glow-gold transition-all duration-300"
            >
              <Play size={18} />
              Escuchar Beats
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </motion.div>

        {/* Waveform decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex items-end justify-center gap-1 mt-16"
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-primary/30 rounded-full"
              style={{
                height: `${Math.random() * 30 + 4}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
