import Link from "next/link";

export default function LeftSideHomepage() {
  return (
    <div
      className="
        flex flex-col justify-between
        items-center lg:items-start
        text-center lg:text-left h-full
      "
    >

      <div className="relative w-full sm:py-10 lg:py-0 lg:pl-8 overflow-hidden">
        <div
            className="
              absolute inset-0 
              lg:hidden opacity-50
              bg-cover bg-center bg-no-repeat
              bg-[url('/images/tryOut3.png')]
            "
          />

           <div className="absolute  lg:hidden inset-0 bg-gradient-to-r from-[#f7f5f0]/10 via-[#f7f5f0]/80 to-transparent opacity-90" />

        <div className="relative">
            <h1
              className="text-[#705600] mt-8 mb-4 sm:mt-0 sm:mb-10  text-3xl font-bold   sm:text-6xl  lg:font-light tracking-wide leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              İRŞAD MEKTEBİ
            </h1>

          <p className="text-[#514217] text-xl sm:text-2xl  leading-snug max-w-5xl font-semibold font-amiri">
            اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
          </p>

          <p
            className="mt-1 sm:mt-3 pb-6 w-full text-[#4a351e] text-md  sm:text-xl leading-snug italic font-light"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            İhdinâs-sırâte'l-müstakîm
          </p>
        </div>
      </div>

        {/* ACTIONS */}
      <div className="hidden pl-8 lg:flex flex-wrap gap-5 mt-12 justify-center lg:justify-start">
        <Link
          href="/kisas-trk"
          className="
            px-6 py-3
            rounded-3xl
            bg-[#9d842f]
            text-white
            text-lg
            shadow-xl
            hover:scale-105
            hover:bg-[#7d6922]
            transition-all
          "
        >
          Okumaya başla
        </Link>
       
        <a
          href="#footer"
          className="
            inline-flex items-center justify-center

            px-8 py-2
            rounded-3xl
            bg-white/70
            backdrop-blur-sm
            border border-[#9d842f]/20
            text-[#9d842f]
            text-lg
            shadow-sm

            transition-all duration-300

            hover:bg-white
            hover:shadow-md
            hover:scale-105
            hover:border-[#9d842f]/40

            active:scale-[0.98]
          "
        >
          Bize Ulaşın
        </a>
      </div>
      {/* Desktop Background */}
 
    </div>
  );
}