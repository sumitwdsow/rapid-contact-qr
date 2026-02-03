import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm text-primary-foreground">
              <Sparkles className="h-4 w-4" />
              <span>Limited Time Offer - 50% Off</span>
            </div>

            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>

            {/* Headline */}
            <h2 className="mb-4 text-display-sm text-primary-foreground md:text-display-md">
              Protect What Matters Most
            </h2>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-lg text-primary-foreground/90">
              Join 10,000+ Indians who trust EmergencyCall.me for their vehicle and
              home safety. Get your QR tag today and never worry about emergencies again.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/order">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-primary hover:bg-white/90 h-12 px-8 text-base font-semibold"
                >
                  Order Your QR Tag Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Trust Note */}
            <p className="mt-6 text-sm text-primary-foreground/70">
              ✓ Free shipping on orders above ₹499 • ✓ 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
