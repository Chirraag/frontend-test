import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Code2,
  FileText,
  Bell,
  RefreshCw,
  FolderSync,
  ArrowRight,
} from "lucide-react";
import CallHalo from "./CallHalo";

const ZapierIntegration: React.FC = () => {
  const useCases = [
    {
      icon: <FileText className="w-5 h-5" />,
      text: "Update your CRM when a client uploads a document via Kayse",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      text: "Auto-send Slack or Microsoft Teams alerts for urgent case events",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      text: "Trigger outbound AI calls for document signature follow-ups",
    },
    {
      icon: <FolderSync className="w-5 h-5" />,
      text: "Sync client activity to Google Sheets or Dropbox folders",
    },
  ];

  const integrations = [
    "Clio",
    "Filevine",
    "Salesforce",
    "SmartAdvocate",
    "Neos",
    "CasePeer",
    "HubSpot",
    "Zoho",
    "Microsoft 365",
    "Gmail",
    "Dropbox",
    "Slack",
    "Google Sheets",
    "Calendly",
  ];

  return (
    <section className="relative pt-4 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        {/* Background gradients - matching the flow from CaseAdvancementEngine */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#000814] to-[#000a17]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.12)_0%,_transparent_70%)]"></div>

        {/* Bottom transition gradient to ProblemStatement */}
        <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-b from-transparent via-[#000f2a] via-60% to-[#001e45] to-100%"></div>

        {/* CallHalo for consistency */}
        <div className="absolute inset-0 opacity-30">
          <CallHalo isRinging={false} isCallActive={false} />
        </div>

        {/* Animated background elements - using blue theme */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header with Zapier badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-white font-medium">
                Zapier Integration Partner
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
              <span className="text-white">
                Supercharge Your Workflows with
              </span>{" "}
              <span
                className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 100%",
                  backgroundPosition: "60% 0",
                }}
              >
                8,000+ App Integrations
              </span>
            </h2>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
              Kayse is now an approved Zapier integration partner, empowering
              your firm to connect with over 8,000 applications — including top
              legal CRMs, productivity tools, and cloud platforms.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Body Text */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-white/80 mb-6">
                Kayse connects with Clio, Filevine, Salesforce, SmartAdvocate,
                Neos, CasePeer, HubSpot, Zoho, Microsoft 365, Gmail, Dropbox,
                Slack, Google Sheets, Calendly, and more.
              </p>
              <p className="text-lg text-white/80">
                With Kayse's built-in no-code Workflow Builder, you can create
                powerful automations based on client activity, messaging events,
                or case progress — no developers required.
              </p>
            </div>

            {/* Common Use Cases */}
            {/* <motion.div
              className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                       bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                       border border-white/10 shadow-[0_0_20px_rgba(0,127,255,0.2)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-accent" />
                Common use cases:
              </h3>

              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center
                                  group-hover:bg-white/20 transition-colors duration-300 mt-0.5 text-accent"
                    >
                      {useCase.icon}
                    </div>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                      • {useCase.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Integration Logos Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h4 className="text-lg font-medium text-white mb-6">
                Popular Integrations Include:
              </h4>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {integrations.map((app, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm
                               border border-white/20 hover:bg-white/20 hover:text-white
                               transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 + index * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {app}
                  </motion.span>
                ))}
                <motion.span
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-blue-500/20
                             text-white text-sm border border-accent/30 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  + 8,000 more
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="/integrations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                       bg-gradient-to-r from-blue-500 to-blue-600
                       shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                       hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                       transform hover:scale-[1.02] transition-all duration-300
                       group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white">
                Explore All Integrations
              </span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Extended bottom transition for smoother flow */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#001e45] z-20"></div>
    </section>
  );
};

export default ZapierIntegration;
