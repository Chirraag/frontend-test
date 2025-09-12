import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, Database, Bot } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const WhyKayse: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Helmet>
        <title>Kayse | Why Choose Kayse</title>
        <meta
          name="description"
          content="Discover why leading law firms choose Kayse over traditional communication methods, generic CRMs, and Salesforce for client retention."
        />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#000814] via-30% to-[#000a17] to-100%" />
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.15)_0%,_transparent_70%)]" />

            <motion.div
              className="absolute top-20 left-10 w-20 xs:w-24 sm:w-32 md:w-48 lg:w-64 h-20 xs:h-24 sm:h-32 md:h-48 lg:h-64 bg-[#0066ff]/10 rounded-[40%] blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
                rotate: [0, 45, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-32 right-20 w-16 xs:w-20 sm:w-24 md:w-32 lg:w-48 h-16 xs:h-20 sm:h-24 md:h-32 lg:h-48 bg-[#0077ff]/15 rounded-[60%] blur-[80px]"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.2, 0.15],
                rotate: [0, -30, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <div className="absolute inset-0 opacity-40">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6"
              >
                <span className="text-white">Why Choose</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Kayse
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
              >
                See how Kayse compares to traditional solutions and why leading law firms are making the switch
              </motion.p>
            </div>
          </div>
        </section>

        {/* Beyond Generic Tools Section */}
        <section className="relative py-20 bg-black overflow-hidden" id="beyond-generic-tools">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] from-0% via-[#001020] via-50% to-[#001428] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>

            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                  <span className="text-white">Beyond</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Generic Tools
                  </span>
                </h2>
                <p className="text-lg text-white/80 leading-relaxed font-light">
                  Three key comparisons that show why Kayse is the right choice for legal client retention.
                </p>
              </motion.div>

              {/* Comparison Tabs */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 font-medium">Traditional Communication Methods</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 flex items-center gap-2">
                  <Database className="w-4 h-4 text-white/70" />
                  <span className="text-white/70 font-medium">Generic CRMs with Newsletter</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-white/70" />
                  <span className="text-white/70 font-medium">Salesforce</span>
                </div>
              </motion.div>

              {/* Main Comparison Content */}
              <motion.div
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Left Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-transparent rounded-3xl blur-2xl group-hover:from-accent/30 transition-all duration-500"></div>
                  <img
                    src="/ipad5.png"
                    alt="Kayse vs Traditional Communication Methods"
                    className="relative w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                    Kayse vs. Traditional Communication Methods
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4 p-4 bg-blue-50/10 rounded-lg border border-blue-200/20">
                      <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-blue-200 mb-2">
                          Scale limitations of manual methods
                        </p>
                        <p className="text-sm text-white/80">
                          Manual calls and emails work for small caseloads but become unsustainable as your practice grows. 
                          When managing hundreds of cases, consistency suffers.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-blue-50/10 rounded-lg border border-blue-200/20">
                      <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-blue-200 mb-2">
                          Consistency challenges across large caseloads
                        </p>
                        <p className="text-sm text-white/80">
                          Maintaining consistent quality and frequency of communication across hundreds of cases is nearly 
                          impossible manually. Client experience varies significantly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-blue-50/10 rounded-lg border border-blue-200/20">
                      <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-blue-200 mb-2">
                          Staff time investment: 12-15 hours per week per staff
                        </p>
                        <p className="text-sm text-white/80">
                          Your team spends valuable hours on routine updates that could be automated, reducing time available 
                          for high-value legal work and strategy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                             bg-gradient-to-r from-blue-500 to-blue-600
                             shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                             hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                             transform hover:scale-[1.02] transition-all duration-300
                             group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-white">See How Kayse Scales</span>
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional sections would go here for Generic CRMs and Salesforce comparisons */}
        
        {/* CTA Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#000a17]"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div
              className="relative max-w-5xl mx-auto p-8 md:p-10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.1) 50%, rgba(147,51,234,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "0 25px 50px -12px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
              }}
            >
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6">
                  <span className="text-white">Ready to See the</span>
                  <br />
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Kayse Difference?
                  </span>
                </h2>
                <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                  Experience firsthand how Kayse transforms client retention for law firms
                </p>

                <motion.a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl
                           bg-gradient-to-r from-blue-500 to-blue-600
                           shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                           hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                           transform hover:scale-[1.02] transition-all duration-300
                           group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative text-white">Book Your Demo</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyKayse;