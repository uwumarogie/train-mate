"use client";
import { useSession } from "@/auth/auth-client";
import { Test } from "./test";
import { redirect } from "next/navigation";
import React from "react";

export default function Dashboard() {
  const session = useSession();

  if (session.data === null && !session.isPending) {
    redirect("/sign-in");
  }

  return (
      <Test />
  );
}
