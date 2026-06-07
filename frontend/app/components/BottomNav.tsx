"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/irsad-home", iconSrc: "/images/iconHome.png", label: "Anasayfa" },
  { href: "/kisas-trk", iconSrc: "/images/iconQisasBooks.png", label: "Kıssalar" },
  { href: "/qisas-uzb", iconSrc: "/images/iconQisasBooks.png", label: "Qisas" },
  { href: "/irsad-docs", iconSrc: "/images/iconDocs.png", label: "Dökümanlar" },
  { href: "/ogrenme-platformu", iconSrc: "/images/iconStudy.png", label: "Platform" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed px-2 bottom-0  left-0 right-0 z-40 border-t border-gray-200 bg-white md:hidden"
      >

      <div className="mx-auto grid max-w-[780px] grid-cols-5 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center rounded-xl py-2 transition-all ${
                isActive ? "bg-[#f7f0d8]" : ""
              }`}
            >
              <img
                src={item.iconSrc}
                alt={item.label}
                className={`h-5 w-auto transition ${
                  isActive ? "scale-110 opacity-100" : "opacity-70"
                }`}
              />

              <span
                className={`mt-0.5 text-[9px] ${
                  isActive ? "font-bold text-[#705b00]" : "text-[#705b00]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}