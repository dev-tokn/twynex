import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "inverse";
};

const variants = {
  primary: "bg-[#171411] text-white hover:bg-[#342d26]",
  secondary: "border border-[#cfc3b3] text-[#171411] hover:border-[#171411]",
  inverse: "bg-[#0d7c66] text-white hover:bg-[#096b58]",
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`rounded-lg px-5 py-3 text-center text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
