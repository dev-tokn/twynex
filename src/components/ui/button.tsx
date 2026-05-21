import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "inverse";
};

const variants = {
  primary: "bg-[#171411] text-white hover:bg-[#342d26] dark:bg-[#f8fafc] dark:text-[#101722] dark:hover:bg-[#dbe6f4]",
  secondary:
    "border border-[#cfc3b3] text-[#171411] hover:border-[#171411] dark:border-[#3c4657] dark:text-[#f8fafc] dark:hover:border-[#8fa3bd]",
  inverse: "bg-[#0d7c66] text-white hover:bg-[#096b58] dark:bg-[#22a184] dark:text-[#07120f] dark:hover:bg-[#5fcbb2]",
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
