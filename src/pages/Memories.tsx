import { useState } from "react";
import { X } from "lucide-react";
import Sparkles from "@/components/Sparkles";

const photos = [
  { id: 1, src: "/photos/IMG_2280.jpg", caption: "Forever starts with you 💕", aspect: "tall" },
  { id: 2, src: "/photos/IMG_3143.jpg", caption: "Our beautiful journey together 🌸", aspect: "wide" },
  { id: 3, src: "/photos/IMG_4463.jpg", caption: "Making memories with you 💝", aspect: "square" },
  { id: 4, src: "/photos/IMG_4543 2.jpg", caption: "Your smile lights up my world 😊", aspect: "tall" },
  { id: 5, src: "/photos/IMG_5059.jpg", caption: "Adventures are better with you 🌍", aspect: "wide" },
  { id: 6, src: "/photos/IMG_5831.jpg", caption: "Love in every moment ❤️", aspect: "square" },
  { id: 7, src: "/photos/IMG_6700.jpg", caption: "You and me, always 💑", aspect: "tall" },
  { id: 8, src: "/photos/IMG_7003.jpg", caption: "Perfect moments 🌟", aspect: "square" },
  { id: 9, src: "/photos/IMG_7196.jpg", caption: "My favorite person 💖", aspect: "wide" },
  { id: 10, src: "/photos/IMG_7198.jpg", caption: "Creating our story 📖", aspect: "tall" },
  { id: 11, src: "/photos/IMG_7219.jpg", caption: "Together is my favorite place 🏡", aspect: "square" },
  { id: 12, src: "/photos/IMG_8332.jpg", caption: "Happiness looks like this 😄", aspect: "square" },
  { id: 13, src: "/photos/IMG_8371.jpg", caption: "Love and laughter 💕", aspect: "tall" },
  { id: 14, src: "/photos/IMG_8720.jpg", caption: "Just us 💑", aspect: "square" },
  { id: 15, src: "/photos/IMG_8730.jpg", caption: "Sweet memories 🍰", aspect: "wide" },
  { id: 16, src: "/photos/IMG_9268.jpg", caption: "My heart is yours 💝", aspect: "square" },
  { id: 17, src: "/photos/IMG_9472.jpg", caption: "Beautiful moments 🌺", aspect: "tall" },
  { id: 18, src: "/photos/MIE05707_Original.jpg", caption: "You are my sunshine ☀️", aspect: "wide" },
  { id: 19, src: "/photos/NAD_6134_Original.jpg", caption: "Forever and always 💖", aspect: "square" },
];

const aspectMap: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const Memories = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-background via-primary/5 to-background relative">
      <Sparkles />

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-7xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-serif text-center drop-shadow-lg">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block py-4 mb-4">
            <span className="text-5xl animate-float leading-none block">📸</span>
          </div>
          <h1 className="font-script text-6xl sm:text-7xl text-primary mb-4 drop-shadow-sm">
            Our Memories
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground text-lg font-serif italic">
            Every moment with you is a treasure
            <span className="ml-2 text-2xl not-italic">💝</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative rounded-2xl overflow-hidden border border-primary/30 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 ${aspectMap[photo.aspect]}`}
              style={{ animation: `fade-in-up 0.6s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-serif font-semibold drop-shadow-lg">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;
