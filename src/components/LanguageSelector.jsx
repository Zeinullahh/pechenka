"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { AVAILABLE_LANGUAGES, useLanguage } from "@/contexts/LanguageContext";
import * as Flags from "country-flag-icons/react/3x2";
import { useRouter, usePathname } from "@/i18n/navigation";

const LanguageSelector = ({ align = "right", onlyEnglish = false }) => {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef(null);

  const active = onlyEnglish
    ? AVAILABLE_LANGUAGES.find((lang) => lang.code === "en")
    : AVAILABLE_LANGUAGES.find((lang) => lang.code === language) ?? AVAILABLE_LANGUAGES[0];
  const ActiveFlag = Flags[active?.flag] ?? null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (onlyEnglish) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (code) => {
    setSearchTerm("");
    setLanguage(code);
    setIsOpen(false);
    // Navigate to the same page but with new locale
    router.replace(pathname, { locale: code });
  };

  const normalizedQuery = searchTerm.trim();

  const popularLanguages = useMemo(
    () => AVAILABLE_LANGUAGES.filter((lang) => lang.popular),
    []
  );

  const otherLanguages = useMemo(
    () => AVAILABLE_LANGUAGES.filter((lang) => !lang.popular),
    []
  );

  const filteredLanguages = useMemo(() => {
    if (!normalizedQuery) return AVAILABLE_LANGUAGES;
    const lowerQuery = normalizedQuery.toLocaleLowerCase();
    return AVAILABLE_LANGUAGES.filter((lang) =>
      [lang.name, lang.nativeName, lang.label]
        .filter(Boolean)
        .some((value) => value.toLocaleLowerCase().includes(lowerQuery))
    );
  }, [normalizedQuery]);

  const renderLanguageButton = (lang) => {
    const Flag = Flags[lang.flag] ?? null;
    const isActive = lang.code === active.code;

    return (
      <button
        key={lang.code}
        type="button"
        role="option"
        aria-selected={isActive}
        onClick={() => handleSelect(lang.code)}
        className={clsx(
          "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-white transition",
          isActive ? "bg-white/15 font-semibold" : "hover:bg-white/10"
        )}
      >
        <span className="h-4 w-6 overflow-hidden rounded-[6px] border border-white/20">
          {Flag ? (
            <Flag className="h-full w-full" />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-white/10 text-[10px] font-semibold uppercase">
              {lang.label}
            </span>
          )}
        </span>
        <span className="flex min-w-0 flex-1 flex-col text-left">
          <span className="truncate">{lang.name}</span>
          {lang.nativeName && (
            <span className="truncate text-xs text-white/60">{lang.nativeName}</span>
          )}
        </span>
        {isActive && (
          <svg
            className="h-4 w-4 text-[#FF00B7]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    );
  };

  return (
    <div className="relative z-[9999]" ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("languageSelector.triggerLabel", "Select language")}
      >
        <span className="h-4 w-6 overflow-hidden rounded-[6px] border border-white/20">
          {ActiveFlag ? (
            <ActiveFlag className="h-full w-full" />
          ) : (
            <span className="flex h-full w-full items-center justify-center bg-white/10 text-[10px] font-semibold uppercase">
              {active.label}
            </span>
          )}
        </span>
        <span>{active.label}</span>
        <svg
          className={clsx("h-3 w-3 text-white/70 transition-transform", isOpen && "rotate-180")}
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
      {isOpen && (
        <div
          className={clsx(
            "fixed z-[9999] mt-2 w-[90vw] max-w-[18rem] rounded-2xl border border-white/10 bg-black/85 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl",
            "left-1/2 -translate-x-1/2",
            "sm:absolute sm:w-auto sm:min-w-[18rem]",
            align === "center" && "sm:left-1/2 sm:-translate-x-1/2",
            align === "left" && "sm:left-0 sm:translate-x-0",
            align === "right" && "sm:left-auto sm:right-0 sm:translate-x-0"
          )}
          role="listbox"
          aria-label={t("languageSelector.menuLabel", "Choose language")}
        >
          <div className="mb-3">
            <label htmlFor="language-search" className="sr-only">
              {t("languageSelector.searchLabel", "Search languages")}
            </label>
            <div className="relative">
              <input
                id="language-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={t("languageSelector.searchPlaceholder", "Search by name or native language")}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                className="w-full rounded-xl border border-white/15 bg-black/55 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8.5 3a5.5 5.5 0 014.388 8.795l3.159 3.158a1 1 0 01-1.414 1.414l-3.158-3.159A5.5 5.5 0 118.5 3zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="max-h-80 space-y-3 overflow-y-auto pr-1">
            {normalizedQuery ? (
              filteredLanguages.length > 0 ? (
                <div>
                  <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                    {t("languageSelector.searchResults", "Search results")}
                  </p>
                  <div className="space-y-1.5">
                    {filteredLanguages.map((lang) => renderLanguageButton(lang))}
                  </div>
                </div>
              ) : (
                <p className="px-2 text-sm text-white/60">
                  {t("languageSelector.noMatches", "No languages match your search.")}
                </p>
              )
            ) : (
              <>
                <div>
                  <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                    {t("languageSelector.popular", "Popular")}
                  </p>
                    <div className="space-y-1.5">
                      {popularLanguages.map((lang) => renderLanguageButton(lang))}
                    </div>
                </div>
                <div>
                  <p className="mb-2 mt-3 px-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                    {t("languageSelector.allLanguages", "All languages")}
                  </p>
                  <div className="space-y-1.5">
                    {otherLanguages.map((lang) => renderLanguageButton(lang))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
