"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { IconType } from "react-icons";

type SkillDataProviderProps = {
  src?: string;
  Icon?: IconType;
  color?: string;
  name: string;
  width: number;
  height: number;
  index: number;
  level?: string;
};

export const SkillDataProvider = ({
  src,
  Icon,
  color,
  name,
  width,
  height,
  index,
  level,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.05;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="group relative flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-cyan-400/50 backdrop-blur-md shadow-md hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:-translate-y-1 transition-all duration-300 min-w-[90px] cursor-pointer"
    >
      <div className="relative flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:scale-110">
        {Icon ? (
          <Icon size={Math.min(width, 42)} color={color || "#ffffff"} title={name} />
        ) : src ? (
          <Image src={`/skills/${src}`} width={width} height={height} alt={name} className="object-contain" />
        ) : null}
      </div>

      <span className="mt-2 text-[11px] font-semibold text-gray-200 text-center tracking-wide group-hover:text-cyan-300 transition-colors line-clamp-1">
        {name}
      </span>

      {level && (
        <span className="mt-0.5 text-[9px] font-medium text-gray-400 text-center group-hover:text-purple-300 transition-colors line-clamp-1">
          {level}
        </span>
      )}
    </motion.div>
  );
};
