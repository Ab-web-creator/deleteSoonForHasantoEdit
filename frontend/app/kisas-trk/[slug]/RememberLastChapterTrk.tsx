// app/kisas-trk/[slug]/RememberLastChapterTrk.tsx
'use client';

import { useEffect } from 'react';

type Props = {
  slug: string;
  title: string;
  collection: string;
};

export default function RememberLastChapterTrk({ slug, title, collection }: Props) {
  useEffect(() => {
    localStorage.setItem(
      'kisas-trk-lastChapter',
      JSON.stringify({
        slug,
        title,
        collection,
        savedAt: Date.now(),
      })
    );
  }, [slug, title, collection]);

  return null;
}