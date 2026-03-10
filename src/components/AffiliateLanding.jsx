"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/Header";
import RequestDemoModal from "@/components/RequestDemoModal";
import BackToTopButton from "@/components/BackToTopButton";
import GlowButton from "@/components/GlowButton";
import EdgeGlowCard from "@/components/EdgeGlowCard";
import { CybersecurityLamp } from "@/components/CybersecurityLamp.jsx";
import { FloatingText } from "@/components/FloatingText";
import { useLanguage } from "@/contexts/LanguageContext";

const AffiliateLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const { t } = useLanguage();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { heroMetrics, howItWorksSteps, topUpHighlights, faqs } = useMemo(
    () => ({
      heroMetrics: [
        {
          key: "activations",
          label: t("affiliate.hero.metric.conversion", "Activations"),
          value: "96",
          change: t("affiliate.hero.metric.conversionChange", "24 new teams this month"),
          valueClass: "text-white",
          icon: (
            <svg
              className="h-6 w-6 text-[#00BFFF]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18a6 6 0 100-12 6 6 0 000 12z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          key: "pending",
          label: t("affiliate.hero.metric.pending", "Pending rewards"),
          value: "$480",
          change: t("affiliate.hero.metric.pendingChange", "Withdrawals processed within 2 business days"),
          valueClass: "text-[#37FF8B]",
          icon: (
            <svg
              className="h-6 w-6 text-[#37FF8B]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7h16M4 12h16M4 17h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
      ],
      howItWorksSteps: [
        {
          key: "create",
          title: t("affiliate.howItWorks.create.title", "Create your link"),
          description: t(
            "affiliate.howItWorks.create.description",
            "Generate a unique referral link or promo code inside your Silence dashboard."
          ),
          accent: "#FF00B7",
          icon: (
            <svg
              className="h-12 w-12 text-[#FF00B7]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="10"
                width="36"
                height="28"
                rx="4"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M12 18H24M12 24H20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M30 22L36 30L30 30L30 22Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          key: "share",
          title: t("affiliate.howItWorks.share.title", "Share"),
          description: t(
            "affiliate.howItWorks.share.description",
            "Invite teams through email, LinkedIn, and communities. Track performance in real time."
          ),
          accent: "#00BFFF",
          icon: (
            <svg
              className="h-12 w-12 text-[#00BFFF]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 16C18 18.2091 16.2091 20 14 20C11.7909 20 10 18.2091 10 16C10 13.7909 11.7909 12 14 12C16.2091 12 18 13.7909 18 16Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M38 10L22 20"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M18 32C18 34.2091 16.2091 36 14 36C11.7909 36 10 34.2091 10 32C10 29.7909 11.7909 28 14 28C16.2091 28 18 29.7909 18 32Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M38 38L22 28"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M38 24C38 26.2091 36.2091 28 34 28C31.7909 28 30 26.2091 30 24C30 21.7909 31.7909 20 34 20C36.2091 20 38 21.7909 38 24Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          ),
        },
        {
          key: "earn",
          title: t("affiliate.howItWorks.earn.title", "Earn"),
          description: t(
            "affiliate.howItWorks.earn.description",
            "Receive commissions as soon as your referred customers activate their Silence protection."
          ),
          accent: "#37FF8B",
          icon: (
            <svg
              className="h-12 w-12 text-[#37FF8B]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 10C15.1634 10 8 17.1634 8 26C8 34.8366 15.1634 42 24 42C32.8366 42 40 34.8366 40 26"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M32 8H40V16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M40 8L24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
      ],
      topUpHighlights: [
        {
          key: "reward",
          title: t("affiliate.commission.reward.title", "10% reward on every balance top-up"),
          accent: "#FF00B7",
          accentGlow: "rgba(255,0,183,0.35)",
          description: t(
            "affiliate.commission.reward.description",
            "Whenever an invited team recharges their Silence wallet, 10% of the net amount is credited to you instantly."
          ),
          icon: (
            <svg
              className="h-10 w-10 text-[#FF00B7]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 6V42"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M16 14H28C31.3137 14 34 16.6863 34 20C34 23.3137 31.3137 26 28 26H20C16.6863 26 14 28.6863 14 32C14 35.3137 16.6863 38 20 38H34"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          key: "settlement",
          title: t("affiliate.commission.settlement.title", "Realtime ledger settlement"),
          accent: "#00BFFF",
          accentGlow: "rgba(0,191,255,0.32)",
          description: t(
            "affiliate.commission.settlement.description",
            "Rewards post to your partner balance within a minute after the transaction clears—no manual approval queue."
          ),
          icon: (
            <svg
              className="h-10 w-10 text-[#00BFFF]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20L24 10L38 20V36C38 37.1046 37.1046 38 36 38H12C10.8954 38 10 37.1046 10 36V20Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 28L22 32L30 24"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          key: "withdrawal",
          title: t("affiliate.commission.withdrawal.title", "Withdrawals processed in 2 business days"),
          accent: "#37FF8B",
          accentGlow: "rgba(55,255,139,0.28)",
          description: t(
            "affiliate.commission.withdrawal.description",
            "Submitted payout requests are reviewed automatically and land in your bank account within two business days."
          ),
          icon: (
            <svg
              className="h-10 w-10 text-[#37FF8B]"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="12"
                y="8"
                width="24"
                height="32"
                rx="4"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                d="M18 8V4M30 8V4"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M18 22H30"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M24 16V28"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
      ],
      faqs: [
        {
          question: t(
            "affiliate.faq.payments.question",
            "How do I receive payments?"
          ),
          answer: t(
            "affiliate.faq.payments.answer",
            "You can add your VISA or Mastercard account number in your profile. Payouts can be withdrawn directly to the specified card."
          ),
        },
        {
          question: t(
            "affiliate.faq.discounts.question",
            "Do referred customers receive any discounts?"
          ),
          answer: t(
            "affiliate.faq.discounts.answer",
            "No. Referred customers do not receive discounts on their purchases. Only the affiliate partner earns a commission from successful referrals."
          ),
        },
        {
          question: t(
            "affiliate.faq.statistics.question",
            "When will I see my referral statistics?"
          ),
          answer: t(
            "affiliate.faq.statistics.answer",
            "Once a user registers using your promo code or referral link, their email address will appear in your dashboard along with the corresponding reward from the invitation."
          ),
        },
      ],
    }),
    [t]
  );

  const faqAccentPalette = useMemo(
    () => [
      { color: "#FF00B7", glow: "rgba(255,0,183,0.35)" },
      { color: "#00BFFF", glow: "rgba(0,191,255,0.32)" },
      { color: "#37FF8B", glow: "rgba(55,255,139,0.28)" },
      { color: "#FFB800", glow: "rgba(255,184,0,0.35)" },
    ],
    []
  );

  const heroGlowPalette = useMemo(
    () => ({
      glowColor: "#FF00B7",
      secondaryGlowColor: "rgba(55,255,139,0.7)",
      topColor: "#FF00B7",
      leftColor: "#FF00B7",
      rightColor: "rgba(55,255,139,0.7)",
      bottomColor: "rgba(55,255,139,0.7)",
    }),
    []
  );

  const defaultGlowPalette = useMemo(
    () => ({
      glowColor: "#FF00B7",
      secondaryGlowColor: "rgba(32,140,255,0.45)",
      topColor: "#FF00B7",
      leftColor: "#FF00B7",
      rightColor: "rgba(32,140,255,0.45)",
      bottomColor: "rgba(32,140,255,0.45)",
    }),
    []
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-[#01091C] px-4 pb-24 sm:px-6 lg:px-8">
        <Header onOpenModal={openModal} />

        <div className="relative z-10 mt-32 flex w-full max-w-7xl flex-col gap-16">
          <section className="relative grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="hero-spotlight hero-spotlight--pink"
              aria-hidden="true"
            />
            <div
              className="hero-spotlight hero-spotlight--cyan"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center rounded-full border border-[rgba(255,0,183,0.35)] bg-[rgba(255,0,183,0.18)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 shadow-[0_12px_35px_rgba(255,0,183,0.22)]">
                {t("affiliate.hero.tagline", "Join Silence's Affiliate Program")}
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
                {t("affiliate.hero.title", "Turn invitations into income.")}
              </h1>
              <p className="max-w-xl text-lg text-white/70">
                {t("affiliate.hero.subtitle", "We offer 10% reward for all the spendings of the invited clients for 6 months.")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <GlowButton onClick={openModal}>
                  {t("affiliate.hero.cta", "Join partnership program")}
                </GlowButton>
              </div>
            </div>
          </section>

          <section className="relative">
            <EdgeGlowCard
              mode="static"
              spotlight
              {...heroGlowPalette}
              outerClassName="group relative z-10 rounded-[34px] p-[2px] edge-glow-card--hero"
              innerClassName="affiliate-card affiliate-card--hero rounded-[30px]"
            >
              <div className="flex flex-col gap-8 rounded-[26px] p-10 lg:flex-row lg:items-stretch">
                <div className="affiliate-subcard affiliate-subcard--hero flex w-full flex-col justify-between gap-6 rounded-2xl p-6 lg:max-w-[320px]">
                  <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                        {t("affiliate.hero.snapshot.label", "Live snapshot")}
                    </p>
                    <h2 className="mt-3 text-4xl font-bold text-white">
                      {t("affiliate.hero.earnings", "$2,940.00")}
                    </h2>
                    <p className="mt-2 text-base text-[#37FF8B]">
                      {t("affiliate.hero.growth", "+18% vs. last month")}
                    </p>
                    <p className="mt-4 text-sm text-white/60">
                      {t(
                        "affiliate.hero.snapshot.caption",
                        "Performance updates every 60 seconds, with confirmed payouts syncing instantly."
                      )}
                    </p>
                  </div>
                  <div className="grid gap-4">
                    {heroMetrics.map((metric) => (
                      <div key={metric.key} className="affiliate-metric-row flex items-start gap-3 rounded-2xl p-4">
                        <span className="affiliate-metric-icon flex h-11 w-11 items-center justify-center rounded-2xl bg-black/60">
                          {metric.icon}
                        </span>
                        <div className="space-y-1">
                          <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">
                            {metric.label}
                          </p>
                          <p className={`text-lg font-semibold ${metric.valueClass}`}>
                            {metric.value}
                          </p>
                          <p className="text-xs text-white/50">{metric.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="affiliate-graph flex-1 rounded-2xl p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                        {t("affiliate.hero.graph.label", "Earnings trend")}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {t("affiliate.hero.graph.title", "Referral revenue growth")}
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/50 px-3 py-1">
                        <span className="h-2 w-2 rounded-full bg-[#FF00B7]" />
                        {t("affiliate.hero.graph.window", "Last 30 days")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-8 h-64 w-full">
                    <svg
                      viewBox="0 0 480 240"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <defs>
                        <linearGradient id="affiliateGraphFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(255,0,183,0.24)" />
                          <stop offset="85%" stopColor="rgba(55,255,139,0)" />
                        </linearGradient>
                        <linearGradient id="affiliateGraphLine" x1="40" y1="200" x2="440" y2="40" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF00B7" />
                          <stop offset="0.5" stopColor="#8F59FF" />
                          <stop offset="1" stopColor="#37FF8B" />
                        </linearGradient>
                      </defs>
                      <g className="affiliate-graph-grid">
                        {[...Array(9)].map((_, i) => (
                          <line
                            key={`v-${i}`}
                            x1={40 + i * 48}
                            y1={40}
                            x2={40 + i * 48}
                            y2={200}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                          />
                        ))}
                        {[...Array(6)].map((_, i) => (
                          <line
                            key={`h-${i}`}
                            x1={40}
                            y1={60 + i * 28}
                            x2={440}
                            y2={60 + i * 28}
                            stroke="rgba(255,255,255,0.05)"
                            strokeWidth="1"
                          />
                        ))}
                      </g>
                      <path
                        d="M440 40C408 68 386 84 360 98C334 112 312 124 284 146C256 168 234 186 210 188C186 190 164 176 142 162C120 148 98 134 72 150C60 158 50 168 40 180V200H440V40Z"
                        fill="url(#affiliateGraphFill)"
                        opacity="0.65"
                      />
                      <path
                        d="M40 180C50 168 60 158 72 150C98 134 120 148 142 162C164 176 186 190 210 188C234 186 256 168 284 146C312 124 334 112 360 98C386 84 408 68 440 40"
                        stroke="url(#affiliateGraphLine)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="affiliate-graph-line"
                        pathLength="1"
                      />
                      {[40, 104, 168, 232, 296, 360, 440].map((cx, index) => (
                        <g key={cx}>
                          <circle
                            cx={cx}
                            cy={[180, 150, 162, 188, 146, 98, 40][index]}
                            r="6.5"
                            className="affiliate-graph-node"
                          />
                          <text
                            x={cx}
                            y={[180, 150, 162, 188, 146, 98, 40][index] - 20}
                            textAnchor="middle"
                            className="affiliate-graph-label"
                          >
                            {t(`affiliate.hero.graph.label${index}`, ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Today"][index])}
                          </text>
                        </g>
                      ))}
                      <circle cx="440" cy="40" r="9" className="affiliate-graph-pulse" />
                    </svg>
                  </div>
                </div>
              </div>
            </EdgeGlowCard>
          </section>

          <section className="relative space-y-8 overflow-visible pb-24">
            <div className="space-y-3 text-center pt-6 sm:pt-10 -mb-6 sm:-mb-10">
              <h2 className="text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
                {t("affiliate.howItWorks.title", "How it works")}
              </h2>
            </div>
            <div className="relative z-30 grid translate-y-10 gap-6 md:translate-y-16 md:grid-cols-3">
              {howItWorksSteps.map((step) => (
                <EdgeGlowCard
                  key={step.key}
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
                        background: `radial-gradient(90% 130% at 20% -10%, ${step.accent}3d 0%, transparent 70%)`,
                      }}
                    />
                    <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] bg-black/60 ring-2 ring-white/10 shadow-[0_12px_30px_rgba(5,12,32,0.6)]">
                      {step.icon}
                    </div>
                    <div className="relative space-y-3">
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/60">{step.description}</p>
                    </div>
                  </div>
                </EdgeGlowCard>
              ))}
            </div>
          </section>

          <CybersecurityLamp
            translationKey="affiliate.balanceRewards.lampTitle"
            fallbackTitle="Balance Rewards"
            containerClassName="!-z-10 -mt-40 -mb-36 min-h-[52vh]"
            headingClassName="mt-2 -mb-6 bg-gradient-to-br from-pink-400 to-purple-600 py-3 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-[3.25rem]"
          />

          <section className="relative z-10 -mt-8 flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-3">
              {topUpHighlights.map((item) => (
                <EdgeGlowCard
                  key={item.key}
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
                    <div className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(90% 130% at 20% -10%, ${item.accent}3d 0%, transparent 70%)` }} />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-[20px] bg-black/60 ring-2 ring-white/10 shadow-[0_12px_30px_rgba(5,12,32,0.6)]">
                      {item.icon}
                    </div>
                    <div className="relative space-y-3">
                      <p className="text-[0.7rem] font-medium uppercase tracking-[0.35em] text-white/45">
                        {t("affiliate.commission.highlight.label", "Why partners love it")}
                      </p>
                      <h4 className="text-lg font-semibold uppercase tracking-[0.25em] text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-white/65">{item.description}</p>
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
                <span className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#FF00B7]/45 blur-[140px]" />
                <span className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#00BFFF]/40 blur-[150px]" />
                <div className="relative flex flex-col gap-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-md space-y-3">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                      {t("affiliate.commission.sample.label", "Example Top-ups")}
                    </p>
                    <p className="text-sm text-white/60">
                      {t(
                        "affiliate.commission.sample.caption",
                        "Affiliate earnings scale with every recharge—no tier resets or product mapping."
                      )}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white">
                    <div className="group relative overflow-hidden rounded-full border border-white/15 px-5 py-2 shadow-[0_0_30px_rgba(55,255,139,0.3)]">
                      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#37FF8B]/50 via-transparent to-[#00331C]/70 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10">
                        {t("affiliate.commission.sample.topup", "$250 top-up → $25 reward")}
                      </span>
                    </div>
                    <div className="group relative overflow-hidden rounded-full border border-white/15 px-5 py-2 shadow-[0_0_30px_rgba(55,255,139,0.3)]">
                      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#37FF8B]/50 via-transparent to-[#00331C]/70 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="relative z-10">
                        {t("affiliate.commission.sample.topupHigher", "$1,000 top-up → $100 reward")}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-white/55 md:text-right">
                    {t(
                      "affiliate.commission.note",
                      "Commission is calculated from the net top-up amount after payment processing fees."
                    )}
                  </div>
                </div>
              </div>
            </EdgeGlowCard>
          </section>

          <section className="space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {t("affiliate.faq.title", "Questions & answers")}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {faqs.map((item, index) => {
                const accent = faqAccentPalette[index % faqAccentPalette.length];
                const isOpen = activeFaq === index;

                return (
                  <div key={item.question}>
                    <EdgeGlowCard
                      mode="static"
                      spotlight
                      {...defaultGlowPalette}
                      outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default"
                      innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
                    >
                      <div
                        className="relative overflow-hidden rounded-[22px] border border-white/12 p-6"
                        style={{
                          boxShadow: isOpen ? `0 24px 60px ${accent.glow}` : "0 18px 45px rgba(5,12,32,0.55)",
                          background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
                        }}
                      >
                        <div
                          className={`pointer-events-none absolute inset-0 rounded-[22px] transition-opacity duration-500 ${
                            isOpen ? "opacity-90" : "opacity-0"
                          } group-hover:opacity-100`}
                          style={{
                            background: `radial-gradient(90% 130% at 20% -10%, ${accent.color}33 0%, transparent 70%)`,
                          }}
                        />
                        <div className="relative z-10 flex flex-col gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveFaq(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${index}`}
                            className="flex w-full items-center justify-between gap-4 text-left text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                          >
                            <span className="text-base font-semibold sm:text-lg">{item.question}</span>
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white text-xl leading-none transition-transform duration-300 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            >
                              +
                            </span>
                          </button>
                          <div
                            id={`faq-panel-${index}`}
                            className={`overflow-hidden text-sm text-white/65 transition-all duration-500 ease-out ${
                              isOpen ? "opacity-100 pt-4" : "opacity-0"
                            }`}
                            style={{ maxHeight: isOpen ? "240px" : "0px" }}
                          >
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    </EdgeGlowCard>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Social CTA */}
          <section className="w-full mt-16">
            <FloatingText />
          </section>
        </div>
      </main>
      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </>
  );
};

export default AffiliateLanding;
