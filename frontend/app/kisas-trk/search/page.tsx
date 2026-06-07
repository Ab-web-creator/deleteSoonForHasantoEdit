// app/kisas-trk/search/page.tsx

import Image from "next/image";
import type { StaticImageData } from "next/image";

import not_found from "../../../public/not_found.png";

import fs from "fs";
import path from "path";
import Link from "next/link";

import {
  tewratData,
  zamindaData,
  shimalNabilariData,
  yahudaNabilariData,
  surgunSonraNabilarData,
  ahirzamanData,
} from "../KisasNavigationData";
import BackButton from "@/app/components/BackButton";

type Chapter = {
  slug: string;
  title?: string;
  subtitle?: string;
  middleBtmNav?: string;
  image?: StaticImageData;
  component?: () => Promise<any>;
  subChapters?: Chapter[];
};

const sections = [
  ...tewratData,
  ...zamindaData,
  ...shimalNabilariData,
  ...yahudaNabilariData,
  ...surgunSonraNabilarData,
  ...ahirzamanData,
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

function getAllChapterFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getAllChapterFiles(fullPath);
    }

    if (
      entry.name.endsWith(".tsx") ||
      entry.name.endsWith(".ts") ||
      entry.name.endsWith(".jsx") ||
      entry.name.endsWith(".js")
    ) {
      return [fullPath];
    }

    return [];
  });
}

function cleanText(text: string) {
  return text
    .replace(/<[^>]*>/g, " ")
    .replace(/[{}()[\].,;:'"`!?]/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase();
}

const chaptersDir = path.join(process.cwd(), "app/kisas-trk-chapters");
const chapterFiles = getAllChapterFiles(chaptersDir);

function getChapterFileText(chapter: Chapter) {
  const slug = chapter.slug.toLowerCase();

  const matchingFiles = chapterFiles.filter((file) => {
    const normalizedFile = file.toLowerCase();
    return normalizedFile.includes(slug);
  });

  return matchingFiles
    .map((file) => fs.readFileSync(file, "utf8"))
    .join(" ");
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q?.trim().toLowerCase() || "";
  const cleanedQuery = cleanText(query);

const results = !cleanedQuery
  ? []
  : allChapters
      .map((chapter) => {
        const chapterText = cleanText(getChapterFileText(chapter));

        const matches = chapterText.match(
          new RegExp(cleanedQuery, "gi")
        );

        return {
          ...chapter,
          matchCount: matches ? matches.length : 0,
        };
      })
      .filter((chapter) => chapter.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);

  return (
    <div className="mx-auto max-w-2xl pb-20">
   

       <article className="flex justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#817a1d]">
              Arama Sonuçları
            </h1>

            {query && (
              <p className="mb-6 text-sm text-gray-500">
                Aranan kelime:{" "}
                <span className="font-medium">{searchParams.q}</span>
              </p>
            )}
          </div>
            <BackButton>
              Vazgeç
            </BackButton>
        </article>
      



      <div className="flex flex-col gap-3">
        {results.map((chapter, index) => (
         <Link
            key={chapter.slug}
            href={`/kisas-trk/${chapter.slug}`}
            className="
              flex   gap-4
              border-b border-[#eee8d8]
              px-1 py-4
              transition
              last:border-b-0
              hover:bg-[#faf8f2]
            "
          >
            <div className="-mt-1 relative flex h-12 w-12 shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="24"
                  y="24"
                  width="52"
                  height="52"
                  fill="none"
                  stroke="#d8c58a"
                  strokeWidth="2.5"
                  rx="3"
                />

                <rect
                  x="24"
                  y="24"
                  width="52"
                  height="52"
                  fill="none"
                  stroke="#d8c58a"
                  strokeWidth="2.5"
                  rx="3"
                  transform="rotate(45 50 50)"
                />
              </svg>

              <span className="relative z-10 text-sm font-semibold text-[#9d842f]">
                {index + 1}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="leading-[1.15] text-md font-semibold text-[#8c7c05]">
                {chapter.title}
              </h2>

              <div className="mt-1 text-sm text-[#8b8576]">
                Bu kelime {chapter.matchCount} kere zikredilmiş.
              </div>
            </div>
          </Link>
        ))}

        {query && results.length === 0 && (
         <article className="border rounded-xl p-5 flex flex-col items-center">
          <Image
            src={not_found}
            alt=""
            width={260}
            height={260}
            className="h-56 w-56 object-contain"
          />
          <p className="text-lg lg:text-xl text-center text-[#967300]">
            Aradığınız ifadeye ait sonuç bulunamadı.
          </p>
          <p className="mt-2 text-sm lg:text-md text-center">Başka anahtar kelimelerle tekrar deneyebilirsiniz.</p>
         </article>
        )}
      </div>
    </div>
  );
}