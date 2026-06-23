// app/components/NotificationButton.tsx

"use client";

import Link from "next/link";

type NotificationButtonProps = {
  count: number;
  className?: string;
};



export default function NotificationButton({
  count,
  className = "",
}: NotificationButtonProps) {
  return count > 0 ? (
    <Link
      href="/me/notifications"
      className={`
        relative rounded-full transition-colors bg-white 
        border border-brand-500
        ${className}
      `}
      aria-label="Notifications"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>


      <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium leading-none text-white">
        {count > 9 ? "9+" : count}
      </span>
    </Link>
  ) : null;
}