type InfoCardProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function InfoCard({ eyebrow, title, children, className = "" }: InfoCardProps) {
  return (
    <article
      className={`rounded-lg border border-border bg-card p-6 text-card-foreground ${className}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold text-brand-red">{eyebrow}</p>
      ) : null}
      {title ? <h3 className="mt-4 text-2xl font-semibold">{title}</h3> : null}
      <div className={title || eyebrow ? "mt-4" : ""}>{children}</div>
    </article>
  );
}
