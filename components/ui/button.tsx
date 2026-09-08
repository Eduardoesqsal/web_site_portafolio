import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#18c7d6] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#18c7d6_0%,#18d38a_100%)] text-white shadow-[0_10px_30px_rgba(24,199,214,.16)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(24,211,138,.22)]",
        secondary:
          "border border-[#d5eef1] bg-white/80 text-[#07131d] shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-[#18c7d6] hover:bg-white",
        outline:
          "border border-white/14 bg-white/5 text-white backdrop-blur hover:border-[#18c7d6]/40 hover:bg-white/10",
        ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-950",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-6 text-[15px]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
