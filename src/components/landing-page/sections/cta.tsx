import React from "react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to Transform Your Training?
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
          Join thousands of gym enthusiasts who are optimizing their workouts
          and tracking their progress with Train Mate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black hover:bg-gray-200"
          >
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}