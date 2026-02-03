import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, QrCode, Phone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-muted-foreground">
                Trusted by 10,000+ vehicle owners
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 text-display-md md:text-display-lg">
              Protect Your{" "}
              <span className="text-gradient-primary">Vehicle & Home</span>{" "}
              with Smart QR Tags
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Our smart QR safety tags help people contact you instantly in emergencies —
              without exposing your personal phone number or address. Stay safe, stay private.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/order">
                <Button
                  size="lg"
                  className="bg-gradient-primary shadow-primary hover:opacity-90 gap-2 text-base h-12 px-8"
                >
                  Order Your QR Tag
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-base h-12 px-8"
                >
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <QrCode className="h-5 w-5 text-primary" />
                <span>Instant Scan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span>Quick Contact</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Card */}
              <div className="relative z-10 rounded-2xl border border-border bg-card p-6 shadow-lg">
                {/* Phone Mockup */}
                <div className="mx-auto w-64 rounded-[2rem] border-4 border-foreground/10 bg-foreground/5 p-2">
                  <div className="rounded-[1.5rem] bg-background p-4">
                    {/* Status Bar */}
                    <div className="mb-4 flex items-center justify-center">
                      <div className="h-6 w-16 rounded-full bg-foreground/10" />
                    </div>
                    
                    {/* QR Preview */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">Emergency Contact</p>
                        <p className="font-semibold text-foreground">KA-01-AB-1234</p>
                      </div>
                      
                      {/* QR Code Placeholder */}
                      <div className="grid h-32 w-32 grid-cols-5 gap-1 rounded-lg bg-foreground/5 p-3">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-sm ${
                              Math.random() > 0.4 ? "bg-foreground" : "bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Contact Buttons */}
                      <div className="flex w-full flex-col gap-2">
                        <div className="flex h-10 items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium">
                          <Phone className="h-4 w-4" />
                          Call Emergency Contact
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 top-1/4 z-20 animate-float rounded-xl border border-border bg-card p-3 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Privacy First</p>
                    <p className="text-[10px] text-muted-foreground">Numbers hidden</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 z-20 animate-float rounded-xl border border-border bg-card p-3 shadow-md" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <QrCode className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">Instant Scan</p>
                    <p className="text-[10px] text-muted-foreground">No app needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
