import AiSocLanding from '@/components/AiSocLanding';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const path = `/${locale}/ai-soc`;

  return {
    title: 'AI-Powered Security Operations Center (AI-SOC) | Silence',
    description:
      'AI-SOC by Silence is an AI-powered security operations center for web and email threat detection, response automation, and managed protection.',
    keywords: [
      'AI-powered security operations center',
      'AI security operations center',
      'AI-SOC',
      'SOC automation',
      'web and email security',
      'Silence AI-SOC',
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: 'AI-Powered Security Operations Center (AI-SOC) | Silence',
      description:
        'AI-SOC by Silence is an AI-powered security operations center for web and email threat detection, response automation, and managed protection.',
      url: `https://silenceai.net${path}`,
      siteName: 'Silence',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI-Powered Security Operations Center (AI-SOC) | Silence',
      description:
        'AI-SOC by Silence is an AI-powered security operations center for web and email threat detection, response automation, and managed protection.',
    },
  };
}

export default function Page() {
  return <AiSocLanding />;
}
