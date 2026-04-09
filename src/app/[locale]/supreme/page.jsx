import SupremeLanding from '@/components/SupremeLanding';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const path = `/${locale}/supreme`;

  return {
    title: 'MCP-Based Security Scanner | Supreme by Silence',
    description:
      'Supreme by Silence is an MCP-based security scanner for codebases with full-repository scanning, multi-language coverage, and automated remediation workflows.',
    keywords: [
      'MCP based security scanner',
      'security scanner',
      'code security scanner',
      'MCP security scanner',
      'vulnerability scanner for code',
      'Supreme scanner',
    ],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: 'MCP-Based Security Scanner | Supreme by Silence',
      description:
        'Supreme by Silence is an MCP-based security scanner for codebases with full-repository scanning, multi-language coverage, and automated remediation workflows.',
      url: `https://silenceai.net${path}`,
      siteName: 'Silence',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'MCP-Based Security Scanner | Supreme by Silence',
      description:
        'Supreme by Silence is an MCP-based security scanner for codebases with full-repository scanning, multi-language coverage, and automated remediation workflows.',
    },
  };
}

export default function Page() {
  return <SupremeLanding />;
}
