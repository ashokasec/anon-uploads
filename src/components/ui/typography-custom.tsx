import { space_grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

export const Heading1 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn("text-[2rem] font-bold my-4", className)}
      style={space_grotesk.style}
    >
      {text}
    </h1>
  );
};
export const Heading2 = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h2
      className={cn("mt-10 mb-3 text-xl font-bold", className)}
      style={space_grotesk.style}
    >
      {text}
    </h2>
  );
};

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-base leading-relaxed text-gray-600 dark:text-gray-300", className)}>
      {children}
    </p>
  );
};
