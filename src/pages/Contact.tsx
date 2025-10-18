import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { ArrowRight, Phone, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallHalo from "../components/CallHalo";

const Contact: React.FC = () => {
  // Initialize Cal.com with enhanced styling
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#0ea5e9",
            lightColor: "#38bdf8",
            lighterColor: "#7dd3fc",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-primary font-manrope">
      <Helmet>
        <title>Kayse | Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Kayse's team. Contact us for demos, support, partnerships, or any questions about our AI client retention platform."
        />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-24 pb-8 overflow-hidden">
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
                <span className="text-white">Get in Touch with</span>
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
                Our team is ready to help you explore how our AI platform can
                transform your practice
              </motion.p>
            </div>
          </div>
        </section>

        {/* Cal.com Booking Widget Section */}
        <section
          className="relative pt-4 pb-20 bg-black overflow-hidden"
          id="contact-form"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#000a17] from-0% via-[#001020] via-50% to-[#001428] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,127,255,0.1)_0%,_rgba(0,127,255,0.05)_30%,_transparent_60%)]"></div>

            <div className="absolute inset-0 opacity-20">
              <CallHalo isRinging={false} isCallActive={false} />
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1] text-white">
                  <span className="text-white">Schedule a</span>
                  <span
                    className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                    style={{
                      backgroundSize: "200% 100%",
                      backgroundPosition: "60% 0",
                    }}
                  >
                    Meeting
                  </span>
                </h2>

                {/* Additional Contact Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-accent" />
                    <a
                      href="tel:+18666452973"
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      (866) 645-2973
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-white/80">
                      Monday-Friday, 8am-6pm ET
                    </span>
                  </div>
                </div>

                <p className="text-lg text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
                  Select a time that works best for you, and we'll discuss how
                  Kayse can help your practice
                </p>
              </motion.div>

              {/* Cal.com Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Wrapper to match Cal.com widget */}
                <div
                  className="relative rounded-[2rem] overflow-hidden
                             bg-[#1a1a1a] backdrop-blur-xl
                             border border-white/10
                             shadow-[0_0_40px_rgba(14,165,233,0.15)]
                             p-4"
                  style={{ minHeight: "780px" }}
                >
                  {/* Blue accent glow */}
                  <div className="absolute -inset-20 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 blur-3xl pointer-events-none" />

                  <div className="relative">
                    <Cal
                      calLink="kayse/30min"
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: "750px",
                      }}
                      config={{
                        layout: "month_view",
                        theme: "dark",
                        styles: {
                          branding: {
                            brandColor: "#0ea5e9",
                            lightColor: "#38bdf8",
                            lighterColor: "#7dd3fc",
                          },
                        },
                        metadata: {
                          source: "contact_page",
                        },
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section
          className="relative py-20 bg-gradient-to-b from-black to-[#000a17] overflow-hidden"
          id="quick-links"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#001428] from-0% via-[#001630] via-50% to-[#000814] to-100%"></div>
            <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.1)_0%,_transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-[-0.03em] leading-[1.1]">
                <span className="text-white">Quick</span>
                <span
                  className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent pl-2"
                  style={{
                    backgroundSize: "200% 100%",
                    backgroundPosition: "60% 0",
                  }}
                >
                  Access
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.a
                href="/demo"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                         hover:scale-[1.02] text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Schedule a Demo
                </h3>
                <div className="flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Book a Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                         hover:scale-[1.02] text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Support
                </h3>
                <div className="flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Contact Support</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>

              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                         bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                         border border-white/10
                         shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                         group transform-gpu transition-all duration-500 
                         hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_30px_rgba(0,0,0,0.2)]
                         hover:scale-[1.02] text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Partnership Inquiries
                </h3>
                <div className="flex items-center justify-center text-accent group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Discuss Partnership</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
