type SectionProps = {
  id?: string;
  children: React.ReactNode;
  tone?: "cream" | "sand" | "white" | "dark";
  className?: string;
};

const tones = {
  cream: "bg-[#fffaf2] text-[#171411] dark:bg-[#0f1720] dark:text-[#f8fafc]",
  sand: "bg-[#f7f4ee] text-[#171411] dark:bg-[#111827] dark:text-[#f8fafc]",
  white: "bg-white text-[#171411] dark:bg-[#0b111a] dark:text-[#f8fafc]",
  dark: "bg-[#171411] text-white dark:bg-[#050812] dark:text-white",
};

export function Section({
  id,
  children,
  tone = "sand",
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`border-b border-[#ded5c7] dark:border-[#293344] ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
