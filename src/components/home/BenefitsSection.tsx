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

const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      {/* Animated gradient blurs */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl">
            Built for Your <span className="text-primary">Safety</span>
          </h2>
          <p className="text-lg text-secondary-foreground/60">
            Designed with your safety and privacy as top priorities.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group rounded-3xl border border-secondary-foreground/[0.08] bg-secondary-foreground/[0.03] p-7 backdrop-blur-sm transition-all duration-400 hover:border-primary/20 hover:bg-secondary-foreground/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-primary">
                  <Icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/55">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
