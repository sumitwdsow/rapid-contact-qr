import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles, Clock, Truck } from "lucide-react";
import productBike from "@/assets/product-bike.png";
import productCar from "@/assets/product-car.png";
import productHome from "@/assets/product-home.png";

const products = [
  {
    id: "bike",
    image: productBike,
    title: "Bike QR Tag",
    description: "Perfect for two-wheelers. Weatherproof and compact.",
    price: "₹149",
    originalPrice: "₹299",
    discount: "50% OFF",
    features: [
      "Weatherproof sticker",
      "2 emergency contacts",
      "Vehicle details display",
      "Instant WhatsApp delivery",
    ],
    popular: false,
    delivery: "Digital: Instant",
  },
  {
    id: "car",
    image: productCar,
    title: "Car QR Tag",
    description: "Premium tag for cars. Easy visibility on windshield.",
    price: "₹199",
    originalPrice: "₹399",
    discount: "50% OFF",
    features: [
      "Premium vinyl sticker",
      "2 emergency contacts",
      "Vehicle registration display",
      "Dashboard + Windshield options",
    ],
    popular: true,
    delivery: "Ships in 3-5 days",
  },
  {
    id: "home",
    image: productHome,
    title: "Home QR Tag",
    description: "Secure your home entrance for visitors & delivery.",
    price: "₹249",
    originalPrice: "₹499",
    discount: "50% OFF",
    features: [
      "Durable metal plate",
      "2 emergency contacts",
      "Address & location display",
      "Perfect for apartments",
    ],
    popular: false,
    delivery: "Ships in 3-5 days",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/[0.03] blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            Choose Your Protection
          </motion.span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            QR Tags for <span className="text-gradient-primary">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            All tags come with lifetime QR validity. No subscriptions, no hidden charges.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative"
              variants={cardVariants}
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className={`relative h-full overflow-hidden rounded-3xl border bg-card ${
                  product.popular
                    ? "border-primary/50 shadow-primary gradient-border"
                    : "border-border"
                }`}
                whileHover={{
                  y: -8,
                  rotateY: 3,
                  boxShadow: product.popular
                    ? "0 25px 50px -12px hsl(16 89% 57% / 0.25)"
                    : "0 25px 50px -12px hsl(220 20% 16% / 0.12)",
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                {/* Popular badge */}
                {product.popular && (
                  <motion.div
                    className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-primary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Sparkles className="h-3.5 w-3.5" />
                    </motion.span>
                    Most Popular
                  </motion.div>
                )}

                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-muted/20">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Discount badge */}
                  <motion.div
                    className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground shadow-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    {product.discount}
                  </motion.div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="mb-5 flex items-baseline gap-2">
                    <motion.span
                      className="text-3xl font-extrabold text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {product.price}
                    </motion.span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Features — staggered check marks */}
                  <ul className="mb-5 space-y-2.5">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2.5 text-sm"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                      >
                        <motion.div
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10"
                          whileHover={{ scale: 1.3, backgroundColor: "hsl(160 84% 31% / 0.2)" }}
                        >
                          <Check className="h-3 w-3 text-accent" />
                        </motion.div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Delivery info */}
                  <div className="mb-5 flex items-center gap-2 rounded-xl bg-muted/50 px-3 py-2.5 text-xs font-medium text-muted-foreground">
                    {product.delivery.includes("Instant") ? (
                      <Clock className="h-3.5 w-3.5 text-accent" />
                    ) : (
                      <Truck className="h-3.5 w-3.5 text-primary" />
                    )}
                    {product.delivery}
                  </div>

                  {/* CTA */}
                  <Link to={`/order?type=${product.id}`} className="block">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button
                        className={`w-full gap-2 rounded-xl font-bold ${
                          product.popular ? "btn-primary" : ""
                        }`}
                        variant={product.popular ? "default" : "outline"}
                        size="lg"
                      >
                        Order Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm font-medium text-muted-foreground">
            💳 All major payment methods accepted • 🚚 Free shipping on orders above ₹499
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
