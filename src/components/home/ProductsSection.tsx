import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bike, Car, Home, Check, ArrowRight, Sparkles } from "lucide-react";

const products = [
  {
    id: "bike",
    icon: Bike,
    title: "Bike QR Tag",
    description: "Perfect for two-wheelers. Weatherproof and compact design fits any motorcycle or scooter.",
    price: "₹149",
    originalPrice: "₹299",
    features: [
      "Weatherproof sticker",
      "2 emergency contacts",
      "Vehicle details display",
      "Instant WhatsApp delivery",
    ],
    popular: false,
  },
  {
    id: "car",
    icon: Car,
    title: "Car QR Tag",
    description: "Premium tag for cars. Stick on windshield or dashboard for easy visibility.",
    price: "₹199",
    originalPrice: "₹399",
    features: [
      "Premium vinyl sticker",
      "2 emergency contacts",
      "Vehicle registration display",
      "Dashboard + Windshield options",
    ],
    popular: true,
  },
  {
    id: "home",
    icon: Home,
    title: "Home QR Tag",
    description: "Secure your home entrance. Helps delivery personnel or visitors reach you quickly.",
    price: "₹249",
    originalPrice: "₹499",
    features: [
      "Durable metal plate",
      "2 emergency contacts",
      "Address & location display",
      "Perfect for apartments",
    ],
    popular: false,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Choose Your Protection
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            QR Tags for Every Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the perfect safety tag for your needs. All tags come with lifetime QR validity.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`card-hover relative h-full rounded-2xl border bg-card p-6 ${
                    product.popular 
                      ? "border-primary/50 ring-1 ring-primary/20" 
                      : "border-border"
                  }`}
                >
                  {/* Popular badge */}
                  {product.popular && (
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      Most Popular
                    </div>
                  )}

                  <div className="mb-5">
                    {/* Icon */}
                    <div className="icon-container icon-container-lg mb-4 bg-muted text-foreground">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {product.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {product.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      50% off
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="mb-6 space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to={`/order?type=${product.id}`} className="block">
                    <Button
                      className={`w-full gap-2 ${
                        product.popular ? "btn-primary" : ""
                      }`}
                      variant={product.popular ? "default" : "outline"}
                    >
                      Order Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            All major payment methods accepted • Free shipping on orders above ₹499
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;