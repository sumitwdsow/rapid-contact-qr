import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the QR tag protect my privacy?",
    answer:
      "When someone scans your QR code, they only see a contact page with call buttons. Your actual phone numbers are never displayed. The caller sees a generic 'Emergency Contact 1' and 'Emergency Contact 2' button that connects them directly via a secure call.",
  },
  {
    question: "Do I need an app to scan the QR code?",
    answer:
      "No app is needed! Any smartphone camera can scan QR codes natively. The person scanning simply opens their camera, points at the QR code, and taps the link that appears. It works on both Android and iPhone.",
  },
  {
    question: "What if I want to change my emergency contacts?",
    answer:
      "You can update your emergency contacts anytime through our dashboard. Simply log in with your order ID or phone number, and you can modify contacts, add new ones, or update vehicle details instantly.",
  },
  {
    question: "How durable are the physical QR tags?",
    answer:
      "Our stickers are made with premium weatherproof vinyl that can withstand rain, sun, and extreme temperatures. The metal home plates are rust-resistant and designed for outdoor use. Both come with a 2-year durability guarantee.",
  },
  {
    question: "What's the difference between Digital and Physical QR?",
    answer:
      "Digital QR is delivered instantly to your WhatsApp/Email and you can print it yourself. Physical QR is a professionally printed, weatherproof sticker or metal plate shipped to your address within 3-5 business days.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-grade encryption to store your data. Your information is never shared with third parties. Only the emergency contacts you register can be reached through the QR scan.",
  },
  {
    question: "Can I use one QR for multiple vehicles?",
    answer:
      "Each QR code is unique to a specific vehicle or property. This ensures accurate information is displayed when scanned. You'll need separate QR tags for each vehicle or location you want to protect.",
  },
  {
    question: "What happens if my QR tag gets damaged?",
    answer:
      "Contact our support team with your order details, and we'll send a replacement at a discounted rate. Your registered information stays intact in our system, so the new QR will work immediately.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const FAQSection = () => {
  return (
    <section id="faq" className="relative bg-muted/30 py-20 md:py-28">
      {/* Floating accent */}
      <motion.div
        className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-primary/[0.03] blur-2xl"
        animate={{ y: [-15, 15, -15], x: [5, -5, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            FAQ
          </motion.span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Got Questions?
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about callowner.me
          </p>
        </motion.div>

        {/* FAQ Accordion — staggered slide-in */}
        <motion.div
          className="mx-auto max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="overflow-hidden rounded-2xl border border-border bg-card px-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md data-[state=open]:shadow-md data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-semibold hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <motion.a
              href="mailto:support@callowner.me"
              className="font-semibold text-primary underline-offset-4 hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Contact our support team →
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
