import { motion } from "framer-motion";

const items = [
  "🛡️ Privacy Protected",
  "⚡ No App Needed",
  "📱 Instant Contact",
  "🇮🇳 Made in India",
  "⭐ 4.9 Rating",
  "🚗 10,000+ Users",
  "🔒 Secure & Safe",
  "💯 Lifetime Validity",
];

const MarqueeBanner = () => {
  return (
    <div className="overflow-hidden bg-primary py-2.5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center text-sm font-semibold text-primary-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeBanner;
