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
            <a
              href="#beats"
              onClick={e => {
                e.preventDefault();
                const el = document.getElementById('beats');
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 glow-gold transition-all duration-300"
            >
              <Play size={18} />
              Escuchar Beats
            </a>
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
