"use client";

import { useEffect, useState } from "react";

const FONT_MIN = 80;
const FONT_MAX = 150;
const FONT_STEP = 10;

type FontSizeControlsProps = {
  className?: string;
};

export default function FontSizeControls({
  className = "",
}: FontSizeControlsProps) {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    const saved = localStorage.getItem("lesson-font-size");

    if (saved) {
      setFontSize(Math.min(FONT_MAX, Math.max(FONT_MIN, Number(saved))));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--lesson-font-scale",
      String(fontSize / 100)
    );

    localStorage.setItem("lesson-font-size", String(fontSize));
  }, [fontSize]);

  const changeFontSize = (delta: number) => {
    setFontSize((prev) =>
      Math.min(FONT_MAX, Math.max(FONT_MIN, prev + delta))
    );
  };

  return (
    <div
      className={`shrink-0 flex items-center gap-1 bg-surface border border-stone-200 rounded-xl px-1 py-0.5 ${className}`}
    >
      <button
        onClick={() => changeFontSize(-FONT_STEP)}
        disabled={fontSize <= FONT_MIN}
        title="Decrease text size"
        className="h-7 w-7 flex items-center justify-center rounded-lg text-stone-500 hover:bg-white hover:text-stone-800 hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-bold select-none"
      >
        A<span className="mb-1 text-[9px]">−</span>
      </button>

      <span className="w-8 select-none text-center text-xs tabular-nums text-stone-400">
        {fontSize}%
      </span>

      <button
        onClick={() => changeFontSize(FONT_STEP)}
        disabled={fontSize >= FONT_MAX}
        title="Increase text size"
        className="h-7 w-7 flex items-center justify-center rounded-lg text-stone-500 hover:bg-white hover:text-stone-800 hover:shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-bold select-none"
      >
        A<span className="mb-0.5 text-[11px]">+</span>
      </button>
    </div>
  );
}