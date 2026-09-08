import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "h-12 w-full rounded-xl border border-[#d7e7ea] bg-white px-4 text-sm text-neutral-950 shadow-sm outline-none transition placeholder:text-neutral-400 hover:border-[#b8dde2] focus:border-[#18c7d6] focus:ring-4 focus:ring-[#18c7d6]/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
