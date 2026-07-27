import EnPage from "@/app/policies/ai-soc1/privacy/page.jsx";
import RuPage from "@/components/policies/ru/ai-soc1/Privacy.jsx";

export default async function LocalizedPage({ params }) {
  const { locale } = await params;
  return locale === "ru" ? <RuPage /> : <EnPage />;
}
