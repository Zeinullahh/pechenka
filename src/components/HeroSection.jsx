import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const HeroSection = () => {
  const heroGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(55,255,139,0.7)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(55,255,139,0.7)",
    bottomColor: "rgba(55,255,139,0.7)",
  };

  return (
    <section className="relative text-center">
      <div
        className="hero-spotlight hero-spotlight--pink"
        aria-hidden="true"
      />
      <div
        className="hero-spotlight hero-spotlight--cyan"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-6 mb-6">
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl drop-shadow-lg">
          Custom AI & Software Development
        </h1>
        <p className="text-lg text-white/90 sm:text-xl lg:text-2xl">
          We build production-ready AI agents and custom software for Kazakhstan and the global market.
        </p>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <EdgeGlowCard
          mode="static"
          spotlight
          {...heroGlowPalette}
          outerClassName="group relative z-10 rounded-[34px] p-[2px] edge-glow-card--hero"
          innerClassName="affiliate-card affiliate-card--hero rounded-[30px]"
        >
          <div className="rounded-[26px] p-6">
            <video
              className="mx-auto w-full rounded-lg shadow-lg"
              src="/videos/ai-agent-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              width="640"
              height="360"
              loading="lazy"
            />
          </div>
        </EdgeGlowCard>
      </div>
    </section>
  );
};

export default HeroSection;