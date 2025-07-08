import { useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpToLine } from "lucide-react";

const roles = [
  "Software Developer",
  "UI/UX Designer",
  "Backend Developer",
  "Software Engineer",
  "Full Stack Developer",
];

const TypingText = memo(() => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="text-xl sm:text-2xl md:text-3xl font-thin text-black/90 tracking-wide mt-4 min-h-[2.5rem]"
    >
      {text}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </motion.h2>
  );
});

export const HomePage = () => {
  return (
    <div className="bg-[#EBF5DF] min-h-screen w-full font-inter text-black flex items-center justify-center px-4 sm:px-10 md:px-36 py-10">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold"
          >
            Hi,
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold"
          >
            I am Yogarth
          </motion.h1>

          <TypingText />
        </div>

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-white/20"
        >
          <img
            src="/meme1.png"
            alt="Yogarth"
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};
