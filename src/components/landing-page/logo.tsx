"use client";

import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export function LandingPageLogo() {
  const pathname = usePathname();
  return pathname === "/" ? (
    <Link href="/" className="flex items-center gap-2">
      <Dumbbell className="h-6 w-6" />
      <span className="text-xl font-bold">Train Mate</span>
    </Link>
  ) : (
    <div className="flex items-center gap-2">
      <Dumbbell className="h-6 w-6" />
      <span className="text-xl font-bold">Train Mate</span>
    </div>
  );
}
