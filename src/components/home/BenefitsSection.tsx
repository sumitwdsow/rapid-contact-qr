import { Shield, Clock, Eye, Smartphone, Lock, Heart } from "lucide-react";

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

const BenefitsSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-display-sm md:text-display-md text-secondary-foreground">
            Why Choose EmergencyCall.me?
          </h2>
          <p className="text-lg text-secondary-foreground/80">
            Designed with your safety and privacy in mind. Here's what makes us
            different.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl bg-secondary-foreground/5 p-6 transition-all hover:bg-secondary-foreground/10"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-secondary-foreground/70">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
