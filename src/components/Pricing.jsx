"use client";


import React, { useState, useMemo } from "react";
import TooltipCard from "./TooltipCard";
import { CybersecurityLamp } from "./CybersecurityLamp";
import { useLanguage } from "@/contexts/LanguageContext";
import { convertPrice, formatPrice } from "@/lib/currency";
import CurrencySelector from "./CurrencySelector";
import { motion } from "framer-motion";


// Microsoft 365 Pricing Data
const PRICING_DATA = {
  // Business plans
  business: {
    standard: {
      yearly: 7.30,
      monthly: 8.60,
      unit: "/user/month",
    },
    premium: { // Premium 100
      yearly: 12.00,
      monthly: 13.45,
      unit: "/user/month",
    },
    max: { // Business MAX 100
      yearly: 25.00,
      monthly: 25.00,
      unit: "/user/month",
    },
  },
};


const COMMON_FEATURE_KEYS = [
  "pricing.aiSoc.features.common.customDomainEmail",
  "pricing.aiSoc.features.common.officeSuite",
  "pricing.aiSoc.features.common.adminConsole",
  "pricing.aiSoc.features.common.dnsSecuritySetup",
  "pricing.aiSoc.features.common.emailMigration",
  "pricing.aiSoc.features.common.aiThreatProtection",
  "pricing.aiSoc.features.common.emailFlowVisualization",
  "pricing.aiSoc.features.common.domainWideDeletion",
];


const PLAN_SPECIFIC_FEATURE_KEYS = {
  premium: [
    "pricing.aiSoc.features.premium.userLimit",
    "pricing.aiSoc.features.premium.adminLimit",
    "pricing.aiSoc.features.premium.storage",
  ],
  max: [
    "pricing.aiSoc.features.max.userLimit",
    "pricing.aiSoc.features.max.adminLimit",
    "pricing.aiSoc.features.max.storage",
  ],
  standard: [
    "pricing.aiSoc.features.standard.userLimit",
    "pricing.aiSoc.features.standard.adminLimit",
    "pricing.aiSoc.features.standard.storage",
  ],
};


const FEATURE_FALLBACKS = {
  "pricing.aiSoc.features.common.customDomainEmail": "Custom company email on your own domain (you@yourcompany.com)",
  "pricing.aiSoc.features.common.officeSuite": "Desktop and mobile office suite including document, spreadsheet, presentation, and email tools",
  "pricing.aiSoc.features.common.adminConsole": "Admin console with domain-wide email management and bulk operations",
  "pricing.aiSoc.features.common.dnsSecuritySetup": "Email security setup through DNS (SPF, DKIM, DMARC) on the admin console",
  "pricing.aiSoc.features.common.emailMigration": "Email migration",
  "pricing.aiSoc.features.common.aiThreatProtection": "5 layered, AI-powered threat protection with automatic email categorization (Secure, Spam, Dangerous Links, Phishing, Spoofed)",
  "pricing.aiSoc.features.common.emailFlowVisualization": "Advanced email flow visualization across entire domain with comprehensive filters on the Admin Console",
  "pricing.aiSoc.features.common.domainWideDeletion": "Ability for admin to delete emails across all users in domain",
  "pricing.aiSoc.features.premium.userLimit": "For enterprises with 15-300 employees",
  "pricing.aiSoc.features.premium.adminLimit": "Up to 5 administrators",
  "pricing.aiSoc.features.premium.storage": "Up to 50GB storage per user",
  "pricing.aiSoc.features.max.userLimit": "Unlimited number of users",
  "pricing.aiSoc.features.max.adminLimit": "Up to 10 administrators",
  "pricing.aiSoc.features.max.storage": "Up to 200GB storage per user",
  "pricing.aiSoc.features.standard.userLimit": "For enterprises with 1-15 employees",
  "pricing.aiSoc.features.standard.adminLimit": "Up to 1 administrator",
  "pricing.aiSoc.features.standard.storage": "Up to 8GB storage per user",
};


