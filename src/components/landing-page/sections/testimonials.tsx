import React from "react";
const testimonials = [
  {
    name: "Phillips Uwumarogie",
    role: "Gym Enthusiast",
    content:
      "Train Mate has completely transformed my training routine. It's been a game-changer for my progress and motivation. I can't imagine going back to my old routine without it.",
  },
];

function TestimonalCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; content: string };
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-xl font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600">{testimonial.content}</p>
    </div>
  );
}
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Join tenth of satisfied gym enthusiasts who have transformed their
            training with Train Mate.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonalCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
