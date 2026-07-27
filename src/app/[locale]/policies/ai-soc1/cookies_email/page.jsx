import EnPage from "@/app/policies/ai-soc1/cookies_email/page.jsx";
import RuPage from "@/components/policies/ru/ai-soc1/CookiesEmail.jsx";

export default async function LocalizedPage({ params }) {
  const { locale } = await params;
  return locale === "ru" ? <RuPage /> : <EnPage />;
}
