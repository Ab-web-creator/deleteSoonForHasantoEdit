// hooks/useSpeechBubbles.ts

'use client';

import { useEffect, useState } from 'react';

export function useSpeechBubbles(bubbleIds: string[]) {
  const [openBubbles, setOpenBubbles] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');

    const createState = (isLargeScreen: boolean) => {
      const initialState: Record<string, boolean> = {};

      bubbleIds.forEach((id) => {
        initialState[id] = isLargeScreen;
      });

      return initialState;
    };

    // initial state only once
    setOpenBubbles(createState(mediaQuery.matches));

    const handleChange = (e: MediaQueryListEvent) => {
      setOpenBubbles(createState(e.matches));
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
    
    // IMPORTANT:
    // no bubbleIds dependency
  }, []);

  const toggleBubble = (id: string) => {
    setOpenBubbles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    openBubbles,
    toggleBubble,
  };
}