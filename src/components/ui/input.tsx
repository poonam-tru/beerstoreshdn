import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex w-full items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {startIcon}
        <input className="flex flex-1 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" type={type} ref={ref} {...props} />
        {endIcon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
