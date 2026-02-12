import { Heart } from "lucide-react";

const placeholderPhotos = [
  { id: 1, caption: "Our first adventure together 🌸", aspect: "tall" },
  { id: 2, caption: "That sunset we'll never forget 🌅", aspect: "wide" },
  { id: 3, caption: "Dancing in the rain ☔", aspect: "square" },
  { id: 4, caption: "Your beautiful smile 😊", aspect: "tall" },
  { id: 5, caption: "Coffee dates ☕", aspect: "square" },
  { id: 6, caption: "Under the stars ✨", aspect: "wide" },
];

const aspectMap: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const colorMap: Record<number, string> = {
  0: "from-primary/20 to-primary/10",
  1: "from-accent/30 to-accent/10",
  2: "from-primary/15 to-accent/20",
};

const Memories = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-script text-5xl sm:text-6xl text-primary text-center mb-3">
          Our Memories
        </h1>
        <p className="text-center text-muted-foreground mb-10 font-serif">
          Every moment with you is a treasure 💝
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {placeholderPhotos.map((photo, i) => (
            <div
              key={photo.id}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${colorMap[i % 3]} border border-border/50 group cursor-pointer transition-transform hover:scale-[1.02] ${aspectMap[photo.aspect]}`}
              style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <Heart className="w-8 h-8 text-primary/40 mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-foreground/70 font-serif">{photo.caption}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Add photos to <code className="bg-muted px-1 rounded text-xs">/public/photos</code>
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground/60 text-sm mt-8 font-serif">
          💡 Place your photos in the <code className="bg-muted px-2 py-0.5 rounded">/public/photos</code> folder and update the gallery
        </p>
      </div>
    </div>
  );
};

export default Memories;
