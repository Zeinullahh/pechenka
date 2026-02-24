"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "@/contexts/LanguageContext";

const AiSocGetModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [showDevNotice, setShowDevNotice] = useState(false);

    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
    };

    const handleComingSoonClick = (e) => {
        e.preventDefault();
        setShowDevNotice(true);
    };

    const handleDevNoticeClose = () => {
        setShowDevNotice(false);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center backdrop-blur-md bg-black/40"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative bg-[#050b1a]/90 backdrop-blur-2xl text-white rounded-2xl border border-purple-500/20 shadow-[0_0_50px_rgba(168,85,247,0.15)] p-8 w-full max-w-md mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-2xl font-bold mb-6 text-center text-white/90">
                                {t("aiSocModal.title", "Admin Console")}
                            </h2>

                            <div className="flex flex-col gap-6">
                                <button
                                    onClick={handleComingSoonClick}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/30 hover:to-indigo-600/30 border border-purple-500/30 rounded-xl font-semibold transition-all text-center"
                                >
                                    {t("aiSocModal.emailSecurity", "Login/Register to Email security")}
                                </button>

                                <button
                                    onClick={handleComingSoonClick}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 border border-pink-500/30 rounded-xl font-semibold transition-all text-center"
                                >
                                    {t("aiSocModal.webSecurity", "Login/Register to Web security")}
                                </button>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

                                <a
                                    href="https://www.onlyoffice.com/download-desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-6 text-gray-400 hover:text-white transition-all text-center text-sm font-medium"
                                >
                                    {t("aiSocModal.getOnlyOffice", "Get OnlyOffice")}
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Development Notice Modal */}
            <AnimatePresence>
                {showDevNotice && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10001] flex items-center justify-center backdrop-blur-md bg-black/40"
                        onClick={handleDevNoticeClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative bg-[#050b1a]/90 backdrop-blur-2xl text-white rounded-2xl border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.15)] p-8 w-full max-w-md mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={handleDevNoticeClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="text-center">
                                <div className="mb-4 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">Coming soon</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Silence team is working on easing access to the system.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AiSocGetModal;
