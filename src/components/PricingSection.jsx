import React, { useState } from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const PricingSection = () => {
  const [projectCost, setProjectCost] = useState(25000);

  const plans = [
    {
      name: "Basic",
      percent: 0.15,
      badge: null,
      accent: "#FF00B7",
      features: [
        { label: "Critical Bug Fixes (48h SLA)", enabled: true },
        { label: "Monthly Updates", enabled: false },
        { label: "Quarterly Security Audits", enabled: true },
        { label: "Dedicated Manager", enabled: false },
      ],
    },
    {
      name: "Pro",
      percent: 0.2,
      badge: "Most Popular",
      accent: "#00BFFF",
      features: [
        { label: "Critical Bug Fixes (24h SLA)", enabled: true },
        { label: "10h Monthly Updates", enabled: true },
        { label: "Monthly Security Audits", enabled: true },
        { label: "Dedicated Manager", enabled: false },
      ],
    },
    {
      name: "Enterprise",
      percent: 0.25,
      badge: "Best Value",
      accent: "#37FF8B",
      features: [
        { label: "Critical Bug Fixes (4h SLA)", enabled: true },
        { label: "Unlimited Updates + Roadmap", enabled: true },
        { label: "Weekly Audits + Backups", enabled: true },
        { label: "Dedicated Manager", enabled: true },
      ],
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-10 py-14 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Transparent Pricing
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
          Mobile-first plans built to scale with your product.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <EdgeGlowCard
            key={i}
            mode="static"
            spotlight
            outerClassName="rounded-[28px] p-[2px]"
            innerClassName="rounded-[26px]"
          >
            <div
              className="relative h-full rounded-[22px] border border-white/10 
                         p-6 sm:p-8 space-y-6 transition-transform duration-500
                         hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(160deg, rgba(3,6,16,0.98), rgba(1,2,6,0.98))",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    background: plan.accent,
                    color: "#000",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Title */}
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/50">
                  {(plan.percent * 100).toFixed(0)}% yearly maintenance
                </p>
              </div>

              {/* Price */}
              <div>
                <div
                  className="text-3xl sm:text-4xl font-bold"
                  style={{ color: plan.accent }}
                >
                  ${(projectCost * plan.percent).toLocaleString()}
                </div>
                <p className="text-xs sm:text-sm text-white/50">
                  per year (est.)
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 text-sm">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className={`flex gap-2 ${
                      f.enabled
                        ? "text-white/80"
                        : "text-white/30 line-through"
                    }`}
                  >
                    <span
                      className={`${
                        f.enabled ? "text-green-400" : "text-white/30"
                      }`}
                    >
                      ✓
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </EdgeGlowCard>
        ))}
      </div>

      {/* Calculator */}
      <EdgeGlowCard
        mode="static"
        spotlight
        outerClassName="rounded-[30px] p-[2px]"
        innerClassName="rounded-[28px]"
      >
        <div
          className="rounded-[22px] border border-white/10 p-6 sm:p-10 space-y-8"
          style={{
            background:
              "linear-gradient(160deg, rgba(3,6,16,0.98), rgba(1,2,6,0.98))",
          }}
        >
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Project Cost Calculator
            </h3>
            <p className="text-white/60 text-sm">
              Slide to see your yearly maintenance
            </p>
          </div>

          {/* Slider */}
          <input
            type="range"
            min={1000}
            max={100000}
            step={1000}
            value={projectCost}
            onChange={(e) => setProjectCost(Number(e.target.value))}
            className="w-full accent-pink-500"
          />

          {/* Sticky-like value */}
          <div className="text-center text-lg font-medium text-white">
            Project Cost:{" "}
            <span className="text-pink-400">
              ${projectCost.toLocaleString()}
            </span>
          </div>

          {/* Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 p-4 text-center"
              >
                <div className="text-white/60 text-sm">{plan.name}</div>
                <div
                  className="text-xl font-semibold"
                  style={{ color: plan.accent }}
                >
                  ${(projectCost * plan.percent).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </EdgeGlowCard>
    </section>
  );
};

export default PricingSection;
