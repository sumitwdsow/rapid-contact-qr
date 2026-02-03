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
  { value: "10,000+", label: "Active Users" },
  { value: "500+", label: "Lives Protected" },
  { value: "4.9", label: "User Rating", icon: Star },
  { value: "50+", label: "Cities Covered" },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
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
            Customer Stories
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real users who've experienced the safety of EmergencyCall.me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="card-hover relative rounded-2xl border border-border bg-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 right-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-4 w-4 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 leading-relaxed text-foreground/90">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.vehicle} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-muted/50 p-5 text-center"
            >
              <div className="mb-1 flex items-center justify-center gap-1">
                {stat.icon && <stat.icon className="h-5 w-5 fill-primary text-primary" />}
                <p className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;