import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/memories", label: "Memories" },
  { to: "/song", label: "Our Song" },
  { to: "/timeline", label: "Timeline" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/70 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2 font-script text-2xl text-primary" aria-label="Home">
          <Heart className="w-5 h-5 fill-primary text-primary" />
          LoveLetters
        </Link>
        <div className="flex gap-1 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm px-2 py-1 rounded-md transition-colors ${
                location.pathname === item.to
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
