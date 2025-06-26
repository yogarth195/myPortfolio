import { useEffect, useState, useRef } from "react";

export const CustomCursorMagnifier = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const magnifierRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div>
      <div
        ref={magnifierRef}
        className="fixed z-[9999] pointer-events-none overflow-hidden border border-white rounded-full"
        style={{
          width: "150px",
          height: "150px",
          left: pos.x - 75,
          top: pos.y - 75,
        }}
      >
        <div
          className="fixed"
          style={{
            transform: `translate(-${pos.x * 2 - 75}px, -${pos.y * 2 - 75}px) scale(2)`,
            width: "100vw",
            height: "100vh",
          }}
        >
          {/* Whole page snapshot */}
          <div className="pointer-events-none">{document.body.cloneNode(true)}</div>
        </div>
      </div>
    </div>
  );
};
