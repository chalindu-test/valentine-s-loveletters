import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Volume2, VolumeX } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/timeline", label: "Timeline" },
];

const Navbar = () => {
  const location = useLocation();
  const [playing, setPlaying] = useState(false);
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/70 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 font-script text-2xl text-primary" aria-label="Home">
          <Heart className="w-5 h-5 fill-primary text-primary" />
          Pawani+Chalindu
        </Link>
        <div className="flex items-center gap-1 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm px-2 py-1 rounded-md transition-colors ${
                location.pathname === item.to
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleAudio}
            className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={playing ? "Mute song" : "Play song"}
          >
            {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <audio ref={audioRef} src="/our-song.mp3" loop />
    </nav>
  );
};

export default Navbar;
