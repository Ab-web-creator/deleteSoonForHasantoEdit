// app/qisas-uzb/page.tsx
// 
'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import {
  tawratData,
  zamindaData,
  xushxabarData,
  safarData,
} from './QisasNavigationData';

import '@/app/styles/qisasNavigation.css';

type CollectionKey =
  | 'tawratData'
  | 'zamindaData'
  | 'xushxabarData'
  | 'safarData';

type SvgComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type SubChapter = {
  id: number;
  numeration: number;
  title: string;
  subtitle?: string;
  slug: string;
  hidden?: boolean;
};

type Chapter = {
  id: number;
  numeration: number;
  title: string;
  subtitle?: string;
  image?: SvgComponent;
  icon?: SvgComponent;
  slug: string;
  subChapters?: SubChapter[];
  hidden?: boolean;
};

const collections: Record<CollectionKey, Chapter[]> = {
  tawratData,
  zamindaData,
  xushxabarData,
  safarData,
};

const collectionButtons = [
  {
    id: 'tawratData',
    icon: '⚖️',
    title: 'Шариат боблари',
    subtitle: 'Илк пайғамбарлар',
  },
  {
    id: 'zamindaData',
    icon: '⛰️',
    title: 'Ваъда қилинган юртда',
    subtitle: 'Тарих баёнлари',
  },
  {
    id: 'xushxabarData',
    icon: '🕊️',
    title: 'Мужда: Тасаввуф йўли',
    subtitle: 'Ички дунёга саёҳат',
  },
  {
    id: 'safarData',
    icon: '🌾',
    title: 'Салтанат шогирдлари',
    subtitle: 'Устоз насиҳатлари ортидан',
  },
] satisfies {
  id: CollectionKey;
  icon: string;
  title: string;
  subtitle?: string;
}[];

export default function QisasUzbMainPage() {
  const [selectedCollection, setSelectedCollection] =
    useState<CollectionKey>('tawratData');

  const titleRef = useRef<HTMLDivElement | null>(null);

  const STORAGE_KEY = 'qisas-uzb-selectedCollection';

  type LastChapter = {
    slug: string;
    title: string;
    collection: string;
    savedAt: number;
  };

  const [lastChapter, setLastChapter] = useState<LastChapter | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (
      saved === 'tawratData' ||
      saved === 'zamindaData' ||
      saved === 'xushxabarData' ||
      saved === 'safarData'
    ) {
      setSelectedCollection(saved);
    }

    const savedChapter = localStorage.getItem('qisas-uzb-lastChapter');

    if (savedChapter) {
      try {
        setLastChapter(JSON.parse(savedChapter));
      } catch {
        localStorage.removeItem('qisas-uzb-lastChapter');
      }
    }
  }, []);

  const handleDataSelection = (collectionName: CollectionKey) => {
    setSelectedCollection(collectionName);
    localStorage.setItem(STORAGE_KEY, collectionName);

    setTimeout(() => {
      titleRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 50);
  };

  const selectedCollectionInfo = collectionButtons.find(
    (button) => button.id === selectedCollection
  );

  const selectedData = collections[selectedCollection] || [];

  const CollectionButton = ({
    id,
    icon,
    title,
    subtitle,
  }: {
    id: CollectionKey;
    icon: string;
    title: string;
    subtitle?: string;
  }) => {
    const isSelected = selectedCollection === id;

 

    return (
      <button
        onClick={() => handleDataSelection(id)}
        className={`group relative flex items-center gap-3 w-full md:w-[48%] px-2 py-1 rounded-xl transition-all duration-300 overflow-hidden border-2 shadow-sm
        ${
          isSelected
            ? 'border-[#7b7700] ring-2 ring-[#d8c75c]/40 bg-[#f8f4e8]'
            : 'border-[#ddd2ad] bg-[#f5f1e6] hover:border-[#7b7700]'
        }`}
      >
        {isSelected && (
          <div
            className="absolute inset-0 bg-center bg-cover opacity-[0.28]"
            style={{
              backgroundImage: "url('/images/kamar.png')",
            }}
          />
        )}

        <div className="absolute inset-0 bg-[#f8f4e8]/35" />

        <div
          className={`relative z-10 min-w-10 min-h-10 w-10 h-10 rounded-full flex items-center justify-center text-2xl transition-all duration-300 shrink-0
          ${
            isSelected
              ? 'bg-[#efe7cb] border-2 border-[#7b7700] text-white shadow-md'
              : 'bg-[#efe7cb] text-[#7b7700] group-hover:bg-[#7b7700] group-hover:text-white'
          }`}
        >
          {icon}
        </div>

        <div className="relative z-10 text-left">
          <h3 className="text-sm font-bold leading-tight text-[#5f5314]">
            {title}
          </h3>

          {subtitle && (
            <p className="text-[12px] text-[#9a8d58] mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className="pb-20 relative">

      <div className="collections_of_books">
        <div className="books_container flex flex-wrap items-stretch gap-2 md:gap-4 justify-start mb-5">
          {collectionButtons.map((button) => (
            <CollectionButton key={button.id} {...button} />
          ))}
        </div>

        <div ref={titleRef} className="scroll-mt-14">
          {lastChapter && (
            <p className="mt-6 text-[12px] leading-relaxed text-[#c00101]">
              Охирги кўрган бобингиз:{" "}
              
              <span className="font-semibold">
                “{lastChapter.title}” {" "} <span className="font-normal">эди.</span> 
              </span>{" "}

              <Link
                href={`/qisas-uzb/${lastChapter.slug}`}
                className="underline underline-offset-2 hover:text-blue-500 transition"
              >
                Давом этиш учун мана бу линкни босинг.
              </Link>
            </p>
          )}
          <div className="">

            
            <div className="">
              <h2 className="text-xl font-oswald uppercase md:text-2xl font-bold text-brand-600 leading-tight mt-6 sm:mt-10">
                {selectedCollectionInfo?.title}
              </h2>

              {selectedCollectionInfo?.subtitle && (
                <p className="text-[14px] text-[#8c7d45] mt-0 sm:mt-1">
                  {selectedCollectionInfo.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="qisas-chap-nav mt-6">
        <div className="course_item_contain rounded-t-md">
          {selectedData
            .filter((chapter) => !chapter.hidden)
            .map((chapter) => {
              const ChapterImage = chapter.image;

              return (
                <div className="course_item" key={chapter.id}>
                  <Link
                    href={`/qisas-uzb/${chapter.slug}`}
                    className="chapter"
                  >
                    <div className="chapter_image_name flex items-center flex-1">
                      <div className="round_div">
                        {ChapterImage && (
                          <ChapterImage className="w-full h-full text-[#5f5314]" />
                        )}
                      </div>

                      <p className="chapter_titles_navpage">
                        {chapter.numeration}-боб: {chapter.title} {chapter.subtitle}
                      </p>
                    </div>
                  </Link>

                  <div className="sub_item">
                    {chapter.subChapters
                      ?.filter((sub) => !sub.hidden)
                      .map((sub) => (
                        <Link
                          key={sub.id}
                          href={`/qisas-uzb/${sub.slug}`}
                          className="sub_chapter block py-2 px-4 rounded-lg hover:bg-[#f8f4e9] transition-colors group"
                        >
                          <div className="sub_item_text flex items-center gap-1">
                            <p className="chapter_titles_navpage">
                              {sub.numeration}-боб: {sub.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}