import { LandingPageLogo } from "@/components/landing-page/logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="absolute top-0 right-0 p-4">
        <LandingPageLogo />
      </span>
      {children}
    </div>
  );
}
