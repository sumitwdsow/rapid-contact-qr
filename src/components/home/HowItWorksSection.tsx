import { QrCode, Phone, Shield, ArrowRight } from "lucide-react";

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

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-display-sm md:text-display-md">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get protected in 3 simple steps. It's quick, easy, and works
            everywhere.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
            };

            return (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden w-full translate-x-1/2 md:block">
                    <div className="flex items-center justify-center">
                      <div className="h-0.5 w-full bg-border" />
                      <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                    </div>
                  </div>
                )}

                {/* Step Card */}
                <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg md:p-8">
                  {/* Step Number */}
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Step {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                      colorClasses[step.color as keyof typeof colorClasses]
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex items-center justify-center gap-4 text-center text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent">
            <Shield className="h-4 w-4" />
            Your personal details are never exposed
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
