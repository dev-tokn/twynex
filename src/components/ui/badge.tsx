type BadgeProps = {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "warning" | "dark";
  className?: string;
};

const tones = {
  neutral: "border-border bg-card text-muted-foreground",
  accent: "border-accent/30 bg-accent-soft text-accent",
  warning: "border-brand-amber/35 bg-warning-soft text-foreground",
  dark: "border-white/15 bg-white/10 text-panel-muted",
};

export function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-lg border px-3 py-1.5 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
