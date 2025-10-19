"use client";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { education } from "@/lib/constants";

const variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Education = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5,
      }}
      className=""
    >
      <motion.h2
        className="text-2xl font-bold mt-12"
        initial={{
          x: 30,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        Education
      </motion.h2>
      <ol className="overflow-hidden mt-6">
        {education.map((item, stepIdx) => (
          <li
            key={item.id}
            className={cn(stepIdx !== education.length - 1 ? "pb-6" : "", "relative")}
          >
            <div className="absolute left-4 -ml-px mt-1 h-full w-[1px] bg-gray-200 dark:bg-border" />
            <div className="group relative flex items-start">
              <span className="ml-2.5 mt-1 flex items-center">
                <span className="relative z-10 flex w-3 h-3 items-center justify-center rounded-full bg-blue-400 dark:bg-anchor "></span>
              </span>
              <motion.span
                className="ml-4 -m-1 flex gap-1 min-w-0 flex-col overflow-hidden"
                initial={{
                  x: 30,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <h3 className="text-lg font-semibold">{item.course}</h3>
                <p className="font-semibold text-[#5f5f5f] dark:text-[#d4d4d4]">{item.institution}</p>
                <div className="rounded-md border bg-zinc-50 px-1.5 py-0.5 text-base dark:bg-zinc-900 w-fit">
                  <p className="font-medium text-sm text-muted-foreground dark:text-white">{item.period}</p>
                </div>
                {item.description && <p className="text-muted-foreground">{item.description}</p>}
              </motion.span>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Education;