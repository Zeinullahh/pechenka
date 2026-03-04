"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import AiSocArchitecture from '@/components/AiSocArchitecture.jsx';
import Pricing from '@/components/Pricing.jsx';
import { StickyScrollSolution } from '@/components/StickyScrollSolution.jsx';
import Insights from '@/components/Insights.jsx';
import AiSocGetModal from '@/components/AiSocGetModal.jsx';
import { FloatingText } from '@/components/FloatingText.jsx';
import Spotlights from '@/components/Spotlights.jsx';
import BackToTopButton from '@/components/BackToTopButton';
import FaqSection from '@/components/FaqSection.jsx';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionContent } from '@/lib/solutionContent';
import EdgeGlowCard from '@/components/EdgeGlowCard.jsx';
import { Rocket, BrainCircuit, Radar, ShieldCheck } from 'lucide-react';

const AiSocLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const valueFeatures = [
    {
      title: t('valueSection.features.deploy.title', 'Deploy in minutes'),
      description: t(
        'valueSection.features.deploy.description',
        'Set up web and email protection in under 4 minutes without complex configuration.'
      ),
      icon: <Rocket className="w-11 h-11 text-purple-200 drop-shadow-[0_0_18px_rgba(168,85,247,0.35)]" />,
      glow: 'from-purple-600/60 via-fuchsia-500/25 to-blue-500/40',
      glowColor: 'rgba(168,85,247,0.8)',
    },
    {
      title: t('valueSection.features.ai.title', 'AI-powered analysis'),
      description: t(
        'valueSection.features.ai.description',
        'Advanced AI continuously analyzes traffic, emails, and threats in real time.'
      ),
      icon: <BrainCircuit className="w-11 h-11 text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]" />,
      glow: 'from-cyan-500/60 via-blue-500/30 to-purple-600/40',
      glowColor: 'rgba(34,211,238,0.8)',
    },
    {
      title: t('valueSection.features.visualization.title', 'Advanced visualization'),
      description: t(
        'valueSection.features.visualization.description',
        'Monitor web traffic and email flows through an advanced visual interface.'
      ),
      icon: <Radar className="w-11 h-11 text-indigo-200 drop-shadow-[0_0_18px_rgba(99,102,241,0.32)]" />,
      glow: 'from-indigo-500/60 via-purple-500/30 to-sky-500/40',
      glowColor: 'rgba(99,102,241,0.8)',
    },
    {
      title: t('valueSection.features.affordable.title', 'Affordable security'),
      description: t(
        'valueSection.features.affordable.description',
        'Enterprise-level protection without the cost of traditional cybersecurity systems.'
      ),
      icon: <ShieldCheck className="w-11 h-11 text-blue-200 drop-shadow-[0_0_18px_rgba(59,130,246,0.32)]" />,
      glow: 'from-blue-500/60 via-purple-500/30 to-cyan-500/40',
      glowColor: 'rgba(59,130,246,0.8)',
    },
  ];

  useEffect(() => {
    // Preload solution section imagery so assets are cached before scrolling
    solutionContent.forEach(({ imagePath }) => {
      const img = new window.Image();
      img.src = imagePath;
    });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center p-1 pt-8 md:pt-16">
        <Spotlights />
        <div className="w-full max-w-7xl mx-auto">
          <Header onOpenModal={openModal} />
          <Hero onOpenModal={openModal} />
          <AiSocArchitecture />
          <Pricing onOpenModal={openModal} />
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <Insights />
        </div>
        <div className="w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t('valueSection.title', 'Why AI-SOC')}
            </h2>
            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto mt-4">
              {t(
                'valueSection.subtitle',
                'AI-SOC makes enterprise-level cybersecurity accessible to any company. Deploy protection in minutes and manage web and email security from one unified platform.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {valueFeatures.map((feature) => (
              <div key={feature.title} className="relative group">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.glow} opacity-35 blur-3xl group-hover:opacity-55 transition duration-500`}
                />
                <EdgeGlowCard
                  mode="static"
                  outerClassName="rounded-3xl p-[1.5px]"
                  innerClassName="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 h-full p-8 flex flex-col gap-4 shadow-[0_25px_80px_-35px_rgba(126,58,237,0.4)]"
                  glowColor={feature.glowColor}
                  secondaryGlowColor={feature.glowColor}
                >
                  <div className="flex flex-col gap-4 h-full">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mx-auto shadow-[0_0_35px_-12px_rgba(255,255,255,0.3)]">
                      {feature.icon}
                    </div>
                    <div className="space-y-3 text-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </EdgeGlowCard>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-24 px-4 sm:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              {t('solution.sectionTitle', 'AI-SOC Platform Overview')}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {t('solution.sectionSubtitle', 'AI-SOC provides a unified interface for monitoring and protecting web infrastructure and corporate email in real time.')}
            </p>
          </div>
          <StickyScrollSolution />
        </div>
        <FaqSection />
        <div className="w-full max-w-7xl mx-auto mt-24">
          <FloatingText />
        </div>
      </main>
      <AiSocGetModal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </>
  );
};

export default AiSocLanding;
