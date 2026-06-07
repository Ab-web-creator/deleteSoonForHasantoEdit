// app/qisas-uzb/[slug]/page.tsx

import { notFound } from "next/navigation";
 
import Link from "next/link";
import { Suspense } from "react";
import RememberLastChapter from "./RememberLastChapter";

import {
  tawratData,
  zamindaData,
  xushxabarData,
  safarData,
  
} from "../QisasNavigationData";

type Chapter = {
  slug: string;
  title: string;
  subtitle?: string;
  middleBtmNav?: string;
  image?: React.ComponentType<{ className?: string }>;
  component?: () => Promise<{ default: React.ComponentType }>;
  subChapters?: Chapter[];
  prevChapter?: string;
  prevSlug?: string;
  nextChapter?: string;
  nextSlug?: string;
};

const sections = [
  ...tawratData,
  ...zamindaData,
  ...xushxabarData,
  ...safarData,
   
] as Chapter[];

const allChapters = sections.flatMap((chapter) => [
  {
    ...chapter,
    type: "main",
  },

  ...(chapter.subChapters || []).map((subChapter) => ({
    ...subChapter,
    type: "sub",
    parentSlug: chapter.slug,
    image: chapter.image,
  })),
]);

export default async function ChapterPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentIndex = allChapters.findIndex(
    (chapter) => chapter.slug === params.slug
  );

  if (currentIndex === -1) {
    notFound();
  }

  const currentChapter = allChapters[currentIndex];

  if (!currentChapter.component) {
    notFound();
  }

  const module = await currentChapter.component();
  const StoryComponent = module.default;

  if (!StoryComponent) {
    notFound();
  }

  const isSubChapter = currentChapter.type === "sub";

  const ChapterImage = currentChapter.image;

  return (
    <div className="max-w-3xl mx-auto pb-20 md:pb-0">

      <RememberLastChapter
        slug={currentChapter.slug}
        title={currentChapter.title}
        collection="qisas-uzb"
      />

      <div className="pt-4 w-full">
        {/* Chapter Header */}
        <div className="mb-8">
          {isSubChapter ? (
            <div className=" flex flex-col">
              <article className="mx-auto">
                <h1 
                  className="max-w-[40ch] uppercase px-6 leading-[1.4] text-center text-xl md:text-2xl tracking-wide"
                  style={{ fontFamily: "'Times New Roman', serif" }}
                >
                  {currentChapter.title}
                </h1>
              </article>

              <div className="flex justify-center mt-6">
                <p className="text-center text-[8px] text-[#cbcbcb]"> 
                  ――  ✼ ―  ✼  ―  ✼  ――   
                  </p>
              </div>

            </div>
          ) : (
            <div className="text-center">
              <div 
                className="text-center mb-12 p-3 sm:p-5 relative overflow-hidden min-h-[50px] sm:min-h-[110px] flex items-center justify-center border-2 sm:border-4 border-[#dfc82d]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/kamar.png')",
                    opacity: 0.75
                  }}
                />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, #dfd, #fff7b1)",
                    opacity: 0.85
                  }}
                />

                <div className="relative z-10 flex items-center justify-start gap-4 sm:gap-8 w-full">
                  {ChapterImage && (
                    <ChapterImage className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] p-1 border-2 sm:border-4 border-[#e6d00e] rounded-full text-[#af9d00] shrink-0" />
                  )}

                  <h1
                    className="m-0 uppercase text-left md:pl-6 text-lg sm:text-3xl leading-tight md:leading-[1.3] text-[#af9d00]"
                    style={{ fontFamily: "'Times New Roman', serif" }}
                  >
                    {currentChapter.title}                    
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Story Content */}
        <article
          className="
            prose prose-lg max-w-none
            prose-headings:text-[#3f2d16]
            prose-p:text-[#2f2f2f]
            prose-p:leading-8"
        >
          <Suspense fallback={
            <div className="py-20 text-center text-[#7b7700]">
              Yuklanmoqda...
            </div>
          }>
            <StoryComponent />
          </Suspense>
        </article>

        {/* Navigation - Fully Static */}
        <div className="flex items-center gap-1 mt-20 pt-10 border-t border-gray-200">
          
          {/* Previous */}
          <div className="w-fit">
            {currentChapter.prevChapter ? (
              <Link
                href={`/qisas-uzb/${currentChapter.prevSlug || currentChapter.prevChapter}`}
                className="w-fit truncate flex items-center justify-center gap-2 rounded-md bg-[#68643f] px-4 py-3 text-[12px] font-medium text-white shadow-md hover:bg-[#564e0a] active:scale-[0.98] transition-all"
              >
                <span>←</span>
                <span className="hidden sm:block ">
                  {currentChapter.prevChapter}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Middle */}
          <Link
            href="/qisas-uzb"
            className="group relative flex-1 truncate flex items-center justify-center rounded-md bg-[#68643f] px-6 py-3 text-[12px] font-medium text-white shadow-md hover:bg-[#564e0a] active:scale-[0.98] transition-all overflow-hidden"
          >
            {/* Default text */}
            <span className="transition-opacity duration-200 group-hover:opacity-0">
              {currentChapter.middleBtmNav}
            </span>

            {/* Hover text */}
            <span className="absolute opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Barcha boblar
            </span>
          </Link>

          {/* Next */}
          <div className="">
            {currentChapter.nextChapter ? (
              <Link
                href={`/qisas-uzb/${currentChapter.nextSlug || currentChapter.nextChapter}`}
                className="w-fit truncate flex items-center justify-center gap-2 rounded-md bg-[#68643f] px-4 py-3 text-[12px] font-medium text-white shadow-md hover:bg-[#564e0a] active:scale-[0.98] transition-all"
              >
                <span className="hidden sm:block ">
                  {currentChapter.nextChapter}
                </span>
                <span>→</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}