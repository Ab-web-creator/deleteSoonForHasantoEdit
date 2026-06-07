// app/qisas-uzb/layout.tsx
"use client";

import ReUsableQisasHeader from "../components/ReUsableQisasHeader";
import QisasUzbekIntroBox from "../components/QisasUzbekIntroBox";
import SearchButtonQisas from "./components/SearchBoxQisas";
import ReUsableSideBar from "../components/ReUsableSideBar";


export default function QisasUzbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
     <ReUsableQisasHeader
         menuHref="/qisas-uzb"
         searchComponent={<SearchButtonQisas />}
         leftTitle={
           <>IȘQ YÓLIDA</>
         }
         title={
           <>Пайғамбарлар тарихи</>
         }
           sideContent={<QisasUzbekIntroBox />}
       />

      <main className="pt-[50px]">
        <div className="mx-auto grid max-w-[780px] grid-cols-1 md:grid-cols-[70px_minmax(0,700px)_1fr] xl:max-w-[1500px] xl:grid-cols-[280px_minmax(0,700px)_1fr]">
          <ReUsableSideBar />
          {/* Center */}
          <div className="min-w-0 border-r border-gray-200 py-4 px-6 md:border-r">
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