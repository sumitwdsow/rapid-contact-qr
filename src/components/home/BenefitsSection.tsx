import { motion } from "framer-motion";
import { ShieldCheck, Zap, Eye, Smartphone, Lock, Heart } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Privacy Protected",
    description:
      "Your phone number and personal details are never shown. Only you control who can contact you.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "No app needed. Anyone can scan and call your emergency contacts within seconds.",
  },
  {
    icon: Eye,
    title: "Always Visible",
    description:
      "High-visibility QR tags ensure your safety information is easily accessible when needed.",
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description:
      "Compatible with any smartphone camera. No special apps or downloads required.",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    description:
      "Your data is encrypted and stored securely. Only authorized contacts are displayed.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    description:
      "Know that help can reach you even when you're not available to answer calls.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Choose Us
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Built for Your Safety
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Designed with your safety and privacy as top priorities. Here's what makes us different.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                className="group rounded-2xl bg-secondary-foreground/5 p-6 transition-colors hover:bg-secondary-foreground/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/70">
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