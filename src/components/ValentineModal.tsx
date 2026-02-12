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
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="valentine-gradient border-primary/20 sm:max-w-md text-center" aria-describedby="valentine-question">
        <DialogHeader>
          <DialogTitle className="font-script text-4xl text-primary-foreground mb-2">
            💖
          </DialogTitle>
          <DialogDescription id="valentine-question" className="text-lg font-serif text-primary-foreground/90">
            Pawani, will you be my Valentine? 💖
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 justify-center mt-4">
          <Button
            onClick={onAnswer}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-3 rounded-full"
            aria-label="Yes, I will be your Valentine"
          >
            Yes! 💕
          </Button>
          <Button
            onClick={onAnswer}
            variant="outline"
            className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-lg px-8 py-3 rounded-full"
            aria-label="Always, I will be your Valentine"
          >
            Always 💗
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ValentineModal;
