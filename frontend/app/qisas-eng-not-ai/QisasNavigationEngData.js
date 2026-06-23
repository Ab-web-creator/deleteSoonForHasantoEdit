import AdamImage from '@/app/components/svgs/AdamImage';
import NuhImage from '@/app/components/svgs/NuhImage';
import IbrahimImage from '@/app/components/svgs/IbrahimImage';
import IshaqImage from '@/app/components/svgs/IshaqImage';
import IsmailImage from '@/app/components/svgs/IsmailImage';
import YaqubImage from '@/app/components/svgs/YaqubImage';
import YusufImage from '@/app/components/svgs/YusufImage';
import MusaImage from '@/app/components/svgs/MusaImage';
import YushaImage from '@/app/components/svgs/YushaImage';
import ShariaRevealedImage from '@/app/components/svgs/ShariaRevealedImage';
import JudgesImage from '@/app/components/svgs/JudgesImage';
import SamuelImage from '@/app/components/svgs/SamuelImage';
import TalutImage from '@/app/components/svgs/TalutImage';
import DavidImage from '@/app/components/svgs/DavidImage';
import SulaymanImage from '@/app/components/svgs/SulaymanImage';
import YunusImage from '@/app/components/svgs/YunusImage';
import ZakariyaWaYahyaImage from '@/app/components/svgs/ZakariyaWaYahyaImage';
import MaryamImage from '@/app/components/svgs/MaryamImage';
import IsaImage from '@/app/components/svgs/IsaImage';
import RuhulQudsNuzliImage from '@/app/components/svgs/RuhulQudsNuzliImage';
import OtherNationsComingImage from '@/app/components/svgs/OtherNationsComingImage';
import QuddusShorasi from '@/app/components/svgs/QuddusShorasi';
import TalutArrestedImage from '@/app/components/svgs/TalutArrestedImage';


