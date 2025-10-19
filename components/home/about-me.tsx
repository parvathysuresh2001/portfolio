"use client"
import Link from "next/link"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

import Connect from "./connect"
import FavoriteFramework from "./favorite-framework"
import LocationCard from "./location-card"
import StacksCard from "./stacks-card"
import { cn } from "@/lib/utils"
import CodingHours from "./coding-hours"
import { ABOUTME } from "@/lib/constants"

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

const AboutMe = () => {
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
      className="relative my-24"
    >
      <motion.h2
        className="text-center text-3xl font-semibold"
        initial={{
          y: 30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {ABOUTME.aboutMe}
      </motion.h2>
      <motion.div
        className="mt-12 grid gap-4 md:grid-cols-2"
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="grid gap-4">
          <LocationCard />
          <StacksCard />
        </div>
        <div className="grid gap-4">
          <Connect />
          <div className="grid gap-4 [@media(min-width:450px)]:grid-cols-2">
            <CodingHours />
            <FavoriteFramework />
          </div>
        </div>
      </motion.div>
      <div className="my-8 flex items-center justify-center">
        <Link href="/about" className={cn("px-6 py-2 text-sm font-medium border rounded-xl transition-all duration-200 border-foreground text-foreground hover:bg-foreground hover:text-background")}>
          {ABOUTME.knowMore}
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe