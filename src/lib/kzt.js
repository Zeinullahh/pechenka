// KZT conversion helper. Update KZT_RATE here to change it site-wide.
export const KZT_RATE = 500; // 1 USD = 500 KZT

export const formatKzt = (usdAmount) => {
  const kzt = Math.round(usdAmount * KZT_RATE);
  return `${kzt.toLocaleString("ru-RU")} ₸`;
};
