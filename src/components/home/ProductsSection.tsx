import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Car, Home, Check, ArrowRight } from "lucide-react";

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

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-display-sm md:text-display-md">
            Choose Your QR Tag
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the perfect safety tag for your needs. All tags come with lifetime
            QR code validity.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <Card
                key={product.id}
                className={`relative overflow-hidden transition-all hover:shadow-lg ${
                  product.popular ? "border-2 border-accent" : ""
                }`}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most Popular
                  </div>
                )}

                <CardHeader className="pb-4">
                  {/* Icon */}
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                      product.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : product.color === "accent"
                        ? "bg-accent/10 text-accent"
                        : "bg-secondary/10 text-secondary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                          <Check className="h-3 w-3 text-accent" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Link to={`/order?type=${product.id}`} className="w-full">
                    <Button
                      className={`w-full gap-2 ${
                        product.popular
                          ? "bg-gradient-primary shadow-primary hover:opacity-90"
                          : ""
                      }`}
                      variant={product.popular ? "default" : "outline"}
                    >
                      Order Now
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            💳 All major payment methods accepted • 🚚 Free shipping on orders above ₹499
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
