import { Link } from "react-router-dom";
import { motion, type Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Car, Home, Check, ArrowRight, Star } from "lucide-react";

const easeOut: Easing = [0.33, 1, 0.68, 1];

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
    color: "primary",
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
    color: "accent",
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
    color: "secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-display-sm md:text-display-md">
            Choose Your QR Tag
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the perfect safety tag for your needs. All tags come with lifetime
            QR code validity.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <motion.div key={product.id} variants={cardVariants}>
                <Card
                  className={`relative overflow-hidden transition-all hover:shadow-xl group ${
                    product.popular ? "border-2 border-accent" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {product.popular && (
                    <motion.div
                      className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
                    >
                      <Star className="h-3 w-3 fill-current" />
                      Most Popular
                    </motion.div>
                  )}

                  <CardHeader className="pb-4">
                    {/* Icon */}
                    <motion.div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                        product.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : product.color === "accent"
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.div>

                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-4">
                    {/* Price */}
                    <div className="mb-6 flex items-baseline gap-2">
                      <motion.span
                        className="text-3xl font-bold"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        {product.price}
                      </motion.span>
                      <span className="text-lg text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <motion.div
                            className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10"
                            whileHover={{ scale: 1.2 }}
                          >
                            <Check className="h-3 w-3 text-accent" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Link to={`/order?type=${product.id}`} className="w-full">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className={`w-full gap-2 ${
                            product.popular
                              ? "bg-gradient-primary shadow-primary hover:opacity-90"
                              : ""
                          }`}
                          variant={product.popular ? "default" : "outline"}
                        >
                          Order Now
                          <motion.span
                            className="inline-block"
                            whileHover={{ x: 5 }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.span>
                        </Button>
                      </motion.div>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            💳 All major payment methods accepted • 🚚 Free shipping on orders above ₹499
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
