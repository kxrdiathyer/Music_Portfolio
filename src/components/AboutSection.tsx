import { motion } from "framer-motion";
import { Award, Disc3, Users, Zap } from "lucide-react";

const stats = [
  { icon: Disc3, label: "Beats Producidos", value: "10+" },
  { icon: Award, label: "Años de Experiencia", value: "1+" },
  { icon: Zap, label: "Géneros", value: "5+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase">Sobre Mí</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
              La Pasión por el <span className="text-gradient-gold">Sonido</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un chaval de 25 años que le encanta hacer música. Mi pasión por la música me hace aprender 
                cada día más sobre producción y sonido, y me esfuerzo por ofrecer beats 
                de la calidad más alta posible.
              </p>
              <p>
                Hago Trap, Hip-Hop, R&B y música urbana. Cada beat que 
                produzco está diseñado para ser único y atractivo. Me gusta probar nuevos sonidos y 
                técnicas para mantener mi música fresca e innovadora. Trabajo con plugins de calidad 
                para asegurar que cada beat suene profesional y listo para ser usado en cualquier proyecto.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors duration-300"
              >
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <div className="font-display font-extrabold text-3xl text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
