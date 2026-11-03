"use client";

import { useState } from "react";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";
import {
  TECHNICAL_SKILLS_CATEGORIES,
  SKILL_DATA,
  FRONTEND_SKILL,
  BACKEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
} from "@/constants";
import { FaLayerGroup, FaCode, FaServer, FaDatabase, FaTools, FaRobot, FaBrain } from "react-icons/fa";

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Skills", icon: FaLayerGroup },
    { id: "Languages", name: "Languages", icon: FaCode },
    { id: "Core CS Fundamentals", name: "Core CS", icon: FaBrain },
    { id: "Backend & Microservices", name: "Backend & Microservices", icon: FaServer },
    { id: "Databases & Storage", name: "Databases", icon: FaDatabase },
    { id: "Frontend & UI/UX", name: "Frontend", icon: FaCode },
    { id: "Tools, DevOps & Practices", name: "Tools & DevOps", icon: FaTools },
    { id: "AI, Robotics & 3D Engineering", name: "AI & Robotics", icon: FaRobot },
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? TECHNICAL_SKILLS_CATEGORIES
      : TECHNICAL_SKILLS_CATEGORIES.filter((cat) => cat.category === selectedCategory);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-20 px-4 md:px-10 max-w-7xl mx-auto w-full z-20"
    >
      <SkillText />

      {/* Category Pills Selector */}
      <div className="flex items-center justify-center flex-wrap gap-2.5 max-w-4xl mx-auto my-4 z-20">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer backdrop-blur-md ${
                isSelected
                  ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] border border-cyan-400/50 scale-105"
                  : "bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white border border-white/10"
              }`}
            >
              <Icon className="text-xs" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Structured Categorized CV Skills Grid */}
      <div className="w-full flex flex-col gap-8 z-20 my-2">
        {filteredCategories.map((catGroup, groupIdx) => (
          <div
            key={catGroup.category}
            className="p-5 md:p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] via-purple-950/10 to-[#08021a]/90 border border-white/[0.1] backdrop-blur-xl shadow-lg"
          >
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-white/[0.08] gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                    {catGroup.category}
                  </h3>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {catGroup.description}
                </p>
              </div>

              <span className="self-start sm:self-auto text-[11px] font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                {catGroup.skills.length} Skills
              </span>
            </div>

            {/* Skills Items */}
            <div className="flex flex-wrap gap-3.5 items-center justify-start">
              {catGroup.skills.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={"image" in skill ? (skill as any).image : undefined}
                  Icon={"icon" in skill ? (skill as any).icon : undefined}
                  color={"color" in skill ? (skill as any).color : undefined}
                  name={skill.skill_name}
                  level={(skill as any).level}
                  width={60}
                  height={60}
                  index={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Animated Overview Showcase Rows */}
      <div className="w-full mt-10 pt-8 border-t border-white/[0.08] z-20">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Tech Ecosystem &amp; Full Toolchain
          </span>
          <h4 className="text-xl font-extrabold text-white mt-1">
            Complete Stack Overview
          </h4>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {SKILL_DATA.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={"image" in skill ? (skill as any).image : undefined}
                Icon={"icon" in skill ? (skill as any).icon : undefined}
                color={"color" in skill ? (skill as any).color : undefined}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>

          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {FRONTEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={"image" in skill ? (skill as any).image : undefined}
                Icon={"icon" in skill ? (skill as any).icon : undefined}
                color={"color" in skill ? (skill as any).color : undefined}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>

          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {BACKEND_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={"image" in skill ? (skill as any).image : undefined}
                Icon={"icon" in skill ? (skill as any).icon : undefined}
                color={"color" in skill ? (skill as any).color : undefined}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>

          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {FULLSTACK_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={"image" in skill ? (skill as any).image : undefined}
                Icon={"icon" in skill ? (skill as any).icon : undefined}
                color={"color" in skill ? (skill as any).color : undefined}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>

          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {OTHER_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={"image" in skill ? (skill as any).image : undefined}
                Icon={"icon" in skill ? (skill as any).icon : undefined}
                color={"color" in skill ? (skill as any).color : undefined}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Cosmic Background Video */}
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-25 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
