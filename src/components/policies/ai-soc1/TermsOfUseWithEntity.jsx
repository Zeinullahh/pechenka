"use client";

import React, { useState } from "react";
import TermsOfUseEn from "./TermsOfUseEn";
import RuPage from "@/components/policies/ru/ai-soc1/TermsOfUse";
import LegalEntitySelector from "./LegalEntitySelector";
import KazakhstanEntityDetails from "./KazakhstanEntityDetails";

const DEFAULT_ENTITY = "UAE";

const TermsOfUseWithEntity = ({ locale }) => {
  const [entity, setEntity] = useState(locale === "ru" ? "KZ" : DEFAULT_ENTITY);
  const selectorLabel = locale === "ru" ? "Юридическое лицо:" : "Contracting entity:";

  const selector = (
    <LegalEntitySelector
      entity={entity}
      onEntityChange={setEntity}
      label={selectorLabel}
    />
  );

  if (entity === "KZ") {
    return (
      <RuPage
        selector={
          <>
            {selector}
            <KazakhstanEntityDetails />
          </>
        }
      />
    );
  }

  return <TermsOfUseEn selector={selector} />;
};

export default TermsOfUseWithEntity;
