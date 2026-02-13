const Footer = () => (
  <footer className="relative py-8 text-center border-t border-primary/20 bg-gradient-to-b from-card/50 to-primary/5 backdrop-blur-sm overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
    </div>
    <div className="relative z-10">
      <p className="text-muted-foreground text-sm font-serif mb-2">
        Made with <span className="text-primary animate-heartbeat inline-block text-lg">♥</span> by Chalindu
      </p>
      <p className="text-xs text-muted-foreground/70 font-serif italic">
        "Every love story is beautiful, but ours is my favorite"
      </p>
      <p className="text-xs text-accent/70 mt-2 font-semibold">
        February 14, 2026
      </p>
    </div>
  </footer>
);

export default Footer;
