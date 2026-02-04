"use client";

export const AVAILABLE_LANGUAGES = [
  { code: "en", label: "EN", name: "English", nativeName: "English", flag: "GB", popular: true },
  { code: "ja", label: "JA", name: "Japanese", nativeName: "日本語", flag: "JP" },
  { code: "zh", label: "ZH", name: "Chinese", nativeName: "中文", flag: "CN", popular: true },
  { code: "ko", label: "KO", name: "Korean", nativeName: "한국어", flag: "KR" },
  { code: "fr", label: "FR", name: "French", nativeName: "Français", flag: "FR", popular: true },
  { code: "de", label: "DE", name: "German", nativeName: "Deutsch", flag: "DE", popular: true },
  { code: "ru", label: "RU", name: "Russian", nativeName: "Русский", flag: "RU", popular: true },
  { code: "is", label: "IS", name: "Icelandic", nativeName: "Íslenska", flag: "IS" },
  { code: "tr", label: "TR", name: "Turkish", nativeName: "Türkçe", flag: "TR" },
  { code: "pl", label: "PL", name: "Polish", nativeName: "Polski", flag: "PL" },
  { code: "vi", label: "VI", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "VN" },
];

export const POPULAR_LANGUAGE_CODES = AVAILABLE_LANGUAGES.filter((lang) => lang.popular).map(
  (lang) => lang.code
);
