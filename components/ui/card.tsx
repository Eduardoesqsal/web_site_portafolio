import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-neutral-200/80 bg-white shadow-[0_1px_2px_rgba(0,0,0,.03),0_16px_48px_rgba(0,0,0,.035)]",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export { Card, CardContent };
