import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BadgeR } from "../Badge";

export const ProjectTwo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const images = [
    "https://res.cloudinary.com/doeoriu04/image/upload/v1750939432/4a4bf2b6-ca6e-4180-a112-87287ab09071.png",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1750939486/a0ca036b-df1d-438b-a44c-7eaf503a09a8.png",
    "https://res.cloudinary.com/doeoriu04/image/upload/v1750939711/998d6b40-dc3b-4c0b-852a-3a0f251b56cc.png"
  ];
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 50 });
    }
  }, [inView, controls]);

  return (
    <div className="flex flex-col h-full p-4 px-6 sm:px-10 lg:px-12 my-12">
      <div className="text-2xl sm:text-3xl font-extrabold text-black mb-6 sm:mb-10">
        IPL Match Winner Predictor
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 rounded-xl">
        {/* Left Side: Image Slider */}
        <div className="flex flex-col w-full lg:w-2/5 gap-0 relative">
          <motion.div
            whileHover={{ y: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-t-xl overflow-visible shadow-lg z-0 relative"
          >
            <img
              src={images[current]}
              alt={`ipl-${current}`}
              className="w-full h-64 sm:h-72 object-contain transition duration-300"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 p-1 rounded-full hover:bg-opacity-100"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>

          <div className="-mt-8 h-28 sm:h-32 text-center text-black bg-[#E3D5CA] flex flex-col items-center justify-center z-10 relative rounded-b-lg shadow-md px-3">
            <span className="text-xs sm:text-sm font-semibold">Feb 2025 – Apr 2025</span>
            <span className="text-base sm:text-lg font-bold mt-1">ML Web App</span>
            <span className="text-xs text-black/70">Streamlit Deployment</span>
            <span className="text-[10px] sm:text-xs italic text-black/60 mt-1">Data-Driven Sports Predictions</span>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:flex-1 rounded-lg p-4 sm:p-5 text-white shadow-md flex flex-col justify-between mt-6 lg:mt-0"
        >
          <div>
            <div className="text-sm sm:text-base text-black mb-4">
              A machine learning web app to predict IPL match outcomes with 82% accuracy using historical match stats.
            </div>

            <div className="flex flex-wrap gap-2 mb-4 text-xs sm:text-sm">
              <BadgeR color="#3572A5" text="Python" />
              <BadgeR color="#F2D857" text="Pandas" />
              <BadgeR color="#F7931E" text="Scikit-learn" />
              <BadgeR color="#FF4B4B" text="Streamlit" />
            </div>

            <ul className="text-xs sm:text-sm list-disc text-black list-inside space-y-1">
              <li>Processed & analyzed 600+ IPL match records using Pandas.</li>
              <li>Engineered features like venue, toss result, and team stats for better prediction.</li>
              <li>Achieved 82% accuracy, improved model by 15% through tuning & evaluation.</li>
              <li>Deployed a clean interactive interface using Streamlit.</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-5">
            <a
              href="https://github.com/your-ipl-ml-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#24292f] text-white px-4 py-2 rounded-md text-xs sm:text-sm font-semibold hover:bg-[#3b4046] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
                  6.53 5.47 7.59.4.07.55-.17.55-.38 
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                  -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 
                  2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                  0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                  0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 
                  4.8c.68 0 1.36.09 2 .26 1.53-1.04 
                  2.2-.82 2.2-.82.44 1.1.16 1.92.08 
                  2.12.51.56.82 1.27.82 2.15 
                  0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
                  1.48 0 1.07-.01 1.93-.01 2.2 0 
                  .21.15.46.55.38A8.013 8.013 0 0 0 16 
                  8c0-4.42-3.58-8-8-8z" />
              </svg>
              View Repo
            </a>
          </div>
        </motion.div>
      </div>
    </div>

  );
};
