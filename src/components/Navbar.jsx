import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }  backdrop-blur-lg bg-white/60 border-b border-black/10 shadow`}
    >
      <div className="px-8 md:px-16 py-4 flex justify-between items-center font-poppins text-sm md:text-lg font-semibold">
        {/* Left links */}
        <div className="flex space-x-6">
          <a href="#projects" className="hover:underline">
            Project
          </a>
          <a href="#aboutme" className="hover:underline">
            About Me
          </a>
          
          <a href="https://drive.google.com/file/d/1HvoPPXdpUsA7wU4mPGY3TEs5K9_9Fffp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
            Resume <ExternalLink size={16} className=""/>
          </a>
        </div>

        {/* Right link */}
        <div className="bg-[#64D2E5] px-4 py-2 rounded-full hover:underline transform transition-transform duration-300 hover:scale-110">
          <a href="#contact" className="hover:underline">
            Ping Me
          </a>
        </div>

      </div>
    </div>
  );
};
