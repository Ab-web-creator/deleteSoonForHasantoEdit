// app/qisas-eng-not-ai/layout.tsx
"use client";

import NavbarQisas from "../components/NavbarQisas";
import SearchButtonQisas from "./components/SearchBoxQisas";
import NavSideBar from "../components/NavSideBar";
import QisasEnglishIntroBox from "./components/QisasEnglishIntroBox";



export default function QisasEngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
       <NavbarQisas
          title="Qisas al-Anbiya"
          leftTitle="Way of Love"
          searchComponent={<SearchButtonQisas />}
          menuHref="/qisas-eng-not-ai"
          mobileLinks={[
            { label: "Home Page", href: "/irsad-home" },
            { label: "Stories of Prophets, English", href: "/qisas-eng" },
            { label: "Қисас ал-Анбиё, ўзбекча", href: "/qisas-uzb" },
            { label: "Knowledge & Community", href: "/study-platform" },
            { label: "Resource Library", href: "/docs-upload" },
          ]}
           sideContent={<QisasEnglishIntroBox />}
        />
      <main className="pt-[50px]">
        <div className="mx-auto grid max-w-[780px] grid-cols-1 md:grid-cols-[70px_minmax(0,700px)_1fr] xl:max-w-[1500px] xl:grid-cols-[280px_minmax(0,700px)_1fr]">
          <NavSideBar
            items={[
             { label: "Home Page", 
              href: "/irsad-home",
              image: "/images/iconHome.png",
             },
        
            { label: "Қисас ал-Анбиё", 
              href: "/qisas-uzb",
              image: "/images/iconSripture.png", },
            { label: "Resource Library", 
              href: "/docs-upload",
              image: "/images/iconResources.png", },
            { label: "Community", 
              href: "/study-platform",
              image: "/images/iconStudy.png", },
            ]}
          />
          <div className="min-w-0 border-r border-l-8 border-l-brand-600 border-gray-200 py-4 px-6 md:border-r">
            {children}
          </div>
          <div className="hidden p-6 md:block">
          </div>
        </div>
      </main>
    </div>
  );
}