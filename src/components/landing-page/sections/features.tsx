import React from "react";
import { Calendar, BarChart3, Users } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Features Built For Serious Lifters
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Train Mate provides all the tools you need to optimize your training
            and track your progress.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <Calendar className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold">Split Scheduler</h3>
            <p className="mt-2 text-gray-500">
              Create custom workout splits or choose from proven templates. Plan
              your entire week with ease.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <BarChart3 className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold">Progress Tracking</h3>
            <p className="mt-2 text-gray-500">
              Track weights, reps, and sets. Visualize your progress with
              detailed charts and analytics.
            </p>
          </div>
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <Users className="h-6 w-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-bold">Community</h3>
            <p className="mt-2 text-gray-500">
              Connect with other gym enthusiasts, share workouts, and motivate
              each other to reach new heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
