import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#products", label: "Products" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-secondary py-2 text-center">
        <div className="container flex items-center justify-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <p className="text-xs font-semibold text-secondary-foreground sm:text-sm">
            🎉 Launch Offer — <span className="text-primary">50% OFF</span> on all QR Tags! Limited time only.
          </p>
          <Sparkles className="h-3.5 w-3.5 text-primary" />
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 glass">
        <div className="container flex h-16 items-center justify-between md:h-18">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link to="/activate">
              <Button variant="ghost" size="sm" className="font-medium text-muted-foreground hover:text-foreground">
                Activate QR
              </Button>
            </Link>
            <Link to="/track-order">
              <Button variant="ghost" size="sm" className="font-medium text-muted-foreground hover:text-foreground">
                Track Order
              </Button>
            </Link>
            <Link to="/modify-qr">
              <Button variant="ghost" size="sm" className="font-medium text-muted-foreground hover:text-foreground">
                Modify QR
              </Button>
            </Link>
            <Link to="/order">
              <Button size="sm" className="btn-primary rounded-xl">
                Order QR Tag
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="border-t border-border/40 bg-background md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="container flex flex-col gap-1 py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                  <Link to="/activate" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full rounded-xl">
                      Activate QR
                    </Button>
                  </Link>
                  <Link to="/track-order" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full rounded-xl">
                      Track Order
                    </Button>
                  </Link>
                  <Link to="/modify-qr" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full rounded-xl">
                      Modify QR
                    </Button>
                  </Link>
                  <Link to="/order" onClick={() => setIsMenuOpen(false)}>
                    <Button className="btn-primary w-full rounded-xl">
                      Order QR Tag
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