export const tawratData = [
  {
    id: 1,
    numeration: 1,
    title: "The Story of Adam alayhis-salam",
    middleBtmNav: "Story of Adam (a.s.)",
    subtitle: "— life in Paradise",
    image: AdamImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/adam-alayhissalam"),
    slug: "adam-alayhissalam",
    prevChapter: "Introduction",
    prevSlug: "introduction",
    nextChapter: "Creation",
    nextSlug: "dunyoning-yaratilishi",
    subChapters: [
      {
        id: 0,
        numeration: 0,
        title: "Translator's Preface",
        middleBtmNav: "Preface",
        component: () => import("./qisas-eng-karin-chapters/introduction"),
        slug: "introduction",
        hidden: true,
        prevChapter: "Do't use",
        prevSlug: "introduction",
        nextChapter: "Adam (a.s.)",
        nextSlug: "adam-alayhissalam",
      },
      {
        id: 11,
        numeration: 2,
        title: "The Creation of the World",
        middleBtmNav: "Creation of the World",
        component: () => import("./qisas-eng-karin-chapters/tawrat/adam-alayhissalam/dunyoning-yaratilishi"),
        slug: "dunyoning-yaratilishi",
        prevChapter: "Adam (a.s.)",
        prevSlug: "adam-alayhissalam",
        nextChapter: "Expulsion",
        nextSlug: "jannatdan-haydilish",
      },
      {
        id: 12,
        numeration: 3,
        title: "The Expulsion from the Garden of Paradise",
        middleBtmNav: "Expulsion from Paradise",
        component: () => import("./qisas-eng-karin-chapters/tawrat/adam-alayhissalam/jannatdan-haydilish"),
        slug: "jannatdan-haydilish",
        prevChapter: "Creation",
        prevSlug: "dunyoning-yaratilishi",
        nextChapter: "Qabil and Habil",
        nextSlug: "qobil-va-hobil",
      },
      {
        id: 13,
        numeration: 4,
        title: "The Story of Qabil and Habil",
        middleBtmNav: "Qabil and Habil",
        component: () => import("./qisas-eng-karin-chapters/tawrat/adam-alayhissalam/qobil-va-hobil"),
        slug: "qobil-va-hobil",
        prevChapter: "Expulsion",
        prevSlug: "jannatdan-haydilish",
        nextChapter: "Nuh (a.s.)",
        nextSlug: "nuh-alayhissalam",
      },
    ],
  },

  {
    id: 2,
    numeration: 5,
    title: "The Story of Nuh alayhis-salam",
    middleBtmNav: "Story of Nuh (a.s.)",
    subtitle: "— the Flood",
    image: NuhImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/nuh-alayhissalam"),
    slug: "nuh-alayhissalam",
    prevChapter: "Qabil and Habil",
    prevSlug: "qobil-va-hobil",
    nextChapter: "Nuh's covenant'",
    nextSlug: "nuh-ahdi",
    subChapters: [
      {
        id: 21,
        numeration: 6,
        title: "Allah's Covenant with Nuh alayhis-salam",
        middleBtmNav: "The Covenant of Nuh (a.s.)",
        component: () => import("./qisas-eng-karin-chapters/tawrat/nuh-alayhissalam/nuh-ahdi"),
        slug: "nuh-ahdi",
        prevChapter: "Nuh (a.s.)",
        prevSlug: "nuh-alayhissalam",
        nextChapter: "Ibrahim (a.s.)",
        nextSlug: "ibrahim-alayhissalam",
      },
    ],
  },

  {
    id: 3,
    numeration: 7,
    title: "The Story of Ibrahim (a.s.), Khalilullah",
    middleBtmNav: "Ibrahim (a.s.)",
    subtitle: "and the Everlasting Covenant",
    image: IbrahimImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/ibrahim-alayhissalam"),
    slug: "ibrahim-alayhissalam",
    prevChapter: "Covenant with Nuh",
    prevSlug: "nuh-ahdi",
    nextChapter: "Promise of Barakah",
    nextSlug: "baraka-haqida-vada",
    subChapters: [
      {
        id: 31,
        numeration: 8,
        title: "The Covenant and the Promise of Barakah",
        middleBtmNav: "Covenant and Blessing",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ibrahim-alayhissalam/baraka-haqida-vada"),
        slug: "baraka-haqida-vada",
        prevChapter: "Ibrahim (a.s.)",
        prevSlug: "ibrahim-alayhissalam",
        nextChapter: "Ahd is confirmed",
        nextSlug: "ibrahim-ahdining-tasdiqlanishi",
      },
      {
        id: 32,
        numeration: 9,
        title: "The Confirmation of Allah's Covenant",
        middleBtmNav: "Covenant confirmation",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ibrahim-alayhissalam/ibrahim-ahdining-tasdiqlanishi"),
        slug: "ibrahim-ahdining-tasdiqlanishi",
        prevChapter: "Promise of Barakah",
        prevSlug: "baraka-haqida-vada",
        nextChapter: "Mother Hajar",
        nextSlug: "hojar-bibi-va-ismail",
      },
      {
        id: 33,
        numeration: 10,
        title: "The Story of  Hajar Bibi, the mother of Ismail (a.s.)",
        middleBtmNav: "Mother Hajar",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ibrahim-alayhissalam/hojar-bibi-va-ismail"),
        slug: "hojar-bibi-va-ismail",
        prevChapter: "Ahd confirmation",
        prevSlug: "ibrahim-ahdining-tasdiqlanishi",
        nextChapter: "Sign of Ahd",
        nextSlug: "ibrahim-ahdining-alomati",
      },
      {
        id: 34,
        numeration: 11,
        title: "The Sign of the Covenant with Ibrahim (a.s.)",
        middleBtmNav: "Aya of Covenant",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ibrahim-alayhissalam/ibrahim-ahdining-alomati"),
        slug: "ibrahim-ahdining-alomati",
        prevChapter: "Mother Hajar",
        prevSlug: "hojar-bibi-va-ismail",
        nextChapter: "Sodom and Gomorrah",
        nextSlug: "sadum-gamura",
      },
      {
        id: 35,
        numeration: 12,
        title: "The Story of Sodom and Gomorrah",
        middleBtmNav: "Sodom and Gomorrah",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ibrahim-alayhissalam/sadum-gamura"),
        slug: "sadum-gamura",
        prevChapter: "Sign of the Ahd",
        prevSlug: "ibrahim-ahdining-alomati",
        nextChapter: "Ismail (a.s.)",
        nextSlug: "ismail-alayhissalam",
      },
    ],
  },

  {
    id: 4,
    numeration: 13,
    title: "The Story of Ismail alayhis-salam",
    middleBtmNav: "Ismail (a.s.)",
    subtitle: "— The Life-Giving Water",
    image: IsmailImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/ismail-alayhissalam"),
    slug: "ismail-alayhissalam",
    prevChapter: "Sodom and Gomorrah",
    prevSlug: "sadum-gamura",
    nextChapter: "Allah's zabih",
    nextSlug: "ibrahim-ahdining-sinovi",
    subChapters: [
      {
        id: 41,
        numeration: 14,
        title: "The Covenant put to the test",
        middleBtmNav: "Covenant test",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ismail-alayhissalam/ibrahim-ahdining-sinovi"),
        slug: "ibrahim-ahdining-sinovi",
        prevChapter: "Ismail (a.s)",
        prevSlug: "ismail-alayhissalam",
        nextChapter: "Ishaq (a.s)",
        nextSlug: "ishaq-alayhissalam",
      },
    ],
  },

  {
    id: 5,
    numeration: 15,
    title: "The Story of Ishaq alayhis-salam",
    middleBtmNav: "Ishaq (a.s.)",
    subtitle: "— The Barakah chain continues",
    image: IshaqImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/ishaq-alayhissalam"),
    slug: "ishaq-alayhissalam",
    prevChapter: "Zabih",
    prevSlug: "ibrahim-ahdining-sinovi",
    nextChapter: "Chapter of twins",
    nextSlug: "egizaklar-tugilishi",
    subChapters: [
      {
        id: 51,
        numeration: 16,
        title: "The Birth of the twin brothers, Esau and Yaqub",
        middleBtmNav: "The Birth of the Twins",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ishaq-alayhissalam/egizaklar-tugilishi"),
        slug: "egizaklar-tugilishi",
        prevChapter: "Ishaq (a.s)",
        prevSlug: "ishaq-alayhissalam",
        nextChapter: "Who's got the barakah?",
        nextSlug: "yaqub-baraka-oldi",
      },
      {
        id: 52,
        numeration: 17,
        title: "Yaqub alayhis-salam receives the Barakah chain",
        middleBtmNav: "Receiving the Blessing",
        component: () => import("./qisas-eng-karin-chapters/tawrat/ishaq-alayhissalam/yaqub-baraka-oldi"),
        slug: "yaqub-baraka-oldi",
        prevChapter: "Chapter of twins",
        prevSlug: "egizaklar-tugilishi",
        nextChapter: "Yaqub (a.s.)",
        nextSlug: "yaqub-alayhissalam",
      },
    ],
  },

  {
    id: 6,
    numeration: 18,
    title: "The Story of Yaqub alayhis-salam",
    middleBtmNav: "Yaqub (a.s.)",
    subtitle: "— Years of Patience",
    image: YaqubImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/yaqub-alayhissalam"),
    slug: "yaqub-alayhissalam",
    prevChapter: "Who's got the barakah?",
    prevSlug: "yaqub-baraka-oldi",
    nextChapter: "His marriage",
    nextSlug: "yaqub-uylanish-tarixi",
    subChapters: [
      {
        id: 61,
        numeration: 19,
        title: "Yaqub (a.s.) and his marriages",
        middleBtmNav: "Story of the Marriage",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yaqub-alayhissalam/yaqub-uylanish-tarixi"),
        slug: "yaqub-uylanish-tarixi",
        prevChapter: "Yaqub (a.s.)",
        prevSlug: "yaqub-alayhissalam",
        nextChapter: "Return to Canaan",
        nextSlug: "yaqub-kanaanga-qaytadi",
      },
      {
        id: 62,
        numeration: 20,
        title: "Yaqub (a.s.) returns to Canaan",
        middleBtmNav: "Return to Canaan",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yaqub-alayhissalam/yaqub-kanaanga-qaytadi"),
        slug: "yaqub-kanaanga-qaytadi",
        prevChapter: "Story of marriage",
        prevSlug: "yaqub-uylanish-tarixi",
        nextChapter: "Fight with Angel",
        nextSlug: "farishta-bilan-olishuv",
      },
      {
        id: 63,
        numeration: 21,
        title: "The Night Struggle with the Angel",
        middleBtmNav: "The Night Struggle",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yaqub-alayhissalam/farishta-bilan-olishuv"),
        slug: "farishta-bilan-olishuv",
        prevChapter: "Return to Canaan",
        prevSlug: "yaqub-kanaanga-qaytadi",
        nextChapter: "Yusuf (a.s.)",
        nextSlug: "yusuf-alayhissalam",
      },
    ],
  },

  {
    id: 7,
    numeration: 22,
    title: "The Story of Yusuf alayhis-salam",
    middleBtmNav: "Story of Yusuf (a.s.)",
    subtitle: "— Rise to leadership",
    image: YusufImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/yusuf-alayhissalam"),
    slug: "yusuf-alayhissalam",
    prevChapter: "Wrestling with an Angel",
    prevSlug: "farishta-bilan-olishuv",
    nextChapter: "Chapter of Dreams",
    nextSlug: "tushlar-bobi",
    subChapters: [
      {
        id: 71,
        numeration: 23,
        title: "The Interpretation of the Dreams",
        middleBtmNav: "The Chapter of Dreams",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yusuf-alayhissalam/tushlar-bobi"),
        slug: "tushlar-bobi",
        prevChapter: "Yusuf (a.s.)",
        prevSlug: "yusuf-alayhissalam",
        nextChapter: "Meeting Brothers",
        nextSlug: "akalar-bilan-uchrashuv",
      },
      {
        id: 72,
        numeration: 24,
        title: "The First Meeting with His Brothers",
        middleBtmNav: "Meeting Brothers",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yusuf-alayhissalam/akalar-bilan-uchrashuv"),
        slug: "akalar-bilan-uchrashuv",
        prevChapter: "Chapter of Dreams",
        prevSlug: "tushlar-bobi",
        nextChapter: "Pharaoh's Invitation",
        nextSlug: "firavnning-taklifi",
      },
      {
        id: 73,
        numeration: 25,
        title: "Pharaoh invites Bani Israil to Egypt",
        middleBtmNav: "Pharaoh's Invitation",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yusuf-alayhissalam/firavnning-taklifi"),
        slug: "firavnning-taklifi",
        prevChapter: "Meeting Brothers",
        prevSlug: "akalar-bilan-uchrashuv",
        nextChapter: "Prophecy of Yaqub",
        nextSlug: "yaqubning-bashorati",
      },
      {
        id: 74,
        numeration: 26,
        title: "Yaqub (a.s.) foretells the future",
        middleBtmNav: "Prophecy",
        component: () => import("./qisas-eng-karin-chapters/tawrat/yusuf-alayhissalam/yaqubning-bashorati"),
        slug: "yaqubning-bashorati",
        prevChapter: "Pharaoh's Invitation",
        prevSlug: "firavnning-taklifi",
        nextChapter: "Musa (a.s.)",
        nextSlug: "musa-alayhissalam",
      },
    ],
  },

  {
    id: 8,
    numeration: 27,
    title: "The Story of Prophet Musa alayhis-salam",
    middleBtmNav: "Musa alayhis-salam",
    subtitle: "— the Hijrah from Misr",
    image: MusaImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/musa-alayhissalam"),
    slug: "musa-alayhissalam",
    prevChapter: "Prophecy",
    prevSlug: "yaqubning-bashorati",
    nextChapter: "Who am I?",
    nextSlug: "men-kimman",
    subChapters: [
      {
        id: 81,
        numeration: 28,
        title: "Musa (a.s.) seeks his true identity",
        middleBtmNav: "Who Am I?",
        component: () => import("./qisas-eng-karin-chapters/tawrat/musa-alayhissalam/men-kimman"),
        slug: "men-kimman",
        prevChapter: "Musa (a.s.)",
        prevSlug: "musa-alayhissalam",
        nextChapter: "Three miracles",
        nextSlug: "musaga-berilgan-mojizalar",
      },
      {
        id: 82,
        numeration: 29,
        title: "Three Miracles of Musa alayhis-salam",
        middleBtmNav: "Three Miracles",
        component: () => import("./qisas-eng-karin-chapters/tawrat/musa-alayhissalam/musaga-berilgan-mojizalar"),
        slug: "musaga-berilgan-mojizalar",
        prevChapter: "Who am I?",
        prevSlug: "men-kimman",
        nextChapter: "The Plagues",
        nextSlug: "misrga-berilgan-ofatlar",
      },
      {
        id: 83,
        numeration: 30,
        title: "The Plagues that struck Misr",
        middleBtmNav: "The Plagues in Misr",
        component: () => import("./qisas-eng-karin-chapters/tawrat/musa-alayhissalam/misrga-berilgan-ofatlar"),
        slug: "misrga-berilgan-ofatlar",
        prevChapter: "Three miracles",
        prevSlug: "musaga-berilgan-mojizalar",
        nextChapter: "The Sacrifice",
        nextSlug: "qurbonlik-bayrami",
      },
      {
        id: 84,
        numeration: 31,
        title: "Eid al-Adha: The Festival of Sacrifice",
        middleBtmNav: "Eid al-Adha",
        component: () => import("./qisas-eng-karin-chapters/tawrat/musa-alayhissalam/qurbonlik-bayrami"),
        slug: "qurbonlik-bayrami",
        prevChapter: "The Plagues",
        prevSlug: "misrga-berilgan-ofatlar",
        nextChapter: "In the wilderness",
        nextSlug: "sahrodagi-sarguzashtlar",
      },
      {
        id: 85,
        numeration: 32,
        title: "The Wandering in the Wilderness",
        middleBtmNav: "In the Wilderness",
        component: () => import("./qisas-eng-karin-chapters/tawrat/musa-alayhissalam/sahrodagi-sarguzashtlar"),
        slug: "sahrodagi-sarguzashtlar",
        prevChapter: "Eid al-Adha",
        prevSlug: "qurbonlik-bayrami",
        nextChapter: "Shariah covenant",
        nextSlug: "shariat-ahdi",
      },
    ],
  },

  {
    id: 9,
    numeration: 33,
    title: "The Covenant of the Shariah at Mount Sinai",
    middleBtmNav: "The Shariah Covenant",
    subtitle: "and the wilderness years",
    image: ShariaRevealedImage,
    component: () => import("./qisas-eng-karin-chapters/tawrat/shariat-ahdi"),
    slug: "shariat-ahdi",
    prevChapter: "In the wilderness",
    prevSlug: "sahrodagi-sarguzashtlar",
    nextChapter: "Ahkamul-shariah",
    nextSlug: "shariat-namunalari",
    subChapters: [
      {
        id: 91,
        numeration: 34,
        title: "Examples of the Divine Law",
        middleBtmNav: "Shariah Law",
        component: () => import("./qisas-eng-karin-chapters/tawrat/shariat-ahdi/shariat-namunalari"),
        slug: "shariat-namunalari",
        prevChapter: "Shariah covenant",
        prevSlug: "shariat-ahdi",
        nextChapter: "Entering Shariah Ahd",
        nextSlug: "bani-isroil-shariatni-qabullaydi",
      },
      {
        id: 92,
        numeration: 35,
        title: "Bani Israel enter the Shariah Covenant",
        middleBtmNav: "Shariah Covenant",
        component: () => import("./qisas-eng-karin-chapters/tawrat/shariat-ahdi/bani-isroil-shariatni-qabullaydi"),
        slug: "bani-isroil-shariatni-qabullaydi",
        prevChapter: "Ahkamul-shariah",
        prevSlug: "shariat-namunalari",
        nextChapter: "Commandments",
        nextSlug: "chodirda-berilgan-amrlar",
      },
      {
        id: 93,
        numeration: 36,
        title: "Commandments given in the Tent of Meeting",
        middleBtmNav: "Rulings Revealed in the Tent",
        component: () => import("./qisas-eng-karin-chapters/tawrat/shariat-ahdi/chodirda-berilgan-amrlar"),
        slug: "chodirda-berilgan-amrlar",
        prevChapter: "Entering the Covenant",
        prevSlug: "bani-isroil-shariatni-qabullaydi",
        nextChapter: "40 years in Wilderness",
        nextSlug: "qirq-yil-sahroda",
      },
      {
        id: 94,
        numeration: 37,
        title: "Forty Years in the Wilderness",
        middleBtmNav: "In the Wilderness",
        component: () => import("./qisas-eng-karin-chapters/tawrat/shariat-ahdi/qirq-yil-sahroda"),
        slug: "qirq-yil-sahroda",
        prevChapter: "Commandments",
        prevSlug: "chodirda-berilgan-amrlar",
        nextChapter: "Farewell Counsels",
        nextSlug: "musaning-vasiyati",
      },
      {
        id: 95,
        numeration: 38,
        title: "The Final Counsel of Musa alayhis-salam",
        middleBtmNav: "Farewell Counsels",
        component: () => import("./qisas-eng-karin-chapters/tawrat/shariat-ahdi/musaning-vasiyati"),
        slug: "musaning-vasiyati",
        prevChapter: "40 years in Wilderness",
        prevSlug: "qirq-yil-sahroda",
        nextChapter: "Yu'sha (a.s.)",
        nextSlug: "yusha-alayhissalam",
      },
    ],
  },
];

