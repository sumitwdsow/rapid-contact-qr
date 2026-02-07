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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 200 },
  },
};

const testimonialVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    rotateY: i % 2 === 0 ? -5 : 5,
  }),
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-15" />

      {/* Floating shapes */}
      <motion.div
        className="absolute left-[8%] top-[40%] h-24 w-24 rounded-full bg-primary/[0.03] blur-2xl"
        animate={{ y: [-15, 25, -15], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container">
        {/* Stats Row — staggered with scale-in */}
        <motion.div
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group rounded-3xl border border-border bg-card p-6 text-center shadow-sm"
              variants={statVariants}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: "0 20px 40px -10px hsl(220 20% 16% / 0.1)",
                borderColor: "hsl(16 89% 57% / 0.2)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.p
                className="mb-2 text-3xl"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ type: "spring" }}
              >
                {stat.emoji}
              </motion.p>
              <p className="text-3xl font-extrabold text-foreground md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimal={stat.decimal} />
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
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
            Real Stories
          </motion.span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trusted by <span className="text-gradient-primary">Thousands</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid — alternating slide directions */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-8"
              custom={index}
              variants={testimonialVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -6,
                borderColor: "hsl(16 89% 57% / 0.2)",
                boxShadow: "0 20px 50px -15px hsl(220 20% 16% / 0.12)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              style={{ perspective: "800px" }}
            >
              {/* Quote decoration */}
              <motion.div
                className="absolute -right-3 -top-3 text-7xl font-serif leading-none text-primary/[0.06]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                "
              </motion.div>

              {/* Rating — staggered stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 500 }}
                  >
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </motion.span>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-[15px] leading-relaxed text-foreground/80">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 text-sm font-bold text-primary-foreground shadow-sm"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {testimonial.avatar}
                </motion.div>
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
