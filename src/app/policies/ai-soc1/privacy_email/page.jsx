"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import PolicySidebar from '@/components/PolicySidebar';
import BackToTopButton from '@/components/BackToTopButton';
import Modal from '@/components/Modal';
const PrivacyEmailPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const sections = [
    { id: 'about', title: '1. About This Privacy Policy' },
    { id: 'info-we-collect', title: '2. Information We Collect' },
    { id: 'how-we-use-info', title: '3. How We Use Your Information' },
    { id: 'third-party', title: '4. Third-Party Services and Data Sharing' },
    { id: 'data-storage', title: '5. Data Storage and Retention' },
    { id: 'user-rights', title: '6. User Rights and Control' },
    { id: 'security', title: '7. Security Measures' },
    { id: 'international-transfers', title: '8. International Data Transfers' },
    { id: 'cookies', title: '9. Cookies and Tracking Technologies' },
    { id: 'legal-basis', title: '10. Legal Basis for Processing' },
    { id: 'data-breach', title: '11. Data Breach Notification' },
    { id: 'webmail-notice', title: '12. Webmail Client / Email Protector Additional Notice' },
    { id: 'changes', title: '13. Changes to This Privacy Policy' },
    { id: 'contact', title: '14. Contact Information' },
    { id: 'governing-law', title: '15. Governing Law' },
  ];

  return (
    <div className="bg-black text-white">
      <Header onOpenModal={openModal} />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col md:flex-row gap-8">
        <div className="md:w-80">
          <PolicySidebar sections={sections} />
        </div>
        <main className="flex-grow">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy - Email Component</h1>
          <div className="space-y-8">
            <section id="about">
              <h2 className="text-2xl font-semibold mb-4">1. About This Privacy Policy</h2>
            <p className="mb-4"><strong>1.1 Agreement Scope:</strong> These Privacy Policy ("Terms") govern your access to and use of the Silence AI platform and services provided by Silence AI LLC ("Silence AI," "we," "us," or "our"). These Terms apply to you, the individual or entity accessing our services ("you" or "your"), and your employer or principal if you are acting on their behalf.</p>
            <p className="mb-4"><strong>1.2 Introduction:</strong> This Privacy Policy describes how Silence AI collects, uses, processes, and protects your personal information when you use our cybersecurity platform and services. This policy applies to all components of our platform: Global Shield, Email Protector, and Security Tester.</p>
            <p className="mb-4"><strong>1.3 Controller Information:</strong> Silence AI LLC serves as the data controller for personal data processed through our services. Our business registration location is Media City Free Zone, Al Messaned, Sharjah, UAE.</p>
            <p><strong>1.4 Component-Specific Processing:</strong> Each service component processes different types of data. You will only be subject to data processing activities for components you choose to activate and use.</p>
          </section>
            <section id="info-we-collect">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="mb-4"><strong>2.1 Account and Registration Information:</strong> Email address and account credentials, Company or organization information (if applicable), Billing and payment information, User profile and configuration settings.</p>
            <p className="mb-4"><strong>2.2 Service Usage Data:</strong> Global Shield: Web server logs, IP addresses, request URIs, timestamps, HTTP headers, user-agent strings, country codes, traffic patterns. Email Protector: Email metadata (sender, recipient, subject, timestamps), email content and attachments (only when authorized via third-party APIs such as Gmail API or Outlook API). Security Tester: Target website information, vulnerability scan results, penetration testing reports, code analysis data.</p>
            <p><strong>2.3 Analytics and Performance Data:</strong> Platform usage statistics, User activity patterns (for demonstrating service traction to customers), System performance metrics, Error logs and diagnostic information.</p>
          </section>
            <section id="how-we-use-info">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4"><strong>3.1 Service Delivery:</strong> Global Shield: Monitor and protect web applications, detect and prevent attacks, provide real-time traffic analysis. Email Protector: Scan emails for threats, provide secure webmail access, detect phishing and malware. Security Tester: Perform vulnerability assessments, generate security reports, analyze application code.</p>
            <p className="mb-4"><strong>3.2 AI-Based Processing:</strong> Analyze vulnerabilities using artificial intelligence, Process email content for threat detection, Generate comprehensive security reports, Store vulnerability information in our database for your exclusive access.</p>
            <p><strong>3.3 Platform Operations:</strong> Maintain and improve our services, Provide customer support, Process billing and payments, Monitor service performance and availability.</p>
            <p><strong>3.4 Analytics and Business Intelligence:</strong> Track user growth and platform adoption, Generate anonymized usage statistics, Improve service functionality and user experience.</p>
          </section>
            <section id="third-party">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services and Data Sharing</h2>
            <p className="mb-4"><strong>4.1 Email API Integration:</strong> With your explicit authorization, we access email data through: Google/Gmail API for Gmail-based accounts, Microsoft/Outlook API for Outlook-based accounts.</p>
            <p className="mb-4"><strong>4.2 Security Scanning Services:</strong> Microsoft Defender: We use Microsoft Defender antivirus to scan email attachments for malware. URLScan.io: We submit email links to URLScan.io for security analysis.</p>
            <p className="mb-4"><strong>4.3 URLScan.io Data Storage:</strong> When we submit links to URLScan.io: Scan results are stored in URLScan.io's database, No email account information, sender details, recipient information, email content, or attachments are shared, Only the URL itself is submitted for analysis.</p>
            <p><strong>4.4 Cloud Infrastructure:</strong> We may use cloud service providers for data storage and processing. All third-party processors are contractually bound to protect your data in accordance with this Privacy Policy.</p>
          </section>
            <section id="data-storage">
              <h2 className="text-2xl font-semibold mb-4">5. Data Storage and Retention</h2>
            <p className="mb-4"><strong>5.1 Vulnerability Reports:</strong> AI-based vulnerability scanner stores comprehensive test results, Users can store up to 200 vulnerability reports, Reports can be deleted immediately through our web interface, Upon deletion, vulnerability data is permanently removed from our database.</p>
            <p className="mb-4"><strong>5.2 Default Retention Periods:</strong> Web server logs: 90 days (modifiable by user), Email data: Retained until you delete the mailbox from our service or as required by law, User activity logs: Stored for analytics and service improvement purposes, Account information: Retained while your account is active.</p>
            <p><strong>5.3 Data Deletion:</strong> You can request deletion of your data at any time, Upon account termination, we will delete your personal data within a commercially reasonable period, Legal retention requirements may apply in certain circumstances.</p>
          </section>
            <section id="user-rights">
              <h2 className="text-2xl font-semibold mb-4">6. User Rights and Control</h2>
            <p className="mb-4"><strong>6.1 Your Data Rights:</strong> You have the right to: Access your personal data, Rectify inaccurate information, Request deletion of your data, Restrict processing activities, Data portability where applicable, Object to certain processing activities.</p>
            <p><strong>6.2 User Responsibilities:</strong> You are solely responsible for: Ensuring you have authorization for all vulnerability testing activities, Any unauthorized penetration testing conducted through our tools, Maintaining the security of your account credentials, Compliance with applicable laws when using our services.</p>
          </section>
            <section id="security">
              <h2 className="text-2xl font-semibold mb-4">7. Security Measures</h2>
            <p className="mb-4"><strong>7.1 Technical Safeguards:</strong> TLS encryption for data in transit, Encryption of stored data where feasible, Role-based access control (RBAC), Multi-factor authentication (MFA) for administrative access, Centralized secrets management, Comprehensive logging for security purposes.</p>
            <p><strong>7.2 Organizational Measures:</strong> Regular security assessments, Employee training and access controls, Incident response procedures, Backup and recovery systems, Vulnerability management processes.</p>
          </section>
            <section id="international-transfers">
              <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p className="mb-4"><strong>8.1 Global Operations:</strong> We operate data centers worldwide. When personal data is transferred across borders, we: Rely on legally permitted transfer mechanisms, Implement appropriate safeguards as required by law, Use TLS encryption for all data transfers, Ensure compliance with applicable data protection regulations.</p>
            <p><strong>8.2 User Responsibilities:</strong> You remain responsible for any local authorizations or restrictions required for data transfers you initiate through our services.</p>
          </section>
            <section id="cookies">
              <h2 className="text-2xl font-semibold mb-4">9. Cookies and Tracking Technologies</h2>
            <p>Our use of cookies is governed by our separate Cookie Policy, available at https://silenceai.net/policies/cookies/. We primarily use technical cookies necessary for platform functionality.</p>
          </section>
            <section id="legal-basis">
              <h2 className="text-2xl font-semibold mb-4">10. Legal Basis for Processing</h2>
            <p>We process your personal data based on: Contract performance: To provide the services you have requested, Legitimate interests: For service improvement, security, and analytics, Consent: Where explicitly provided for specific processing activities, Legal obligations: To comply with applicable laws and regulations.</p>
          </section>
            <section id="data-breach">
              <h2 className="text-2xl font-semibold mb-4">11. Data Breach Notification</h2>
            <p>In the event of a confirmed personal data breach affecting your information, we will: Notify you without undue delay, Provide available technical details, Offer reasonable assistance to help you assess and comply with your obligations, Report to relevant authorities as required by law.</p>
          </section>
            <section id="webmail-notice">
              <h2 className="text-2xl font-semibold mb-4">12. Webmail Client / Email Protector Additional Notice</h2>
              <p>The Email Protector service includes a secure webmail client that classifies messages by security risk category (such as Secure, Possibly Spoofed, Spam, Dangerous Link, Virus Detected, Possibly Phishing). Emails are scanned and analyzed solely for security purposes, including anti-phishing, malware and threat detection.</p>
              <p>Email content may be accessible to the organization administrator that created or manages the user account within the Centralized Management Console (CMC). Silence AI does not access or view email content except as required to provide the security-scanning functionality or where legally required.</p>
            </section>
            <section id="changes">
              <h2 className="text-2xl font-semibold mb-4">13. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be communicated through: Email notification to registered users, Platform notifications, Updates posted on our website. Continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.</p>
          </section>
            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p className="mb-4"><strong>14.1 Data Protection Inquiries:</strong> For questions about this Privacy Policy, data processing, or to exercise your rights, contact us at: Silence AI LLC, Email: info@silenceai.net, Website: https://silenceai.net, Address: Media City Free Zone, Al Messaned, Sharjah, UAE.</p>
            <p><strong>14.2 Data Subject Requests:</strong> To make a data subject request (access, rectification, deletion, etc.), please contact us using the information above. We will respond to your request within the timeframes required by applicable law.</p>
          </section>
            <section id="governing-law">
              <h2 className="text-2xl font-semibold mb-4">15. Governing Law</h2>
            <p>This Privacy Policy is governed by the laws of the United Arab Emirates. Any disputes relating to privacy matters will be subject to the jurisdiction of the courts located in Sharjah, United Arab Emirates.</p>
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

export default PrivacyEmailPolicy;
