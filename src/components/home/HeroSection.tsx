import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, ScanLine, PhoneCall, Sparkles } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const usps = [
  { icon: ShieldCheck, label: "Private & Secure", sub: "Communication" },
  { icon: ScanLine, label: "No App", sub: "Needed" },
  { icon: PhoneCall, label: "Instant Emergency", sub: "Contact" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              India's Smart QR Safety Solution
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Say Goodbye to{" "}
              <span className="text-gradient-primary">Parking Stress</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Our QR Safety Tags enable secure communication between you and anyone 
              who needs to contact you about your vehicle — <strong className="text-foreground">without sharing 
              personal information.</strong>
            </p>

            {/* CTAs */}
            <div className="mb-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/order">
                <Button
                  size="lg"
                  className="btn-primary h-13 gap-2 px-8 text-base font-semibold"
                >
                  Order Now — Starting ₹149
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 px-8 text-base font-semibold"
                >
                  Watch How It Works
                </Button>
              </a>
            </div>

            {/* USP Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {usps.map((usp, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-sm sm:flex-row sm:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <usp.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground sm:text-sm">{usp.label}</p>
                    <p className="hidden text-xs text-muted-foreground sm:block">{usp.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <img
                src={heroIllustration}
                alt="Person scanning QR tag on vehicle for emergency contact"
                className="w-full max-w-lg rounded-3xl lg:max-w-xl"
              />
              
              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-4 bottom-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-left-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">10,000+</p>
                    <p className="text-xs text-muted-foreground">Protected Vehicles</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-4 top-8 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">⭐</span>
                  <div>
                    <p className="text-lg font-bold text-foreground">4.9/5</p>
                    <p className="text-xs text-muted-foreground">User Rating</p>
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
