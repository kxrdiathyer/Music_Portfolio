const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-gradient-gold">PRODUCER</span>
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
