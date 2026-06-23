// app/components/BackButton.tsx

"use client";

type BackButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function BackButton({
  children,
  type = "button",
  className = "",
}: BackButtonProps) {
  return (
    <button
      type={type}
      onClick={() => window.history.back()}
      className={`
        mt-1 rounded-xl border border-brand-300
        bg-white px-2 py-2 h-fit
        text-sm font-medium text-brand-700
        transition hover:bg-brand-50
        ${className}
      `}
    >
      {children}
    </button>
  );
}