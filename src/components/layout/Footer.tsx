import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Shield, Star } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Bike QR Tag", href: "/order?type=bike" },
      { label: "Car QR Tag", href: "/order?type=car" },
      { label: "Home QR Tag", href: "/order?type=home" },
      { label: "Pricing", href: "#products" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  };

  const trustBadges = [
    { icon: Shield, label: "SSL Secured" },
    { icon: Star, label: "4.9★ Rated" },
  ];

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      {/* Quick CTA Strip */}
      <div className="border-b border-secondary-foreground/10 bg-secondary-foreground/5 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold text-secondary-foreground">
              Ready to protect your vehicle?
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Starting at just ₹149 — Lifetime validity
            </p>
          </div>
          <Link to="/order">
            <Button className="btn-primary gap-2 font-semibold">
              Order Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="container py-12 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo inverted />
            <p className="max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              Protect your vehicle and home with smart QR safety tags. Quick emergency
              contact without exposing personal details.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                🇮🇳 Made in India
              </span>
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1 rounded-full bg-secondary-foreground/10 px-3 py-1 text-xs font-medium text-secondary-foreground/60"
                >
                  <badge.icon className="h-3 w-3" />
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary-foreground/50">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary-foreground/50">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-secondary-foreground/50">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-secondary-foreground/70">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span className="break-all">support@emergencycall.me</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-secondary-foreground/70">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2.5 text-sm text-secondary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Bangalore, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-secondary-foreground/50 sm:text-sm">
            © {currentYear} EmergencyCall.me. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-secondary-foreground/50 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
