import { useEffect, useRef } from "react";
import { Heart } from "lucide-react";
import Sparkles from "@/components/Sparkles";

const milestones = [
  { date: "15 June 2020", title: "The Day We First Chat", description: "Our story began with a simple WhatsApp message that changed everything 💕" },
  { date: "26 June 2020", title: "Started Our Love Story", description: "The day our hearts decided to beat as one 💞" },
  { date: "28 June 2020", title: "First Met", description: "When I first saw you, I knew my life would never be the same 🌸" },
  { date: "15 July 2023", title: "WSO2 Software Engineer", description: "Chalindu's new journey began, and you were there to celebrate every step 🎉" },
  { date: "20 December 2023", title: "Chalindu Graduated", description: "One milestone achieved, a lifetime of memories made together 🎓" },
  { date: "26 July 2024", title: "Married", description: "The day I got to call you my wife - the best day of my life 💍" },
  { date: "3 October 2024", title: "Pawani Graduated", description: "Your hard work paid off, and I couldn't be more proud of you 🎓✨" },
  { date: "November 2024", title: "Moved to Pepiliyana", description: "Our new home, where we build our dreams together every day 🏡" },
  { date: "November 2024", title: "KIU University Instructor", description: "Pawani began inspiring future nurses with her knowledge and passion 👩‍⚕️" },
  { date: "26 June 2025", title: "5 Year Love Anniversary", description: "Five years of laughter, love, and growing together 💕🥂" },
  { date: "26 July 2025", title: "1 Year Wedding Anniversary", description: "365 days of marriage, a lifetime of love to go ❤️" },
  { date: "1 August 2025", title: "Senior Software Engineer", description: "Chalindu's promotion - your support made all the difference 🚀" },
  { date: "12 February 2026", title: "Lanka Hospitals Nurse", description: "Pawani's new chapter at Lanka Hospitals - healing hearts professionally 💙" },
  { date: "14 February 2026", title: "Happy Valentine's Day!", description: "And many more to come… Forever and always, my love 💖" },
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
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-background via-accent/5 to-background relative">
      <Sparkles />
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 py-4">
            <span className="text-5xl animate-float leading-none block">📖</span>
          </div>
          <h1 className="font-script text-6xl sm:text-7xl text-primary mb-4 drop-shadow-sm">
            Our Timeline
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground text-lg font-serif italic">
            The beautiful chapters of us
            <span className="ml-2 text-2xl not-italic">💕</span>
          </p>
        </div>

        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                className="relative pl-16 opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Enhanced Dot */}
                <div className="absolute left-3.5 top-1 w-7 h-7 rounded-full valentine-gradient border-3 border-white flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
                  <Heart className="w-3.5 h-3.5 text-primary-foreground fill-primary-foreground" />
                </div>

                <div className="bg-gradient-to-br from-card to-primary/5 rounded-2xl p-6 border border-primary/30 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300 group">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full inline-block">
                    {m.date}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-3 group-hover:text-primary transition-colors">{m.title}</h3>
                  <p className="text-muted-foreground text-base font-serif mt-2 leading-relaxed italic">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
