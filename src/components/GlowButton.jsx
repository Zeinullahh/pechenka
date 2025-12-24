"use client";

import React from "react";
import clsx from "clsx";

const GlowButton = ({
  children,
  glowColor = "#FF00B7",
  className = "",
  innerClassName = "",
  ...props
}) => {
  const handleGlowMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleGlowMouseMove}
      className={clsx(
        "group relative inline-flex rounded-full p-[1.5px] overflow-hidden card-glow cursor-pointer",
        className
      )}
      style={{ "--glow-color": glowColor }}
      {...props}
    >
      <div
        className={clsx(
          "relative z-10 flex items-center justify-center whitespace-nowrap rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-colors hover:bg-gray-200",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowButton;