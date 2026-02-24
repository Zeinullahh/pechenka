"use client";

import React from "react";
import Image from "next/image";

const GlassyBox3D = () => {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-visible" style={{ perspective: "1000px" }}>
      <style jsx>{`
        .cube-container {
          transform-style: preserve-3d;
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
        .face {
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(10, 10, 15, 0.3);
          border: 12px solid rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(1px);
          box-shadow: 
            inset 0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.02),
            0 0 30px rgba(0, 0, 0, 0.2);
          backface-visibility: visible;
          border-radius: 48px;
        }
        .logo-container {
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transform-style: preserve-3d;
            animation: counter-spin 20s linear infinite;
        }
        @keyframes counter-spin {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          100% { transform: rotateX(-360deg) rotateY(-360deg) rotateZ(-360deg); }
        }
      `}</style>
      
      {/* The rotating cube */}
      <div className="cube-container relative h-[250px] w-[250px]">
        {/* Front */}
        <div 
            className="face flex items-center justify-center" 
            style={{ transform: "translateZ(125px)" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-80 rounded-[48px]"></div>
        </div>
        
        {/* Back */}
        <div 
            className="face flex items-center justify-center" 
            style={{ transform: "rotateY(180deg) translateZ(125px)" }}
        >
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-80 rounded-[48px]"></div>
        </div>
        
        {/* Right */}
        <div 
            className="face flex items-center justify-center" 
            style={{ transform: "rotateY(90deg) translateZ(125px)" }}
        >
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-80 rounded-[48px]"></div>
        </div>
        
        {/* Left */}
        <div 
            className="face flex items-center justify-center" 
            style={{ transform: "rotateY(-90deg) translateZ(125px)" }}
        >
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-80 rounded-[48px]"></div>
        </div>
        
        {/* Top */}
        <div 
            className="face flex items-center justify-center" 
            style={{ transform: "rotateX(90deg) translateZ(125px)" }}
        >
             <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-80 rounded-[48px]"></div>
        </div>
        
        {/* Bottom */}
        <div 
            className="face flex items-center justify-center" 
            style={{ transform: "rotateX(-90deg) translateZ(125px)" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent opacity-80 rounded-[48px]"></div>
        </div>

        {/* Logo floating inside */}
        <div className="logo-container">
             <div className="relative h-40 w-40">
                <Image 
                    src="/logo-for-box.png" 
                    alt="SLNC Logo" 
                    fill 
                    className="object-contain"
                />
             </div>
        </div>
      </div>
    </div>
  );
};

export default GlassyBox3D;
