"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const architectureCards = [
    {
        id: "web",
        titleKey: "aiSoc.architecture.cards.web.title",
        titleFallback: "Web Security Component",
        descriptionKey: "aiSoc.architecture.cards.web.description",
        descriptionFallback:
            "The Web Security component protects websites, APIs, and infrastructure from common web attacks.",
        secondaryKey: "aiSoc.architecture.cards.web.secondary",
        secondaryFallback:
            "The system analyzes incoming traffic, identifies abnormal activity, and allows administrators to monitor and control traffic behavior.",
        capabilities: [
            {
                key: "aiSoc.architecture.cards.web.capability.1",
                fallback:
                    "Protection against common web attacks such as DDoS and SQL injection",
            },
            {
                key: "aiSoc.architecture.cards.web.capability.2",
                fallback: "Real-time monitoring of website traffic",
            },
            {
                key: "aiSoc.architecture.cards.web.capability.3",
                fallback: "Geographic traffic analysis and blocking",
            },
            {
                key: "aiSoc.architecture.cards.web.capability.4",
                fallback: "Visualization of traffic growth and requests per second",
            },
            {
                key: "aiSoc.architecture.cards.web.capability.5",
                fallback: "Monitoring of active users and bandwidth usage",
            },
        ],
        noteKey: "aiSoc.architecture.cards.web.note",
        noteFallback:
            "Traffic analysis does not affect website performance because logs are processed on a separate server.",
    },
    {
        id: "email",
        titleKey: "aiSoc.architecture.cards.email.title",
        titleFallback: "Email Security Component",
        descriptionKey: "aiSoc.architecture.cards.email.description",
        descriptionFallback:
            "The Email Security component protects corporate communication channels from phishing, spoofing, malicious links, and compromised accounts.",
        secondaryKey: "aiSoc.architecture.cards.email.secondary",
        secondaryFallback:
            "Unlike traditional email security filters, AI-SOC operates as a secure webmail gateway with its own centralized management console.",
        capabilities: [
            {
                key: "aiSoc.architecture.cards.email.capability.1",
                fallback: "Secure webmail environment for corporate email accounts",
            },
            {
                key: "aiSoc.architecture.cards.email.capability.2",
                fallback:
                    "Centralized monitoring of sent and received emails across the domain",
            },
            {
                key: "aiSoc.architecture.cards.email.capability.3",
                fallback: "Detection of phishing, spoofing, and malicious email threats",
            },
            {
                key: "aiSoc.architecture.cards.email.capability.4",
                fallback:
                    "Administrative ability to remove malicious emails from the system",
            },
            {
                key: "aiSoc.architecture.cards.email.capability.5",
                fallback:
                    "AI assistant inside the console that explains security events in simple terms",
            },
        ],
    },
];

const AiSocArchitecture = () => {
    const { t } = useLanguage();

    return (
        <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-purple-500/10 blur-[100px]" aria-hidden="true" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                        {t("aiSoc.architecture.title", "AI-SOC Architecture")}
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed bg-clip-text">
                        {t(
                            "aiSoc.architecture.subtitle",
                            "AI-SOC combines two core security components that work together within one platform."
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {architectureCards.map((card, index) => (
                        <div key={card.id} className="relative group">
                            <div
                                className={`absolute -inset-4 bg-gradient-to-r blur-3xl opacity-10 group-hover:opacity-30 transition duration-1000 rounded-[32px] ${index === 0
                                    ? "from-blue-600 via-purple-600 to-pink-600"
                                    : "from-pink-600 via-purple-600 to-blue-600"
                                    }`}
                            />
                            <div
                                className="relative z-10 flex flex-col h-full rounded-[32px] border border-white/[0.08] bg-black/20 p-8 sm:p-10 backdrop-blur-3xl transition-all duration-500 hover:bg-white/[0.03] hover:border-white/10 group-hover:scale-[1.01] overflow-hidden"
                            >
                                {/* Vertical Neon Accents */}
                                <div className="absolute left-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]" />
                                <div className="absolute right-0 top-12 bottom-12 w-[2px] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-20 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

                                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                                    {t(card.titleKey, card.titleFallback)}
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                                        {t(card.descriptionKey, card.descriptionFallback)}
                                    </p>
                                    {card.secondaryFallback && (
                                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                                            {t(card.secondaryKey, card.secondaryFallback)}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-200/80 mb-6">
                                        {t("aiSoc.architecture.capabilities", "Capabilities")}
                                        <div className="h-px flex-1 bg-white/10" />
                                    </h4>

                                    <ul className="space-y-4">
                                        {card.capabilities.map((cap) => (
                                            <li key={cap.key} className="flex items-start gap-3">
                                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)] shrink-0" />
                                                <span className="text-sm sm:text-base text-slate-300">
                                                    {t(cap.key, cap.fallback)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {card.noteKey && (
                                        <div className="mt-8 pt-6 border-t border-white/5">
                                            <p className="text-sm text-slate-500 font-medium">
                                                {t(card.noteKey, card.noteFallback)}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiSocArchitecture;
