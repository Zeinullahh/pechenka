"use client";
import { useEffect, useState } from "react";

const ParallaxGlobe = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-globe fixed -top-12 left-0 w-full -z-10 pointer-events-none">
      <img
        // src="/globe_edge_optimized.svg"
        alt=""
        className="w-full h-auto scale-y-60 md:scale-y-85 lg:scale-y-100 globe-glow"
        style={{
          transform: `translateY(${scrollY * -0.35}px)`,
          imageRendering: 'crisp-edges',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      />
    </div>
  );
};

export default ParallaxGlobe;
