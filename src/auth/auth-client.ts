import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://train-mate.netlify.app"
    : "http://localhost:3000";

export const authClient = createAuthClient({
  baseURL: baseUrl,
  debugLogs: true,
  plugins: [],
  fetchOptions: {
    credentials: "include",
    onError(e) {
      if (e.error.status === 429) {
        toast.error("Too many requests. Please try again later.");
      }
    },
  },
});

export const { signIn, signUp, signOut, useSession } = authClient;
