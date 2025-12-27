import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const ServicesBlock = () => {
  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const services = [
    {
      icon: "/icons/ai-agents-icon.png",
      title: "AI Agents",
      description: "Custom conversational and autonomous agents for customer support, operations, and analytics.",
      accent: "#FF00B7",
    },
    {
      icon: "/icons/custom-software-icon.png",
      title: "Custom Software",
      description: "End-to-end web and desktop applications tailored to your workflows.",
      accent: "#00BFFF",
    },
    {
      icon: "/icons/cybersecurity-icon.png",
      title: "Cybersecurity",
      description: "Security audits, penetration testing, and continuous monitoring.",
      accent: "#37FF8B",
    },
    {
      icon: "/icons/backend-devops-icon.png",
      title: "Backend/DevOps",
      description: "Scalable APIs, CI/CD, and cloud infrastructure.",
      accent: "#FFB800",
    },
    {
      icon: "/icons/mobile-icon.png",
      title: "Mobile",
      description: "Cross-platform mobile apps with native performance and polished UX.",
      accent: "#FF00B7",
    },
  ];

  return (
    <section className="relative space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Our Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <EdgeGlowCard
            key={index}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[22px] border border-white/12 p-6 text-center"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(3,6,14,0.96), rgba(1,2,6,0.98))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(90% 130% at 20% -10%, ${service.accent}3d 0%, transparent 70%)`,
                }}
              />
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                  loading="lazy"
                />
              </div>
              <div className="relative space-y-2">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="text-sm text-white/60">{service.description}</p>
                <a href="#contact-form" className="mt-4 inline-block text-white/90 underline text-xs">
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

export default ServicesBlock;