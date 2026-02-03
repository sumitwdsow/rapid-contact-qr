import { Link } from "react-router-dom";
import { motion, type Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, QrCode, Phone, ArrowRight, Sparkles } from "lucide-react";

const easeOut: Easing = [0.33, 1, 0.68, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-block h-2 w-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-muted-foreground">
                Trusted by 10,000+ vehicle owners
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-display-md md:text-display-lg"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Protect Your{" "}
              <span className="text-gradient-primary">Vehicle & Home</span>{" "}
              with Smart QR Tags
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mb-8 max-w-xl text-lg text-muted-foreground"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              Our smart QR safety tags help people contact you instantly in emergencies —
              without exposing your personal phone number or address. Stay safe, stay private.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Link to="/order">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-primary shadow-primary hover:opacity-90 gap-2 text-base h-12 px-8"
                  >
                    <Sparkles className="h-4 w-4" />
                    Order Your QR Tag
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </Link>
              <a href="#how-it-works">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 text-base h-12 px-8"
                  >
                    See How It Works
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {[
                { icon: Shield, text: "Privacy Protected", color: "text-accent" },
                { icon: QrCode, text: "Instant Scan", color: "text-primary" },
                { icon: Phone, text: "Quick Contact", color: "text-secondary" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="relative z-10 rounded-2xl border border-border bg-card p-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Phone Mockup */}
                <div className="mx-auto w-64 rounded-[2rem] border-4 border-foreground/10 bg-foreground/5 p-2">
                  <div className="rounded-[1.5rem] bg-background p-4">
                    {/* Status Bar */}
                    <div className="mb-4 flex items-center justify-center">
                      <div className="h-6 w-16 rounded-full bg-foreground/10" />
                    </div>
                    
                    {/* QR Preview */}
                    <div className="flex flex-col items-center gap-4">
                      <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Shield className="h-8 w-8 text-primary" />
                      </motion.div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Emergency Contact</p>
                        <p className="font-semibold text-foreground">KA-01-AB-1234</p>
                      </div>
                      
                      {/* QR Code Placeholder */}
                      <motion.div
                        className="grid h-32 w-32 grid-cols-5 gap-1 rounded-lg bg-foreground/5 p-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {Array.from({ length: 25 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="rounded-sm bg-foreground"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: Math.random() > 0.4 ? 1 : 0,
                              scale: 1 
                            }}
                            transition={{ delay: 0.6 + i * 0.02 }}
                          />
                        ))}
                      </motion.div>
                      
                      {/* Contact Button */}
                      <motion.div
                        className="flex w-full flex-col gap-2"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex h-10 items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium">
                          <Phone className="h-4 w-4" />
                          Call Emergency Contact
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -left-8 top-1/4 z-20 rounded-xl border border-border bg-card p-3 shadow-md"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Privacy First</p>
                    <p className="text-[10px] text-muted-foreground">Numbers hidden</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 bottom-1/4 z-20 rounded-xl border border-border bg-card p-3 shadow-md"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <QrCode className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Instant Scan</p>
                    <p className="text-[10px] text-muted-foreground">No app needed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
