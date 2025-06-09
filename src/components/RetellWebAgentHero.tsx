import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, Phone, PhoneOff, MessageCircle } from "lucide-react";
import { RetellWebClient } from "retell-client-js-sdk";

interface RetellWebAgentHeroProps {
  onCallStart?: () => void;
  onCallEnd?: () => void;
}

const RetellWebAgentHero: React.FC<RetellWebAgentHeroProps> = ({
  onCallStart,
  onCallEnd,
}) => {
  const [isRinging, setIsRinging] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const retellClientRef = useRef<RetellWebClient | null>(null);

  // Setup audio and retell client
  useEffect(() => {
    retellClientRef.current = new RetellWebClient();
    audioRef.current = new Audio("/calling.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (retellClientRef.current) {
        retellClientRef.current.stopCall();
      }
    };
  }, []);

  const startCall = async () => {
    if (isCallActive) {
      endCall();
      return;
    }

    try {
      setIsRinging(true);
      setCallStatus("Initiating call...");

      if (audioRef.current) {
        audioRef.current.play();
      }
      onCallStart?.();

      const response = await fetch(
        "https://kayse-backend.replit.app/api/create-web-call",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        },
      );

      const webCallResponse = await response.json();

      if (!webCallResponse?.data?.access_token) {
        throw new Error("Failed to get access token");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      setIsRinging(false);
      setIsCallActive(true);
      setCallStatus("Call connected");

      await retellClientRef.current?.startCall({
        accessToken: webCallResponse.data.access_token,
        sampleRate: 24000,
        captureDeviceId: "default",
        playbackDeviceId: "default",
        emitRawAudioSamples: false,
      });
    } catch (error) {
      console.error("Error starting call:", error);
      setIsRinging(false);
      setIsCallActive(false);
      setCallStatus("");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  const endCall = () => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall();
    }
    setIsCallActive(false);
    setCallStatus("");
    onCallEnd?.();
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Card container */}
      <motion.div
        className="relative p-8 rounded-[2rem] overflow-hidden backdrop-blur-xl
                 bg-gradient-to-br from-white/10 via-white/[0.07] to-transparent
                 border border-white/10
                 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.1)]
                 group transform-gpu transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[80px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[60px] opacity-40"></div>

        {/* Header */}
        <div className="relative z-10 mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-medium"
          >
            <span>Try Our Voice AI</span>
          </motion.div>
          <h3 className="text-2xl font-semibold text-white mb-3">
            Over 96% Of Clients Prefer It
          </h3>
          <p className="text-white/70 text-sm">
            Try a live conversation with our AI assistant to see how it can help
            your clients
          </p>
        </div>

        {/* Main Call Button Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center mb-10"
        >
          {/* Background Halo Effects - Properly Centered - More Subtle */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Primary Halo - Reduced intensity */}
            <motion.div
              className="absolute rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(62, 157, 255, 0.4) 0%, rgba(62, 157, 255, 0.1) 50%, transparent 80%)",
                filter: "blur(25px)",
                width: "250px",
                height: "250px",
              }}
            />

            {/* Secondary Halo - Reduced intensity */}
            <motion.div
              className="absolute rounded-full"
              animate={{
                scale: [1.1, 1.3, 1.1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(62, 157, 255, 0.3) 0%, rgba(62, 157, 255, 0.05) 40%, transparent 70%)",
                filter: "blur(30px)",
                width: "320px",
                height: "320px",
              }}
            />
          </div>

          {/* Continuous Pulse Ring - More Subtle */}
          <motion.div
            className="absolute rounded-full border border-blue-400/20"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "200px",
              height: "200px",
            }}
          />

          {/* Active State Pulsing Rings - Reduced intensity */}
          {(isRinging || isCallActive) && (
            <>
              <motion.div
                className="absolute rounded-full border border-blue-400/50"
                animate={{
                  scale: [1, 1.5],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  width: "190px",
                  height: "190px",
                }}
              />
              <motion.div
                className="absolute rounded-full border border-blue-300/30"
                animate={{
                  scale: [1, 1.3],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
                style={{
                  width: "190px",
                  height: "190px",
                }}
              />
            </>
          )}

          {/* Main Button */}
          <motion.button
            onClick={startCall}
            className={`
              relative z-10 w-48 h-48 rounded-full
              transition-all duration-300 backdrop-blur-md border-3
              flex items-center justify-center group overflow-hidden
              ${
                isRinging
                  ? "bg-blue-500/90 border-blue-400/70 shadow-[0_0_60px_rgba(59,130,246,0.9)]"
                  : isCallActive
                    ? "bg-red-500/90 border-red-400/70 shadow-[0_0_60px_rgba(239,68,68,0.9)]"
                    : "bg-blue-600/85 border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.7)] hover:shadow-[0_0_80px_rgba(59,130,246,1)]"
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glassmorphism highlight */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <AnimatePresence mode="wait">
              {isRinging ? (
                <motion.div
                  key="ringing"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: [-4, 4, -4],
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    scale: { duration: 0.3 },
                    rotate: {
                      repeat: Infinity,
                      duration: 0.4,
                      repeatType: "reverse",
                    },
                  }}
                  className="flex items-center justify-center z-10 relative"
                >
                  <Phone className="w-20 h-20 text-white drop-shadow-2xl" />
                </motion.div>
              ) : isCallActive ? (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center justify-center z-10 relative"
                >
                  <PhoneOff className="w-20 h-20 text-white drop-shadow-2xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="inactive"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -3, 0],
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="flex items-center justify-center z-10 relative"
                >
                  <Mic className="w-24 h-24 text-white drop-shadow-2xl transform scale-y-110" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
          {[
            {
              icon: <MessageCircle className="w-4 h-4" />,
              label: "Human-like voice",
            },
            { icon: <Phone className="w-4 h-4" />, label: "Low latency" },
            { icon: <Mic className="w-4 h-4" />, label: "Legal terminology" },
            {
              icon: <MessageCircle className="w-4 h-4" />,
              label: "Empathetic responses",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-200">
                {feature.icon}
              </div>
              <span className="text-white/80 text-xs">{feature.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <div className="relative z-10 text-center">
          <p className="text-white/60 text-sm">
            {isCallActive
              ? "Speak naturally to our AI assistant about legal client retention"
              : "Click the microphone button to start a conversation"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RetellWebAgentHero;
