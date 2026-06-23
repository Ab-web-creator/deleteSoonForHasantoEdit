// app/components/QisasSidebar.tsx
"use client";

import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import ProfileSideButton from "./ProfileSideButton";

const sidebarItems = [
  {
    href: "/irsad-home",
    iconSrc: "/images/iconHome.png",
    label: "Ana Sayfa",
  },
  {
    href: "/kisas-trk",
    iconSrc: "/images/iconQisasBooks.png",
    label: "Kısas'ul Enbiya",
  },
  {
    href: "/qisas-nl",
    iconSrc: "/images/iconQisasBooks.png",
    label: "Qisas, Dutch",
  },
  {
    href: "/qisas-eng-not-ai",
    iconSrc: "/images/iconQisasBooks.png",
    label: "Qisas al-Anbiya, English BT",
  },
  {
    href: "/qisas-uzb",
    iconSrc: "/images/iconQisasBooks.png",
    label: "Qisas Uzbek",
  },
];

export default function ReUsableSideBar() {
  const router = useRouter();
  const pathname = usePathname();

  
 

    
  return (
    <div className="hidden border-0 border-gray-200 bg-white md:block md:border-r">
      <div className="sticky top-[50px] h-[calc(100vh-50px)] overflow-y-auto px-2 py-6 xl:px-5">
        <article>
          {sidebarItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative mb-1 flex items-center gap-4
                  rounded-2xl px-3 py-3.5 text-[17px]
                  font-medium transition-all duration-200
                  xl:px-5
                  ${
                    isActive
                      ? "bg-[#fffbeb] text-[#4d3b00] shadow-sm"
                      : "text-[#7d6200] hover:bg-[#fffbeb] hover:text-[#3e3000]"
                  }
                `}
              >
                <img
                  src={item.iconSrc}
                  alt={item.label}
                  className={`
                    h-6 w-6 flex-shrink-0 object-contain transition-all
                    ${
                      isActive
                        ? "scale-110 brightness-110"
                        : "group-hover:scale-110 group-hover:brightness-110"
                    }
                  `}
                />

                <span
                  className="hidden xl:block"
                  style={{ fontFamily: "Roboto, sans-serif" }}
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