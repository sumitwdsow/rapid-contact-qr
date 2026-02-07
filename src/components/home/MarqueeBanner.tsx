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
    <div className="marquee-fade overflow-hidden bg-secondary py-3.5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center text-sm font-bold tracking-wide text-secondary-foreground/80"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
