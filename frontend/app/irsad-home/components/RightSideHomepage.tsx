import Link from "next/link";
import Image from "next/image";
import LanternImage from "./LanternImage";

import iconKisas from "../../../public/images/mobile-icons-per-page/iconKisas.png";
import iconQisas from "../../../public/images/mobile-icons-per-page/iconQisas.png";
import iconDocs from "../../../public/images/mobile-icons-per-page/iconDocs.png";
import iconStudyPlatform from "../../../public/images/mobile-icons-per-page/iconStudyPlatform.png";


export default function RightSideHomepage() {
  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="sm:hidden  flex flex-col gap-3  w-full">
        {/* CARD */}
        <Link
          href="/kisas-trk"
          className="
            flex items-center gap-4
            rounded-3xl
            border
                     bg-[#f7f5f0]
            p-2
            shadow-sm
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-[#b4973f]/15
              text-3xl
            "
          >
            <Image
              src={iconKisas}
              alt="Kısas icon"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span
              className="
                text-[#714b25]
                  text-lg
                sm:text-2xl
                leading-tight
                font-bold
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Kısas'ul Enbiya, Türkçe
            </span>

            <span className="text-[#6B5B4A] text-sm mt-1">
              Peygamberin Hayatları
            </span>
          </div>
        </Link>

  

        {/* CARD */}
        <Link
          href="/qisas-uzb"
          className="
            flex items-center gap-4
            rounded-3xl
            border
            bg-[#f7f5f0]
            p-2
            shadow-sm
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-[#b4973f]/15
              text-3xl
            "
          >
                <Image
              src={iconQisas}
              alt="Kısas icon"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span
              className="
                text-[#714b25]
                text-lg
                sm:text-2xl
                leading-tight
                font-bold
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Qisas al-Anbiya, Özbekça
            </span>

            <span className="text-[#6B5B4A] text-sm mt-1">
              Payğambarlar tarixi
            </span>
          </div>
        </Link>

      {/* CARD */}
        <Link
          href="/irsad-docs"
          className="
            flex items-center gap-4
            rounded-3xl
            border
            bg-[#f7f5f0]
            p-2
            shadow-sm
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-[#b4973f]/15
              text-3xl
            "
          >
                <Image
              src={iconDocs}
              alt="Kısas icon"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span
              className="
                text-[#714b25]
                  text-lg
                sm:text-2xl
                leading-tight
                font-bold
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Dökümanlar
            </span>

            <span className="text-[#6B5B4A] text-sm mt-1">
              PDF ve kaynaklar
            </span>
          </div>
        </Link>

        {/* CARD */}
        <Link
          href="/ogrenme-platformu"
          className="
            flex items-center gap-4
            rounded-3xl
            border
            bg-[#f7f5f0]
            p-2
            shadow-sm
            transition-all duration-300
            hover:scale-[1.02]
          "
        >
          <div
            className="
              flex h-14 w-14
              items-center justify-center
              rounded-2xl
              bg-[#b4973f]/15
              text-3xl
            "
          >
                <Image
              src={iconStudyPlatform}
              alt="Kısas icon"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span
              className="
                text-[#714b25]
                  text-lg
                sm:text-2xl
                leading-tight
                font-bold
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Öğrenme Platformu
            </span>
               <span className="text-[#6B5B4A] text-sm mt-1">
              Kurslar ve odalar
            </span>
          </div>
                 {/* CENTER IMAGE */}
        <div
          className="
            flex items-center justify-center
            py-6
          "
        >
        </div>
        </Link>
          {/* <div className="scale-[1.1]">
            <LanternImage />
          </div> */}
      </div>

      {/* ================= DESKTOP ================= */}
      
      <div
        className="
          hidden sm:grid
          relative
          self-center
          justify-self-center
          lg:justify-self-end
          w-full
          max-w-[700px]
          max-h-[400px]
          border-[4px]
          border-[#c7b88a42]
          rounded-[28px]
          opacity-70
          bg-[#f9f2e492]
          overflow-hidden
          grid-cols-3
          grid-rows-3
          sm:p-10
        "
      >
        {/* CENTER LINES */}
        <div className="pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[130px] w-[4px] -translate-x-1/2 bg-[#c7b88a42]" />
          <div className="absolute left-1/2 bottom-0 h-[90px] w-[4px] -translate-x-1/2 bg-[#c7b88a42]" />
          <div className="absolute top-1/2 left-0 h-[4px] w-[140px] -translate-y-1/2 bg-[#c7b88a42]" />
          <div className="absolute top-1/2 right-0 h-[4px] w-[160px] -translate-y-1/2 bg-[#c7b88a42]" />
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[300px] h-[300px] rounded-full bg-[#d4bc72]/30 blur-3xl" />
        </div>

        {/* TOP LEFT QUADRANT HOVER AREA */}
        <Link
          href="/kisas-trk"
          className="
            group absolute left-0 top-0 z-20
            h-1/2 w-1/2
          "
        >
          <span
            className="
              absolute left-10 top-10
              max-w-[220px]
              text-[#2e1700]
              text-2xl
              leading-tight
              font-bold
              transition-transform duration-300
              group-hover:scale-105
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Kısas'ul Enbiya,
            <br />
            Türkçe
            <span
              className="
                ml-3 inline-block
                text-3xl font-bold text-[#a89563]
                opacity-0
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            >
              ⟶
            </span>
          </span>
        </Link>

        {/* TOP RIGHT QUADRANT HOVER AREA */}
        <Link
          href="/irsad-docs"
          className="
            group absolute right-0 top-0 z-20
            h-1/2 w-1/2
          "
        >
          <span
            className="
              absolute right-10 top-10
              max-w-[220px]
              text-left
              text-[#2e1700]
              text-2xl
              leading-tight
              font-bold
              transition-transform duration-300
              group-hover:scale-105
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Döküman  <br /> Yönetimi
            <span
              className="
                ml-3 inline-block
                text-3xl font-bold text-[#a89563]
                opacity-0
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            >
              ⟶
            </span>
          </span>
        </Link>

        {/* CENTER IMAGE */}
        <div
          className="
            col-start-2 row-start-2
            flex items-center justify-center
            scale-[1.25]
            z-10
            pointer-events-none
          "
        >
          <LanternImage />
        </div>

        {/* BOTTOM LEFT QUADRANT HOVER AREA */}
        <Link
          href="/qisas-uzb"
          className="
            group absolute left-0 bottom-0 z-20
            h-1/2 w-1/2
          "
        >
          <span
            className="
              absolute left-10 bottom-10
              min-w-[200px]
              text-[#2e1700]
              text-2xl
              leading-tight
              font-bold
              transition-transform duration-300
              group-hover:scale-105
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Qisas al-Anbiya,
            <br />
            Ózbekça
            <span
              className="
                ml-3 inline-block
                text-3xl font-bold text-[#a89563]
                opacity-0
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            >
              ⟶
            </span>
          </span>
        </Link>

        {/* BOTTOM RIGHT QUADRANT HOVER AREA */}
        <Link
          href="/ogrenme-platformu"
          className="
            group absolute right-0 bottom-0 z-20
            h-1/2 w-1/2
          "
        >
          <span
            className="
              absolute right-10 bottom-10
              max-w-[200px]
              text-left
              text-[#2e1700]
              text-2xl
              leading-tight
              font-bold
              transition-transform duration-300
              group-hover:scale-105
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Öğrenme <br /> Platformu
            <span
              className="
                ml-3 inline-block
                text-3xl font-bold text-[#a89563]
                opacity-0
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:opacity-100
              "
            >
              ⟶
            </span>
          </span>
        </Link>
      </div>
    </>
  );
}