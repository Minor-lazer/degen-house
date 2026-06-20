import { forwardRef } from "react";
import type { AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  showArrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-acid text-background shadow-neon hover:-translate-y-0.5 hover:bg-white focus-visible:outline-acid",
  secondary:
    "border border-white/20 bg-white/10 text-white hover:-translate-y-0.5 hover:border-acid/60 hover:text-acid focus-visible:outline-acid",
  ghost: "text-white/80 hover:text-acid focus-visible:outline-acid"
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", showArrow = true, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black uppercase tracking-normal transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </a>
  )
);

Button.displayName = "Button";
