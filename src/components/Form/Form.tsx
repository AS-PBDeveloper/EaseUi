import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";

const formVariants = cva(
  "w-full rounded-lg transition-all duration-300 border",
  {
    variants: {
      variant: {
        light:
          "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md",
        dark: "bg-slate-900 text-white border-slate-700 shadow-md hover:shadow-lg",
        outline:
          "bg-transparent border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100",
      },
      size: {
        sm: "p-4 gap-3",
        md: "p-6 gap-4",
        lg: "p-8 gap-6",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "md",
    },
  }
);

interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  asChild?: boolean;
  title?: string;
  description?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  submitText?: string;
  children?: React.ReactNode;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      title,
      description,
      onSubmit,
      submitText = "Submit",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "form";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(e);
    };

    return (
      <Comp
        ref={ref}
        className={cn(formVariants({ variant, size }), "flex flex-col", className)}
        onSubmit={handleSubmit}
        {...props}
      >
        {title && (
          <div className="mb-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
          </div>
        )}
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>
        )}
        {children}
      </Comp>
    );
  }
);

Form.displayName = "Form";

export { Form, formVariants };
