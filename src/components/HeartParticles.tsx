import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  swayDuration: number;
  type: "heart" | "petal";
  hue: number;
}

const HeartParticles = () => {
  const [particles, setParticles] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 10,
      size: 14 + Math.random() * 22,
      swayDuration: 3 + Math.random() * 4,
      type: i < 10 ? "heart" : "petal",
      hue: 340 + Math.random() * 30, // pink-red range
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite, petal-sway ${p.swayDuration}s ease-in-out ${p.delay}s infinite`,
            opacity: p.type === "petal" ? 0.6 : 0.2,
            color: p.type === "petal" ? `hsl(${p.hue}, 70%, 65%)` : undefined,
          }}
        >
          {p.type === "heart" ? (
            <span className="text-primary/20">♥</span>
          ) : (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ filter: "drop-shadow(0 1px 2px rgba(255,107,138,0.3))" }}
            >
              <ellipse cx="12" cy="10" rx="6" ry="10" transform="rotate(-30 12 10)" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
};

export default HeartParticles;
