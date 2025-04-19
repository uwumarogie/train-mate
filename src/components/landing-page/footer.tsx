import { Dumbbell } from "lucide-react";
import Link from "next/link";

export function LandingPageFooter() {
  return (
    <footer className="flex justify-items-center py-12 bg-gray-900 text-gray-400">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Train Mate</span>
            </div>
            <p className="max-w-[300px]">
              The ultimate platform for gym enthusiasts to schedule their
              workout splits and track progress.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Testimonials", "FAQ"].map(
                (item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-white">
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Terms", "Privacy", "Cookies"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© {new Date().getFullYear()} Train Mate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
