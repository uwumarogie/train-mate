"use client";

// this is temporary component to test sign out
import { authClient } from "@/auth/auth-client";
import { useRouter } from "next/navigation";
export function Test() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={async () => {
          await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/");
              },
            },
          });
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
