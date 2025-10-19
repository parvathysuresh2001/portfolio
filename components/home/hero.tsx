"use client";
import { AnimatePresence, motion, easeIn, easeOut, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { BlurImage } from "../ui/blur-image";
import { introText } from "@/lib/constants";

const TEXTS = [
  {
    key: "amazing",
    className: "bg-clip-text text-center text-transparent bg-linear-to-r from-[#ff1835] to-[#ffc900]",
  },
  {
    key: "stunning",
    className: "bg-clip-text text-center text-transparent bg-linear-to-r from-[#0077ff] to-[#00e7df]",
  },
  {
    key: "fantastic",
    className: "bg-clip-text text-center text-transparent bg-linear-to-r from-[#7f00de] to-[#ff007f]",
  },
  {
    key: "attractive",
    className: "bg-clip-text text-center text-transparent bg-linear-to-r from-[#2ecc70] to-[#1ca085]",
  },
] as const;

const SPEED = 2;

const variants: Variants = {
  enter: {
    opacity: 0,
    y: 25,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeIn,
    },
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -25,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % TEXTS.length),
      SPEED * 1000
    );

    return () => clearInterval(timer);
  }, []);

  const textItem = TEXTS[currentIndex];
  if (!textItem) return null;

  return (
    <div className="my-16 space-y-6">
      <div className="flex justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-3xl font-bold leading-[30px] sm:leading-[45px] max-w-full sm:max-w-[36.625rem]">
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut" }}
            >
              <span className="inline">
                <span className="inline break-words">{introText.greetingLeft}</span>{" "}
                <span className="relative inline-flex">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={currentIndex}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      layout
                      transition={{ type: "tween", duration: 0.3 }}
                      className="inline-flex"
                    >
                      <span
                        className={`${textItem.className} break-words sm:break-keep text-balance`}
                      >
                        {textItem.key}
                      </span>
                    </motion.span>
                  </AnimatePresence>
                </span>{" "}
                <span className="inline break-words">{introText.greetingRight}</span>
              </span>
            </motion.div>
          </h1>

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut" }}
            className="text-muted-foreground text-sm"
          >
            {introText.location}
          </motion.div>
        </div>
        <motion.div
          className="relative hidden size-28 md:block"
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <BlurImage
            src={introText.imagePath}
            className="rounded-full"
            width={112}
            height={112}
            //quality={75}
            alt="Parvathy Suresh"
            lazy={false}
          />
          <div className="bg-linear-to-tl absolute inset-0 -z-10 from-purple-700 to-orange-700 opacity-50 blur-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;