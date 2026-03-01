"use client";

import React, { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import SupremeHeroBox from "@/components/SupremeHeroBox";
import Spotlights from "@/components/Spotlights";
import { BackgroundBeams } from "@/components/ui/background/background-beams";
import { FloatingText } from "@/components/FloatingText";
import { SupremeComparisonAnimation } from "./SupremeComparisonAnimation";
import { SupremeVsOthers } from "./SupremeVsOthers";
import { McpFlowAnimation } from "./McpFlowAnimation";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  Code,
  Database,
  FolderSearch,
  Play,
  ShieldCheck,
  Terminal,
  Workflow,
  Wrench,
  X,
} from "lucide-react";
import {
  SiDocker,
  SiGo,
  SiJavascript,
  SiPhp,
  SiPython,
  SiRuby,
  SiRust,
  SiTypescript,
  SiYaml,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

function PricingCard({
  name,
  price,
  subprice,
  badge,
  icon,
  highlights,
  cta,
  onCtaClick,
  videoLabel,
  videoEmbedUrl,
  emphasized = false,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative rounded-2xl border p-7 md:p-8 backdrop-blur-xl ${
        emphasized
          ? "md:-translate-y-2 border-violet-400/40 bg-gradient-to-b from-violet-500/14 via-fuchsia-500/12 to-blue-500/8 shadow-[0_0_55px_rgba(168,85,247,0.2)]"
          : "border-white/10 bg-white/5"
      }`}
    >
      {badge ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 px-3 py-1 text-xs font-semibold text-slate-950">
          {badge}
        </div>
      ) : null}

      <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
        {icon ? <span aria-hidden>{icon}</span> : null}
        {name}
      </div>
      <div className="mb-2 text-4xl font-bold text-white">{price}</div>
      <div className="mb-6 text-sm text-violet-200/90">{subprice}</div>

      <ul className="mb-7 space-y-3 text-sm text-slate-300">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {emphasized ? (
        <MaxUpgradeButton onClick={onCtaClick} className="mb-5 w-full">
          {cta}
        </MaxUpgradeButton>
      ) : (
        <button onClick={onCtaClick} className="mb-5 w-full rounded-full border border-violet-300/25 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80 px-4 py-2.5 font-medium text-slate-100 transition hover:border-fuchsia-300/50 hover:text-white">
          {cta}
        </button>
      )}

      <div className="aspect-video rounded-xl border border-white/10 bg-black/30 p-3">
        {videoEmbedUrl ? (
          <iframe
            src={videoEmbedUrl}
            title={`${name} video`}
            className="h-full w-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 text-center text-sm text-slate-400">
            <Play className="h-4 w-4" />
            {videoLabel}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function FaqItem({ question, answer, open, onToggle }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
        open
          ? "border-violet-300/45 bg-gradient-to-r from-violet-500/18 via-fuchsia-500/16 to-blue-500/14 shadow-[0_16px_48px_rgba(168,85,247,0.24)]"
          : "border-violet-300/22 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/9 to-blue-500/9 hover:border-fuchsia-300/40 hover:shadow-[0_12px_34px_rgba(217,70,239,0.22)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-semibold text-white">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-violet-100 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-violet-200/20 px-5 py-4 text-sm leading-7 text-slate-100">{answer}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

function MaxUpgradeButton({ onClick, className = "", children }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      animate={{ 
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        boxShadow: [
          "0 0 25px rgba(167, 139, 250, 0.6), 0 0 10px rgba(255, 255, 255, 0.3)",
          "0 0 50px rgba(232, 121, 249, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)",
          "0 0 25px rgba(167, 139, 250, 0.6), 0 0 10px rgba(255, 255, 255, 0.3)"
        ]
      }}
      transition={{
        backgroundPosition: { duration: 1.8, repeat: Infinity, ease: "linear" },
        boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 60px rgba(192, 132, 252, 0.9), 0 0 30px rgba(255, 255, 255, 0.6)",
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      className={`relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold tracking-wide text-white transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, #8B5CF6 0%, #D946EF 35%, #F472B6 60%, #3B82F6 85%, #8B5CF6 100%)",
        backgroundSize: "200% 200%",
        textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-5 w-5 animate-pulse text-white drop-shadow-md" />
      </span>
      <div className="absolute inset-0 rounded-full bg-white/20 mix-blend-overlay pointer-events-none" />
    </motion.button>
  );
}

export default function SupremeLanding() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);
  const maxUrl = "https://supreme.silence.codes/";
  const lightVideoUrl = "https://youtu.be/k282t3QKG2w?si=tsrRlgiktFE2buFG";

  const goToMax = () => {
    window.location.href = maxUrl;
  };

  const goToPricing = () => {
    window.open(lightVideoUrl, "_blank", "noopener,noreferrer");
  };

  const languageLogos = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Go", icon: SiGo, color: "#00ADD8" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C#", icon: Code, color: "#8B5CF6" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Ruby", icon: SiRuby, color: "#CC342D" },
    { name: "Rust", icon: SiRust, color: "#DEA584" },
    { name: "Bash", icon: Terminal, color: "#4EAA25" },
    { name: "YAML", icon: SiYaml, color: "#CB171E" },
    { name: "Dockerfiles", icon: SiDocker, color: "#2496ED" },
  ];

  const scannerCoverage = [
    {
      title: "Backend Languages (9)",
      items: [
        "Python — Bandit (.py)",
        "JavaScript/TypeScript — ESLint (.js, .jsx, .ts, .tsx)",
        "Go — golangci-lint (.go)",
        "Ruby — RuboCop (.rb, .rake, .gemspec)",
        "PHP — PHPStan (.php)",
        "Rust — Clippy (.rs)",
        "Java — Checkstyle (.java)",
        "C/C++ — cppcheck (.c, .cpp, .cc, .cxx, .h, .hpp)",
        "C# — Roslynator (.cs)",
      ],
    },
    {
      title: "JVM Languages (3)",
      items: [
        "Kotlin — ktlint (.kt, .kts)",
        "Scala — Scalastyle (.scala)",
        "Groovy — CodeNarc (.groovy, .gradle)",
      ],
    },
    {
      title: "Functional Languages (5)",
      items: [
        "Haskell — HLint (.hs, .lhs)",
        "Elixir — Credo (.ex, .exs)",
        "Erlang — Elvis (.erl, .hrl)",
        "F# — FSharpLint (.fs, .fsx)",
        "Clojure — clj-kondo (.clj, .cljs, .cljc)",
      ],
    },
    {
      title: "Mobile Development (2)",
      items: [
        "Swift — SwiftLint (.swift)",
        "Objective-C — OCLint (.m, .mm)",
      ],
    },
    {
      title: "Frontend & Styling (3)",
      items: [
        "CSS/SCSS/Sass/Less — Stylelint (.css, .scss, .sass, .less)",
        "HTML — HTMLHint (.html, .htm)",
        "Vue.js — ESLint (.vue)",
      ],
    },
    {
      title: "Infrastructure as Code (4)",
      items: [
        "Terraform — tflint (.tf, .tfvars)",
        "Ansible — ansible-lint (.yml playbooks)",
        "Kubernetes — kubeval (.yml, .yaml manifests)",
        "CloudFormation — cfn-lint (.yml, .yaml, .json templates)",
      ],
    },
    {
      title: "Configuration Files (4)",
      items: [
        "JSON — built-in (.json)",
        "TOML — taplo (.toml)",
        "XML — xmllint (.xml)",
        "Protobuf — buf lint (.proto)",
      ],
    },
    {
      title: "Shell & Scripts (4)",
      items: [
        "Bash/Shell — ShellCheck (.sh, .bash)",
        "PowerShell — PSScriptAnalyzer (.ps1, .psm1)",
        "Lua — luacheck (.lua)",
        "Perl — perlcritic (.pl, .pm)",
      ],
    },
    {
      title: "Documentation (2)",
      items: [
        "Markdown — markdownlint (.md)",
        "reStructuredText — rst-lint (.rst)",
      ],
    },
    {
      title: "Other Languages (5)",
      items: [
        "SQL — SQLFluff (.sql)",
        "R — lintr (.r, .R)",
        "Dart — dart analyze (.dart)",
        "Solidity — solhint (.sol)",
        "Docker — hadolint (Dockerfile*)",
      ],
    },
  ];

  const faq = useMemo(
    () => [
      {
        q: t("supreme.landing.faq.q1", "What programming languages does Supreme 2 support?"),
        a: (
          <div className="space-y-4">
            <p>{t("supreme.landing.faq.a1", "Supreme 2 supports major modern languages, configuration formats, and infrastructure files across backend, frontend, cloud, scripting, and documentation workflows.")}</p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {languageLogos.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="group rounded-lg border border-white/20 bg-gradient-to-br from-violet-500/14 via-fuchsia-500/12 to-blue-500/12 px-2 py-3 text-center shadow-[0_0_24px_rgba(168,85,247,0.16)]"
                >
                  <lang.icon
                    className="mx-auto mb-2 h-6 w-6 transition duration-300 group-hover:scale-110"
                    style={{ color: lang.color, filter: `drop-shadow(0 0 10px ${lang.color}66)` }}
                  />
                  <div className="text-[11px] font-medium text-slate-100">{lang.name}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-violet-100">
              {t("supreme.landing.faq.a1Coverage", "Coverage includes")} <span className="font-semibold text-fuchsia-300">41 {t("supreme.landing.faq.a1ScannerTypes", "different scanner types")}</span> {t("supreme.landing.faq.a1Across", "across")} <span className="font-semibold text-fuchsia-300">100+ {t("supreme.landing.faq.a1Extensions", "file extensions")}</span>.
            </p>
          </div>
        ),
      },
      {
        q: t("supreme.landing.faq.q2", "What scanner types and file formats are covered in detail?"),
        a: (
          <div className="space-y-4">
            <p>
              {t("supreme.landing.faq.a2Intro", "Supreme 2 supports")} <span className="font-semibold text-fuchsia-300">41 {t("supreme.landing.faq.a1ScannerTypes", "scanner types")}</span> {t("supreme.landing.faq.a2Covering", "covering all major programming languages and file formats.")}
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {scannerCoverage.map((group) => (
                <div
                  key={group.title}
                  className="rounded-lg border border-violet-300/25 bg-gradient-to-br from-violet-500/12 via-fuchsia-500/10 to-blue-500/10 p-3"
                >
                  <h4 className="mb-2 text-sm font-semibold text-violet-200">{group.title}</h4>
                  <ul className="space-y-1 text-xs leading-6 text-slate-100">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-fuchsia-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-violet-100">
              {t("supreme.landing.faq.a2Total", "Total:")} <span className="font-semibold text-fuchsia-300">41 {t("supreme.landing.faq.a1ScannerTypes", "scanner types")}</span> {t("supreme.landing.faq.a1Across", "covering")} <span className="font-semibold text-fuchsia-300">100+ {t("supreme.landing.faq.a1Extensions", "file extensions")}</span>.
            </p>
          </div>
        ),
      },
      {
        q: t("supreme.landing.faq.q3", "What is MCP and why does it matter?"),
        a: (
          <div>
            {t("supreme.landing.faq.a3", "MCP allows Supreme 2 MAX to run as a structured security server. Instead of raw text, it returns categorized JSON vulnerability reports for automated remediation, AI-driven fixing, programmatic interpretation, and continuous improvement workflows.")}
          </div>
        ),
      },
      {
        q: t("supreme.landing.faq.q4", "Does Supreme 2 store my code?"),
        a: (
          <div>
            {t("supreme.landing.faq.a4", "Supreme 2 scans locally in your environment. Your code never leaves your computer on which the scanner is working on. You, as the user might check the source code of Supreme 2 Light, available on github, and also you might check the network activity of the computer while code is being scanned.")}
          </div>
        ),
      },
      {
        q: t("supreme.landing.faq.q5", "What are the pre-installation requirements?"),
        a: (
          <div>
            {t("supreme.landing.faq.a5Prefix", "To run Supreme 2, you must have")} <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-300 hover:underline">{t("supreme.landing.faq.a5Python", "Python 3.0 or higher")}</a> {t("supreme.landing.faq.a5Suffix", "installed on your machine. Additionally, you must ensure that")} <span className="font-semibold text-fuchsia-300">pip</span> {t("supreme.landing.faq.a5End", "is installed prior to the installation of Supreme itself.")}
          </div>
        ),
      },
      {
        q: t("supreme.landing.faq.q6", "Is Supreme 2 suitable for startups?"),
        a: (
          <div>
            {t("supreme.landing.faq.a6", "Yes. It is especially effective for AI-first startup teams shipping fast with LLM-generated code, where hidden cross-file risks are easy to miss without repository-wide security analysis.")}
          </div>
        ),
      },
    ],
    [languageLogos, scannerCoverage, t]
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SUPREME 2",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Windows, macOS, Linux",
    offers: [
      { "@type": "Offer", name: "Supreme 2 Light", price: "0", priceCurrency: "USD" },
      { "@type": "Offer", name: "Supreme 2 MAX", price: "18", priceCurrency: "USD" },
    ],
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#01091C] font-sans text-slate-200 selection:bg-violet-400/25">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams className="opacity-50" />
      </div>
      <Header />

      <main className="relative z-10 pb-16 pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="relative mx-auto w-full px-4 pb-24 pt-8 sm:px-6 lg:px-8 max-w-[90rem]">
          <Spotlights />

          
           {/* Code Snippets - Floating Background Elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            <motion.div
              animate={{ 
                opacity: [0.1, 0.25, 0.1], 
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute left-[8%] top-32 lg:left-[12%] lg:top-48 rounded-lg border border-violet-400/15 bg-violet-500/5 p-3 px-4 font-mono text-xs text-violet-200/60 hidden sm:block backdrop-blur-[1px]"
            >
              scan.repos({`{"depth":"full"}`})
            </motion.div>
            <motion.div
              animate={{ 
                opacity: [0.08, 0.2, 0.08], 
                y: [0, 20, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                delay: 0.5,
                ease: "easeInOut" 
              }}
              className="absolute right-[8%] bottom-32 lg:right-[10%] lg:bottom-48 rounded-lg border border-fuchsia-400/10 bg-fuchsia-500/5 p-3 px-4 font-mono text-xs text-fuchsia-200/50 hidden sm:block backdrop-blur-[1px]"
            >
              vulnerabilities.json
            </motion.div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center relative z-10">
            {/* Left Column: Text - Left Aligned */}
            <div className="flex flex-col items-start text-left pl-4 lg:pl-12">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight"
              >
                {t("supreme.landing.hero.headline", "Build Fast. Ship Safe.")}
                <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                  {t("supreme.landing.hero.subheadline", "Your AI writes the code. Supreme 2 secures it.")}
                </span>
              </motion.h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300 sm:text-lg leading-relaxed">
                {t("supreme.landing.hero.tagline", "74+ intelligent scanners. Deep architecture-level analysis. The world's first MCP-based code scanner.")}
              </p>
            </div>

            {/* Right Column: 3D Cube Animation + Buttons Below */}
            <div className="flex flex-col items-center justify-center w-full pr-4 lg:pr-12 md:-mt-12">
               <div className="relative flex items-center justify-center w-full h-[320px] lg:h-[400px]">
                 <SupremeHeroBox />
               </div>
               
               {/* Buttons moved here, below animation */}
               <div className="mt-8 flex flex-col w-full sm:w-auto items-center gap-4">
                <MaxUpgradeButton
                  onClick={goToMax}
                  className="w-full sm:w-[320px] justify-center text-center whitespace-nowrap"
                >
                  {t("supreme.landing.hero.ctaMax", "Upgrade to Supreme 2 MAX")}
                </MaxUpgradeButton>
                <button onClick={goToPricing} className="w-full sm:w-[320px] whitespace-nowrap rounded-full border border-violet-300/25 bg-gradient-to-r from-slate-900/85 via-slate-800/70 to-slate-900/85 px-8 py-4 text-base sm:text-lg font-medium text-slate-100 transition hover:border-fuchsia-300/50 hover:text-white justify-center text-center">
                  {t("supreme.landing.hero.ctaFree", "Start Free with Supreme 2 Light")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8" id="pricing">
          <div className="grid gap-7 md:grid-cols-2">
            <PricingCard
              name={t("supreme.landing.pricingLight.name", "Supreme 2 Light")}
              price={t("supreme.landing.pricingLight.price", "Free")}
              subprice={t("supreme.landing.pricingLight.subprice", "Forever · No credit card required")}
              highlights={[
                t("supreme.landing.pricingLight.features.0", "VSCode extension"),
                t("supreme.landing.pricingLight.features.1", "Full project scanning"),
                t("supreme.landing.pricingLight.features.2", "74+ scanners"),
                t("supreme.landing.pricingLight.features.3", "Comprehensive report"),
                t("supreme.landing.pricingLight.features.4", "Report-only workflow (no auto-fix)"),
              ]}
              cta={
                <span>
                  {t("supreme.landing.pricingLight.cta", "Get Supreme 2 Light")}
                </span>
              }
              onCtaClick={goToPricing}
              videoEmbedUrl="https://www.youtube.com/embed/k282t3QKG2w"
            />
            <PricingCard
              name={t("supreme.landing.pricingMax.name", "Supreme 2 MAX")}
              price={t("supreme.landing.pricingMax.price", "$18/month")}
              subprice={t("supreme.landing.pricingMax.subprice", "$150/year · Best Value")}
              badge={t("supreme.landing.pricingMax.badge", "Best Value")}
              highlights={[
                t("supreme.landing.pricingMax.features.0", "MCP server-based scanner"),
                t("supreme.landing.pricingMax.features.1", "Full project scanning"),
                t("supreme.landing.pricingMax.features.2", "74+ scanners"),
                t("supreme.landing.pricingMax.features.3", "Comprehensive report"),
                t("supreme.landing.pricingMax.features.4", "LLM-friendly report for auto-remediation"),
                t("supreme.landing.pricingMax.features.5", "Autonomous vulnerability fixing"),
                t("supreme.landing.pricingMax.features.6", "Enhanced detection via threat intelligence"),
              ]}
              cta={t("supreme.landing.pricingMax.cta", "Upgrade to Supreme 2 MAX")}
              onCtaClick={goToMax}
              videoEmbedUrl="https://www.youtube.com/embed/vrmw08p7B1k"
              videoLabel={t("supreme.landing.pricingMax.videoLabel", "Supreme 2 MAX Video Instructions")}
              emphasized
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Best Code Scanner of 2025 (CodeQL){" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-200 bg-clip-text font-extrabold uppercase tracking-wide text-transparent">
              VS
            </span>{" "}
            the Best of 2026 (Supreme)
          </h2>
          <div className="mx-auto mt-8 w-full max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/gxzbXb-sB54"
                title="Best Code Scanner of 2025 (CodeQL) vs the Best of 2026 (Supreme)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href="https://youtu.be/gxzbXb-sB54?si=unPkOmRN9tDPYhtU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-200/90 underline decoration-purple-300/70 underline-offset-4 hover:text-purple-100"
              >
                Open video on YouTube
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{t("supreme.landing.hiddenRisk.title", "The Hidden Risk of AI-Generated Code")}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="rounded-2xl border border-rose-300/20 bg-rose-500/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-rose-300">
                <AlertTriangle className="h-5 w-5" /> {t("supreme.landing.hiddenRisk.llmTitle", "LLM = partial visibility")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 text-rose-300" />{t("supreme.landing.hiddenRisk.llmItems.0", "Only see pasted snippets")}</li>
                <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 text-rose-300" />{t("supreme.landing.hiddenRisk.llmItems.1", "Miss hidden files")}</li>
                <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 text-rose-300" />{t("supreme.landing.hiddenRisk.llmItems.2", "Ignore dependency chains")}</li>
                <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 text-rose-300" />Don’t scan architecture</li>
                <li className="flex items-start gap-2"><X className="mt-0.5 h-4 w-4 text-rose-300" />Don’t systematically audit configs</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-violet-300/25 bg-violet-500/8 p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-violet-300">
                <ShieldCheck className="h-5 w-5" /> {t("supreme.landing.hiddenRisk.supremeTitle", "Supreme 2 = full repository scan")}
              </h3>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300 sm:gap-3">
                  <div className="rounded-md border border-white/15 bg-white/5 px-3 py-2">{t("supreme.landing.hiddenRisk.diagramRepo", "Repo")}</div>
                  <ArrowRight className="h-4 w-4 text-fuchsia-300" />
                  <div className="rounded-md border border-violet-300/30 bg-violet-500/10 px-3 py-2">{t("supreme.landing.hiddenRisk.diagramScanner", "Deep Scanner")}</div>
                  <ArrowRight className="h-4 w-4 text-fuchsia-300" />
                  <div className="rounded-md border border-blue-300/30 bg-blue-500/10 px-3 py-2">{t("supreme.landing.hiddenRisk.diagramFindings", "Full findings")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{t("supreme.landing.meet.title", "Meet SUPREME 2")}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              t("supreme.landing.meet.features.0", "74+ scanners"),
              t("supreme.landing.meet.features.1", "Deep multi-language support"),
              t("supreme.landing.meet.features.2", "Architecture-aware analysis"),
              t("supreme.landing.meet.features.3", "Parallel scanning engine"),
              t("supreme.landing.meet.features.4", "Intelligent vulnerability detection"),
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mb-2 inline-flex rounded-full border border-violet-300/30 bg-violet-500/10 p-1.5">
                  <Check className="h-4 w-4 text-fuchsia-300" />
                </div>
                <p className="text-sm text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-violet-300/25 bg-gradient-to-b from-violet-500/12 via-fuchsia-500/8 to-blue-500/8 p-6 md:p-8">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{t("supreme.landing.mcp.title", "The World's First MCP-Based Code Scanner")}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">
              {t("supreme.landing.mcp.subtitle", "Supreme 2 MAX runs as an MCP server so your LLM can trigger full scans, consume structured JSON, understand categorized vulnerabilities, securely refactor, and re-validate fixes.")}
            </p>

            <McpFlowAnimation />
          </div>
        </section>



        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-violet-300/25 bg-gradient-to-b from-violet-500/12 via-fuchsia-500/8 to-blue-500/8 p-6 md:p-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">{t("supreme.landing.comparison.title", "Supreme 2 Light vs Supreme 2 MAX")}</h2>
            <SupremeComparisonAnimation />
             <div className="mt-8 text-center">
              <p className="mx-auto max-w-3xl text-sm text-slate-300">
                <span className="font-semibold text-fuchsia-300">MAX Advantage:</span> {t("supreme.landing.comparison.maxAdvantage", "Includes detailed Threat Intelligence and runs as an MCP Server meant to be used by LLMs.")}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl mb-12">{t("supreme.landing.whyLeads.title", "Why Supreme Leads the Market")}</h2>
          <SupremeVsOthers />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{t("supreme.landing.llmVsSupreme.title", "Searching for vulns/misconfigs with LLMs VS Supreme 2")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-200">
                <Terminal className="h-5 w-5 text-rose-300" /> {t("supreme.landing.llmVsSupreme.llmTitle", "LLM-only review")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2"><X className="h-4 w-4 text-rose-300" />{t("supreme.landing.llmVsSupreme.llmItems.0", "Analyzes fragments")}</li>
                <li className="flex items-center gap-2"><X className="h-4 w-4 text-rose-300" />{t("supreme.landing.llmVsSupreme.llmItems.1", "Misses configs")}</li>
                <li className="flex items-center gap-2"><X className="h-4 w-4 text-rose-300" />{t("supreme.landing.llmVsSupreme.llmItems.2", "Skips hidden modules")}</li>
                <li className="flex items-center gap-2"><X className="h-4 w-4 text-rose-300" />{t("supreme.landing.llmVsSupreme.llmItems.3", "Ignores dependency graphs")}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-violet-300/25 bg-violet-500/8 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-violet-200">
                <FolderSearch className="h-5 w-5 text-fuchsia-300" /> {t("supreme.landing.llmVsSupreme.supremeTitle", "Supreme 2")}
              </h3>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-300" />{t("supreme.landing.llmVsSupreme.supremeItems.0", "Scans entire repository")}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-300" />{t("supreme.landing.llmVsSupreme.supremeItems.1", "Parses configs")}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-300" />{t("supreme.landing.llmVsSupreme.supremeItems.2", "Checks dependency trees")}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-300" />{t("supreme.landing.llmVsSupreme.supremeItems.3", "Detects cross-file patterns")}</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-fuchsia-300" />{t("supreme.landing.llmVsSupreme.supremeItems.4", "Performs architecture analysis")}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
          <motion.div
            animate={{ opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="pointer-events-none absolute -left-8 top-20 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.18, 0.3, 0.18] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="pointer-events-none absolute -right-8 bottom-6 h-44 w-44 rounded-full bg-violet-400/20 blur-3xl"
          />
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">{t("supreme.landing.faq.title", "Frequently Asked Questions")}</h2>
          <div className="relative mt-8 space-y-3">
            {faq.map((item, idx) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                open={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        <div className="w-full">
          <FloatingText />
        </div>
      </main>

    </div>
  );
}
