"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 md:px-20 mt-36 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.95]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-semibold text-purple-200">
            Mihir Mahato | Software Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-[650px] leading-tight"
        >
          <span>
            Building scalable{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-500">
              microservices
            </span>{" "}
            &amp; intelligent systems.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-base text-gray-300 my-4 max-w-[600px] leading-relaxed"
        >
          Entry-level software developer (B.Tech CSE, 2026) with strong fundamentals in Java, Python, C++, SQL, and System Design. Experienced in building full-stack and microservices applications with Spring Boot, React, PostgreSQL, Redis, and Docker, alongside edge AI computer vision and 3D navigation pipelines.
        </motion.p>

        <div className="flex items-center gap-4 flex-wrap">
          <motion.a
            variants={slideInFromLeft(1)}
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2.5 px-6 button-primary text-center text-white font-semibold cursor-pointer rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all"
          >
            Open My CV / Resume
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.1)}
            href="#projects"
            className="py-2.5 px-6 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-cyan-400/40 text-cyan-200 hover:text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            Explore Projects
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden lg:flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
