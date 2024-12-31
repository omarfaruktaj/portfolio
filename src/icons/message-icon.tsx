"use client";

import { Variants, motion, useAnimation } from "framer-motion";

const iconVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: 1.05,
    rotate: [0, -7, 7, 0],
    transition: {
      rotate: {
        duration: 0.5,
        ease: "easeInOut",
      },
      scale: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
};

const MessageCircleIcon = ({ name }: { name: string }) => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 md:py-2 md:px-3 space-x-1 hover:bg-accent rounded-full transition-colors duration-200 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={iconVariants}
        animate={controls}
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </motion.svg>
      <div className="hidden md:block text-base">{name}</div>
    </div>
  );
};

export { MessageCircleIcon };