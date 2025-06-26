import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiMongodb, SiExpress, SiNodedotjs, SiGit, SiGithub,
  SiDocker, SiPython, SiScikitlearn, SiTableau, SiPandas,
  SiNextdotjs, SiTypescript,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const skillSections = [
  {
    title: "Web Development (MERN Stack + Next.js)",
    skills: [
      { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
      { icon: SiReact, label: "React", color: "#61DBFB" },
      { icon: SiTypescript, label: "TypeScript", color: '#3178C6' },
      { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
      { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38BDF8" },
      { icon: SiHtml5, label: "HTML5", color: "#e34c26" },
      { icon: SiCss3, label: "CSS3", color: "#264de4" },
      { icon: SiMongodb, label: "MongoDB", color: "#4DB33D" },
      { icon: SiExpress, label: "Express", color: "#000000" },
      { icon: SiNodedotjs, label: "Node.js", color: "#68A063" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: SiScikitlearn, label: "Scikit-learn", color: "#F7931E" },
      { icon: SiTableau, label: "Tableau", color: "#E97627" },
      { icon: SiPandas, label: "Pandas", color: "#150458" },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      { icon: SiGit, label: "Git", color: "#F1502F" },
      { icon: SiGithub, label: "GitHub", color: "#000000" },
      { icon: SiDocker, label: "Docker", color: "#2496ED" },
    ],
  },
];

export const AboutMeSkills = () => {
  const [index, setIndex] = useState(0);
  const section = skillSections[index];

  const next = () => setIndex((prev) => (prev + 1) % skillSections.length);
  const prev = () => setIndex((prev - 1 + skillSections.length) % skillSections.length);

  return (
    <div className="min-h-[60vh] w-full font-inter text-black px-4 py-14 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-12 text-center">My Tech Stack</h2>

      <motion.div layout className="relative w-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h3 className="text-2xl font-extrabold mb-6 text-center">{section.title}</h3>

            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 justify-center items-center min-h-[250px]">
              {section.skills.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center group p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
                >
                  <s.icon
                    size={40}
                    color={s.color}
                    className="group-hover:scale-150 transition-transform duration-300"
                  />
                  <p className="mt-2 text-sm font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-10 gap-6">
          {/* <button
            onClick={prev}
            className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            ⬅ Previous
          </button> */}
          <button
            onClick={next}
            className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Next ➡
          </button>
        </div>
      </motion.div>
    </div>
  );
};
