import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#hero" },
    { label: "Beats", href: "#beats" },
    { label: "Sobre Mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];


  // Scroll suave personalizado y lento
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    const startY = window.scrollY;
    const endY = el.getBoundingClientRect().top + window.scrollY;
    const distance = endY - startY;
    const duration = 1200; // milisegundos (más alto = más lento)
    let startTime: number | null = null;

    function animateScroll(currentTime: number) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      // easeInOutQuad
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + distance * ease);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className="font-display font-extrabold text-xl text-gradient-gold tracking-tight"
          onClick={e => handleSmoothScroll(e, '#hero')}
        >
          KT ON THE BEAT!
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { handleSmoothScroll(e, link.href); setIsOpen(false); }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
