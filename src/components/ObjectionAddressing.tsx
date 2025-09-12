import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  ArrowRight,
  MessageCircle,
  Database,
  Bot,
  Users,
  CheckCircle2,
  AlertCircle,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`objection-tabpanel-${index}`}
      aria-labelledby={`objection-tab-${index}`}
      {...other}
      className="py-6"
      style={{
        display: value === index ? "block" : "none",
      }}
    >
      <Box>{children}</Box>
    </div>
  );
}

const ObjectionAddressing: React.FC = () => {
  const [value, setValue] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images to prevent layout jumps
  useEffect(() => {
    const imageUrls = ["/ipad5.png", "/ipad2.png", "/ipad3.png", "/phone1.png"];
    let loadedCount = 0;

    const preloadImages = () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === imageUrls.length) {
            setImagesLoaded(true);
          }
        };
        img.src = url;
      });
    };

    preloadImages();
  }, []);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section
      className="relative py-8 sm:py-16 lg:py-24 overflow-hidden"
      id="objections"
    >
      {/* ALL GRADIENT TRANSITION HAPPENS HERE - from black to light */}
      <div className="absolute inset-0">
        {/* Full gradient transition from black (matching solution) to light slate */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1e2847] via-40% to-[#1e40af] to-90%"></div>

        {/* Light blue accent in lower portion */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_70%,_rgba(147,197,253,0.2)_0%,_transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-24 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 tracking-[-0.03em] leading-[1.1]">
            <span className="text-white">The Difference Between</span>
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              {" "}
              Communication
            </span>
            <span className="text-white"> and</span>
            <span
              className="bg-gradient-to-r from-white via-[#3e9dff] via-[#3e9dff] to-white bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "60% 0",
              }}
            >
              {" "}
              Connection
            </span>
          </h2>
        </div>

        {/* ENHANCED: Much lighter, brighter content card with better image/text balance */}
        <motion.div
          className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "rgba(0, 0, 0, 0.1)",
              marginBottom: 4,
            }}
          >
            {/* ENHANCED: Tabs with better contrast for light background */}
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-flexContainer": {
                  gap: "1rem",
                },
                "& .MuiTabs-root": {
                  minHeight: { xs: "48px", sm: "56px" },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#3e9dff",
                  height: "3px",
                  borderRadius: "1.5px",
                },
                "& .MuiTab-root": {
                  minHeight: { xs: "48px", sm: "56px" },
                  textTransform: "none",
                  fontSize: { xs: "0.875rem", sm: "1rem" },
                  fontWeight: 500,
                  color: "rgba(0, 0, 0, 0.6)",
                  backgroundColor: "rgba(59, 130, 246, 0.08)",
                  borderRadius: "1rem",
                  margin: "0.25rem",
                  padding: { xs: "0.375rem 0.75rem", sm: "0.5rem 1rem" },
                  "&.Mui-selected": {
                    color: "#3e9dff",
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    fontWeight: 600,
                  },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(59, 130, 246, 0.12)",
                  },
                },
              }}
            >
              <Tab
                label="Beyond Calls, Texts & Emails"
                icon={<MessageCircle size={22} />}
                iconPosition="start"
              />
              <Tab
                label="Beyond Call Centers"
                icon={<Headphones size={22} />}
                iconPosition="start"
              />
              <Tab
                label="Beyond Generic CRMs"
                icon={<Database size={22} />}
                iconPosition="start"
              />
              <Tab
                label="Beyond Salesforce"
                icon={<Bot size={22} />}
                iconPosition="start"
              />
            </Tabs>
          </Box>
          {/* Render all TabPanels to prevent layout jumps */}
          <TabPanel value={value} index={0}>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start min-h-[500px]">
              {/* Image Section - Fixed width, no zoom, top aligned */}
              <div className="w-full lg:w-2/5 lg:max-w-sm mx-auto lg:mx-0 flex-shrink-0">
                <div className="relative mb-6 lg:mb-0 rounded-xl overflow-hidden w-full">
                  <img
                    src="/ipad5.png"
                    alt="CRM Solution"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Text Section - Enhanced with consistent positioning and bigger font */}
              <div className="w-full lg:w-3/5 pt-0">
                <div className="w-full pl-2 lg:pl-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 leading-tight">
                    "I already call, text, and email my clients"
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The challenge isn't whether you're communicating, but
                      whether your team can maintain consistent, personalized
                      outreach when handling hundreds or thousands of clients
                      simultaneously over extended timelines.
                    </p>
                    <div className="bg-blue-50/70 p-5 rounded-xl border border-blue-200/30">
                      <p className="text-base text-gray-600 leading-relaxed">
                        <strong className="text-blue-800">
                          Key Challenge:
                        </strong>{" "}
                        Manual communication methods work well for small
                        caseloads but become unsustainable as your practice
                        grows. Quality and consistency suffer when staff are
                        stretched across hundreds of cases.
                      </p>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our AI-powered retention platform doesn't replace your
                      existing channels—it amplifies them. Rather than your
                      staff members spending 12-15 hours per week each on
                      routine updates, our human-like voice AI handles these
                      automatically, freeing your team for higher-value tasks.
                    </p>
                    <div className="bg-green-50/70 p-5 rounded-xl border border-green-200/30">
                      <p className="text-base text-green-700 leading-relaxed">
                        <strong className="text-green-800">
                          The Solution:
                        </strong>{" "}
                        Consistent, personalized communication at scale without
                        burning out your team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start min-h-[500px]">
              {/* Image Section - Fixed width, no zoom, top aligned */}
              <div className="w-full lg:w-2/5 lg:max-w-sm mx-auto lg:mx-0 flex-shrink-0">
                <div className="relative mb-6 lg:mb-0 rounded-xl overflow-hidden w-full">
                  <img
                    src="/phone1.png"
                    alt="Beyond Call Centers"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Text Section - Enhanced with consistent positioning */}
              <div className="w-full lg:w-3/5 pt-0">
                <div className="w-full pl-2 lg:pl-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 leading-tight">
                    "We already use a call center for client outreach"
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Traditional call centers operate on short-term campaigns
                      (typically 2-4 weeks), but legal cases require years of
                      consistent client engagement. Here's why Kayse's approach
                      is fundamentally different:
                    </p>

                    {/* Enhanced Comparison Table with better visibility */}
                    <div className="relative overflow-x-auto rounded-xl border border-gray-300 shadow-sm">
                      <table className="w-full text-base">
                        <thead className="bg-blue-100 border-b border-gray-300">
                          <tr>
                            <th className="px-6 py-4 font-semibold text-gray-900 text-left uppercase tracking-wider text-sm">
                              Feature
                            </th>
                            <th className="px-6 py-4 font-semibold text-gray-900 text-left uppercase tracking-wider text-sm">
                              Kayse
                            </th>
                            <th className="px-6 py-4 font-semibold text-gray-900 text-left uppercase tracking-wider text-sm">
                              Call Centers
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                              Client Retention
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-green-600 text-xl">
                                  ✓
                                </span>
                                <span className="text-gray-700">
                                  Lifetime engagement
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-red-600 text-xl">✗</span>
                                <span className="text-gray-700">
                                  Limited campaigns
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                              Cost Model
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-green-600 text-xl">
                                  ✓
                                </span>
                                <span className="text-gray-700">
                                  All-inclusive pricing
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-red-600 text-xl">✗</span>
                                <span className="text-gray-700">
                                  Setup + usage fees
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                              Success Rates
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-green-600 text-xl">
                                  ✓
                                </span>
                                <span className="text-gray-700">
                                  40%+ dormant revival
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-red-600 text-xl">✗</span>
                                <span className="text-gray-700">
                                  No long-term tracking
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                              AI Capability
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-green-600 text-xl">
                                  ✓
                                </span>
                                <span className="text-gray-700">
                                  Built-in intelligence
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-red-600 text-xl">✗</span>
                                <span className="text-gray-700">
                                  Manual scripts only
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <p className="text-base text-gray-700 leading-relaxed">
                        <strong className="text-blue-900 font-semibold">
                          Key Difference:
                        </strong>{" "}
                        Call centers are built for short campaigns. Kayse is
                        built for the entire client lifecycle—from intake
                        through resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start min-h-[500px]">
              {/* Image Section - Fixed width, no zoom, top aligned */}
              <div className="w-full lg:w-2/5 lg:max-w-sm mx-auto lg:mx-0 flex-shrink-0">
                <div className="relative mb-6 lg:mb-0 rounded-xl overflow-hidden w-full">
                  <img
                    src="/ipad2.png"
                    alt="Generic CRM Solution"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Text Section - Enhanced with consistent positioning */}
              <div className="w-full lg:w-3/5 pt-0">
                <div className="w-full pl-2 lg:pl-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 leading-tight">
                    "I already have a CRM and send newsletters"
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      While newsletters are valuable for general updates, they
                      don't address the individual client's need for
                      personalized case status information or emotional
                      reassurance during lengthy proceedings.
                    </p>
                    <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200/30">
                      <p className="text-base text-amber-700 leading-relaxed">
                        <strong className="text-amber-800">The Gap:</strong>{" "}
                        Generic newsletters have low engagement rates (typically
                        under 25%) because they don't speak to individual client
                        concerns or provide case-specific updates.
                      </p>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Kayse enhances your CRM and other apps by adding
                      intelligent, automated 1:1 communications that respond to
                      each client's specific case status and emotional
                      needs—with sentiment analysis that continuously monitors
                      communication patterns for signs of frustration,
                      confusion, or disengagement that typically precede client
                      attrition.
                    </p>
                    <div className="bg-blue-50/70 p-5 rounded-xl border border-blue-200/30">
                      <p className="text-base text-blue-700 leading-relaxed">
                        <strong className="text-blue-800">
                          Kayse Advantage:
                        </strong>
                        70%+ portal adoption rate vs. 23% for generic solutions,
                        achieved through personalized, case-specific
                        communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start min-h-[500px]">
              {/* Image Section - Fixed width, no zoom, top aligned */}
              <div className="w-full lg:w-2/5 lg:max-w-sm mx-auto lg:mx-0 flex-shrink-0">
                <div className="relative mb-6 lg:mb-0 rounded-xl overflow-hidden w-full">
                  <img
                    src="/ipad3.png"
                    alt="Salesforce Solution"
                    className="w-full h-auto rounded-xl shadow-2xl"
                    style={{
                      opacity: imagesLoaded ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                    loading="eager"
                  />
                </div>
              </div>
              {/* Text Section - Enhanced with consistent positioning */}
              <div className="w-full lg:w-3/5 pt-0">
                <div className="w-full pl-2 lg:pl-8">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 leading-tight">
                    "I already have Salesforce"
                  </h3>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Unlike Salesforce, which is designed for general business
                      and sales environments, our solution is purpose-built for
                      legal client retention:
                    </p>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4 p-4 bg-blue-50/50 rounded-lg border border-blue-200/30">
                        <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-base font-medium text-blue-900">
                            Legal AI Training
                          </p>
                          <p className="text-sm text-blue-700 mt-2">
                            Our voice AI is specifically trained on legal client
                            conversations and understands discovery,
                            depositions, settlement negotiations, and trial
                            timelines.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-green-50/50 rounded-lg border border-green-200/30">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-base font-medium text-green-900">
                            Legal Sentiment Analysis
                          </p>
                          <p className="text-sm text-green-700 mt-2">
                            Our sentiment analysis recognizes the unique
                            emotional patterns that precede client
                            dissatisfaction in long litigation processes.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-purple-50/50 rounded-lg border border-purple-200/30">
                        <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-base font-medium text-purple-900">
                            Purpose-Built Portal
                          </p>
                          <p className="text-sm text-purple-700 mt-2">
                            Our mobile client portal achieves 70%+ adoption
                            rates because it's designed specifically for clients
                            who need simplified case tracking, not complex
                            business processes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="mb-8 p-5 rounded-xl backdrop-blur-xl
                                bg-gradient-to-br from-green-50/70 to-green-50/50 border border-green-200/30"
                    >
                      <p className="text-base text-green-700 leading-relaxed">
                        <strong className="text-green-800">
                          Case expense recoverability advantage:
                        </strong>{" "}
                        Unlike Salesforce and other CRMs, Kayse can potentially
                        be billed as a recoverable case expense for high-volume
                        contingency firms, making the investment cost-neutral in
                        many cases while also increasing client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </motion.div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <motion.a
            href="/why-kayse"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl sm:rounded-2xl
                     bg-gradient-to-r from-blue-500 to-blue-600
                     shadow-[0_8px_32px_rgba(59,130,246,0.3)]
                     hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]
                     transform hover:scale-[1.02] transition-all duration-300
                     group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-white">See How We Compare</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ObjectionAddressing;
