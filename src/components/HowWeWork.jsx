import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const HowWeWork = () => {
  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const steps = [
    { key: "discovery", title: "Discovery", desc: "Requirements, stakeholders, success metrics.", accent: "#FF00B7" },
    { key: "design", title: "Design", desc: "UX, architecture, prototype.", accent: "#00BFFF" },
    { key: "poc", title: "Proof of Concept", desc: "Rapid validation with measurable KPIs.", accent: "#37FF8B" },
    { key: "build", title: "Build", desc: "Iterative sprints, automated tests.", accent: "#FFB800" },
    { key: "deploy", title: "Deploy", desc: "CI/CD, monitoring, security hardening.", accent: "#FF00B7" },
    { key: "support", title: "Support & Scale", desc: "Maintenance, roadmap, continuous improvement.", accent: "#00BFFF" },
  ];

  return (
    <section className="relative space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          How We Work
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {steps.map((step, i) => (
          <EdgeGlowCard
            key={step.key}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative flex h-full flex-col gap-3 overflow-hidden rounded-[22px] border border-white/12 p-4 text-center"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(3,6,14,0.96), rgba(1,2,6,0.98))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(90% 130% at 20% -10%, ${step.accent}3d 0%, transparent 70%)`,
                }}
              />
              <div
                className="relative w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 bg-black/60 ring-2 ring-white/10"
                aria-hidden
              >
                <span className="text-white font-semibold">{i + 1}</span>
              </div>
              <div className="relative space-y-2">
                <h4 className="text-sm font-semibold text-white">
                  {step.title}
                </h4>
                <p className="text-xs text-white/60">
                  {step.desc}
                </p>
              </div>
            </div>
          </EdgeGlowCard>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;