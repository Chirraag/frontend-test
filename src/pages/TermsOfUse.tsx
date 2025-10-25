import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Helmet>
        <title>Kayse | Terms of Use</title>
        <meta
          name="description"
          content="Read Kayse's terms of use and software licensing agreement for our AI client retention platform."
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
                Terms of Use
              </motion.h1>
              <p className="text-white/60 mb-0">Updated 10/24/25</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="relative pb-12 bg-[#000a17]">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                {/* Introduction */}
                <p className="text-white/80 mb-4">
                  This Software Licensing Agreement (the "Agreement" or "Terms
                  of Use") is entered into on the date of execution (the
                  "Effective Date"), between ("Subscriber" or "you") and Case
                  Connect Group, LLC., a New York company doing business as{" "}
                  <strong>
                    Kayse, Kayse AI, Kayse.ai, Kayse App, Kayseapp.com
                  </strong>
                  , ("Licensor" or "KAYSE") with its principal place of business
                  at 1400 Old Country Rd, Suite 305, Westbury, NY 11590. For
                  purposes of this Agreement, Subscriber and Licensor each will
                  be referred to individually as a "Party" and together as the
                  "Parties." These Terms of Use apply to your use of the Service
                  (defined below). The Service is intended for use only by users
                  that are at least 18 years of age.
                </p>

                <p className="text-white/80 mb-4">
                  "Site" refers to https://www.kayseapp.com and
                  http://www.kayse.ai, the web application located at kayse.ai
                  and kayseapp.com, the mobile application, and all associated
                  white label accounts. The Site contains text, pictures,
                  graphics, videos, logos, images, works of authorship, computer
                  code, design elements, trade dress, technical information, and
                  other content, as well as available features or services
                  discussed, referenced, provided, or offered through or on the
                  Site (collectively with all information and material about
                  KAYSE and its Services, the "Content"). For the purposes of
                  these Terms of Use, the term "Site" also includes the Content,
                  except where the context specifically indicates otherwise.
                </p>

                <p className="text-white/80 mb-4">
                  "Software": The AI-driven legal software solution developed
                  and owned by Licensor, known as KAYSE, including all updates,
                  enhancements, and modifications.
                </p>

                <p className="text-white/80 mb-4">
                  "Authorized Users" means Subscriber's employees or contractors
                  using the Service solely on behalf of Subscriber.
                </p>

                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded mb-6">
                  <p className="text-white font-semibold mb-2">PLEASE NOTE:</p>
                  <p className="text-white/90">
                    Your access to and use of the Service are governed by these
                    Terms of Use, as well as all applicable laws and
                    regulations. Only individuals and entities who have reached
                    the age of legal majority and can form legally binding
                    agreements under applicable law are permitted to use the
                    Service and/or establish a Service account, where
                    applicable.{" "}
                    <strong>
                      Please read these Terms of Use carefully. If you do not
                      acknowledge and agree to these Terms of Use, you are not
                      authorized to access or use the Service
                    </strong>
                    . By accessing and using the Service, you acknowledge and
                    agree to be bound by these Terms of Use. These Terms of Use
                    explain the terms by which you may use our online and/or
                    mobile services, Site, and Software including all updates,
                    enhancements, and modifications (collectively, the
                    "Service").
                  </p>
                </div>

                <p className="text-white/80 mb-4">
                  We may update, modify, supplement, or change these Terms of
                  Use from time to time by providing advance notice, which may
                  include posting the revised Terms here. If you continue to use
                  the Service after such changes are posted, you will be bound
                  by the updated Terms of Use. Unless otherwise indicated, any
                  new Content added to the Service will also be subject to these
                  Terms of Use, effective on the date of such addition. You are
                  encouraged to review the Site and these Terms of Use
                  periodically for any updates or changes. If you do not agree
                  to the changes, you must stop using our Services.
                </p>

                <p className="text-white/80 mb-4">
                  WHEREAS, Subscriber is a law firm or an entity authorized to
                  provide legal or claims management services as defined by the
                  applicable governmental authorities where the firm or entity
                  is located.
                </p>

                <p className="text-white/80 mb-4">
                  WHEREAS, KAYSE has developed the web/cloud-based KAYSE TM
                  legal client continuity AI platform to be used by law firms,
                  claims management firms, and related entities to enhance case
                  management, client communication, and firm efficiency.
                </p>

                <p className="text-white/80 mb-4">
                  WHEREAS, Subscriber wishes to utilize KAYSE TM to assist in
                  its operations.
                </p>

                <p className="text-white/80 mb-8">
                  NOW THEREFORE, for valuable consideration, the receipt and
                  sufficiency of which is hereby acknowledged, the parties
                  hereto, intending to be legally bound, hereby agree as
                  follows:
                </p>

                {/* Use of Kayse */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  1. USE OF KAYSE
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  1.1 GRANT
                </h3>
                <p className="text-white/80 mb-4">
                  Licensor hereby grants the Subscriber a limited, revocable,
                  non-exclusive and non-transferable license, without right of
                  sublicense, during the Term to access and display on
                  Subscriber's Display Devices within the United States, Canada,
                  and other countries approved by KAYSE, KAYSE TM, and to permit
                  Authorized Users to use the Service for their internal
                  operations, subject to the terms and conditions of this
                  Agreement. All rights in the Service not expressly granted
                  hereunder are expressly reserved to Licensor. The Software and
                  Services are licensed, not sold. Licensor retains all right,
                  title, and interest, including all intellectual property
                  rights, in and to the Software and Services. Subscriber
                  acknowledges and agrees that this is a non-exclusive license,
                  and the Licensor may grant similar licenses to other parties.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  1.2 SERVICE DATA
                </h3>
                <p className="text-white/80 mb-4">
                  We collect various types of information about individuals who
                  interact with your business through the Service (collectively,
                  "Service Data"). You agree that we, along with the service
                  providers we use to assist in providing the Service, have the
                  right from time to time to access your account and use,
                  modify, reproduce, distribute, display, and disclose Service
                  Data as necessary to develop, enhance, and provide the
                  Service, including AI-generated features and improvements, and
                  to respond to your support requests. Any use of Service Data
                  for AI or machine learning purposes will be done using
                  anonymized data, using commercially reasonably efforts to
                  ensure that all personally identifiable information is removed
                  or obfuscated.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  1.3 SCOPE
                </h3>
                <p className="text-white/80 mb-4">
                  The license granted to Subscriber under this Agreement is
                  limited to a single, authorized Application for the display
                  and retrieval of the Service on Subscriber's device(s) used
                  for managing active cases and clients. The license does not
                  extend to multiple applications or devices beyond what is
                  necessary for accessing content within the Service as provided
                  under the subscription. Nothing in this Agreement obligates
                  KAYSE to continue providing access to any Service beyond the
                  date when KAYSE ceases offering such Service to subscribers
                  generally. Any use of Service Data, including AI-generated
                  features, will be conducted in accordance with Section 1.2,
                  with data anonymized and held securely.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  1.4 RESTRICTIONS OF USE
                </h3>
                <p className="text-white/80 mb-3">
                  Subscriber shall not edit, alter, abridge or otherwise change
                  in any manner the content of the Service, including, without
                  limitation, all copyright and proprietary rights. Subscriber
                  shall not, and shall not permit others to:
                </p>
                <p className="text-white/80 mb-3">
                  reverse engineer, decompile, decode, decrypt, disassemble, or
                  in any way derive source code from, the software or Service;
                </p>
                <p className="text-white/80 mb-3">
                  modify (in whole or part), translate, adapt, alter, or create
                  derivative works from the Service;
                </p>
                <p className="text-white/80 mb-3">
                  copy (other than one back-up copy), distribute, publicly
                  display, transmit, sell, rent, lease or otherwise exploit the
                  Service; or
                </p>
                <p className="text-white/80 mb-3">
                  distribute, sublicense, rent, lease, loan (or grant any third
                  party access to or use of) the Service to any third party.
                </p>
                <p className="text-white/80 mb-3">
                  use our Services for any illegal, harmful, or abusive
                  activity. For example, you shall not:
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  use our Services in a way that infringes, misappropriates or
                  violates anyone's rights.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  modify, copy, lease, sell or distribute any of our Services.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  attempt to or assist anyone to reverse engineer, decompile,
                  disassemble, or discover the source code or underlying
                  components of our Services, including our models, algorithms,
                  or systems.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  automatically or programmatically extract data or Output
                  (defined as output from the Services based on input).
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  represent that Output was human-generated when it was not.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  interfere with or disrupt our Services, including circumvent
                  any rate limits or restrictions or bypass any protective
                  measures or safety mitigations we put on our Services.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  use Output to develop models that compete with KAYSE.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  use the Service to build or assist in building competing
                  products.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  1.5 DEFINITIONS
                </h3>
                <p className="text-white/80 mb-3">As used herein:</p>
                <p className="text-white/80 mb-2">
                  "Application" shall mean the Licensor-developed application
                  used by Subscriber for the Service under this Agreement;
                </p>
                <p className="text-white/80 mb-2">
                  "Active Cases" and "Clients" shall refer to the number of
                  legal cases and clients managed through the Service, which
                  determine the applicable subscription fees;
                </p>
                <p className="text-white/80 mb-2">
                  "Billing Start Date" shall mean the date on which billing
                  begins for the selected Service, which under no circumstances
                  shall be later than the Service Start Date;
                </p>
                <p className="text-white/80 mb-2">
                  "Display Devices" shall mean any device used to access and
                  display the Service;
                </p>
                <p className="text-white/80 mb-2">
                  "Service Start Date" shall mean the date that Subscriber first
                  receives authorized access to the applicable Service;
                </p>
                <p className="text-white/80 mb-2">
                  "Fees" shall mean the fees payable under this Agreement for
                  the Services rendered, based on the number of active cases and
                  clients;
                </p>
                <p className="text-white/80 mb-2">
                  "Office" shall mean the address(es) of Subscriber's office(s)
                  in which a Display Device is located, including clients at
                  multiple locations who specifically utilize/subscribe to the
                  Service; and
                </p>
                <p className="text-white/80 mb-8">
                  "Vendor" shall mean the single distributor that delivers the
                  Service to Subscriber, subject to Licensor's continuing
                  authorization of such Vendor's Application.
                </p>

                {/* Fees and Payments */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  2. FEES AND PAYMENTS
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.1. Subscription Fees
                </h3>
                <p className="text-white/80 mb-4">
                  You agree to pay KAYSE the applicable monthly or annual
                  subscription fees as set forth by KAYSE in writing to you at
                  the time of your signup for the Services. Fees are charged on
                  the Billing Start Date and are payable in advance for the
                  services rendered, based on the number of active cases and
                  clients managed through the Service. The number of active
                  cases and clients will be assessed on a monthly basis, and
                  fees will be adjusted accordingly based on increases or
                  decreases; provided, however, no prorated adjustments will be
                  made for mid-term changes in case or client numbers. All fees
                  paid are non-refundable. You authorize KAYSE, along with our
                  payment affiliates or service providers, to process and store
                  your payment card information. By subscribing to and using the
                  Application, you acknowledge and agree to the pricing terms
                  applicable to your subscription, as made available and clearly
                  disclosed within the Application interface upon sign-in. These
                  pricing terms may include subscription and usage fees, billing
                  cycles, renewal terms, any other amounts due under this
                  Agreement, and any applicable taxes or charges. Your continued
                  use of the Application after sign-in constitutes your
                  acceptance of then-current pricing terms. KAYSE reserves the
                  right to update pricing from time to time, and any such
                  changes will be communicated within the Application and will
                  take effect upon your next billing cycle unless otherwise
                  stated.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.2. Usage Fees
                </h3>
                <p className="text-white/80 mb-3">
                  In addition to subscription fees, KAYSE offers various
                  usage-based services, including but not limited to SMS text
                  messaging, email, voice AI calling, social media direct
                  messages (DMs), mailed letters, contact enrichment, skip
                  tracing, and local notary or door knocker services. Each of
                  these services has its own pricing, which is subject to
                  change. Usage fees, including charges for additional services
                  beyond your selected plan, are non-refundable. Usage of
                  services like SMS text messages, phone calls, or similar
                  services will be calculated by rounding up to the nearest unit
                  (e.g., minute, message, or instance of service). Spam calls or
                  similar misuse may be excluded from billing at KAYSE's sole
                  discretion. If an adjustment is requested, please contact our
                  support team.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.3. Late Payments
                </h3>
                <p className="text-white/80 mb-4">
                  If you fail to pay the fees or any other amounts due under
                  this Agreement by the due date specified on the invoice or as
                  otherwise provided herein, KAYSE is entitled to charge
                  interest on the overdue amounts from the date payment was due.
                  Interest will be calculated at a rate of 1.5% per month, or
                  the maximum rate permitted by law, whichever is higher, both
                  pre-judgment and post-judgment.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.4. Additional Fees for Certain Services
                </h3>
                <p className="text-white/80 mb-4">
                  In some cases, KAYSE may incur additional fees related to
                  porting phone numbers into or out of the platform. Certain
                  regions (including, but not limited to, Alaska and the Yukon
                  Territories) may incur extra costs for call forwarding or
                  other services. Sending or receiving SMS and MMS messages
                  to/from specific carriers or using any other additional
                  services such as social media DMs, mailed letters, skip
                  tracing, or local notaries, may also result in extra network
                  or service-provider fees. KAYSE reserves the right to pass
                  these charges on to you, and you agree to pay them.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.5 Professional Services
                </h3>
                <p className="text-white/80 mb-4">
                  During the term of this Agreement, Subscriber may request
                  Licensor to perform computer professional services in the
                  nature of software development, customization add-in,
                  documentation and/or integration services (hereinafter,
                  "Professional Services"). Upon receipt of a request, Licensor
                  may provide Subscriber with a written proposal, and when the
                  Parties agree to all requirements of the proposed Professional
                  Services, a Task Order for the Professional Services shall be
                  executed by the Parties. All Task Orders shall be subject to
                  the terms and conditions of this Agreement. Services performed
                  by Licensor are not exclusive to Subscriber, and Licensor may
                  perform services of any type or nature for any other person or
                  entity at any time.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.6. Taxes
                </h3>
                <p className="text-white/80 mb-4">
                  [You are responsible for promptly paying or reimbursing KAYSE
                  for any applicable sales, use, excise, value-added, or similar
                  taxes, assessments, duties, or other charges imposed by a
                  governmental agency based on the Services provided, including
                  any interest or penalties that result from your actions.][
                  Subscriber shall be responsible for all applicable taxes,
                  excluding taxes based on Licensor's income.]
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.7. Disputed Fees
                </h3>
                <p className="text-white/80 mb-4">
                  If you dispute any portion of the fees billed to you, you must
                  notify us in writing by identifying the specific fees which
                  you dispute within sixty (60) days from the billing date, or
                  the fees shall be considered correct. The Parties agree to
                  work together to promptly resolve any disputes.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.8. Pay-As-You-Go (PAYG) Pricing (Default Option. Does Not
                  Apply to Deferred Pricing)
                </h3>
                <p className="text-white/80 mb-3">
                  Subscriber acknowledges that the default pricing model under
                  this Agreement is the Pay-As-You-Go ("PAYG") pricing option.
                </p>
                <p className="text-white/80 mb-3">
                  1. Scope and Pricing: PAYG pricing is all-inclusive,
                  incorporating both subscription and usage fees as set forth in
                  the Pricing Exhibit attached hereto. All fees are subject to
                  the terms and conditions of this Agreement.
                </p>
                <p className="text-white/80 mb-3">
                  2. Payment: PAYG requires monthly payment via credit card or
                  ACH authorization, which must be completed before the Service
                  is activated.
                </p>
                <p className="text-white/80 mb-3">
                  3. Subscription Term: PAYG subscriptions are for the term
                  outlined in Section 5 and renew automatically in accordance
                  with Section 5 unless terminated earlier pursuant to this
                  Agreement.
                </p>
                <p className="text-white/80 mb-3">
                  4. Active and Inactive Cases:
                  <br />
                  - Subscriber will be billed monthly for each Active Case (as
                  defined in Section 1.5) unless such case is marked inactive
                  within the Kayse dashboard.
                  <br />
                  - Inactive cases will not accrue additional monthly
                  subscription fees, but associated clients will continue to
                  have access to the Kayse mobile client portal app, enabling
                  ongoing communication, stronger retention, and potential
                  remarketing of new cases.
                  <br />- Inactive cases will still count toward the
                  Subscriber's minimum monthly subscription fee unless
                  reactivated as Active Cases.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.8(a) Fair Use Policy for PAYG Unlimited Usage
                </h3>
                <p className="text-white/80 mb-4">
                  The Pay-As-You-Go ("PAYG") model includes unlimited SMS, Voice
                  AI, and Messaging AI usage per active case, subject to the
                  following Fair Use Policy. This Policy ensures reliable
                  service for all customers while protecting against fraud,
                  abuse, and practices that could harm Kayse's platform or
                  carrier networks.
                </p>

                <p className="text-white/80 mb-3">
                  <strong>1. Definition of Unlimited</strong>
                  <br />
                  Unlimited usage means all communications reasonably necessary
                  to support the lifecycle of an active case. Typical law firm
                  usage will never be restricted or billed separately.
                </p>

                <p className="text-white/80 mb-3">
                  <strong>2. Fair Usage Benchmarks</strong>
                  <br />
                  To prevent misuse, Kayse monitors usage patterns. The
                  following benchmarks apply to PAYG subscriptions:
                </p>

                <div className="ml-4 mb-3">
                  <p className="text-white/80 mb-2">
                    <strong>SMS Messaging</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/80 mb-3 ml-4">
                    <li>Soft cap: 300 messages per case</li>
                    <li>
                      Hard cap (review threshold): 1,000 messages per case
                    </li>
                    <li>Per recipient: No more than 10 messages per hour</li>
                    <li>
                      Account-wide: Throttled at 1 SMS per second per case
                    </li>
                  </ul>

                  <p className="text-white/80 mb-2">
                    <strong>Voice AI / Calls</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/80 mb-3 ml-4">
                    <li>Soft cap: 30 minutes per case</li>
                    <li>Hard cap (review threshold): 120 minutes per case</li>
                    <li>
                      Per call: Maximum 4 hours (disconnect and re-dial if
                      exceeded)
                    </li>
                    <li>
                      Concurrent calls: Limited to 10 concurrent calls per 100
                      active cases
                    </li>
                  </ul>

                  <p className="text-white/80 mb-2">
                    <strong>Messaging AI (Chatbot / NLP Interactions)</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/80 mb-3 ml-4">
                    <li>Soft cap: 1,000 AI turns per case</li>
                    <li>
                      Hard cap (review threshold): 5,000 AI turns per case
                    </li>
                    <li>
                      Account-wide: Throttled if more than 10 requests per
                      second
                    </li>
                  </ul>

                  <p className="text-white/80 mb-2">
                    <strong>Account-Level Safeguards</strong>
                  </p>
                  <ul className="list-disc list-inside text-white/80 mb-3 ml-4">
                    <li>
                      Abuse Detection: Accounts where more than 80% of traffic
                      is outbound, marketing-like, or not tied to case workflows
                      may be flagged
                    </li>
                    <li>
                      Excluded Traffic: Premium-rate, international, and
                      toll-free communications are billed separately at
                      passthrough plus margin
                    </li>
                  </ul>
                </div>

                <p className="text-white/80 mb-3">
                  <strong>3. Enforcement</strong>
                </p>
                <ul className="list-disc list-inside text-white/80 mb-3 ml-4">
                  <li>
                    <strong>Notification</strong>: Kayse may contact Subscriber
                    if usage indicates abnormal or abusive patterns.
                  </li>
                  <li>
                    <strong>Overage Charges</strong>: Usage significantly above
                    benchmarks may incur per-unit charges.
                  </li>
                  <li>
                    <strong>Plan Adjustment</strong>: Consistently high-volume
                    firms may be moved to an enterprise plan.
                  </li>
                  <li>
                    <strong>Suspension/Termination</strong>: Fraudulent or
                    abusive usage may result in immediate suspension or
                    termination.
                  </li>
                </ul>

                <p className="text-white/80 mb-3">
                  <strong>4. Transparency</strong>
                  <br />
                  Kayse provides dashboards and alerts to help Subscribers track
                  usage per case. Benchmarks are designed so that over 95% of
                  firms will never encounter limits.
                </p>

                <p className="text-white/80 mb-3">
                  <strong>5. Applicability</strong>
                  <br />
                  This Fair Use Policy applies{" "}
                  <strong>only to PAYG subscriptions.</strong> Deferred Payment
                  (Deferral) subscriptions are billed separately for usage and
                  are not subject to this Policy.
                </p>

                <p className="text-white/80 mb-3">
                  5. Flexibility: PAYG provides Subscriber with the ability to
                  control costs by designating which cases are active or
                  inactive. Cases must be marked inactive inside the Kayse
                  system to stop monthly active case billing.
                </p>

                <p className="text-white/80 mb-4">
                  6. Deferred Eligibility: Subscriber law firms managing more
                  than 2,000 Active Cases under PAYG may apply for the Deferred
                  Payment option described in Section 2.9. Approval of such
                  option is at Kayse's sole discretion and requires a written,
                  exclusive invitation from Kayse.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  2.9. Optional Enterprise Plan/Deferred Billing; Case-Level
                  Pass-Through; Access & Audit (Firm-Level Program)
                </h3>

                <p className="text-white/80 mb-4">
                  (a) <strong>Optional Deferral</strong>. In KAYSE's discretion,
                  Subscriber may enroll in a Deferred Billing program (a
                  "Deferral"), under which fees for eligible Services tied to
                  identified matters are deferred and passed through to those
                  matters upon a resolution event (each a "Settlement Event,"
                  including settlement, judgment, award, or other monetary
                  recovery payable to the client and/or firm).
                </p>

                <p className="text-white/80 mb-4">
                  The Enterprise Plan always requires a minimum of 2,000 active
                  cases or a downgrade to PAYG will be required upon request, if
                  not resolved in an amicable way by both parties (Subscriber
                  and KAYSE).
                </p>

                <p className="text-white/80 mb-4">
                  (b) <strong>Case-Level Cost Entries (Required)</strong>. To
                  participate in a Deferral, Subscriber shall create and
                  maintain a case-level cost entry for the KAYSE charges in its
                  CRM/LPM for each covered matter within ten (10) days of the
                  earlier of (i) onboarding the matter or (ii) incurring the
                  charge. The entry must clearly identify "KAYSE" and the charge
                  description/amount.
                </p>

                <p className="text-white/80 mb-4">
                  If a CRM/LPM does not support such entries or an integration
                  is not enabled, Subscriber will upload a monthly spreadsheet
                  (CSV or XLSX) by the 10th calendar day of each month that
                  lists each covered matter, client name, matter identifier,
                  charge description, date, and amount for the prior month (the
                  "Deferral Register").
                </p>

                <p className="text-white/80 mb-4">
                  (c) <strong>Read-Only Access; Lightweight Audit</strong>. To
                  minimize status requests and keep the program low-touch,
                  Subscriber will:
                </p>

                <p className="text-white/80 mb-2 ml-4">
                  Provide one read-only user account to KAYSE in Subscriber's
                  CRM/LPM (or a secure portal export with equivalent fields if
                  an account is not feasible) for the limited purposes of (A)
                  viewing covered matters, the Deferral Register, and cost
                  entries; and (B) confirming Settlement Events and disbursement
                  status.
                </p>

                <p className="text-white/80 mb-4 ml-4">
                  Permit KAYSE, no more than once per calendar quarter (and
                  additionally upon a good-faith payment discrepancy), to
                  perform a lightweight audit limited to confirming (A) that
                  case-level entries exist, and (B) that resolved matters
                  including a KAYSE entry were remitted per this Section. Audits
                  will be remote where possible and designed not to disrupt
                  operations.
                </p>

                <p className="text-white/80 mb-4">
                  (d) <strong>Invoicing on Settlement; No Lien</strong>. Upon a
                  Settlement Event for any covered matter, Subscriber shall
                  remit the associated deferred KAYSE charges from the matter's
                  gross recovery or firm receipts within five (5) business days
                  of receipt of funds. For clarity: no lien, UCC filing,
                  security interest, or similar encumbrance is required or
                  created by this Section.
                </p>

                <p className="text-white/80 mb-4">
                  (e) <strong>Monthly Statements; Silence-is-Noticed</strong>.
                  KAYSE will issue a Monthly Deferral Statement showing (i) new
                  deferred charges by matter; (ii) cumulative deferred balances
                  by matter; and (iii) matters marked settled and amounts
                  remitted. Subscriber shall review and either confirm or
                  dispute in writing within fifteen (15) days. If no response is
                  received, the statement is deemed acknowledged for
                  administrative purposes only (and does not waive Subscriber's
                  right to raise good-faith errors later).
                </p>

                <p className="text-white/80 mb-4">
                  (f) <strong>Disbursement Safeguard</strong>. Prior to
                  disbursing any Settlement Event proceeds to a client or
                  co-counsel for a covered matter, Subscriber represents it has
                  checked its CRM/LPM or the current Monthly Deferral Statement
                  and will remit the corresponding KAYSE amount within the
                  5-business-day period above.
                </p>

                <p className="text-white/80 mb-4">
                  (g){" "}
                  <strong>Integration Preference; Spreadsheet Fallback</strong>.
                  The Parties will reasonably cooperate to (i) enable a direct
                  CRM/LPM integration to auto-create cost entries and update the
                  Deferral Register, or (ii) use the monthly spreadsheet
                  fallback described in subsection (b). Either approach
                  satisfies the entry requirement as long as it stays current.
                </p>

                <p className="text-white/80 mb-4">
                  (h) <strong>Credit Limits; Pauses</strong>. KAYSE may set or
                  adjust a firm-level deferral limit and may pause new deferrals
                  prospectively if (i) remittances on settled matters are more
                  than fifteen (15) days late after notice, or (ii) the limit is
                  reached. A pause will not affect non-deferred Services or
                  already-covered matters.
                </p>

                <p className="text-white/80 mb-4">
                  (i) <strong>Disputes & Corrections</strong>. Any specific
                  charge may be disputed in writing within sixty (60) days of
                  statement date. The Parties will cooperate in good faith to
                  resolve disputes, including by providing reasonable back-up
                  (dates, matter IDs, and descriptions).
                </p>

                <p className="text-white/80 mb-4">
                  (j) <strong>Administrative Charges</strong>. Amounts not
                  remitted within the time frames above may accrue an
                  administrative charge equal to the lesser of 1.0% per month or
                  the maximum rate permitted by law, calculated from the due
                  date until paid. This is not a penalty and is intended to
                  cover carrying and administration costs.
                </p>

                <p className="text-white/80 mb-4">
                  (k) <strong>Relationship-First Approach</strong>. This program
                  is intended to promote a low-friction partnership. The Parties
                  will implement it in good faith to avoid manual chasing,
                  reduce operational overhead, and ensure timely pass-through of
                  costs at resolution.
                </p>

                <p className="text-white/80 mb-8">
                  (l) <strong>Survival</strong>. This Section survives
                  termination with respect to covered matters opened prior to
                  termination and remains in effect until all deferred amounts
                  for those matters are satisfied.
                </p>

                {/* Service Description */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  3. SERVICE DESCRIPTION, DELIVERY AND ACCEPTANCE
                </h2>
                <p className="text-white/80 mb-4">
                  If the Service is delivered to Subscriber via a Display
                  Device, KAYSE will make the Service available to the
                  Subscriber upon successful sign-up and completion of the
                  subscription process. The Service will be deemed accepted upon
                  the Service Start Date. Any updates, bug fixes, or upgrades
                  ("Corrections") to the Service will be deemed accepted by the
                  Subscriber on the day such Corrections are delivered.
                </p>
                <p className="text-white/80 mb-8">
                  KAYSE will provide the Services based on the plan you select
                  when you subscribe to the Service. You can choose a plan that
                  includes one or more of KAYSE's offerings. The terms
                  associated with these plans will be clearly indicated at the
                  time of subscription or as updated on the KAYSE website.
                </p>

                {/* Limited License */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  4. LIMITED LICENSE; ALL RIGHTS RESERVED; COPYRIGHT; MARKS;
                  OWNERSHIP
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  4.1 Copyright
                </h3>
                <p className="text-white/80 mb-4">
                  Except as otherwise stated, the Service and all Content
                  (including but not limited to text, images, videos, software,
                  etc.) on the Site are the copyrighted works of KAYSE or its
                  third-party content suppliers and are protected by U.S. and
                  international copyright laws. You may download and print a
                  hard copy for personal use, provided that any copyright or
                  proprietary notices remain intact. However, you may not
                  otherwise copy, alter, distribute, reproduce, or transmit the
                  Content without KAYSE's prior written authorization or the
                  consent of applicable third parties. Unauthorized use may
                  violate copyright laws and other applicable regulations.
                </p>
                <p className="text-white/80 mb-3">
                  If you believe that any content on the Site infringes upon
                  your intellectual property rights, please contact us
                  immediately with all relevant information at Case Connect
                  Group LLC, 1400 Old Country Rd Suite 305 Westbury, NY 11590,
                  or via email at support@kayse.ai. Written claims concerning
                  copyright infringement must include the following information:
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  A physical or electronic signature of the person authorized to
                  act on behalf of the owner of the copyright interest;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  A description of the copyrighted work that you claim has been
                  infringed upon;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  A description of where the allegedly infringing material is
                  located on our site so we can find it
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Your address, telephone number, and e-mail address;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  A statement by you that you have a good-faith belief that the
                  disputed use is not authorized by the copyright owner, its
                  agent, or the law;
                </p>
                <p className="text-white/80 mb-8 ml-4">
                  A statement by you that the above information in your notice
                  is accurate and, under penalty of perjury, that you are the
                  copyright owner or authorized to act on the copyright owner's
                  behalf.
                </p>

                {/* Term and Termination */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  5. TERM; TERMINATION
                </h2>

                <p className="text-white/80 mb-3">
                  (a) TERM. The term of this Agreement will commence on the
                  Effective Date and will remain in effect for twelve months,
                  whereupon this Agreement shall automatically extend for
                  successive 12-month terms unless this Agreement is terminated
                  earlier by either party in accordance with Section 5(b).
                </p>

                <p className="text-white/80 mb-3">
                  (b) TERMINATION/SUSPENSION.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  1. By KAYSE or Subscriber. Either party may terminate this
                  Agreement after the first twelve-month period with an advanced
                  30-day notice; otherwise, the agreement shall renew pursuant
                  to Section 5(a).
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  2. By KAYSE Temporarily. KAYSE may suspend your access to the
                  KAYSE software and Website, upon email notice to you, if we
                  determine that: (i) you are in breach of any of the covenants
                  of this Agreement, including if you are delinquent on your
                  payment obligations; or, (ii) you have ceased to operate in
                  the ordinary course, made an assignment for the benefit of
                  creditors or similar dissolution of the company's assets, or
                  become the subject of any bankruptcy, reorganization,
                  liquidation, dissolution, or similar proceeding.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  3. By KAYSE. KAYSE may terminate this Agreement for cause upon
                  15 days advance notice to the Subscriber if there is a
                  material breach of default of this Agreement by the
                  Subscriber, unless Subscriber has cured the material breach or
                  default within the 15-day notice period.
                </p>

                <p className="text-white/80 mb-3">(c) EFFECT OF TERMINATION.</p>
                <p className="text-white/80 mb-3">
                  Upon termination of this Agreement:
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  1. All Subscribers rights under this Agreement immediately
                  terminate;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  2. Subscriber remains responsible for any and all fees and
                  charges it shall have incurred through the date of
                  termination;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  3. Subscriber is not entitled to a refund of any prepaid fees
                  under this Agreement which are and shall remain the property
                  of KAYSE;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  4. Sections 4, 7, 8, 9, 10, and 11 will continue to apply in
                  accordance with their terms.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  5. Any additional post-termination assistance from KAYSE is
                  subject to mutual written agreement by KAYSE and Subscriber.
                </p>
                <p className="text-white/80 mb-4">
                  KAYSE will not, under any circumstances, issue refunds for
                  early contract cancellation.
                </p>
                <p className="text-white/80 mb-8">
                  Upon termination, Subscriber's data will be retained for
                  fifteen (15) days to allow for retrieval upon written request.
                  After this period, all data will be permanently deleted unless
                  otherwise required by law.
                </p>

                {/* Restrictions and Requirements */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  6. RESTRICTIONS AND REQUIREMENTS
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  6.1 Usage Restrictions
                </h3>
                <p className="text-white/80 mb-3">
                  In connection with your use of the Service, you agree not to:
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Upload or transmit any content that is unlawful, harmful,
                  threatening, abusive, harassing, defamatory, vulgar, obscene,
                  or otherwise objectionable.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Impersonate any person or entity, including any KAYSE
                  representative, or falsely state your affiliation with any
                  person or entity.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Upload or transmit any material you do not have the right to
                  reproduce or display.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Upload files containing viruses, malware, or any harmful
                  software.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Upload unsolicited advertising or promotional materials.
                </p>
                <p className="text-white/80 mb-3 ml-4">
                  Violate any applicable law, or upload material infringing on
                  any third-party rights (e.g., copyright or trademark).
                </p>
                <p className="text-white/80 mb-4">
                  Violations of these restrictions may result in the immediate
                  suspension or termination of your access to the Service,
                  without notice, and may subject you to further legal action.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  6.2 Acceptable Use Policy
                </h3>
                <p className="text-white/80 mb-3">
                  By using the Service, you agree that the Services are for
                  professional use only and that your use shall not include any
                  of the following:
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Attempting to break or bypass any security mechanisms of the
                  Service.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Using the Service for unsolicited marketing messages or
                  broadcasts (i.e., spam).
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Accessing life-line services or emergency services such as 911
                  through the Service.
                </p>
                <p className="text-white/80 mb-4 ml-4">
                  Engaging in illegal activities, fraud, or any other malicious
                  purpose.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  6.3 Right to Monitor
                </h3>
                <p className="text-white/80 mb-8">
                  KAYSE reserves the right to monitor your use of the Service,
                  though we do not actively do so under normal circumstances.
                  However, we may monitor usage at any time if we believe such
                  monitoring is necessary due to potential violations of these
                  Terms of Use or applicable laws.
                </p>

                {/* Disclaimer */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  7. DISCLAIMER
                </h2>
                <p className="text-white/80 mb-8">
                  KAYSE'S SERVICES ARE PROVIDED "AS IS". EXCEPT TO THE EXTENT
                  PROHIBITED BY LAW, KAYSE AND KAYSE'S AFFILIATES AND LICENSORS
                  MAKE NO WARRANTIES (EXPRESS, IMPLIED, STATUTORY OR OTHERWISE)
                  WITH RESPECT TO THE SERVICES, AND DISCLAIM ALL WARRANTIES
                  INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, SATISFACTORY QUALITY,
                  NON-INFRINGEMENT, AND QUIET ENJOYMENT, AND ANY WARRANTIES
                  ARISING OUT OF ANY COURSE OF DEALING OR TRADE USAGE. WE DO NOT
                  WARRANT OR REPRESENT THAT THE SERVICES WILL BE UNINTERRUPTED,
                  ACCURATE, ERROR FREE, OR THAT ANY CONTENT WILL BE SECURE OR
                  NOT LOST OR ALTERED. YOU ACCEPT THAT AI IS A DEVELOPING
                  TECHNOLOGY AND AS SUCH "HALLUCINATIONS", "MISFIRES", AND OTHER
                  INACCURACIES CAN OCCUR. YOU ACCEPT AND AGREE THAT ANY USE OF
                  OUTPUTS FROM OUR SERVICE IS AT YOUR SOLE RISK AND YOU WILL NOT
                  RELY ON OUTPUT AS A SOLE SOURCE OF TRUTH OR FACTUAL
                  INFORMATION, OR AS A SUBSTITUTE FOR PROFESSIONAL ADVICE. KAYSE
                  DOES NOT WARRANT OR REPRESENT THAT THE FEES CHARGED UNDER THIS
                  AGREEMENT ARE RECOVERABLE OR AWARDABLE TO A PREVAILING
                  LITIGANT AS TAXABLE COSTS OR THAT SUCH FEES MAY BE ETHICALLY
                  PASSED ALONG TO SUBSCRIBER'S CLIENTS.
                </p>

                {/* Indemnification */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  8. INDEMNIFICATION
                </h2>
                <p className="text-white/80 mb-4">
                  (a) Subscriber Infringement Indemnity. Subscriber, at its
                  expense, will defend, indemnify, and hold Licensor harmless
                  from and against any and all third party claims for damages
                  (whether ordinary, direct, indirect, incidental, special,
                  consequential, or exemplary), judgments, liabilities, fines,
                  penalties, losses, claims, costs, and expenses including,
                  without limitation, reasonable attorneys' fees, finally
                  awarded by a court of competent jurisdiction, after all rights
                  of appeal are exhausted, against Licensor which directly
                  relate to a claim, action, lawsuit, or proceeding made or
                  brought against Licensor by a third party alleging the
                  infringement or violation of such third party's registered
                  patent, trade secret, copyright, or trademark (each a
                  "Licensor Claim") by way of Licensor's use of any Subscriber
                  Content that Subscriber provides to Licensor and Licensor uses
                  in the provision of any Services.
                </p>
                <p className="text-white/80 mb-8">
                  (b) Licensor Infringement Indemnity. Licensor, at its expense,
                  will defend, indemnify, and hold Subscriber harmless from and
                  against any and all third party claims for damages (whether
                  ordinary, direct, indirect, incidental, special,
                  consequential, or exemplary), judgments, liabilities, fines,
                  penalties, losses, claims, costs, and expenses including,
                  without limitation, reasonable attorneys' fees, finally
                  awarded by a court of competent jurisdiction, after all rights
                  of appeal are exhausted, against Subscriber which directly
                  relate to a claim, action, lawsuit, or proceeding made or
                  brought against Subscriber by a third party alleging the
                  infringement or violation of such third party's registered
                  patent, trade secret, copyright, or trademark (each a
                  "Subscriber Claim") by way of Subscriber's use of the Service
                  that Licensor provides to Subscriber.
                </p>

                {/* Limitation of Liability */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  9. LIMITATION OF LIABILITY
                </h2>
                <p className="text-white/80 mb-4">
                  LICENSOR AND ITS SUBSIDIARIES, AFFILIATES, SHAREHOLDERS,
                  DIRECTORS, OFFICERS, EMPLOYEES AND LICENSORS ("THE PARTIES")
                  WILL NOT BE LIABLE (JOINTLY OR SEVERALLY) TO SUBSCRIBER,
                  AUTHORIZED USERS, OR ANY THIRD PARTY, FOR INDIRECT,
                  CONSEQUENTIAL, SPECIAL, INCIDENTAL, PUNITIVE, OR EXEMPLARY
                  DAMAGES, INCLUDING, WITHOUT LIMITATION, LOST PROFITS, LOST
                  SAVINGS AND LOST REVENUES (COLLECTIVELY, THE "EXCLUDED
                  DAMAGES"), WHETHER OR NOT CHARACTERIZED IN NEGLIGENCE, TORT,
                  CONTRACT, OR OTHER THEORY OF LIABILITY, EVEN IF ANY OF THE
                  PARTIES HAVE BEEN ADVISED OF THE POSSIBILITY OF OR COULD HAVE
                  FORESEEN ANY OF THE EXCLUDED DAMAGES, AND IRRESPECTIVE OF ANY
                  FAILURE OF AN ESSENTIAL PURPOSE OF A LIMITED REMEDY. IN NO
                  EVENT WILL THE LIABILITY OF THE PARTIES ARISING OUT OF ANY
                  CLAIM RELATED TO THIS AGREEMENT EXCEPT FOR INTELLECTUAL
                  PROPERTY INFRINGEMENT OR THE SUBJECT MATTER HEREOF EXCEED THE
                  AGGREGATE AMOUNT ACTUALLY PAID BY SUBSCRIBER HEREUNDER, IF
                  ANY, IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT
                  GIVING RISE TO SUCH CLAIM. IF ANY APPLICABLE AUTHORITY HOLDS
                  ANY PORTION OF THIS SECTION TO BE UNENFORCEABLE, THEN THE
                  PARTIES' LIABILITY WILL BE LIMITED TO THE FULLEST POSSIBLE
                  EXTENT PERMITTED BY APPLICABLE LAW. SUBSCRIBER WILL INDEMNIFY,
                  DEFEND, AND HOLD HARMLESS LICENSOR FOR ANY LOSS, DAMAGE, OR
                  COST IN CONNECTION WITH ANY CLAIM OR ACTION WHICH MAY BE
                  BROUGHT BY ANY THIRD PARTY AGAINST LICENSOR RELATING TO ANY
                  BREACH OF THIS AGREEMENT BY SUBSCRIBER. KAYSE SHALL NOT BE
                  LIABLE FOR ANY DAMAGES CAUSED BY THIRD-PARTY SERVICE PROVIDERS
                  ENGAGED TO PERFORM OR ASSIST WITH THE SERVICES PROVIDED UNDER
                  THIS AGREEMENT.
                </p>
                <p className="text-white/80 mb-8">
                  In addition to the above warranty disclaimers, in no event
                  will (A) KAYSE be liable for any consequential, exemplary,
                  special, or incidental damages, including (but not limited to)
                  any damages for lost profits, revenue, data, marketing and/or
                  advertising expenditure, or other economic advantage, arising
                  from or relating to your use of or the inability to use the
                  Services, EVEN IF KAYSE KNEW OR SHOULD HAVE KNOWN OF THE
                  POSSIBILITY OF SUCH DAMAGES, and (B) KAYSE's total cumulative
                  liability arising from or related to the Services, whether in
                  contract or tort or otherwise, exceed the GREATER OF one
                  hundred dollars ($100.00) or the purchase price or fees paid
                  by you during the preceding one-month period to KAYSE, its
                  subsidiaries or its affiliates in connection with the use of
                  the Services. In no event will KAYSE be liable for more than
                  five hundred dollars ($500.00), EVEN IF any error, misprint,
                  or non-functioning Service is due in whole or part to an
                  action or omission by an agent and/or employee of KAYSE.
                </p>

                {/* Confidentiality */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  10. CONFIDENTIALITY
                </h2>
                <p className="text-white/80 mb-4">
                  In the course of performing this Agreement, the parties may
                  disclose to each other Confidential Information. "Confidential
                  Information" shall mean any and all non-public technical and
                  non-technical information provided by either party to the
                  other, including but not limited to (i) patent and patent
                  applications; (ii) trades secrets; and (iii) proprietary
                  information including but not limited to know-how, processes,
                  software programs, software source documents, and formulae
                  related to the current, future and proposed products and
                  services of each of the parties, and including, without
                  limitation, their respective information concerning any and
                  all client and client related information, research,
                  experimental work, development, design details, and
                  specifications, engineering, procurement requirements,
                  purchasing, manufacturing, Subscriber lists, financial
                  information, investors, employees, business and contractual
                  relationships, business forecasts, sales, merchandising,
                  marketing, plans and information the disclosing party provides
                  regarding third parties. All Confidential Information shall
                  remain the sole property of the disclosing party, and the
                  receiving party shall have no interest in or rights with
                  respect thereto except as expressly set forth in this
                  Agreement. Each party agrees: (i) not to use any Confidential
                  Information of the other party for any purpose except in the
                  performance of its obligations under this Agreement or as
                  otherwise expressly permitted hereunder; (ii) to disclose such
                  Confidential Information only to employees (or third party
                  subcontractors permitted under this Agreement) who have a need
                  to know such Confidential Information for purposes of this
                  Agreement and who are under a duty of confidentiality no less
                  restrictive that set forth herein; (iii) to protect such
                  Confidential Information from unauthorized use, access or
                  disclosure in the same manner that it protects its own similar
                  Confidential Information, but, in no event with less care that
                  a reasonably prudent business would exercise; and (iv) to
                  promptly notify the other party of any actual or potential
                  unauthorized access to or use of Confidential Information. The
                  foregoing restrictions on disclosure shall not apply with
                  respect to any information that (i) was already in the parties
                  possession before disclosure; (ii) was or has become publicly
                  available through no fault of the receiving party; (iii) has
                  been received from a third party which the receiving party
                  believed in good faith was legally authorized to hold and
                  disclose such information; or (iv) is required to be disclosed
                  pursuant to law or legal process; provided that in such event
                  receiving party shall immediately notify disclosing party of
                  such requirement and provides reasonable assistance in any
                  efforts to protect the Information from disclosure. This
                  Section 10 will survive any termination of the Agreement for a
                  period of five (5) years with respect to non-technical
                  information and in perpetuity with respect to information,
                  including the software, the documentation thereof, any code,
                  and any and all client and client related information.
                </p>
                <p className="text-white/80 mb-8">
                  Confidential information not of a technical nature will remain
                  confidential for a period of 3 years post-termination.
                </p>

                {/* Miscellaneous */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  11. MISCELLANEOUS
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.1 Amendments
                </h3>
                <p className="text-white/80 mb-4">
                  Except as otherwise provided herein, this Agreement shall only
                  be amended, modified and supplemented only by a written
                  agreement signed by all parties. Notwithstanding the
                  foregoing, we are continuously working to develop and improve
                  our Services. Accordingly, we may update these terms from time
                  to time, as provided herein.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.2 Entire Agreement
                </h3>
                <p className="text-white/80 mb-4">
                  This Agreement, including the schedules and exhibits hereto
                  and the documents, annexes, attachments, certificates and
                  instruments referred to herein and therein, embodies the
                  entire agreement and understanding of the parties hereto in
                  respect of the agreements and transactions contemplated by
                  this Agreement and supersedes all prior agreements,
                  representations, warranties, promises, covenants,
                  arrangements, communications and understandings, oral or
                  written, express or implied, between the parties with respect
                  to such transactions. There are no agreements,
                  representations, warranties, promises, covenants, arrangements
                  or understandings between the parties with respect to such
                  transactions, other than those expressly set forth or referred
                  to herein.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.3 Severability
                </h3>
                <p className="text-white/80 mb-4">
                  Whenever possible, each provision of this Agreement shall be
                  interpreted in such manner as to be effective and valid under
                  applicable law, but if any provision of this Agreement is held
                  to be invalid, illegal or unenforceable in any respect under
                  any applicable law or rule in any jurisdiction, such
                  invalidity, illegality or unenforceability shall not affect
                  the validity, legality or enforceability of any other
                  provision of this Agreement in such jurisdiction, but this
                  Agreement shall be reformed, construed and enforced in such
                  jurisdiction as if such invalid, illegal or unenforceable
                  provision had never been contained herein.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.4 Successors and Assigns
                </h3>
                <p className="text-white/80 mb-4">
                  Subscriber will not assign this Agreement, or delegate or
                  sublicense any of its rights under this Agreement, without
                  KAYSE's prior written consent. Any assignment or transfer in
                  violation of this Section 11.4 will be void. Subject to the
                  foregoing, this Agreement and all of the provisions hereof
                  shall be binding upon and inure to the benefit of the parties
                  hereto and their respective heirs, legal representatives,
                  successors and permitted assigns.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.5 Remedies
                </h3>
                <p className="text-white/80 mb-4">
                  The parties hereto agree and acknowledge that money damages
                  would not be an adequate remedy for any breach of the
                  provisions of this Agreement and that the any party may in its
                  sole discretion apply to any court of law or equity of
                  competent jurisdiction for specific performance and/or
                  injunctive relief (without posting a bond or other security)
                  in order to enforce or prevent any violation of the provisions
                  of this Agreement.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.6 Notices
                </h3>
                <p className="text-white/80 mb-4">
                  Any notice provided for in this Agreement shall be in writing
                  and shall be either personally delivered, or mailed first
                  class mail (postage prepaid) or sent by reputable overnight
                  courier service (charges prepaid) to KAYSE at the address set
                  forth below and to any other recipient at the address as
                  indicated by KAYSE's account records, or at such address or to
                  the attention of such other person as the recipient party has
                  specified by prior written notice to the sending party.
                  Notices shall be deemed to have been given hereunder when
                  delivered personally, three days after deposit in the U.S.
                  mail and one day after deposit with a reputable overnight
                  courier service. KAYSE's address is: Case Connect Group LLC,
                  C/O KAYSE, 1400 Old Country Rd, Suite 305, Westbury, NY 11590.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.7 Business Days
                </h3>
                <p className="text-white/80 mb-4">
                  If any time period for giving notice or taking action
                  hereunder expires on a day which is a Saturday, Sunday or
                  legal holiday in the state in which the KAYSE's chief
                  executive office is located, the time period shall
                  automatically be extended to the business day immediately
                  following such Saturday, Sunday or legal holiday.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.8 Descriptive Headings
                </h3>
                <p className="text-white/80 mb-4">
                  The descriptive headings of this Agreement are inserted for
                  convenience only and do not constitute a part of this
                  Agreement.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.9 Delays or Omissions; Waiver
                </h3>
                <p className="text-white/80 mb-4">
                  No delay or omission to exercise any right, power or remedy
                  accruing to any party hereto, upon any breach or default of
                  any other party under this Agreement, shall impair any such
                  right, power or remedy of such party nor shall it be construed
                  to be a waiver of, or estoppel with respect to, any such
                  breach or default, or an acquiescence therein, or of or in any
                  similar breach or default thereafter occurring; nor shall any
                  waiver of any single breach or default be deemed a waiver of
                  any other breach or default theretofore or thereafter
                  occurring. Any waiver, permit, consent or approval of any kind
                  or character on the part of any party hereto of any breach or
                  default under this Agreement, or a waiver on the part of any
                  party of any provisions, obligations, covenants, agreements or
                  conditions of this Agreement must be made in writing and shall
                  be effective only to the extent specifically set forth in such
                  writing. All remedies, either under this Agreement or by law
                  or otherwise afforded to any party, shall be cumulative and
                  not alternative. Whenever this Agreement requires or permits
                  consent by or on behalf of any party hereto, such consent
                  shall be given in writing.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.10 Authority
                </h3>
                <p className="text-white/80 mb-4">
                  Each individual executing this Agreement on behalf of a
                  corporation, limited liability company, professional
                  association or other entity and hereby warrants that he or she
                  is authorized to do so and that this Agreement constitutes the
                  legally binding obligation of the corporation, limited
                  liability company, professional association or other entity
                  that the individual represents.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.11 Force Majeure
                </h3>
                <p className="text-white/80 mb-4">
                  KAYSE and its affiliates will not be liable for any delay or
                  failure to perform any obligation under this Agreement where
                  the delay or failure results from any cause beyond its
                  respective control, including acts of God, pandemics,
                  epidemics, labor disputes, or other industrial disturbances,
                  systemic electrical, telecommunications, or other utility
                  failures, earthquakes, hurricanes, storms or other elements of
                  nature, blockages, embargoes, riots, acts or orders of
                  government, acts of terrorism, or war.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.12 Independent Contractors
                </h3>
                <p className="text-white/80 mb-4">
                  Subscriber and KAYSE are independent contractors, and neither
                  party, nor their respective affiliates, is an agent of the
                  other for any purpose or has the authority to bind the other.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.13 No Third-Party Beneficiaries
                </h3>
                <p className="text-white/80 mb-4">
                  This Agreement does not create any third-party beneficiary
                  rights in any individual or entity that is not a party to this
                  Agreement. You shall not sublicense or allow another company
                  or individual to use KAYSE without KAYSE written consent.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.14. Not a Law Firm
                </h3>
                <p className="text-white/80 mb-4">
                  KAYSE is not a law firm and does not provide legal advice
                  whatsoever. Subscriber agrees that KAYSE is not providing any
                  legal advice or legal services by or through its Website or by
                  any other means, and, Subscriber acknowledges that and will
                  govern itself accordingly. Subscriber hereby acknowledges that
                  the Website has been prepared for informational and reference
                  purposes only and is not intended to provide legal advice.
                  Subscriber should not rely on any information contained in the
                  Website regarding any legal issues.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.15 Governing Law
                </h3>
                <p className="text-white/80 mb-4">
                  This Agreement shall be exclusively governed by, and construed
                  in accordance with, the laws of the State of New York, without
                  giving effect to any choice of law or conflict of law rules or
                  provisions (whether of the State of New York or any other
                  jurisdiction) that would cause the application of the laws of
                  any jurisdiction other than the State of New York. The venue
                  for any proceedings hereunder shall be exclusively in the
                  County of New York, New York.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.16 Dispute Resolution
                </h3>
                <p className="text-white/80 mb-4">
                  In the event of any dispute arising out of any of the terms
                  contained in this Agreement (a "Dispute"), you agree to the
                  following:
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded mb-4">
                  <p className="text-white font-semibold">
                    THESE TERMS REQUIRE THAT ALL DISPUTES BE RESOLVED THROUGH
                    INDIVIDUAL MEDIATION AND ARBITRATION, RATHER THAN JURY
                    TRIALS OR CLASS ACTION LAWSUITS.
                  </p>
                </div>

                <p className="text-white/80 mb-3">
                  (a) INFORMAL DISPUTE RESOLUTION. We would like to understand
                  and try to address your concerns prior to formal legal action.
                  Before either of us files a claim against the other, we both
                  agree to try to resolve the Dispute informally. You agree to
                  do so by sending us notice. We will do so by sending you
                  notice to the email address associated with your account. If
                  we are unable to resolve a Dispute within 60 days, either of
                  us has the right to initiate arbitration. We also both agree
                  to attend an individual settlement conference if either party
                  requests one during this time. Any statute of limitations will
                  be tolled during this informal resolution process.
                </p>

                <p className="text-white/80 mb-3">
                  (b) MEDIATION: Prior to the institution of any legal action,
                  including Arbitration, the parties agree to participate, in
                  good faith, in a mediation conference through the American
                  Arbitration Association (AAA) in accordance with the AAA's
                  Commercial Arbitration Rules and Mediation Procedures. The
                  parties shall share the cost of the mediator equally. The
                  mediation shall be scheduled within 45 days from the date that
                  either party submits a written notice requesting the mediation
                  conference to the other party. The mediation conference shall
                  be conducted in the County of New York, New York or at another
                  mutually agreed location.
                </p>

                <p className="text-white/80 mb-3">
                  (c) BINDING ARBITRATION: In the event either party does not
                  agree or fails to participate in a mediation conference,
                  pursuant to paragraph (a) above, the parties agree to submit
                  any and all disputes arising out of these by-laws to binding
                  arbitration to be conducted by National Arbitration and
                  Mediation ("NAM") under its Comprehensive Dispute Resolution
                  Rules and Procedures and/or Supplemental Rules for Mass
                  Arbitration Filings. The arbitration shall be conducted within
                  60 days from the date of the impasse of the mediation
                  conference, or within 60 days from the date either party
                  submits the request through the NAM.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded mb-4">
                  <p className="text-white font-semibold">
                    THESE TERMS REQUIRE THAT ALL DISPUTES BE RESOLVED THROUGH
                    INDIVIDUAL ARBITRATION.
                  </p>
                </div>
                <p className="text-white/80 mb-3">
                  This section does not require informal dispute resolution or
                  arbitration of claims for injunctive or other equitable relief
                  to stop unauthorized use or abuse of the Services, restrictive
                  covenants herein, or intellectual property infringement or
                  misappropriation.
                </p>

                <p className="text-white/80 mb-3">
                  (d). ENFORCING ARBITRATION. Notwithstanding the foregoing,
                  either party may seek an order compelling arbitration with the
                  County of New York, New York, and waive the defenses of lack
                  of personal and/or subject matter jurisdiction and/or forum of
                  non-convenience.
                </p>

                <p className="text-white/80 mb-3">
                  (e). PREVAILING PARTY ATTORNEYS' FEES: In the event the either
                  party obtains a judgment or arbitration award, the prevailing
                  party shall recover reasonable cost and attorney's fees from
                  the non-prevailing party including appellate fees and "fees
                  for fees".
                </p>

                <p className="text-white/80 mb-3">
                  (f). CLASS AND JURY TRIAL WAIVERS. Disputes must be brought on
                  an individual basis only, and may not be brought as a
                  plaintiff or class member in any purported class,
                  consolidated, or representative proceeding. Class
                  arbitrations, class actions, and representative actions are
                  prohibited. Only individual relief is available. The parties
                  agree to sever and litigate in court any request for public
                  injunctive relief after completing arbitration for the
                  underlying claim and all other claims. This does not prevent
                  either party from participating in a class-wide settlement.
                  The parties knowingly and irrevocably waive any right to trial
                  by jury in any action, proceeding, or counterclaim.
                </p>

                <p className="text-white/80 mb-4">
                  (g). Batch arbitration. If 25 or more claimants represented by
                  the same or similar counsel file demands for arbitration
                  raising substantially similar Disputes within 90 days of each
                  other, then you and KAYSE agree that National Arbitration and
                  Mediation ("NAM") under its Comprehensive Dispute Resolution
                  Rules and Procedures and/or Supplemental Rules for Mass
                  Arbitration Filings will administer them in batches of up to
                  50 claimants each ("Batch"), unless there are less than 50
                  claimants in total or after batching, which will comprise a
                  single Batch. NAM will administer each Batch as a single
                  consolidated arbitration with one arbitrator, one set of
                  arbitration fees, and one hearing held by videoconference or
                  in a location decided by the arbitrator for each Batch. If any
                  part of this section is found to be invalid or unenforceable
                  as to a particular claimant or Batch, it will be severed and
                  arbitrated in individual proceedings.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  11.17 Third-Party Legal Process
                </h3>
                <p className="text-white/80 mb-4">
                  In the event that a subpoena, lawsuit, or other legal process
                  (collectively, "subpoena") commenced by a third party is
                  served upon KAYSE in connection with this Agreement or the
                  Services provided pursuant to this Agreement is served upon
                  KAYSE, Subscriber agrees to pay or reimburse KAYSE, in KAYSE's
                  sole discretion, for all legal fees and costs incurred by
                  KAYSE in connection with such subpoena and, further, to
                  cooperate with KAYSE in any lawful effort by KAYSE to contest,
                  in whole or in part, the legal validity of such subpoena.
                </p>

                <p className="text-white/80 mb-8">
                  Calls and Messages. The Subscriber voluntarily and expressly
                  authorizes KAYSE to contact Subscriber at all telephone
                  numbers provided by Subscriber to KAYSE or used by User by
                  calls placed with an automatic telephone-dialing system or any
                  system capable of storing and automatically dialing telephone
                  numbers; prerecorded, artificial, or ringless-voicemail
                  messages; and SMS/MMS text messages, for the purpose of
                  delivering advertisements or telemarketing related to KAYSE's
                  products or services. Subscriber understands that agreeing to
                  the instant provision is not a condition of purchasing any
                  goods or services from KAYSE. Subscriber may complete any
                  transaction with KAYSE even if Subscriber chooses not to agree
                  to the instant provision. Subscriber may revoke this consent
                  at any time and by any reasonable means, including but not
                  limited to by replying "STOP" to any text message, through the
                  App, or by any other means provided on KAYSE's website. KAYSE
                  will honor any revocation within a reasonable time, not to
                  exceed ten (10) days. Standard carrier message and data rates
                  may apply for text messages. Message frequency will vary based
                  on Subscriber engagement. Subscriber agrees that an electronic
                  copy of this clause, including any electronic or digital
                  signature, shall be deemed an original and admissible record
                  of Subscriber's consent under the Telephone Consumer
                  Protection Act, 47 U.S.C. § 227, and its implementing
                  regulations.
                </p>

                {/* Content */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  12. CONTENT: USER-GENERATED CONTENT POLICY AND LICENSE AND USE
                  OF CONTRIBUTIONS
                </h2>

                <h3 className="text-xl font-semibold text-white mb-3">
                  12.1 User-Generated Content Policy:
                </h3>
                <p className="text-white/80 mb-3">
                  KAYSE may provide opportunities for you to engage in
                  conversations, contribute to blogs, participate in message
                  boards, online forums, and similar features. You may also be
                  given the option to create, submit, post, display, transmit,
                  or share content with us or on the Service. This may include,
                  but is not limited to, text, writings, videos, audio, photos,
                  graphics, comments, suggestions, personal information, or
                  other materials (collectively referred to as "Contributions").
                </p>
                <p className="text-white/80 mb-3">
                  Contributions may be visible to other users of the Service and
                  through third-party websites, and as such, any content you
                  share may be treated as non-confidential and non-proprietary.
                  By submitting Contributions, you affirm and warrant that:
                </p>
                <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                  <li>
                    Upon request, we will remove or anonymize user-generated
                    content, provided that such removal does not conflict with
                    legal obligations or operational necessities. User-generated
                    content will be retained for 30 days following account
                    termination before permanent deletion.
                  </li>
                  <li>
                    The creation, distribution, transmission, public display, or
                    performance, as well as the access, download, or copying of
                    your Contributions, do not and will not infringe upon any
                    proprietary rights, including, but not limited to,
                    copyright, patent, trademark, trade secret, or moral rights
                    of any third party.
                  </li>
                  <li>
                    You are the creator, owner, or have the necessary licenses,
                    rights, consents, releases, and permissions to use your
                    Contributions and to authorize us, the Service, and other
                    users of the Service to use them in accordance with these
                    Terms of Use.
                  </li>
                  <li>
                    You have secured the written consent, release, or permission
                    of every identifiable individual featured in your
                    Contributions, allowing their name or likeness to be used as
                    intended by the Service and these Terms of Use.
                  </li>
                  <li>
                    Your Contributions are not false, inaccurate, or misleading.
                  </li>
                  <li>
                    Your Contributions are not obscene, offensive, lewd,
                    violent, harassing, libelous, slanderous, or otherwise
                    objectionable (as determined by us).
                  </li>
                  <li>
                    Your Contributions do not ridicule, mock, disparage,
                    intimidate, or abuse any individual or group.
                  </li>
                  <li>
                    Your Contributions are not intended to harass, threaten
                    (legally), or promote violence against any person or group.
                  </li>
                  <li>
                    Your Contributions comply with all applicable laws,
                    regulations, and rules.
                  </li>
                  <li>
                    Your Contributions do not infringe upon the privacy or
                    publicity rights of any third party.
                  </li>
                  <li>
                    Your Contributions do not solicit personal information from
                    or exploit individuals under the age of 18 in any sexual or
                    violent manner.
                  </li>
                  <li>
                    Your Contributions comply with all applicable laws and
                    regulations meant to protect minors.
                  </li>
                  <li>
                    Your Contributions do not include any offensive remarks
                    related to race, national origin, gender, sexual
                    orientation, or physical disability.
                  </li>
                  <li>
                    Your Contributions do not link to any material that violates
                    these Terms of Use or applicable laws or regulations.
                  </li>
                  <li>
                    Both parties agree to comply with all applicable local,
                    state, and federal laws, including those regulating legal
                    services and claims management.
                  </li>
                </ul>
                <p className="text-white/80 mb-4">
                  Any use of the Service that violates the above conditions is
                  considered a breach of these Terms of Use and may result in
                  suspension or termination of your access to the Service.
                </p>
                <p className="text-white/80 mb-3">
                  Artificial intelligence and machine learning are rapidly
                  evolving fields of study. We are constantly working to improve
                  our Services to make them more accurate, reliable, safe, and
                  beneficial. Given the probabilistic nature of machine
                  learning, use of our Services may, in some situations, result
                  in Output that does not accurately reflect real people,
                  places, or facts.
                </p>
                <p className="text-white/80 mb-3">
                  When you use our Services you understand and agree:
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Output may not always be accurate. You should not rely on
                  Output from our Services as a sole source of truth or factual
                  information, or as a substitute for professional advice.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  You must evaluate Output for accuracy and appropriateness for
                  your use case, including using human review as appropriate,
                  before using or sharing Output from the Services.
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  You must not use any Output relating to a person for any
                  purpose that could have a legal or material impact on that
                  person, such as making credit, educational, employment,
                  housing, insurance, legal, medical, or other important
                  decisions about them.
                </p>
                <p className="text-white/80 mb-4 ml-4">
                  Our Services may provide incomplete, incorrect, or offensive
                  Output that does not represent KAYSE's views. If Output
                  references any third party products or services, it doesn't
                  mean the third party endorses or is affiliated with KAYSE.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  12.2 Ownership and License of Service Data and Contributions
                </h3>
                <p className="text-white/80 mb-4">
                  You shall own your Service Data, which will be maintained in
                  accordance with our Privacy Notice. However, KAYSE is free to
                  use any ideas, concepts, know-how, feedback, suggestions, or
                  techniques contained in any communication you send to us via
                  the Service or by any other means for any purpose whatsoever.
                </p>
                <p className="text-white/80 mb-4">
                  When you submit any material or information protected by
                  intellectual property or other rights (e.g., Service Data,
                  photos, videos, articles, etc.) to the Service, you represent,
                  warrant, and covenant that you have the necessary rights to
                  disclose, copy, and display such information. You also grant
                  KAYSE a non-exclusive, transferable, sub-licensable,
                  royalty-free, fully-paid, worldwide license to use any such
                  content you post on or in connection with the Service. This
                  license allows us to host, use, copy, reproduce, disclose,
                  sell, resell, publish, broadcast, retitle, archive, store,
                  cache, publicly perform, publicly display, reformat,
                  translate, transmit, excerpt (in whole or in part), and
                  distribute your Contributions (including, but not limited to,
                  your image and voice) for any purpose, whether commercial,
                  advertising, or otherwise. We may also prepare derivative
                  works from your Contributions or incorporate them into other
                  works and authorize sublicenses of these rights. This license
                  applies to any format, media, or technology currently known or
                  later developed, and includes our right to use your name,
                  personal details, and commercial images you provide. You waive
                  all moral rights to your Contributions and confirm that no
                  moral rights have been asserted in them.
                </p>
                <p className="text-white/80 mb-4">
                  Please note that we do not claim ownership over your
                  Contributions. You retain full ownership, and any intellectual
                  property or proprietary rights associated with your
                  Contributions. However, we are not responsible for any
                  statements or representations you make in your Contributions
                  to the Service. You alone are accountable for your
                  Contributions, and by submitting them, you agree to release us
                  from any legal claims related to your content. We have no
                  obligation to monitor the content of your Contributions.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  12.3 Rights to Modify or Remove Contributions
                </h3>
                <p className="text-white/80 mb-3">
                  We reserve the right, at our sole discretion, to:
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Edit, redact, or modify any Contributions;
                </p>
                <p className="text-white/80 mb-2 ml-4">
                  Re-categorize Contributions to fit more appropriate sections
                  on the Service;
                </p>
                <p className="text-white/80 mb-4 ml-4">
                  Pre-screen or delete any Contributions at any time and for any
                  reason, without prior notice.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">
                  12.4 Perpetual License to Use Anonymized Data
                </h3>
                <p className="text-white/80 mb-8">
                  Notwithstanding the above, you hereby grant KAYSE a
                  non-exclusive, perpetual, irrevocable right and license to
                  use, copy, transmit, modify, and display Service Data,
                  provided that such data is (a) collected, used, and
                  disseminated in aggregated and anonymized form; and (b) only
                  used for internal business services and for improving the
                  Services.
                </p>

                {/* Service Level */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  13. SERVICE LEVEL AND SUPPORT SERVICES AGREEMENT
                </h2>
                <p className="text-white/80 mb-4">
                  Licensor will provide the Service to Subscriber, not including
                  scheduled maintenance time. Scheduled maintenance time will
                  not exceed ten (10) hours a month and will take place during
                  Non-Peak Hours whenever possible. "Non-Peak Hours" will be the
                  hours between 12:00 AM and 7:00 AM EST.
                </p>
                <p className="text-white/80 mb-4">
                  In the event that scheduled maintenance exceeds the
                  agreed-upon limit, Subscriber may be entitled to a prorated
                  service credit, to be applied to future billing periods.
                </p>
                <p className="text-white/80 mb-8">
                  During the Term and any renewal term of the Agreement,
                  Licensor will make available a technical point of contact for
                  Subscriber technical support inquiries which can be accessed
                  by emailing support@kayse.ai.
                </p>

                {/* Contact */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                  14. HOW TO CONTACT US
                </h2>
                <p className="text-white/80 mb-4">
                  For notices required pursuant to these Terms of Use, please
                  contact us at: support@kayse.ai or write to us at Case Connect
                  Group LLC, c/o Kayse, 1400 Old Country Rd, Suite 305,
                  Westbury, NY 11590.
                </p>
                <p className="text-white/80 mb-8">
                  If you would like to learn more about us, please email us at
                  sales@kayse.ai.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
