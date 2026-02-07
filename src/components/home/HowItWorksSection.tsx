import { motion } from "framer-motion";
import { ShieldCheck, ScanLine, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Get",
    subtitle: "Buy a smart Vehicle QR Tag that suits you.",
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
    hoverGlow: "group-hover:shadow-[0_0_40px_-5px_hsl(16,89%,57%,0.25)]",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Set",
    subtitle: "Register your emergency contacts securely in seconds.",
    gradient: "from-accent/15 to-accent/5",
    iconBg: "bg-accent/10 text-accent",
    hoverGlow: "group-hover:shadow-[0_0_40px_-5px_hsl(160,84%,31%,0.25)]",
  },
  {
    number: "03",
    icon: PhoneCall,
    title: "Scan",
    subtitle: "Voilà! Anyone can scan & contact you in an emergency.",
    gradient: "from-secondary/15 to-secondary/5",
    iconBg: "bg-secondary/10 text-secondary",
    hoverGlow: "group-hover:shadow-[0_0_40px_-5px_hsl(213,48%,20%,0.25)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />

      {/* Floating shapes */}
      <motion.div
        className="absolute left-[5%] top-[30%] h-20 w-20 rounded-full bg-primary/[0.04] blur-xl"
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] bottom-[20%] h-16 w-16 rounded-full bg-accent/[0.06] blur-xl"
        animate={{ y: [15, -25, 15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            It's (Really) Simple
          </motion.span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The QR is where the{" "}
            <span className="text-gradient-primary">magic happens</span> :)
          </h2>
          <p className="text-lg text-muted-foreground">
            Get protected in 3 simple steps — takes less than 2 minutes.
          </p>
        </motion.div>

        {/* Steps — staggered with 3D hover */}
        <motion.div
          className="mx-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="group relative"
                  variants={cardVariants}
                  style={{ perspective: "800px" }}
                >
                  <motion.div
                    className={`flex h-full flex-col items-center overflow-hidden rounded-3xl border border-border bg-gradient-to-b ${step.gradient} p-8 text-center backdrop-blur-sm transition-shadow duration-500 ${step.hoverGlow}`}
                    whileHover={{
                      rotateY: 5,
                      rotateX: -5,
                      scale: 1.03,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                  >
                    {/* Large Number */}
                    <motion.div
                      className="mb-2 text-8xl font-black text-foreground/[0.06] md:text-9xl"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.5, type: "spring" }}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className={`-mt-8 mb-5 flex h-18 w-18 items-center justify-center rounded-2xl ${step.iconBg} transition-all duration-300`}
                      whileHover={{
                        rotate: 15,
                        scale: 1.2,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="mb-2 text-2xl font-extrabold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </motion.div>

                  {/* Arrow connector with bounce */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.2, type: "spring", stiffness: 500 }}
                    >
                      <motion.div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          <Link to="/order">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" className="btn-primary h-14 gap-2.5 rounded-2xl px-10 text-base font-bold">
                Get Your QR Tag Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
