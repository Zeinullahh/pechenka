"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation"; // Updated import
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import GlowButton from "./GlowButton";
import LanguageSelector from "./LanguageSelector";
import ComingSoonModal from "./ComingSoonModal";
import CountrySelectModal from "./CountrySelectModal";
import EmailSecurityModal from "./EmailSecurityModal";
import { useLanguage } from "@/contexts/LanguageContext";

const SCROLL_THRESHOLD = 10;
const DESKTOP_WIDTH = 1130;

const Header = ({ onOpenModal, hideCta = false }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  const isSupremePage = pathname === "/supreme" || pathname === "/supreme/";
  const isAffiliatePage = pathname === "/affiliate" || pathname === "/affiliate/";
  const isPolicyPage = pathname?.startsWith("/policies");
  const [isCondensed, setIsCondensed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [countrySelectOpen, setCountrySelectOpen] = useState(false);
  const [emailSecurityOpen, setEmailSecurityOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    if (pathname === "/") {
      // On home page, open the modal
      if (onOpenModal) {
        onOpenModal();
      }
    } else {
      // On other pages, try to scroll to contact form
      scrollToContact();
    }
  };

  const handleAffiliateLogin = () => {
    window.location.href = "https://partners.silenceai.net";
  };

  const handleContactLink = (e) => {
    <Link
      href="/#contact-form"
      onClick={handleContactLink}
      className="text-sm font-semibold text-white/80 transition hover:text-white"
    >
      {t("header.cta.contact", "Contact")}
    </Link>
    if (pathname === "/") {
      e.preventDefault();
      if (onOpenModal) {
        onOpenModal();
      }
    }
  };

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

  const toggleMobileMenu = () =>
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) setOpenMobileDropdown(null);
      return next;
    });

  const widthTarget = "100%";

  const condensedShift = isCondensed && isDesktop ? 24 : 0;

  const systemsItems = [
    { key: "ai-soc", label: t("header.nav.systemsAiSoc", "AI-SOC"), href: "/ai-soc" },
    { key: "supreme", label: t("header.nav.systemsSupreme", "Supreme"), href: "/supreme" },
  ];

  const instructionsItems = [
    { key: "instructions-ai-soc", label: t("header.nav.instructionsAiSoc", "AI-SOC"), href: "/instructions/ai-soc" },
    { key: "instructions-supreme", label: t("header.nav.instructionsSupreme", "Supreme"), href: "/instructions/supreme" },
  ];

  const navItems = [
    { key: "affiliate", label: t("header.nav.affiliate", "Affiliate Program"), href: "/affiliate" },
    { key: "mail", label: t("header.nav.mail", "Mail"), onClick: () => setEmailSecurityOpen(true) },
    { key: "systems", label: t("header.nav.systems", "Systems"), children: systemsItems },
    { key: "instructions", label: t("header.nav.instructions", "Instructions"), children: instructionsItems },
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
              className="absolute inset-0 px-6 pt-24 pb-16 overflow-hidden"
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              exit={{ y: -80 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="mx-auto flex w-full max-w-sm flex-col space-y-6 text-lg">
                {navItems.map((item) => {
                  if (item.children) {
                    const expanded = openMobileDropdown === item.key;
                    return (
                      <div key={item.key} className="border-b border-white/20 pb-2 text-white">
                        <button
                          type="button"
                          className="flex w-full items-center justify-between py-2 text-left"
                          onClick={() => setOpenMobileDropdown(expanded ? null : item.key)}
                          aria-expanded={expanded}
                        >
                          <span>{item.label}</span>
                          <svg
                            className={clsx("h-4 w-4 transition", expanded && "rotate-180")}
                            viewBox="0 0 12 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M10.59 0.589966L6 5.16997L1.41 0.589966L0 1.99997L6 7.99997L12 1.99997L10.59 0.589966Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded && (
                            <motion.div
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="mt-2 space-y-2 pl-2"
                            >
                              {item.children.map((child) => {
                                if (child.href) {
                                  return (
                                    <Link
                                      key={child.key}
                                      href={child.href}
                                      className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                                      onClick={() => {
                                        setOpenMobileDropdown(null);
                                        setIsMobileMenuOpen(false);
                                      }}
                                    >
                                      {child.label}
                                    </Link>
                                  );
                                }

                                return (
                                  <button
                                    key={child.key}
                                    type="button"
                                    className="block w-full rounded-lg px-3 py-2 text-left text-white/60 cursor-default"
                                    onClick={(event) => event.preventDefault()}
                                    aria-disabled
                                  >
                                    {child.label}
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return item.href ? (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="nav-link border-b border-white/20 py-2 text-white"
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
                        if (item.onClick) item.onClick();
                        else if (item.opensModal) onOpenModal?.();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-4 flex flex-col gap-4 w-full items-center">
                  {!isPolicyPage && <LanguageSelector align="left" />}
                  {!hideCta && isMainPage && (
                    <GlowButton
                      onClick={() => {
                        onOpenModal?.();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {t("header.cta.contact", "Contact")}
                    </GlowButton>
                  )}
                  {!hideCta && !isMainPage && !isPolicyPage && (
                    <GlowButton
                      onClick={() => {
                        if (isSupremePage) {
                          setComingSoonOpen(true);
                        } else if (isAffiliatePage) {
                          handleAffiliateLogin();
                        } else {
                          onOpenModal?.();
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {isSupremePage
                        ? "Get MAX"
                        : isAffiliatePage
                          ? t("header.login", "Login")
                          : pathname === "/ai-soc" || pathname === "/ai-soc/"
                            ? t("header.cta.get", "Get")
                            : t("header.cta.contact", "Contact")}
                    </GlowButton>
                  )}
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className="fixed left-0 top-2 z-50 w-full px-3 sm:px-4"
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
            className="flex items-center justify-between px-3 py-2 sm:px-7 sm:py-3 lg:px-9"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="flex shrink-0 items-center"
              animate={{ x: condensedShift }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="/logo.svg"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  priority
                  style={{ height: "auto", width: "clamp(78px, 24vw, 120px)", maxWidth: "120px" }}
                />
              </Link>
            </motion.div>

            <nav
              className={clsx(
                "relative items-center gap-8",
                isDesktop ? "flex" : "hidden"
              )}
            >
              {navItems.map((item) => {
                if (item.children) {
                  const expanded = openDesktopDropdown === item.key;
                  return (
                    <div
                      key={item.key}
                      className="relative"
                      onMouseEnter={() => setOpenDesktopDropdown(item.key)}
                      onMouseLeave={() => setOpenDesktopDropdown(null)}
                    >
                      <button
                        type="button"
                        className="nav-link inline-flex items-center gap-1 text-white bg-transparent appearance-none focus:outline-none"
                        aria-haspopup="true"
                        aria-expanded={expanded}
                        onClick={() => setOpenDesktopDropdown(expanded ? null : item.key)}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={clsx("h-4 w-4 transition", expanded && "rotate-180")}
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M10.59 0.589966L6 5.16997L1.41 0.589966L0 1.99997L6 7.99997L12 1.99997L10.59 0.589966Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="absolute left-0 mt-2 w-max min-w-[8rem] overflow-hidden rounded-xl border border-white/10 bg-black/85 p-2 shadow-2xl backdrop-blur-xl"
                          >
                            {item.children.map((child) => {
                              if (child.href) {
                                return (
                                  <Link
                                    key={child.key}
                                    href={child.href}
                                    className="block rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10 whitespace-nowrap"
                                    onClick={() => setOpenDesktopDropdown(null)}
                                  >
                                    {child.label}
                                  </Link>
                                );
                              }

                              return (
                                <span
                                  key={child.key}
                                  className="block rounded-lg px-3 py-2 text-sm text-white/60 whitespace-nowrap"
                                  aria-disabled
                                >
                                  {child.label}
                                </span>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return item.href ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="nav-link text-white bg-transparent appearance-none focus:outline-none"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    type="button"
                    className="nav-link text-white bg-transparent appearance-none focus:outline-none"
                    onClick={item.onClick || (item.opensModal ? onOpenModal : undefined)}
                  >
                    {item.label}
                  </button>
                );
              })}
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
                      ? { transform: "scale(0.85)", transformOrigin: "right center" }
                      : undefined
                  }
                >
                  {!isPolicyPage && <LanguageSelector align={isDesktop ? "right" : "center"} />}
                </div>
                {isDesktop && isMainPage && !hideCta && (
                  <GlowButton onClick={handleContactClick}>
                    {t("header.cta.contact", "Contact")}
                  </GlowButton>
                )}
                {/* Get button for /supreme - desktop only */}
                {isDesktop && isSupremePage && !hideCta && (
                  <GlowButton
                    onClick={() => {
                      setComingSoonOpen(true);
                    }}
                  >
                    Get MAX
                  </GlowButton>
                )}
                {isDesktop && !isMainPage && !isPolicyPage && !isSupremePage && !hideCta && (
                  <GlowButton onClick={isAffiliatePage ? handleAffiliateLogin : onOpenModal}>
                    {isAffiliatePage
                      ? t("header.login", "Login")
                      : pathname === "/ai-soc" || pathname === "/ai-soc/"
                        ? t("header.cta.get", "Get")
                        : t("header.cta.contact", "Contact")}
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
      <ComingSoonModal
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        title="Updates in Progress"
        message="We are currently updating Supreme. Please check back shortly."
      />
      <CountrySelectModal isOpen={countrySelectOpen} onClose={() => setCountrySelectOpen(false)} />
      <EmailSecurityModal isOpen={emailSecurityOpen} onClose={() => setEmailSecurityOpen(false)} />
    </>
  );
};

export default Header;