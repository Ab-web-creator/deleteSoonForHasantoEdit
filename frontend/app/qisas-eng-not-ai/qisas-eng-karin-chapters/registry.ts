// // app/qisas-uzb-chapters/registry.ts

// import { chapterInfo as adamChapterInfo } from "./tawrat/adam-alayhissalam/data";

// // Future imports
// import { chapterInfo as nuhChapterInfo } from "./tawrat/nuh-alayhissalam/data";

// export const chaptersRegistry = {
//   "adam-alayhissalam": {
//     chapterInfo: {
//       ...adamChapterInfo,
//       type: "sub",
//     },

//     component: () =>
//       import("./tawrat/adam-alayhissalam/index"),

//     prev: null,
//     next: null,
//   },

//   // Example subchapter
  
//   // "odamning-yaratilishi": {
//   //   chapterInfo: {
//   //     title: "Odamning yaratilishi",
//   //     description: "",
//   //     type: "sub",
//   //   },

//   //   component: () =>
//   //     import("./tawrat/adam-yaratilishi/index"),

//   //   prev: "adam-alayhissalam",
//   //   next: "nuh-alayhissalam",
//   // },


//   // Future main chapter
  

//     "nuh-alayhissalam": {
//     chapterInfo: {
//       ...nuhChapterInfo,
//       type: "main",
//     },

//     component: () =>
//       import("./tawrat/nuh-alayhissalam/index"),

//     prev: null,
//     next: null,
//   },

  
// } as const;

// export type ChapterSlug = keyof typeof chaptersRegistry;

// export type ChapterType = "main" | "sub";