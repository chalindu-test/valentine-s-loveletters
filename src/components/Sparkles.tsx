import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

const Sparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const createSparkle = () => {
      const newSparkle: Sparkle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 2,
      };

      setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    };

    const interval = setInterval(createSparkle, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            animation: `sparkle 1.5s ease-out forwards`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 160 160"
            fill="none"
          >
            <path
              d="M80 0C80 0 84 50 80 80C76 50 80 0 80 0Z"
              fill="url(#sparkle-gradient)"
            />
            <path
              d="M0 80C0 80 50 76 80 80C50 84 0 80 0 80Z"
              fill="url(#sparkle-gradient)"
            />
            <path
              d="M80 160C80 160 76 110 80 80C84 110 80 160 80 160Z"
              fill="url(#sparkle-gradient)"
            />
            <path
              d="M160 80C160 80 110 84 80 80C110 76 160 80 160 80Z"
              fill="url(#sparkle-gradient)"
            />
            <defs>
              <linearGradient id="sparkle-gradient">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="50%" stopColor="#ff8fa3" />
                <stop offset="100%" stopColor="#ffc3a0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Sparkles;
