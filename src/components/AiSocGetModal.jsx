"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "@/contexts/LanguageContext";

const AiSocGetModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();

    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
    };

    const handleRedirect = (url) => {
        window.location.href = url;
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
                                    onClick={() => handleRedirect('https://email-soc.silence.codes')}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/30 hover:to-indigo-600/30 border border-purple-500/30 rounded-xl font-semibold transition-all text-center"
                                >
                                    {t("aiSocModal.emailSecurity", "Login/Register to Email security")}
                                </button>

                                <button
                                    onClick={() => handleRedirect('https://web-soc.silence.codes')}
                                    className="w-full py-4 px-6 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 border border-pink-500/30 rounded-xl font-semibold transition-all text-center"
                                >
                                    {t("aiSocModal.webSecurity", "Login/Register to Web security")}
                                </button>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

                                <a
                                    href="https://www.onlyoffice.com/download-desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full py-4 px-6 bg-gradient-to-r from-slate-600/20 to-slate-500/20 hover:from-slate-600/30 hover:to-slate-500/30 border border-white/20 rounded-xl font-semibold transition-all"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-4 translate-x-0 group-hover:translate-x-1 transition-transform text-left">
                                            {/* OnlyOffice Logo */}
                                            <svg className="w-10 h-10 shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 3L29 9L16 15L3 9L16 3Z" fill="#3AA9E1" stroke="#3AA9E1" strokeWidth="2" strokeLinejoin="round"/>
                                                <path d="M16 10.5L29 16.5L16 22.5L3 16.5L16 10.5Z" fill="#8EBE3E" stroke="#8EBE3E" strokeWidth="2" strokeLinejoin="round"/>
                                                <path d="M16 18L29 24L16 30L3 24L16 18Z" fill="#F06F4D" stroke="#F06F4D" strokeWidth="2" strokeLinejoin="round"/>
                                            </svg>
                                            <div className="flex flex-col items-start gap-1">
                                                <span className="text-base text-white font-semibold">
                                                    {t("aiSocModal.getOnlyOffice", "Download OnlyOffice")}
                                                </span>
                                                <span className="text-xs text-gray-300 font-normal leading-snug">
                                                    {t(
                                                        "aiSocModal.onlyOfficeRedirectNote",
                                                        "You will be redirected to the official OnlyOffice website to download it (a strong alternative to Microsoft Excel, Word, and PowerPoint)."
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 group-hover:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
};

export default AiSocGetModal;
