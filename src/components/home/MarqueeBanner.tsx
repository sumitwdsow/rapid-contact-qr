import { motion } from "framer-motion";

const items = [
  "🛡️ Privacy Protected",
  "⚡ No App Needed",
  "📱 Instant Contact",
  "🇮🇳 Made in India",
  "⭐ 4.9 Rating",
  "🚗 10,000+ Users",
  "🔒 Bank-Grade Security",
  "💯 Lifetime Validity",
  "🏍️ For Bikes & Cars",
  "🏠 For Homes Too",
];

const MarqueeBanner = () => {
  return (
    <motion.div
      className="marquee-fade overflow-hidden bg-secondary py-3.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <motion.span
            key={i}
            className="mx-8 inline-flex items-center text-sm font-bold tracking-wide text-secondary-foreground/80"
            whileHover={{ scale: 1.1, color: "hsl(16 89% 57%)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MarqueeBanner;
