// app/components/DotsMenuButton.tsx

import { ButtonHTMLAttributes } from "react";

type DotsMenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function DotsMenuButton({
  className = "",
  ...props
}: DotsMenuButtonProps) {
  return (
    <button
      aria-label="Open menu"
      className={`
        flex h-9 w-9 items-center justify-center
        rounded-md
        transition-colors
        ${className}
      `}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="18" cy="12" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="12" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    </button>
  );
}