export const zamindaData = [
  {
    id: 100,
    numeration: 1,
    slug: "yusha-alayhissalam",
    title: "Story of Yusha (AS)",
    middleBtmNav: "Story of Yusha (AS)",
    image: YushaImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/yusha-alayhissalam"
      ),
    prevChapter: "Васият",
    prevSlug: "musaning-vasiyati",
    nextChapter: "Ваъда юрти",
    nextSlug: "vada-qilingan-yurtga-kirish",

    subChapters: [
      {
        id: 1001,
        numeration: 2,
        slug: "vada-qilingan-yurtga-kirish",
        title: "Entering the Promised Land",
        middleBtmNav: "The Promised Land",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/yusha-alayhissalam/vada-qilingan-yurtga-kirish"
          ),
        prevChapter: "Юъшо (а.с.)",
        prevSlug: "yusha-alayhissalam",
        nextChapter: "Танланг",
        nextSlug: "kimga-xizmat-qilasiz",
      },

      {
        id: 1002,
        numeration: 3,
        slug: "kimga-xizmat-qilasiz",
        title: "Choose Whom You Will Serve",
        middleBtmNav: "Whom Will You Serve?",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/yusha-alayhissalam/kimga-xizmat-qilasiz"
          ),
        prevChapter: "Ваъда юрти",
        prevSlug: "vada-qilingan-yurtga-kirish",
        nextChapter: "Ҳакамлар",
        nextSlug: "hakamlar-davri",
      },
    ],
  },

  {
    id: 101,
    numeration: 4,
    slug: "hakamlar-davri",
    title: "The Period of the Judges. History of Bani Israel",
    middleBtmNav: "The Period of the Judges",
    image: JudgesImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/hakamlar-davri"
      ),
    prevChapter: "Танланг",
    prevSlug: "kimga-xizmat-qilasiz",
    nextChapter: "Ёффай (р.а.)",
    nextSlug: "yaffay-qissasi",

    subChapters: [
      {
        id: 1011,
        numeration: 5,
        slug: "yaffay-qissasi",
        title: "Story of Yaffay",
        middleBtmNav: "Story of Yaffay",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/hakamlar-davri/yaffay-qissasi"
          ),
        prevChapter: "Ҳакамлар",
        prevSlug: "hakamlar-davri",
        nextChapter: "Ёффайнинг назри",
        nextSlug: "yaffayning-nazri",
      },

      {
        id: 1012,
        numeration: 6,
        slug: "yaffayning-nazri",
        title: "The Vow of Yaffay",
        middleBtmNav: "Yaffay's Vow",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/hakamlar-davri/yaffayning-nazri"
          ),
        prevChapter: "Ёффай (р.а.)",
        prevSlug: "yaffay-qissasi",
        nextChapter: "Гива воқеаси",
        nextSlug: "givadagi-razalat",
      },

      {
        id: 1013,
        numeration: 7,
        slug: "givadagi-razalat",
        title: "The Outrage at Givah",
        middleBtmNav: "The Outrage at Givah",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/hakamlar-davri/givadagi-razalat"
          ),
        prevChapter: "Ёффай назри",
        prevSlug: "yaffayning-nazri",
        nextChapter: "Халқ кенгаши",
        nextSlug: "misfadagi-kengash",
      },

      {
        id: 1014,
        numeration: 8,
        slug: "misfadagi-kengash",
        title: "The People's Council at Misfah",
        middleBtmNav: "The Council at Misfah",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/hakamlar-davri/misfadagi-kengash"
          ),
        prevChapter: "Разолат",
        prevSlug: "givadagi-razalat",
        nextChapter: "Сомуил (а.с.)",
        nextSlug: "samuil-alayhissalam",
      },
    ],
  },

  {
    id: 102,
    numeration: 9,
    slug: "samuil-alayhissalam",
    title: "Story of Samuel (AS)",
    middleBtmNav: "Story of Samuel (AS)",
    image: SamuelImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/samuil-alayhissalam"
      ),
    prevChapter: "Мисфадаги кенгаш",
    prevSlug: "misfadagi-kengash",
    nextChapter: "Аҳд сандиғи",
    nextSlug: "ahd-sandigi-dushmanlarda",

    subChapters: [
      {
        id: 1021,
        numeration: 10,
        slug: "ahd-sandigi-dushmanlarda",
        title: "The Ark in Enemy Hands",
        middleBtmNav: "The Ark of the Covenant",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/samuil-alayhissalam/ahd-sandigi-dushmanlarda"
          ),
        prevChapter: "Сомуил (а.с.)",
        prevSlug: "samuil-alayhissalam",
        nextChapter: "Сандиқнинг қайтиши",
        nextSlug: "ahd-sandigining-qaytishi",
      },

      {
        id: 1022,
        numeration: 11,
        slug: "ahd-sandigining-qaytishi",
        title: "The Return of the Ark of the Covenant",
        middleBtmNav: "The Ark Returns",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/samuil-alayhissalam/ahd-sandigining-qaytishi"
          ),
        prevChapter: "Аҳд сандиғи",
        prevSlug: "ahd-sandigi-dushmanlarda",
        nextChapter: "Хонлик даври",
        nextSlug: "xanlik-davrining-bashlanishi",
      },
    ],
  },

  {
    id: 103,
    numeration: 12,
    slug: "xanlik-davrining-bashlanishi",
    title: "The First King of Israel",
    middleBtmNav: "The Kingdom Era",
    image: TalutImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/xanlik-davrining-bashlanishi"
      ),
    prevChapter: "Сандиқнинг қайтиши",
    prevSlug: "ahd-sandigining-qaytishi",
    nextChapter: "У ҳам набими?",
    nextSlug: "talut-ham-paygambarmi",

    subChapters: [
      {
        id: 1031,
        numeration: 13,
        slug: "talut-ham-paygambarmi",
        title: "Is Talut Also a Prophet?",
        middleBtmNav: "Talut",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/xanlik-davrining-bashlanishi/talut-ham-paygambarmi"
          ),
        prevChapter: "Хонлик даври",
        prevSlug: "xanlik-davrining-bashlanishi",
        nextChapter: "Хонлик шартлари",
        nextSlug: "padshahlik-shartlari",
      },

      {
        id: 1032,
        numeration: 14,
        slug: "padshahlik-shartlari",
        title: "The Conditions of Kingship",
        middleBtmNav: "The Conditions of Kingship",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/xanlik-davrining-bashlanishi/padshahlik-shartlari"
          ),
        prevChapter: "У ҳам набими?",
        prevSlug: "talut-ham-paygambarmi",
        nextChapter: "Янатон",
        nextSlug: "yanatanning-tavakkuli",
      },

      {
        id: 1033,
        numeration: 15,
        slug: "yanatanning-tavakkuli",
        title: "Jonathan's Trust",
        middleBtmNav: "Jonathan's Trust",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/xanlik-davrining-bashlanishi/yanatanning-tavakkuli"
          ),
        prevChapter: "Хонлик шартлари",
        prevSlug: "padshahlik-shartlari",
        nextChapter: "Толутнинг айби",
        nextSlug: "talutning-ozbashimchaligi",
      },

      {
        id: 1034,
        numeration: 16,
        slug: "talutning-ozbashimchaligi",
        title: "Talut's Self-Will",
        middleBtmNav: "Talut's Fault",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/xanlik-davrining-bashlanishi/talutning-ozbashimchaligi"
          ),
        prevChapter: "Янатон",
        prevSlug: "yanatanning-tavakkuli",
        nextChapter: "Довуд (а.с.)",
        nextSlug: "davud-alayhissalam",
      },
    ],
  },

  {
    id: 104,
    numeration: 17,
    slug: "davud-alayhissalam",
    title: "Story of Dawud (AS)",
    middleBtmNav: "Story of Dawud (AS)",
    image: DavidImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam"
      ),
    prevChapter: "Толутнинг айби",
    prevSlug: "talutning-ozbashimchaligi",
    nextChapter: "Жолутнинг ўлими",
    nextSlug: "jalutning-olimi",

    subChapters: [
      {
        id: 1041,
        numeration: 18,
        slug: "jalutning-olimi",
        title: "The Death of Jalut",
        middleBtmNav: "The Death of Jalut",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam/jalutning-olimi"
          ),
        prevChapter: "Довуд (а.с.)",
        prevSlug: "davud-alayhissalam",
        nextChapter: "Хоннинг ҳасади",
        nextSlug: "talutning-hasad-qilgani",
      },

      {
        id: 1042,
        numeration: 19,
        slug: "talutning-hasad-qilgani",
        title: "The King's Jealousy",
        middleBtmNav: "Talut Becomes Jealous",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam/talutning-hasad-qilgani"
          ),
        prevChapter: "Жолутнинг ўлими",
        prevSlug: "jalutning-olimi",
        nextChapter: "Қочқинликда",
        nextSlug: "davud-qachqinlikda",
      },

      {
        id: 1043,
        numeration: 20,
        slug: "davud-qachqinlikda",
        title: "Dawud (AS) in Exile",
        middleBtmNav: "The Period of Exile",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam/davud-qachqinlikda"
          ),
        prevChapter: "Толутнинг ҳасади",
        prevSlug: "talutning-hasad-qilgani",
        nextChapter: "Сомуилнинг вафоти",
        nextSlug: "samuilning-vafati",
      },

      {
        id: 1044,
        numeration: 21,
        slug: "samuilning-vafati",
        title: "The Death of Samuel (AS)",
        middleBtmNav: "The Death of Samuel",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam/samuilning-vafati"
          ),
        prevChapter: "Қочқинликда",
        prevSlug: "davud-qachqinlikda",
        nextChapter: "Толутнинг ўлими",
        nextSlug: "talutning-olimi",
      },

      {
        id: 1045,
        numeration: 22,
        slug: "talutning-olimi",
        title: "The Death of Talut",
        middleBtmNav: "The Death of Talut",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam/talutning-olimi"
          ),
        prevChapter: "Сомуил вафоти",
        prevSlug: "samuilning-vafati",
        nextChapter: "Довуд (а.с.) тахтда",
        nextSlug: "davudning-taxtga-otirishi",
      },

      {
        id: 1046,
        numeration: 23,
        slug: "davudning-taxtga-otirishi",
        title: "Dawud (AS) on the Throne",
        middleBtmNav: "Dawud (AS) on the Throne",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/davud-alayhissalam/davudning-taxtga-otirishi"
          ),
        prevChapter: "Толутнинг ўлими",
        prevSlug: "talutning-olimi",
        nextChapter: "Сулаймон (а.с.)",
        nextSlug: "sulayman-alayhissalam",
      },
    ],
  },

  {
    id: 105,
    numeration: 24,
    slug: "sulayman-alayhissalam",
    title: "Story of Sulayman (AS)",
    middleBtmNav: "Story of Sulayman (AS)",
    image: SulaymanImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/sulayman-alayhissalam"
      ),
    prevChapter: "Довуд (а.с.) тахтда",
    prevSlug: "davudning-taxtga-otirishi",
    nextChapter: "Ҳикмат сўраши",
    nextSlug: "sulayman-hikmat-soraydi",

    subChapters: [
      {
        id: 1051,
        numeration: 25,
        slug: "sulayman-hikmat-soraydi",
        title: "Asking Allah for Wisdom",
        middleBtmNav: "Asking for Wisdom",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/sulayman-alayhissalam/sulayman-hikmat-soraydi"
          ),
        prevChapter: "Сулаймон (а.с.)",
        prevSlug: "sulayman-alayhissalam",
        nextChapter: "Ал-Ақсо",
        nextSlug: "al-aqsaning-qurilishi",
      },

      {
        id: 1052,
        numeration: 26,
        slug: "al-aqsaning-qurilishi",
        title: "The Building of Al-Aqsa",
        middleBtmNav: "The Building of Al-Aqsa",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/sulayman-alayhissalam/al-aqsaning-qurilishi"
          ),
        prevChapter: "Ҳикмат тилагани",
        prevSlug: "sulayman-hikmat-soraydi",
        nextChapter: "Юнус (а.с.)",
        nextSlug: "yunus-alayhissalam",
      },
    ],
  },

  {
    id: 106,
    numeration: 27,
    slug: "yunus-alayhissalam",
    title: "Story of Yunus (AS)",
    middleBtmNav: "Story of Yunus (AS)",
    image: YunusImage,
    component: () =>
      import(
        "./qisas-eng-karin-chapters/zaminda/yunus-alayhissalam"
      ),
    prevChapter: "Ал-Ақсо",
    prevSlug: "al-aqsaning-qurilishi",
    nextChapter: "Балиқ ичида",
    nextSlug: "baliq-ichida",

    subChapters: [
      {
        id: 1061,
        numeration: 28,
        slug: "baliq-ichida",
        title: "Inside the Belly of the Fish",
        middleBtmNav: "Inside the Fish",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/yunus-alayhissalam/baliq-ichida"
          ),
        prevChapter: "Юнус (а.с.)",
        prevSlug: "yunus-alayhissalam",
        nextChapter: "Ғазабланиши",
        nextSlug: "yunus-paygambarning-gazablanishi",
      },

      {
        id: 1062,
        numeration: 29,
        slug: "yunus-paygambarning-gazablanishi",
        title: "Yunus (AS) Becomes Angry",
        middleBtmNav: "The Anger of Yunus (AS)",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/zaminda/yunus-alayhissalam/yunus-paygambarning-gazablanishi"
          ),
        prevChapter: "Балиқ ичида",
        prevSlug: "baliq-ichida",
        nextChapter: "Закариё (а.с.)",
        nextSlug: "zakariya-yahya-alayhissalam",
      },
    ],
  },
];

