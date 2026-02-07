import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
  { value: "10,000+", label: "Active Users", emoji: "👥" },
  { value: "500+", label: "Lives Protected", emoji: "🛡️" },
  { value: "4.9", label: "User Rating", emoji: "⭐" },
  { value: "50+", label: "Cities Covered", emoji: "🏙️" },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Stats Row */}
        <motion.div
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="mb-1 text-2xl">{stat.emoji}</p>
              <p className="text-2xl font-extrabold text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
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
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Quote decoration */}
              <div className="absolute -right-2 -top-2 text-6xl font-serif text-primary/5">
                "
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-[15px] leading-relaxed text-foreground/85">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-sm font-bold text-primary-foreground">
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
