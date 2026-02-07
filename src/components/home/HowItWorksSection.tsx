import { motion } from "framer-motion";
import { ShieldCheck, ScanLine, PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    icon: ScanLine,
    title: "Get",
    subtitle: "Buy a smart Vehicle QR Tag that suits you.",
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    number: "2",
    icon: ShieldCheck,
    title: "Set",
    subtitle: "Register your emergency contacts securely in seconds.",
    gradient: "from-accent/15 to-accent/5",
    iconBg: "bg-accent/10 text-accent",
  },
  {
    number: "3",
    icon: PhoneCall,
    title: "Scan",
    subtitle: "Voilà! Anyone can scan & contact you in an emergency.",
    gradient: "from-secondary/15 to-secondary/5",
    iconBg: "bg-secondary/10 text-secondary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            It's (Really) Simple
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The QR is where the{" "}
            <span className="text-gradient-primary">magic happens</span> :)
          </h2>
          <p className="text-lg text-muted-foreground">
            Get protected in 3 simple steps — takes less than 2 minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className={`card-hover flex h-full flex-col items-center overflow-hidden rounded-3xl border border-border bg-gradient-to-b ${step.gradient} p-8 text-center backdrop-blur-sm`}>
                    {/* Large Number */}
                    <div className="mb-2 text-8xl font-black text-foreground/[0.06] md:text-9xl">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`-mt-8 mb-5 flex h-18 w-18 items-center justify-center rounded-2xl ${step.iconBg} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-2xl font-extrabold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/order">
            <Button size="lg" className="btn-primary h-14 gap-2.5 rounded-2xl px-10 text-base font-bold">
              Get Your QR Tag Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
