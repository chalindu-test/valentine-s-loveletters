import { useState, useRef } from "react";
import { Play, Pause, Music } from "lucide-react";

const Song = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
      <h1 className="font-script text-5xl sm:text-6xl text-primary mb-3 text-center">
        Our Song
      </h1>
      <p className="text-muted-foreground font-serif mb-12 text-center">
        The melody that makes me think of you 🎵
      </p>

      {/* Vinyl record */}
      <div className="relative">
        <div
          className={`w-64 h-64 sm:w-80 sm:h-80 rounded-full border-8 border-foreground/10 bg-gradient-to-br from-foreground/90 to-foreground/70 shadow-2xl flex items-center justify-center ${
            playing ? "animate-spin-slow" : ""
          }`}
          style={{ animationDuration: "4s" }}
        >
          {/* Grooves */}
          <div className="w-[90%] h-[90%] rounded-full border border-foreground/20 flex items-center justify-center">
            <div className="w-[75%] h-[75%] rounded-full border border-foreground/15 flex items-center justify-center">
              <div className="w-[55%] h-[55%] rounded-full border border-foreground/10 flex items-center justify-center">
                {/* Center label */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full valentine-gradient flex items-center justify-center shadow-inner">
                  <Music className="w-8 h-8 text-primary-foreground/80" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Play/Pause button */}
        <button
          onClick={toggle}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full valentine-gradient shadow-lg flex items-center justify-center hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={playing ? "Pause our song" : "Play our song"}
        >
          {playing ? (
            <Pause className="w-7 h-7 text-primary-foreground" />
          ) : (
            <Play className="w-7 h-7 text-primary-foreground ml-1" />
          )}
        </button>
      </div>

      <p className="mt-16 text-sm text-muted-foreground/60 font-serif text-center max-w-xs">
        💡 Place your song as <code className="bg-muted px-2 py-0.5 rounded text-xs">public/our-song.mp3</code>
      </p>

      <audio ref={audioRef} src="/our-song.mp3" loop onEnded={() => setPlaying(false)} />
    </div>
  );
};

export default Song;
