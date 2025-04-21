import React from "react";

const information = [
  {
    title: "Create Your Account",
    description:
      "Sign up for free and set up your profile with your fitness goals and experience level.",
  },
  {
    title: "Design Your Split",
    description:
      "Create a custom workout split or choose from our proven templates tailored to your goals.",
  },
  {
    title: "Track Your Workouts",
    description:
      "Log your exercises, sets, reps, and weights to track your progress over time.",
  },
  {
    title: "Analyze Your Progress",
    description:
      "View detailed charts and analytics to see your improvement and identify areas for growth.",
  },
  {
    title: "Adjust Your Plan",
    description:
      "Modify your workout split based on your progress and evolving fitness goals.",
  },
  {
    title: "Achieve Your Goals",
    description:
      "Reach your fitness goals faster with consistent tracking and data-driven training.",
  },
];

function HowItWorksCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pl-16">
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
        {index + 1}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How Train Mate Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
            Get started in minutes and transform your training routine.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {information.map((item, index) => (
            <HowItWorksCard key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
