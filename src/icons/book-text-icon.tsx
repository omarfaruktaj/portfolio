"use client";

import { motion, useAnimation } from "framer-motion";

const BookTextIcon = ({ name }: { name: string }) => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer  select-none py-2 px-3 space-x-1 hover:bg-accent rounded-full transition-colors duration-200 flex justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        animate={controls}
        variants={{
          animate: {
            scale: [1, 1.04, 1],
            rotate: [0, -8, 8, -8, 0],
            y: [0, -2, 0],
            transition: {
              duration: 0.6,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            },
          },
          normal: {
            scale: 1,
            rotate: 0,
            y: 0,
          },
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M8 11h8" />
        <path d="M8 7h6" />
      </motion.svg>
      <div className="hidden md:block text-base">{name}</div>
    </div>
  );
};

export { BookTextIcon };
