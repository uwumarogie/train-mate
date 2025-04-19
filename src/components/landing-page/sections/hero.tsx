import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-700 text-white">
      <div className="container grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Schedule Your Split.
            <br />
            Track Your Progress.
          </h1>
          <p className="max-w-[600px] text-gray-300 md:text-xl">
            Train Mate helps gym enthusiasts plan their workout splits, track
            progress, and achieve fitness goals faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Get Started Free
            </Button>
          </div>
        </div>
        <div className="relative hidden md:flex items-center justify-center">
          <div className="relative h-[400px] w-[400px] overflow-hidden rounded-xl border border-gray-600 bg-gray-800">
            <Image
              src="/train-mate-image.png"
              alt="Train Mate Image"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
