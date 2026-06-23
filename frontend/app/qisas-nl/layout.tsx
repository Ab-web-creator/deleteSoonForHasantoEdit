// app/qisas-nl/layout.tsx
"use client";

// import NavbarQisas from "../components/NavbarQisas";
import SearchButtonQisas from "./components/SearchBoxQisas";
import NavSideBar from "../components/NavSideBar";
import QisasEnglishIntroBox from "./components/QisasEnglishIntroBox";
import NavbarQisas from "../components/NavbarQisas";



export default function QisasEngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      
      <NavbarQisas
      title="Qisas al-Anbiya"
      leftTitle="Weg van Ișq"
      searchComponent={<SearchButtonQisas />}
      menuHref="/qisas-nl"
      mobileLinks={[
        { label: "Startpagina", href: "/irsad-home" },
        { label: "Verhalen van de Profeten", href: "/qisas-nl" },
        { label: "Қисас ал-Анбиё, Oezbeeks", href: "/qisas-uzb" },
        { label: "Bibliotheek", href: "/docs-upload" },
        { label: "Kennis & Gemeenschap", href: "/study-platform" },
      ]}
      sideContent={<QisasEnglishIntroBox />}
    />
      <main className="pt-[50px]">
        <div className="mx-auto grid max-w-[780px] grid-cols-1 md:grid-cols-[70px_minmax(0,700px)_1fr] xl:max-w-[1500px] xl:grid-cols-[280px_minmax(0,700px)_1fr]">
          <NavSideBar
            items={[
              {
                label: "Startpagina",
                href: "/irsad-home",
                image: "/images/iconHome.png",
              },
              {
                label: "Oezbeekse Qisas",
                href: "/qisas-uzb",
                image: "/images/iconSripture.png",
              },
              {
                label: "English BT",
                href: "/qisas-eng-not-ai",
                image: "/images/iconSripture.png",
              },
              {
                label: "English Qisas (ai)",
                href: "/qisas-eng",
                image: "/images/iconSripture.png",
              },
             
            ]}
          />
          <div className="min-w-0 border-r border-gray-200 py-4 px-6 md:border-r">
            {children}
          </div>
          <div className="hidden p-6 md:block">
          </div>
        </div>
      </main>
    </div>
  );
}