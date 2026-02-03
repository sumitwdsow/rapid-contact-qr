import { motion } from "framer-motion";
import { ScanLine, PhoneCall, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Place Your QR Tag",
    description:
      "Stick the personalized QR tag on your vehicle or at your home entrance. It's weatherproof and built to last.",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Someone Scans It",
    description:
      "In an emergency, anyone can scan the QR code with their phone camera. No app download needed.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Contact Made Safely",
    description:
      "They can call your emergency contacts instantly without ever seeing your personal phone numbers.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-muted/40 section-padding">
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
            Simple & Effective
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get protected in 3 simple steps. Quick setup, works everywhere.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-border lg:block" />
          
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  {/* Step card */}
                  <div className="card-hover rounded-2xl border border-border bg-card p-8">
                    {/* Step number */}
                    <div className="mb-6 flex items-center justify-between">
                      <span className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-3 text-xs font-bold text-primary-foreground">
                        Step {step.number}
                      </span>
                      {/* Connector dot on desktop */}
                      <div className="hidden h-3 w-3 rounded-full bg-primary lg:block" />
                    </div>

                    {/* Icon */}
                    <div className="icon-container icon-container-lg mb-5 bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Privacy note */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent">
            <ShieldCheck className="h-4 w-4" />
            Your personal details are never exposed
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;