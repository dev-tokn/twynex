import type { ComponentPropsWithoutRef } from "react";
import { withBasePath } from "@/lib/paths";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "inverse";
};

const variants = {
  primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover",
  secondary:
    "border border-border bg-card text-foreground shadow-sm hover:border-primary hover:bg-muted",
  inverse: "bg-accent text-accent-foreground shadow-sm hover:bg-accent-hover",
};

export function Button({
  className = "",
  variant = "primary",
  href,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      href={withBasePath(href)}
      {...props}
    />
  );
}