const BUSINESS_PLAN_CONFIG = [
  {
    id: "premium",
    segment: "business",
    titleKey: "pricing.aiSoc.planTitles.premium",
    titleFallback: "Business Premium 100",
    featureKeys: [...COMMON_FEATURE_KEYS, ...PLAN_SPECIFIC_FEATURE_KEYS.premium],
  },
  {
    id: "max",
    segment: "business",
    titleKey: "pricing.aiSoc.planTitles.max",
    titleFallback: "Business MAX 100",
    featureKeys: [...COMMON_FEATURE_KEYS, ...PLAN_SPECIFIC_FEATURE_KEYS.max],
  },
  {
    id: "standard",
    segment: "business",
    titleKey: "pricing.aiSoc.planTitles.standard",
    titleFallback: "Business Standard",
    featureKeys: [...COMMON_FEATURE_KEYS, ...PLAN_SPECIFIC_FEATURE_KEYS.standard],
  },
];


const TOOLTIP_KEYS = [
  "cmc-global-traffic",
  "country-blacklisting",
  "port-management",
  "cmc-email-visualizer",
];


const Pricing = ({ currency, onCurrencyChange, onOpenModal }) => {
  const { t } = useLanguage();
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [billing, setBilling] = useState("yearly"); // "yearly" or "monthly"
  const [productType, setProductType] = useState("email");


  const tabs = useMemo(
    () => [
      { id: "email", label: t("pricing.aiSoc.tabs.email", "Email Security") },
      { id: "web", label: t("pricing.aiSoc.tabs.web", "Web Security") },
    ],
    [t]
  );


  const billingLabels = useMemo(
    () => ({
      yearly: t("pricing.aiSoc.billing.yearly", "Yearly"),
      monthly: t("pricing.aiSoc.billing.monthly", "Monthly"),
    }),
    [t]
  );


  const requestSystemLabel = t("pricing.aiSoc.cta", "Request the system");
  const contactSupportLabel = t("pricing.aiSoc.contactSupport", "Contact us");


  const businessPlans = useMemo(
    () =>
      BUSINESS_PLAN_CONFIG.map((plan) => {
        const { featureKeys, titleKey, titleFallback, ...rest } = plan;


        return {
          ...rest,
          title: t(titleKey, titleFallback),
          features: featureKeys.map((featureKey) =>
            t(featureKey, FEATURE_FALLBACKS[featureKey] || featureKey)
          ),
        };
      }),
    [t]
  );


  const webPlans = useMemo(() => {
    const plan = {
      id: "globalShield",
      title: t("pricing.plans.globalShield.title", "Web Security and Traffic Management"),
      features: [
        t("pricing.plans.globalShield.features.webProtection", "Protection against all types of web attacks except business logic exploitation"),
        t("pricing.plans.globalShield.features.ddosProtection", "Real-time DDoS protection"),
        t("pricing.plans.globalShield.features.cmc", "CMC with global traffic monitoring:"),
        t("pricing.plans.globalShield.features.country", "Country blocking:"),
        t("pricing.plans.globalShield.features.port", "Port closing:"),
      ],
    };
    return [plan];
  }, [t]);


  const visiblePlans = useMemo(
    () => (productType === "email" ? businessPlans : webPlans),
    [productType, businessPlans, webPlans]
  );


  const tooltipContent = TOOLTIP_KEYS.reduce((acc, key) => {
    const dictionaryKey = mapTooltipKeyToDictionaryKey(key);


    // Tooltip fallbacks
    const tooltipFallbacks = {
      cmcGlobal: {
        title: "CMC with global traffic monitoring",
        content: "The Centralized Management Console (CMC) seamlessly integrates with other security systems and uses the same domain and interface as Global Shield and Security Tester. Here you can block countries, close ports, and manage security at scale.",
      },
      countryBlacklisting: {
        title: "Country blocking",
        content: "Block all traffic originating from a selected country.",
      },
      portManagement: {
        title: "Port management",
        content: "Close unused ports to reduce the attack surface (e.g., disable port 22 if SSH is not needed).",
      },
      cmcEmail: {
        title: "CMC with advanced email visualization",
        content: "CMC is integrated with other security systems and allows monitoring email flows and viewing emails of all added corporate users.",
      },
    };


    const fallback = tooltipFallbacks[dictionaryKey] || {
      title: dictionaryKey,
      content: "",
    };


    acc[key] = {
      title: t(
        `pricing.tooltips.${dictionaryKey}.title`,
        fallback.title
      ),
      content: t(
        `pricing.tooltips.${dictionaryKey}.content`,
        fallback.content
      ),
    };
    return acc;
  }, {});


  const getPriceDisplay = (planId) => {
    const priceData = PRICING_DATA.business[planId];


    if (!priceData) return contactSupportLabel;


    const price = billing === "yearly" ? priceData.yearly : priceData.monthly;
    const converted = convertPrice(price, currency);


    return (
      <span>
        {formatPrice(converted, currency)}{priceData.unit}
      </span>
    );
  };


  return (
    <section className="w-full pt-12 sm:pt-16 relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Pricing Title - Simplified and smaller */}
        <h2
          className="font-bold text-white text-center mb-8 sm:mb-12 leading-none"
          style={{
            fontSize: "clamp(40px, 8vw, 100px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {t("pricing.title", "Pricing")}
        </h2>

        {/* Architecture / Toggle Section */}
        <div className="relative z-10 flex flex-col items-center justify-center mb-16 sm:mb-24">
          {/* Top Text */}
          <p className="text-purple-200/80 text-xs sm:text-sm uppercase tracking-[0.2em] mb-8 font-medium text-center">
            {t("aiSocPricing.intro", "AI-SOC is a lineup of standalone cybersecurity systems")}
          </p>

          {/* Triangle Diagram */}
          <div className="relative w-[180px] h-[50px] sm:w-[220px] sm:h-[60px]">
            {/* The Roof Triangle */}
            <svg
              viewBox="0 0 220 60"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Left Slope (Email) */}
              <path
                d="M110 2 L10 58"
                stroke="#9B5CF6"
                strokeWidth="1.5"
                strokeLinecap="round"
                filter="url(#neon-glow)"
                className={`transition-all duration-500 ease-out ${productType === "email" ? "opacity-100 stroke-[2px]" : "opacity-30"
                  }`}
              />

              {/* Right Slope (Web) */}
              <path
                d="M110 2 L210 58"
                stroke="#9B5CF6"
                strokeWidth="1.5"
                strokeLinecap="round"
                filter="url(#neon-glow)"
                className={`transition-all duration-500 ease-out ${productType === "web" ? "opacity-100 stroke-[2px]" : "opacity-30"
                  }`}
              />

              {/* Top vertex dot */}
              <circle
                cx="110"
                cy="2"
                r="2"
                fill="#9B5CF6"
                className="animate-pulse"
                filter="url(#neon-glow)"
              />
            </svg>

            {/* Left Label Button - Email */}
            <button
              onClick={() => setProductType("email")}
              className="absolute -bottom-12 left-[-60px] sm:-bottom-14 sm:left-[-80px] group focus:outline-none min-w-[160px] text-center flex justify-center"
            >
              <div className="flex flex-col items-center">
                <span
                  className={`text-lg sm:text-[22px] font-semibold transition-all duration-300 whitespace-nowrap ${productType === "email"
                    ? "text-white drop-shadow-[0_0_12px_rgba(155,92,246,0.8)]"
                    : "text-white/40 group-hover:text-white/70"
                    }`}
                >
                  {t("pricing.aiSoc.tabs.email", "Email Security")}
                </span>
                <div
                  className={`h-[2px] mt-2 transition-all duration-300 bg-[#9B5CF6] shadow-[0_0_12px_#9B5CF6] rounded-full ${productType === "email" ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                />
              </div>
            </button>

            {/* Right Label Button - Web */}
            <button
              onClick={() => setProductType("web")}
              className="absolute -bottom-12 right-[-60px] sm:-bottom-14 sm:right-[-80px] group focus:outline-none min-w-[160px] text-center flex justify-center"
            >
              <div className="flex flex-col items-center">
                <span
                  className={`text-lg sm:text-[22px] font-semibold transition-all duration-300 whitespace-nowrap ${productType === "web"
                    ? "text-white drop-shadow-[0_0_12px_rgba(155,92,246,0.8)]"
                    : "text-white/40 group-hover:text-white/70"
                    }`}
                >
                  {t("pricing.aiSoc.tabs.web", "Web Security")}
                </span>
                <div
                  className={`h-[2px] mt-2 transition-all duration-300 bg-[#9B5CF6] shadow-[0_0_12px_#9B5CF6] rounded-full ${productType === "web" ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>




        {/* Architecture Descriptions: Replaced with Compact Blocks */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 mb-16 relative z-10 w-full justify-center">
          {/* Email Security Card */}
          <div className={`flex-1 p-6 sm:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm group hover:scale-[1.02] flex flex-col h-full bg-black/20 border-white/5 hover:border-purple-500/30 ${productType === 'email' ? 'ring-1 ring-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)]' : ''
            }`}>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></span>
              {t("pricing.aiSoc.tabs.email", "Email Security")}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed flex-grow">
              {t("aiSocPricing.emailDescription", "Email Security acts as a protective shield for your corporate communications. It filters incoming and outgoing messages to neutralize phishing attempts, spoofing attacks, and malicious links before they reach your users, ensuring the integrity of your business correspondence.")}
            </p>
            <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm text-slate-200">
              <img
                src="/partners/calendly.png"
                alt="Calendly"
                className="h-14 w-14 object-contain"
                loading="lazy"
              />
              <span>
                {t("aiSocPricing.calendlyIntegration", "Supports integration with Calendly")}
              </span>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_-5px_rgba(168,85,247,0.25)] bg-black max-w-sm mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/3lW9az21aDk"
                  title="AI-SOC Email Security"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Web Security Card */}
          <div className={`flex-1 p-6 sm:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm group hover:scale-[1.02] flex flex-col h-full bg-black/20 border-white/5 hover:border-purple-500/30 ${productType === 'web' ? 'ring-1 ring-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)]' : ''
            }`}>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
              {t("pricing.aiSoc.tabs.web", "Web Security")}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed flex-grow">
              {t("aiSocPricing.webDescription", "Web Security safeguards your digital infrastructure by analyzing traffic patterns in real-time. It defends websites and APIs against common vulnerabilities, DDoS attacks, and unauthorized access, providing deep visibility into network activity without impacting performance.")}
            </p>
          </div>
        </div>

        {/* Controls: Billing Toggle */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-12 relative z-20">
            <div className="flex items-center gap-12">
              <button
                onClick={() => setBilling("yearly")}
                className={`relative pb-2 text-lg font-medium transition-colors duration-300 ${billing === "yearly" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
              >
                {billingLabels.yearly}
                {billing === "yearly" && (
                  <motion.div
                    layoutId="billing-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#a855f7] shadow-[0_0_10px_#a855f7]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>

              <button
                onClick={() => setBilling("monthly")}
                className={`relative pb-2 text-lg font-medium transition-colors duration-300 ${billing === "monthly" ? "text-white" : "text-white/40 hover:text-white/70"
                  }`}
              >
                {billingLabels.monthly}
                {billing === "monthly" && (
                  <motion.div
                    layoutId="billing-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#a855f7] shadow-[0_0_10px_#a855f7]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>
            <CurrencySelector
              currency={currency}
              onCurrencyChange={onCurrencyChange}
              align="right"
            />
          </div>


        {/* Pricing Cards */}
        <div className="space-y-6 relative z-10">
          {productType === "web" ? (
            <div className="flex justify-center">
              <div className="w-full">
                {visiblePlans.map((plan, index) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    price={
                      <div className="flex flex-col">
                        {(() => {
                          const webBasePrice = billing === "yearly" ? 220 : 20;
                          return (
                            <>
                              <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-3xl sm:text-4xl font-bold text-white">
                                  {formatPrice(convertPrice(webBasePrice, currency), currency)}
                                </span>
                                <span className="text-lg text-gray-400 font-normal">/{billing === "yearly" ? "year" : "month"}</span>
                              </div>
                            </>
                          );
                        })()}
                        <div className="flex flex-col pt-2 border-t border-white/10">
                          <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold mb-2">Plus Pay-as-you-go</span>
                          <div className="flex gap-6">
                            <div className="flex flex-col">
                              <span className="text-lg text-white font-semibold">{formatPrice(convertPrice(0.18, currency), currency)}</span>
                              <span className="text-[10px] text-gray-400 uppercase tracking-tight">per GB</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-lg text-white font-semibold">{formatPrice(convertPrice(1.2, currency), currency)}</span>
                              <span className="text-[10px] text-gray-400 uppercase tracking-tight">per 1M requests</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                    tooltipContent={tooltipContent}
                    activeTooltip={activeTooltip}
                    setActiveTooltip={setActiveTooltip}
                    activeCardIndex={activeCardIndex}
                    setActiveCardIndex={setActiveCardIndex}
                    index={2}
                    onOpenModal={onOpenModal}
                    isHorizontal={true}
                    requestSystemLabel={requestSystemLabel}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* Top Row: 2 Vertical Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
                {visiblePlans.slice(0, 2).map((plan, index) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    price={getPriceDisplay(plan.id)}
                    tooltipContent={tooltipContent}
                    activeTooltip={activeTooltip}
                    setActiveTooltip={setActiveTooltip}
                    activeCardIndex={activeCardIndex}
                    setActiveCardIndex={setActiveCardIndex}
                    index={index}
                    onOpenModal={onOpenModal}
                    isHorizontal={false}
                    requestSystemLabel={requestSystemLabel}
                  />
                ))}
              </div>

              {visiblePlans.length > 2 && (
                <div className="flex justify-center">
                  <div className="w-full">
                    {visiblePlans.slice(2).map((plan, index) => (
                      <PricingCard
                        key={plan.id}
                        plan={plan}
                        price={getPriceDisplay(plan.id)}
                        tooltipContent={tooltipContent}
                        activeTooltip={activeTooltip}
                        setActiveTooltip={setActiveTooltip}
                        activeCardIndex={activeCardIndex}
                        setActiveCardIndex={setActiveCardIndex}
                        index={2 + index}
                        onOpenModal={onOpenModal}
                        isHorizontal={true}
                        requestSystemLabel={requestSystemLabel}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {productType === "web" && (
          <div className="mt-10 sm:mt-12 px-2 sm:px-0">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-cyan-400/25 bg-slate-950/70 shadow-[0_20px_60px_-20px_rgba(34,211,238,0.45)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/BXWdaovJCjw"
                  title="Web Security Instructions Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
        {productType === "email" && (
          <>
            <div className="w-full flex justify-center px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <div className="w-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/3lW9az21aDk"
                      title="AI-SOC Email Security"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-full rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] bg-black">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/HGhDQ3bhk6o"
                      title="AI-SOC Email Security Additional Info"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative left-1/2 -translate-x-1/2 w-[100vw] h-[220px] max-w-none overflow-visible z-10">
              <CybersecurityLamp
                containerClassName="w-full h-full min-h-0 bg-transparent"
                headingClassName="hidden"
              />
            </div>
          </>
        )}
      </div>


    </section>
  );
};


const mapTooltipKeyToDictionaryKey = (key) => {
  switch (key) {
    case "cmc-global-traffic":
      return "cmcGlobal";
    case "country-blacklisting":
      return "countryBlacklisting";
    case "port-management":
      return "portManagement";
    case "cmc-email-visualizer":
      return "cmcEmail";
    case "dynamic-vulnerability":
      return "dynamicVulnerability";
    case "code-analyzer":
      return "codeAnalyzer";
    case "intelligence-report":
      return "intelligenceReport";
    case "full-vulnerability-check":
      return "fullVulnerability";
    default:
      return key;
  }
};


const getCardTheme = (index) => {
  // 1) First pricing card — light purple (soft, light violet look)
  if (index === 0) {
    return {
      borderColor: "rgba(216, 180, 254, 0.6)", // Lighter Violet
      innerGlowColor: "rgba(216, 180, 254, 0.2)",
      // Lighter gradient start
      background: "linear-gradient(135deg, rgba(80, 70, 120, 0.7) 0%, rgba(30, 25, 50, 0.7) 100%)",
      glow: {
        border: "linear-gradient(135deg, rgba(216, 180, 254, 0.6) 0%, rgba(167, 139, 250, 0.6) 100%)",
        glow: "linear-gradient(135deg, rgba(216, 180, 254, 0.9) 0%, rgba(167, 139, 250, 0.7) 100%)",
        shadow: "0 0 60px 20px rgba(216, 180, 254, 0.3), 0 0 120px 40px rgba(167, 139, 250, 0.15)",
      }
    };
  }
  // 2) Second pricing card — blue
  if (index === 1) {
    return {
      borderColor: "rgba(96, 165, 250, 0.6)", // Blue
      innerGlowColor: "rgba(96, 165, 250, 0.2)",
      background: "linear-gradient(135deg, rgba(30, 60, 100, 0.7) 0%, rgba(20, 30, 60, 0.7) 100%)",
      glow: {
        border: "linear-gradient(135deg, rgba(96, 165, 250, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)",
        glow: "linear-gradient(135deg, rgba(96, 165, 250, 0.9) 0%, rgba(59, 130, 246, 0.7) 100%)",
        shadow: "0 0 60px 20px rgba(96, 165, 250, 0.3), 0 0 120px 40px rgba(59, 130, 246, 0.15)",
      }
    };
  }
  // 3) Third pricing card — purple (darker / more saturated)
  if (index === 2) {
    return {
      borderColor: "rgba(168, 85, 247, 0.6)", // Purple
      innerGlowColor: "rgba(168, 85, 247, 0.2)",
      background: "linear-gradient(135deg, rgba(90, 30, 120, 0.7) 0%, rgba(40, 20, 60, 0.7) 100%)",
      glow: {
        border: "linear-gradient(135deg, rgba(168, 85, 247, 0.6) 0%, rgba(147, 51, 234, 0.6) 100%)",
        glow: "linear-gradient(135deg, rgba(168, 85, 247, 0.9) 0%, rgba(147, 51, 234, 0.7) 100%)",
        shadow: "0 0 60px 20px rgba(168, 85, 247, 0.3), 0 0 120px 40px rgba(147, 51, 234, 0.15)",
      }
    };
  }


  // Default fallback
  return {
    borderColor: "rgba(167, 139, 250, 0.6)",
    innerGlowColor: "rgba(167, 139, 250, 0.15)",
    background: "rgba(20, 20, 35, 0.6)",
    glow: {
      border: "linear-gradient(135deg, rgba(167, 139, 250, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%)",
      glow: "linear-gradient(135deg, rgba(167, 139, 250, 0.9) 0%, rgba(59, 130, 246, 0.7) 100%)",
      shadow: "0 0 60px 20px rgba(167, 139, 250, 0.3), 0 0 120px 40px rgba(59, 130, 246, 0.15)",
    }
  };
};


const getBulletColor = (planId) => {
  return {
    bg: "linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
    border: "linear-gradient(135deg, rgba(167, 139, 250, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)",
    icon: "#a78bfa", // violet
  };
};


const PricingCard = ({
  plan,
  price,
  tooltipContent,
  activeTooltip,
  setActiveTooltip,
  activeCardIndex,
  setActiveCardIndex,
  index,
  onOpenModal,
  isHorizontal = false,
  requestSystemLabel,
}) => {
  const { t } = useLanguage();
  const theme = getCardTheme(index);
  const { borderColor, innerGlowColor, background, glow: glowColor } = theme;




  return (
    <div className="relative group w-full h-full">
      {/* Glow backdrop - behind the card */}
      <div
        className="absolute -inset-4 rounded-2xl transition-all duration-300 pointer-events-none blur-2xl"
        style={{
          background: activeCardIndex === index ? glowColor.glow : "transparent",
          opacity: activeCardIndex === index ? 0.3 : 0,
        }}
      />


      {/* Outer wrapper: stroke border with gradient */}
      <div
        className="relative h-full rounded-2xl transition-all duration-300"
        style={{
          border: "1.5px solid",
          borderColor: borderColor,
          background: background,
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: `inset 0 0 40px ${innerGlowColor}, inset 0 0 80px ${innerGlowColor}`,
        }}
      >
        {/* Border glow enhancement */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none"
          style={{
            background: activeCardIndex === index ? glowColor.glow : "transparent",
            filter: activeCardIndex === index ? "blur(8px)" : "none",
            opacity: activeCardIndex === index ? 0.8 : 0,
          }}
        />


        {/* Inner card with glass background */}
        <div
          className={`relative rounded-2xl overflow-hidden h-full transition-all duration-300 ${activeCardIndex === index ? "translate-y-[-4px]" : ""
            } ${isHorizontal ? "flex flex-col lg:flex-row items-stretch" : "flex flex-col"
            }`}
          style={{
            background: "rgba(8, 10, 20, 0.50)",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: `inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 0 60px ${innerGlowColor}`,
          }}
          onMouseEnter={() => setActiveCardIndex(index)}
          onMouseLeave={() => setActiveCardIndex(null)}
        >
          {/* Colored background overlay on hover */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
            style={{
              background: activeCardIndex === index ? glowColor.glow : "transparent",
              opacity: activeCardIndex === index ? 0.08 : 0,
            }}
          />


          {/* Enhanced inner glow layer */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500"
            style={{
              boxShadow: activeCardIndex === index
                ? `inset 0 0 80px ${innerGlowColor}, inset 0 0 120px ${innerGlowColor}`
                : `inset 0 0 40px ${innerGlowColor}`,
              opacity: activeCardIndex === index ? 1 : 0.6,
            }}
          />


          {/* Content container: SHARP TEXT, NO BLUR */}
          <div className={`relative p-5 sm:p-6 flex ${isHorizontal ? "flex flex-col lg:flex-row gap-6 lg:gap-8" : "flex-col"} h-full z-10`}>
            {/* Left block: Title and Price */}
            <div className={`flex flex-col ${isHorizontal ? "lg:w-auto lg:min-w-[240px]" : "w-full mb-6 sm:mb-8"}`}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                {plan.title}
              </h3>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-0">
                {price}
              </div>
            </div>


            {/* Middle block: Features (only for horizontal) */}
            {isHorizontal && (
              <div className={`flex-1 flex-grow`}>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {plan.features.map((feature, i) => {
                    {/* Simplified mapping for strings */ }
                    const label = feature;
                    {/* Note: tooltips disabled as per request to remove old logic, or keep if key matches?
                        User provided literal strings. Assuming no IDs provided in strings. */}


                    return (
                      <li key={`${plan.id}-${label}`} className="flex items-start gap-2 text-white text-sm">
                        <svg
                          className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <div className="flex-1 flex items-center gap-1 leading-snug">
                          <span className="text-gray-100">{label.replace(/:$/, '')}</span>
                          {label.endsWith(':') && (
                            <div
                              className="relative"
                              onMouseEnter={() => setActiveTooltip(`${plan.id}-${i}`)}
                              onMouseLeave={() => setActiveTooltip(null)}
                            >
                              <svg className="h-4 w-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {activeTooltip === `${plan.id}-${i}` && (
                                <TooltipCard className="z-[9999] w-72 sm:w-80 max-w-[calc(100vw-3rem)] rounded-lg border border-white/20 bg-black p-4 text-white shadow-2xl">
                                  {(() => {
                                    let tooltipKey = "";
                                    if (label.includes("CMC")) tooltipKey = "cmc-global-traffic";
                                    if (label.includes("Country")) tooltipKey = "country-blacklisting";
                                    if (label.includes("Port")) tooltipKey = "port-management";
                                    const content = tooltipContent[tooltipKey];
                                    return content ? (
                                      <>
                                        <h4 className="mb-2 font-bold text-white">{content.title}</h4>
                                        <p className="text-sm text-gray-200">{content.content}</p>
                                      </>
                                    ) : null;
                                  })()}
                                </TooltipCard>
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}


            {/* Features list (only for vertical cards) */}
            {!isHorizontal && (
              <div className="flex-1 mb-8 sm:mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => {
                    const label = feature;


                    return (
                      <li key={i} className="flex items-start sm:items-center gap-3 text-white text-xs sm:text-sm">
                        <svg
                          className="w-4 h-4 text-green-400 flex-shrink-0 mt-1 sm:mt-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <div className="flex-1 flex items-center gap-1 leading-snug">
                          <span className="text-gray-100">{label.replace(/:$/, '')}</span>
                          {label.endsWith(':') && (
                            <div
                              className="relative"
                              onMouseEnter={() => setActiveTooltip(`${plan.id}-${i}`)}
                              onMouseLeave={() => setActiveTooltip(null)}
                            >
                              <svg className="h-4 w-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              {activeTooltip === `${plan.id}-${i}` && (
                                <TooltipCard className="z-[9999] w-72 sm:w-80 max-w-[calc(100vw-3rem)] rounded-lg border border-white/20 bg-black p-4 text-white shadow-2xl">
                                  {(() => {
                                    let tooltipKey = "";
                                    if (label.includes("CMC")) tooltipKey = "cmc-global-traffic";
                                    if (label.includes("Country")) tooltipKey = "country-blacklisting";
                                    if (label.includes("Port")) tooltipKey = "port-management";
                                    const content = tooltipContent[tooltipKey];
                                    return content ? (
                                      <>
                                        <h4 className="mb-2 font-bold text-white">{content.title}</h4>
                                        <p className="text-sm text-gray-200">{content.content}</p>
                                      </>
                                    ) : null;
                                  })()}
                                </TooltipCard>
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}


            {/* Right block: CTA Button */}
            <div className={`flex ${isHorizontal ? "items-center lg:ml-auto" : "justify-center"} mt-3 sm:mt-3`}>
              <div
                className="relative rounded-full transition-all duration-300"
                style={{
                  padding: activeCardIndex === index ? "1.5px" : "0",
                  background: activeCardIndex === index ? glowColor.border : "transparent",
                }}
              >
                {/* Button glow layer */}
                <div
                  className="absolute inset-0 rounded-full transition-all duration-300 pointer-events-none"
                  style={{
                    background: activeCardIndex === index ? glowColor.glow : "transparent",
                    filter: activeCardIndex === index ? "blur(6px)" : "none",
                    opacity: activeCardIndex === index ? 0.6 : 0,
                  }}
                />


                <button
                  onClick={onOpenModal}
                  className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${activeCardIndex === index
                    ? "-translate-y-0.5 text-white"
                    : "text-black"
                    }`}
                  style={{
                    background: activeCardIndex === index
                      ? "rgba(8, 10, 20, 0.4)"
                      : "rgba(255, 255, 255, 0.9)",
                    backdropFilter: activeCardIndex === index
                      ? "blur(10px)"
                      : "blur(4px)",
                    WebkitBackdropFilter: activeCardIndex === index
                      ? "blur(10px)"
                      : "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  {t("header.cta.get", "Get")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Pricing;