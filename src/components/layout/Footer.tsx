import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Bike QR", href: "/order?type=bike" },
      { label: "Car QR", href: "/order?type=car" },
      { label: "Home QR", href: "/order?type=home" },
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

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                <ShieldCheck className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">
                Emergency<span className="text-primary">Call</span>
                <span className="text-secondary-foreground/60">.me</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              Protect your vehicle and home with smart QR safety tags. Quick emergency
              contact without exposing personal details.
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
              🇮🇳 Made in India
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
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
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-secondary-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                support@emergencycall.me
              </li>
              <li className="flex items-center gap-2.5 text-sm text-secondary-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2.5 text-sm text-secondary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Bangalore, Karnataka, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-secondary-foreground/50">
            © {currentYear} EmergencyCall.me. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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