import { useEffect, useState } from "react";
import { MoveDown, MoveUp } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export const UpOrDown = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setIsBottom(scrollPos >= docHeight - 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = () => {
  if (isBottom) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const scrollAmount = window.innerHeight * 0.9; // 90% of viewport height
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  }
};
  
  return (
    <button
      onClick={scrollTo}
      className="fixed bottom-10 right-10 z-50 text-black transition-all duration-300 rounded-full"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isBottom ? "up" : "down"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
            {isBottom ? <MoveUp size={48} strokeWidth={1.5} /> : <MoveDown size={48} strokeWidth={1.5} />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
