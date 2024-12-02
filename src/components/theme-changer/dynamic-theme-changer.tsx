"use client";
import dynamic from "next/dynamic";

export const DynamicThemeChanger = dynamic(
  () => import("@/components/theme-changer/theme-changer"),
  {
    ssr: false,
  }
);
