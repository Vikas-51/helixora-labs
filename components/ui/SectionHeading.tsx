type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, body, align = "left", tone = "light" }: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-bone" : "text-ink";
  const bodyColor = tone === "dark" ? "text-bone/68" : "text-ink/68";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-plasma">{eyebrow}</p>
      <h2 className={`font-display text-3xl font-semibold leading-tight tracking-normal sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${bodyColor}`}>{body}</p>
    </div>
  );
}
