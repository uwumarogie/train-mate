import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
export function AppPreviewSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Workout Journey, Visualized
            </h2>
            <p className="text-gray-300 md:text-lg">
              Train Mate intuitive dashboard gives you a complete overview of
              your training progress, upcoming workouts, and achievements.
            </p>
            <ul className="space-y-3">
              {[
                "Comprehensive workout calendar",
                "Detailed progress charts",
                "Personal records tracking",
                "Exercise library with proper form guides",
                "Customizable workout templates",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-gray-300 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto max-w-[500px]">
            <div className="overflow-hidden rounded-xl border border-gray-600 bg-gray-800 shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Train Mate App Interface"
                className="w-full object-cover"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
