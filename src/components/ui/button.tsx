import type { ComponentPropsWithoutRef } from "react";
import { withBasePath } from "@/lib/paths";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "inverse";
};

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-border text-foreground hover:border-primary",
  inverse: "bg-accent text-accent-foreground hover:bg-accent-hover",
};

export function Button({
  className = "",
  variant = "primary",
  href,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${variants[variant]} ${className}`}
      href={withBasePath(href)}
      {...props}
    />
  );
}
