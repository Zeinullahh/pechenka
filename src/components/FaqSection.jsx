"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
    {
        question: 'Is AI-SOC just a security engine or a full email platform?',
        response:
            `AI-SOC can be used in two different ways, depending on how your organization manages email.

1️⃣ As a standalone secure email platform

AI-SOC can operate as your organization’s primary email system, similar to Gmail or Outlook.
It includes its own mail server infrastructure, secure webmail interface, and administrative console for managing corporate accounts.
In this mode, organizations use AI-SOC as their main email platform while benefiting from built-in AI-driven security protection.

2️⃣ As an AI security layer for existing email systems

AI-SOC can also work alongside existing Gmail or Outlook environments as an additional security layer.
In this setup, users keep their current email provider while AI-SOC analyzes email traffic and protects against phishing, spoofing, malicious links, and other threats without requiring migration.`
    },
    {
        question: 'Can AI-SOC be used alongside existing Gmail or Outlook environments?',
        response:
            `AI-SOC can be used in two different ways, depending on how your organization manages email.

1️⃣ As a standalone secure email platform

AI-SOC can operate as your organization’s primary email system, similar to Gmail or Outlook.
It includes its own mail server infrastructure, secure webmail interface, and administrative console for managing corporate accounts.
In this mode, organizations use AI-SOC as their main email platform while benefiting from built-in AI-driven security protection.

2️⃣ As an AI security layer for existing email systems

AI-SOC can also work alongside existing Gmail or Outlook environments as an additional security layer.
In this setup, users keep their current email provider while AI-SOC analyzes email traffic and protects against phishing, spoofing, malicious links, and other threats without requiring migration.`
    },
    {
        question: 'What happens when AI-SOC operates as the primary email infrastructure?',
        response:
            `AI-SOC can be used in two different ways, depending on how your organization manages email.

1️⃣ As a standalone secure email platform

AI-SOC can operate as your organization’s primary email system, similar to Gmail or Outlook.
It includes its own mail server infrastructure, secure webmail interface, and administrative console for managing corporate accounts.
In this mode, organizations use AI-SOC as their main email platform while benefiting from built-in AI-driven security protection.

2️⃣ As an AI security layer for existing email systems

AI-SOC can also work alongside existing Gmail or Outlook environments as an additional security layer.
In this setup, users keep their current email provider while AI-SOC analyzes email traffic and protects against phishing, spoofing, malicious links, and other threats without requiring migration.`
    },
    {
        question: 'Can administrators create and control corporate email accounts?',
        response:
            'Administrators can view all corporate email accounts that send and receive emails within the domain. They can monitor email activity across the corporate domain. Administrators also have the ability to delete emails from corporate user accounts when necessary.'
    },
    {
        question: 'Can existing corporate email accounts be connected to AI-SOC?',
        response:
            'Existing Gmail or Outlook-based corporate accounts can be connected to AI-SOC. This allows organizations to maintain their current provider while leveraging SilenceAI as an additional structured protection layer.'
    },
    {
        question: 'Is security pre-configured or does it require manual setup?',
        response:
            `AI-SOC is a pre-configured, AI-powered system that provides built-in security without requiring additional installations, except for the setup steps described in the instructions page:
https://silence.codes/en/instructions/ai-soc/

Protection mechanisms are embedded directly into the email flow and enforced automatically.`
    }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

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
                        Frequently Asked Questions
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
