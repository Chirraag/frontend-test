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
        {/* Background gradients - transitioning from ObjectionAddressing light blue to ResultsSection dark blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e40af] via-[#1e2847] to-[#0a1628]"></div>

        {/* Enhanced radial gradients for visual interest */}
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_100%_50%_at_20%_60%,_rgba(147,197,253,0.1)_0%,_transparent_50%)]"></div>
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_100%_50%_at_80%_40%,_rgba(99,102,241,0.1)_0%,_transparent_50%)]"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
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
                className="flex items-start gap-4 p-5 rounded-xl backdrop-blur-sm
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]
                         hover:from-white/15 hover:via-white/10 hover:border-white/30 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(0,127,255,0.1)]
                         transition-all duration-300 group"
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
