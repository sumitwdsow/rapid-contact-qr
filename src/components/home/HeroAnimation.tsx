import { motion } from "framer-motion";

const HeroAnimation = () => {
  return (
    <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto">
      <svg
        viewBox="0 0 600 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Sky gradient background */}
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.04)" />
            <stop offset="100%" stopColor="hsl(var(--accent) / 0.06)" />
          </linearGradient>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--muted))" />
            <stop offset="100%" stopColor="hsl(var(--muted))" />
          </linearGradient>
          <linearGradient id="carGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
          </linearGradient>
          <linearGradient id="buildingGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.12)" />
            <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.06)" />
          </linearGradient>
          <linearGradient id="buildingGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--muted-foreground) / 0.1)" />
            <stop offset="100%" stopColor="hsl(var(--muted-foreground) / 0.04)" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="600" height="450" fill="url(#skyGrad)" rx="24" />

        {/* Clouds */}
        <motion.g
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="120" cy="60" rx="40" ry="14" fill="hsl(var(--muted-foreground) / 0.06)" />
          <ellipse cx="140" cy="55" rx="30" ry="10" fill="hsl(var(--muted-foreground) / 0.04)" />
        </motion.g>
        <motion.g
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="450" cy="45" rx="35" ry="12" fill="hsl(var(--muted-foreground) / 0.05)" />
          <ellipse cx="470" cy="40" rx="25" ry="9" fill="hsl(var(--muted-foreground) / 0.03)" />
        </motion.g>

        {/* Buildings - background cityscape */}
        {/* Building 1 - tall */}
        <rect x="40" y="140" width="50" height="200" rx="4" fill="url(#buildingGrad1)" />
        <rect x="48" y="155" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.08)" />
        <rect x="64" y="155" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.08)" />
        <rect x="48" y="180" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.08)" />
        <rect x="64" y="180" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.08)" />
        <rect x="48" y="205" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.08)" />
        <rect x="64" y="205" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.08)" />

        {/* Building 2 - medium */}
        <rect x="100" y="190" width="45" height="150" rx="4" fill="url(#buildingGrad2)" />
        <rect x="108" y="205" width="8" height="12" rx="2" fill="hsl(var(--muted-foreground) / 0.06)" />
        <rect x="122" y="205" width="8" height="12" rx="2" fill="hsl(var(--muted-foreground) / 0.06)" />
        <rect x="108" y="225" width="8" height="12" rx="2" fill="hsl(var(--muted-foreground) / 0.06)" />
        <rect x="122" y="225" width="8" height="12" rx="2" fill="hsl(var(--muted-foreground) / 0.06)" />

        {/* Building 3 - short */}
        <rect x="155" y="230" width="40" height="110" rx="4" fill="url(#buildingGrad1)" />
        <rect x="162" y="242" width="8" height="10" rx="2" fill="hsl(var(--muted-foreground) / 0.07)" />
        <rect x="178" y="242" width="8" height="10" rx="2" fill="hsl(var(--muted-foreground) / 0.07)" />

        {/* Building 4 - right side tall */}
        <rect x="490" y="160" width="55" height="180" rx="4" fill="url(#buildingGrad2)" />
        <rect x="500" y="175" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.07)" />
        <rect x="520" y="175" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.07)" />
        <rect x="500" y="200" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.07)" />
        <rect x="520" y="200" width="10" height="14" rx="2" fill="hsl(var(--muted-foreground) / 0.07)" />

        {/* Building 5 - right side short */}
        <rect x="450" y="240" width="35" height="100" rx="4" fill="url(#buildingGrad1)" />

        {/* Road / Ground */}
        <rect x="0" y="340" width="600" height="110" rx="0" fill="hsl(var(--muted) / 0.5)" />
        <rect x="0" y="340" width="600" height="4" fill="hsl(var(--border))" />
        
        {/* Road markings */}
        <rect x="30" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
        <rect x="110" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
        <rect x="190" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
        <rect x="270" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
        <rect x="350" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
        <rect x="430" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />
        <rect x="510" y="370" width="40" height="3" rx="1.5" fill="hsl(var(--muted-foreground) / 0.15)" />

        {/* Tree left */}
        <rect x="210" y="290" width="6" height="50" rx="3" fill="hsl(var(--muted-foreground) / 0.15)" />
        <circle cx="213" cy="275" r="22" fill="hsl(var(--accent) / 0.15)" />
        <circle cx="200" cy="285" r="16" fill="hsl(var(--accent) / 0.12)" />
        <circle cx="226" cy="283" r="14" fill="hsl(var(--accent) / 0.1)" />

        {/* Tree right */}
        <rect x="420" y="295" width="5" height="45" rx="2.5" fill="hsl(var(--muted-foreground) / 0.12)" />
        <circle cx="422" cy="280" r="18" fill="hsl(var(--accent) / 0.12)" />
        <circle cx="412" cy="288" r="13" fill="hsl(var(--accent) / 0.1)" />
      </svg>

      {/* Animated elements overlaid on SVG */}
      {/* Car */}
      <motion.div
        className="absolute"
        style={{ left: "38%", top: "52%", transform: "translateX(-50%)" }}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Car SVG */}
          <svg width="140" height="75" viewBox="0 0 140 75" fill="none">
            {/* Car body */}
            <path d="M20 45 Q20 30 35 28 L50 18 Q55 14 65 14 L90 14 Q100 14 105 18 L115 28 Q130 30 130 45 L130 50 Q130 55 125 55 L25 55 Q20 55 20 50 Z"
              fill="hsl(var(--primary))" />
            {/* Car roof / windshield */}
            <path d="M52 18 L42 35 L108 35 L98 18 Z" fill="hsl(var(--primary) / 0.7)" />
            {/* Windows */}
            <path d="M55 20 L47 33 L73 33 L73 20 Z" fill="hsl(var(--background) / 0.4)" />
            <path d="M77 20 L77 33 L105 33 L96 20 Z" fill="hsl(var(--background) / 0.4)" />
            {/* Headlights */}
            <rect x="22" y="38" width="8" height="5" rx="2" fill="hsl(var(--accent) / 0.8)" />
            <rect x="120" y="38" width="8" height="5" rx="2" fill="hsl(var(--accent) / 0.8)" />
            {/* Wheels */}
            <circle cx="42" cy="55" r="10" fill="hsl(var(--foreground) / 0.7)" />
            <circle cx="42" cy="55" r="5" fill="hsl(var(--muted))" />
            <circle cx="108" cy="55" r="10" fill="hsl(var(--foreground) / 0.7)" />
            <circle cx="108" cy="55" r="5" fill="hsl(var(--muted))" />
          </svg>

          {/* QR Code sticker on car */}
          <motion.div
            className="absolute -top-1 right-4 flex h-7 w-7 items-center justify-center rounded bg-background border border-primary/40 shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" stroke="hsl(var(--primary))" strokeWidth="1.2" />
              <rect x="10" y="1" width="5" height="5" rx="1" stroke="hsl(var(--primary))" strokeWidth="1.2" />
              <rect x="1" y="10" width="5" height="5" rx="1" stroke="hsl(var(--primary))" strokeWidth="1.2" />
              <rect x="3" y="3" width="1.5" height="1.5" fill="hsl(var(--primary))" />
              <rect x="12" y="3" width="1.5" height="1.5" fill="hsl(var(--primary))" />
              <rect x="3" y="12" width="1.5" height="1.5" fill="hsl(var(--primary))" />
              <rect x="10" y="10" width="2" height="2" fill="hsl(var(--primary) / 0.6)" />
              <rect x="13" y="13" width="2" height="2" fill="hsl(var(--primary) / 0.6)" />
              <rect x="10" y="13" width="2" height="1.5" fill="hsl(var(--primary) / 0.4)" />
            </svg>
          </motion.div>

          {/* QR scan pulse */}
          <motion.div
            className="absolute -top-1 right-4 h-7 w-7 rounded border border-primary/50"
            animate={{ scale: [1, 2, 2.5], opacity: [0.5, 0.15, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      </motion.div>

      {/* Person / Finder - walks in from right */}
      <motion.div
        className="absolute"
        style={{ right: "18%", top: "48%" }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Person SVG */}
          <svg width="50" height="90" viewBox="0 0 50 90" fill="none">
            {/* Head */}
            <circle cx="25" cy="14" r="10" fill="hsl(var(--accent) / 0.9)" />
            {/* Body */}
            <path d="M25 24 L25 55" stroke="hsl(var(--accent) / 0.8)" strokeWidth="4" strokeLinecap="round" />
            {/* Arms */}
            <motion.path
              d="M25 32 L10 45"
              stroke="hsl(var(--accent) / 0.8)"
              strokeWidth="3.5"
              strokeLinecap="round"
              animate={{ d: ["M25 32 L10 45", "M25 32 L12 40", "M25 32 L10 45"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Right arm holding phone */}
            <motion.g
              animate={{ rotate: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ transformOrigin: "25px 32px" }}
            >
              <path d="M25 32 L38 42" stroke="hsl(var(--accent) / 0.8)" strokeWidth="3.5" strokeLinecap="round" />
              {/* Phone in hand */}
              <rect x="35" y="38" width="10" height="16" rx="2" fill="hsl(var(--foreground) / 0.7)" />
              <rect x="36.5" y="40" width="7" height="10" rx="1" fill="hsl(var(--primary) / 0.3)" />
            </motion.g>
            {/* Legs */}
            <path d="M25 55 L18 80" stroke="hsl(var(--foreground) / 0.5)" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M25 55 L32 80" stroke="hsl(var(--foreground) / 0.5)" strokeWidth="3.5" strokeLinecap="round" />
            {/* Shoes */}
            <ellipse cx="16" cy="82" rx="5" ry="3" fill="hsl(var(--primary) / 0.7)" />
            <ellipse cx="34" cy="82" rx="5" ry="3" fill="hsl(var(--primary) / 0.7)" />
          </svg>

          {/* Label */}
          <p className="mt-1 text-center text-[10px] font-bold text-muted-foreground">Finder</p>
        </motion.div>
      </motion.div>

      {/* Scan beam - dashed line from person to QR */}
      <motion.div
        className="absolute"
        style={{ left: "42%", top: "58%", width: "20%", height: "2px" }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="h-full w-full rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.6), hsl(var(--accent) / 0.6))" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        {/* Scan dot traveling */}
        <motion.div
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
          style={{ background: "hsl(var(--primary))", boxShadow: "0 0 8px hsl(var(--primary) / 0.5)" }}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
        />
      </motion.div>

      {/* Phone notification popup */}
      <motion.div
        className="absolute rounded-xl border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur-sm"
        style={{ left: "55%", top: "28%" }}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.8, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="flex items-center gap-2"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15"
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2.5, delay: 3.2 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </motion.div>
          <div>
            <p className="text-[10px] font-bold text-foreground">Calling Owner...</p>
            <p className="text-[8px] text-muted-foreground">Via Secure Link</p>
          </div>
        </motion.div>
      </motion.div>

      {/* "Connected" success badge */}
      <motion.div
        className="absolute left-[12%] top-[32%] flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 shadow-sm"
        initial={{ opacity: 0, scale: 0, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 3.8, type: "spring", stiffness: 200 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </motion.div>
        <span className="text-[9px] font-bold text-accent">Privacy Protected</span>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
