import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingPageLogo } from "./logo";

const navItems = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

export function LandingPageNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <LandingPageLogo />
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-600 hover:text-black"
          >
            Login
          </Link>

          <Button className="bg-black text-white hover:bg-gray-800">
            Sign Up Free
          </Button>
        </div>
      </div>
    </header>
  );
}
