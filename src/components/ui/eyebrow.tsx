type EyebrowProps = {
  children: React.ReactNode;
  tone?: "green" | "red" | "mint";
  className?: string;
};

const tones = {
  green: "text-accent",
  red: "text-brand-red",
  mint: "text-brand-mint",
};

export function Eyebrow({ children, tone = "green", className = "" }: EyebrowProps) {
  return (
    <p className={`text-sm font-semibold uppercase ${tones[tone]} ${className}`}>
      {children}
    </p>
  );
}
