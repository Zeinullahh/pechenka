"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FaqSection = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: t('aiSocFaq.items.0.question', 'Is AI-SOC just a security engine or a full email platform?'),
            response: t('aiSocFaq.items.0.response', 'AI-SOC can be used in two different ways, depending on how your organization manages email.\n\n1️⃣ As a standalone secure email platform\n\nAI-SOC can operate as your organization’s primary email system, similar to Gmail or Outlook.\nIt includes its own mail server infrastructure, secure webmail interface, and administrative console for managing corporate accounts.\nIn this mode, organizations use AI-SOC as their main email platform while benefiting from built-in AI-driven security protection.\n\n2️⃣ As an AI security layer for existing email systems\n\nAI-SOC can also work alongside existing Gmail or Outlook environments as an additional security layer.\nIn this setup, users keep their current email provider while AI-SOC analyzes email traffic and protects against phishing, spoofing, malicious links, and other threats without requiring migration.'),
        },
        {
            question: t('aiSocFaq.items.1.question', 'Can AI-SOC be used alongside existing Gmail or Outlook environments?'),
            response: t('aiSocFaq.items.1.response', 'Yes. AI-SOC can run as an additional security layer while you keep Gmail or Outlook as your primary provider.'),
        },
        {
            question: t('aiSocFaq.items.2.question', 'What happens when AI-SOC operates as the primary email infrastructure?'),
            response: t('aiSocFaq.items.2.response', 'When AI-SOC is your main platform, it provides secure webmail, domain-level admin controls, and built-in threat protection inside the full email workflow.'),
        },
        {
            question: t('aiSocFaq.items.3.question', 'Can administrators create and control corporate email accounts?'),
            response: t('aiSocFaq.items.3.response', 'Yes. Administrators can create and manage accounts, monitor domain-wide email activity, and delete messages from user accounts when necessary.'),
        },
        {
            question: t('aiSocFaq.items.4.question', 'Can existing corporate email accounts be connected to AI-SOC?'),
            response: t('aiSocFaq.items.4.response', 'Yes. Existing Gmail or Outlook-based corporate accounts can be connected to AI-SOC, adding structured protection without replacing your current provider.'),
        },
        {
            question: t('aiSocFaq.items.5.question', 'Is security pre-configured or does it require manual setup?'),
            response: t('aiSocFaq.items.5.response', 'AI-SOC is pre-configured and AI-powered. It provides built-in protection with minimal setup based on the instructions page.'),
        },
        {
            question: t('aiSocFaq.items.6.question', 'Beyond email and web filtering, what advanced threats are detected?'),
            response: t('aiSocFaq.items.6.response', 'AI-SOC detects phishing context, spoofing patterns, malicious links, malware attachments, and suspicious behaviors across email and web traffic.'),
        },
        {
            question: t('aiSocFaq.items.7.question', 'Does AI-SOC use threat intelligence to prevent attacks in advance?'),
            response: t('aiSocFaq.items.7.response', 'Yes. AI-SOC uses threat intelligence feeds to block known malicious infrastructure before attacks reach protected systems.'),
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {t('aiSocFaq.title', 'Frequently Asked Questions')}
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-4">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                    ? "bg-white/10 border-purple-500/30 shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
                                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                                    }`}
                            >
                                {/* Gradient Border Glow on Hover (via background layer) */}
                                <div
                                    className={`absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 transition-opacity duration-500 blur-xl ${isOpen || "group-hover:opacity-100 opacity-0"
                                        }`}
                                    style={{ opacity: isOpen ? 0.3 : undefined }}
                                />

                                <button
                                    type="button"
                                    onClick={() => handleToggle(index)}
                                    className="flex w-full items-center justify-between px-6 py-5 sm:px-8 sm:py-6 text-left focus:outline-none z-10 relative"
                                >
                                    <span className="text-base sm:text-lg font-semibold text-white pr-8">
                                        {item.question}
                                    </span>
                                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                                        ? "border-purple-500/50 bg-purple-500/20 text-purple-300 rotate-180"
                                        : "border-white/10 bg-white/5 text-slate-400 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white"
                                        }`}>
                                        <ChevronDown className="h-4 w-4" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 relative z-10">
                                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                                                <div className="text-sm text-white/80 font-normal leading-relaxed whitespace-pre-wrap">
                                                    {item.response}
                                                </div>

                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
