'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross2, RxGithubLogo, RxCopy, RxCheck } from "react-icons/rx";
import { FaExternalLinkAlt, FaPlay, FaCube, FaCheckCircle, FaLayerGroup } from "react-icons/fa";
import { ModelViewer } from "./model-viewer";

export type ProjectDetailData = {
  title: string;
  shortDescription?: string;
  description: string;
  image: string;
  video?: string;
  model?: string;
  link?: string;
  liveLink?: string;
  github?: string;
  category?: string;
  subcategory?: string;
  tags?: readonly string[] | string[];
  highlights?: readonly string[] | string[];
  architecture?: string[];
  role?: string;
  date?: string;
};

interface ProjectDetailModalProps {
  project: ProjectDetailData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) => {
  const [copied, setCopied] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isViewingModel, setIsViewingModel] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset media states when project changes
  useEffect(() => {
    setIsPlayingVideo(false);
    setIsViewingModel(false);
    setCopied(false);
  }, [project]);

  if (!isOpen || !project) return null;

  const githubUrl = project.github || (project.link?.includes("github.com") ? project.link : "https://github.com/MIHIR-1304");
  const liveUrl = project.liveLink || (project.link && !project.link.includes("github.com") ? project.link : undefined);

  const handleCopyLink = () => {
    if (githubUrl) {
      navigator.clipboard.writeText(githubUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-gradient-to-b from-[#11072e] via-[#09021a] to-[#04010f] border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.25)] text-gray-200 custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0a041f]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FaLayerGroup className="text-sm" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {project.category || "Featured Project"}
              </span>
              {project.subcategory && (
                <span className="text-xs text-gray-400 ml-2">
                  • {project.subcategory}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-red-500/20 hover:text-red-400 border border-white/10 text-gray-300 transition-colors cursor-pointer"
            title="Close dialog"
          >
            <RxCross2 className="text-lg" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Media Showcase: Image / Video / 3D Model */}
          <div className="relative w-full aspect-[16/9] max-h-[380px] rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl flex items-center justify-center">
            {isViewingModel && project.model ? (
              <div className="w-full h-full relative">
                <ModelViewer url={project.model} />
                <button
                  onClick={() => setIsViewingModel(false)}
                  className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-black/70 border border-white/20 text-white hover:bg-black"
                >
                  Close 3D View
                </button>
              </div>
            ) : isPlayingVideo && project.video ? (
              <div className="w-full h-full relative">
                <video
                  src={project.video}
                  autoPlay
                  controls
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setIsPlayingVideo(false)}
                  className="absolute top-3 right-3 p-1.5 text-xs rounded-full bg-black/70 border border-white/20 text-white hover:bg-red-600"
                >
                  <RxCross2 />
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain sm:object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Media controls overlay if video or model exist */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  {project.video && (
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-purple-600/90 hover:bg-purple-500 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-all cursor-pointer"
                    >
                      <FaPlay className="text-[10px]" />
                      <span>Play Video</span>
                    </button>
                  )}
                  {project.model && (
                    <button
                      onClick={() => setIsViewingModel(true)}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-600/90 hover:bg-cyan-500 text-white text-xs font-semibold backdrop-blur-md shadow-lg transition-all cursor-pointer"
                    >
                      <FaCube className="text-xs" />
                      <span>Launch 3D Model</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Project Header Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            {project.shortDescription && (
              <p className="mt-2 text-sm md:text-base text-cyan-200/90 font-medium leading-relaxed">
                {project.shortDescription}
              </p>
            )}
          </div>

          {/* Detailed Description */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 leading-relaxed">
            <h3 className="text-xs uppercase font-bold tracking-wider text-purple-300 mb-2">
              Project Overview
            </h3>
            <p>{project.description}</p>
          </div>

          {/* CV Highlights & Key Architectural Achievements */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/20">
              <h3 className="text-xs uppercase font-bold tracking-wider text-cyan-300 mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-emerald-400" />
                <span>Key Architecture &amp; Engineering Achievements (CV)</span>
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-200">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2.5">
                Technologies &amp; Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-white/[0.05] border border-cyan-500/30 text-cyan-200 font-medium backdrop-blur-md shadow-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Primary Action Buttons: GitHub Repo & Live Demo */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Repository Info & Direct URL Box */}
            <div className="flex-1 flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/10 text-xs">
              <div className="flex items-center gap-2 truncate mr-2">
                <RxGithubLogo className="text-lg text-gray-300 flex-shrink-0" />
                <span className="text-gray-400 truncate font-mono text-[11px]">
                  {githubUrl}
                </span>
              </div>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-gray-200 transition-colors flex-shrink-0 cursor-pointer"
                title="Copy GitHub link"
              >
                {copied ? (
                  <>
                    <RxCheck className="text-emerald-400 text-sm" />
                    <span className="text-[10px] text-emerald-300">Copied</span>
                  </>
                ) : (
                  <>
                    <RxCopy className="text-gray-300 text-xs" />
                    <span className="text-[10px]">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Open Buttons */}
            <div className="flex items-center gap-3">
              {githubUrl && (
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all"
                >
                  <RxGithubLogo className="text-base" />
                  <span>GitHub Repo</span>
                  <FaExternalLinkAlt className="text-[10px] opacity-70" />
                </Link>
              )}

              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="text-[10px] opacity-80" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
