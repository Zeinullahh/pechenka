"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import PolicySidebar from "@/components/PolicySidebar";
import PolicyNotice from "@/components/PolicyNotice";
import BackToTopButton from "@/components/BackToTopButton";
import Modal from "@/components/Modal";
import { useLanguage } from "@/contexts/LanguageContext";

const AffiliateTermsOfUsePage = () => {
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
        id: "acceptance",
        title: t(
          "affiliate.termsUse.sections.acceptance.title",
          "1. Acceptance of Terms"
        ),
      },
      {
        id: "program",
        title: t(
          "affiliate.termsUse.sections.program.title",
          "2. Program Use"
        ),
      },
      {
        id: "accounts",
        title: t(
          "affiliate.termsUse.sections.accounts.title",
          "3. Accounts & Access"
        ),
      },
      {
        id: "marketing",
        title: t(
          "affiliate.termsUse.sections.marketing.title",
          "4. Marketing Practices"
        ),
      },
      {
        id: "ip",
        title: t(
          "affiliate.termsUse.sections.ip.title",
          "5. Brand Assets"
        ),
      },
      {
        id: "disclaimer",
        title: t(
          "affiliate.termsUse.sections.disclaimer.title",
          "6. Disclaimers"
        ),
      },
      {
        id: "liability",
        title: t(
          "affiliate.termsUse.sections.liability.title",
          "7. Limitation of Liability"
        ),
      },
      {
        id: "termination",
        title: t(
          "affiliate.termsUse.sections.termination.title",
          "8. Suspension or Termination"
        ),
      },
      {
        id: "law",
        title: t(
          "affiliate.termsUse.sections.law.title",
          "9. Governing Law"
        ),
      },
      {
        id: "changes",
        title: t(
          "affiliate.termsUse.sections.changes.title",
          "10. Changes & Contact"
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
                "affiliate.termsUse.notice",
                "This policy is available only in English"
              )}
            />

            <header className="mb-8 space-y-4">
              <h1 className="text-4xl font-semibold text-white">
                {t(
                  "affiliate.termsUse.title",
                  "Affiliate Program Terms of Use"
                )}
              </h1>
              <p className="text-base text-white">
                {t(
                  "affiliate.termsUse.intro",
                  "These Terms of Use govern access to and use of the Silence AI affiliate marketing pages, links, and partner tools."
                )}
              </p>
            </header>

            <div className="space-y-10">
              <section id="acceptance" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.acceptance.title",
                    "1. Acceptance of Terms"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.acceptance.body1",
                    "By accessing or using the affiliate program pages, you agree to these Terms of Use and any related policies posted on the site."
                  )}
                </p>
              </section>

              <section id="program" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.program.title",
                    "2. Program Use"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.program.body1",
                    "You may use affiliate links and materials only for lawful marketing of Silence AI services, in accordance with the affiliate program rules."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.program.body2",
                    "You must not interfere with tracking, manipulate referrals, or create misleading impressions about Silence AI."
                  )}
                </p>
              </section>

              <section id="accounts" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.accounts.title",
                    "3. Accounts & Access"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.accounts.body1",
                    "You are responsible for safeguarding your affiliate account credentials and for all activity that occurs under your account."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.accounts.body2",
                    "Notify us promptly of any unauthorized use or security incident involving your account."
                  )}
                </p>
              </section>

              <section id="marketing" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.marketing.title",
                    "4. Marketing Practices"
                  )}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white">
                  <li>
                    {t(
                      "affiliate.termsUse.sections.marketing.item1",
                      "Comply with applicable advertising, privacy, and anti-spam laws."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.termsUse.sections.marketing.item2",
                      "Disclose your affiliate relationship when required by law or platform rules."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.termsUse.sections.marketing.item3",
                      "Do not use deceptive claims, misleading pricing, or unauthorized brand materials."
                    )}
                  </li>
                </ul>
              </section>

              <section id="ip" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.ip.title",
                    "5. Brand Assets"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.ip.body1",
                    "Silence AI grants you a limited, non-exclusive, revocable license to use approved brand assets solely for participating in the affiliate program."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.ip.body2",
                    "All goodwill derived from use of the brand assets inures to Silence AI."
                  )}
                </p>
              </section>

              <section id="disclaimer" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.disclaimer.title",
                    "6. Disclaimers"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.disclaimer.body1",
                    "The affiliate program pages and tools are provided on an \"as is\" and \"as available\" basis without warranties of any kind."
                  )}
                </p>
              </section>

              <section id="liability" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.liability.title",
                    "7. Limitation of Liability"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.liability.body1",
                    "To the maximum extent permitted by law, Silence AI is not liable for indirect, incidental, or consequential damages arising out of or related to the affiliate program."
                  )}
                </p>
              </section>

              <section id="termination" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.termination.title",
                    "8. Suspension or Termination"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.termination.body1",
                    "We may suspend or terminate access to the affiliate program at any time if we believe you have violated these Terms of Use or applicable law."
                  )}
                </p>
              </section>

              <section id="law" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.law.title",
                    "9. Governing Law"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.law.body1",
                    "These Terms of Use are governed by the laws of the jurisdiction where Silence AI LLC is established, without regard to conflict of law rules."
                  )}
                </p>
              </section>

              <section id="changes" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsUse.sections.changes.title",
                    "10. Changes & Contact"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.changes.body1",
                    "We may update these Terms of Use from time to time. Updates take effect when posted on this page."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsUse.sections.changes.body2",
                    "Questions about these Terms of Use can be sent to info@silenceai.net."
                  )}
                </p>
              </section>
            </div>

            <div className="mt-6 text-sm text-white/60">
              {t(
                "affiliate.termsUse.meta.lastUpdated",
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

export default AffiliateTermsOfUsePage;
