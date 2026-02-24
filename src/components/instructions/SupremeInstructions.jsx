"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function SupremeInstructions() {
    const tabs = useMemo(
        () => [
            { id: "light", label: "Light" },
            { id: "max", label: "MAX" }
        ],
        []
    );
    const [activeTab, setActiveTab] = useState("light");

    return (
        <div className="flex w-full flex-col gap-2 pt-8">
            <div className="relative z-10 flex w-full justify-center">
                <div className="relative flex rounded-full border border-purple-400/25 bg-[#050b1a]/85 p-1 text-sm font-medium text-purple-100/70 shadow-[0_0_55px_rgba(168,85,247,0.28)] backdrop-blur-xl">
                    {tabs.map((tab) => {
                        const isActive = tab.id === activeTab;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className="relative flex min-w-[140px] items-center justify-center rounded-full px-5 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300/40"
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="supreme-tab-indicator"
                                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-200 via-violet-200 to-fuchsia-200 shadow-[0_0_35px_rgba(168,85,247,0.55)]"
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
                                        : "text-purple-100/70 hover:text-purple-50"
                                        }`}
                                >
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="relative w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -8, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <SupremeVideoPlaceholder tierLabel={activeTab === "light" ? "Light" : "MAX"} />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

function SupremeVideoPlaceholder({ tierLabel }) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <div className="relative">
                <div className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
                    <div className="absolute -top-32 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
                    <div className="absolute -top-10 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />
                </div>

                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-purple-600/40 via-violet-600/40 to-fuchsia-600/40 opacity-50 blur-[22px]" aria-hidden="true" />
                <div className="relative rounded-[36px] bg-gradient-to-r from-purple-500/60 via-violet-500/60 to-purple-500/60 p-[1.5px] shadow-[0_0_55px_rgba(168,85,247,0.25)]">
                    <Card className="relative rounded-[34px] border border-purple-500/10 bg-[#030712]/90 text-white shadow-[0_0_75px_rgba(168,85,247,0.2)] backdrop-blur-2xl">
                        <div className="flex flex-col items-center gap-6 px-6 py-12 sm:px-10 sm:py-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                                className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl text-center"
                            >
                                {tierLabel} video instructions
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
                                className="w-full max-w-4xl"
                            >
                                <div className="relative aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 text-center shadow-2xl backdrop-blur-sm">
                                    <div className="flex h-full w-full items-center justify-center">
                                        <p className="text-base text-slate-300/85 sm:text-lg">
                                            Video placeholder — full tutorial will be added soon.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
