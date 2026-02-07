import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-scene-video.mp4";

const HeroAnimation = () => {
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

      {/* Calling notification popup */}
      <motion.div
        className="absolute rounded-2xl border border-border bg-card/95 px-4 py-2.5 shadow-xl backdrop-blur-sm"
        style={{ right: "4%", top: "8%" }}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="flex items-center gap-2.5"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15"
            animate={{ rotate: [0, -12, 12, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2.5, delay: 3 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </motion.div>
          <div>
            <p className="text-xs font-bold text-foreground">Calling Owner...</p>
            <p className="text-[10px] text-muted-foreground">Secure Connection</p>
          </div>
        </motion.div>
      </motion.div>

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
