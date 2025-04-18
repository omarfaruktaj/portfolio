"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX, useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Separator } from "./separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    link: string;
    name: string;
    label?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((current) => {
      // Check if current is not undefined and is a number
      if (typeof current === "number") {
        const previous = scrollYProgress.getPrevious();
        const direction = previous !== undefined ? current - previous : 0;

        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const pathName = usePathname();

  const handleDownload = () => {
    window.open("/assets/resume.pdf", "_blank");
    const pdfUrl = "/assets/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Omar Resume.pdf";
    link.click();
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-50 pr-2 pl-2 py-2 items-center justify-center space-x-1",
          className
        )}
      >
        {/* <SunIcon /> */}
        <ModeToggle />
        <div>
          <Separator orientation="vertical" className="h-6" />
        </div>
        <TooltipProvider delayDuration={300}>
          {navItems.map((navItem, idx: number) => (
            <Tooltip key={`link=${idx}`}>
              <TooltipTrigger>
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative text-muted-foreground hover:text-primary items-center flex space-x-1 hover:bg-accent rounded-full transition-colors duration-200",
                    pathName === navItem.link ? "bg-accent text-primary" : ""
                  )}
                >
                  <span className="block sm:block">{navItem.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent className=" mt-3 text-base md:hidden">
                {navItem.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>

        <button
          onClick={handleDownload}
          className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
        >
          <span>Resume</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
