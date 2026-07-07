'use client';

import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";



import {
  tewratData,
  zamindaData,
  shimalNabilariData,
  yahudaNabilariData,
  surgunSonraNabilarData,
  ahirzamanData,
} from './KisasNavigationData';

import '@/app/styles/qisasNavigation.css';

type CollectionKey =
  | 'tewratData'
  | 'zamindaData'
  | 'shimalNabilariData'
  | 'yahudaNabilariData'
  | 'surgunSonraNabilarData'
  | 'ahirzamanData';

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
  image?: StaticImageData;
  icon?: string;
  slug: string;
  subChapters?: SubChapter[];
  hidden?: boolean;
};

const collections: Record<CollectionKey, Chapter[]> = {
  tewratData,
  zamindaData,
  shimalNabilariData,
  yahudaNabilariData,
  surgunSonraNabilarData,
  ahirzamanData,
};

const collectionButtons = [
  {
    id: 'tewratData',
    icon: '/images/nav-page-icons/ilk-peygamberler.png',
    title: 'İlk Peygamberler',
    subtitle: "Hz. Adem'den Hz. Musa'ya ",
  },
  {
    id: 'zamindaData',
    icon: '/images/nav-page-icons/arz-mevud.png',
    title: "Arz-ı Mev'ud'un İlk Nebîleri",
    subtitle: "Hz. Yuşa'dan Hz. Süleyman'a",
  },
  {
    id: 'shimalNabilariData',
    icon: '/images/nav-page-icons/shimal-israil.png',
    title: 'Kuzey İsrail Peygamberleri',
    subtitle: "Hz. İlyas'tan Hz. Yunus'a ",
  },
  {
    id: 'yahudaNabilariData',
    icon: '/images/nav-page-icons/yahuda.png',
    title: 'Yahuda Diyarı Peygamberleri',
    subtitle: "Hz. Yoel'den Hz. Danyal'e kadar ",
  },
  {
    id: 'surgunSonraNabilarData',
    icon: '/images/nav-page-icons/surgun.png',
    title: 'Sürgün Sonrası Nebîler',
    subtitle: "Babil'den Kudüs'e dönenler ",
  },
  {
    id: 'ahirzamanData',
    icon: '/images/nav-page-icons/ahirzaman.png',
    title: 'Ahir Zaman Peygamberleri',
    subtitle: "Son peygamberler ",
  },
] satisfies {
  id: CollectionKey;
  icon: string;
  title: string;
  subtitle?: string;
}[];

export default function KisasTrkMainPage() {

  const [selectedCollection, setSelectedCollection] =
    useState<CollectionKey>('tewratData');

  const titleRef = useRef<HTMLDivElement | null>(null);

  const STORAGE_KEY = 'kisas-trk-selectedCollection';

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
    saved === 'tewratData' ||
    saved === 'zamindaData' ||
    saved === 'shimalNabilariData' ||
    saved === 'yahudaNabilariData' ||
    saved === 'surgunSonraNabilarData' ||
    saved === 'ahirzamanData'
  ) {
    setSelectedCollection(saved);
  }

    const savedChapter = localStorage.getItem('kisas-trk-lastChapter');

    if (savedChapter) {
      try {
        setLastChapter(JSON.parse(savedChapter));
      } catch {
        localStorage.removeItem('kisas-trk-lastChapter');
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
     className={`group relative flex items-center gap-3 w-full md:w-[48%] px-2 py-2 rounded-xl transition-all duration-300 overflow-hidden border-2 shadow-sm
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
          className={`relative z-10 min-w-12 min-h-12 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 shrink-0
          ${
            isSelected
              ? 'bg-[#7b7700] text-white shadow-md'
              : 'bg-[#efe7cb] text-[#7b7700] group-hover:bg-[#7b7700] group-hover:text-white'
          }`}
        >
          <Image
            src={icon}
            alt={title}
            width={28}
            height={28}
            className="object-contain"
          />
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
    <div className="pb-20">
      <div className="collections_of_books">
        <div className="books_container flex flex-wrap gap-2 md:gap-4 justify-center mb-10">
          {collectionButtons.map((button) => (
            <CollectionButton key={button.id} {...button} />
          ))}
        </div>

        <div   ref={titleRef} className="border-t-2 scroll-mt-20">
          {lastChapter && (
              <p className="mt-6 text-[12px] leading-relaxed text-[#c00101]">
                 Son okunan bölüm:{" "}
                
                <span className="font-semibold">
                  “{lastChapter.title}” {" "} <span className="font-normal">idi.</span> 
                </span>{" "}

                <Link
                  href={`/kisas-trk/${lastChapter.slug}`}
                  className="underline underline-offset-2 hover:text-blue-500 transition"
                >
                   Devam etmek için bu bağlantıya tıklayın.
                </Link>
              </p>
            )}

          <div className="">
            <h2 className="text-xl md:text-2xl font-bold text-[#5f5314] leading-tight mt-6">
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
      <div className="qisas-chap-nav mt-6">
        <div className="course_item_contain  rounded-t-md">
          {selectedData
            .filter((chapter) => !chapter.hidden)
            .map((chapter) => (
              <div className="course_item" key={chapter.id}>
                <Link
                  href={`/kisas-trk/${chapter.slug}`}
                  className="chapter"
                >
                  <div className="chapter_image_name flex items-center flex-1">
                      <div
                        className="
                          z-[2] flex h-[35px] w-[35px] min-w-[35px]
                          items-center justify-center
                          overflow-hidden rounded-full
                          border border-[rgba(92,77,0,0.46)]
                          bg-white
                          p-1
                        "
                      >
                        {chapter.icon && (
                          <Image
                            src={chapter.icon}
                            alt={chapter.title}
                            width={28}
                            height={28}
                            className="object-contain"
                          />
                        )}
                      </div>
                    <p className="chapter_titles_navpage">
                      {chapter.numeration}. Bölüm: {chapter.title} {chapter.subtitle}
                    </p>
                  </div>
                </Link>

                <div className="sub_item">
                  {chapter.subChapters
                    ?.filter((sub) => !sub.hidden)
                    .map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/kisas-trk/${sub.slug}`}
                        className="sub_chapter block py-2 px-4 rounded-lg hover:bg-[#f8f4e9] transition-colors group"
                      >
                        <div className="sub_item_text flex items-center gap-1">
                          <p className="chapter_titles_navpage">
                            {sub.numeration}. Bölüm: {sub.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}