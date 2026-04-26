"use client";
import Button from "./Button";
import { CALENDLY_URL } from "@/lib/constants";

interface CalendlyButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export default function CalendlyButton({
  size = "md",
  className = "",
  label = "קבע ביקור בית",
}: CalendlyButtonProps) {
  const handleClick = () => {
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Button variant="secondary" size={size} className={className} onClick={handleClick}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      {label}
    </Button>
  );
}
