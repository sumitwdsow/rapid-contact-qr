import { motion } from "framer-motion";
import { ShieldCheck, Zap, Eye, Smartphone, Lock, Heart } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Privacy Protected",
    description: "Your phone number and personal details are never shown to anyone who scans the QR.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "No app needed. Anyone can scan and call your emergency contacts within seconds.",
  },
  {
    icon: Eye,
    title: "Always Visible",
    description: "High-visibility QR tags ensure your safety info is always accessible when needed.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Compatible with any smartphone camera. No special apps or downloads required.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Your data is encrypted with bank-grade security. Only authorized contacts are reachable.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description: "Know that help can reach you even when you're not available to answer calls.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      {/* Animated gradient blurs with motion */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary/20"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-(i * 3), i * 3, -(i * 3)],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            Why Choose Us
          </motion.span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl">
            Built for Your <span className="text-primary">Safety</span>
          </h2>
          <p className="text-lg text-secondary-foreground/60">
            Designed with your safety and privacy as top priorities.
          </p>
        </motion.div>

        {/* Benefits Grid — staggered with hover effects */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-3xl border border-secondary-foreground/[0.08] bg-secondary-foreground/[0.03] p-7 backdrop-blur-sm"
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "hsl(16 89% 57% / 0.3)",
                  backgroundColor: "hsl(0 0% 100% / 0.06)",
                  boxShadow: "0 20px 50px -15px hsl(16 89% 57% / 0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <motion.div
                  className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: "hsl(16 89% 57%)",
                    boxShadow: "0 8px 30px 0 hsl(16 89% 57% / 0.35)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" strokeWidth={1.5} />
                </motion.div>
                <h3 className="mb-2 text-lg font-bold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/55">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
