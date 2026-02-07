import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ScanLine, PhoneCall, Sparkles, Star, Users } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const usps = [
  { icon: ShieldCheck, label: "Private & Secure", sub: "Communication" },
  { icon: ScanLine, label: "No App Needed", sub: "Scan & Call" },
  { icon: PhoneCall, label: "Instant Emergency", sub: "Contact" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container relative py-14 md:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Trust badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              India's #1 Smart QR Safety Solution
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Say Goodbye to{" "}
              <span className="text-gradient-primary">Parking Stress</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our QR Safety Tags enable secure communication between you and anyone 
              who needs to contact you about your vehicle — <strong className="text-foreground">without sharing 
              personal information.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mb-10 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link to="/order">
                <Button
                  size="lg"
                  className="btn-primary h-14 gap-2.5 rounded-2xl px-8 text-base font-bold"
                >
                  Order Now — Starting ₹149
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-2xl border-2 px-8 text-base font-bold"
                >
                  Watch How It Works
                </Button>
              </a>
            </motion.div>

            {/* USP Badges */}
            <motion.div
              className="grid w-full grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {usps.map((usp, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:text-left"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <usp.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground sm:text-sm">{usp.label}</p>
                    <p className="hidden text-xs text-muted-foreground sm:block">{usp.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <img
                src={heroIllustration}
                alt="Person scanning QR tag on vehicle for emergency contact"
                className="w-full max-w-lg rounded-3xl lg:max-w-xl"
              />
              
              {/* Floating stat card - left */}
              <motion.div
                className="animate-float absolute -left-4 bottom-12 rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-lg backdrop-blur-sm sm:-left-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-foreground">10,000+</p>
                    <p className="text-xs font-medium text-muted-foreground">Protected Vehicles</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat card - right */}
              <motion.div
                className="animate-float-delayed absolute -right-4 top-8 rounded-2xl border border-border bg-card/95 px-5 py-3.5 shadow-lg backdrop-blur-sm sm:-right-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-primary text-primary" />
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="pulse-glow inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-foreground" />
                  </span>
                  Live Protection Active
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
