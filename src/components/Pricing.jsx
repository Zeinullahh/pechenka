"use client";

import React, { useState } from "react";
import TooltipCard from "./TooltipCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Microsoft 365 Pricing Data
const PRICING_DATA = {
  // Business plans
  business: {
    premium: {
      yearly: 27.45,
      monthly: 22.55,
      unit: "/user/month",
    },
    standard: {
      yearly: 9.29,
      monthly: 11.15,
      unit: "/user/month",
    },
    basic: {
      yearly: 4.40,
      monthly: 5.28,
      unit: "/user/month",
    },
  },
  // Enterprise plans
  enterprise: {
    e3: {
      yearly: 36.00,
      unit: "/user/month",
    },
    e5: {
      yearly: 57.00,
      unit: "/user/month",
    },
  },
};

const BUSINESS_PLANS = [
  {
    id: "premium",
    segment: "business",
    title: "Microsoft 365 Business Premium (no Teams)",
    features: [
      { id: "secureAccess300" },
      { id: "customEmail" },
      { id: "adminConsole" },
      { id: "aiThreatDetection" },
      { id: "multiLayerSecurity" },
      { id: "emailSorting" },
      { id: "advancedLinkScanner" },
      { id: "emailFlowViz" },
      { id: "manageDeleteEmails" },
      { id: "customFolders" },
      { id: "storage10gb" },
      { id: "multiAccount" },
      { id: "support24_7" },
    ],
  },
  {
    id: "standard",
    segment: "business",
    title: "Microsoft 365 Business Standard (no Teams)",
    features: [
      { id: "secureAccess300" },
      { id: "customEmail" },
      { id: "aiThreatDetection" },
      { id: "multiLayerSecurity" },
      { id: "emailSorting" },
      { id: "customFolders" },
      { id: "storage10gb" },
      { id: "multiAccount" },
      { id: "emailSearch" },
      { id: "support24_7" },
    ],
  },
  {
    id: "basic",
    segment: "business",
    title: "Microsoft 365 Business Basic (no Teams)",
    features: [
      { id: "secureAccess300" },
      { id: "customEmail" },
      { id: "aiAssisted" },
      { id: "basicFiltering" },
      { id: "storage10gb" },
      { id: "multiAccount" },
      { id: "emailSearch" },
      { id: "support24_7" },
    ],
  },
];

const ENTERPRISE_PLANS = [
  {
    id: "e3",
    segment: "enterprise",
    title: "Microsoft 365 E3",
    features: [
      { id: "unlimitedUsers" },
      { id: "customEmail" },
      { id: "adminConsoleEnterprise" },
      { id: "aiThreatDetection" },
      { id: "multiLayerSecurity" },
      { id: "emailSorting" },
      { id: "advancedLinkScanner" },
      { id: "emailFlowVizOrg" },
      { id: "manageDeleteEmails" },
      { id: "customFolders" },
      { id: "storage5tb" },
      { id: "multiAccount" },
      { id: "support24_7" },
    ],
  },
  {
    id: "e5",
    segment: "enterprise",
    title: "Microsoft 365 E5",
    features: [
      { id: "unlimitedUsers" },
      { id: "customEmail" },
      { id: "adminConsoleEnterprise" },
      { id: "aiThreatDetection" },
      { id: "multiLayerSecurity" },
      { id: "emailSorting" },
      { id: "advancedLinkScanner" },
      { id: "emailFlowVizOrg" },
      { id: "manageDeleteEmails" },
      { id: "customFolders" },
      { id: "storage10tb" },
      { id: "multiAccount" },
      { id: "prioritySupport" },
      { id: "dedicatedAccount" },
    ],
  },
];

const TOOLTIP_KEYS = [
  "cmc-global-traffic",
  "country-blacklisting",
  "port-management",
  "cmc-email-visualizer",
];

