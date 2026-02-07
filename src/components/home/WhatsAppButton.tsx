import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20know%20about%20QR%20safety%20tags"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg transition-transform hover:scale-110"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
