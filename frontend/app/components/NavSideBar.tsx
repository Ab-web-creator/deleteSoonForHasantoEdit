// app/components/QisasNavSidebar.tsx

"use client";

import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import ProfileSideButton from "./ProfileSideButton";


type NavItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
};



type NavSideBarProps = {
  items: NavItem[];
};

export default function NavSideBar({ items }: NavSideBarProps) {
  const router = useRouter();
  const pathname = usePathname();

 
  return (
    <div className="hidden border-0 border-gray-200 bg-white md:block md:border-r">
      <div className="sticky top-[50px] h-[calc(100vh-50px)] overflow-y-auto px-2 py-6 xl:px-5">
        <article>
        {items.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                group relative mb-1 flex items-start gap-4
                rounded-2xl px-3 py-2 text-[17px]
                transition-all duration-200
                xl:px-5
              "
            >
              {item.icon ? (
                <item.icon
                  className={`
                    h-6 w-6 flex-shrink-0
                    drop-shadow-[0_0_0.01px_currentColor]
                    transition-all duration-200
                    ${isActive ? "text-brand-800" : "text-brand-500"}
                  `}
                />
              ) : (
                <img
                  src={item.image}
                  alt=""
                  className="h-6 w-6 flex-shrink-0 object-contain"
                />
              )}

              <span
                className={`
                  hidden xl:block -mt-0.5 font-roboto text-brand-950
                  ${isActive ? "font-bold" : "font-medium"}
                `}
              >
                {item.label}
              </span>
            </Link>
          );
        })}

        </article>
      
      </div>
    </div>
  );
}