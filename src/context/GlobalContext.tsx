"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "sonner";

interface Props {
  children: React.ReactNode;
}

export default function GlobalContext({ children }: Props) {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
}