export const xushxabarData = [
  {
    id: 200,
    numeration: 1,
    slug: "zakariya-yahya-alayhissalam",
    title: "Story of Zakariya and Yahya (AS)",
    middleBtmNav: "Zakariya and Yahya (AS)",
    image: ZakariyaWaYahyaImage,
    component: () =>
      import("./qisas-eng-karin-chapters/mujda/zakariya-yahya-alayhissalam"),
    prevChapter: "Юнус (а.с.)",
    prevSlug: "zakariya-yahya-alayhissalam",
    nextChapter: "Марям (а.с.)",
    nextSlug: "maryam-alayhassalam",

    subChapters: [],
  },

  {
    id: 201,
    numeration: 2,
    slug: "maryam-alayhassalam",
    title: "Story of Maryam (AS)",
    middleBtmNav: "Story of Maryam (AS)",
    image: MaryamImage,
    component: () =>
      import("./qisas-eng-karin-chapters/mujda/maryam-alayhassalam"),
    prevChapter: "Яҳё (а.с.)",
    prevSlug: "zakariya-yahya-alayhissalam",
    nextChapter: "Исо (а.с.) туғилиши",
    nextSlug: "isa-alayhissalamning-tavalludi",

    subChapters: [
      {
        id: 2001,
        numeration: 3,
        slug: "isa-alayhissalamning-tavalludi",
        title: "The Birth of Isa (AS)",
        middleBtmNav: "The Birth of Isa (AS)",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/maryam-alayhassalam/isa-alayhissalamning-tavalludi"
          ),
        prevChapter: "Марям (а.с.)",
        prevSlug: "maryam-alayhassalam",
        nextChapter: "Мўъжизалари",
        nextSlug: "isa-alayhissalamning-mojizalari",
      },
    ],
  },

  {
    id: 301,
    numeration: 4,
    slug: "isa-alayhissalamning-mojizalari",
    title: "The Miracles of Isa (AS)",
    middleBtmNav: "Miracles of Isa (AS)",
    image: IsaImage,
    component: () =>
      import("./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-mojizalari"),
    prevChapter: "Аввалги боб",
    prevSlug: "isa-alayhissalamning-tavalludi",
    nextChapter: "Кейинги боб",
    nextSlug: "mojizalar-bobi-ikkinchi-qism",

    subChapters: [
      {
        id: 3001,
        numeration: 5,
        slug: "mojizalar-bobi-ikkinchi-qism",
        title: "Miracles, Part Two",
        middleBtmNav: "Miracles, Part 2",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-ikkinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "isa-alayhissalamning-mojizalari",
        nextChapter: "Кейинги боб",
        nextSlug: "mojizalar-bobi-uchinchi-qism",
      },

      {
        id: 3002,
        numeration: 6,
        slug: "mojizalar-bobi-uchinchi-qism",
        title: "Miracles, Part Three",
        middleBtmNav: "Miracles, Part 3",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-uchinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "mojizalar-bobi-ikkinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "mojizalar-bobi-tortinchi-qism",
      },

      {
        id: 3003,
        numeration: 7,
        slug: "mojizalar-bobi-tortinchi-qism",
        title: "Miracles, Part Four",
        middleBtmNav: "Miracles, Part 4",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-tortinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "mojizalar-bobi-uchinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "mojizalar-bobi-beshinchi-qism",
      },

      {
        id: 3004,
        numeration: 8,
        slug: "mojizalar-bobi-beshinchi-qism",
        title: "Miracles, Part Five",
        middleBtmNav: "Miracles, Part 5",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-beshinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "mojizalar-bobi-tortinchi-qism",
        nextChapter: "Исо (а.с.) таълимоти",
        nextSlug: "isa-alayhissalamning-talimati",
      },
    ],
  },

  {
    id: 401,
    numeration: 9,
    slug: "isa-alayhissalamning-talimati",
    title: "The Teachings of Isa (AS)",
    middleBtmNav: "Teachings of Isa (AS)",
    image: IsaImage,

    component: () =>
      import("./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati"),
    prevChapter: "Мўъжизалар",
    prevSlug: "mojizalar-bobi-beshinchi-qism",
    nextChapter: "Кейинги боб",
    nextSlug: "talimat-bobi-ikkinchi-qism",

    subChapters: [
      {
        id: 4001,
        numeration: 10,
        slug: "talimat-bobi-ikkinchi-qism",
        title: "Teachings, Part Two",
        middleBtmNav: "Teachings, Part 2",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-ikkinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "isa-alayhissalamning-talimati",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-uchinchi-qism",
      },

      {
        id: 4002,
        numeration: 11,
        slug: "talimat-bobi-uchinchi-qism",
        title: "Teachings, Part Three",
        middleBtmNav: "Teachings, Part 3",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-uchinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-ikkinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-tortinchi-qism",
      },

      {
        id: 4003,
        numeration: 12,
        slug: "talimat-bobi-tortinchi-qism",
        title: "Teachings, Part Four",
        middleBtmNav: "Teachings, Part 4",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-tortinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-uchinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-beshinchi-qism",
      },

      {
        id: 4004,
        numeration: 13,
        slug: "talimat-bobi-beshinchi-qism",
        title: "Teachings, Part Five",
        middleBtmNav: "Teachings, Part 5",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-beshinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-tortinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-oltinchi-qism",
      },

      {
        id: 4005,
        numeration: 14,
        slug: "talimat-bobi-oltinchi-qism",
        title: "Teachings, Part Six",
        middleBtmNav: "Teachings, Part 6",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-oltinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-beshinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-yettinchi-qism",
      },

      {
        id: 4006,
        numeration: 15,
        slug: "talimat-bobi-yettinchi-qism",
        title: "Teachings, Part Seven",
        middleBtmNav: "Teachings, Part 7",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-yettinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-oltinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-sakkizinchi-qism",
      },

      {
        id: 4007,
        numeration: 16,
        slug: "talimat-bobi-sakkizinchi-qism",
        title: "Teachings, Part Eight",
        middleBtmNav: "Teachings, Part 8",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-sakkizinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-yettinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-toqqizinchi-qism",
      },

      {
        id: 4008,
        numeration: 17,
        slug: "talimat-bobi-toqqizinchi-qism",
        title: "Teachings, Part Nine",
        middleBtmNav: "Teachings, Part 9",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-toqqizinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-sakkizinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-oninchi-qism",
      },

      {
        id: 4009,
        numeration: 18,
        slug: "talimat-bobi-oninchi-qism",
        title: "Teachings, Part Ten",
        middleBtmNav: "Teachings, Part 10",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-oninchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-toqqizinchi-qism",
        nextChapter: "Кейинги боб",
        nextSlug: "talimat-bobi-onbirinchi-qism",
      },

      {
        id: 4010,
        numeration: 19,
        slug: "talimat-bobi-onbirinchi-qism",
        title: "Teachings, Part Eleven",
        middleBtmNav: "Teachings, Part 11",
        component: () =>
          import(
            "./qisas-eng-karin-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-onbirinchi-qism"
          ),
        prevChapter: "Аввалги боб",
        prevSlug: "talimat-bobi-oninchi-qism",
        nextChapter: "Самога олиниши",
        nextSlug: "quddusdan-ketib-qolmanglar",
      },
    ],
  },
];
 
