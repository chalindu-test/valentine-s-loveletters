import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const quotes = [
  "You are my today and all of my tomorrows",
  "In you, I've found the love of my life",
  "Every love story is beautiful, but ours is my favorite",
  "You make my heart smile",
  "Together is my favorite place to be",
  "I love you more than words can say",
  "You are my sunshine on a cloudy day",
  "Forever and always, it's you and me",
];

const LoveQuote = () => {
  const [quote, setQuote] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);

    // Show quote after a delay
    const showTimer = setTimeout(() => setShow(true), 1000);

    return () => clearTimeout(showTimer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in-up pointer-events-none">
      <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl border border-primary/20 flex items-center gap-3 max-w-md">
        <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat flex-shrink-0" />
        <p className="text-sm font-serif italic text-foreground text-center">
          "{quote}"
        </p>
        <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat flex-shrink-0" />
      </div>
    </div>
  );
};

export default LoveQuote;
