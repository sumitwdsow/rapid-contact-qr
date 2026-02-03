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

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2 className="mb-4 text-display-sm md:text-display-md">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real users who've experienced the safety of
            EmergencyCall.me
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg md:p-8"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 right-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Quote className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-foreground/90">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>

                {/* Info */}
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.vehicle} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {[
            { value: "10,000+", label: "Active Users" },
            { value: "500+", label: "Lives Protected" },
            { value: "4.9★", label: "User Rating" },
            { value: "50+", label: "Cities Covered" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-muted/50 p-4 text-center md:p-6"
            >
              <p className="text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
