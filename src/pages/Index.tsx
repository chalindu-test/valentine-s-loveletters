import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import HeartParticles from "@/components/HeartParticles";
import ValentineModal from "@/components/ValentineModal";
import Sparkles from "@/components/Sparkles";
import LoveQuote from "@/components/LoveQuote";
import CursorTrail from "@/components/CursorTrail";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fireConfetti = () => {
    const colors = ["#ff6b8a", "#ff8fa3", "#ffb3c1", "#ffc3a0", "#ffd700", "#ffe4e1"];

    // First burst
    confetti({
      particleCount: 200,
      spread: 100,
      colors,
      origin: { y: 0.6 },
      shapes: ["circle", "square"],
      scalar: 1.2,
    });

    // Second burst - from left
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 80,
        colors,
        origin: { x: 0, y: 0.6 },
        shapes: ["circle"],
      });
    }, 200);

    // Third burst - from right
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 80,
        colors,
        origin: { x: 1, y: 0.6 },
        shapes: ["circle"],
      });
    }, 400);

    // Heart emojis burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        colors,
        origin: { y: 0.4 },
        scalar: 2,
        shapes: ["circle"],
      });
    }, 600);
  };

  const handleAnswer = () => {
    fireConfetti();
    setTimeout(() => navigate("/memories"), 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Background with animated gradient */}
      <div className="absolute inset-0 valentine-gradient" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-gradient" style={{ backgroundSize: "200% 200%" }} />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <HeartParticles />
      <Sparkles />
      <CursorTrail />

      {/* Decorative floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float" style={{ animationDelay: "0s" }}>💕</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15 animate-float" style={{ animationDelay: "1s" }}>💖</div>
        <div className="absolute bottom-32 left-20 text-7xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>💗</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>💝</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="mb-8">
          <div className="inline-block animate-float">
            <span className="text-6xl sm:text-8xl">💕</span>
          </div>
        </div>
        <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-primary-foreground drop-shadow-2xl mb-8 leading-tight animate-glow">
          Happy Valentine's Day,
          <br />
          <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent animate-gradient" style={{ backgroundSize: "200%" }}>
            Pawani!
          </span>
        </h1>
        <p className="text-primary-foreground/90 text-xl sm:text-2xl font-serif mb-12 max-w-2xl mx-auto leading-relaxed italic">
          A little corner of the internet, made just for you
          <br />
          <span className="text-2xl sm:text-3xl not-italic">💕✨</span>
        </p>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-white/95 text-primary hover:bg-white font-semibold text-xl px-12 py-7 rounded-full shadow-2xl hover:shadow-pink-300/50 hover:scale-110 transition-all duration-300 animate-heartbeat border-2 border-primary/20"
          aria-label="Open Valentine question"
          size="lg"
        >
          <span className="flex items-center gap-2">
            Open My Heart
            <span className="text-2xl animate-pulse">💌</span>
          </span>
        </Button>
      </div>

      <ValentineModal open={showModal} onAnswer={handleAnswer} />
      {!showModal && <LoveQuote />}
    </div>
  );
};

export default Index;
