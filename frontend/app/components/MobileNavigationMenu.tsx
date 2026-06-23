"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DotsMenuButton from "./DotsMenuButton";

type NavItem = {
  label: string;
  href: string;
  badge?: number;
};

type MobileNavigationMenuProps = {
  links: NavItem[];
  isAuthenticated?: boolean;
  onLogout?: () => Promise<void> | void;
  buttonClassName?: string;
};

export default function MobileNavigationMenu({
  links,
  isAuthenticated = false,
  onLogout,
  buttonClassName = "",
}: MobileNavigationMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <DotsMenuButton
        onClick={() => setOpen((prev) => !prev)}
        className={buttonClassName}
      />

      {mounted &&
        open &&
        createPortal(
          <div
            onClick={closeMenu}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                absolute left-0 right-0 top-0
                md:left-auto md:right-4 md:top-4 md:rounded-2xl
                mx-auto w-full md:max-w-sm
                pb-1
                animate-in slide-in-from-top-2
                bg-white shadow-2xl duration-200
              "
            >
              <div className="flex items-center justify-end p-4 pb-0">
                <button
                  onClick={closeMenu}
                  className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full text-brand-800
                    transition hover:bg-stone-200
                  "
                  aria-label="Close menu"
                  type="button"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 mb-2  text-brand-500">
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></span>
                  <span className="text-xl">❖</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></span>
              </div>

              <div className="flex max-h-[80vh] flex-col gap-0.5 overflow-y-scroll px-4 pb-4 pt-2 font-medium">
                {links.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`
                        group flex items-center justify-center rounded-2xl px-4 py-2.5 font-medium
                        transition-all duration-200
                        ${
                          isActive
                            ? "text-brand-950 hover:bg-[#fffefb]"
                            : "text-brand-800 hover:bg-[#f5f1e4] hover:text-brand-950"
                        }
                      `}
                    >
                      <span className="text-xl">{item.label}</span>
                    </Link>
                  );
                })}

                {isAuthenticated && onLogout && (
                  <button
                    onClick={async () => {
                      closeMenu();
                      await onLogout();
                    }}
                    className="
                      group text-center w-1/2 mx-auto mt-3 flex  items-center justify-center rounded-2xl
                      border border-transparent px-8 py-3 font-medium
                      text-red-700 transition-all duration-200
                      hover:border-red-600 hover:bg-red-50
                    "
                    type="button"
                  >
                    <span className="text-xl">Log out</span>
                  </button>
                )}

              <div className="flex items-center justify-center gap-3 mt-8 mb-2  text-brand-500">
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></span>
                  <span className="text-xl">❖</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></span>
              </div>


             
                <Link
                  href="/qisas-multi-page"
                  onClick={closeMenu}
                  className="p-4
                    block text-center text-sm text-stone-500
                    transition-colors hover:text-stone-800
                  "
                >
                  View Qisas al-Anbiya in other languages
                </Link>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}