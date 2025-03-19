import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-100 focus:outline-none focus:ring-2 flex items-center justify-center text-center";

  const variantStyles = {
    primary: "bg-[#FFCFBE]/[.9] text-[#250E62] hover:bg-[#FFCFBE] focus:ring-blue-400",
    secondary: "bg-[#F54343]/[.9] text-white hover:bg-[#F54343] focus:ring-blue-400",
    thirdary: "bg-white text-[#250E62] hover:bg-[#E5E0F3]",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-200 focus:ring-gray-400",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
