import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, UserCheck, Clock, Percent } from "lucide-react";

const ProvenResults: React.FC = () => {
  const results = [
    {
      icon: <Percent className="w-6 h-6 text-accent" />,
      text: "70%+ success rate for recently active clients",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-accent" />,
      text: "40%+ revival rate for dormant clients (4+ years inactive)",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      text: "Zero extra headcount required",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      text: "All-inclusive pricing",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] via-[#000814] to-[#000a17]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.06)_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] mb-8 text-center">
            <span className="text-white">Proven</span>{" "}
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              Results
            </span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center
                              group-hover:bg-accent/30 transition-colors duration-300"
                >
                  {result.icon}
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {result.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvenResults;
