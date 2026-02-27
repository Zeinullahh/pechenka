"use client";

import { cn } from "@/lib/utils";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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






// Helper Component for Auto-Scrolling Sections
function AutoScrollSection({ children, speed = 0.5, className = "" }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;
    let accumulator = 0;

    const step = () => {
      if (!el) return;
      
      const halfWidth = el.scrollWidth / 2;

      // Auto-scroll logic
      if (!isPaused) {
        accumulator += speed;
        // Apply scroll when we have at least 1px of movement accumulated
        if (accumulator >= 1) {
          el.scrollLeft += 1;
          accumulator -= 1;
        }
      }

      // Seamless Loop Logic
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth; 
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft += halfWidth;
      }

      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [speed, isPaused]);

  return (
    <div
      ref={scrollRef}
      className={`flex overflow-x-auto ${className} no-scrollbar cursor-grab active:cursor-grabbing select-none`}
      // Pause interactions on hover/touch
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      
      style={{ 
        scrollbarWidth: "none", 
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch" 
      }}
    >
      {children}
    </div>
  );
}

export default function HomeLanding() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const withLocalePrefix = (path) => {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return `/${language}${normalizedPath}`;
  };

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

      <main className="relative mx-auto flex flex-col gap-0 pb-16 z-10">

        {/* Hero Section - Clean and Beautiful */}
        <section className="relative w-full pt-20 pb-10 px-4 sm:px-6 lg:px-8">
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

              {/* Animated wave underline removed */}
            </motion.div>
          </div>
        </section>

        {/* Systems - Moved higher with 3D animations */}
        <section id="systems" className="space-y-12 pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-2">
            {systems.map((item, idx) => (
              <EdgeGlowCard
                key={item.key}
                mode="static"
                animateOnView={false}
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
                      href={withLocalePrefix(item.href)}
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


        {/* Compliance Section — Scrollable Strip */}
        {(() => {
          const complianceItems = [
            {
              flag: "🇪🇺",
              name: "GDPR",
              citation: "EU Regulation 2016/679",
              desc: t("homeCompliance.cards.gdpr.desc", "The world's most stringent privacy and security law, governing personal data of all EU residents. Sets the global benchmark for data protection worldwide."),
            },
            {
              flag: "🇬🇧",
              name: "UK GDPR",
              citation: "UK Data Protection Act 2018",
              desc: t("homeCompliance.cards.ukGdpr.desc", "Post-Brexit UK equivalent of EU GDPR, retained in domestic law. Substantively identical in scope and obligations — EU GDPR compliance extends to UK GDPR."),
            },
            {
              flag: "🇺🇸",
              name: "CCPA / CPRA",
              citation: "California Consumer Privacy Act, 2020",
              desc: t("homeCompliance.cards.ccpa.desc", "Registration uses Google OAuth, which transmits profile data (name, email, Google ID) to our servers — this is personal data under CCPA. Users retain full rights to know, access, and delete their account data at any time."),
            },
            {
              flag: "🇨🇦",
              name: "PIPEDA",
              citation: "Canada — Personal Information Protection and Electronic Documents Act",
              desc: t("homeCompliance.cards.pipeda.desc", "Applies to any commercial organization handling Canadian residents' data regardless of where the company is based. As we scale globally, personal data from Canadian users is handled with the same minimal-collection standards."),
            },
            {
              flag: "🇸🇦",
              name: "KSA PDPL",
              citation: "Saudi Arabia — SDAIA, 2023",
              desc: t("homeCompliance.cards.ksaPdpl.desc", "Saudi Personal Data Protection Law enforced by SDAIA. Governs collection, processing, and cross-border transfer of personal data."),
            },
            {
              flag: "🇦🇪",
              name: "UAE PDPL",
              citation: "Federal Law No. 45 of 2021",
              desc: t("homeCompliance.cards.uaePdpl.desc", "UAE Personal Data Protection Law regulating personal data processing across the mainland and free zones, including DIFC and ADGM."),
            },
            {
              flag: "🇶🇦",
              name: "Qatar PDPL",
              citation: "Law No. 13 of 2016",
              desc: t("homeCompliance.cards.qatarPdpl.desc", "Qatar's Personal Data Privacy Protection Law administered by the Ministry of Transport and Communications."),
            },
            {
              flag: "🇧🇭",
              name: "Bahrain PDPL",
              citation: "Law No. 30 of 2018",
              desc: t("homeCompliance.cards.bahrainPdpl.desc", "Bahrain Personal Data Protection Law regulated by the Personal Data Protection Authority (PDPA), aligned with international standards."),
            },
            {
              flag: "🇰🇼",
              name: "Kuwait DP",
              citation: "Decree-Law No. 20 of 2014",
              desc: t("homeCompliance.cards.kuwaitDp.desc", "Kuwait's Electronic Communications and Transactions Law establishing data protection obligations for electronic service providers."),
            },
            {
              flag: "🇴🇲",
              name: "Oman PDPL",
              citation: "Royal Decree No. 6 of 2022",
              desc: t("homeCompliance.cards.omanPdpl.desc", "Oman Personal Data Protection Law establishing comprehensive rights for data subjects and obligations for controllers and processors."),
            },
            {
              flag: "🔒",
              name: "Privacy by Design",
              citation: "GDPR Art. 25 · All GCC frameworks",
              desc: t("homeCompliance.cards.privacyByDesign.desc", "Supreme's code scanning runs entirely on your local machine — no source code is ever transmitted or processed externally. Account data (Google OAuth profile) is handled separately under our privacy policy."),
              supremeOnly: true,
            },
          ];





          const doubled = [...complianceItems, ...complianceItems];

          return (
            <section className="pt-24 pb-4 w-full">

              {/* Label + heading */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mb-8 text-center px-4"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-green-300 mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {t("homeCompliance.badge", "Regulatory Compliance")}
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl text-white">
                  {t("homeCompliance.title", "Built for Global Compliance")}
                </h2>
                <p className="mt-3 text-white/50 text-sm">
                  {t("homeCompliance.subtitle", "Continuous live compliance coverage")}
                </p>
              </motion.div>

              {/* Scrollable band */}
              <div className="relative w-full">

                <AutoScrollSection speed={0.5} className="py-5 gap-0">
                  {doubled.map((item, i) => (
                    <div
                      key={`${item.name}-${i}`}
                      className="shrink-0 w-64 mx-3 rounded-2xl border border-white/5 bg-black/20 p-5 backdrop-blur-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-xl leading-none">
                            {item.flag}
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm leading-tight">{item.name}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">{item.citation}</div>
                          </div>
                        </div>
                        <p className="text-sm text-white leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-green-400">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {t("homeCompliance.statusLabel", "Compliant")}
                        </div>
                        {item.supremeOnly && (
                          <div className="inline-flex items-center gap-1 rounded-full border border-violet-400/30 bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
                            {t("homeCompliance.supremeOnly", "Supreme only")}
                          </div>
                        )}
                      </div>
                    </div>

                  ))}
                </AutoScrollSection>
              </div>
            </section>
          );
        })()}

        {/* Partners Section */}
        {(() => {
          const partners = [
            {
              name: "Nur Astana Kurylys",
              capAmount: "$1.5",
              capUnit: "billion",
              logo: "/partners/nur-astana-kurylys.png",
            },
            {
              name: "KazMunayGas",
              capAmount: "$25",
              capUnit: "billion",
              logo: "/partners/kazmunaygas.png",
            },
            {
              name: "QazCloud",
              capAmount: "$100",
              capUnit: "million",
              logo: "/partners/qazcloud.png",
            },
            {
              name: "KazakhCinema",
              capAmount: "$50",
              capUnit: "million",
              logo: "/partners/kazakhcinema.png",
            },
          ];

          const allPartners = [...partners, ...partners, ...partners, ...partners]; // 4x for smooth density and reset logic compatibility

          return (
            <section className="py-12 w-full">
              <div className="mb-10 text-center px-4">
                <h2 className="text-3xl font-bold sm:text-4xl text-white">
                  {t("homePartners.title", "Clients and Partners")}
                </h2>
                <p className="mt-3 text-sm text-white/60">
                  {t("homePartners.subtitle", "Featured here are some of our leading clients and partners; this is not a complete list.")}
                </p>
              </div>
              
              <div className="relative w-full">

                <AutoScrollSection speed={0.4} className="py-8 gap-0 items-center">
                  {allPartners.map((p, i) => (
                    <div 
                      key={`${p.name}-${i}`} 
                      className="shrink-0 w-64 mx-3 p-5 flex flex-col items-center gap-4 group opacity-50 hover:opacity-100 transition-opacity duration-300"
                    >
                      {/* Logo Area */}
                      <div className="relative h-32 w-48 flex flex-col items-center justify-center gap-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                        {/* Use native img + onError fallback or just styled div if missing */}
                        <div className="relative h-20 w-full flex items-center justify-center">
                          <img 
                            src={p.logo} 
                            alt={p.name} 
                            className="max-h-full max-w-full object-contain drop-shadow-md"
                            onError={(e) => {
                               e.currentTarget.style.display = 'none'; 
                            }}
                          />
                        </div>
                        
                        {/* Always visible name below logo */}
                        <div className="text-center">
                           <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">{p.name}</span>
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="text-center mt-2">
                        <div className="text-[10px] text-white/30 font-mono tracking-wider uppercase">{t("homePartners.marketCap", "Market Cap")}</div>
                        <div className="text-sm font-medium text-white/80">{p.capAmount} {t(`homePartners.${p.capUnit}`, p.capUnit === "billion" ? "Billion" : "Million")}</div>
                      </div>
                    </div>
                  ))}
                </AutoScrollSection>
              </div>
            </section>
          );
        })()}


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
                  "Silence is one of few private companies that have government level intelligence."
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