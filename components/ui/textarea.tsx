import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "min-h-32 w-full resize-y rounded-xl border border-[#d7e7ea] bg-white px-4 py-3 text-sm text-neutral-950 shadow-sm outline-none transition placeholder:text-neutral-400 hover:border-[#b8dde2] focus:border-[#18c7d6] focus:ring-4 focus:ring-[#18c7d6]/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
