import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-primary-foreground"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Offer - 50% Off</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
            >
              <ShieldCheck className="h-7 w-7 text-primary-foreground" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Protect What Matters Most
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="mb-8 max-w-xl text-base text-primary-foreground/90 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Join 10,000+ Indians who trust EmergencyCall.me for their vehicle and
              home safety. Get your QR tag today.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/order">
                <Button
                  size="lg"
                  className="h-12 gap-2 bg-white px-8 text-base font-semibold text-primary hover:bg-white/90"
                >
                  Order Your QR Tag
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust note */}
            <motion.p
              className="mt-6 text-sm text-primary-foreground/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Free shipping on orders above ₹499 • 30-day money-back guarantee
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;