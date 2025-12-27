'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import RootFooter from "@/components/RootFooter";
import ParallaxGlobe from "@/components/ParallaxGlobe";
import LoadingSpinner from "@/components/LoadingSpinner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import CookieConsent from "@/components/CookieConsent";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const isPolicyPage = pathname.startsWith('/policies');
  const isAffiliatePage = pathname.startsWith('/affiliate');
  const isDeveloperServicesPage = pathname.startsWith('/developer-services');

  // Handle page navigation loading
  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);
    const handleRouteChangeError = () => setIsLoading(false);

    // Listen to route changes
    window.addEventListener('beforeunload', handleRouteChangeStart);
    
    // Simulate route changes for logo clicks and internal links
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        // Don't show loading for anchor links (table of contents)
        const isAnchorLink = target.href.includes('#') && 
                            target.href.replace(/#.*$/, '') === window.location.href.replace(/#.*$/, '');
        if (!isAnchorLink) {
          setIsLoading(true);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('beforeunload', handleRouteChangeStart);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Auto-hide loading after 500ms (fallback)
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <LanguageProvider>
      <LoadingSpinner isLoading={isLoading} />
      {!isPolicyPage && !isAffiliatePage && !isDeveloperServicesPage && <ParallaxGlobe />}
      <div className={!isPolicyPage ? "default-content-wrapper pt-20" : "default-content-wrapper"}>
        {children}
      </div>
      <div className={isPolicyPage ? "bg-black" : "relative w-full"}>
        {!isPolicyPage && !isAffiliatePage && !isDeveloperServicesPage && (
          <div className="absolute inset-0 -z-10 layout-background">
            <img
              src="/moonrise.webp"
              alt="Moonrise"
              className="w-full h-full object-cover object-top layout-background-image"
            />
          </div>
        )}
        {pathname === '/' ? <RootFooter /> : !isAffiliatePage && !isDeveloperServicesPage && <Footer />}
      </div>
      <CookieConsent />
    </LanguageProvider>
  );
}
