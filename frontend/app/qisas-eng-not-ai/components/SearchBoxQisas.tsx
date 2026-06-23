"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBoxQisas() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const isOpen = active || query.trim().length > 0;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (!wrapperRef.current?.contains(e.target as Node) && !query.trim()) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [query]);

const openSearch = () => {
  setActive(true);

  setTimeout(() => {
    inputRef.current?.focus();
  }, 100);
};

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!active) {
      openSearch();
      return;
    }

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    inputRef.current?.blur();
    router.push(`/qisas-eng-karin/search?q=${encodeURIComponent(trimmedQuery)}`);
  };

  return (
    <div ref={wrapperRef} className="relative h-8 w-8 xl:h-auto xl:w-full">
      <form
        onSubmit={handleSearch}
        className={`
          flex h-8 items-center overflow-hidden rounded-full bg-white
          transition-[width,transform] duration-300 ease-in-out
          ${
            isOpen
              ? "absolute right-0 top-1/2 z-[100] w-[min(320px,calc(100vw-80px))] -translate-y-1/2 border border-gray-300 pl-3 shadow-sm xl:static xl:w-full xl:max-w-none xl:translate-y-0"
              : "absolute right-0 top-1/2 w-8 -translate-y-1/2 justify-end border border-transparent xl:static xl:w-full xl:translate-y-0 xl:justify-start xl:border-gray-300 xl:pl-3"
          }
        `}
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={openSearch}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(true);
          }}
          placeholder="Search stories..."
          className={`
            min-w-0 flex-1 bg-transparent text-base outline-none transition-all xl:text-sm
            ${
              isOpen
                ? "w-full opacity-100"
                : "w-0 opacity-0 pointer-events-none xl:pointer-events-auto xl:w-full xl:opacity-100"
            }
          `}
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition hover:bg-[#d7cdb1]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-brand-500 xl:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}