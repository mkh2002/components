import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "h-7 rounded px-2.5 py-1.5 text-xs",
        md: "h-8 px-3 py-2 text-sm",
        lg: "h-9 px-5 py-2 text-base",
        icon: "size-8 rounded-md [&_svg]:size-4",
      },
      loading: {
        true: "pointer-events-none opacity-80",
      },
      variant: {
        primary: "bg-primary text-white shadow hover:opacity-90",
        dangger: "bg-danger text-white shadow hover:opacity-90",
        success: "bg-success text-white shadow hover:opacity-90",
        warn: "bg-warn text-white shadow hover:opacity-90",
        outline:
          "border border-primary bg-background text-primary hover:bg-primary/10",
        ghost: "bg-transparent text-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      size: "md",
      loading: false,
      variant: "primary",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ size, variant, className }))}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
