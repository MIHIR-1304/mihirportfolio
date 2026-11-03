"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.95]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] font-semibold text-purple-200">
          Core Technical Skills &amp; Stack
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] md:text-[38px] text-white font-extrabold mt-[12px] text-center mb-[10px] tracking-tight"
      >
        Engineering Scalable Systems With Modern Technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[14px] md:text-[16px] text-gray-300 max-w-2xl text-center mb-6 leading-relaxed"
      >
        From Spring Boot microservices, Docker &amp; PostgreSQL schemas to edge computer vision and autonomous robotics.
      </motion.div>
    </div>
  );
};
