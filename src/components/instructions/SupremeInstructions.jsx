"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function SupremeInstructions() {
    return (
        <div className="mx-auto w-full max-w-7xl pt-8">
            <div className="relative">
                {/* Purple glow effect */}
                <div className="pointer-events-none absolute inset-0 z-0 flex justify-center overflow-hidden">
                    <div className="absolute -top-32 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
                    <div className="absolute -top-10 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />
                </div>

                {/* Card with gradient border */}
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-purple-600/40 via-violet-600/40 to-fuchsia-600/40 opacity-50 blur-[22px]" aria-hidden="true" />
                <div className="relative rounded-[36px] bg-gradient-to-r from-purple-500/60 via-violet-500/60 to-purple-500/60 p-[1.5px] shadow-[0_0_55px_rgba(168,85,247,0.25)]">
                    <Card className="relative rounded-[34px] border border-purple-500/10 bg-[#030712]/90 text-white shadow-[0_0_75px_rgba(168,85,247,0.2)] backdrop-blur-2xl">
                        <div className="flex flex-col items-center gap-6 px-6 py-12 sm:px-10 sm:py-16">
                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                                className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl text-center"
                            >
                                Installation & Usage tutorial (5 minutes)
                            </motion.h2>

                            {/* Video Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                className="w-full max-w-4xl"
                            >
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
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
