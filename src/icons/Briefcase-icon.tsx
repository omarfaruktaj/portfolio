"use client";

import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const briefcaseVariants: Variants = {
  normal: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 0.4,
      opacity: { duration: 0.1 },
    },
  },
  animate: {
    opacity: [0, 1],
    pathLength: [0, 1],
    pathOffset: [1, 0],
    transition: {
      duration: 0.6,
      ease: "linear",
      opacity: { duration: 0.1 },
    },
  },
};

const BriefcaseIcon = ({ name }: { name: string }) => {
  const briefcaseControls = useAnimation();

  const handleMouseEnter = () => {
    briefcaseControls.start("animate");
  };

  const handleMouseLeave = () => {
    briefcaseControls.start("normal");
  };

  return (
    <div
      className="cursor-pointer select-none p-2 md:py-2 md:px-3 space-x-1 hover:bg-accent rounded-full transition-colors duration-200 flex  justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
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
        <motion.path
          variants={briefcaseVariants}
          initial="normal"
          animate={briefcaseControls}
          d="M2 7h20v14H2z"
        />
        <motion.path
          variants={briefcaseVariants}
          initial="normal"
          animate={briefcaseControls}
          d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2"
        />
        <motion.line
          variants={briefcaseVariants}
          initial="normal"
          animate={briefcaseControls}
          x1="2"
          y1="13"
          x2="22"
          y2="13"
        />
      </svg>
      <div className="hidden md:block text-base">{name}</div>
    </div>
  );
};

export { BriefcaseIcon };
