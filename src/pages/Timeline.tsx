import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const milestones = [
  { date: "January 2024", title: "The Day We Met", description: "Our story began with a simple hello 💕" },
  { date: "March 2024", title: "First Date", description: "Coffee, conversation, and butterflies 🦋" },
  { date: "June 2024", title: "First Trip Together", description: "Adventures are better with you 🌍" },
  { date: "September 2024", title: "You Said 'I Love You'", description: "Three words that changed everything ❤️" },
  { date: "December 2024", title: "Our First Christmas", description: "The best gift was being with you 🎄" },
  { date: "February 2025", title: "One Year Anniversary", description: "365 days of loving you 🥂" },
  { date: "February 2026", title: "Happy Valentine's Day!", description: "And many more to come… 💖" },
];

const Timeline = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="font-script text-5xl sm:text-6xl text-primary text-center mb-3">
          Our Timeline
        </h1>
        <p className="text-center text-muted-foreground font-serif mb-12">
          The chapters of us 📖
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="relative pl-16 opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full valentine-gradient border-2 border-card flex items-center justify-center shadow-md">
                  <Heart className="w-2.5 h-2.5 text-primary-foreground fill-primary-foreground" />
                </div>

                <div className="bg-card rounded-2xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {m.date}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{m.title}</h3>
                  <p className="text-muted-foreground text-sm font-serif mt-1">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground/60 text-sm mt-10 font-serif">
          💡 Edit the milestones in <code className="bg-muted px-2 py-0.5 rounded text-xs">src/pages/Timeline.tsx</code>
        </p>
      </div>
    </div>
  );
};

export default Timeline;
