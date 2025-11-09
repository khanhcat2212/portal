import React from "react";
import clsx from "clsx";
import { Search } from "lucide-react";

type Variant = "contained" | "outline" | "form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: Variant;
  withIcon?: boolean;
}

function Input({
  variant = "contained",
  withIcon = false,
  className,
  ...props
}: InputProps) {
  const base =
    "w-full flex items-center rounded-md px-3 py-2 text-sm transition-all";

  const variants: Record<Variant, string> = {
    contained:
      "bg-grey-300 text-[.8125rem] text-grey-900 h-[2.3125rem] placeholder:text-grey-900 h-[2.3125rem]",
    outline:
      "border border-grey-900 text-grey-900 h-[2.3125rem] placeholder:text-grey-900 h-[2.3125rem]",
    form: "border border-grey-600 text-black h-10 placeholder:text-grey-300 bg-white-500 h-10 px-5",
  };

  return (
    <div className={clsx(base, variants[variant], className)}>
      {withIcon && (
        <Search
          className="mr-2 shrink-0 text-grey-900 w-4 h-4"
        />
      )}
      <input
        className="w-full bg-transparent outline-none border-none placeholder:text-inherit text-inherit"
        type="text"
        {...props}
      />
    </div>
  );
}

export default Input;