const Pricing = ({ onOpenModal }) => {
  const { t } = useLanguage();
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [segment, setSegment] = useState("business"); // "business" or "enterprise"
  const [billing, setBilling] = useState("yearly"); // "yearly" or "monthly"

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
    let priceData;

    if (segment === "business") {
      priceData = PRICING_DATA.business[planId];
    } else {
      priceData = PRICING_DATA.enterprise[planId];
    }

    if (!priceData) return "Contact us";

    let price;
    if (segment === "business") {
      price = billing === "yearly" ? priceData.yearly : priceData.monthly;
    } else {
      price = priceData.yearly;
    }

    return `$${price.toFixed(2)}${priceData.unit}`;
  };

  const getActivePlans = () => {
    return segment === "business" ? BUSINESS_PLANS : ENTERPRISE_PLANS;
  };

  return (
    <section className="w-full pt-12 sm:pt-16 relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Pricing Title - Huge, half screen height */}
        <h2
          className="font-bold text-white text-center mb-16 sm:mb-20 leading-none"
          style={{
            fontSize: "clamp(70px, 15vw, 200px)",
            height: "1vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {t("pricing.title", "Pricing")}
        </h2>

        {/* Controls: Segment, Billing, Currency */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 relative z-20">
          {/* Segment Toggle - Left */}
          <div className="flex gap-2 bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/20">
            <button
              onClick={() => setSegment("business")}
              className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${segment === "business"
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"
                }`}
            >
              Business
            </button>
            <button
              onClick={() => setSegment("enterprise")}
              className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${segment === "enterprise"
                ? "bg-white text-black"
                : "text-white hover:bg-white/10"
                }`}
            >
              Enterprise
            </button>
          </div>

          {/* Right side: Billing Toggle + Currency Selector */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Billing Toggle - Only visible for Business */}
            {segment === "business" && (
              <div className="flex gap-2 bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/20">
                <button
                  onClick={() => setBilling("yearly")}
                  className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${billing === "yearly"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                    }`}
                >
                  Yearly
                </button>
                <button
                  onClick={() => setBilling("monthly")}
                  className={`px-6 py-2 rounded-full transition-all font-medium text-sm ${billing === "monthly"
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                    }`}
                >
                  Monthly
                </button>
              </div>
            )}

            {/* Currency Selector (Hidden) */}
            {/* <CurrencySelector
              currency={currency}
              onCurrencyChange={setCurrency}
            /> */}
          </div>
        </div>

        {/* Pricing Cards */}
        {segment === "business" ? (
          // Business Layout: Asymmetric (2 top vertical, 1 bottom horizontal)
          <div className="space-y-6 relative z-10">
            {/* Top Row: 2 Vertical Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {BUSINESS_PLANS.slice(0, 2).map((plan, index) => (
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
                />
              ))}
            </div>

            {/* Bottom Row: 1 Horizontal Card */}
            <div className="flex justify-center">
              <div className="w-full">
                {BUSINESS_PLANS.slice(2).map((plan, index) => (
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
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Enterprise Layout: Simple 2-card grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10 items-stretch">
            {ENTERPRISE_PLANS.map((plan, index) => (
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
              />
            ))}
          </div>
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

const getGlowColor = (planId) => {
  // Premium: rose → violet
  // Standard: cyan → blue
  // Basic: violet → cyan
  // E3: cyan
  // E5: rose → violet
  if (planId === "premium" || planId === "e5") {
    return {
      border: "linear-gradient(135deg, rgba(236, 72, 153, 0.5) 0%, rgba(167, 139, 250, 0.5) 100%)",
      glow: "linear-gradient(135deg, rgba(236, 72, 153, 0.9) 0%, rgba(167, 139, 250, 0.7) 100%)",
      shadow: "0 0 60px 20px rgba(236, 72, 153, 0.3), 0 0 120px 40px rgba(167, 139, 250, 0.15)",
    };
  } else if (planId === "standard" || planId === "e3") {
    return {
      border: "linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(6, 182, 212, 0.5) 100%)",
      glow: "linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(6, 182, 212, 0.7) 100%)",
      shadow: "0 0 60px 20px rgba(59, 130, 246, 0.3), 0 0 120px 40px rgba(6, 182, 212, 0.15)",
    };
  } else {
    // basic
    return {
      border: "linear-gradient(135deg, rgba(167, 139, 250, 0.5) 0%, rgba(59, 130, 246, 0.5) 100%)",
      glow: "linear-gradient(135deg, rgba(167, 139, 250, 0.9) 0%, rgba(59, 130, 246, 0.7) 100%)",
      shadow: "0 0 60px 20px rgba(167, 139, 250, 0.3), 0 0 120px 40px rgba(59, 130, 246, 0.15)",
    };
  }
};

const getBulletColor = (planId) => {
  if (planId === "premium" || planId === "e5") {
    return {
      bg: "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(167, 139, 250, 0.2) 100%)",
      border: "linear-gradient(135deg, rgba(236, 72, 153, 0.6) 0%, rgba(167, 139, 250, 0.6) 100%)",
      icon: "#ec4899", // rose
    };
  } else if (planId === "standard" || planId === "e3") {
    return {
      bg: "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
      border: "linear-gradient(135deg, rgba(59, 130, 246, 0.6) 0%, rgba(6, 182, 212, 0.6) 100%)",
      icon: "#3b82f6", // blue
    };
  } else {
    // basic
    return {
      bg: "linear-gradient(135deg, rgba(167, 139, 250, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",
      border: "linear-gradient(135deg, rgba(167, 139, 250, 0.6) 0%, rgba(59, 130, 246, 0.6) 100%)",
      icon: "#a78bfa", // violet
    };
  }
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
}) => {
  const featureFallbacks = {
    // Business Premium
    secureAccess300: "Secure access for up to 300 users",
    customEmail: "Custom company email on your own domain (you@yourcompany.com)",
    adminConsole: "Admin console with domain-wide email management and bulk operations",
    aiThreatDetection: "AI-powered threat detection with automatic email categorization",
    multiLayerSecurity: "Multi-layered email security pipeline (SPF, DKIM, DMARC, spam, malware, phishing)",
    emailSorting: "Email sorting into security folders (Secure, Spam, Dangerous Links, Malware, Phishing, Spoofed)",
    advancedLinkScanner: "Advanced link scanner and antivirus protection for attachments",
    emailFlowViz: "Email flow visualization across entire domain with comprehensive filters",
    manageDeleteEmails: "Ability to manage and delete emails across all users in domain",
    customFolders: "Custom folders with auto-filtering rules (sender, domain, subject)",
    storage10gb: "10 GB secure mailbox storage per user",
    storage5tb: "5 TB secure mailbox storage per user",
    storage10tb: "10 TB secure mailbox storage per user",
    multiAccount: "Multi-account support (Gmail/Outlook integration)",
    emailSearch: "Email search with full-text capabilities",
    support24_7: "24/7 email and web support",

    // Business Basic
    aiAssisted: "AI-assisted email categorization into security folders",
    basicFiltering: "Custom folders with basic filtering",

    // Enterprise
    unlimitedUsers: "Supports unlimited users",
    adminConsoleEnterprise: "Admin console with enterprise-grade domain management and bulk operations",
    emailFlowVizOrg: "Email flow visualization across entire organization with comprehensive filters",
    prioritySupport: "Priority support with faster response times",
    dedicatedAccount: "Dedicated account management",
  };

  const glowColor = getGlowColor(plan.id);

  const getBorderColor = (planId) => {
    if (planId === "premium" || planId === "e5") {
      return "rgba(236, 72, 153, 0.6)";
    } else if (planId === "standard" || planId === "e3") {
      return "rgba(59, 130, 246, 0.6)";
    } else {
      return "rgba(167, 139, 250, 0.6)";
    }
  };

  const getInnerGlowColor = (planId) => {
    if (planId === "premium" || planId === "e5") {
      return "rgba(236, 72, 153, 0.15)";
    } else if (planId === "standard" || planId === "e3") {
      return "rgba(59, 130, 246, 0.15)";
    } else {
      return "rgba(167, 139, 250, 0.15)";
    }
  };

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
          borderColor: getBorderColor(plan.id),
          background: "rgba(20, 20, 35, 0.6)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          boxShadow: `inset 0 0 40px ${getInnerGlowColor(plan.id)}, inset 0 0 80px ${getInnerGlowColor(plan.id)}`,
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
            boxShadow: `inset 0 1px 2px rgba(255, 255, 255, 0.1), inset 0 0 60px ${getInnerGlowColor(plan.id)}`,
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
                ? `inset 0 0 80px ${getInnerGlowColor(plan.id)}, inset 0 0 120px ${getInnerGlowColor(plan.id)}`
                : `inset 0 0 40px ${getInnerGlowColor(plan.id)}`,
              opacity: activeCardIndex === index ? 1 : 0.6,
            }}
          />

          {/* Content container: SHARP TEXT, NO BLUR */}
          <div className={`relative p-6 sm:p-8 flex ${isHorizontal ? "flex flex-col lg:flex-row gap-6 lg:gap-8" : "flex-col"} h-full z-10`}>
            {/* Left block: Title and Price */}
            <div className={`flex flex-col ${isHorizontal ? "lg:w-auto lg:min-w-[240px]" : "w-full mb-6 sm:mb-8"}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                {plan.title}
              </h3>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-4 lg:mb-0">
                {price}
              </div>
            </div>

            {/* Middle block: Features (only for horizontal) */}
            {isHorizontal && (
              <div className={`flex-1 flex-grow`}>
                <ul className={`${isHorizontal ? "grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5" : "space-y-2"}`}>
                  {plan.features.map((feature) => {
                    const tooltipId = feature.tooltip;
                    const label = featureFallbacks[feature.id] || feature.id;
                    const bulletColor = getBulletColor(plan.id);

                    return (
                      <li key={feature.id} className="flex items-start gap-2 text-white text-sm">
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
                        <span className="flex-1 leading-snug text-gray-100">{label}</span>
                        {tooltipId && tooltipContent[tooltipId] && (
                          <div
                            className="relative hidden sm:flex h-4 w-4 items-center justify-center flex-shrink-0"
                            onMouseEnter={() => {
                              setActiveTooltip(tooltipId);
                              setActiveCardIndex(index);
                            }}
                            onMouseLeave={() => {
                              setActiveTooltip(null);
                            }}
                          >
                            <svg
                              className="w-3 h-3 text-gray-400 cursor-help"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            {activeTooltip === tooltipId && (
                              <TooltipCard className="z-[9999] w-72 sm:w-80 max-w-[calc(100vw-3rem)] rounded-lg border border-white/20 bg-black/80 p-4 text-white shadow-2xl">
                                <h4 className="mb-2 font-bold text-white">
                                  {tooltipContent[tooltipId].title}
                                </h4>
                                <p className="text-sm text-gray-200">
                                  {tooltipContent[tooltipId].content}
                                </p>
                              </TooltipCard>
                            )}
                          </div>
                        )}
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
                  {plan.features.map((feature) => {
                    const tooltipId = feature.tooltip;
                    const label = featureFallbacks[feature.id] || feature.id;

                    return (
                      <li key={feature.id} className="flex items-start sm:items-center gap-3 text-white text-sm sm:text-base">
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
                        <span className="flex-1 leading-snug text-gray-100">{label}</span>
                        {tooltipId && tooltipContent[tooltipId] && (
                          <div
                            className="relative hidden sm:flex h-5 w-5 items-center justify-center flex-shrink-0"
                            onMouseEnter={() => {
                              setActiveTooltip(tooltipId);
                              setActiveCardIndex(index);
                            }}
                            onMouseLeave={() => {
                              setActiveTooltip(null);
                            }}
                          >
                            <svg
                              className="w-4 h-4 text-gray-400 cursor-help"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            {activeTooltip === tooltipId && (
                              <TooltipCard className="z-[9999] w-72 sm:w-80 max-w-[calc(100vw-3rem)] rounded-lg border border-white/20 bg-black/80 p-4 text-white shadow-2xl">
                                <h4 className="mb-2 font-bold text-white">
                                  {tooltipContent[tooltipId].title}
                                </h4>
                                <p className="text-sm text-gray-200">
                                  {tooltipContent[tooltipId].content}
                                </p>
                              </TooltipCard>
                            )}
                          </div>
                        )}
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
                  Request the system
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
