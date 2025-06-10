import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Helmet>
        <title>Kayse | Privacy Policy</title>
        <meta
          name="description"
          content="Read Kayse's privacy policy to understand how we collect, use, and protect your personal information and data."
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-8 sm:pt-20 sm:pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000814] to-[#000a17]" />

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-semibold text-white mb-4"
              >
                Privacy Policy
              </motion.h1>
              <p className="text-white/60 mb-0">
                Last modified: April 14, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative pb-12 bg-[#000a17]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                {/* Introduction */}
                <h2 className="text-2xl font-semibold text-white mb-4 mt-0">
                  1. Introduction
                </h2>
                <p className="text-white/80 mb-4">
                  Welcome to <strong>Case Connect Group LLC</strong>, a company
                  registered in the State of New York, which operates under the
                  business names{" "}
                  <strong>
                    Kayse, Kayse AI, Kayse.ai, Kayse App, and Kayseapp.com.
                  </strong>
                </p>
                <p className="text-white/80 mb-8">
                  <strong>
                    "Kayse" TM is a registered trademark of Case Connect Group
                    LLC
                  </strong>
                  . We are dedicated to safeguarding your privacy and the
                  security of your personal information. This Privacy Policy
                  outlines our practices regarding the collection, use,
                  disclosure, and protection of your data when you interact with
                  our client portal app that integrates with third-party
                  applications.
                </p>

                {/* Data Collection */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. Data Collection
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.1 Information Collected from Third-Party Apps
                </h3>
                <p className="text-white/80 mb-3">
                  We receive the following types of data from user interactions
                  and third-party CRM and practice management apps:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>
                    <strong>Client Contact Information:</strong> Name, email
                    address, phone number, and other contact details.
                  </li>
                  <li>
                    <strong>Client Activity Data:</strong> Interaction history,
                    transaction records, and communication logs.
                  </li>
                  <li>
                    <strong>Client Intake & Case Information:</strong> Case
                    details, documents, and notes.
                  </li>
                  <li>
                    <strong>Other Relevant Data:</strong> Any other data
                    necessary for the provision of our services.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.2 Information You Provide
                </h3>
                <p className="text-white/80 mb-3">
                  When you use our app, you may provide additional information
                  such as:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-8 ml-4">
                  <li>
                    Account information: Username, password, and profile
                    details.
                  </li>
                  <li>
                    Contact and Case Information: Case details, documents, and
                    notes.
                  </li>
                  <li>
                    Communication: Messages, feedback, and other communications
                    with our support team.
                  </li>
                </ul>

                {/* Data Usage */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  3. Data Usage
                </h2>
                <p className="text-white/80 mb-3">
                  We use the data collected for the following purposes:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-8 ml-4">
                  <li>
                    <strong>Service Provision:</strong> To provide and enhance
                    our client portal services, including integrating with
                    third-party CRM, practice management and related apps.
                  </li>
                  <li>
                    <strong>Personalization:</strong> To personalize your
                    experience and provide relevant content and recommendations.
                  </li>
                  <li>
                    <strong>Communication:</strong> To communicate with you
                    regarding your account, updates, and support.
                  </li>
                  <li>
                    <strong>Analytics:</strong> To analyze usage patterns and
                    improve our app's performance and functionality.
                  </li>
                  <li>
                    <strong>Compliance:</strong> To comply with legal
                    obligations and protect our rights and interests.
                  </li>
                </ul>

                {/* Data Sharing */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  4. Data Sharing
                </h2>
                <p className="text-white/80 mb-3">
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties except as described in this
                  policy. We may share your data with or under the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-8 ml-4">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who
                    assist us, directly or indirectly, in operating our app and
                    providing our services.{" "}
                    <strong>
                      Note: We never provide Sensitive Personally Identifiable
                      Information (PII) to third parties.
                    </strong>
                  </li>
                  <li>
                    <strong>Business Partners & Affiliates:</strong> Partners
                    and affiliates with whom we collaborate to offer integrated
                    services or which controls or is controlled by us.
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law or
                    to protect our rights and comply with legal proceedings.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> Strategic transactions,
                    reorganization, bankruptcy, receivership, or transition of
                    our service to another provider (collectively, a
                    "Transaction"), may require your data to be disclosed with
                    counterparties and others and transferred to a successor or
                    affiliate as part of that Transaction along with other
                    assets.
                  </li>
                  <li>
                    <strong>Other Users and Third Parties:</strong> Certain
                    features allow you to interact or share information with
                    other users or third parties. You can also send information
                    to third-party applications. Such information is governed by
                    the third parties' own terms and privacy policies.
                  </li>
                </ul>

                {/* Data Protection */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  5. Data Protection
                </h2>
                <p className="text-white/80 mb-3">
                  We implement industry-standard security measures to protect
                  your data, including:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-8 ml-4">
                  <li>
                    <strong>Encryption:</strong> Data is encrypted in transit
                    and at rest.
                  </li>
                  <li>
                    <strong>Access Controls:</strong> Restricted access to
                    authorized personnel only.
                  </li>
                  <li>
                    <strong>Regular Audits:</strong> Regular security audits and
                    assessments to identify and mitigate risks.
                  </li>
                </ul>

                {/* Data Retention */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  6. Data Retention
                </h2>
                <p className="text-white/80 mb-8">
                  We retain your data only as long as necessary for the purposes
                  outlined in this policy or as required by law. You may request
                  the deletion of your data at any time by contacting us at{" "}
                  <a
                    href="mailto:support@kayse.ai"
                    className="text-accent hover:underline"
                  >
                    support@kayse.ai
                  </a>
                  .
                </p>

                {/* User Rights */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  7. User Rights
                </h2>
                <p className="text-white/80 mb-3">
                  You have the following rights regarding your data:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>
                    <strong>Access:</strong> The right to request access to your
                    personal data.
                  </li>
                  <li>
                    <strong>Correction:</strong> The right to request correction
                    of inaccurate data.
                  </li>
                  <li>
                    <strong>Deletion:</strong> The right to request deletion of
                    your data.
                  </li>
                  <li>
                    <strong>Portability:</strong> The right to request a copy of
                    your data in a structured, commonly used format.
                  </li>
                </ul>
                <p className="text-white/80 mb-8">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:support@kayse.ai"
                    className="text-accent hover:underline"
                  >
                    support@kayse.ai
                  </a>
                  .
                </p>

                {/* Children */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  8. Children
                </h2>
                <p className="text-white/80 mb-8">
                  Our Services are not directed to, or intended for, minors
                  (users under age 18). We do not knowingly collect personal
                  data from children. If you have reason to believe that a child
                  has provided personal data to us through the Services, please
                  email us at{" "}
                  <a
                    href="mailto:support@kayse.ai"
                    className="text-accent hover:underline"
                  >
                    support@kayse.ai
                  </a>
                  . We will investigate any notification and, if appropriate,
                  delete the personal data from our systems.
                </p>

                {/* US State Disclosures */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  9. Additional U.S. State Disclosures
                </h2>
                <p className="text-white/80 mb-4">
                  Some U.S. state privacy laws require specific disclosures. The
                  following table provides additional information about the
                  categories of personal data we collect and how we use and
                  disclose that information. You can read more about the
                  personal data we collect and where we collect it from in
                  "personal data we collect" above, how we use personal data in
                  "How we use personal data" above, and how we retain personal
                  data in "Security and Retention" below.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Categories of Personal Data
                </h3>
                <p className="text-white/80 mb-3">
                  We collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>
                    <strong>Identifiers:</strong> This includes your name,
                    contact details, IP address, and other device identifiers.
                  </li>
                  <li>
                    <strong>Commercial Information:</strong> Such as your
                    transaction history.
                  </li>
                  <li>
                    <strong>Network Activity Information:</strong> Including
                    content and details on how you interact with our Services.
                  </li>
                  <li>
                    <strong>Communication Information:</strong> Such as your
                    contact information when you email or communicate with us.
                  </li>
                  <li>
                    <strong>Geolocation Data:</strong> Including the general
                    area from which your device accesses our Services (e.g.,
                    based on IP address), or precise location information you
                    choose to provide.
                  </li>
                  <li>
                    <strong>
                      Account Credentials and Payment Information:
                    </strong>{" "}
                    Including login credentials and billing details.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Use of Personal Data
                </h3>
                <p className="text-white/80 mb-3">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>To provide, analyze, and maintain our Services</li>
                  <li>
                    To improve and develop our Services and conduct research
                  </li>
                  <li>
                    To communicate with you, including sending information about
                    our Services and upcoming events
                  </li>
                  <li>
                    To prevent fraud, illegal activity, or misuse of our
                    Services, and to protect the security of our systems and
                    Services
                  </li>
                  <li>
                    To comply with legal obligations and to protect the rights,
                    privacy, safety, or property of our users, Kayse, or third
                    parties
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Disclosure of Personal Data
                </h3>
                <p className="text-white/80 mb-3">
                  We may share your personal information under the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>
                    With vendors, service providers, and affiliates who process
                    information on our behalf according to our instructions
                  </li>
                  <li>
                    With government authorities or other third parties, as
                    required by law
                  </li>
                  <li>
                    With parties involved in business transactions, such as
                    mergers, acquisitions, or sales
                  </li>
                  <li>With business account administrators, as applicable</li>
                  <li>
                    With other users and third parties you interact with or
                    choose to share information with
                  </li>
                </ul>

                <p className="text-white/80 mb-3">
                  Depending on where you live and subject to applicable
                  exceptions, you may have the following privacy rights in
                  relation to your personal data:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>
                    The right to know information about our processing of your
                    personal data, including the right to access your personal
                    data, often in a portable format;
                  </li>
                  <li>The right to request deletion of your personal data;</li>
                  <li>The right to correct your personal data; and</li>
                  <li>
                    The right to be free from discrimination relating to the
                    exercise of any of your privacy rights.
                  </li>
                </ul>

                <p className="text-white/80 mb-4">
                  We do not "sell" personal data or "share" personal data for
                  cross-contextual behavioral advertising, and we do not process
                  personal data for "targeted advertising" purposes (as those
                  terms are defined under state privacy laws). We also do not
                  process sensitive personal data for the purposes of inferring
                  characteristics about a consumer.
                </p>

                <p className="text-white/80 mb-4">
                  <strong>Exercising Your Rights.</strong> You can exercise
                  privacy rights described in this section by submitting a
                  request to{" "}
                  <a
                    href="mailto:support@kayse.ai"
                    className="text-accent hover:underline"
                  >
                    support@kayse.ai
                  </a>
                  .
                </p>

                <p className="text-white/80 mb-4">
                  <strong>Verification.</strong> In order to protect your
                  personal data from unauthorized access, change, or deletion,
                  we may require you to verify your credentials before you can
                  submit a request to know, correct, or delete personal data. If
                  you do not have an account with us, or if we suspect
                  fraudulent or malicious activity, we may ask you to provide
                  additional personal data for verification. If we cannot verify
                  your identity, we will not be able to honor your request.
                </p>

                <p className="text-white/80 mb-4">
                  <strong>Authorized Agents.</strong> You may also submit a
                  rights request through an authorized agent. If you do so, the
                  agent must present signed written permission to act on your
                  behalf and you may also be required to independently verify
                  your identity with us. Authorized agent requests can be
                  submitted to{" "}
                  <a
                    href="mailto:support@kayse.ai"
                    className="text-accent hover:underline"
                  >
                    support@kayse.ai
                  </a>
                  .
                </p>

                <p className="text-white/80 mb-8">
                  <strong>Appeals.</strong> Depending on where you live, you may
                  have the right to appeal a decision we make relating to
                  requests to exercise your rights. To appeal a decision, please
                  send your request to{" "}
                  <a
                    href="mailto:support@kayse.ai"
                    className="text-accent hover:underline"
                  >
                    support@kayse.ai
                  </a>
                  .
                </p>

                {/* Cookies */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  10. Cookies and Tracking Technologies
                </h2>
                <p className="text-white/80 mb-8">
                  Our app may use cookies and similar technologies to enhance
                  your experience. You can manage your cookie preferences
                  through your browser settings.
                </p>

                {/* Changes */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  11. Changes to this Privacy Policy
                </h2>
                <p className="text-white/80 mb-8">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting the new
                  policy on our app and updating the effective date.
                </p>

                {/* Contact */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  12. Contact Information
                </h2>
                <p className="text-white/80 mb-4">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:
                </p>
                <div className="text-white/80 mb-8">
                  <p className="font-semibold">Case Connect Group LLC</p>
                  <p>C/O Kayse App</p>
                  <p>
                    <a
                      href="https://www.kayse.ai"
                      className="text-accent hover:underline"
                    >
                      www.kayse.ai
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:support@kayse.ai"
                      className="text-accent hover:underline"
                    >
                      support@kayse.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
