// app/components/ReusableNavbarForThree.tsx

"use client";

import IrsadLogo from "@/app/components/IrsadLogo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import ProfileTopButton from "./ProfileTopButton";

type NavItem = {
  label: string;
  href: string;
  badge?: number;
};

type ReusableNavbarForThreeProps = {
  mobileLinks: NavItem[];
};

const desktopLinks = [
  { href: "/irsad-home", label: "Ana sayfa" },
  { href: "/kisas-trk", label: "Kıssalar" },
  { href: "/qisas-uzb", label: "Qisas" },
  { href: "/irsad-docs", label: "Dökümanlar" },
  { href: "/ogrenme-platformu", label: "Platform" },
];

export default function ReusableNavbarForThree({
  mobileLinks,
}: ReusableNavbarForThreeProps) {
  
  const [menuOpen, setMenuOpen] = useState(false);

  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);



  return (
    <>
      <header className="fixed left-0 top-0 z-20 w-full bg-[#f7f5f0]/65 backdrop-blur-sm shadow-sm sm:bg-white/65">
        <div
          className={`
            mx-auto flex h-[50px] max-w-7xl items-center justify-between
            border px-6 sm:px-8 sm:py-1 
            ${menuOpen ? "border-b-0 border-[#e6dcc0]" : "border-transparent"}
            lg:border-none
          `}
        >
          {/* LOGO */}
          <article className="flex w-full items-center justify-between gap-4 lg:w-fit">
            <Link href="/irsad-home" className="flex items-center gap-2">
              <IrsadLogo className="h-6 w-6 text-[#805a01]" />

              <p className="truncate font-oswald text-lg uppercase tracking-tight text-[#8c7c05]">
                İRŞAD MEKTEBİ
              </p>
            </Link>
          </article>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-2 lg:flex">
            {desktopLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative px-3 py-2 text-sm font-medium transition-all
                    ${
                      isActive
                        ? "text-[#5f4900]"
                        : "text-[#7d6922] hover:text-[#3b2e00]"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute bottom-1 left-3 right-3 h-[3px] rounded-full transition-all
                      ${
                        isActive
                          ? "bg-[#8b6b00]"
                          : "bg-transparent group-hover:bg-[#8b6b00]"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            
              <Link
                href="/login"
                className="
                  lg:hidden
                  rounded-lg border border-stone-200
                  bg-white px-3 py-1.5
                  text-sm font-medium text-stone-700
                  transition hover:bg-stone-50 truncate
                "
              >
                Sign in
              </Link>
          
       



            {/* MOBILE Hamburger menu */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-2xl text-[#705602] transition-colors hover:bg-gray-50 lg:hidden"
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
          </div>
        </div>

        {/* MOBILE SIDE MENU */}
        {menuOpen && (
          <div className="animate-in slide-in-from-top-2 rounded-b-3xl border border-t-0 border-[#e6dcc0] bg-[#f7f5f0]/65  shadow-2xl backdrop-blur-xl duration-200 lg:hidden">

          
            <div className="flex flex-col gap-2 px-4 py-4 text-[15px] font-medium">
              {mobileLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      group flex items-center justify-between
                      rounded-2xl px-4 py-3
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-[#f5f1e4] text-[#5f4900] shadow-sm"
                          : "text-[#7d6922] hover:bg-[#f5f1e4]"
                      }
                    `}
                  >
                    <span className="font-medium tracking-tight">
                      {item.label}
                    </span>

                    <span className="text-lg opacity-40 transition group-hover:translate-x-1">
                      ›
                    </span>
                  </Link>

                );
              })}
            </div>
          </div>
        )}
      </header>

      <div className="h-[50px]" />
    </>
  );
}