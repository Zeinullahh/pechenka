"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import GlowButton from "@/components/GlowButton";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const SCROLL_THRESHOLD = 10;
const DESKTOP_WIDTH = 1130;

const AffiliateHeader = ({ onOpenModal }) => {
  const [isCondensed, setIsCondensed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_WIDTH);
    };

    const handleScroll = () => {
      setIsCondensed(window.scrollY > SCROLL_THRESHOLD);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLoginClick = () => {
    onOpenModal?.();
    setIsMobileMenuOpen(false);
  };

  const widthTarget = "100%";

  const condensedShift = isCondensed ? (isDesktop ? 24 : 16) : 0;

  const navItems = [
    { key: "mail", label: t("header.nav.mail", "Mail"), opensModal: true },
    {
      key: "affiliate",
      label: t("header.nav.affiliate", "Affiliate program"),
      href: "/affiliate",
      isActive: true,
    },
    {
      key: "instructions",
      label: t("header.nav.instructions", "Instructions"),
      opensModal: true,
    },
    {
      key: "developer-services",
      label: t("header.nav.developerServices", "Developer Services"),
      href: "/developer-services",
    },
  ];

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              className="absolute inset-0 px-6 pt-24 pb-16"
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              exit={{ y: -80 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mx-auto flex max-w-sm flex-col space-y-6 text-lg">
                {navItems.map((item) =>
                  item.href ? (
                    <Link
                      key={item.key}
                      href={item.href}
                      className={clsx(
                        "nav-link border-b border-white/20 py-2 text-white",
                        item.isActive && "border-b-2 border-white pb-1"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.key}
                      type="button"
                      className="nav-link border-b border-white/20 py-2 text-white text-left bg-transparent appearance-none focus:outline-none"
                      onClick={() => {
                        onOpenModal?.();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  )
                )}
                <div className="pt-4 flex flex-col gap-4">
                  <LanguageSelector align="left" />
                  <GlowButton onClick={handleLoginClick} className="w-full">
                    {t("header.login", "Login")}
                  </GlowButton>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className="fixed left-0 top-2 z-50 w-full px-3"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.div
          className="mx-auto w-full max-w-7xl rounded-full border border-transparent transition-colors"
          animate={{
            width: widthTarget,
            borderRadius: 9999,
            backgroundColor: isCondensed ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
            borderColor: isCondensed ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0)",
            backdropFilter: isCondensed ? "blur(16px)" : "blur(0px)",
          }}
          transition={{
            width: { duration: 0.3, ease: "easeOut" },
            borderRadius: { duration: 0.3, ease: "easeOut" },
            backgroundColor: { duration: 0.3, ease: "easeOut" },
            borderColor: { duration: 0.3, ease: "easeOut" },
            backdropFilter: { duration: 0.3, ease: "easeOut" },
          }}
          style={{ minWidth: isDesktop || isCondensed ? undefined : "100%" }}
        >
          <motion.div
            className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center"
              animate={{ x: condensedShift }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  style={{ height: "auto", maxWidth: "120px" }}
                />
              </Link>
            </motion.div>

            <nav
              className={clsx(
                "relative items-center space-x-8",
                isDesktop ? "flex" : "hidden"
              )}
            >
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={clsx(
                      "nav-link text-white bg-transparent appearance-none focus:outline-none",
                      item.isActive && "border-b-2 border-white pb-1"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    type="button"
                    className="nav-link text-white bg-transparent appearance-none focus:outline-none"
                    onClick={onOpenModal}
                  >
                    {item.label}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <motion.div
                className="flex items-center gap-3"
                animate={{ x: -condensedShift }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div
                  className="flex-shrink-0"
                  style={
                    !isDesktop
                      ? { transform: "scale(0.9)", transformOrigin: "right center" }
                      : undefined
                  }
                >
                  <LanguageSelector align={isDesktop ? "right" : "left"} />
                </div>
                {isDesktop && (
                  <GlowButton onClick={handleLoginClick}>
                    {t("header.login", "Login")}
                  </GlowButton>
                )}
              </motion.div>

              <motion.button
                className={clsx("p-2 text-white", isDesktop ? "hidden" : "inline-flex")}
                onClick={toggleMobileMenu}
                animate={{ x: -condensedShift }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default AffiliateHeader;
