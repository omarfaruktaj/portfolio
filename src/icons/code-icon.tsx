"use client";

import { motion, Transition, useAnimation } from "framer-motion";

const defaultTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const ChevronsLeftRightIcon = ({ name }: { name: string }) => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none py-2 px-3 space-x-1   flex items-center justify-center"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "-2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m9 7-5 5 5 5"
        />
        <motion.path
          variants={{
            normal: { translateX: "0%" },
            animate: { translateX: "2px" },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
          d="m15 7 5 5-5 5"
        />
      </svg>
      <div className="hidden md:block text-base">{name}</div>
    </div>
  );
};

export { ChevronsLeftRightIcon };
