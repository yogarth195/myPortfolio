import { ProjectCard } from "../components/ProjectDiv";
import {
  Code,
  Lightbulb,
  RocketLaunch,
  Brain,
  Palette,
  MagicWand,
  PuzzlePiece,
} from "phosphor-react";
import { Projectone } from "../components/Projects/Ws";
import { ProjectTwo } from "../components/Projects/AiMl";
import { ProjectThree } from "../components/Projects/Ss";

export const ProjectPage = () => {
  const projects = [
    {
      title: "WebSaarthi",
      description:
        "A platform that bridges local sellers and buyers with easy-to-use tools, featuring custom dashboards, product listings, and role-based access.",
      imageUrl:
        "https://images-cdn.ubuy.co.in/65aa8c25f99ebf3a7e3f1caa-milliard-toy-shopping-cart-for-kids.jpg",
      link: "https://websaarthi.vercel.app",
    },
    {
      title: "AI/ML Cricket T20 Winner Prediction",
      description:
        "A machine learning model that predicts the winner of an ongoing T20 cricket match using real-time data and historical patterns.",
      imageUrl: "/images/cricket-predictor.png",
      link: "https://t20-winner.vercel.app",
    },
    {
      title: "SurajStudio",
      description:
        "A sleek portfolio website for a digital artist, showcasing artwork, client work, and a built-in contact form.",
      imageUrl: "/images/surajstudio.png",
      link: "https://surajstudio.vercel.app",
    },
  ];

  return (
    <div
      id="projects"
      className="relative bg-[#F2F7F2] min-h-screen w-full font-inter text-black font-bold pt-[60px] px-[50px] pb-12 overflow-hidden"
    >
      {/* Decorative Icons (Chandelier-style) */}
      <div className="absolute top-24 left-10 opacity-10 text-black text-[120px] z-0">
        <RocketLaunch color="black" weight="duotone" />
      </div>
      <div className="absolute bottom-16 right-10 opacity-10  text-[110px] z-0">
        <Brain color="black" weight="duotone" />
      </div>
      <div className="absolute top-[35%] right-[22%] opacity-10 text-black text-[90px] z-0">
        <Lightbulb color="black" weight="duotone" />
      </div>
      <div className="absolute bottom-[30%] left-[20%] opacity-10 text-black text-[100px] z-0">
        <Code color="black" weight="duotone" />
      </div>
      <div className="absolute top-1/2 left-[45%] opacity-10 text-black text-[80px] z-0">
        <Palette color="black" weight="duotone" />
      </div>
      <div className="absolute top-[15%] right-[15%] opacity-10 text-black text-[100px] z-0">
        <MagicWand color="black" weight="duotone" />
      </div>
      <div className="absolute bottom-[15%] left-[10%] opacity-10 text-black text-[95px] z-0">
        <PuzzlePiece color="black" weight="duotone" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h1 className="flex justify-center text-4xl font-extrabold mb-6 text-black drop-shadow">
          Projects
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-lg max-w-3xl mb-10 text-black font-medium drop-shadow">
            Here are some of the projects I’ve worked on, showcasing my skills in full-stack development, AI/ML integration, and UI/UX design.
          </p>
        </div>

        <Projectone/>
        <ProjectTwo/>
        <ProjectThree/>

      </div>
    </div>
  );
};
