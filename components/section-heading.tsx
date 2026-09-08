import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "mb-5 flex items-center gap-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em]",
          align === "center" && "justify-center",
          invert ? "text-[#18c7d6]" : "text-[#0e8e9a]",
        )}
      >
        <span className={cn("size-1.5 rounded-full", invert ? "bg-[#18c7d6]" : "bg-[#18d38a]")} />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-balance text-[2.65rem] font-semibold leading-[.9] tracking-[-0.065em] sm:text-5xl lg:text-[4.25rem]",
          invert ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-7 sm:text-lg",
            invert ? "text-white/55" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
