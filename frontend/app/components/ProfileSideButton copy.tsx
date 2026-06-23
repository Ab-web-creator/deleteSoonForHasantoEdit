"use client";

import { useEffect, useRef, useState } from "react";
import type { User } from "@/lib/api";

export default function ProfileSideButton({
  user,
  handleLogout,
}: {
  user: Pick<User, "name" | "avatarUrl"> | null;
  handleLogout: () => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  const avatarUrl = user?.avatarUrl ? `${apiUrl}${user.avatarUrl}` : "";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative mt-14">
      {open && (
        <div
          className="
            absolute right-0 left-auto xl:left-3 xl:right-auto bottom-full z-20 mb-2
            xl:min-w-[80px]
            overflow-hidden rounded-2xl
            border border-gray-200
            bg-white shadow-xl flex items-center justify-center
          "
        >
          <button
            onClick={handleLogout}
            className="
              flex gap-1 p-3
              w-fit text-left
              text-sm font-bold text-[#705602]
              transition-colors hover:bg-gray-100
            "
          >
            <img
              src="/enter.png"
              alt="logout icon"
              className="xl:hidden w-8 h-8 object-contain"
            />

            <p className="hidden xl:block">
              Logout <span>@{user?.name}</span>
            </p>
          </button>
        </div>
      )}

      <article
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex cursor-pointer items-center justify-center h-fit xl:justify-start gap-2
          rounded-full p-1 xl:py-3 xl:pl-4 xl:pr-2
          transition-colors hover:bg-[#fffbeb]
        "
      >
        <div className="flex items-center justify-center overflow-hidden h-10 w-10 shrink-0 rounded-full bg-gray-200">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Profile photo"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-stone-600">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </span>
          )}
        </div>

        <div className="hidden xl:block">
          <p className="text-sm font-semibold text-[#705602]">{user?.name}</p>
          <p className="text-brand-600 -mt-1 text-sm">Click to logout</p>
        </div>
      </article>
    </div>
  );
}