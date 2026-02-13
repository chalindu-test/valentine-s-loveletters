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
      <DialogContent className="valentine-gradient border-primary/20 sm:max-w-md text-center overflow-visible" aria-describedby="valentine-question">
        <DialogHeader>
          <DialogTitle className="font-script text-4xl text-primary-foreground mb-2">
            💖
          </DialogTitle>
          <DialogDescription id="valentine-question" className="text-lg font-serif text-primary-foreground/90">
            Pawani, will you be my Valentine? 💖
          </DialogDescription>
        </DialogHeader>
        <div ref={containerRef} className="flex gap-4 justify-center mt-4 relative min-h-[60px]">
          <Button
            onClick={onAnswer}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-3 rounded-full"
            aria-label="Yes, I will be your Valentine"
          >
            Yes! 💕
          </Button>
          <Button
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-3 rounded-full transition-transform duration-300 ease-out"
            style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
            aria-label="No button that runs away"
          >
            No 💔
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ValentineModal;
