"use client";

import { useState, useCallback } from "react";
import { toJpeg } from "html-to-image";
import { enqueue } from "@/lib/downloadQueue";

/**
 * Reusable hook for certificate download with queuing.
 *
 * @param {React.RefObject} certRef  – ref attached to the certificate DOM node
 * @param {string} filename          – download filename (without extension)
 * @param {object} [options]         – optional overrides for toJpeg
 * @returns {{ handleDownload, isGenerating }}
 */
export default function useCertificateDownload(certRef, filename, options = {}) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!certRef.current || isGenerating) return;

    setIsGenerating(true);
    try {
      const dataUrl = await enqueue(() =>
        toJpeg(certRef.current, {
          pixelRatio: 2,
          cacheBust: true,
          skipFonts: true,
          quality: 0.92,
          ...options,
        })
      );

      const link = document.createElement("a");
      link.download = `${filename}.jpg`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to generate certificate image:", err);
    } finally {
      setIsGenerating(false);
    }
  }, [certRef, filename, isGenerating, options]);

  return { handleDownload, isGenerating };
}
