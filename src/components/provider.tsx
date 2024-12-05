"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Toaster />
      {children}
    </ThemeProvider>
  );
}
