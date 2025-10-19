"use client";

import { experiences } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const Experience = () => {
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
      <h2 className="text-2xl font-bold mt-12">Experience</h2>
      <ol className="overflow-hidden mt-6">
        {experiences.map((item, stepIdx) => (
          <li
            key={item.id}
            className={cn(
              stepIdx !== experiences.length - 1 ? "pb-6" : "",
              "relative"
            )}
          >
            <div className="absolute left-4 -ml-px mt-1 h-full w-[1px] bg-gray-200 dark:bg-border" />
            <div className="group relative flex items-start overflow-hidden">
              <span className="ml-2.5 mt-1 flex items-center">
                <span className="relative z-10 flex w-3 h-3 items-center justify-center rounded-full bg-blue-400 dark:bg-anchor"></span>
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
                <motion.h3
                  className="text-lg font-semibold overflow-hidden"
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
                  {item.title}
                </motion.h3>
                <p className="font-semibold text-[#5f5f5f] dark:text-[#d4d4d4]">
                  {item.organization}
                </p>
                <div className="rounded-md border bg-zinc-50 px-1.5 py-0.5 text-base dark:bg-zinc-900 w-fit">
                  <p className="font-medium text-sm text-muted-foreground dark:text-white">
                    {item.date}
                  </p>
                </div>
                {item.description && item.description.length > 0 && (
                  <ul className="list-disc pl-4 text-muted-foreground">
                    {item.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}
              </motion.span>
            </div>
          </li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Experience;