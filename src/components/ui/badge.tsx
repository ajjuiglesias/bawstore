import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "emerald" | "blue" | "amber";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80":
            variant === "default",
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80":
            variant === "secondary",
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80":
            variant === "destructive",
          "text-foreground border-border": variant === "outline",
          "border-transparent bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200":
            variant === "emerald",
          "border-transparent bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200":
            variant === "blue",
          "border-transparent bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300 border-amber-200":
            variant === "amber",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
