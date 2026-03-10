import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import EdgeGlowCard from './EdgeGlowCard';
import { ShieldAlert, Globe, Zap } from 'lucide-react';

const Insights = () => {
  const { t } = useLanguage();
  const items = [
    {
      icon: <ShieldAlert className="w-10 h-10 text-pink-500 mx-auto" />,
      stat: t("aiSocInsights.items.0.stat", "Every 39 seconds"),
      suffix: t("aiSocInsights.items.0.suffix", "a hacker attack occurs"),
      description: t("aiSocInsights.items.0.description", "Global cyberattacks are increasing every year, targeting businesses of all sizes."),
    },
    {
      icon: <Zap className="w-10 h-10 text-cyan-400 mx-auto" />,
      stat: t("aiSocInsights.items.1.stat", "20.5 million"),
      suffix: t("aiSocInsights.items.1.suffix", "DDoS attacks in Q1 2025"),
      description: t("aiSocInsights.items.1.description", "Massive traffic floods can take websites and APIs offline within minutes."),
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-500 mx-auto" />,
      stat: t("aiSocInsights.items.2.stat", "30,000"),
      suffix: t("aiSocInsights.items.2.suffix", "websites are hacked every day"),
      description: t("aiSocInsights.items.2.description", "From startups to enterprise platforms, web infrastructure remains a constant target."),
    },
  ];

  return (
    <div className="pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
          {t("aiSocInsights.title", "THE CYBERSECURITY PROBLEM TODAY")}
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium">
          {t("aiSocInsights.subtitle", "Modern cyber threats are growing faster than most companies can respond.")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((insight, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute -inset-1 bg-gradient-to-r rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500 ${index === 0 ? "from-pink-500 to-purple-600" :
                  index === 1 ? "from-cyan-500 to-blue-500" :
                    "from-purple-600 to-pink-500"
                  }`}
              />
              <EdgeGlowCard
                outerClassName={`relative z-10 rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent transition-all duration-500 hover:shadow-[0_0_30px_-10px_${index === 0 ? "rgba(236,72,153,0.3)" :
                  index === 1 ? "rgba(34,211,238,0.3)" :
                    "rgba(168,85,247,0.3)"
                  }]`}
                innerClassName="bg-black/20 backdrop-blur-md p-6 text-center rounded-2xl h-full flex flex-col justify-start border border-white/10 hover:bg-white/5 transition-colors duration-300"
                spotlight
                glowColor={index === 0 ? "#ec4899" : index === 1 ? "#22d3ee" : "#a855f7"}
              >
                <div className="mb-4 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transform transition-transform duration-500 group-hover:scale-110">
                  {insight.icon}
                </div>
                <h3 className="text-white mb-2 leading-tight">
                  <span className="block text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-1">
                    {insight.stat}
                  </span>
                  <span className="block text-sm font-medium text-slate-300">
                    {insight.suffix}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed font-light">
                  {insight.description}
                </p>
              </EdgeGlowCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
