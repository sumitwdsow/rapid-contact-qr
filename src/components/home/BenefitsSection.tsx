import { motion, type Easing } from "framer-motion";
import { Shield, Clock, Eye, Smartphone, Lock, Heart } from "lucide-react";

const easeOut: Easing = [0.33, 1, 0.68, 1];

const benefits = [
  {
    icon: Shield,
    title: "Privacy Protected",
    description:
      "Your phone number and personal details are never shown. Only you control who can contact you.",
  },
  {
    icon: Clock,
    title: "Instant Response",
    description:
      "No app needed. Anyone can scan and call your emergency contacts within seconds.",
  },
  {
    icon: Eye,
    title: "Always Visible",
    description:
      "High-visibility QR tags ensure your safety information is easily accessible.",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const BenefitsSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-display-sm md:text-display-md text-secondary-foreground">
            Why Choose EmergencyCall.me?
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Designed with your safety and privacy in mind. Here's what makes us
            different.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                className="group rounded-2xl bg-secondary-foreground/5 p-6 transition-all hover:bg-secondary-foreground/10"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-secondary-foreground/70">
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
