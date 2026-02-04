"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import PolicySidebar from "@/components/PolicySidebar";
import PolicyNotice from "@/components/PolicyNotice";
import BackToTopButton from "@/components/BackToTopButton";
import Modal from "@/components/Modal";
import { useLanguage } from "@/contexts/LanguageContext";

const AffiliateTermsOfServicePage = () => {
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
          "affiliate.termsAff.sections.overview.title",
          "1. Program Overview"
        ),
      },
      {
        id: "eligibility",
        title: t(
          "affiliate.termsAff.sections.eligibility.title",
          "2. Partner Eligibility"
        ),
      },
      {
        id: "commission",
        title: t(
          "affiliate.termsAff.sections.commission.title",
          "3. Commission Structure"
        ),
      },
      {
        id: "reward-posting",
        title: t(
          "affiliate.termsAff.sections.rewardPosting.title",
          "4. Reward Posting"
        ),
      },
      {
        id: "withdrawals",
        title: t(
          "affiliate.termsAff.sections.withdrawals.title",
          "5. Withdrawals"
        ),
      },
      {
        id: "product-scope",
        title: t(
          "affiliate.termsAff.sections.productScope.title",
          "6. Product Scope"
        ),
      },
      {
        id: "compliance",
        title: t(
          "affiliate.termsAff.sections.compliance.title",
          "7. Partner Conduct & Compliance"
        ),
      },
      {
        id: "changes",
        title: t(
          "affiliate.termsAff.sections.changes.title",
          "8. Changes & Contact"
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
                "affiliate.termsAff.notice",
                "This policy is available only in English"
              )}
            />

            <header className="mb-8 space-y-4">
              <h1 className="text-4xl font-semibold text-white">
                {t(
                  "affiliate.termsAff.title",
                  "Affiliate Terms of Service"
                )}
              </h1>
              <p className="text-base text-white">
                {t(
                  "affiliate.termsAff.intro",
                  "These terms describe how rewards are issued and paid to partners participating in the Silence AI affiliate program."
                )}
              </p>
            </header>

            <div className="space-y-10">
              <section id="overview" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.overview.title",
                    "1. Program Overview"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.overview.body1",
                    "Silence AI’s affiliate program provides partners with commission-based rewards for referring paying customers to the AI-SOC 1 product."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.overview.body2",
                    "By joining the program, you agree to these terms in addition to the general Silence AI Terms of Service."
                  )}
                </p>
              </section>

              <section id="eligibility" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.eligibility.title",
                    "2. Partner Eligibility"
                  )}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white">
                  <li>
                    {t(
                      "affiliate.termsAff.sections.eligibility.item1",
                      "You must maintain an active Silence AI affiliate account with accurate business and payment details."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.termsAff.sections.eligibility.item2",
                      "Referrals must complete registration through your issued link or promo code."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.termsAff.sections.eligibility.item3",
                      "Accounts found to be fraudulent, self-referred, or in breach of applicable law are not eligible for rewards."
                    )}
                  </li>
                </ul>
              </section>

              <section id="commission" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.commission.title",
                    "3. Commission Structure"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.commission.body1",
                    "You earn a 10% reward on every balance top-up completed by an account registered through your invitation."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.commission.body2",
                    "Commission is calculated from the net top-up amount after payment processing fees are deducted."
                  )}
                </p>
              </section>

              <section id="reward-posting" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.rewardPosting.title",
                    "4. Reward Posting"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.rewardPosting.body1",
                    "Rewards post to your partner balance within one minute after the transaction successfully clears. There is no manual approval queue."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.rewardPosting.body2",
                    "Notifications appear in your affiliate dashboard alongside the customer identifier and top-up amount."
                  )}
                </p>
              </section>

              <section id="withdrawals" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.withdrawals.title",
                    "5. Withdrawals"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.withdrawals.body1",
                    "Withdrawal requests are processed within two business days and paid out using the settlement method on file."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.withdrawals.body2",
                    "Minimum withdrawal thresholds and supported payout networks are published inside the affiliate dashboard."
                  )}
                </p>
              </section>

              <section id="product-scope" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.productScope.title",
                    "6. Product Scope"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.productScope.body1",
                    "Rewards are only provided for the AI-SOC 1 product. Other Silence AI services are excluded from the affiliate program unless explicitly stated otherwise in writing."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.productScope.body2",
                    "If additional products become eligible, Silence AI will publish an updated list inside these terms."
                  )}
                </p>
              </section>

              <section id="compliance" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.compliance.title",
                    "7. Partner Conduct & Compliance"
                  )}
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-white">
                  <li>
                    {t(
                      "affiliate.termsAff.sections.compliance.item1",
                      "Partners must represent Silence AI accurately and avoid misleading claims about features or pricing."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.termsAff.sections.compliance.item2",
                      "Marketing communications must comply with applicable anti-spam, privacy, and advertising regulations."
                    )}
                  </li>
                  <li>
                    {t(
                      "affiliate.termsAff.sections.compliance.item3",
                      "Silence AI may suspend or terminate accounts that violate these obligations or harm the brand."
                    )}
                  </li>
                </ul>
              </section>

              <section id="changes" className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">
                  {t(
                    "affiliate.termsAff.sections.changes.title",
                    "8. Changes & Contact"
                  )}
                </h2>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.changes.body1",
                    "Silence AI may update these affiliate terms to reflect changes in the program or applicable law. Updated versions take effect upon publication on this page."
                  )}
                </p>
                <p className="text-white">
                  {t(
                    "affiliate.termsAff.sections.changes.body2",
                    "Questions about the affiliate program can be sent to info@silenceai.net."
                  )}
                </p>
              </section>
            </div>

            <div className="mt-6 text-sm text-white/60">
              {t(
                "affiliate.termsAff.meta.lastUpdated",
                "Last updated: 10 November 2024"
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

export default AffiliateTermsOfServicePage;