export const safarData = [
  {
    id: 500,
    numeration: 1,
    image: RuhulQudsNuzliImage,
    slug: "quddusdan-ketib-qolmanglar",
    title: "The Ascension of the Messenger of Allah",
    subtitle: "",
    middleBtmNav: "The Ascension",
    component: () =>
      import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar"),
    prevChapter: "Таълимот, 11-қисм",
    prevSlug: "talimat-bobi-onbirinchi-qism",
    nextChapter: "Руҳ ул-қудснинг нузули",
    nextSlug: "ruh-ul-qudsning-nuzuli",
    subChapters: [
      {
        id: 5001,
        numeration: 2,
        slug: "ruh-ul-qudsning-nuzuli",
        title: "The Descent of the Holy Spirit",
        middleBtmNav: "The Descent of the Holy Spirit",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar/ruh-ul-qudsning-nuzuli"),
        prevChapter: "Қуддусдан кетиб қолманглар",
        prevSlug: "quddusdan-ketib-qolmanglar",
        nextChapter: "Туғма шолнинг шифо топиши",
        nextSlug: "tugma-sholning-shifo-topishi",
      },
      {
        id: 5002,
        numeration: 3,
        slug: "tugma-sholning-shifo-topishi",
        title: "Healing of the Lame Man",
        middleBtmNav: "Healing of the Lame Man",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar/tugma-sholning-shifo-topishi"),
        prevChapter: "Руҳ ул-қудснинг нузули",
        prevSlug: "ruh-ul-qudsning-nuzuli",
        nextChapter: "Имонлилар ҳаёти",
        nextSlug: "imonlilar-hayoti",
      },
      {
        id: 5003,
        numeration: 4,
        slug: "imonlilar-hayoti",
        title: "The Life of the Believers in Those Days",
        middleBtmNav: "Life of the Believers",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar/imonlilar-hayoti"),
        prevChapter: "Туғма шолнинг шифо топиши",
        prevSlug: "tugma-sholning-shifo-topishi",
        nextChapter: "Мансурнинг шаҳодати",
        nextSlug: "mansurning-shahodati",
      },
      {
        id: 5004,
        numeration: 5,
        slug: "mansurning-shahodati",
        title: "The Martyrdom of Mansur",
        middleBtmNav: "The Martyrdom of Mansur",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar/mansurning-shahodati"),
        prevChapter: "Имонлилар ҳаёти",
        prevSlug: "imonlilar-hayoti",
        nextChapter: "Ҳабашистон хазинадори",
        nextSlug: "habashiston-xazinadori-ahdga-kiradi",
      },
      {
        id: 5005,
        numeration: 6,
        slug: "habashiston-xazinadori-ahdga-kiradi",
        title: "Conversation with the Treasurer",
        middleBtmNav: "The Ethiopian Treasurer",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar/habashiston-xazinadori-ahdga-kiradi"),
        prevChapter: "Мансурнинг шаҳодати",
        prevSlug: "mansurning-shahodati",
        nextChapter: "Толут кўрган мўжиза",
        nextSlug: "rasulullohning-tolutga-nozil-bolishi",
      },
      {
        id: 5006,
        numeration: 7,
        slug: "rasulullohning-tolutga-nozil-bolishi",
        title: "The Messenger of Allah Appears to Talut",
        middleBtmNav: "The Miracle Seen by Talut",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddusdan-ketib-qolmanglar/rasulullohning-tolutga-nozil-bolishi"),
        prevChapter: "Хазинадор воқеаси",
        prevSlug: "habashiston-xazinadori-ahdga-kiradi",
        nextChapter: "Исломнинг кенгайиши",
        nextSlug: "begona-xalqlarning-ahdga-kirishi",
      },
    ],
  },

  {
    id: 501,
    numeration: 8,
    image: OtherNationsComingImage,
    slug: "begona-xalqlarning-ahdga-kirishi",
    title: "Other Nations Enter the Covenant",
    subtitle: "",
    middleBtmNav: "The Expansion of the Path",
    component: () =>
      import("./qisas-eng-karin-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi"),
    prevChapter: "Толут кўрган мўжиза",
    prevSlug: "rasulullohning-tolutga-nozil-bolishi",
    nextChapter: "Қувғинлар кучайиши",
    nextSlug: "quvginlar-kuchayishi",
    subChapters: [
      {
        id: 5011,
        numeration: 9,
        slug: "quvginlar-kuchayishi",
        title: "Persecution Began to Increase",
        middleBtmNav: "Persecution Increases",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi/quvginlar-kuchayishi"),
        prevChapter: "Исломнинг кенгайиши",
        prevSlug: "begona-xalqlarning-ahdga-kirishi",
        nextChapter: "Толут хизматга тайинланди",
        nextSlug: "tolutning-xizmatga-tayinlanishi",
      },
      {
        id: 5012,
        numeration: 10,
        slug: "tolutning-xizmatga-tayinlanishi",
        title: "Talut Is Appointed to Service",
        middleBtmNav: "Appointed to Service",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi/tolutning-xizmatga-tayinlanishi"),
        prevChapter: "Қувғинлар кучайди",
        prevSlug: "quvginlar-kuchayishi",
        nextChapter: "Ғайрияҳудийларга борамиз",
        nextSlug: "biz-endi-gayriyahudiylarga-boramiz",
      },
      {
        id: 5013,
        numeration: 11,
        slug: "biz-endi-gayriyahudiylarga-boramiz",
        title: "We Will Go to Other Nations",
        middleBtmNav: "We Will Go to the Gentiles",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi/biz-endi-gayriyahudiylarga-boramiz"),
        prevChapter: "Хизматга тайинланиши",
        prevSlug: "tolutning-xizmatga-tayinlanishi",
        nextChapter: "Қуддус шўроси",
        nextSlug: "quddus-kengashi",
      },
    ],
  },

  {
    id: 502,
    numeration: 12,
    image: QuddusShorasi,
    slug: "quddus-kengashi",
    title: "The Apostles Hold a Council in Jerusalem",
    subtitle: "",
    middleBtmNav: "The Jerusalem Council",
    component: () => import("./qisas-eng-karin-chapters/tariqatda/quddus-kengashi"),
    prevChapter: "Ғайрияҳудийларга борамиз",
    prevSlug: "biz-endi-gayriyahudiylarga-boramiz",
    nextChapter: "Зиндондаги мўъжиза",
    nextSlug: "zindondagi-mojiza",
    subChapters: [
      {
        id: 5021,
        numeration: 13,
        slug: "zindondagi-mojiza",
        title: "The Prison Miracle",
        middleBtmNav: "The Prison Miracle",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddus-kengashi/zindondagi-mojiza"),
        prevChapter: "Қуддус шўроси",
        prevSlug: "quddus-kengashi",
        nextChapter: "Салоника ва Афинада",
        nextSlug: "salonika-va-afinada",
      },
      {
        id: 5022,
        numeration: 14,
        slug: "salonika-va-afinada",
        title: "In Thessalonica and Athens",
        middleBtmNav: "In Thessalonica and Athens",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddus-kengashi/salonika-va-afinada"),
        prevChapter: "Зиндон мўъжизаси",
        prevSlug: "zindondagi-mojiza",
        nextChapter: "Қўринтус ва Эфесда",
        nextSlug: "qorintus-va-efesda",
      },
      {
        id: 5023,
        numeration: 15,
        slug: "qorintus-va-efesda",
        title: "In Corinth and Ephesus",
        middleBtmNav: "In Corinth and Ephesus",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddus-kengashi/qorintus-va-efesda"),
        prevChapter: "Салоника&Афинада",
        prevSlug: "salonika-va-afinada",
        nextChapter: "Эфесдаги жанжал",
        nextSlug: "efesdagi-janjal",
      },
      {
        id: 5024,
        numeration: 16,
        slug: "efesdagi-janjal",
        title: "The Riot in Ephesus",
        middleBtmNav: "The Riot in Ephesus",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddus-kengashi/efesdagi-janjal"),
        prevChapter: "Қўринтус&Эфесда",
        prevSlug: "qorintus-va-efesda",
        nextChapter: "Видолашув",
        nextSlug: "birodarlar-bilan-xayrlashgani",
      },
      {
        id: 5025,
        numeration: 17,
        slug: "birodarlar-bilan-xayrlashgani",
        title: "Farewell to the Brothers",
        middleBtmNav: "Farewell to the Brothers",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/quddus-kengashi/birodarlar-bilan-xayrlashgani"),
        prevChapter: "Эфес жанжали",
        prevSlug: "efesdagi-janjal",
        nextChapter: "Ҳибсга олиниши",
        nextSlug: "tolut-hibsga-olinadi",
      },
    ],
  },

  {
    id: 503,
    numeration: 18,
    image: TalutArrestedImage,
    slug: "tolut-hibsga-olinadi",
    title: "The Arrest of Apostle Talut",
    subtitle: "",
    middleBtmNav: "Talut Is Arrested",
    component: () =>
      import("./qisas-eng-karin-chapters/tariqatda/tolut-hibsga-olinadi"),
    prevChapter: "Видолашув",
    prevSlug: "birodarlar-bilan-xayrlashgani",
    nextChapter: "Яҳудийлар суиқасди",
    nextSlug: "yahudiylar-suiqasd-uyushtiradi",
    subChapters: [
      {
        id: 5031,
        numeration: 19,
        slug: "yahudiylar-suiqasd-uyushtiradi",
        title: "The Jewish Plot",
        middleBtmNav: "The Jewish Plot",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/tolut-hibsga-olinadi/yahudiylar-suiqasd-uyushtiradi"),
        prevChapter: "Толут ҳибсда",
        prevSlug: "tolut-hibsga-olinadi",
        nextChapter: "Фестус ҳузурида",
        nextSlug: "hokim-festus-huzurida",
      },
      {
        id: 5032,
        numeration: 20,
        slug: "hokim-festus-huzurida",
        title: "Before Governor Festus",
        middleBtmNav: "Before Festus",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/tolut-hibsga-olinadi/hokim-festus-huzurida"),
        prevChapter: "Яҳудийлар суиқасди",
        prevSlug: "yahudiylar-suiqasd-uyushtiradi",
        nextChapter: "Агриппа билан суҳбат",
        nextSlug: "podshoh-agrippa-bilan-suhbat",
      },
      {
        id: 5033,
        numeration: 21,
        slug: "podshoh-agrippa-bilan-suhbat",
        title: "Conversation with Agrippa",
        middleBtmNav: "Conversation with Agrippa",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/tolut-hibsga-olinadi/podshoh-agrippa-bilan-suhbat"),
        prevChapter: "Фестус ҳузурида",
        prevSlug: "hokim-festus-huzurida",
        nextChapter: "Денгиз тўфони",
        nextSlug: "dengizdagi-tofan",
      },
      {
        id: 5034,
        numeration: 22,
        slug: "dengizdagi-tofan",
        title: "The Storm at Sea",
        middleBtmNav: "The Storm at Sea",
        component: () =>
          import("./qisas-eng-karin-chapters/tariqatda/tolut-hibsga-olinadi/dengizdagi-tofan"),
        prevChapter: "Агриппа ҳузурида",
        prevSlug: "podshoh-agrippa-bilan-suhbat",
        nextChapter: "Боб тугади",
        nextSlug: "dengizdagi-tofan",
      },
    ],
  },
];