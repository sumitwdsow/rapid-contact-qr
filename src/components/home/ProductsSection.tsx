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

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Choose Your Protection
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            QR Tags for <span className="text-gradient-primary">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            All tags come with lifetime QR validity. No subscriptions, no hidden charges.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
            >
              <div
                className={`card-hover relative h-full overflow-hidden rounded-3xl border bg-card ${
                  product.popular
                    ? "border-primary/50 shadow-primary gradient-border"
                    : "border-border"
                }`}
              >
                {/* Popular badge */}
                {product.popular && (
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold text-primary-foreground shadow-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-muted/20">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Discount badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground shadow-sm">
                    {product.discount}
                  </div>
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
                    <span className="text-3xl font-extrabold text-foreground">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="mb-5 space-y-2.5">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
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
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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
