import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  ScanLine, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2,
  Users,
  Star
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background section-padding">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      {/* Gradient orbs - more subtle */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Trust badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="flex -space-x-1.5">
                {["RS", "PP", "AK"].map((initials, i) => (
                  <div
                    key={i}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium text-muted-foreground"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">10,000+</span> vehicle owners
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Protect Your{" "}
              <span className="text-gradient-primary">Vehicle & Home</span>{" "}
              with Smart QR Tags
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Our smart QR safety tags help people contact you instantly in emergencies—without 
              exposing your personal phone number. Stay safe, stay private.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/order">
                <Button
                  size="lg"
                  className="btn-primary h-12 gap-2 px-8 text-base"
                >
                  Get Your QR Tag
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base"
                >
                  See How It Works
                </Button>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                { icon: ShieldCheck, text: "Privacy Protected" },
                { icon: ScanLine, text: "No App Needed" },
                { icon: PhoneCall, text: "Instant Contact" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual - Clean phone mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative z-10 w-72 rounded-[2.5rem] border border-border bg-card p-2 shadow-xl sm:w-80">
                <div className="rounded-[2rem] bg-muted/30 p-1">
                  <div className="rounded-[1.75rem] bg-background">
                    {/* Status bar */}
                    <div className="flex items-center justify-center py-3">
                      <div className="h-6 w-20 rounded-full bg-foreground/10" />
                    </div>
                    
                    {/* Content */}
                    <div className="px-5 pb-6">
                      {/* Emergency header */}
                      <div className="mb-5 flex items-center gap-3 rounded-xl bg-primary/10 p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-primary">Emergency Contact</p>
                          <p className="text-sm font-semibold text-foreground">KA-01-AB-1234</p>
                        </div>
                      </div>

                      {/* QR visualization */}
                      <div className="mb-5 flex justify-center">
                        <div className="grid h-28 w-28 grid-cols-7 gap-1 rounded-xl bg-foreground/5 p-3">
                          {Array.from({ length: 49 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="rounded-[2px] bg-foreground/80"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: Math.random() > 0.35 ? 1 : 0 }}
                              transition={{ delay: 0.8 + i * 0.01, duration: 0.2 }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Contact buttons */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between rounded-xl bg-accent px-4 py-3 text-accent-foreground">
                          <div className="flex items-center gap-3">
                            <PhoneCall className="h-4 w-4" />
                            <span className="text-sm font-medium">Emergency Contact 1</span>
                          </div>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <div className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3">
                          <div className="flex items-center gap-3">
                            <PhoneCall className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Emergency Contact 2</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card - left */}
              <motion.div
                className="absolute -left-8 top-16 z-20 rounded-xl border border-border bg-card p-3 shadow-lg sm:-left-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Privacy First</p>
                    <p className="text-[11px] text-muted-foreground">Numbers hidden</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - right */}
              <motion.div
                className="absolute -right-4 bottom-24 z-20 rounded-xl border border-border bg-card p-3 shadow-lg sm:-right-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <ScanLine className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Quick Scan</p>
                    <p className="text-[11px] text-muted-foreground">No app required</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats card - bottom */}
              <motion.div
                className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-xl border border-border bg-card px-5 py-3 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-semibold text-foreground">10K+</span>
                    <span className="text-xs text-muted-foreground">Users</span>
                  </div>
                  <div className="h-4 w-px bg-border" />
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-semibold text-foreground">4.9</span>
                    <span className="text-xs text-muted-foreground">Rating</span>
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