// app/components/ReUsableQisasHeader.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import IrsadLogo from "./IrsadLogo";

type ReUsableQisasHeaderProps = {
  title: React.ReactNode;
  searchComponent: React.ReactNode;
  leftTitle?: React.ReactNode;
  menuHref?: string;
  sideContent?: React.ReactNode;
};

export default function ReUsableQisasHeader({
  title,
  menuHref,
  searchComponent,
  leftTitle,
  sideContent,
}: ReUsableQisasHeaderProps) {
  const pathname = usePathname();

  const shouldShowMenu = menuHref && pathname !== menuHref;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white  md:pl-0">
      <div className="mx-auto grid max-w-[780px] grid-cols-[50px_minmax(0,700px)_1fr] md:grid-cols-[70px_minmax(0,700px)_1fr] xl:max-w-[1500px] xl:grid-cols-[280px_minmax(0,700px)_1fr]">
        {/* Left */}
        <Link
          href="/irsad-home"
          className="
            flex h-[50px] items-center justify-center
            border-0 border-gray-200 transition-opacity
            hover:opacity-80
            md:border-r
            xl:justify-start pl-3 xl:pl-10
          "
        >
          <IrsadLogo className="h-6 w-6 text-[#805a01]" />

          {leftTitle && (
            <p className="hidden pl-1  font-oswald text-lg  uppercase tracking-tight text-[#8c7c05] lg:pl-2 xl:block xl:pl-4">
              {leftTitle}
            </p>
          )}
        </Link>

        {/* Middle */}
        <div className="relative flex h-[50px] items-center justify-between border-r border-gray-200 pr-1 md:px-5">
          <h1 className="min-w-0 truncate pr-2 font-oswald text-lg  uppercase tracking-tight text-[#8c7c05]">
            {title}
          </h1>

          <article className="relative z-20 flex shrink-0 items-center gap-1">
            <div
              className={`relative xl:hidden ${
                !shouldShowMenu ? "mr-5 md:mr-2" : ""
              }`}
            >
              {searchComponent}
            </div>
               {shouldShowMenu && (
              <Link href={menuHref}>
                <button
                  className="mr-3  text-brand-600 rounded-md p-2 transition-colors hover:bg-gray-200 md:mr-0"
                  type="button"
                  aria-label="Open menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </Link>
            )}
          </article>
        </div>

        {/* Right */}
        <div className="hidden items-center px-6 md:block">
          <div className="hidden h-[50px] w-full max-w-[380px] pt-2 xl:block">
            {searchComponent}
          </div>

          <div className="relative w-full max-w-[380px]">
            {!shouldShowMenu && sideContent}
          </div>
        </div>
      </div>
    </header>
  );
}