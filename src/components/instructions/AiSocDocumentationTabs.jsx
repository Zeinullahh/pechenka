"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import EmailSecurityDocumentation from "@/components/instructions/EmailSecurityDocumentation";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMessages } from "next-intl";

export default function AiSocDocumentationTabs() {
    const { t } = useLanguage();
    const messages = useMessages();
    const tabLabels = messages?.documentation?.tabs ?? {};
    const placeholderCopy = messages?.documentation?.webSecurity?.placeholder ?? {};
    const tabs = useMemo(
        () => [
            { id: "web", label: tabLabels?.web ?? "Web Security" },
            { id: "email", label: tabLabels?.email ?? "Email Security" }
        ],
        [tabLabels]
    );
    const [activeTab, setActiveTab] = useState("email");

    return (
        <div className="flex w-full flex-col gap-2">
            {/* Tabs */}
            <div className="relative z-10 flex w-full justify-center">
                <div className="relative flex rounded-full border border-cyan-400/25 bg-[#050b1a]/85 p-1 text-sm font-medium text-cyan-100/70 shadow-[0_0_55px_rgba(56,189,248,0.28)] backdrop-blur-xl">
                    {tabs.map((tab) => {
                        const isActive = tab.id === activeTab;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className="relative flex min-w-[160px] items-center justify-center rounded-full px-5 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="tab-indicator"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-200 via-sky-200 to-emerald-200 shadow-[0_0_35px_rgba(56,189,248,0.55)]"
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 28
                                        }}
                                    />
                                )}
                                <span
                                    className={`relative z-10 ${isActive
                                        ? "text-black"
                                        : "text-cyan-100/70 hover:text-cyan-50"
                                        }`}
                                >
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content */}
            <div className="relative w-full">
                {activeTab === "email" ? (
                    <EmailSecurityDocumentation />
                ) : (
                    <WebSecurityPlaceholder
                        badge={placeholderCopy?.badge ?? "Web Security"}
                        title={placeholderCopy?.title ?? "Documentation is coming soon"}
                        description={placeholderCopy?.description ?? "We are preparing a detailed guide for configuring and protecting web applications. Check back soon — the materials will appear shortly."}
                    />
                )}
            </div>
        </div>
    );
}

function WebSecurityPlaceholder({ badge, title, description }) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="relative">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#38bdf8] via-[#7c3aed] to-[#22d3ee] opacity-50 blur-[22px]" aria-hidden="true" />
                <div className="relative rounded-[36px] bg-gradient-to-r from-[#38bdf8]/80 via-[#7c3aed]/80 to-[#22d3ee]/80 p-[1.5px] shadow-[0_0_55px_rgba(56,189,248,0.3)]">
                    <Card className="relative rounded-[34px] border border-cyan-400/20 bg-[#050b1d]/90 text-white shadow-[0_0_75px_rgba(56,189,248,0.28)] backdrop-blur-2xl">
                        <div className="flex flex-col items-center gap-4 px-10 py-16 text-center sm:py-20">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                                className="text-sm uppercase tracking-[0.3em] text-cyan-100/70"
                            >
                                {badge}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                                className="bg-gradient-to-r from-cyan-100 via-sky-100 to-emerald-100 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
                            >
                                {title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                                className="max-w-lg text-base text-slate-100/75"
                            >
                                {description}
                            </motion.p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
