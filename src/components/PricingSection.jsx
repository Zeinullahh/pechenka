import React, { useState } from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const PricingSection = () => {
  const [projectCost, setProjectCost] = useState(1000);
  const minCost = 1000;
  const maxCost = 100000;

  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  const plans = [
    {
      name: "Basic",
      price: "15% of project cost per year",
      features: [
        "✓ Critical Bug Fixes (48h SLA)",
        "- Monthly Updates",
        "Quarterly Security Audits",
        "- Dedicated Manager",
      ],
      accent: "#FF00B7",
    },
    {
      name: "Pro",
      price: "20% of project cost per year",
      features: [
        "✓ Critical Bug Fixes (24h SLA)",
        "10h Monthly Updates",
        "Monthly Security Audits",
        "- Dedicated Manager",
      ],
      accent: "#00BFFF",
    },
    {
      name: "Enterprise",
      price: "25% of project cost per year",
      features: [
        "✓ Critical Bug Fixes (4h SLA)",
        "Unlimited Monthly Updates + Roadmap",
        "Weekly Security Audits + backups",
        "✓ Dedicated Manager",
      ],
      accent: "#37FF8B",
    },
  ];

  return (
    <section className="relative space-y-8">
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Pricing
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <EdgeGlowCard
            key={index}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[22px] border border-white/12 p-8"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(90% 130% at 20% -10%, ${plan.accent}3d 0%, transparent 70%)`,
                }}
              />
              <div className="relative space-y-4">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="text-white/80">{plan.price}</p>
                <ul className="mt-4 text-white/65 space-y-2 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </EdgeGlowCard>
        ))}
      </div>

      <EdgeGlowCard
        mode="static"
        spotlight
        {...defaultGlowPalette}
        outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
        innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
      >
        <div
          className="relative flex flex-col gap-6 overflow-hidden rounded-[22px] border border-white/12 p-8"
          style={{
            boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
            background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
          }}
        >
          <label htmlFor="project-cost" className="block text-lg font-medium text-white">
            Project Cost Calculator
          </label>
          <input
            id="project-cost"
            type="range"
            min={minCost}
            max={maxCost}
            step="1000"
            className="w-full mt-4"
            value={projectCost}
            onChange={(e) => setProjectCost(e.target.value)}
          />
          <div className="mt-4 text-white space-y-2">
            <div>Selected Project Cost: ${projectCost}</div>
            <div>Basic (15%): ${(projectCost * 0.15).toFixed(2)} per year</div>
            <div>Pro (20%): ${(projectCost * 0.2).toFixed(2)} per year</div>
            <div>Enterprise (25%): ${(projectCost * 0.25).toFixed(2)} per year</div>
          </div>
        </div>
      </EdgeGlowCard>
    </section>
  );
};

export default PricingSection;