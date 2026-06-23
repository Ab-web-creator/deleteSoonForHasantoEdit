// app/qisas-eng-karin/[slug]/RememberLastChapter.tsx
'use client';

import { useEffect } from 'react';

type Props = {
  slug: string;
  title: string;
  collection: string;
};

export default function RememberLastChapter({ slug, title, collection }: Props) {
  useEffect(() => {
    localStorage.setItem(
      'qisas-eng-karin-lastChapter',
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