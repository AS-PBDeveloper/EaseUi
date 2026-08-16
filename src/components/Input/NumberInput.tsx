import React, { useRef } from "react";
import { Input, type InputProps } from "./Input";

type NumberProps = Omit<InputProps, "type" | "onChange"> & {
  onChange?: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
};

export const NumberInput = React.forwardRef<HTMLInputElement, NumberProps>(
  ({ onChange, step = 1, min, max, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const getCurrentValue = () => {
      return Number(inputRef.current?.value || props.value || 0);
    };

    const handleInc = () => {
      const next = getCurrentValue() + step;
      if (max !== undefined && next > max) return;
      onChange?.(next);
    };

    const handleDec = () => {
      const next = getCurrentValue() - step;
      if (min !== undefined && next < min) return;
      onChange?.(next);
    };

    return (
      <div className="flex items-stretch gap-2">
        <div className="flex-1">
          <Input
            {...(props as InputProps)}
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === "function") ref(node);
              else if (ref) ref.current = node;
            }}
            type="number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <button
            type="button"
            onClick={handleInc}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded border border-gray-200 dark:border-gray-700 transition-colors"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleDec}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded border border-gray-200 dark:border-gray-700 transition-colors"
          >
            -
          </button>
        </div>
      </div>
    );
  }
);
NumberInput.displayName = "NumberInput";
