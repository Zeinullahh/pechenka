"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Playground from './Playground.jsx';
import GlowButton from './GlowButton.jsx';
import TooltipCard from './TooltipCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = ({ onOpenModal }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [headingFontSize, setHeadingFontSize] = useState(72);
  const playgroundRef = useRef(null);
  const playgroundHeadingRef = useRef(null);
  const { t } = useLanguage();
  const fullText = t(
    "hero.headline",
    "AI-SOC 1: Cybersecurity is neither expensive nor complicated anymore"
  );
  const playgroundHeading = t("hero.playgroundHeading", "60 seconds tour");

  const tooltipContent = {
    "web-attack-protection": {
      title: t("hero.tooltips.web.title", "Web Attack Protection"),
      content: t(
        "hero.tooltips.web.content",
        "System can protect against ALL types of web attacks, such as DDoS, SQLi, and others, except business logic vulnerabilities"
      ),
    },
    "email-attack-protection": {
      title: t("hero.tooltips.email.title", "Email Attack Protection"),
      content: t(
        "hero.tooltips.email.content",
        "System can protect against ALL types of email attacks, such as phishing, malware attachment, dangerous links, etc."
      ),
    },
  };

  const adjustPlaygroundHeadingSize = useCallback(() => {
    const headingEl = playgroundHeadingRef.current;
    const containerEl = playgroundRef.current;
    if (!headingEl || !containerEl) return;

    const containerWidth = containerEl.getBoundingClientRect().width;
    if (!containerWidth) return;

    const targetWidth = Math.max(containerWidth, 0);

    const MAX_FONT_SIZE = 320;
    const MIN_FONT_SIZE = 24;

    let low = MIN_FONT_SIZE;
    let high = MAX_FONT_SIZE;
    let best = MIN_FONT_SIZE;

    headingEl.style.whiteSpace = "nowrap";

    for (let i = 0; i < 25; i += 1) {
      const mid = (low + high) / 2;
      headingEl.style.fontSize = `${mid}px`;
      const width = headingEl.scrollWidth;
      if (width <= targetWidth) {
        best = mid;
        low = mid;
      } else {
        high = mid;
      }
    }

    headingEl.style.fontSize = `${best}px`;
    setHeadingFontSize((prev) => (prev !== best ? best : prev));
  }, []);

  useEffect(() => {
    adjustPlaygroundHeadingSize();

    let handleResize;
    if (typeof window !== "undefined") {
      handleResize = () => adjustPlaygroundHeadingSize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [adjustPlaygroundHeadingSize, playgroundHeading]);

  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => adjustPlaygroundHeadingSize());

    if (playgroundRef.current) {
      observer.observe(playgroundRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [adjustPlaygroundHeadingSize]);

  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-start gap-14 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full lg:w-1/2 text-white lg:mt-0">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
          {fullText}
        </h1>
        <p className="font-bold mb-4 text-base sm:text-lg">
          {t(
            "hero.subheading",
            "The all in one, AI-based cybersecurity system that combines:"
          )}
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              key: "web-attack-protection",
              label: t("hero.bullets.web", "Real time web attack protection"),
            },
            {
              key: "email-attack-protection",
              label: t("hero.bullets.email", "Email attacks protection"),
            },
          ].map((item) => (
            <div key={item.key} className="flex items-start sm:items-center gap-2 text-sm sm:text-base">
              <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="leading-snug">{item.label}</span>
              <div
                className="relative hidden sm:flex items-start flex-shrink-0"
                onMouseEnter={() => setActiveTooltip(item.key)}
                onMouseLeave={() => setActiveTooltip(null)}
              >
                <svg className="h-4 w-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {activeTooltip === item.key && (
                  <TooltipCard className="z-[9999] w-72 sm:w-80 max-w-[calc(100vw-3rem)] rounded-lg border border-white/20 bg-black p-4 text-white shadow-2xl">
                    <h4 className="mb-2 font-bold text-white">{tooltipContent[item.key].title}</h4>
                    <p className="text-sm text-gray-200">{tooltipContent[item.key].content}</p>
                  </TooltipCard>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <GlowButton onClick={onOpenModal} className="w-full sm:w-auto">
            {t("hero.buttons.connect", "Connect in 4 minutes")}
          </GlowButton>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:-mt-8 relative flex justify-center lg:justify-end pt-0">
        {/* Playground heading sized to match the card below */}
        <div className="relative z-10 w-full max-w-2xl">
          <h2
            ref={playgroundHeadingRef}
            className="block w-full font-bold text-white text-center leading-none whitespace-nowrap mt-0 mb-3"
            style={{ fontSize: `${headingFontSize}px` }}
          >
            {playgroundHeading}
          </h2>
          <Playground ref={playgroundRef} />
        </div>
      </div>
    </div>
  );
};

export default Hero;