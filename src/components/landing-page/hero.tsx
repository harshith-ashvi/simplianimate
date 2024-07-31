"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { HeroHighlight, Highlight } from "../ui/hero-hightlight";
import { FlipWords } from "../ui/flip-words";

export function Hero() {
  const words = ["simple", "easy"];
  return (
    <HeroHighlight className="flex flex-col items-center">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div>
          <Highlight className="text-black">Animation videos</Highlight> made
          <FlipWords words={words} />
        </div>
        <div>
          through <Highlight className="text-black">templates.</Highlight>
        </div>
      </motion.h1>
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block mt-6">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        {/* <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-1 px-6 ring-1 ring-white/10 ">
          <Link href="https://app.simplianimate.com/signup">Join for Free</Link>
        </div> */}
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
    </HeroHighlight>
  );
}
