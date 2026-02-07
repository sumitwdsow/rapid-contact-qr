import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Sparkles, Phone, Clock } from "lucide-react";
import { useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const bgOrb1Y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgOrb2Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={sectionRef} className="py-16 md:py-20">
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 md:p-16"
          style={{ scale }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background decoration with parallax */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
              style={{ y: bgOrb1Y }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
              style={{ y: bgOrb2Y }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Dots pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Floating sparkles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/40"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7 }}
            />
          ))}

          <div className="relative flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-primary-foreground backdrop-blur-sm"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.span>
              Limited Time — 50% Off All Tags
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="mb-5 text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Protect What Matters Most
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              className="mb-10 max-w-xl text-base text-primary-foreground/85 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
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
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Link to="/order">
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    size="lg"
                    className="h-14 gap-2.5 rounded-2xl bg-white px-10 text-base font-bold text-primary shadow-xl transition-all hover:bg-white/90 hover:shadow-2xl"
                  >
                    Order Your QR Tag
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-primary-foreground/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {[
                { icon: ShieldCheck, text: "Privacy First" },
                { icon: Clock, text: "Lifetime Validity" },
                { icon: Phone, text: "24/7 Support" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className="h-4 w-4" /> {item.text}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
