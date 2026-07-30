"use client";

import React from "react";

const KazakhstanEntityDetails = () => {
  const details = [
    { label: "ИИК (номер счета)", value: "KZ8996503F0015440498KZT" },
    { label: "БИК Банка", value: "IRTYKZKA" },
    { label: "Наименование филиала", value: 'Филиал АО "ForteBank" в г. Астана' },
    { label: "КБе", value: "17" },
    { label: "БИН", value: "250840004804" },
    {
      label: "Адрес компании",
      value: "КАЗАХСТАН, АСТАНА обл, АСТАНА г, АЛМАТЫ мкр, ЖИЛОЙ МАССИВ АҚ-БҰЛАҚ-3 ПЕРЕУЛОК ТАСШОҚЫ ул, дом 3, кв 26",
    },
  ];

  return (
    <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Реквизиты юридического лица (Казахстан)
      </h3>
      <dl className="space-y-3">
        {details.map(({ label, value }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
            <dt className="text-sm font-medium text-gray-400 sm:w-48 sm:shrink-0">
              {label}
            </dt>
            <dd className="text-sm text-white">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default KazakhstanEntityDetails;
