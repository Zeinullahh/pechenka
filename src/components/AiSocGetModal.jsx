"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from "@/contexts/LanguageContext";
import RequestAccessModal from "@/components/RequestAccessModal";

const AiSocGetModal = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [isAccessRequestOpen, setIsAccessRequestOpen] = useState(false);
    const [selectedSecuritySystem, setSelectedSecuritySystem] = useState(null);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleClose = () => {
        setSelectedSecuritySystem(null);
        setEmail("");
        setSubmitted(false);
        onClose();
    };

    const handleSystemSelect = (system) => {
        setSelectedSecuritySystem(system);
        setEmail("");
        setSubmitted(false);
    };

    const handleEmailAdmin = () => {
        window.open("https://kz.mail.csd.silenceai.net", "_blank", "noopener,noreferrer");
    };

    const handleAccessRequest = () => {
        onClose();
        setIsAccessRequestOpen(true);
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
                                {selectedSecuritySystem
                                    ? `${selectedSecuritySystem} Login/Register`
                                    : t("aiSocModal.title", "Admin Console")}
                            </h2>

                            <div className="flex flex-col gap-6">
                                {selectedSecuritySystem ? (
                                    <form className="flex flex-col gap-4" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                                        <label htmlFor="security-access-email" className="text-sm text-white/80">
                                            {t("aiSocModal.emailLabel", "Email address")}
                                        </label>
                                        <input
                                            id="security-access-email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }}
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:border-purple-400 focus:outline-none"
                                        />
                                        <button type="submit" className="w-full rounded-xl border border-purple-400/40 bg-purple-500/20 px-4 py-3 font-semibold text-white hover:bg-purple-500/30">
                                            {t("aiSocModal.continue", "Continue")}
                                        </button>
                                        {submitted && (
                                            <p role="status" className="rounded-xl border border-amber-200/20 bg-amber-300/10 px-4 py-3 text-sm leading-relaxed text-amber-100">
                                                {t("aiSocModal.unregistered", "Your account is not registered. Please contact")}{" "}
                                                <a className="font-semibold underline" href="mailto:support@silenceai.net">support@silenceai.net</a>.
                                            </p>
                                        )}
                                        <button type="button" onClick={() => setSelectedSecuritySystem(null)} className="self-center px-3 py-2 text-sm text-white/70 hover:text-white">
                                            {t("aiSocModal.backToSystems", "Back to systems")}
                                        </button>
                                    </form>
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        <button onClick={handleAccessRequest} className="w-full rounded-xl border border-purple-500/30 bg-purple-600/20 px-6 py-4 text-center font-semibold transition-all hover:bg-purple-600/30">
                                            {t("aiSocModal.emailWorkspace", "Email Workspace")}
                                        </button>
                                        <button onClick={handleEmailAdmin} className="w-full rounded-xl border border-indigo-500/30 bg-indigo-600/20 px-6 py-4 text-center font-semibold transition-all hover:bg-indigo-600/30">
                                            {t("aiSocModal.emailAdminPanel", "Email Admin Panel")}
                                        </button>
                                        <button onClick={() => handleSystemSelect("Web Security")} className="w-full rounded-xl border border-pink-500/30 bg-pink-600/20 px-6 py-4 text-center font-semibold transition-all hover:bg-pink-600/30">
                                            {t("aiSocModal.webSecurity", "Web Security")}
                                        </button>
                                        <button onClick={() => handleSystemSelect("Pentester")} className="w-full rounded-xl border border-blue-500/30 bg-blue-600/20 px-6 py-4 text-center font-semibold transition-all hover:bg-blue-600/30">
                                            {t("aiSocModal.pentester", "Pentester")}
                                        </button>
                                        <button onClick={() => handleSystemSelect("Server Security")} className="w-full rounded-xl border border-cyan-500/30 bg-cyan-600/20 px-6 py-4 text-center font-semibold transition-all hover:bg-cyan-600/30">
                                            {t("aiSocModal.serverSecurity", "Server Security")}
                                        </button>
                                    </div>
                                )}

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
                                                <path d="M16 3L29 9L16 15L3 9L16 3Z" fill="#3AA9E1" stroke="#3AA9E1" strokeWidth="2" strokeLinejoin="round" />
                                                <path d="M16 10.5L29 16.5L16 22.5L3 16.5L16 10.5Z" fill="#8EBE3E" stroke="#8EBE3E" strokeWidth="2" strokeLinejoin="round" />
                                                <path d="M16 18L29 24L16 30L3 24L16 18Z" fill="#F06F4D" stroke="#F06F4D" strokeWidth="2" strokeLinejoin="round" />
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
            <RequestAccessModal isOpen={isAccessRequestOpen} onClose={() => setIsAccessRequestOpen(false)} />
        </>
    );
};

export default AiSocGetModal;
