import React from "react";
import { motion } from "framer-motion";
import CallHalo from "./CallHalo";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

const CaseAdvancementEngine: React.FC = () => {
  const comparisonData = [
    {
      feature: "Client Retention",
      kayse: { type: "check", text: "Lifetime engagement" },
      callCenters: {
        type: "x",
        text: "Limited to short campaigns (2–4 weeks)",
      },
    },
    {
      feature: "Proactive Communication",
      kayse: { type: "check", text: "Always-on AI (voice, SMS, email, app)" },
      callCenters: { type: "x", text: "Manual, reactive, or fixed-script" },
    },
    {
      feature: "Cost Model",
      kayse: { type: "check", text: "All-inclusive pricing" },
      callCenters: { type: "x", text: "Setup fees + usage billing" },
    },
    {
      feature: "Pricing Transparency",
      kayse: { type: "check", text: "Clear, transparent pricing" },
      callCenters: { type: "x", text: "Complex, hidden costs" },
    },
    {
      feature: "Success Rates",
      kayse: { type: "check", text: "70%+ active, 40%+ dormant revival" },
      callCenters: { type: "x", text: "No long-term impact tracked" },
    },
    {
      feature: "Scalability",
      kayse: {
        type: "check",
        text: "Instantly scalable, no staffing required",
      },
      callCenters: { type: "x", text: "Limited by hiring/training" },
    },
    {
      feature: "Compliance",
      kayse: { type: "check", text: "Built-in audit trails & security" },
      callCenters: { type: "warning", text: "Varies by vendor" },
    },
    {
      feature: "AI Capability",
      kayse: {
        type: "check",
        text: "Built-in agent logic & personalized automation",
      },
      callCenters: { type: "x", text: "None or bolt-on AI" },
    },
    {
      feature: "Client Lifecycle Coverage",
      kayse: { type: "check", text: "From intake to resolution" },
      callCenters: { type: "x", text: "Only short-term outreach" },
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "check":
        return <span className="text-green-500 text-2xl font-bold">✓</span>;
      case "x":
        return <span className="text-red-500 text-2xl font-bold">✗</span>;
      case "warning":
        return <span className="text-yellow-500 text-2xl font-bold">⚠</span>;
      default:
        return null;
    }
  };

  return (
    <section className="relative pt-4 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#000814] to-[#000a17]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.08)_0%,_transparent_70%)]"></div>

        {/* CallHalo for consistency */}
        <div className="absolute inset-0 opacity-20">
          <CallHalo isRinging={false} isCallActive={false} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8">
            <span className="text-white">Your CRM Organizes.</span>{" "}
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              Kayse Advances.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Existing CRMs and legal practice management apps are built to track
            intakes and manage documents. But they don't solve the #1 bottleneck
            in case outcomes: stalled communication. Kayse fills the gap. As the
            first{" "}
            <span className="font-semibold text-white">
              Legal Case Advancement Engine
            </span>
            , it proactively reaches out, resolves bottlenecks, and revives cold
            cases — all with no added headcount.
          </p>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-x-auto rounded-xl border border-white/20 backdrop-blur-sm">
            <table className="w-full text-base">
              <thead className="bg-white/10 border-b border-white/20">
                <tr>
                  <th className="px-6 py-4 font-semibold text-white text-left uppercase tracking-wider text-sm">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-semibold text-white text-left uppercase tracking-wider text-sm">
                    Kayse
                  </th>
                  <th className="px-6 py-4 font-semibold text-white text-left uppercase tracking-wider text-sm">
                    Call Centers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white/5" : "bg-transparent"
                    } hover:bg-white/10 transition-colors`}
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        {getIcon(row.kayse.type)}
                        <span className="text-white/80">{row.kayse.text}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        {getIcon(row.callCenters.type)}
                        <span className="text-white/80">
                          {row.callCenters.text}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseAdvancementEngine;
