import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ValentineModalProps {
  open: boolean;
  onAnswer: () => void;
}

const ValentineModal = ({ open, onAnswer }: ValentineModalProps) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const moveNoButton = () => {
    const range = 120;
    setNoPos({
      x: (Math.random() - 0.5) * range * 2,
      y: (Math.random() - 0.5) * range * 2,
    });
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="valentine-gradient border-primary/30 sm:max-w-md text-center overflow-visible shadow-2xl" aria-describedby="valentine-question">
        <DialogHeader>
          <DialogTitle className="font-script text-5xl text-primary-foreground mb-4 animate-float">
            <span className="inline-block text-6xl animate-heartbeat">💖</span>
          </DialogTitle>
          <DialogDescription id="valentine-question" className="text-xl font-serif text-primary-foreground/95 leading-relaxed">
            <span className="block mb-2 italic">My dearest Pawani,</span>
            <span className="block font-semibold text-2xl">
              Will you be my Valentine?
            </span>
            <span className="block mt-2 text-3xl">💖✨</span>
          </DialogDescription>
        </DialogHeader>
        <div ref={containerRef} className="flex gap-4 justify-center mt-6 relative min-h-[60px]">
          <Button
            onClick={onAnswer}
            className="bg-white text-primary hover:bg-white/95 font-bold text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 border-2 border-primary/20"
            aria-label="Yes, I will be your Valentine"
          >
            <span className="flex items-center gap-2">
              Yes! 💕
            </span>
          </Button>
          <Button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="bg-white/80 text-muted-foreground hover:bg-white/90 font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 ease-out shadow-md"
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
            aria-label="No button that runs away"
          >
            No 💔
          </Button>
        </div>
        <p className="text-xs text-primary-foreground/60 mt-4 font-serif italic">
          (Psst... there's only one right answer 😉)
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ValentineModal;
