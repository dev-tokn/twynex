type EyebrowProps = {
  children: React.ReactNode;
  tone?: "green" | "red" | "mint";
  className?: string;
};

const tones = {
  green: "text-[#0d7c66] dark:text-[#5fcbb2]",
  red: "text-[#b24a3b] dark:text-[#f08d7e]",
  mint: "text-[#87d6c5]",
};

export function Eyebrow({ children, tone = "green", className = "" }: EyebrowProps) {
  return (
    <p className={`text-sm font-semibold uppercase ${tones[tone]} ${className}`}>
      {children}
    </p>
  );
}
