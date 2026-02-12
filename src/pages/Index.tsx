import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import HeartParticles from "@/components/HeartParticles";
import ValentineModal from "@/components/ValentineModal";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const fireConfetti = () => {
    const colors = ["#ff6b8a", "#ff8fa3", "#ffb3c1", "#ffc3a0", "#ffd700"];
    confetti({ particleCount: 150, spread: 80, colors, origin: { y: 0.6 } });
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 120, colors, origin: { y: 0.4 } });
    }, 300);
  };

  const handleAnswer = () => {
    fireConfetti();
    setTimeout(() => navigate("/memories"), 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 valentine-gradient" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <HeartParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-primary-foreground drop-shadow-lg mb-6 leading-tight">
          Happy Valentine's Day,
          <br />
          Pawani!
        </h1>
        <p className="text-primary-foreground/80 text-lg sm:text-xl font-serif mb-10 max-w-md mx-auto">
          A little corner of the internet, made just for you 💕
        </p>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-primary-foreground/90 text-primary hover:bg-primary-foreground font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-heartbeat"
          aria-label="Open Valentine question"
          size="lg"
        >
          Open My Heart 💌
        </Button>
      </div>

      <ValentineModal open={showModal} onAnswer={handleAnswer} />
    </div>
  );
};

export default Index;
