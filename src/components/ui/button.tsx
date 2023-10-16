import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary transition-transform duration-1000 ease-&lsqb;cubic-bezier(.07,.51,.12,1)&rsqb; border z-[1] text-primary-foreground relative overflow-hidden hover:text-black  border-[#f4b233] border-2 border-solid before:flex before:w-[200%] before:content-[''] before:h-[100%]  before:absolute before:z-[-1] before:left-[-35px]  before:top-0  before:translate-x-[-100%]   before:skew-x-[-45deg]  before:bg-white hover:before:translate-x-0  hover:before:skew-x-[-45deg]  hover:before:origin-[0_0] before:transition-transform  before:duration-1000 before:ease-&lsqb;cubic-bezier(.07,.51,.12,1)&rsqb;",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border z-[1] overflow-hidden relative transition-transform duration-1000 ease-&lsqb;cubic-bezier(.07,.51,.12,1)&rsqb; bg-background hover:bg-accent  hover:text-white  border-solid before:flex before:w-[200%] before:content-[''] before:h-[100%]  before:absolute before:z-[-1] before:left-[-35px]  before:top-0  before:translate-x-[-100%]   before:skew-x-[-45deg]  before:bg-secondary hover:before:translate-x-0  hover:before:skew-x-[-45deg]  hover:before:origin-[0_0] before:transition-transform  before:duration-1000 before:ease-&lsqb;cubic-bezier(.07,.51,.12,1)&rsqb;",
        secondary:
          "bg-secondary   transition-transform duration-1000 ease-&lsqb;cubic-bezier(.07,.51,.12,1)&rsqb; border z-[1] border-2 text-secondary-foreground relative overflow-hidden  hover:text-black border-[#000] border-solid  before:flex before:w-[200%] before:content-[''] before:h-[100%]  before:absolute before:z-[-1] before:left-[-25px]  before:top-0  before:translate-x-[-100%]   before:skew-x-[-45deg]  before:bg-white hover:before:translate-x-0  hover:before:skew-x-[-45deg]  hover:before:origin-[0_0] before:transition-transform  before:duration-1000 before:ease-&lsqb;cubic-bezier(.07,.51,.12,1)&rsqb;",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
