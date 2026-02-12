import { useEffect, useState } from "react";

const HeartParticles = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 8,
      size: 12 + Math.random() * 20,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-primary/20"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `fall ${h.duration}s linear ${h.delay}s infinite`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default HeartParticles;
