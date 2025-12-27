import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const WhyChooseUs = () => {
  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const features = [
    {
      icon: "/icons/rocket-icon.png",
      title: "Fast Delivery with Enterprise Quality",
      description: "Rapid, iterative delivery cycles that meet enterprise-grade reliability and compliance.",
      accent: "#FF00B7",
    },
    {
      icon: "/icons/brain-icon.png",
      title: "AI-first Product Engineering",
      description: "From prototypes to production AI agents — we design, train, and deploy models that solve real business problems.",
      accent: "#00BFFF",
    },
    {
      icon: "/icons/globe-icon.png",
      title: "Local Expertise, Global Reach",
      description: "Deep knowledge of Kazakhstan's market and regulations combined with international best practices.",
      accent: "#37FF8B",
    },
  ];

  return (
    <section className="relative space-y-8 overflow-visible pb-24">
      <div className="space-y-3 text-center pt-6 sm:pt-10 -mb-6 sm:-mb-10">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
          Why Choose Us
        </h2>
        <p className="text-lg text-white/80 sm:text-xl">
          Trusted by 2K+ users from Billion $ corporations
        </p>
      </div>
      <div className="flex justify-center gap-8 mb-8 relative">
        <img
          src="/images/kazmunaygaz-logo.png"
          alt="Kazmunaygaz"
          className="h-12 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/kazatomprom-logo.png"
          alt="Kazatomprom"
          className="h-12 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <img
          src="/images/nur-astana-kurylys-logo.png"
          alt="Nur Astana Kurylys"
          className="h-12 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="relative z-30 grid translate-y-10 gap-6 md:translate-y-16 md:grid-cols-3">
        {features.map((feature, index) => (
          <EdgeGlowCard
            key={index}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-20 rounded-[30px] p-[2px] edge-glow-card--default"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[22px] border border-white/12 p-8 text-center"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(3,6,14,0.96), rgba(1,2,6,0.98))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(90% 130% at 20% -10%, ${feature.accent}3d 0%, transparent 70%)`,
                }}
              />
              <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] bg-black/60 ring-2 ring-white/10 shadow-[0_12px_30px_rgba(5,12,32,0.6)]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                  loading="lazy"
                />
              </div>
              <div className="relative space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60">{feature.description}</p>
                <a href="#services" className="mt-4 inline-block text-white/90 underline text-sm">
                  Learn More
                </a>
              </div>
            </div>
          </EdgeGlowCard>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;