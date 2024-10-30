import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { LuSearch } from "react-icons/lu";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  withButton?: boolean;
}

const inputVariants = cva(
  "rounded outline-1 w-full flex items-center outline-primary/50 focus:outline-primary outline  px-2",
  {
    variants: {
      size: {
        sm: "h-6 text-xs placeholder:text-xs",
        md: "h-7 text-sm placeholder:text-sm",
        lg: "h-8",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ withButton, className, size, ...props }, ref) => {
    return (
      <div className="relative w-[inherit]">
        <input
          ref={ref}
          className={cn(inputVariants({ size }), className)}
          {...props}
        />
        {withButton && (
          <button className="bg-primary/50 absolute right-1 top-1/2 -translate-y-1/2 rounded-sm p-1 text-xs text-white">
            <LuSearch />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
