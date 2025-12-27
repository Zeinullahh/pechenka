import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const CaseStudies = () => {
  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const caseStudies = [
    {
      image: "/images/case-study-1.jpg",
      title: "NAK — Team Management AI",
      description: "Problem: Manual resource allocation. Solution: AI scheduling agent. Result: 32% productivity increase.",
      accent: "#FF00B7",
    },
    {
      image: "/images/case-study-2.jpg",
      title: "Chic Flowers — eCommerce Platform",
      description: "Problem: Low online conversions. Solution: Personalized recommender + UX overhaul. Result: +45% online sales.",
      accent: "#00BFFF",
    },
    {
      image: "/images/case-study-3.jpg",
      title: "Silence AI-SOC — Cybersecurity",
      description: "Problem: High alert noise. Solution: AI-driven detection & automated response. Result: 68% fewer false positives.",
      accent: "#37FF8B",
    },
  ];

  return (
    <section className="relative space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Case Studies
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <EdgeGlowCard
            key={index}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[22px] border border-white/12 p-6"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(90% 130% at 20% -10%, ${study.accent}3d 0%, transparent 70%)`,
                }}
              />
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-40 object-cover rounded relative z-10"
                loading="lazy"
              />
              <div className="relative z-10 space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {study.title}
                </h3>
                <p className="text-sm text-white/65">
                  {study.description}
                </p>
                <a href="#" className="mt-4 inline-block text-white/90 underline text-sm">
                  Similar for you?
                </a>
              </div>
            </div>
          </EdgeGlowCard>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;