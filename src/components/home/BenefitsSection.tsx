import { motion } from "framer-motion";
import { ShieldCheck, Zap, Eye, Smartphone, Lock, Heart } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Privacy Protected",
    description: "Your phone number and personal details are never shown to anyone who scans the QR.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "No app needed. Anyone can scan and call your emergency contacts within seconds.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Eye,
    title: "Always Visible",
    description: "High-visibility QR tags ensure your safety info is always accessible when needed.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Compatible with any smartphone camera. No special apps or downloads required.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Your data is encrypted with bank-grade security. Only authorized contacts are reachable.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description: "Know that help can reach you even when you're not available to answer calls.",
    gradient: "from-accent/20 to-accent/5",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
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
          <span className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-secondary-foreground sm:text-4xl md:text-5xl">
            Built for Your <span className="text-primary">Safety</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70">
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
                className="group rounded-3xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-secondary-foreground/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/60">
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
