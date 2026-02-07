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
    color: "bg-primary/10 text-primary",
  },
  {
    number: "2",
    icon: ShieldCheck,
    title: "Set",
    subtitle: "Register your emergency contacts securely in seconds.",
    color: "bg-accent/10 text-accent",
  },
  {
    number: "3",
    icon: PhoneCall,
    title: "Scan",
    subtitle: "Voilà! Anyone can scan & contact you in an emergency.",
    color: "bg-secondary/10 text-secondary",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-muted/30 py-20 md:py-28">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            It's (Really) Simple
          </span>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            The QR is where the{" "}
            <span className="text-gradient-primary">magic happens</span> :)
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="mx-auto max-w-4xl">
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
                  <div className="card-hover flex h-full flex-col items-center rounded-3xl border border-border bg-card p-8 text-center">
                    {/* Large Number */}
                    <div className="mb-4 text-7xl font-black text-primary/15 md:text-8xl">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${step.color} transition-transform group-hover:scale-110`}>
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
                      <ArrowRight className="h-6 w-6 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/order">
            <Button size="lg" className="btn-primary h-12 gap-2 px-8 text-base font-semibold">
              Get Your QR Tag Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
