import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";

// Logo BeatStars SVG
const BeatStarsLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={18} height={18} viewBox="0 0 32 32" fill="none" {...props}>
    <rect width="32" height="32" rx="6" fill="#000"/>
    <path d="M8 24L16 8L24 24H20.5L19.1 21H12.9L11.5 24H8ZM13.7 18.5H18.3L16 13.7L13.7 18.5Z" fill="#fff"/>
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-noise">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-6"
        >
          <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Contacto</span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
            ¿Listo para <span className="text-gradient-gold">Crear</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Si estás buscando el beat perfecto para tu próximo proyecto, no dudes en contactarme. 
            Estoy disponible para beats exclusivos, licencias y colaboraciones.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:kxrdiathyer@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 glow-gold transition-all duration-300"
            >
              <Mail size={18} />
              kxrdiathyer@gmail.com
            </a>
            <a
              href="https://instagram.com/kxrdiathyer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram size={18} />
              @kxrdiathyer
            </a>
            <a
              href="https://wa.me/34675325972"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href="https://youtube.com/@kxrdiathyer8983?si=v14zPZX8_8UY2OR8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a2.993 2.993 0 0 0-2.112-2.112C19.19 3.5 12 3.5 12 3.5s-7.19 0-9.386.574A2.993 2.993 0 0 0 .502 6.186C0 8.383 0 12 0 12s0 3.617.502 5.814a2.993 2.993 0 0 0 2.112 2.112C4.81 20.5 12 20.5 12 20.5s7.19 0 9.386-.574a2.993 2.993 0 0 0 2.112-2.112C24 15.617 24 12 24 12s0-3.617-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
            <a
              href="https://www.beatstars.com/kxrdiathyer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              <BeatStarsLogo />
              BeatStars
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
