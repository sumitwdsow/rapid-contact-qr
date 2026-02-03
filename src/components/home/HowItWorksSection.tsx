import { motion, type Easing } from "framer-motion";
import { QrCode, Phone, Shield, ArrowRight } from "lucide-react";

const easeOut: Easing = [0.33, 1, 0.68, 1];

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "Place QR Tag",
    description:
      "Stick your personalized QR tag on your vehicle or at your home entrance. It's weatherproof and durable.",
    color: "primary",
  },
  {
    number: "02",
    icon: Phone,
    title: "Someone Scans",
    description:
      "In an emergency, anyone can scan the QR code with their phone camera. No app download required.",
    color: "secondary",
  },
  {
    number: "03",
    icon: Shield,
    title: "Contact Made Safely",
    description:
      "They can call your emergency contacts instantly without seeing your personal phone numbers.",
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-display-sm md:text-display-md">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get protected in 3 simple steps. It's quick, easy, and works
            everywhere.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
            };

            return (
              <motion.div
                key={step.number}
                className="relative"
                variants={stepVariants}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden w-full translate-x-1/2 md:block">
                    <motion.div
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <motion.div
                        className="h-0.5 w-full bg-border"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                      />
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + index * 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                      </motion.div>
                    </motion.div>
                  </div>
                )}

                {/* Step Card */}
                <motion.div
                  className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg md:p-8"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Step Number */}
                  <motion.span
                    className="absolute -top-3 left-6 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 400 }}
                  >
                    Step {step.number}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                      colorClasses[step.color as keyof typeof colorClasses]
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-4 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Shield className="h-4 w-4" />
            Your personal details are never exposed
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
