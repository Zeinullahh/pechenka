"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import PolicySidebar from "@/components/PolicySidebar";
import PolicyNotice from "@/components/PolicyNotice";
import BackToTopButton from "@/components/BackToTopButton";
import Modal from "@/components/Modal";
import { useLanguage } from "@/contexts/LanguageContext";

const AffiliatePrivacyPolicyPage = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#000";
    return () => {
      document.body.style.backgroundColor = previousBackground;
    };
  }, []);

  const sections = useMemo(
    () => [
      {
        id: "overview",
        title: t(
          "affiliate.privacy.sections.overview.title",
          "1. Overview"
        ),
      },
      {
        id: "data-we-collect",
        title: t(
          "affiliate.privacy.sections.dataCollect.title",
          "2. Information We Collect"
        ),
      },
      {
        id: "how-we-use",
        title: t(
          "affiliate.privacy.sections.howUse.title",
          "3. How We Use Information"
        ),
      },
      {
        id: "cookies",
        title: t(
          "affiliate.privacy.sections.cookies.title",
          "4. Cookies & Tracking"
        ),
      },
      {
        id: "sharing",
        title: t(
          "affiliate.privacy.sections.sharing.title",
          "5. Sharing of Information"
        ),
      },
      {
        id: "retention",
        title: t(
          "affiliate.privacy.sections.retention.title",
          "6. Data Retention"
        ),
      },
      {
        id: "rights",
        title: t(
          "affiliate.privacy.sections.rights.title",
          "7. Your Rights"
        ),
      },
      {
        id: "international",
        title: t(
          "affiliate.privacy.sections.international.title",
          "8. International Transfers"
        ),
      },
      {
        id: "changes",
        title: t(
          "affiliate.privacy.sections.changes.title",
          "9. Changes & Contact"
        ),
      },
    ],
    [t]
  );

  return (
    <>
      <main className="flex min-h-screen flex-col bg-black text-white">
        <Header onOpenModal={openModal} />

        <div className="container mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-24 pt-32 sm:px-6 lg:flex-row lg:px-8">
          <div className="lg:w-80">
            <PolicySidebar sections={sections} />
          </div>
          <article className="flex-1">
            <PolicyNotice
              message={t(
                "affiliate.privacy.notice",
                "This policy is available only in English"
              )}
            />

            <header className="mb-8 space-y-4">
              <h1 className="text-4xl font-semibold text-white">
                {t(
                  "affiliate.privacy.title",
                  "Affiliate Marketing Privacy Policy"
                )}
              </h1>
              <p className="text-base text-white">
                {t(
                  "affiliate.privacy.intro",
                  "This policy explains how Silence AI LLC collects and uses information related to the affiliate marketing program and its associated pages."
                )}
              </p>
            </header>

            <div className="space-y-10">
              <section id="overview" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.overview.title",
                    "1. Overview"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.overview.body1",
                    "This Affiliate Marketing Privacy Policy applies to the affiliate program operated by Silence AI LLC (\"Silence AI\", \"we\", \"us\", or \"our\"). It covers information processed on affiliate program pages, referral links, and partner dashboards."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.overview.body2",
                    "If you use other Silence AI services, separate privacy policies may apply to those services."
                  )}
                </p>
              </section>

              <section id="data-we-collect" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.dataCollect.title",
                    "2. Information We Collect"
                  )}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white">
                  <li>
                    {t(
                      "affiliate.privacy.sections.dataCollect.item1",
                      "Referral and attribution data, such as referral links, promo codes, timestamps, and partner identifiers."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.dataCollect.item2",
                      "Device and usage data, including IP address, browser type, device identifiers, and pages viewed."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.dataCollect.item3",
                      "Contact information you provide to us, such as name, email address, and messages sent through forms or support channels."
                    )}
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.howUse.title",
                    "3. How We Use Information"
                  )}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white">
                  <li>
                    {t(
                      "affiliate.privacy.sections.howUse.item1",
                      "To attribute referrals, calculate commissions, and operate the affiliate program."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.howUse.item2",
                      "To prevent fraud, abuse, and unauthorized activity."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.howUse.item3",
                      "To analyze performance and improve affiliate pages and partner tools."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.howUse.item4",
                      "To respond to inquiries and provide support."
                    )}
                  </li>
                </ul>
              </section>

              <section id="cookies" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.cookies.title",
                    "4. Cookies & Tracking"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.cookies.body1",
                    "We use cookies and similar technologies to attribute referrals, measure conversions, and maintain program integrity."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.cookies.body2",
                    "You can control cookies through your browser settings. Disabling cookies may affect referral tracking or site functionality."
                  )}
                </p>
              </section>

              <section id="sharing" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.sharing.title",
                    "5. Sharing of Information"
                  )}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white">
                  <li>
                    {t(
                      "affiliate.privacy.sections.sharing.item1",
                      "With service providers that help us run the affiliate program (analytics, hosting, fraud prevention, and support)."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.sharing.item2",
                      "With affiliate partners as needed for reporting and attribution."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.privacy.sections.sharing.item3",
                      "With legal authorities when required by law or to protect our rights."
                    )}
                  </li>
                </ul>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.sharing.body1",
                    "We do not sell personal information."
                  )}
                </p>
              </section>

              <section id="retention" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.retention.title",
                    "6. Data Retention"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.retention.body1",
                    "We retain information only as long as needed to operate the affiliate program, comply with legal obligations, and resolve disputes."
                  )}
                </p>
              </section>

              <section id="rights" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.rights.title",
                    "7. Your Rights"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.rights.body1",
                    "Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.rights.body2",
                    "To exercise these rights, contact us at info@silenceai.net."
                  )}
                </p>
              </section>

              <section id="international" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.international.title",
                    "8. International Transfers"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.international.body1",
                    "If you access the affiliate program from outside the United States, your information may be transferred to and processed in the United States or other jurisdictions where our service providers operate."
                  )}
                </p>
              </section>

              <section id="changes" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.privacy.sections.changes.title",
                    "9. Changes & Contact"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.changes.body1",
                    "We may update this policy from time to time. Updates take effect when posted on this page."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.privacy.sections.changes.body2",
                    "Questions about this policy can be sent to info@silenceai.net."
                  )}
                </p>
              </section>
            </div>

            <div className="mt-6 text-sm text-white/60">
              {t(
                "affiliate.privacy.meta.lastUpdated",
                "Last updated: 20 May 2026"
              )}
            </div>
          </article>
        </div>
      </main>

      <BackToTopButton />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AffiliatePrivacyPolicyPage;
