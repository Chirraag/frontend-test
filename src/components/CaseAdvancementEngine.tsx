import React from "react";
import { motion } from "framer-motion";
import CallHalo from "./CallHalo";

const CaseAdvancementEngine: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
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
          className="max-w-4xl mx-auto text-center"
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
      </div>
    </section>
  );
};

export default CaseAdvancementEngine;
