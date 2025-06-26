import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutMeSkills } from "./AboutSkills";
import { Code, Lightbulb } from "phosphor-react";
import { useEffect } from "react";
import { GraduationCap } from "lucide-react";

export default function AboutMePage() {
  // Skills Section
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Education Section
  const eduControls = useAnimation();
  const [eduRef, eduInView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 60 });
    }
  }, [inView, controls]);

  useEffect(() => {
    if (eduInView) {
      eduControls.start({ opacity: 1, y: 0 });
    } else {
      eduControls.start({ opacity: 0, y: 30 });
    }
  }, [eduInView, eduControls]);

  return (
    <div id="aboutme" className="relative min-h-screen w-full px-4 sm:px-6 lg:px-8 py-12 bg-[#FEF9FF] font-inter overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 -left-20 w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-0" />
      <div className="absolute bottom-10 -right-10 w-[300px] h-[300px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0" />

      {/* Floating Icons */}
      <motion.div
        className="hidden sm:block absolute top-12 right-12 text-yellow-400 opacity-40 text-6xl z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <Lightbulb />
      </motion.div>
      <motion.div
        className="hidden sm:block absolute bottom-20 left-12 text-purple-500 opacity-40 text-6xl z-0"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Code />
      </motion.div>

      {/* About Me Card */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center bg-white/50 backdrop-blur-md rounded-xl shadow-md p-6 sm:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-gray-800">
          About Me
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-700">
          I'm a developer who loves building full-stack web apps and solving real-world problems using technology.
          Passionate about elegant design, clean code, and creating user-friendly experiences.
        </p>
        </motion.div>

      {/* Education Section */}
      <motion.div
        ref={eduRef}
        animate={eduControls}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl mx-auto mt-20 sm:mt-24 bg-[#CBDFBD] backdrop-blur-md rounded-2xl shadow-xl px-6 sm:px-10 py-10"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800 tracking-tight flex justify-center items-center gap-2">
          <GraduationCap size={40} />
          Education
        </h3>


        <div className="space-y-8 sm:space-y-10">
          {[
            {
              title: "Delhi Technological University",
              subtitle: "B.Tech in Computer Science — 2022 to 2026",
              detail: "CGPA: 7.92(currently)",
            },
            {
              title: "RichMondd Global School",
              subtitle: "Class XII — 2020 to 2021",
              detail: "Percentage: 89.5%",
            },
            {
              title: "RichMondd Global School",
              subtitle: "Class X — 2018 to 2019",
              detail: "Percentage: 92%",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-10 sm:pl-12 border-l-[3px] border-[#5C5470]"
            >
              <div className="absolute -left-4 top-1 bg-white p-1 rounded-full shadow-md">
                <GraduationCap size={20} />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                {edu.title}
              </h4>
              <p className="text-sm text-gray-700">{edu.subtitle}</p>
              <p className="text-sm italic text-gray-700">{edu.detail}</p>
            </motion.div>

          ))}
        </div>
      </motion.div>


      {/* Skills Section */}
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto mt-16 sm:mt-20 px-4 sm:px-8"
      >
        <AboutMeSkills />
      </motion.div>
    </div>
  );
}
