// app/components/NavbarHome.tsx

"use client";

import IrsadLogo from "@/app/components/IrsadLogo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/stores/authStore";
import { buildAuthHref } from "@/lib/returnTo";
import { useGroupsStore } from "@/stores/groupsStore";
import ProfileTopButton from "./ProfileTopButton";
import NotificationButton from "./NotificationButton";
import MobileNavigationMenu from "./MobileNavigationMenu";

type NavItem = {
  label: string;
  href: string;
  badge?: number;
};

type NavbarHomeProps = {
  mobileLinks: NavItem[];
};

const tabletLinks = [
  { href: "/qisas-multi-page", label: "Qisas al-Anbiya" },
  { href: "/study-platform", label: "Community" },
  { href: "/docs-upload", label: "Library" },
];

function TabletLinksMd({
  pathname,
}: {
  pathname: string;
}) {
  return (
    <nav className="flex items-center gap-4">
      {tabletLinks.map((item) => {
        const isActive =
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className="
              group relative px-2 py-2
              text-sm font-medium uppercase
              text-white
            "
          >
            {item.label}

            <span
              className={`
                absolute bottom-1 left-2 right-2 h-[2px] rounded-full transition-all
                ${
                  isActive
                    ? "bg-white"
                    : "bg-transparent group-hover:bg-white"
                }
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}

const desktopLinks = [
  { href: "/home-page", label: "Home" },
  // { href: "/qisas-eng", label: "Stories of Prophets" },
  { href: "/qisas-multi-page", label: "Translations" },
  { href: "/study-platform", label: "Platform" },
  { href: "/docs-upload", label: "Library" },
];

export default function NavbarHome({ mobileLinks }: NavbarHomeProps) {
  
    const {
      invitations,
      requests,
      fetchInvitations,
      fetchRequests,
    } = useGroupsStore();


  const { user, isAuthenticated, logout } = useAuth();

  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();


    useEffect(() => {
    if (!isAuthenticated) return;

    fetchInvitations();
    fetchRequests();
  }, [isAuthenticated, fetchInvitations, fetchRequests]);

  const pendingCount = invitations.length + requests.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push("/home-page");
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-2 py-2 md:bg-brand-950 md:py-0 lg:bg-transparent lg:py-2">
      {/* MOBILE / TABLET NAVBAR */}
      <div className="md:hidden">
        <div
          className={`
            max-w-7xl items-center
            rounded-2xl  md:px-6
            transition-all duration-300
            ${
              isScrolled
                ? "ml-auto md:mx-auto md:justify-between flex w-fit md:w-full gap-1 px-1 bg-white/65 py-1 shadow-xl backdrop-blur-md md:bg-brand-950 lg:bg-white/65"
                : "flex justify-between w-full bg-transparent gap-3 px-4 py-3 md:bg-brand-950 md:py-1 lg:bg-transparent"
            }
          `}
        >
          <Link href="/home-page" className="flex items-center gap-2">
            <IrsadLogo
              className={`h-6 w-6 ${
                isScrolled
                  ? "text-brand-950 md:text-white lg:text-brand-950 hidden md:block"
                  : "text-white"
              }`}
            />

            <p
              className={`
                truncate font-oswald text-xl uppercase tracking-tight
                ${
                  isScrolled
                    ? "hidden md:block text-transparent md:text-white lg:text-brand-950 "
                    : "text-white"
                }
              `}
            >
              Way of Love
            </p>
          </Link>
          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <NotificationButton
                count={pendingCount}
                className="text-stone-600 p-1.5 hover:bg-stone-50"
              />
            )}
            {isAuthenticated ? (
              <ProfileTopButton user={user} handleLogout={handleLogout} />
            ) : (
              <Link
                href={buildAuthHref("/login", { returnTo: pathname })}
                className="
                  rounded-full bg-white px-4 py-1
                  text-sm font-medium text-brand-800
                  transition hover:bg-stone-50
                "
              >
                Sign in
              </Link>
            )}

            <MobileNavigationMenu
              links={mobileLinks}
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
              buttonClassName={`
                flex h-9 w-9 items-center justify-center rounded-md
                transition-colors
                ${
                  isScrolled
                    ? "text-brand-700 hover:bg-stone-100 md:text-brand-200 lg:text-brand-950"
                    : "text-white hover:bg-white/10"
                }
              `}
            />
          </div>
        </div>
      </div>
      
      {/* Tablet NAVBAR */}
      <div className="hidden md:block lg:hidden">
          <div
          className='hidden md:flex justify-between lg:hidden'
        >
              <Link href="/home-page" className="flex items-center gap-2">
                <IrsadLogo
                  className='h-6 w-6 text-white'
                />
                <p
                  className='truncate text-white text-lg font-oswald uppercase tracking-tight'
                >
                  Way of Love
                </p>
              </Link>
            <TabletLinksMd pathname={pathname} />
                <div className="flex items-center gap-2">
            {isAuthenticated && (
              <NotificationButton
                count={pendingCount}
                className="text-stone-600 p-1.5 hover:bg-stone-50"
              />
            )}
            {isAuthenticated ? (
              <ProfileTopButton user={user} handleLogout={handleLogout} />
            ) : (
              <Link
                href={buildAuthHref("/login", { returnTo: pathname })}
                className="
                  rounded-full bg-white px-4 py-1
                  text-sm font-medium text-brand-800
                  transition hover:bg-stone-50
                "
              >
                Sign in
              </Link>
            )}

            <MobileNavigationMenu
              links={mobileLinks}
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
              buttonClassName={`
                flex h-9 w-9 items-center justify-center rounded-md
                transition-colors
                ${
                  isScrolled
                    ? "text-brand-700 hover:bg-stone-100 md:text-brand-200 lg:text-brand-950"
                    : "text-white hover:bg-white/10"
                }
              `}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <div
        className={`
          hidden lg:block transition-all duration-300
          ${
            isScrolled
              ? "rounded-xl bg-white/65 shadow-xl backdrop-blur-md"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto flex max-w-7xl items-center justify-between
            rounded-2xl px-4 py-1 xl:px-0
          "
        >
          <Link href="/home-page" className="flex items-center gap-2">
            <IrsadLogo
              className={`h-6 w-6 ${
                isScrolled ? "text-brand-950" : "text-white"
              }`}
            />

            <p
              className={`
                truncate font-oswald text-xl uppercase tracking-tight
                ${isScrolled ? "text-brand-950" : "text-white"}
              `}
            >
              Way of Love
            </p>
          </Link>

          <nav className="flex items-center gap-2">
            {desktopLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative px-3 py-2 text-sm font-medium uppercase transition-all
                    ${
                      isScrolled
                        ? "text-brand-950 hover:text-brand-800"
                        : "text-white hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute bottom-1 left-3 right-3 h-[2px] rounded-full transition-all
                      ${
                        isActive
                          ? isScrolled
                            ? "bg-brand-700"
                            : "bg-white"
                          : isScrolled
                            ? "bg-transparent group-hover:bg-brand-700"
                            : "bg-transparent group-hover:bg-white"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <NotificationButton
                count={pendingCount}
                className="text-stone-600 p-2 hover:bg-stone-50"
              />
            )}

            {!isAuthenticated ? (
              <>
                <Link
                  href={buildAuthHref("/login", { returnTo: pathname })}
                  className={` min-w-[80px] text-center
                    rounded-btn px-3 py-2 text-sm font-medium transition-colors
                    ${
                      isScrolled
                        ? "text-brand-800 hover:bg-stone-100"
                        : "text-white hover:bg-white hover:text-brand-900"
                    }
                  `}
                >
                  Sign in
                </Link>

                <Link
                  href={buildAuthHref("/login", {
                    guest: true,
                    returnTo: pathname,
                  })}
                  className={`
                    min-w-[80px] rounded-btn border px-3 py-2 text-sm font-medium transition-colors text-center
                    ${
                      isScrolled
                        ? "border-brand-700 text-brand-800 hover:bg-stone-100"
                        : "border-white/40 text-white hover:bg-white/10"
                    }
                  `}
                >
                  Guest
                </Link>

                <Link
                  href={buildAuthHref("/register", { returnTo: pathname })}
                  className="min-w-[80px] rounded-btn bg-[#7d6922] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-95"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                <ProfileTopButton user={user} handleLogout={handleLogout} />

                <button
                  onClick={handleLogout}
                  className=" rounded-btn bg-[#f9f4e4] px-3 py-2 text-sm font-bold text-[#705602] transition-colors hover:bg-[#6b5200] hover:text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}