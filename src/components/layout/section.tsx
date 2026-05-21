type SectionProps = {
  id?: string;
  children: React.ReactNode;
  tone?: "cream" | "sand" | "white" | "dark";
  className?: string;
};

const tones = {
  cream: "bg-background text-foreground",
  sand: "bg-surface text-foreground",
  white: "bg-card text-card-foreground",
  dark: "bg-panel text-panel-foreground [background-image:linear-gradient(135deg,rgb(255_255_255_/_6%)_0%,transparent_42%)]",
};

export function Section({
  id,
  children,
  tone = "sand",
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative border-b border-border ${tones[tone]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
