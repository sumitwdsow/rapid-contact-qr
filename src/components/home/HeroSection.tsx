import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ScanLine, PhoneCall, Sparkles, Star, Users } from "lucide-react";
import heroVideo from "@/assets/hero-scan-video.mp4";
import { useRef } from "react";

const usps = [
  { icon: ShieldCheck, label: "Private & Secure", sub: "Communication" },
  { icon: ScanLine, label: "No App Needed", sub: "Scan & Call" },
  { icon: PhoneCall, label: "Instant Emergency", sub: "Contact" },
];

// Staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const floatLeftY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const floatRightY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const bgOrb1X = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const bgOrb2X = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* Animated gradient background with parallax */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-3xl"
          style={{ x: bgOrb1X }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/[0.05] blur-3xl"
          style={{ x: bgOrb2X }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/[0.03] blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Floating decorative shapes */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-primary/20"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[15%] top-[60%] h-2 w-2 rounded-full bg-accent/30"
        animate={{
          y: [10, -15, 10],
          x: [5, -5, 5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-[60%] top-[15%] h-4 w-4 rotate-45 rounded-sm bg-primary/10"
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative py-14 md:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content — staggered children */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
              variants={itemVariants}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.span>
              India's #1 Smart QR Safety Solution
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
              variants={itemVariants}
            >
              Say Goodbye to{" "}
              <motion.span
                className="text-gradient-primary"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Parking Stress
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Our QR Safety Tags enable secure communication between you and anyone
              who needs to contact you about your vehicle — <strong className="text-foreground">without sharing
              personal information.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div className="mb-10 flex flex-col gap-3 sm:flex-row" variants={itemVariants}>
              <Link to="/order">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="btn-primary h-14 gap-2.5 rounded-2xl px-8 text-base font-bold"
                  >
                    Order Now — Starting ₹149
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <a href="#how-it-works">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-2xl border-2 px-8 text-base font-bold"
                  >
                    Watch How It Works
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* USP Badges — staggered */}
            <motion.div className="grid w-full grid-cols-3 gap-3" variants={itemVariants}>
              {usps.map((usp, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:text-left"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px hsl(16 89% 57% / 0.15)",
                    borderColor: "hsl(16 89% 57% / 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                    whileHover={{ rotate: 10 }}
                  >
                    <usp.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </motion.div>
                  <div>
                    <p className="text-xs font-bold text-foreground sm:text-sm">{usp.label}</p>
                    <p className="hidden text-xs text-muted-foreground sm:block">{usp.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Illustration with parallax */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.85, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="relative" style={{ y: imageY }}>
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-lg rounded-3xl lg:max-w-xl shadow-2xl"
              />

              {/* Floating stat card - left with parallax */}
              <motion.div
                className="absolute -left-4 bottom-12 rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-lg backdrop-blur-sm sm:-left-10"
                style={{ y: floatLeftY }}
                initial={{ opacity: 0, x: -40, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px -10px hsl(220 20% 16% / 0.15)" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Users className="h-5 w-5 text-accent" />
                  </motion.div>
                  <div>
                    <p className="text-xl font-extrabold text-foreground">10,000+</p>
                    <p className="text-xs font-medium text-muted-foreground">Protected Vehicles</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card - right with parallax */}
              <motion.div
                className="absolute -right-4 top-8 rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-lg backdrop-blur-sm sm:-right-10"
                style={{ y: floatRightY }}
                initial={{ opacity: 0, x: 40, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.08, boxShadow: "0 20px 40px -10px hsl(220 20% 16% / 0.15)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + s * 0.1, type: "spring" }}
                      >
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      </motion.span>
                    ))}
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-foreground">4.9/5</p>
                    <p className="text-xs font-medium text-muted-foreground">User Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Pulse indicator */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, type: "spring" }}
              >
                <motion.div
                  className="pulse-glow inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-foreground" />
                  </span>
                  Live Protection Active
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
