import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Volume2, VolumeX } from "lucide-react";
import ourSong from "@/assets/All of Me.mp3";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/timeline", label: "Timeline" },
];

const Navbar = () => {
  const location = useLocation();
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  // Auto-play music on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Browser blocked autoplay, user will need to click play
        setPlaying(false);
      });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/80 border-b border-primary/20 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2.5 sm:py-3 md:py-3.5 lg:py-4 px-2 sm:px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-1.5 sm:gap-2 md:gap-3 font-script text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary hover:scale-105 transition-transform duration-300 group py-1"
          aria-label="Home"
        >
          <Heart className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 fill-primary text-primary animate-heartbeat group-hover:fill-accent group-hover:text-accent transition-colors flex-shrink-0" />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient whitespace-nowrap leading-tight">
            Pawani+Chalindu
          </span>
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-2 md:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[9px] xs:text-[10px] sm:text-sm px-1 xs:px-1.5 sm:px-3 py-0.5 xs:py-1 sm:py-1.5 md:py-2 rounded-full font-serif transition-all duration-300 whitespace-nowrap ${
                location.pathname === item.to
                  ? "text-primary font-bold bg-gradient-to-r from-primary/20 to-accent/20 shadow-md scale-105"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-sm hover:scale-105"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleAudio}
            className="ml-0.5 sm:ml-1 md:ml-2 p-1 sm:p-1.5 md:p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:shadow-md hover:scale-110 relative group"
            aria-label={playing ? "Mute song" : "Play song"}
          >
            {playing ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
            {playing && (
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping"></span>
            )}
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={ourSong} loop />
    </nav>
  );
};

export default Navbar;
