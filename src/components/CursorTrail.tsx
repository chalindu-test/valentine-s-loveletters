import { useEffect, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorTrail = () => {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [lastMove, setLastMove] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle trail creation to every 100ms
      if (now - lastMove < 100) return;
      setLastMove(now);

      const newTrail: Trail = {
        id: now,
        x: e.clientX,
        y: e.clientY,
      };

      setTrails((prev) => [...prev.slice(-8), newTrail]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lastMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute text-sm opacity-0"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
            animation: `fade-out-up 0.8s ease-out forwards`,
            animationDelay: `${index * 0.05}s`,
          }}
        >
          {index % 3 === 0 ? "💕" : index % 3 === 1 ? "✨" : "💖"}
        </div>
      ))}
    </div>
  );
};

export default CursorTrail;
