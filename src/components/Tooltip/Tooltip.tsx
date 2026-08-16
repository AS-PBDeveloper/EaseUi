import React, { useId, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
  "pointer-events-none absolute z-50 rounded-md px-3 py-1.5 text-xs font-medium shadow-lg transition-all duration-150",
  {
    variants: {
      variant: {
        dark: "bg-gray-950 text-white border border-gray-800",
        light:
          "bg-white text-gray-900 border border-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700",
        primary: "bg-indigo-600 text-white border border-indigo-500",
        success: "bg-emerald-600 text-white border border-emerald-500",
        warning: "bg-amber-500 text-gray-950 border border-amber-400",
      },
      size: {
        sm: "max-w-44 px-2 py-1 text-[11px]",
        md: "max-w-56 px-3 py-1.5 text-xs",
        lg: "max-w-72 px-3.5 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "md",
    },
  }
);

type TooltipSide = "top" | "right" | "bottom" | "left";

interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "content">,
    VariantProps<typeof tooltipVariants> {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: TooltipSide;
  disabled?: boolean;
  delay?: number;
}

const sideClasses: Record<TooltipSide, string> = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
  bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
};

const arrowClasses: Record<TooltipSide, string> = {
  top: "left-1/2 top-full -translate-x-1/2 border-x-transparent border-b-transparent border-t-current",
  right:
    "right-full top-1/2 -translate-y-1/2 border-y-transparent border-l-transparent border-r-current",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-x-transparent border-t-transparent border-b-current",
  left: "left-full top-1/2 -translate-y-1/2 border-y-transparent border-r-transparent border-l-current",
};

const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      children,
      content,
      side = "top",
      variant,
      size,
      disabled = false,
      delay = 120,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = React.useRef<number | null>(null);
    const tooltipId = useId();

    const clearDelay = () => {
      if (!timeoutRef.current) return;
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };

    const showTooltip = () => {
      if (disabled) return;
      clearDelay();
      timeoutRef.current = window.setTimeout(() => setOpen(true), delay);
    };

    const hideTooltip = () => {
      clearDelay();
      setOpen(false);
    };

    React.useEffect(() => clearDelay, []);

    return (
      <span
        ref={ref}
        className={cn("relative inline-flex w-fit", className)}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        aria-describedby={open ? tooltipId : undefined}
        {...props}
      >
        {children}

        {open && (
          <span
            id={tooltipId}
            role="tooltip"
            className={cn(tooltipVariants({ variant, size }), sideClasses[side])}
          >
            {content}
            <span
              aria-hidden="true"
              className={cn(
                "absolute h-0 w-0 border-[5px] text-gray-950",
                variant === "light" &&
                  "text-white dark:text-gray-900",
                variant === "primary" && "text-indigo-600",
                variant === "success" && "text-emerald-600",
                variant === "warning" && "text-amber-500",
                arrowClasses[side]
              )}
            />
          </span>
        )}
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, tooltipVariants };
