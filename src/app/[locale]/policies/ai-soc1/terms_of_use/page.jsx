import TermsOfUseWithEntity from "@/components/policies/ai-soc1/TermsOfUseWithEntity";

export default async function LocalizedPage({ params }) {
  const { locale } = await params;
  return <TermsOfUseWithEntity locale={locale} />;
}
