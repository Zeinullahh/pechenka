"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LocalizedCookiesRedirect({ params }) {
  const router = useRouter();

  useEffect(() => {
    params.then(({ locale }) =>
      router.replace(`/${locale}/policies/cookies/`)
    );
  }, [params, router]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <p>Redirecting...</p>
    </div>
  );
}
