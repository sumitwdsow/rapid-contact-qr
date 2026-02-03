import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Sparkles, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-primary-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <span>Limited Time Offer - 50% Off</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <Shield className="h-8 w-8 text-primary-foreground" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="mb-4 text-display-sm text-primary-foreground md:text-display-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Protect What Matters Most
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="mb-8 max-w-xl text-lg text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Join 10,000+ Indians who trust EmergencyCall.me for their vehicle and
              home safety. Get your QR tag today and never worry about emergencies again.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/order">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 bg-white text-primary hover:bg-white/90 h-12 px-8 text-base font-semibold"
                  >
                    <Zap className="h-4 w-4" />
                    Order Your QR Tag Now
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Note */}
            <motion.p
              className="mt-6 text-sm text-primary-foreground/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              ✓ Free shipping on orders above ₹499 • ✓ 30-day money-back guarantee
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
