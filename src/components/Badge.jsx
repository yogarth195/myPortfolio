import { motion } from "framer-motion";

const variants = {
  initial: { backgroundPosition: "0% 50%" },
  hover: {
    backgroundPosition: "100% 50%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};


export const BadgeR = ({color, text}) => {
    return (
        <motion.span
            variants={variants}
            initial="initial"
            whileHover="hover"
            className={`relative overflow-hidden text-black px-3 py-1 rounded-full font-semibold shadow-inner border`}
            style={{
                borderColor: `${color}4D`,
                background: `linear-gradient(120deg, ${color}33, ${color}99)`,
                backgroundSize: "200% 200%",
            }}
        >
            {text}
        </motion.span>
  );
};