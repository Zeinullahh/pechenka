"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StickyScrollAnimation } from '@/components/StickyScrollAnimation.jsx';
import GlowButton from './GlowButton.jsx';
import TooltipCard from './TooltipCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = ({ onOpenModal }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [headingFontSize, setHeadingFontSize] = useState(72);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const playgroundRef = useRef(null);
  const playgroundHeadingRef = useRef(null);
  const { t } = useLanguage();
  const fullText = t("hero.headline", "AI-SOC — AI-Powered Security Operations Center");
  const playgroundHeading = t("hero.playgroundHeading", <>AI powered<br />Security Operations Center</>);

  const tooltipContent = {
    "web-attack-protection": {
      title: t("hero.tooltips.web.title", "Web Attack Protection"),
      content: t(
        "hero.tooltips.web.content",
        "Protection against major web attacks including DDoS, SQL injection, and other network threats. Business logic vulnerabilities are not included."
      ),
    },
    "email-attack-protection": {
      title: t("hero.tooltips.email.title", "Email Attack Protection"),
      content: t(
        "hero.tooltips.email.content",
        "AI analyzes incoming and outgoing emails to detect phishing, spoofing attempts, malicious links, and other email-based attacks."
      ),
    },
    "unified-monitoring": {
      title: t("hero.tooltips.unified.title", "Unified security monitoring and threat detection"),
      content: t(
        "hero.tooltips.unified.content",
        "AI-SOC provides centralized monitoring of web infrastructure and email communications within a single security platform."
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

    if (isCompactViewport) {
      headingEl.style.whiteSpace = "normal";
      headingEl.style.maxWidth = "100%";
      headingEl.style.width = "100%";
      headingEl.style.marginInline = "auto";
      headingEl.style.overflowWrap = "anywhere";
      headingEl.style.wordBreak = "break-word";
      headingEl.style.lineHeight = "1.15";
      headingEl.style.paddingInline = "0.5rem";
      headingEl.style.boxSizing = "border-box";
      headingEl.style.fontSize = "";
      return;
    }

    let low = MIN_FONT_SIZE;
    let high = MAX_FONT_SIZE;
    let best = MIN_FONT_SIZE;

    headingEl.style.whiteSpace = "nowrap";
    headingEl.style.maxWidth = "100%";
    headingEl.style.width = "100%";
    headingEl.style.marginInline = "0";
    headingEl.style.overflowWrap = "normal";
    headingEl.style.wordBreak = "normal";
    headingEl.style.lineHeight = "1";
    headingEl.style.paddingInline = "0";
    headingEl.style.boxSizing = "content-box";

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
  }, [isCompactViewport]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = () => setIsCompactViewport(mediaQuery.matches);

    updateViewport();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateViewport);
      return () => mediaQuery.removeEventListener("change", updateViewport);
    }

    mediaQuery.addListener(updateViewport);
    return () => mediaQuery.removeListener(updateViewport);
  }, []);

  const compactPlaygroundHeading =
    isCompactViewport && typeof playgroundHeading === "string"
      ? (() => {
          const words = playgroundHeading.trim().split(/\s+/);
          if (words.length < 4) return playgroundHeading;
          const midpoint = Math.ceil(words.length / 2);
          return (
            <>
              {words.slice(0, midpoint).join(" ")}
              <br />
              {words.slice(midpoint).join(" ")}
            </>
          );
        })()
      : playgroundHeading;

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
  }, [adjustPlaygroundHeadingSize, compactPlaygroundHeading]);

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
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-white">
          {fullText}
        </h1>
        <p className="font-bold mb-4 text-base sm:text-lg">
          {t(
            "hero.subheading",
            "A unified AI cybersecurity platform that combines Web Security and Email Security in a single control center."
          )}
        </p>
        <div className="space-y-4 mb-8">
          {[
            {
              key: "web-attack-protection",
              label: t("hero.bullets.web", "Real-time protection for web infrastructure and APIs"),
            },
            {
              key: "email-attack-protection",
              label: t("hero.bullets.email", "Advanced protection against phishing, spoofing, and malicious email threats"),
            },
            {
              key: "unified-monitoring",
              label: t("hero.bullets.unified", "Unified security monitoring and threat detection"),
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
            {t("header.cta.get", "Get Started")}
          </GlowButton>
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:-mt-8 relative flex justify-center lg:justify-end pt-0">
        <div className="relative z-10 w-full max-w-2xl min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <StickyScrollAnimation />
          </div>
          <div ref={playgroundRef} className="relative z-10 w-full px-3 sm:px-4 overflow-visible">
            <h2
              ref={playgroundHeadingRef}
              className="block w-full max-w-full font-bold text-white text-center leading-tight whitespace-normal break-words text-[clamp(1.75rem,8.5vw,2.6rem)] sm:text-[clamp(2rem,7vw,3rem)] lg:whitespace-nowrap drop-shadow-2xl px-2 sm:px-0"
              style={{ fontSize: isCompactViewport ? undefined : `${headingFontSize}px`, textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}
            >
              {compactPlaygroundHeading}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;