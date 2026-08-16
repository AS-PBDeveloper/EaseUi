import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";

const textareaCls = cva(
  "w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition placeholder:text-gray-400 dark:placeholder:text-gray-500",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, size, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(textareaCls({ size }), className)}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
