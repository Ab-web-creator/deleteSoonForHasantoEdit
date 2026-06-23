// app/components/NavbarQisas.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


import IrsadLogo from "./IrsadLogo";
import HamburgerMenuButton from "./HamburgerMenuButton";
import MobileNavigationMenu from "./MobileNavigationMenu";
import FontSizeControls from "./FontSizeControls";

type NavItem = {
  label: string;
  href: string;
  badge?: number;
};

type NavbarQisasProps = {
  title: React.ReactNode;
  searchComponent: React.ReactNode;
  mobileLinks: NavItem[];
  leftTitle?: React.ReactNode;
  menuHref?: string;
  sideContent?: React.ReactNode;
};

export default function NavbarQisas({
  title,
  menuHref,
  searchComponent,
  mobileLinks,
  leftTitle,
  sideContent,
}: NavbarQisasProps) {

  const pathname = usePathname();

  const shouldShowMenu = menuHref && pathname !== menuHref;


  const router = useRouter();



  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white  md:pl-0">
      <div className="mx-auto grid max-w-[780px] grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[70px_minmax(0,700px)_1fr] xl:max-w-[1500px] xl:grid-cols-[280px_minmax(0,700px)_1fr]">
        {/* Left */}
        <Link
          href="/irsad-home"
          className="
          hidden md:flex h-[50px] items-center justify-center gap-1
            border-0 border-gray-200 transition-opacity
            hover:opacity-80
            md:border-r
            xl:justify-start pl-3 md:pl-2 md:pr-3 xl:pl-10
          "
        >
          <IrsadLogo className="mt-0.5 h-6 w-6 text-[#805a01]" />
          {leftTitle && (
            <p className="hidden font-oswald text-lg  uppercase tracking-tight text-[#8c7c05] xl:block xl:pl-3">
              {leftTitle}
            </p>
          )}
        </Link>

        {/* Middle */}
        <div className="relative pl-6 flex h-[50px] items-center justify-between border-r border-gray-200 pr-1 md:pr-5">

  
          {shouldShowMenu && <FontSizeControls className="absolute right-2 top-14 z-20" />}
              
          <h1 className="min-w-0 truncate pr-2 font-oswald text-lg  uppercase tracking-tight text-[#8c7c05]">
            {title}
          </h1>

          <article className="relative z-20 flex shrink-0 items-center gap-1 mr-3 md:mr-0 ">
            {shouldShowMenu && (
              <Link
                href={menuHref}
                aria-label="Open menu"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-md text-brand-600
                  transition-colors hover:bg-gray-200
                  md:mr-0
                "
              >
                <HamburgerMenuButton />
              </Link>
            )}
            <div
              className={`relative xl:hidden `}
            >
              {searchComponent}
            </div>
            <div className="md:hidden">
              <MobileNavigationMenu
              links={mobileLinks}
              buttonClassName="text-brand-600 hover:bg-gray-200"
            />
            </div>
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