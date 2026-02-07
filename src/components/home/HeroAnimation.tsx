import { motion } from "framer-motion";
import { Phone, QrCode, User, Car, Shield, CheckCircle } from "lucide-react";

const HeroAnimation = () => {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/5 via-card to-accent/5 border border-border/50 shadow-2xl overflow-hidden p-8">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Step 1: Car with QR code */}
      <motion.div
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Car body */}
        <div className="relative">
          <motion.div
            className="flex h-20 w-36 items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-muted/70 border border-border shadow-lg"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Car className="h-10 w-10 text-muted-foreground/60" strokeWidth={1.2} />
          </motion.div>

          {/* QR Code on car - small */}
          <motion.div
            className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-background border-2 border-primary/30 shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
          >
            <QrCode className="h-5 w-5 text-primary" strokeWidth={1.5} />
          </motion.div>

          {/* QR Scan pulse rings */}
          <motion.div
            className="absolute -right-3 -top-3 h-9 w-9 rounded-lg border-2 border-primary/40"
            animate={{
              scale: [1, 1.8, 2.2],
              opacity: [0.6, 0.2, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
          <motion.div
            className="absolute -right-3 -top-3 h-9 w-9 rounded-lg border-2 border-primary/30"
            animate={{
              scale: [1, 1.5, 1.9],
              opacity: [0.4, 0.15, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
          />
        </div>
      </motion.div>

      {/* Step 2: Person scanning */}
      <motion.div
        className="absolute left-[18%] top-[55%]"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 border border-accent/20 shadow-sm">
            <User className="h-6 w-6 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-semibold text-muted-foreground">Finder</span>
        </motion.div>
      </motion.div>

      {/* Scan beam from person to QR */}
      <motion.div
        className="absolute left-[30%] top-[42%] h-[2px] w-[18%] origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-gradient-to-r from-accent/60 to-primary/60"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Step 3: Phone connection animation */}
      <motion.div
        className="absolute right-[15%] top-[55%]"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 shadow-sm"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 3, delay: 2.5 }}
          >
            <Phone className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </motion.div>
          <span className="text-[10px] font-semibold text-muted-foreground">Owner</span>
        </motion.div>
      </motion.div>

      {/* Connection line from car to owner */}
      <motion.div
        className="absolute right-[28%] top-[42%] h-[2px] w-[18%] origin-right"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
      >
        <motion.div
          className="h-full w-full rounded-full bg-gradient-to-l from-primary/60 to-accent/40"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* Flow labels at bottom */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        {[
          { icon: QrCode, label: "Scan QR", color: "text-primary" },
          { icon: Shield, label: "Secure Link", color: "text-accent" },
          { icon: Phone, label: "Call Owner", color: "text-primary" },
        ].map((step, i) => (
          <motion.div
            key={step.label}
            className="flex items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 + i * 0.2 }}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
              <step.icon className={`h-3 w-3 ${step.color}`} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-bold text-foreground/70">{step.label}</span>
            {i < 2 && (
              <motion.span
                className="mx-1 text-muted-foreground/40"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              >
                →
              </motion.span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Success checkmark */}
      <motion.div
        className="absolute left-1/2 top-[22%] -translate-x-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/20 px-3 py-1.5"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <CheckCircle className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
          <span className="text-[10px] font-bold text-accent">Connected Securely</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;
