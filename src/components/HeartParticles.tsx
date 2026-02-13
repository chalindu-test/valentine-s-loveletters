import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  swayDuration: number;
  rotation: number;
  hue: number;
  opacity: number;
}

const HeartParticles = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 10,
      size: 16 + Math.random() * 24,
      swayDuration: 3 + Math.random() * 4,
      rotation: Math.random() * 360,
      hue: 340 + Math.random() * 25,
      opacity: 0.4 + Math.random() * 0.4,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            animation: `fall ${p.duration}s linear ${p.delay}s infinite, petal-sway ${p.swayDuration}s ease-in-out ${p.delay}s infinite`,
            opacity: p.opacity,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            style={{
              transform: `rotate(${p.rotation}deg)`,
              filter: "drop-shadow(0 2px 4px rgba(255,107,138,0.25))",
            }}
          >
            <ellipse
              cx="12"
              cy="10"
              rx="5.5"
              ry="9.5"
              fill={`hsl(${p.hue}, 65%, 68%)`}
              transform="rotate(-20 12 10)"
            />
            <ellipse
              cx="12"
              cy="10"
              rx="4"
              ry="8"
              fill={`hsl(${p.hue}, 55%, 75%)`}
              transform="rotate(10 12 10)"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default HeartParticles;
