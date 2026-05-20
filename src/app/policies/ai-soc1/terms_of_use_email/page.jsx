"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import PolicySidebar from '@/components/PolicySidebar';
import BackToTopButton from '@/components/BackToTopButton';
import Modal from '@/components/Modal';
import PolicyNotice from '@/components/PolicyNotice';

const TermsOfUseEmail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Terms of Use (Email) - Silence AI';
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const sections = [
    { id: 'service-description', title: '1. Service Description' },
    { id: 'account-provisioning', title: '2. Account Provisioning' },
    { id: 'email-access-monitoring', title: '3. Email Access & Monitoring' },
    { id: 'security-classifications', title: '4. Security Classifications' },
    { id: 'acceptable-use', title: '5. Acceptable Use' },
    { id: 'data-handling', title: '6. Data Handling' },
    { id: 'no-support-obligation', title: '7. No Support Obligation' },
    { id: 'limitation-of-liability', title: '8. Limitation of Liability' },
  ];

  return (
    <div className="bg-black text-white">
      <Header onOpenModal={openModal} />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row gap-8">
        <div className="md:w-80">
          <PolicySidebar sections={sections} />
        </div>
        <main className="flex-grow">
          <PolicyNotice />
          <h1 className="text-4xl font-bold mb-8">Webmail Client Terms of Use</h1>
          <div className="space-y-8">
            <section id="service-description">
              <h2 className="text-2xl font-semibold mb-4">1. Service Description</h2>
              <p>The Webmail Client enables secure access to your email mailbox connected through authorized third-party providers (such as Gmail or Outlook). The system classifies and filters incoming email for security purposes, including detecting phishing, spoofing, spam, malware and suspicious links.</p>
              <p>During mailbox migration from existing Gmail or Outlook accounts, the system does not scan or classify email content. Once the migration is complete and you actively use the Webmail Client, all incoming emails are automatically scanned and classified for security purposes.</p>
            </section>
            <section id="account-provisioning">
              <h2 className="text-2xl font-semibold mb-4">2. Account Provisioning</h2>
              <p>Your access to the Webmail Client is created and controlled by your organization through the Silence AI Centralized Management Console (CMC). Your administrator may suspend or revoke your access at any time.</p>
            </section>
            <section id="email-access-monitoring">
              <h2 className="text-2xl font-semibold mb-4">3. Email Access & Monitoring</h2>
              <p>Your organization administrator may have access to view, monitor, and export email data within this system. Silence AI does not control or supervise your organization's access rights or internal policies. Any concerns about email privacy should be directed to your administrator.</p>
            </section>
            <section id="security-classifications">
              <h2 className="text-2xl font-semibold mb-4">4. Security Classifications</h2>
              <p>Email classifications (including Secure, Spam, Dangerous Link, Virus Detected, Possibly Spoofed, Possibly Phishing) are automated and provided on a best-effort basis. False positives and false negatives may occur. You remain responsible for reviewing and validating classification results.</p>
            </section>
            <section id="acceptable-use">
              <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
              <p>You agree to use the Webmail Client only for authorized business purposes and in accordance with your organization's internal policies. You may not use the system to send spam, harmful content, or conduct unauthorized activity.</p>
            </section>
            <section id="data-handling">
              <h2 className="text-2xl font-semibold mb-4">6. Data Handling</h2>
              <p>Email data is processed solely to provide secure email services. Access is governed by the platform Privacy Policy and your organization's administrator settings.</p>
            </section>
            <section id="no-support-obligation">
              <h2 className="text-2xl font-semibold mb-4">7. No Support Obligation</h2>
              <p>Support is available only via email as described in the main Terms of Service.</p>
            </section>
            <section id="limitation-of-liability">
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p>The system is provided on an "as-is" basis. Silence AI is not liable for security decisions or actions performed by your organization's administrator.</p>
            </section>
          </div>
          <p className="mt-8 text-sm text-gray-400">Last Updated: 22.09.2025</p>
        </main>
      </div>
      <BackToTopButton />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TermsOfUseEmail;
