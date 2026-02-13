import { useEffect, useState } from "react";

const heartShapes = ["♥", "💕", "💖", "💗", "💝", "💓"];

const HeartParticles = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number; shape: string; opacity: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 16 + Math.random() * 28,
      shape: heartShapes[Math.floor(Math.random() * heartShapes.length)],
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animation: `fall ${h.duration}s linear ${h.delay}s infinite`,
            filter: "blur(0.5px)",
          }}
        >
          {h.shape}
        </span>
      ))}
    </div>
  );
};

export default HeartParticles;
