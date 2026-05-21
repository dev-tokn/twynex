type InfoCardProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function InfoCard({ eyebrow, title, children, className = "" }: InfoCardProps) {
  return (
    <article
      className={`rounded-lg border border-[#ded5c7] bg-white p-6 dark:border-[#293344] dark:bg-[#121b28] ${className}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold text-[#b24a3b] dark:text-[#f08d7e]">{eyebrow}</p>
      ) : null}
      {title ? <h3 className="mt-4 text-2xl font-semibold">{title}</h3> : null}
      <div className={title || eyebrow ? "mt-4" : ""}>{children}</div>
    </article>
  );
}
