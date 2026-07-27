import EnPage from "@/app/policies/ai-soc1/terms_of_service/page.jsx";
import RuPage from "@/components/policies/ru/ai-soc1/TermsOfService.jsx";

export default async function LocalizedPage({ params }) {
  const { locale } = await params;
  return locale === "ru" ? <RuPage /> : <EnPage />;
}
