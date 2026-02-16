import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle } from "lucide-react";

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
              href="mailto:miguel.tuemail@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 glow-gold transition-all duration-300"
            >
              <Mail size={18} />
              miguelpantera7@gmail.com
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
