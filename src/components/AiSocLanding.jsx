"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import Pricing from '@/components/Pricing.jsx';
import { StickyScrollSolution } from '@/components/StickyScrollSolution.jsx';
import Insights from '@/components/Insights.jsx';
import RequestDemoModal from '@/components/RequestDemoModal.jsx';
import { FloatingText } from '@/components/FloatingText.jsx';
import { CybersecurityLamp } from '@/components/CybersecurityLamp.jsx';
import Spotlights from '@/components/Spotlights.jsx';
import BackToTopButton from '@/components/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { solutionContent } from '@/lib/solutionContent';

const AiSocLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

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
          <Pricing onOpenModal={openModal} />
        </div>
        <div className="mt-6">
          <CybersecurityLamp />
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <Insights />
        </div>
        <div className="w-full mt-24 px-4 sm:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              {t('solution.sectionTitle', 'Our Solution')}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              {t('solution.sectionSubtitle', 'Ready in 4 minutes and usable by any IT professional—no cybersecurity expertise required. We offer advanced visualization and affordability.')}
            </p>
          </div>
          <StickyScrollSolution />
        </div>
        <div className="w-full max-w-7xl mx-auto mt-24">
          <FloatingText />
        </div>
      </main>
      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </>
  );
};

export default AiSocLanding;
