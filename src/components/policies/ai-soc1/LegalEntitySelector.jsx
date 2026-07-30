"use client";

import React from "react";

const ENTITIES = [
  { code: "UAE", label: "UAE" },
  { code: "KZ", label: "Kazakhstan" },
];

const LegalEntitySelector = ({ entity, onEntityChange, label = "Contracting entity:" }) => {
  return (
    <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
      <span className="text-sm text-gray-400">{label}</span>
      <div className="inline-flex rounded-full border border-white/15 bg-black/40 p-1">
        {ENTITIES.map((e) => (
          <button
            key={e.code}
            type="button"
            aria-pressed={entity === e.code}
            onClick={() => onEntityChange(e.code)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              entity === e.code
                ? "bg-white/15 text-white"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            {e.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LegalEntitySelector;
