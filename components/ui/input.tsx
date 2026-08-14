import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-xl border border-neutral-200 bg-white px-4 text-sm text-neutral-950 shadow-sm outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
