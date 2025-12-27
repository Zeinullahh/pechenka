import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const TechnologyStack = () => {
  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const technologies = [
    { src: "/logos/javascript-logo.png", label: "JavaScript", accent: "#FF00B7" },
    { src: "/logos/tailwind-logo.png", label: "Tailwind", accent: "#00BFFF" },
    { src: "/logos/go-logo.png", label: "Go", accent: "#37FF8B" },
    { src: "/logos/fastapi-logo.png", label: "FastAPI", accent: "#FFB800" },
    { src: "/logos/flutter-logo.png", label: "Flutter", accent: "#FF00B7" },
    { src: "/logos/docker-logo.png", label: "Docker", accent: "#00BFFF" },
    { src: "/logos/openai-logo.png", label: "OpenAI", accent: "#37FF8B" },
    { src: "/logos/kaspi-logo.png", label: "Kaspi API", accent: "#FFB800" },
  ];

  return (
    <section className="relative space-y-8 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Technology Stack
        </h2>
      </div>
      <div className="flex overflow-x-auto gap-6 py-4 justify-center">
        {technologies.map((tech) => (
          <EdgeGlowCard
            key={tech.label}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default flex-shrink-0"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative w-32 h-32 rounded-[22px] border border-white/12 flex items-center justify-center"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(3,6,14,0.96), rgba(1,2,6,0.98))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(90% 130% at 20% -10%, ${tech.accent}3d 0%, transparent 70%)`,
                }}
              />
              <img
                src={tech.src}
                alt={tech.label}
                className="w-20 h-20 relative z-10"
                loading="lazy"
              />
              <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/70 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                {tech.label}
              </span>
            </div>
          </EdgeGlowCard>
        ))}
      </div>
    </section>
  );
};

export default TechnologyStack;