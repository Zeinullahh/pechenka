"use client";

import React, { useState } from "react";
import Image from "next/image";
import EdgeGlowCard from "@/components/EdgeGlowCard";

/**
 * MediumArticleCard Component
 * Displays an article with image, title, description, and metadata
 * For static export compatibility, requires manual metadata or uses fallbacks
 */
export default function MediumArticleCard({ article, index = 0 }) {
  const glowColors = ["#8B5CF6", "#EC4899", "#3B82F6", "#10B981"];
  const glowColor = glowColors[index % glowColors.length];
  
  // Handle both string URLs and objects
  const articleData = typeof article === 'string' ? { url: article } : article;
  
  const [imageError, setImageError] = useState(false);
  
  // Extract data with fallbacks
  const title = articleData.title || "Featured Article";
  const description = articleData.description || "Click to read the full article from Silence.";
  const url = articleData.url;
  
  // For LinkedIn posts, try to construct OG image URL
  // LinkedIn OG images typically follow a pattern, but may not always work due to CORS
  const getImageUrl = () => {
    if (articleData.image) return articleData.image;
    
    // For LinkedIn posts, use a fallback gradient instead of trying to fetch
    if (url?.includes('linkedin.com')) {
      return null; // Will show gradient background
    }
    
    return "/solution/page1.png";
  };
  
  const image = getImageUrl();
  const date = articleData.date || "Recent";
  const readTime = articleData.readTime || "2 min read";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <EdgeGlowCard
        mode="static"
        glowColor={glowColor}
        secondaryGlowColor="rgba(255,255,255,0.2)"
        outerClassName="group h-full rounded-3xl p-[1px]"
        innerClassName="rounded-[23px] bg-black/40 h-full transition duration-300 hover:bg-black/60 relative overflow-hidden"
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Article Image */}
          <div className="relative w-full h-48 overflow-hidden rounded-t-[22px]">
            {!imageError && image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
            ) : (
              // Gradient background with LinkedIn icon for posts without images
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 flex items-center justify-center">
                <div className="text-center space-y-2">
                  {url?.includes('linkedin.com') && (
                    <svg className="w-16 h-16 mx-auto text-white/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  <p className="text-white/40 text-sm font-medium px-4">{title}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Article Content */}
          <div className="p-6 flex flex-col flex-grow gap-3">
            {/* Meta info */}
            <div className="flex items-center gap-3 text-xs text-white/60">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white line-clamp-2 group-hover:text-blue-300 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-white/70 line-clamp-3 flex-grow">
              {description}
            </p>

            {/* Read more link */}
            <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-blue-300 group-hover:text-white transition-colors">
              Read on LinkedIn
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </EdgeGlowCard>
    </a>
  );
}
