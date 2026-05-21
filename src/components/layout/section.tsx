type SectionProps = {
  id?: string;
  children: React.ReactNode;
  tone?: "cream" | "sand" | "white" | "dark";
  className?: string;
};

const tones = {
  cream: "bg-[#fffaf2] text-[#171411]",
  sand: "bg-[#f7f4ee] text-[#171411]",
  white: "bg-white text-[#171411]",
  dark: "bg-[#171411] text-white",
};

export function Section({
  id,
  children,
  tone = "sand",
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`border-b border-[#ded5c7] ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        {children}
      </div>
    </section>
  );
}
