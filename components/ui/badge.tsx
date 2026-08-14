import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent" | "dark";
};

function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        tone === "neutral" && "border-neutral-200 bg-neutral-50 text-neutral-600",
        tone === "accent" && "border-emerald-200 bg-emerald-50 text-emerald-700",
        tone === "dark" && "border-white/10 bg-white/8 text-white/70",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
