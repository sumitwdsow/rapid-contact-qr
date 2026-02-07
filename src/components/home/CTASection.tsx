import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Sparkles, Phone, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
          </div>

          {/* Dots pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />

          <div className="relative flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-primary-foreground backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              Limited Time — 50% Off All Tags
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="mb-5 text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Protect What Matters Most
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="mb-10 max-w-xl text-base text-primary-foreground/85 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join 10,000+ Indians who trust EmergencyCall.me for their vehicle and
              home safety. Starting at just ₹149.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/order">
                <Button
                  size="lg"
                  className="h-14 gap-2.5 rounded-2xl bg-white px-10 text-base font-bold text-primary shadow-xl transition-all hover:bg-white/90 hover:shadow-2xl"
                >
                  Order Your QR Tag
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-primary-foreground/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> Privacy First
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> Lifetime Validity
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-4 w-4" /> 24/7 Support
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
