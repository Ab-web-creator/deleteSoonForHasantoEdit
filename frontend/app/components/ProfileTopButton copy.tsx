"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGroupsStore } from "@/stores/groupsStore";
import type { User } from "@/lib/api";

export default function ProfileTopButton({
  user,
  handleLogout,
}: {
  user: User | null;
  handleLogout: () => void;
}) {

  const canAccessProfile =
  user?.role === "admin" ||
  (!user?.isGuest && user?.emailVerified);

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const myGroups = useGroupsStore((state) => state.myGroups);
  const fetchMyGroups = useGroupsStore((state) => state.fetchMyGroups);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";

  const avatarUrl = user?.avatarUrl ? `${apiUrl}${user.avatarUrl}` : "";

  const roleLabel =
    user?.role === "admin" ? "Admin" : user?.isGuest ? "Guest" : "Member";

const joinedDate = user?.createdAt
  ? new Date(user.createdAt).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    })
  : "Unknown";

  useEffect(() => {
    if (open && myGroups.length === 0) {
      fetchMyGroups();
    }
  }, [open, myGroups.length, fetchMyGroups]);

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
    <div ref={wrapperRef} className="relative">
      {open && (
        <div
          className="
            absolute right-0 top-full z-20 mt-2 w-56
            overflow-hidden rounded-2xl border border-stone-200
            bg-white shadow-xl
          "
        >
          <div className="bg-[#fffbeb] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-stone-200">
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

              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-stone-800">
                  @{user?.name || "User"}
                </p>
                <p className="text-xs font-medium text-[#a88f2d]">
                  {roleLabel}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 px-4 py-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <span className="text-stone-500">Status</span>
              <span className=" text-stone-800">{roleLabel}</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-stone-500">Groups</span>
              <span className=" text-stone-800">
                {myGroups.length}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="text-stone-500">Joined</span>
              <span className=" text-stone-800">
                {joinedDate}
              </span>
            </div>
          </div>

          <div className="border-t border-stone-100 p-2">
            {canAccessProfile && (
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="
                group flex items-center justify-between
                rounded-xl px-3 py-2 text-sm font-semibold
                bg-gray-50 text-stone-700
                transition-colors hover:bg-stone-100
              "
            >
              <span>Profile page</span>

              <span
                className="
                  text-lg opacity-50 
                  transition-all duration-200
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              >
                ›
              </span>
            </Link>
            )}
            <button
              onClick={handleLogout}
              className="
                group mt-1 flex w-full items-center justify-between
                rounded-xl px-3 py-2
                text-left text-sm font-bold text-red-600
                transition-colors hover:bg-red-50
              "
            >
              <span>Log out</span>

              <span
                className="
                  text-lg opacity-40 transition
                  group-hover:translate-x-1
                "
              >
                ›
              </span>
            </button>
          </div>
        </div>
      )}

  <article
  onClick={() => setOpen((prev) => !prev)}
  className="
    group
    flex h-fit cursor-pointer items-center justify-center gap-2
    rounded-full p-1
  "
>
  <div
    className="
      flex h-8 w-8 lg:h-10 lg:w-10
      shrink-0 items-center justify-center
      overflow-hidden rounded-full bg-stone-200
      transition-transform duration-200
      group-hover:scale-110
    "
  >
    {avatarUrl ? (
      <img
        src={avatarUrl}
        alt="Profile photo"
        className="h-full w-full object-cover"
      />
    ) : (
      <span className="text-xs font-bold text-stone-500">
        {user?.name?.charAt(0)?.toUpperCase() || "U"}
      </span>
    )}
  </div>
</article>
    </div>
  );
}