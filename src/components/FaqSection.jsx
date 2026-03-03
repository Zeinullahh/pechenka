"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const deploymentModes = [
    'A standalone secure email infrastructure that can replace traditional Gmail or Outlook environments while preserving enterprise-grade reliability.',
    'A second-layer protection system that augments existing Gmail or Outlook deployments without forcing users to migrate their primary inbox provider.'
];

const faqItems = [
    {
        question: 'Is AI-SOC just a security engine or a full email platform?',
        response:
            'AI-SOC is a complete secure email infrastructure provided by SilenceAI. It includes its own mail server foundation and administrative console for managing corporate accounts. Organizations can deploy it as their primary business email system — similar to how Outlook or Gmail operate — but with built-in AI-driven protection embedded directly into the platform.'
    },
    {
        question: 'Can AI-SOC be used alongside existing Gmail or Outlook environments?',
        response:
            'Yes. AI-SOC can integrate with existing Gmail or Outlook-based corporate domains. In this configuration, emails continue flowing through your current provider, while AI-SOC performs an additional inspection layer within its security system, creating a double protection architecture.'
    },
    {
        question: 'What happens when AI-SOC operates as the primary email infrastructure?',
        response:
            'When deployed as standalone infrastructure, all emails are sent and received directly through SilenceAI’s email system without intermediaries such as Gmail or Outlook. Every message passes through multiple internal AI inspection stages before reaching the inbox. High-risk emails may be blocked entirely or isolated before delivery.'
    },
    {
        question: 'Can administrators create and control corporate email accounts?',
        response:
            'Yes. Administrators can create business email accounts directly within the AI-SOC administrative console using corporate domains. They can enforce domain-level security policies and remove emails across accounts created within the system.'
    },
    {
        question: 'Can existing corporate email accounts be connected to AI-SOC?',
        response:
            'Existing Gmail or Outlook-based corporate accounts can be connected to AI-SOC. This allows organizations to maintain their current provider while leveraging SilenceAI as an additional structured protection layer.'
    },
    {
        question: 'Is security pre-configured or does it require manual setup?',
        response:
            'AI-SOC delivers built-in AI protection by default. When deployed as standalone infrastructure, no external security configuration is required. Protection mechanisms are embedded directly into the email flow and enforced automatically.'
    }
];

const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="w-full mt-24 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#050409]/90 via-[#0a0f1c]/80 to-[#04030a]/90 shadow-[0_25px_120px_rgba(0,0,0,0.55)] backdrop-blur"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                variants={containerVariants}
            >
                <div className="px-6 py-10 sm:px-10 sm:py-12">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">FAQ</p>
                        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Answers for security leaders</h2>
                        <p className="mt-4 text-base text-slate-300">
                            Understand how AI-SOC embeds into your messaging estate, enforces zero-trust controls, and adapts to hybrid or fully managed deployment models.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col gap-4">
                        {faqItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={item.question}
                                    layout
                                    className={`rounded-2xl border border-white/10 transition duration-300 hover:border-white/20 ${isOpen ? 'bg-white/5 shadow-[0_15px_60px_rgba(0,0,0,0.35)]' : 'bg-white/0'
                                        }`}
                                >
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <span className="text-lg font-medium text-white">{item.question}</span>
                                        <motion.span
                                            className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white"
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                                                <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </motion.span>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-slate-300">
                                                    <p className="text-base leading-relaxed text-slate-200">{item.response}</p>
                                                    <ul className="mt-4 space-y-2 text-sm">
                                                        {deploymentModes.map((mode) => (
                                                            <li key={mode} className="flex items-start gap-3 text-slate-300">
                                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                                                <span>{mode}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FaqSection;
