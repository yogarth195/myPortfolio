"use client";

import { useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function Drag() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className="w-24 h-24 rounded-full bg-pink-500 absolute"
    />
  );
}

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

function useFollowPointer(ref) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const rect = element.getBoundingClientRect();
      x.set(clientX - rect.left - rect.width / 2);
      y.set(clientY - rect.top - rect.height / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return { x, y };
}
