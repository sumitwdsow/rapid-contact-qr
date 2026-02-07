import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Bangalore",
    vehicle: "Royal Enfield Classic 350",
    avatar: "RS",
    rating: 5,
    quote:
      "My bike was parked in a no-parking zone and I wasn't nearby. Someone scanned the QR and called my brother who moved it before it got towed. Lifesaver!",
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    vehicle: "Honda City",
    avatar: "PP",
    rating: 5,
    quote:
      "Had a minor accident and I was unconscious. The QR tag helped bystanders contact my husband immediately. Can't thank EmergencyCall enough!",
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Delhi",
    vehicle: "Apartment Owner",
    avatar: "AK",
    rating: 5,
    quote:
      "Delivery executives can now reach me easily without me sharing my number on every order. Privacy maintained and no more missed deliveries!",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Hyderabad",
    vehicle: "Activa 6G",
    avatar: "SR",
    rating: 5,
    quote:
      "As a solo woman rider, this gives me extra peace of mind. My family can be contacted in any emergency without exposing my personal number.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Active Users", emoji: "👥" },
  { value: 500, suffix: "+", label: "Lives Protected", emoji: "🛡️" },
  { value: 4.9, suffix: "", label: "User Rating", emoji: "⭐", decimal: true },
  { value: 50, suffix: "+", label: "Cities Covered", emoji: "🏙️" },
];

const AnimatedCounter = ({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(decimal ? Math.round(current * 10) / 10 : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, decimal]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-15" />

      <div className="container">
        {/* Stats Row */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="mb-2 text-3xl transition-transform duration-300 group-hover:scale-110">{stat.emoji}</p>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary">
            Real Stories
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trusted by <span className="text-gradient-primary">Thousands</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-400 hover:border-primary/20 hover:shadow-lg md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Quote decoration */}
              <div className="absolute -right-3 -top-3 text-7xl font-serif leading-none text-primary/[0.06]">
                "
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-[15px] leading-relaxed text-foreground/80">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-sm font-bold text-primary-foreground shadow-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.vehicle} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
