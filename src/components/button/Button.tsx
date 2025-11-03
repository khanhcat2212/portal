import React from "react";
import clsx from "clsx";

type Variant = "primary" | "outline" | "dash" | "neutral";
type Size = "sm" | "md" | "lg" | "full";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "rounded-sm flex items-center justify-center font-medium transition-all";

  const sizes: Record<Size, string> = {
    sm: "px-5 py-2 text-[.8125rem]",
    md: "px-7 py-3 text-[1.125rem]",
    lg: "px-13 py-6.5 text-[1.5rem]",
    full: "py-2.5 w-full",
  };

  const variants: Record<Variant, string> = {
    primary: "bg-primary-gradient text-white font-semibold cursor-pointer",
    outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-100 font-semibold cursor-pointer",
    dash: "border-1 border-dashed border-blue-500 text-blue-500 hover:bg-blue-100 text-[14px] cursor-pointer",
    neutral: "px-7 bg-grey text-black hover:bg-grey-100 cursor-pointer",
  };

  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
