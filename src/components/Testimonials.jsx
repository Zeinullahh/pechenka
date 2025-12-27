import React from "react";
import EdgeGlowCard from "./EdgeGlowCard";

const Testimonials = () => {
  const defaultGlowPalette = {
    glowColor: "#FF00B7",
    secondaryGlowColor: "rgba(32,140,255,0.45)",
    topColor: "#FF00B7",
    leftColor: "#FF00B7",
    rightColor: "rgba(32,140,255,0.45)",
    bottomColor: "rgba(32,140,255,0.45)",
  };

  return (
    <section className="relative space-y-8 text-center">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Testimonials
        </h2>
      </div>
      <div className="flex overflow-x-auto gap-6 py-4 justify-center">
        {[1, 2, 3].map((i) => (
          <EdgeGlowCard
            key={i}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default flex-shrink-0"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative w-80 rounded-[22px] border border-white/12 p-6"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
              }}
            >
              <img
                src={`/testimonials/client${i}.jpg`}
                alt={`Client ${i}`}
                className="w-16 h-16 rounded-full mx-auto relative z-10"
                loading="lazy"
              />
              <div className="mt-4 flex items-center justify-center relative z-10">
                <span className="text-yellow-400">★★★★★</span>
                <span className="ml-2 text-white/80">4.{8 + (i % 2)}</span>
              </div>
              <p className="mt-3 text-white/65 relative z-10">
                "Excellent results and reliable team — delivered on time."
              </p>
            </div>
          </EdgeGlowCard>
        ))}

        {[1, 2].map((i) => (
          <EdgeGlowCard
            key={`v${i}`}
            mode="static"
            spotlight
            {...defaultGlowPalette}
            outerClassName="group relative z-10 rounded-[30px] p-[2px] edge-glow-card--default flex-shrink-0"
            innerClassName="affiliate-card affiliate-card--default rounded-[26px]"
          >
            <div
              className="relative w-80 h-64 rounded-[22px] border border-white/12 p-6 flex items-center justify-center"
              style={{
                boxShadow: "0 18px 45px rgba(5,12,32,0.55)",
                background: "linear-gradient(150deg, rgba(2,5,12,0.97), rgba(0,1,4,0.98))",
              }}
              aria-label="Video testimonial placeholder"
            >
              <div className="w-full h-44 bg-black/40 rounded flex items-center justify-center text-white relative z-10">
                🎥 Video Testimonial
              </div>
            </div>
          </EdgeGlowCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;