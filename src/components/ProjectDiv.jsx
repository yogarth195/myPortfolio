import { useEffect, useRef, useState } from "react";

export const ProjectCard = () => {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);
  const lastY = useRef(window.scrollY);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = window.scrollY;

        if (entry.isIntersecting && currentY > lastY.current) {
          setVisible(true);
          observer.disconnect(); // run only once on scroll down
        }

        lastY.current = currentY;
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full p-6 transition-all duration-700 ease-out transform rounded-xl shadow-md border
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Project Title */}
      <div className="font-extrabold text-xl mb-4 tracking-wide">
        Project Name <span className="inline-block rotate-45">↗</span>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row border rounded-lg overflow-hidden">
        {/* Left - Image (1/3 width) */}
        <div className="w-full md:w-2/5 flex items-center justify-center p-6 transition-transform duration-500 hover:-translate-y-4">
          <span className="text-2xl text-black border-2">[Image Here]</span>
        </div>

        {/* Right - Description (2/3 width) */}
        <div className="w-full md:w-3/5 p-6 flex flex-col justify-center space-y-3 text-base text-black">
          <p>📌 A cool use case that solves a real-world problem.</p>
          <p>🛠️ Built with React, Node.js, and Tailwind CSS.</p>
          <p>🚀 Features like authentication, dashboards, and more.</p>
        </div>
      </div>
    </div>
  );
};
