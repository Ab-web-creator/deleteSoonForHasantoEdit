// app/kisas-trk/layout.tsx
"use client";

import ReUsableQisasHeader from "../components/ReUsableQisasHeader";
import QisasTurkishIntroBox from "../components/QisasTurkishIntroBox";
import SearchBoxKisas from "./components/SearchBoxKisas";
import ReUsableSideBar from "../components/ReUsableSideBar";


export default function KisasTrkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <ReUsableQisasHeader
        menuHref="/kisas-trk"
        searchComponent={<SearchBoxKisas />}
        leftTitle={
          <>İRŞAD MEKTEBİ</>
        }
        title={
          <>Peygamberlerin hayatı</>
        }
          sideContent={<QisasTurkishIntroBox />}
      />

      <main className="pt-[50px]">
        <div className="mx-auto grid max-w-[780px] grid-cols-1 md:grid-cols-[70px_minmax(0,700px)_1fr] xl:max-w-[1500px] xl:grid-cols-[280px_minmax(0,700px)_1fr]">
          <ReUsableSideBar />
          {/* Center */}
          <div className="min-w-0 border-r border-gray-200 sm:py-4 p-6 md:px-4 md:border-r">
            {children}
          </div>
          {/* Right */}
          <div className="hidden p-6 md:block">
            {/* Additional content later */}
          </div>
        </div>
      </main>
      
    </div>
  );
}