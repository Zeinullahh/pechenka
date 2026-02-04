"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import BackToTopButton from "@/components/BackToTopButton";
import RequestDemoModal from "@/components/RequestDemoModal";
import EdgeGlowCard from "@/components/EdgeGlowCard";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import GlowButton from "@/components/GlowButton";
import { FloatingText } from "@/components/FloatingText";
import Spotlights from "@/components/Spotlights";
import SupremeBackground from "@/components/SupremeBackground";
import Supreme2D from "@/components/Supreme2D";
import { 
  SiRuby, 
  SiPython, 
  SiPhp, 
  SiNodedotjs, 
  SiDotnet,
  SiGo, 
  SiRust, 
  SiCplusplus, 
  SiElixir, 
  SiDart, 
  SiSwift, 
  SiJulia 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function SupremeLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useLanguage();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const pricing = {
    USD: {
      monthly: "$18",
      yearly: "$150",
      suffix: "",
    },
  };

  const features = [
    t(
      "supreme.features.items.0",
      "Code analyzer runs locally, the code is not being exposed to external servers"
    ),
    t(
      "supreme.features.items.1",
      "Finds vulnerable packages vulnerabilities within the project"
    ),
    t("supreme.features.items.2", "Finds Misconfigurations, and Secrets"),
    t(
      "supreme.features.items.3",
      "Can scan for CI/CD misconfigurations and vulnerabilities"
    ),
  ];

  const languages = [
    { name: "Ruby", icon: SiRuby, color: "#CC342D" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Node.js (JavaScript)", icon: SiNodedotjs, color: "#339933" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Rust", icon: SiRust, color: "#DEA584" },
    { name: "C / C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Elixir", icon: SiElixir, color: "#A374FF" }, 
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Swift", icon: SiSwift, color: "#F05138" },
    { name: "Julia", icon: SiJulia, color: "#9558B2" },
  ];

  const screenshots = [
    {
      title: t("supreme.screenshots.0.title", "Very straightforward interface"),
      image: "/supreme_dashboard.jpeg",
      contains: [
        "Interactive dashboard",
        "Security score display",
        "Real-time scan status",
      ],
    },
    {
      title: t("supreme.screenshots.1.title", "Well structured security reports"),
      image: "/supreme_report.jpeg",
      contains: [
        "Detailed vulnerability analysis",
        "Code snippets with issues",
        "Severity levels & explanations",
      ],
    },
    {
      title: t("supreme.screenshots.2.title", "History of scans"),
      image: "/supreme_scanning.jpeg",
      contains: [
        "Scan timeline view",
        "Progress tracking",
        "Historical comparisons",
      ],
    },
  ];

  const GlowOrb = ({
    className = "",
    color = "rgba(168,85,247,0.25)",
    size = "28rem",
    blur = "80px",
  }) => (
    <div
      className={`pointer-events-none absolute rounded-full mix-blend-screen ${className}`}
      style={{ background: color, width: size, height: size, filter: `blur(${blur})` }}
      aria-hidden
    />
  );

  const stickyScrollColors = [
    "linear-gradient(to bottom, #01091C, #FF00D4 50%)",
    "#FF00D4",
    "linear-gradient(to bottom, #FF00D4 50%, #01091C)",
  ];

  const stickyScrollContent = [
    {
      title: screenshots[0].title,
      description: "",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-black">
           <img
             src={screenshots[0].image}
             className="w-full h-full object-contain"
             alt={screenshots[0].title}
           />
        </div>
      ),
    },
    {
      title: screenshots[1].title,
      description: "",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-black">
           <img
             src={screenshots[1].image}
             className="w-full h-full object-contain"
             alt={screenshots[1].title}
           />
        </div>
      ),
    },
    {
      title: screenshots[2].title,
      description: "",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-black">
           <img
             src={screenshots[2].image}
             className="w-full h-full object-contain"
             alt={screenshots[2].title}
           />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#01091C] text-slate-200 font-sans selection:bg-pink-500/30 relative">
      <Header onOpenModal={openModal} />

      <main className="relative z-10 pb-24">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-12 overflow-hidden">
          {/* Animated Background Spotlights component */}
          <div className="absolute inset-0 z-0">
             <Spotlights />
          </div>

          {/* Circuit Board / Tech Pattern Overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
            }}
          />

          {/* Abstract Background Animation */}
          <SupremeBackground />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 gap-8">
              {/* Left content */}
              <div className="flex-[2] space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 pl-7 text-xs font-semibold uppercase tracking-[0.15em] text-slate-200"
                >
                  <span className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulse" />
                  {t("supreme.hero.badge", "Supreme · VSCode Extension")}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                >
                  {t("supreme.hero.title", "Local Code Vulnerability Scanner")}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-300 max-w-xl"
                >
                  {t(
                    "supreme.hero.description",
                    "Scan your code locally without exposing it to external servers. Fast, comprehensive vulnerability detection right in your editor."
                  )}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  <GlowButton
                    onClick={() => (window.location.href = "https://supreme.silence.codes")}
                    variant="primary"
                    size="lg"
                  >
                    {t("header.cta.get", "Get")}
                  </GlowButton>
                </motion.div>
              </div>

              {/* Right Box 3D Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex-1 w-full h-[400px] flex items-center justify-center relative"
              >
                  <div className="relative w-full h-full flex items-center justify-center scale-[1.6]">
                    <Supreme2D />
                  </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video / How to Use Guide Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                {t(
                  "supreme.video.title",
                  "Installation & Usage tutorial (5 minutes)"
                )}
              </h3>
              <div className="relative aspect-video bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm group hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/5dPw7giSBus" 
                  title="Installation & Usage tutorial" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
          </motion.div>
        </section>

        {/* Pricing Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {t("supreme.pricing.title", "Simple Pricing")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t(
                "supreme.pricing.subtitle",
                "Choose the plan that works best for you"
              )}
            </p>
          </div>

          {/* Currency Selector (Hidden as only USD is available) */}
          {/* <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                currency === "USD"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60"
              }`}
            >
              USD
            </button>
          </div> */}

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-3xl mx-auto">
            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              onMouseEnter={() => setActiveCardIndex(0)}
              onMouseLeave={() => setActiveCardIndex(null)}
              className="group relative h-full"
            >
              {/* Glow backdrop */}
              <div
                className="absolute -inset-4 rounded-2xl transition-all duration-300 pointer-events-none blur-2xl"
                style={{
                  background: activeCardIndex === 0 ? "linear-gradient(135deg, rgba(168,85,247,0.9), rgba(99,102,241,0.7))" : "transparent",
                  opacity: activeCardIndex === 0 ? 0.3 : 0,
                }}
              />

              {/* Outer wrapper */}
              <div
                className="relative h-full rounded-2xl transition-all duration-300"
                style={{
                  border: "1.5px solid",
                  borderColor: activeCardIndex === 0 ? "rgba(168,85,247,0.8)" : "rgba(168,85,247,0.4)",
                  background: "rgba(20, 20, 35, 0.6)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  boxShadow: activeCardIndex === 0 
                    ? "inset 0 0 60px rgba(168,85,247,0.15), inset 0 0 120px rgba(168,85,247,0.08)"
                    : "inset 0 0 40px rgba(168,85,247,0.06)",
                }}
              >
                {/* Inner card */}
                <div
                  className="relative rounded-2xl overflow-hidden h-full flex flex-col p-5 sm:p-10 transition-all duration-300"
                  style={{
                    background: "rgba(8, 10, 20, 0.50)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    transform: activeCardIndex === 0 ? "translateY(-4px)" : "translateY(0)",
                  }}
                >
                  {/* Colored overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                    style={{
                      background: activeCardIndex === 0 ? "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(99,102,241,0.05))" : "transparent",
                      opacity: 1,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-3 sm:space-y-6 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-lg sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                        {t("supreme.pricing.monthly.title", "Monthly")}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400">
                        {t(
                          "supreme.pricing.monthly.description",
                          "Flexible, cancel anytime"
                        )}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-4">
                      <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                        <span className="text-3xl sm:text-6xl font-bold text-white">
                          {pricing[currency].monthly}
                        </span>
                        <span className="text-xs sm:text-base text-slate-400">
                          /{t("supreme.pricing.month", "month")}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1" />

                    <div className="flex justify-center">
                      <GlowButton
                        onClick={openModal}
                        variant="primary"
                        innerClassName="px-6 py-2 sm:px-7 sm:py-3 text-sm sm:text-base"
                      >
                        {t("supreme.pricing.subscribe", "Subscribe Now")}
                      </GlowButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Yearly Plan - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onMouseEnter={() => setActiveCardIndex(1)}
              onMouseLeave={() => setActiveCardIndex(null)}
              className="group relative h-full"
            >
              {/* Save badge */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 left-8 z-20 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-xs font-bold text-white shadow-lg"
              >
                {t("supreme.pricing.saveBadge", "Save 30%")}
              </motion.div>

              {/* Glow backdrop */}
              <div
                className="absolute -inset-4 rounded-2xl transition-all duration-300 pointer-events-none blur-2xl"
                style={{
                  background: activeCardIndex === 1 ? "linear-gradient(135deg, rgba(168,85,247,0.9), rgba(99,102,241,0.7))" : "transparent",
                  opacity: activeCardIndex === 1 ? 0.3 : 0,
                }}
              />

              {/* Outer wrapper */}
              <div
                className="relative h-full rounded-2xl transition-all duration-300"
                style={{
                  border: "1.5px solid",
                  borderColor: activeCardIndex === 1 ? "rgba(168,85,247,0.8)" : "rgba(168,85,247,0.6)",
                  background: "rgba(20, 20, 35, 0.6)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  boxShadow: activeCardIndex === 1 
                    ? "inset 0 0 60px rgba(168,85,247,0.15), inset 0 0 120px rgba(168,85,247,0.08), 0 0 60px 15px rgba(168,85,247,0.25)"
                    : "inset 0 0 40px rgba(168,85,247,0.08), 0 0 40px 10px rgba(168,85,247,0.15)",
                }}
              >
                {/* Inner card */}
                <div
                  className="relative rounded-2xl overflow-hidden h-full flex flex-col p-5 sm:p-10 transition-all duration-300"
                  style={{
                    background: "rgba(8, 10, 20, 0.50)",
                    backdropFilter: "blur(16px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transform: activeCardIndex === 1 ? "translateY(-4px)" : "translateY(0)",
                  }}
                >
                  {/* Colored overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(99,102,241,0.08))",
                      opacity: 1,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-3 sm:space-y-6 flex-1 flex flex-col">
                    <div>
                      <h3 className="text-lg sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                        {t("supreme.pricing.yearly.title", "Yearly")}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400">
                        {t("supreme.pricing.yearly.description", "Best value")}
                      </p>
                    </div>

                    <div className="pt-2 sm:pt-4">
                      <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                        <span className="text-3xl sm:text-6xl font-bold text-white">
                          {pricing[currency].yearly}
                        </span>
                        <span className="text-xs sm:text-base text-slate-400">
                          /{t("supreme.pricing.year", "year")}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500">
                        {t(
                          "supreme.pricing.perMonthApprox",
                          "~{value} per month",
                          {
                            value: Math.round(
                              parseInt(pricing[currency].yearly.replace(/[^0-9]/g, "")) /
                                12
                            ),
                          }
                        )}
                      </p>
                    </div>

                    <div className="flex-1" />

                    <div className="flex justify-center">
                      <GlowButton
                        onClick={openModal}
                        variant="primary"
                        innerClassName="px-6 py-2 sm:px-7 sm:py-3 text-sm sm:text-base"
                      >
                        {t("supreme.pricing.subscribe", "Subscribe Now")}
                      </GlowButton>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {t("supreme.languages.title", "Supported Languages")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t(
                "supreme.languages.subtitle",
                "Comprehensive security scanning for all major programming languages"
              )}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {languages.map((lang, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-slate-900/60 border border-white/10 text-slate-300 font-medium hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 cursor-default backdrop-blur-sm flex items-center gap-2.5"
              >
                <lang.icon className="w-5 h-5 transition-colors" style={{ color: lang.color }} />
                {lang.name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              {t("supreme.features.title", "Powerful Features")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t(
                "supreme.features.subtitle",
                "Everything you need for secure code development"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute -inset-2 rounded-xl transition-all duration-300 pointer-events-none blur-xl opacity-0 group-hover:opacity-40"
                  style={{
                    background: "linear-gradient(135deg, rgba(168,85,247,0.6), rgba(99,102,241,0.4))",
                  }}
                />
                
                <div className="relative h-full flex items-start gap-4 p-6 bg-slate-900/40 border border-white/5 rounded-xl hover:border-purple-500/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mt-0.5 group-hover:bg-purple-500/40 group-hover:border-purple-500/80 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed group-hover:text-slate-100 transition-colors duration-300">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Screenshots Section - Sticky Scroll */}
        <div className="w-full pt-10 pb-20 relative z-30">
          <div className="hidden lg:block">
            <StickyScroll 
              content={stickyScrollContent} 
              backgroundColors={stickyScrollColors} 
              itemClassName="my-60 md:my-96 lg:my-[30rem]"
            />
          </div>
          <div className="lg:hidden flex flex-col gap-10 px-4 py-12">
            {screenshots.map((item, idx) => (
              <EdgeGlowCard
                key={idx}
                mode="static"
                outerClassName="rounded-3xl p-[2px]"
                innerClassName="glass-card p-6 space-y-4 rounded-3xl"
                glowColor="#FF00B7"
                secondaryGlowColor="rgba(0,191,255,0.7)"
                topColor="#FF00B7"
                leftColor="#FF00B7"
                rightColor="rgba(0,191,255,0.7)"
                bottomColor="rgba(0,191,255,0.7)"
              >
                <h3 className="text-2xl font-semibold text-center text-white">{item.title}</h3>
                <div className="flex justify-center">
                  <div className="relative w-full max-w-[280px] aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-black/60">
                    <img
                      src={item.image}
                      className="w-full h-full object-contain"
                      alt={item.title}
                    />
                  </div>
                </div>
              </EdgeGlowCard>
            ))}
          </div>
        </div>

        {/* Spacer before social dock */}
        <div className="py-16 sm:py-20 lg:py-24" />

        <div className="w-full">
            <FloatingText />
        </div>

      </main>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-6 right-6 text-slate-200 bg-black/40 rounded-full p-2"
            aria-label={t("supreme.lightbox.close", "Close preview")}
          >
            ✕
          </button>

          <img
            src={`/components/supreme/supreme-scan-${lightboxIndex + 1}.png`}
            alt={
              screenshots[lightboxIndex]?.title ||
              t("supreme.lightbox.alt", "Screenshot")
            }
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </div>
  );
}
