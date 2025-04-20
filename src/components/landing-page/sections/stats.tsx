import React from "react";

export function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">Active Users</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">Workouts Tracked</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">0%</p>
            <p className="text-sm text-gray-500">Goal Achievement</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
