"use client";

import { cn } from "@/lib/utils";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background/background-beams";
import Header from "@/components/Header";
import BackToTopButton from "@/components/BackToTopButton";
import RequestDemoModal from "@/components/RequestDemoModal";
import GlowButton from "@/components/GlowButton";
import { FloatingText } from "@/components/FloatingText";
import { useLanguage } from "@/contexts/LanguageContext";
import EdgeGlowCard from "@/components/EdgeGlowCard";
import GlassyBox3D from "@/components/GlassyBox3D";
import Supreme2D from "@/components/Supreme2D";
import { StickyScrollAnimation } from "@/components/StickyScrollAnimation";
import MediumArticleCard from "@/components/MediumArticleCard";
import LinkPreviewCard from "@/components/LinkPreviewCard";
import { articles, featuredResourcesConfig } from "@/constants/mediumArticles";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const cardVariants = {
  initial: { opacity: 0, y: 16, rotateX: 0, rotateY: 0, scale: 1 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: { delay: 0.1 * i, duration: 0.45 },
  }),
  hover: {
    rotateX: -2,
    rotateY: 2,
    scale: 1.02,
    transition: { type: "spring", stiffness: 220, damping: 16 },
  },
};

export default function HomeLanding() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
    {
      key: "ai-soc",
      title: t("home.systems.aiSoc.title", "AI-SOC"),
      desc: t(
        "home.systems.aiSoc.desc",
        "Managed detection & response system powered and operated by AI. Used to prevent web and email attacks"
      ),
      href: "/ai-soc",
      badge: t("home.systems.aiSoc.badge", "Subscription"),
    },
    {
      key: "supreme",
      title: t("home.systems.supreme.title", "Supreme"),
      desc: t(
        "home.systems.supreme.desc",
        "Local code vulnerability scanner for VSCode. Analyze your code for security vulnerabilities without exposing it to external servers."
      ),
      href: "/supreme",
      badge: t("home.systems.supreme.badge", "Extension"),
    },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#01091C] text-white overflow-hidden">
      <Header onOpenModal={openModal} />

      {/* Background Effect - extends throughout the page */}
      <div className="fixed inset-0 z-0">
        <BackgroundBeams className="opacity-50" />
      </div>

      <main className="relative mx-auto flex flex-col gap-0 pb-16 z-10">

        {/* Hero Section - Clean and Beautiful */}
        <section className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Decorative gradient orbs */}
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-32 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Main Heading with Eye-Catching Effect */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% center", "200% center"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    textShadow: "0 0 80px rgba(147, 51, 234, 0.5)",
                  }}
                >
                  {t("home.hero.title", "Cybersecurity is no longer")}
                </motion.span>
                <br />
                <motion.span
                  className="inline-block relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {t("home.hero.titleHighlight", "complicated or expensive anymore")}
                  </span>
                </motion.span>
              </h1>

              {/* Animated wave underline - positioned below the heading */}
              <motion.div
                className="relative w-full h-16 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <svg
                  className="absolute left-1/2 -translate-x-1/2 w-full max-w-3xl h-10"
                  viewBox="0 0 600 40"
                  preserveAspectRatio="none"
                  style={{ overflow: 'visible' }}
                >
                  <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Primary animated wave */}
                  <motion.path
                    d="M0,20 C50,5 100,35 150,20 C200,5 250,35 300,20 C350,5 400,35 450,20 C500,5 550,35 600,20"
                    fill="none"
                    stroke="url(#waveGradient1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      d: [
                        "M0,20 C50,5 100,35 150,20 C200,5 250,35 300,20 C350,5 400,35 450,20 C500,5 550,35 600,20",
                        "M0,20 C50,35 100,5 150,20 C200,35 250,5 300,20 C350,35 400,5 450,20 C500,35 550,5 600,20",
                        "M0,20 C50,5 100,35 150,20 C200,5 250,35 300,20 C350,5 400,35 450,20 C500,5 550,35 600,20",
                      ]
                    }}
                    transition={{
                      pathLength: { duration: 1.5, delay: 0.8, ease: "easeOut" },
                      d: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.3 }
                    }}
                  />
                  {/* Secondary wave (offset) */}
                  <motion.path
                    d="M0,22 C50,37 100,7 150,22 C200,37 250,7 300,22 C350,37 400,7 450,22 C500,37 550,7 600,22"
                    fill="none"
                    stroke="url(#waveGradient2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{
                      pathLength: 1,
                      d: [
                        "M0,22 C50,37 100,7 150,22 C200,37 250,7 300,22 C350,37 400,7 450,22 C500,37 550,7 600,22",
                        "M0,22 C50,7 100,37 150,22 C200,7 250,37 300,22 C350,7 400,37 450,22 C500,7 550,37 600,22",
                        "M0,22 C50,37 100,7 150,22 C200,37 250,7 300,22 C350,37 400,7 450,22 C500,37 550,7 600,22",
                      ]
                    }}
                    transition={{
                      pathLength: { duration: 1.8, delay: 1, ease: "easeOut" },
                      d: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2.8 }
                    }}
                  />
                  {/* Animated particles/dots along the wave */}
                  <motion.circle
                    r="4"
                    fill="#22d3ee"
                    filter="url(#glow)"
                    animate={{
                      cx: [0, 150, 300, 450, 600],
                      cy: [20, 5, 20, 35, 20],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2.5 }}
                  />
                  <motion.circle
                    r="3"
                    fill="#a855f7"
                    filter="url(#glow)"
                    animate={{
                      cx: [600, 450, 300, 150, 0],
                      cy: [20, 35, 20, 5, 20],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 3 }}
                  />
                </svg>
                {/* Floating keywords */}
                <div className="absolute top-10 left-0 right-0 flex justify-between max-w-2xl mx-auto px-8">
                  <motion.span
                    className="text-[10px] sm:text-xs font-bold text-cyan-400 tracking-widest"
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    AI
                  </motion.span>
                  <motion.span
                    className="text-[10px] sm:text-xs font-bold text-blue-400 tracking-widest"
                    animate={{
                      y: [0, -6, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    FUTURE
                  </motion.span>
                  <motion.span
                    className="text-[10px] sm:text-xs font-bold text-purple-400 tracking-widest"
                    animate={{
                      y: [0, -5, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    SECURITY
                  </motion.span>
                </div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="mt-10 text-xl sm:text-2xl md:text-3xl font-medium text-white/80"
              >
                {t("home.hero.subtitle", "Build securely. Deploy confidently.")}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Systems - Moved higher with 3D animations */}
        <section id="systems" className="space-y-12 pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-center">
              {t("home.systems.title", "Systems")}
            </h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {systems.map((item, idx) => (
              <EdgeGlowCard
                key={item.key}
                mode="static"
                glowColor={idx === 0 ? "#FF00B7" : "#00BFFF"}
                secondaryGlowColor={idx === 0 ? "rgba(32,140,255,0.45)" : "rgba(168,85,247,0.45)"}
                outerClassName="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-[2px]"
                innerClassName="rounded-[22px] bg-black/40 backdrop-blur-xl p-8 sm:p-10 lg:p-12 h-full transition duration-300 group-hover:bg-black/60"
              >
                {/* Inner breathing glow effect - Exclude for Supreme */}
                <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
                {item.key !== 'supreme' && (
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none ${idx === 0 ? 'bg-pink-500' : 'bg-blue-500'} animate-pulse`} />
                )}

                <div className="flex flex-col lg:flex-row gap-8 relative z-10">
                  {/* 3D Animation Area */}
                  <div className="w-full lg:w-1/2 h-[320px] sm:h-[380px] lg:h-[400px] relative flex items-center justify-center">
                    {item.key === 'supreme' ? (
                      /* Supreme Animation - 2D */
                      <div className="relative w-full h-full flex items-center justify-center scale-[1.1]">
                        <Supreme2D />
                      </div>
                    ) : idx === 0 ? (
                      /* AI-SOC Animation */
                      <div className="relative w-full h-full scale-[0.85]">
                        <StickyScrollAnimation />
                      </div>
                    ) : (
                      /* Sithub Animation */
                      <div className="relative w-full h-full flex items-center justify-center scale-[0.7]">
                        <GlassyBox3D />
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="space-y-5">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
                        {item.badge}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-4xl font-semibold text-white sm:text-5xl">{item.title}</h3>
                        <p className="text-lg text-white/75 sm:text-xl leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <Link
                      href={item.href}
                      className="mt-8 inline-flex h-[56px] items-center justify-center gap-2 rounded-full bg-white px-8 text-lg font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-100"
                    >
                      {t("home.systems.cta", "View details")}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </EdgeGlowCard>
            ))}
          </div>
        </section>


        {/* Featured Resources - Auto-fetching Link Previews */}
        <section className="space-y-8 pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold sm:text-4xl">
                {t("home.resources.title", "Featured articles")}
              </h2>
              <p className="text-white/70 max-w-xl">
                {t(
                  "home.resources.subtitle",
                  "Silence AI is one of few private companies that have government level intelligence."
                )}
              </p>
            </div>
            {featuredResourcesConfig.showViewAllLink && (
              <a
                href={featuredResourcesConfig.mediumProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap"
              >
                {t("home.resources.viewAll", "View all articles")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, featuredResourcesConfig.displayCount).map((article, idx) => (
              <MediumArticleCard key={article.url} article={article} index={idx} />
            ))}
          </div>
        </section>

        {/* Spacer between Featured Resources and Discover section */}
        <div className="py-16 sm:py-20 lg:py-24" />

        <div className="w-full">
          <FloatingText />
        </div>

      </main>

      <BackToTopButton />
      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
}