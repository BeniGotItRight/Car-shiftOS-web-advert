import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold tracking-tight ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 hover:bg-slate-200 shadow-[0_4px_12px_rgba(255,255,255,0.1)]",
        destructive: "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white",
        outline: "border border-slate-800 bg-transparent text-white hover:bg-white hover:text-slate-950 hover:border-white",
        secondary: "bg-slate-900 text-white border border-slate-800 hover:bg-slate-800",
        ghost: "hover:bg-white/5 hover:text-white text-slate-400 font-medium",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
