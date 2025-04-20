"use client";

import { SignIn } from "@/components/auth/sign-in";
import { SignUp } from "@/components/auth/sign-up";
import { Tabs } from "@/components/ui/tabs";
import { authClient } from "@/auth/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    authClient.oneTap({
      fetchOptions: {
        onError: ({ error }) => {
          toast.error(error.message || "An error occurred");
        },
        onSuccess: () => {
          toast.success("Successfully signed in");
          router.push("/dashboard");
        },
      },
    });
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center flex-col justify-center w-full md:py-40">
        <div className="md:w-[400px] min-h-screen">
          <Tabs
            tabs={[
              {
                title: "Sign In",
                value: "sign-in",
                content: <SignIn />,
              },
              {
                title: "Sign Up",
                value: "sign-up",
                content: <SignUp />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
