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

const FAQSection = () => {
  return (
    <section id="faq" className="bg-muted/40 section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Can't find what you're looking for? 
            Reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-5 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="py-4 text-left text-[15px] font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-[15px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="mailto:support@emergencycall.me"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;