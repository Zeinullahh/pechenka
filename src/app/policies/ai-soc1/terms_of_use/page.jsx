"use client";
import React, { useState } from 'react';
import Header from '@/components/Header';
import PolicySidebar from '@/components/PolicySidebar';
import BackToTopButton from '@/components/BackToTopButton';
import Modal from '@/components/Modal';
import PolicyNotice from '@/components/PolicyNotice';

const TermsOfUse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const sections = [
    { id: 'about', title: '1. About These Terms' },
    { id: 'service-description', title: '2. Service Description and Pricing' },
    { id: 'sla', title: '3. Service Level Agreement and Availability' },
    { id: 'user-responsibilities', title: '4. User Responsibilities and Acceptable Use' },
    { id: 'data-processing', title: '5. Data Processing and Infrastructure' },
    { id: 'service-activation', title: '6. Service Activation and Free Trials' },
    { id: 'ip-rights', title: '7. Intellectual Property Rights' },
    { id: 'privacy', title: '8. Privacy and Data Protection' },
    { id: 'email-access', title: '8.3 Staff Access to Client Emails' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'updates', title: '10. Version Updates and Support' },
    { id: 'termination', title: '11. Termination' },
    { id: 'indemnification', title: '12. Indemnification' },
    { id: 'governing-law', title: '13. Governing Law and Disputes' },
    { id: 'changes', title: '14. Changes to Terms' },
    { id: 'contact', title: '15. Contact Information' },
    { id: 'misc', title: '16. Miscellaneous' },
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
          <h1 className="text-4xl font-bold mb-2">AI-SOC 1 Policy</h1>
          <h2 className="text-2xl text-gray-400 mb-8">Terms of Use</h2>
          <div className="space-y-8">
            <section id="about">
              <h2 className="text-2xl font-semibold mb-4">1. About These Terms</h2>
              <p className="mb-4"><strong>1.1 Agreement Scope:</strong> These Terms of Use ("Terms") govern your access to and use of the Silence AI platform and services provided by Silence AI LLC ("Silence AI," "we," "us," or "our"). These Terms apply to you, the individual or entity accessing our services ("you" or "your"), and your employer or principal if you are acting on their behalf.</p>
              <p className="mb-4"><strong>1.2 Authority and Acceptance:</strong> If you are entering into these Terms on behalf of a company, organization, or other entity, you represent that you have the authority to bind such entity to these Terms. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, you must discontinue use of our services immediately.</p>
              <p className="mb-4"><strong>1.3 Service Domain and Scope:</strong> The AI-SOC 1 system operates across three dedicated domains, each serving a distinct functional role: (i) <strong>web-soc.silenceai.net</strong> — the Centralized Management Console (CMC) for the Web Security &amp; Traffic Management subsystem, accessible to administrators; (ii) <strong>email-soc.silenceai.net</strong> — the Centralized Management Console (CMC) for the Email Security &amp; Visualization subsystem, accessible to administrators; and (iii) <strong>mail.silenceai.net</strong> — the Webmail Client through which end users send and receive emails, accessible to users without administrative privileges. These Terms of Use apply exclusively to services accessible through the aforementioned domains. Any services provided on different domains are subject to separate terms and policies.</p>
            </section>
            <section id="service-description">
              <h2 className="text-2xl font-semibold mb-4">2. Service Description and Pricing</h2>
              <p className="mb-4"><strong>2.1 Web Security &amp; Traffic Management:</strong> Web Security &amp; Traffic Management provides web application protection, real-time traffic monitoring, country-level access control, and port restriction features. It protects against most types of web attacks, including DDoS, SQL injection, and other common web vulnerabilities, <em>excluding business-logic vulnerabilities</em>. This component includes two subsystems: the <strong>Agent</strong> and the <strong>Centralized Management Console (CMC)</strong>. The CMC is responsible for administration and visualization, such as connecting your websites to the Agent. The Agent is responsible for protection and operates as a reverse proxy that filters all incoming traffic, forwarding only legitimate requests to your website.</p>
              <p className="mb-4"><strong>2.2 Email Security &amp; Visualization:</strong> Email Security &amp; Visualization offers AI-powered email protection with advanced email-flow visualization, phishing and spoofing defense, and spam filtering. This component includes the <strong>CMC</strong> and a secure <strong>Webmail Client</strong>. The Webmail Client currently supports Outlook- and Gmail-based accounts and is designed for your company's corporate email addresses. The CMC lets administrators add and manage corporate email accounts and provides a visual view of all incoming and outgoing emails across the organization.</p>
              <p className="mb-4"><strong>2.2.1 Five-Layer Email Security Architecture:</strong> The Email Security &amp; Visualization component integrates a comprehensive five-layer sequential validation process for all incoming emails. Each email undergoes the following security assessment sequence:</p>
              <div className="pl-6 space-y-2 mb-4">
                <p><strong>Layer 1 — Sender Authentication Verification:</strong> Validation of email authenticity through analysis of SPF, DKIM, and DMARC authentication protocols to detect spoofed or forged sender addresses.</p>
                <p><strong>Layer 2 — Spam Detection:</strong> Identification of unsolicited bulk email, messages from senders with improper DNS configurations, and patterns consistent with spam distribution networks.</p>
                <p><strong>Layer 3 — Dangerous Link Analysis:</strong> Automated scanning and evaluation of all hyperlinks embedded within email content and attachments to identify malicious URLs, exploit distribution sites, and compromised domains.</p>
                <p><strong>Layer 4 — Domain-Based Phishing Detection:</strong> Analysis of sender domain characteristics to detect typosquatting, lookalike domains, and other domain-based phishing techniques (e.g., detection of "rncrosoft.com" impersonating legitimate domains).</p>
                <p><strong>Layer 5 — AI-Powered Content Analysis:</strong> Utilization of artificial intelligence to analyze email body content for phishing context, social engineering indicators, and fraudulent communication patterns.</p>
              </div>
              <p className="mb-4"><strong>2.2.2 Automated Folder Classification:</strong> Based on the results of the five-layer validation process, emails are automatically classified and routed to designated security folders: <strong>Possibly Spoofed</strong> (failed authentication), <strong>Spam</strong> (spam characteristics detected), <strong>Dangerous Link</strong> (malicious URLs identified), <strong>Possibly Phishing</strong> (phishing indicators detected), or <strong>Secure</strong> (passed all validation layers). This classification system enables users to efficiently identify and manage security threats while maintaining access to verified secure communications.</p>
              <p className="mb-4"><strong>2.3 Pricing Information:</strong> Current pricing for AI-SOC 1 services is available on our website at <a href="https://silenceai.net/en/ai-soc/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">silenceai.net/en/ai-soc/</a>. We reserve the right to modify our pricing at any time. Price changes will be communicated through our platform and will take effect for new billing cycles after the notification period.</p>
            </section>
            <section id="sla">
              <h2 className="text-2xl font-semibold mb-4">3. Service Level Agreement and Availability</h2>
              <p className="mb-4"><strong>3.1 100% Uptime SLA Guarantee:</strong> We provide a 100% Service Level Agreement (SLA) for service availability. In the event of any downtime that affects your use of our services, you are entitled to a full money-back guarantee for all pay-as-you-go fees charged by the system during the affected period. Downtime is measured in whole minutes from the moment service becomes unavailable to the moment full service is restored. The refundable amount is calculated as the total pay-as-you-go usage fees accrued by the system during each confirmed minute of downtime, as recorded in our billing logs.</p>
              <p className="mb-4"><strong>3.2 Email Delivery Speed SLA:</strong> We provide a 100% SLA for email delivery speed within the Email Security &amp; Visualization component. All incoming emails processed by the system are guaranteed to be delivered to the recipient's designated security folder within ten (10) minutes of receipt by our platform. In the event that any email delivery exceeds this ten-minute threshold due to a fault attributable to our platform, the affected pay-as-you-go fees charged during the period of delay shall be subject to the money-back guarantee set out in Section 3.1. This SLA applies solely to delays caused by our platform and does not cover delays attributable to third-party mail providers, network transit, or sender-side infrastructure.</p>
              <p><strong>3.3 Service Availability:</strong> While we strive to maintain continuous service availability, we may suspend or terminate access to our services for maintenance, updates, or other operational requirements with advance notice when possible. Planned maintenance windows communicated in advance are excluded from SLA downtime calculations under Sections 3.1 and 3.2.</p>
            </section>
            <section id="user-responsibilities">
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities and Acceptable Use</h2>
              <p className="mb-4"><strong>4.1 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              <p className="mb-4"><strong>4.2 Lawful Use:</strong> You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations.</p>
              <p><strong>4.3 Prohibited Activities:</strong> You agree not to: Use our services to conduct unauthorized security testing on systems you do not own or have explicit permission to test. Attempt to interfere with the proper functioning of our services. Use automated tools to access our services except as explicitly permitted. Engage in any activity that could harm our infrastructure or other users.</p>
            </section>
            <section id="data-processing">
              <h2 className="text-2xl font-semibold mb-4">5. Data Processing and Infrastructure</h2>
              <p><strong>5.1 Privacy Policy:</strong> Our collection, use, and protection of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference and available at https://silenceai.net/policies/privacy/.</p>
            </section>
            <section id="service-activation">
              <h2 className="text-2xl font-semibold mb-4">6. Service Activation and Free Trials</h2>
              <p className="mb-4"><strong>6.1 Component Activation:</strong> Each service component requires individual activation. Before activation, you will have access to system demonstrations, pricing videos, and informational content. The activation process is free, and you only pay for actual usage, which you must explicitly initiate.</p>
              <p><strong>6.2 Consent Process:</strong> When you click "Activate" for any service component, a popup window will appear containing the relevant privacy policy and terms specific to that component. You must provide consent before the service becomes fully accessible.</p>
            </section>
            <section id="ip-rights">
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property Rights</h2>
              <p className="mb-4"><strong>7.1 Our Rights:</strong> We retain all intellectual property rights in our platform, services, technologies, and content. Nothing in these Terms grants you any rights to our intellectual property except as necessary to use our services as intended.</p>
              <p><strong>7.2 Your Content:</strong> You retain ownership of any content you provide to our services. By using our services, you grant us a limited license to process, analyze, and store your content solely for the purpose of delivering our services to you.</p>
            </section>
            <section id="privacy">
              <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
              <p className="mb-4"><strong>8.1 Privacy Policy:</strong> Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference and available at https://silenceai.net/policies/privacy/.</p>
              <p><strong>8.2 Data Security:</strong> We implement industry-standard security measures to protect your data and maintain the confidentiality of your information.</p>
              <p id="email-access" className="mb-4"><strong>8.3 Prohibition on Unauthorized Staff Access to Client Email Data:</strong> Silence AI personnel — including employees, contractors, officers, directors, and any other human agents acting on behalf of Silence AI LLC — are strictly prohibited from reading, accessing, copying, or otherwise reviewing the content of any email messages, email attachments, or email metadata belonging to or associated with a client's mailboxes, without the <strong>prior, explicit, and documented written consent</strong> of the relevant client organization. This prohibition applies regardless of whether such email data is technically accessible via internal systems, administrative tooling, or third-party API integrations used to provide the Email Security &amp; Visualization component of the Service. Client email data is processed exclusively by automated systems for the sole purpose of delivering the contracted security-scanning and visualization services. Any deviation from this rule, including access for debugging, support, or audit purposes, must be preceded by a written authorization request submitted to, and approved in writing by, an authorized representative of the client. Unauthorized access to client email data by any Silence AI personnel constitutes a material breach of this Agreement and may result in disciplinary action, termination of employment or engagement, and civil or criminal liability under applicable law. Silence AI maintains internal access-control policies and audit logs to enforce and evidence compliance with this provision.</p>
            </section>
            <section id="liability">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="mb-4"><strong>9.1 Service Limitations:</strong> Except for our SLA guarantee regarding service availability, our services are provided "as is" without warranties of any kind. We do not guarantee that our services will meet all your security requirements or detect all possible vulnerabilities.</p>
              <p className="mb-4"><strong>9.2 Liability Cap:</strong> Our total liability to you for any claims arising from these Terms or your use of our services shall not exceed the amount you paid to us in the twelve months preceding the claim.</p>
              <p><strong>9.3 Excluded Damages:</strong> We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.</p>
            </section>
            <section id="updates">
              <h2 className="text-2xl font-semibold mb-4">10. Version Updates and Support</h2>
              <p className="mb-4"><strong>10.1 Service Updates:</strong> We may release new versions of our services from time to time. When a new version is released, we reserve the right to discontinue support for previous versions with reasonable notice.</p>
              <p><strong>10.2 Compatibility:</strong> You are responsible for ensuring compatibility with supported versions of our services and updating to current versions as needed.</p>
            </section>
            <section id="termination">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p className="mb-4"><strong>11.1 Termination by You:</strong> You may terminate your use of our services at any time by discontinuing use and closing your account.</p>
              <p><strong>11.2 Termination by Us:</strong> We may suspend or terminate your access to our services if you violate these Terms or engage in activities that harm our services or other users.</p>
            </section>
            <section id="indemnification">
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Silence AI from any claims, damages, or expenses arising from your use of our services, including any unauthorized security testing or violation of these Terms.</p>
            </section>
            <section id="governing-law">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law and Disputes</h2>
              <p className="mb-4"><strong>13.1 Applicable Law:</strong> These Terms are governed by the laws of the United Arab Emirates, without regard to conflict of law principles.</p>
              <p><strong>13.2 Dispute Resolution:</strong> If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting us. If informal resolution is unsuccessful, disputes shall be resolved through binding arbitration or in courts of competent jurisdiction as determined by applicable law of the United Arab Emirates.</p>
            </section>
            <section id="changes">
              <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of material changes through our platform or via email. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.</p>
            </section>
            <section id="contact">
              <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
              <p>For questions about these Terms or our services, please contact us at:</p>
              <p>Silence AI LLC</p>
              <p>Email: info@silenceai.net</p>
              <p>Website: silenceai.net</p>
              <p>Business registration location: Media City Free Zone, Al Messaned, Sharjah, UAE</p>
            </section>
            <section id="misc">
              <h2 className="text-2xl font-semibold mb-4">16. Miscellaneous</h2>
              <p className="mb-4"><strong>16.1 Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
              <p className="mb-4"><strong>16.2 Entire Agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Silence AI regarding your use of our services.</p>
              <p><strong>16.3 Assignment:</strong> We may assign these Terms or our rights hereunder without your consent. You may not assign these Terms without our prior written consent.</p>
            </section>
          </div>
          <p className="mt-8 text-sm text-gray-400">Last Updated: 30.03.2026</p>
        </main>
      </div>
      <BackToTopButton />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TermsOfUse;
