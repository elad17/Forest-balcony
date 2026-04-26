"use client";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "bloom";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-forest-600 text-white hover:bg-forest-800 shadow-md hover:shadow-lg active:scale-95",
    secondary:
      "bg-forest-100 text-forest-800 hover:bg-forest-200 shadow-sm active:scale-95",
    outline:
      "border-2 border-forest-600 text-forest-600 hover:bg-forest-50 active:scale-95",
    ghost: "text-forest-600 hover:bg-forest-100 active:scale-95",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-md hover:shadow-lg active:scale-95",
    bloom:
      "bg-bloom-400 text-white hover:bg-bloom-600 shadow-md hover:shadow-lg active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
