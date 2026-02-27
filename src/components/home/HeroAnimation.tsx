import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroVideo from "@/assets/hero-scene-video.mp4";
import logo from "@/assets/logo.png";

const HeroAnimation = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [showCallScreen, setShowCallScreen] = useState(false);

  useEffect(() => {
    // After 2s → show phone with brand logo (scan result)
    const t1 = setTimeout(() => setShowPhone(true), 2000);
    // After 3.5s → show call screen
    const t2 = setTimeout(() => setShowCallScreen(true), 3500);
    // Reset loop every 7s
    const t3 = setTimeout(() => {
      setShowPhone(false);
      setShowCallScreen(false);
    }, 7000);

    const interval = setInterval(() => {
      setShowPhone(false);
      setShowCallScreen(false);
      setTimeout(() => setShowPhone(true), 2000);
      setTimeout(() => setShowCallScreen(true), 3500);
      setTimeout(() => {
        setShowPhone(false);
        setShowCallScreen(false);
      }, 7000);
    }, 7500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto">
      {/* Animated scene video */}
      <motion.video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full rounded-3xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Phone screen mockup - appears after scan */}
      <AnimatePresence>
        {showPhone && (
          <motion.div
            className="absolute"
            style={{ left: "8%", top: "12%" }}
            initial={{ opacity: 0, scale: 0.3, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <div className="relative w-[110px] sm:w-[130px] overflow-hidden rounded-xl border-2 border-foreground/20 bg-background shadow-2xl">
              {/* Phone notch */}
              <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-foreground/15" />

              {/* Phone screen content */}
              <div className="px-2 py-3 flex flex-col items-center gap-2">
                {/* Brand logo */}
                <motion.img
                  src={logo}
                  alt="callowner.me"
                  className="h-8 w-8 object-contain"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                />

                <motion.p
                  className="text-[7px] font-bold text-primary text-center leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  callowner.me
                </motion.p>

                {/* Scan success */}
                <motion.div
                  className="flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-[6px] font-bold text-accent">QR Scanned</span>
                </motion.div>

                {/* Vehicle info */}
                <AnimatePresence>
                  {showCallScreen && (
                    <motion.div
                      className="w-full flex flex-col gap-1.5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-lg bg-muted/50 px-2 py-1.5">
                        <p className="text-[6px] text-muted-foreground">Vehicle Owner</p>
                        <p className="text-[7px] font-bold text-foreground">Rahul S.</p>
                      </div>

                      {/* Call button */}
                      <motion.div
                        className="flex items-center justify-center gap-1 rounded-lg bg-accent py-1.5"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="text-[7px] font-bold text-accent-foreground">Call Now</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone bottom bar */}
              <div className="mx-auto mb-1 h-0.5 w-6 rounded-full bg-foreground/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy badge - bottom left */}
      <motion.div
        className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 shadow-md backdrop-blur-sm"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, type: "spring", stiffness: 200 }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </motion.div>
        <span className="text-[10px] font-bold text-accent">No Personal Info Shared</span>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
