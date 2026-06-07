import AdamImage from './components/svgs/AdamImage';
import NuhImage from './components/svgs/NuhImage';
import IbrahimImage from './components/svgs/IbrahimImage';
import IshaqImage from './components/svgs/IshaqImage';
import IsmailImage from './components/svgs/IsmailImage';
import YaqubImage from './components/svgs/YaqubImage';
import YusufImage from './components/svgs/YusufImage';
import MusaImage from './components/svgs/MusaImage';
import YushaImage from './components/svgs/YushaImage';
import ShariaRevealedImage from './components/svgs/ShariaRevealedImage';
import JudgesImage from './components/svgs/JudgesImage';
import SamuelImage from './components/svgs/SamuelImage';
import TalutImage from './components/svgs/TalutImage';
import DavidImage from './components/svgs/DavidImage';
import SulaymanImage from './components/svgs/SulaymanImage';
import YunusImage from './components/svgs/YunusImage';
import ZakariyaWaYahyaImage from './components/svgs/ZakariyaWaYahyaImage';
import MaryamImage from './components/svgs/MaryamImage';
import IsaImage from './components/svgs/IsaImage';


export const tawratData = [
  {
    id: 1,
    numeration: 1,
    title: "Одам алайҳис-салом қиссаси",
    middleBtmNav: "Одам (а.с.) қиссаси",
    subtitle: "— жаннатдаги ҳаёт",
    image: AdamImage,
    component: () => import("../qisas-uzb-chapters/tawrat/adam-alayhissalam"),
    slug: "adam-alayhissalam",
    prevChapter: "Muqaddima",
    prevSlug: "introduction",
    nextChapter: "Яратилиш",
    nextSlug: "dunyoning-yaratilishi",
    subChapters: [
      {
        id: 0,
        numeration: 0,
        title: "Таржимондан сўз боши",
        middleBtmNav: "Сўз боши",
        component: () => import("../qisas-uzb-chapters/introduction"),
        slug: "introduction",
        hidden: true,
        prevChapter: "Босманг",
        prevSlug: "introduction",
        nextChapter: "Одам (а.с.)",
        nextSlug: "adam-alayhissalam",
      },
      {
        id: 11,
        numeration: 2,
        title: "Дунёнинг яратилиши ҳақида",
        middleBtmNav: "Дунёнинг яратилиши ",
        component: () => import("../qisas-uzb-chapters/tawrat/adam-alayhissalam/dunyoning-yaratilishi"),
        slug: "dunyoning-yaratilishi",
        prevChapter: "Одам (а.с.)",
        prevSlug: "adam-alayhissalam",
        nextChapter: "Ҳайдалиш",
        nextSlug: "jannatdan-haydilish",
      },
      {
        id: 12,
        numeration: 3,
        title: "Жаннат боғидан ҳайдалиши",
        middleBtmNav: "Жаннатдан ҳайдалиш",
        component: () => import("../qisas-uzb-chapters/tawrat/adam-alayhissalam/jannatdan-haydilish"),
        slug: "jannatdan-haydilish",
        prevChapter: "Яратилиш",
        prevSlug: "dunyoning-yaratilishi",
        nextChapter: "Қобил&Ҳобил",
        nextSlug: "qobil-va-hobil",
      },
      {
        id: 13,
        numeration: 4,
        title: "Қобил билан Ҳобил ҳикояси",
        middleBtmNav: "Қобил билан Ҳобил",
        component: () => import("../qisas-uzb-chapters/tawrat/adam-alayhissalam/qobil-va-hobil"),
        slug: "qobil-va-hobil",
        prevChapter: "Ҳайдалиш",
        prevSlug: "jannatdan-haydilish",
        nextChapter: "Нуҳ (а.с.)",
        nextSlug: "nuh-alayhissalam",
      },
    ],
  },

  {
    id: 2,
    numeration: 5,
    title: "Нуҳ алайҳис-салом қиссаси",
    middleBtmNav: "Нуҳ (а.с.) қиссаси",
    subtitle: "— дунёни тўфон босгани",
    image: NuhImage,
    component: () => import("../qisas-uzb-chapters/tawrat/nuh-alayhissalam"),
    slug: "nuh-alayhissalam",
    prevChapter: "Қобил&Ҳобил",
    prevSlug: "qobil-va-hobil",
    nextChapter: "Нуҳ (а.с.) аҳди",
    nextSlug: "nuh-ahdi",
    subChapters: [
      {
        id: 21,
        numeration: 6,
        title: "Нуҳ (а.с.) билан қилинган аҳд",
        middleBtmNav: "Нуҳ (а.с.) нинг аҳди",
        component: () => import("../qisas-uzb-chapters/tawrat/nuh-alayhissalam/nuh-ahdi"),
        slug: "nuh-ahdi",
        prevChapter: "Нуҳ (а.с.)",
        prevSlug: "nuh-alayhissalam",
        nextChapter: "Иброҳим (а.с.)",
        nextSlug: "ibrahim-alayhissalam",
      },
    ],
  },

  {
    id: 3,
    numeration: 7,
    title: "Иброҳим халилуллоҳ қиссаси",
    middleBtmNav: "Иброҳим (а.с.) қиссаси",
    subtitle: "— Аҳд ҳақида тушунча",
    image: IbrahimImage,
    component: () => import("../qisas-uzb-chapters/tawrat/ibrahim-alayhissalam"),
    slug: "ibrahim-alayhissalam",
    prevChapter: "Нуҳ аҳди",
    prevSlug: "nuh-ahdi",
    nextChapter: "Барака ваъдаси",
    nextSlug: "baraka-haqida-vada",
    subChapters: [
      {
        id: 31,
        numeration: 8,
        title: "Аҳд ва барака ваъдаси",
        middleBtmNav: "Аҳд ва барака",
        component: () => import("../qisas-uzb-chapters/tawrat/ibrahim-alayhissalam/baraka-haqida-vada"),
        slug: "baraka-haqida-vada",
        prevChapter: "Иброҳим (а.с.)",
        prevSlug: "ibrahim-alayhissalam",
        nextChapter: "Аҳднинг тасдиғи",
        nextSlug: "ibrahim-ahdining-tasdiqlanishi",
      },
      {
        id: 32,
        numeration: 9,
        title: "Аҳднинг тасдиқланиши",
        middleBtmNav: "Аҳднинг тасдиғи",
        component: () => import("../qisas-uzb-chapters/tawrat/ibrahim-alayhissalam/ibrahim-ahdining-tasdiqlanishi"),
        slug: "ibrahim-ahdining-tasdiqlanishi",
        prevChapter: "Барака ваъдаси",
        prevSlug: "baraka-haqida-vada",
        nextChapter: "Ҳожар Биби",
        nextSlug: "hojar-bibi-va-ismail",
      },
      {
        id: 33,
        numeration: 10,
        title: "Ҳожар онамизнинг тарихи",
        middleBtmNav: "Ҳожар она тарихи",
        component: () => import("../qisas-uzb-chapters/tawrat/ibrahim-alayhissalam/hojar-bibi-va-ismail"),
        slug: "hojar-bibi-va-ismail",
        prevChapter: "Аҳд тасдиғи",
        prevSlug: "ibrahim-ahdining-tasdiqlanishi",
        nextChapter: "Аҳднинг аломати",
        nextSlug: "ibrahim-ahdining-alomati",
      },
      {
        id: 34,
        numeration: 11,
        title: "Аҳднинг аломати",
        middleBtmNav: "Аҳднинг аломати",
        component: () => import("../qisas-uzb-chapters/tawrat/ibrahim-alayhissalam/ibrahim-ahdining-alomati"),
        slug: "ibrahim-ahdining-alomati",
        prevChapter: "Ҳожар Биби",
        prevSlug: "hojar-bibi-va-ismail",
        nextChapter: "Садўм&Ғамўра",
        nextSlug: "sadum-gamura",
      },
      {
        id: 35,
        numeration: 12,
        title: "Садўм ва Ғамўра ҳикояси",
        middleBtmNav: "Садўм ва Ғамўра",
        component: () => import("../qisas-uzb-chapters/tawrat/ibrahim-alayhissalam/sadum-gamura"),
        slug: "sadum-gamura",
        prevChapter: "Аҳд аломати",
        prevSlug: "ibrahim-ahdining-alomati",
        nextChapter: "Исмоил (а.с.)",
        nextSlug: "ismail-alayhissalam",
      },
    ],
  },

  {
    id: 4,
    numeration: 13,
    title: "Исмоил алайҳис-салом қиссаси",
    middleBtmNav: "Исмоил (а.с.) қиссаси",
    subtitle: "— Оллоҳ берган қурбонлик",
    image: IsmailImage,
    component: () => import("../qisas-uzb-chapters/tawrat/ismail-alayhissalam"),
    slug: "ismail-alayhissalam",
    prevChapter: "Садўм&Ғамўра",
    prevSlug: "sadum-gamura",
    nextChapter: "Забиҳ",
    nextSlug: "ibrahim-ahdining-sinovi",
    subChapters: [
      {
        id: 41,
        numeration: 14,
        title: "Аҳднинг яна бир бор синалиши",
        middleBtmNav: "Аҳднинг синалиши",
        component: () => import("../qisas-uzb-chapters/tawrat/ismail-alayhissalam/ibrahim-ahdining-sinovi"),
        slug: "ibrahim-ahdining-sinovi",
        prevChapter: "Исмоил (а.с.)",
        prevSlug: "ismail-alayhissalam",
        nextChapter: "Исҳоқ (а.с.)",
        nextSlug: "ishaq-alayhissalam",
      },
    ],
  },

  {
    id: 5,
    numeration: 15,
    title: "Исҳоқ алайҳис-салом қиссаси",
    middleBtmNav: "Исҳоқ (а.с.) қиссаси",
    subtitle: "— барака занжирининг идомаси",
    image: IshaqImage,
    component: () => import("../qisas-uzb-chapters/tawrat/ishaq-alayhissalam"),
    slug: "ishaq-alayhissalam",
    prevChapter: "Забиҳуллоҳ",
    prevSlug: "ibrahim-ahdining-sinovi",
    nextChapter: "Эгизаклар боби",
    nextSlug: "egizaklar-tugilishi",
    subChapters: [
      {
        id: 51,
        numeration: 16,
        title: "Эгизаклар туғилиши",
        middleBtmNav: "Эгизаклар туғилиши",
        component: () => import("../qisas-uzb-chapters/tawrat/ishaq-alayhissalam/egizaklar-tugilishi"),
        slug: "egizaklar-tugilishi",
        prevChapter: "Исҳоқ (а.с.)",
        prevSlug: "ishaq-alayhissalam",
        nextChapter: "Ким барака олди",
        nextSlug: "yaqub-baraka-oldi",
      },
      {
        id: 52,
        numeration: 17,
        title: "Яъқуб (а.с.) нинг отасидан барака олгани",
        middleBtmNav: "Баракани олиш",
        component: () => import("../qisas-uzb-chapters/tawrat/ishaq-alayhissalam/yaqub-baraka-oldi"),
        slug: "yaqub-baraka-oldi",
        prevChapter: "Эгизаклар",
        prevSlug: "egizaklar-tugilishi",
        nextChapter: "Яъқуб (а.с.)",
        nextSlug: "yaqub-alayhissalam",
      },
    ],
  },

  {
    id: 6,
    numeration: 18,
    title: "Яъқуб алайҳис-салом қиссаси",
    middleBtmNav: "Яъқуб (а.с.) қиссаси",
    subtitle: "— машаққатли ҳаёт",
    image: YaqubImage,
    component: () => import("../qisas-uzb-chapters/tawrat/yaqub-alayhissalam"),
    slug: "yaqub-alayhissalam",
    prevChapter: "Ким барака олди",
    prevSlug: "yaqub-baraka-oldi",
    nextChapter: "Уйланиши",
    nextSlug: "yaqub-uylanish-tarixi",
    subChapters: [
      {
        id: 61,
        numeration: 19,
        title: "Яъқуб (а.с.) нинг уйланиши",
        middleBtmNav: "Уйланиш тарихи",
        component: () => import("../qisas-uzb-chapters/tawrat/yaqub-alayhissalam/yaqub-uylanish-tarixi"),
        slug: "yaqub-uylanish-tarixi",
        prevChapter: "Яъқуб (а.с.)",
        prevSlug: "yaqub-alayhissalam",
        nextChapter: "Канъонга қайтиш",
        nextSlug: "yaqub-kanaanga-qaytadi",
      },
      {
        id: 62,
        numeration: 20,
        title: "Канъонга қайтиш",
        middleBtmNav: "Канъонга қайтиш",
        component: () => import("../qisas-uzb-chapters/tawrat/yaqub-alayhissalam/yaqub-kanaanga-qaytadi"),
        slug: "yaqub-kanaanga-qaytadi",
        prevChapter: "Уйланиш тарихи",
        prevSlug: "yaqub-uylanish-tarixi",
        nextChapter: "Малак билан олишув",
        nextSlug: "farishta-bilan-olishuv",
      },
      {
        id: 63,
        numeration: 21,
        title: "Фаришта билан олишув",
        middleBtmNav: "Малак билан олишув",
        component: () => import("../qisas-uzb-chapters/tawrat/yaqub-alayhissalam/farishta-bilan-olishuv"),
        slug: "farishta-bilan-olishuv",
        prevChapter: "Канъонга қайтиш",
        prevSlug: "yaqub-kanaanga-qaytadi",
        nextChapter: "Юсуф (а.с.)",
        nextSlug: "yusuf-alayhissalam",
      },
    ],
  },

  {
    id: 7,
    numeration: 22,
    title: "Юсуф алайҳис-салом қиссаси",
    middleBtmNav: "Юсуф (а.с.) қиссаси",
    subtitle: "— визоратга юксалиш",
    image: YusufImage,
    component: () => import("../qisas-uzb-chapters/tawrat/yusuf-alayhissalam"),
    slug: "yusuf-alayhissalam",
    prevChapter: "Малак билан олишув",
    prevSlug: "farishta-bilan-olishuv",
    nextChapter: "Тушлар боби",
    nextSlug: "tushlar-bobi",
    subChapters: [
      {
        id: 71,
        numeration: 23,
        title: "Тушлар боби",
        middleBtmNav: "Тушлар боби",
        component: () => import("../qisas-uzb-chapters/tawrat/yusuf-alayhissalam/tushlar-bobi"),
        slug: "tushlar-bobi",
        prevChapter: "Юсуф (а.с.)",
        prevSlug: "yusuf-alayhissalam",
        nextChapter: "Акалари келиши",
        nextSlug: "akalar-bilan-uchrashuv",
      },
      {
        id: 72,
        numeration: 24,
        title: "Акалари билан учрашув",
        middleBtmNav: "Акалари билан учрашув",
        component: () => import("../qisas-uzb-chapters/tawrat/yusuf-alayhissalam/akalar-bilan-uchrashuv"),
        slug: "akalar-bilan-uchrashuv",
        prevChapter: "Тушлар боби",
        prevSlug: "tushlar-bobi",
        nextChapter: "Фиръавн таклифи",
        nextSlug: "firavnning-taklifi",
      },
      {
        id: 73,
        numeration: 25,
        title: "Фиръавннинг таклифи",
        middleBtmNav: "Фиръавннинг таклифи",
        component: () => import("../qisas-uzb-chapters/tawrat/yusuf-alayhissalam/firavnning-taklifi"),
        slug: "firavnning-taklifi",
        prevChapter: "Акалари келиши",
        prevSlug: "akalar-bilan-uchrashuv",
        nextChapter: "Яъқубнинг башорати",
        nextSlug: "yaqubning-bashorati",
      },
      {
        id: 74,
        numeration: 26,
        title: "Яъқуб (а.с.) нинг башорати",
        middleBtmNav: "Келажакка башорат",
        component: () => import("../qisas-uzb-chapters/tawrat/yusuf-alayhissalam/yaqubning-bashorati"),
        slug: "yaqubning-bashorati",
        prevChapter: "Фиръавн таклифи",
        prevSlug: "firavnning-taklifi",
        nextChapter: "Мусо (а.с.)",
        nextSlug: "musa-alayhissalam",
      },
    ],
  },

  {
    id: 8,
    numeration: 27,
    title: "Мусо пайғамбар қиссаси",
    middleBtmNav: "Мусо (а.с.) қиссаси",
    subtitle: "— Мисрдан чиқиш",
    image: MusaImage,
    component: () => import("../qisas-uzb-chapters/tawrat/musa-alayhissalam"),
    slug: "musa-alayhissalam",
    prevChapter: "Башорат",
    prevSlug: "yaqubning-bashorati",
    nextChapter: "Мен кимман",
    nextSlug: "men-kimman",
    subChapters: [
      {
        id: 81,
        numeration: 28,
        title: "Уни ўйлантирган савол",
        middleBtmNav: "«Мен кимман?»",
        component: () => import("../qisas-uzb-chapters/tawrat/musa-alayhissalam/men-kimman"),
        slug: "men-kimman",
        prevChapter: "Мусо (а.с.)",
        prevSlug: "musa-alayhissalam",
        nextChapter: "Уч мўъжиза",
        nextSlug: "musaga-berilgan-mojizalar",
      },
      {
        id: 82,
        numeration: 29,
        title: "Берилган уч мўъжиза",
        middleBtmNav: "Учта мўъжиза",
        component: () => import("../qisas-uzb-chapters/tawrat/musa-alayhissalam/musaga-berilgan-mojizalar"),
        slug: "musaga-berilgan-mojizalar",
        prevChapter: "Мен кимман?",
        prevSlug: "men-kimman",
        nextChapter: "Офатлар",
        nextSlug: "misrga-berilgan-ofatlar",
      },
      {
        id: 83,
        numeration: 30,
        title: "Мисрга тушган офатлар",
        middleBtmNav: "Мисрдаги офатлар",
        component: () => import("../qisas-uzb-chapters/tawrat/musa-alayhissalam/misrga-berilgan-ofatlar"),
        slug: "misrga-berilgan-ofatlar",
        prevChapter: "Уч мўъжиза",
        prevSlug: "musaga-berilgan-mojizalar",
        nextChapter: "Қурбонлик",
        nextSlug: "misrdan-chiqish",
      },
      {
        id: 84,
        numeration: 31,
        title: "Қурбонлик байрами",
        middleBtmNav: "Тўнғичлар ўлими",
        component: () => import("../qisas-uzb-chapters/tawrat/musa-alayhissalam/misrdan-chiqish"),
        slug: "misrdan-chiqish",
        prevChapter: "Офатлар",
        prevSlug: "misrga-berilgan-ofatlar",
        nextChapter: "Саҳрода",
        nextSlug: "sahrodagi-sarguzashtlar",
      },
      {
        id: 85,
        numeration: 32,
        title: "Саҳродаги саргузаштлар",
        middleBtmNav: "Саҳродаги саргузаштлар",
        component: () => import("../qisas-uzb-chapters/tawrat/musa-alayhissalam/sahrodagi-sarguzashtlar"),
        slug: "sahrodagi-sarguzashtlar",
        prevChapter: "Қурбонлик",
        prevSlug: "misrdan-chiqish",
        nextChapter: "Шариат Аҳди",
        nextSlug: "shariat-ahdi",
      },
    ],
  },

  {
    id: 9,
    numeration: 33,
    title: "Шариат Аҳдининг нозил бўлиши",
    middleBtmNav: "Шариат Аҳди",
    subtitle: "— қирқ йил саҳрода",
    image: ShariaRevealedImage,
    component: () => import("../qisas-uzb-chapters/tawrat/shariat-ahdi/"),
    slug: "shariat-ahdi",
    prevChapter: "Саҳрода",
    prevSlug: "sahrodagi-sarguzashtlar",
    nextChapter: "Шариат аҳкоми",
    nextSlug: "shariat-namunalari",
    subChapters: [
      {
        id: 91,
        numeration: 34,
        title: "Шариат намуналари",
        middleBtmNav: "Шариат ҳукмлари",
        component: () => import("../qisas-uzb-chapters/tawrat/shariat-ahdi/shariat-namunalari"),
        slug: "shariat-namunalari",
        prevChapter: "Шариат Аҳди",
        prevSlug: "shariat-ahdi",
        nextChapter: "Аҳдлашиш",
        nextSlug: "bani-isroil-shariatni-qabullaydi",
      },
      {
        id: 92,
        numeration: 35,
        title: "Шариат Аҳдига кириш",
        middleBtmNav: "Шариат аҳди",
        component: () => import("../qisas-uzb-chapters/tawrat/shariat-ahdi/bani-isroil-shariatni-qabullaydi"),
        slug: "bani-isroil-shariatni-qabullaydi",
        prevChapter: "Шариат аҳкоми",
        prevSlug: "shariat-namunalari",
        nextChapter: "Амрлар",
        nextSlug: "chodirda-berilgan-amrlar",
      },
      {
        id: 93,
        numeration: 36,
        title: "Чодирда берилган амрлар",
        middleBtmNav: "Чодирда инган аҳком",
        component: () => import("../qisas-uzb-chapters/tawrat/shariat-ahdi/chodirda-berilgan-amrlar"),
        slug: "chodirda-berilgan-amrlar",
        prevChapter: "Аҳдлашиш",
        prevSlug: "bani-isroil-shariatni-qabullaydi",
        nextChapter: "40 йил саҳрода",
        nextSlug: "qirq-yil-sahroda",
      },
      {
        id: 94,
        numeration: 37,
        title: "40 йил саҳрода",
        middleBtmNav: "40 йил саҳрода",
        component: () => import("../qisas-uzb-chapters/tawrat/shariat-ahdi/qirq-yil-sahroda"),
        slug: "qirq-yil-sahroda",
        prevChapter: "Амрлар",
        prevSlug: "chodirda-berilgan-amrlar",
        nextChapter: "Васият",
        nextSlug: "musaning-vasiyati",
      },
      {
        id: 95,
        numeration: 38,
        title: "Мусо (а.с.) нинг насиҳатлари",
        middleBtmNav: "Васиятлар",
        component: () => import("../qisas-uzb-chapters/tawrat/shariat-ahdi/musaning-vasiyati"),
        slug: "musaning-vasiyati",
        prevChapter: "40 йил саҳрода",
        prevSlug: "qirq-yil-sahroda",
        nextChapter: "Юъшо (а.с.)",
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
    title: "Юъшо алайҳис-салом қиссаси",
    middleBtmNav: "Юъшо (а.с.) қиссаси",
    image: YushaImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/yusha-alayhissalam"
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
        title: "Ваъда қилинган юртга кириш",
        middleBtmNav: "Ваъда қилинган юрт",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/yusha-alayhissalam/vada-qilingan-yurtga-kirish"
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
        title: "Кимга хизмат қиласиз, танланг",
        middleBtmNav: "Кимга хизмат қиласиз?",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/yusha-alayhissalam/kimga-xizmat-qilasiz"
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
    title: "Ҳакамлар даври. Бани Исроил тарихи",
    middleBtmNav: "Ҳакамлар даври",
    image: JudgesImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/hakamlar-davri"
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
        title: "Ёффай (р.а.) қиссаси",
        middleBtmNav: "Ёффай (р.а.) қиссаси",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/hakamlar-davri/yaffay-qissasi"
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
        title: "Ёффай (р.а.) нинг назри",
        middleBtmNav: "Ёффайнинг назри",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/hakamlar-davri/yaffayning-nazri"
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
        title: "Гивадаги разолат",
        middleBtmNav: "Гивадаги разолат",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/hakamlar-davri/givadagi-razalat"
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
        title: "Мисфада халқ кенгаши",
        middleBtmNav: "Мисфадаги кенгаш",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/hakamlar-davri/misfadagi-kengash"
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
    title: "Сомуил алайҳис-салом қиссаси",
    middleBtmNav: "Сомуил (а.с.) қиссаси",
    image: SamuelImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/samuil-alayhissalam"
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
        title: "Сандиқ душман қўлида",
        middleBtmNav: "Аҳд сандиғи",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/samuil-alayhissalam/ahd-sandigi-dushmanlarda"
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
        title: "Аҳд сандиғининг қайтиши",
        middleBtmNav: "Аҳд сандиғи қайтди",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/samuil-alayhissalam/ahd-sandigining-qaytishi"
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
    title: "Исроилнинг биринчи подшоҳи",
    middleBtmNav: "Хонлик даври",
    image: TalutImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/xanlik-davrining-bashlanishi"
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
        title: "Толут ҳам набими?",
        middleBtmNav: "Толут",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/xanlik-davrining-bashlanishi/talut-ham-paygambarmi"
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
        title: "Подшоҳлик шартлари",
        middleBtmNav: "Подшоҳлик шартлари",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/xanlik-davrining-bashlanishi/padshahlik-shartlari"
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
        title: "Янатоннинг таваккули",
        middleBtmNav: "Янатоннинг таваккули",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/xanlik-davrining-bashlanishi/yanatanning-tavakkuli"
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
        title: "Толутнинг ўзбошимчалиги",
        middleBtmNav: "Толутнинг айби",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/xanlik-davrining-bashlanishi/talutning-ozbashimchaligi"
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
    title: "Довуд алайҳис-салом қиссаси",
    middleBtmNav: "Довуд (а.с.) қиссаси",
    image: DavidImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/davud-alayhissalam"
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
        title: "Жолутнинг ўлими",
        middleBtmNav: "Жолутнинг ўлими",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/davud-alayhissalam/jalutning-olimi"
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
        title: "Подшоҳнинг ҳасади",
        middleBtmNav: "Толут ҳасад қилади",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/davud-alayhissalam/talutning-hasad-qilgani"
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
        title: "Довуд (а.с.) қочқинда",
        middleBtmNav: "Қочқинлик даври",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/davud-alayhissalam/davud-qachqinlikda"
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
        title: "Сомуил (а.с.) нинг вафоти",
        middleBtmNav: "Сомуилнинг вафоти",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/davud-alayhissalam/samuilning-vafati"
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
        title: "Толутнинг вафот этиши",
        middleBtmNav: "Толутнинг ўлими",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/davud-alayhissalam/talutning-olimi"
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
        title: "Довуд (а.с.) тахтда",
        middleBtmNav: "Довуд (а.с.) тахтда",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/davud-alayhissalam/davudning-taxtga-otirishi"
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
    title: "Сулаймон алайҳис-салом қиссаси",
    middleBtmNav: "Сулаймон (а.с.) қиссаси",
    image: SulaymanImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/sulayman-alayhissalam"
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
        title: "Оллоҳдан ҳикмат сўрагани",
        middleBtmNav: "Ҳикмат сўрагани",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/sulayman-alayhissalam/sulayman-hikmat-soraydi"
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
        title: "Ал-Ақсонинг қурилиши",
        middleBtmNav: "Ал-Ақсонинг қурилиши",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/sulayman-alayhissalam/al-aqsaning-qurilishi"
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
    title: "Юнус (а.с.) қиссаси",
    middleBtmNav: "Юнус (а.с.) қиссаси",
    image: YunusImage,
    component: () =>
      import(
        "../qisas-uzb-chapters/zaminda/yunus-alayhissalam"
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
        title: "Балиқ қорнида",
        middleBtmNav: "Балиқ ичида",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/yunus-alayhissalam/baliq-ichida"
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
        title: "Юнус (а.с.) ғазабланади",
        middleBtmNav: "Юнус (а.с.) ғазаби",
        component: () =>
          import(
            "../qisas-uzb-chapters/zaminda/yunus-alayhissalam/yunus-paygambarning-gazablanishi"
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
    title: "Закариё ва Яҳё (а.с.) қиссаси",
    middleBtmNav: "Закариё ва Яҳё (а.с.)",
    image: ZakariyaWaYahyaImage,
    component: () =>
      import("../qisas-uzb-chapters/mujda/zakariya-yahya-alayhissalam"),
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
    title: "Марям алайҳас-салом қиссаси",
    middleBtmNav: "Марям (а.с.) қиссаси",
    image: MaryamImage,
    component: () =>
      import("../qisas-uzb-chapters/mujda/maryam-alayhassalam"),
    prevChapter: "Яҳё (а.с.)",
    prevSlug: "zakariya-yahya-alayhissalam",
    nextChapter: "Исо (а.с.) туғилиши",
    nextSlug: "isa-alayhissalamning-tavalludi",

    subChapters: [
      {
        id: 2001,
        numeration: 3,
        slug: "isa-alayhissalamning-tavalludi",
        title: "Исо алайҳис-саломнинг туғилиши",
        middleBtmNav: "Исо (а.с.) нинг туғилиши",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/maryam-alayhassalam/isa-alayhissalamning-tavalludi"
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
    title: "Исо (а.с.) нинг мўъжизалари",
    middleBtmNav: "Исо (а.с.) мўъжизалари",
    image: IsaImage,
    component: () =>
      import("../qisas-uzb-chapters/mujda/isa-alayhissalamning-mojizalari"),
    prevChapter: "Аввалги боб",
    prevSlug: "isa-alayhissalamning-tavalludi",
    nextChapter: "Кейинги боб",
    nextSlug: "mojizalar-bobi-ikkinchi-qism",

    subChapters: [
      {
        id: 3001,
        numeration: 5,
        slug: "mojizalar-bobi-ikkinchi-qism",
        title: "Мўъжизалар, иккинчи қисм",
        middleBtmNav: "Мўъжизалар, 2-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-ikkinchi-qism"
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
        title: "Мўъжизалар, учинчи қисм",
        middleBtmNav: "Мўъжизалар, 3-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-uchinchi-qism"
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
        title: "Исо (а.с.) нинг мўъжизалари, тўртинчи қисм",
        middleBtmNav: "Мўъжизалар, 4-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-tortinchi-qism"
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
        title: "Мўъжизалар, бешинчи қисм",
        middleBtmNav: "Мўъжизалар, 5-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-mojizalari/mojizalar-bobi-beshinchi-qism"
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
    title: "Исо алайҳис-саломнинг таълимоти",
    middleBtmNav: "Исо (а.с.) таълимоти",
    image: IsaImage,
    
    component: () =>
      import("../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati"),
    prevChapter: "Мўъжизалар",
    prevSlug: "mojizalar-bobi-beshinchi-qism",
    nextChapter: "Кейинги боб",
    nextSlug: "talimat-bobi-ikkinchi-qism",

    subChapters: [
      {
        id: 4001,
        numeration: 10,
        slug: "talimat-bobi-ikkinchi-qism",
        title: "Таълимот, иккинчи қисм",
        middleBtmNav: "Таълимот, 2-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-ikkinchi-qism"
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
        title: "Таълимот, учинчи қисм",
        middleBtmNav: "Таълимот, 3-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-uchinchi-qism"
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
        title: "Таълимот, тўртинчи қисм",
        middleBtmNav: "Таълимот, 4-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-tortinchi-qism"
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
        title: "Таълимот, бешинчи қисм",
        middleBtmNav: "Таълимот, 5-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-beshinchi-qism"
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
        title: "Таълимот, олтинчи қисм",
        middleBtmNav: "Таълимот, 6-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-oltinchi-qism"
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
        title: "Таълимот, еттинчи қисм",
        middleBtmNav: "Таълимот, 7-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-yettinchi-qism"
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
        title: "Таълимот, саккизинчи қисм",
        middleBtmNav: "Таълимот, 8-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-sakkizinchi-qism"
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
        title: "Таълимот, тўққизинчи қисм",
        middleBtmNav: "Таълимот, 9-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-toqqizinchi-qism"
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
        title: "Таълимот, ўнинчи қисм",
        middleBtmNav: "Таълимот, 10-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-oninchi-qism"
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
        title: "Таълимот, ўн биринчи қисм",
        middleBtmNav: "Таълимот, 11-қисм",
        component: () =>
          import(
            "../qisas-uzb-chapters/mujda/isa-alayhissalamning-talimati/talimat-bobi-onbirinchi-qism"
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
    slug: "quddusdan-ketib-qolmanglar",
    title: "Расулуллоҳнинг самога олиниши",
    subtitle: "ва Руҳул-қудс ҳақида ваъда",
    middleBtmNav: "Самога олиниши",
    component: () =>
      import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar"),
    prevChapter: "Таълимот, 11-қисм",
    prevSlug: "talimat-bobi-onbirinchi-qism",
    nextChapter: "Руҳ ул-қудснинг нузули",
    nextSlug: "ruh-ul-qudsning-nuzuli",
    subChapters: [
      {
        id: 5001,
        numeration: 2,
        slug: "ruh-ul-qudsning-nuzuli",
        title: "Руҳ ул-қудснинг нузули",
        middleBtmNav: "Руҳ ул-қудснинг нузули",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar/ruh-ul-qudsning-nuzuli"),
        prevChapter: "Қуддусдан кетиб қолманглар",
        prevSlug: "quddusdan-ketib-qolmanglar",
        nextChapter: "Туғма шолнинг шифо топиши",
        nextSlug: "tugma-sholning-shifo-topishi",
      },
      {
        id: 5002,
        numeration: 3,
        slug: "tugma-sholning-shifo-topishi",
        title: "Туғма шолнинг шифо топиши",
        middleBtmNav: "Туғма шолнинг шифо топиши",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar/tugma-sholning-shifo-topishi"),
        prevChapter: "Руҳ ул-қудснинг нузули",
        prevSlug: "ruh-ul-qudsning-nuzuli",
        nextChapter: "Имонлилар ҳаёти",
        nextSlug: "imonlilar-hayoti",
      },
      {
        id: 5003,
        numeration: 4,
        slug: "imonlilar-hayoti",
        title: "У даврдаги имонлилар ҳаёти",
        middleBtmNav: "Имонлилар ҳаёти",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar/imonlilar-hayoti"),
        prevChapter: "Туғма шолнинг шифо топиши",
        prevSlug: "tugma-sholning-shifo-topishi",
        nextChapter: "Мансурнинг шаҳодати",
        nextSlug: "mansurning-shahodati",
      },
      {
        id: 5004,
        numeration: 5,
        slug: "mansurning-shahodati",
        title: "Мансурнинг шаҳодати",
        middleBtmNav: "Мансурнинг шаҳодати",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar/mansurning-shahodati"),
        prevChapter: "Имонлилар ҳаёти",
        prevSlug: "imonlilar-hayoti",
        nextChapter: "Ҳабашистон хазинадори",
        nextSlug: "habashiston-xazinadori-ahdga-kiradi",
      },
      {
        id: 5005,
        numeration: 6,
        slug: "habashiston-xazinadori-ahdga-kiradi",
        title: "Хазинадор билан суҳбат",
        middleBtmNav: "Ҳабашистон хазинадори",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar/habashiston-xazinadori-ahdga-kiradi"),
        prevChapter: "Мансурнинг шаҳодати",
        prevSlug: "mansurning-shahodati",
        nextChapter: "Толут кўрган мўжиза",
        nextSlug: "rasulullohning-tolutga-nozil-bolishi",
      },
      {
        id: 5006,
        numeration: 7,
        slug: "rasulullohning-tolutga-nozil-bolishi",
        title: "Расулуллоҳнинг Толутга нозил бўлиши",
        middleBtmNav: "Толут кўрган мўжиза",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddusdan-ketib-qolmanglar/rasulullohning-tolutga-nozil-bolishi"),
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
    slug: "begona-xalqlarning-ahdga-kirishi",
    title: "Бошқа миллатларнинг аҳдга кириши",
    middleBtmNav: "Тасаввуфнинг кенгайиши",
    component: () =>
      import("../qisas-uzb-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi"),
    prevChapter: "Толут кўрган мўжиза",
    prevSlug: "rasulullohning-tolutga-nozil-bolishi",
    nextChapter: "Қувғинлар кучайиши",
    nextSlug: "quvginlar-kuchayishi",
    subChapters: [
      {
        id: 5011,
        numeration: 9,
        slug: "quvginlar-kuchayishi",
        title: "Қувғинлар кучая бошлади",
        middleBtmNav: "Қувғинлар кучайиши",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi/quvginlar-kuchayishi"),
        prevChapter: "Исломнинг кенгайиши",
        prevSlug: "begona-xalqlarning-ahdga-kirishi",
        nextChapter: "Толут хизматга тайинланди",
        nextSlug: "tolutning-xizmatga-tayinlanishi",
      },
      {
        id: 5012,
        numeration: 10,
        slug: "tolutning-xizmatga-tayinlanishi",
        title: "Толут хизматга тайинланди",
        middleBtmNav: "Хизматга тайинланиши",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi/tolutning-xizmatga-tayinlanishi"),
        prevChapter: "Қувғинлар кучайди",
        prevSlug: "quvginlar-kuchayishi",
        nextChapter: "Ғайрияҳудийларга борамиз",
        nextSlug: "biz-endi-gayriyahudiylarga-boramiz",
      },
      {
        id: 5013,
        numeration: 11,
        slug: "biz-endi-gayriyahudiylarga-boramiz",
        title: "Бошқа халқларга борамиз",
        middleBtmNav: "Ғайрияҳудийларга борамиз",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/begona-xalqlarning-ahdga-kirishi/biz-endi-gayriyahudiylarga-boramiz"),
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
    slug: "quddus-kengashi",
    title: "Қуддусда бўлган шўро",
    subtitle: " — Хушхабар йўлида тўсиқ қўймаслик",
    middleBtmNav: "Қуддус шўроси",
    component: () => import("../qisas-uzb-chapters/tariqatda/quddus-kengashi"),
    prevChapter: "Ғайрияҳудийларга борамиз",
    prevSlug: "biz-endi-gayriyahudiylarga-boramiz",
    nextChapter: "Зиндондаги мўъжиза",
    nextSlug: "zindondagi-mojiza",
    subChapters: [
      {
        id: 5021,
        numeration: 13,
        slug: "zindondagi-mojiza",
        title: "Зиндондаги мўъжиза",
        middleBtmNav: "Зиндондаги мўъжиза",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddus-kengashi/zindondagi-mojiza"),
        prevChapter: "Қуддус шўроси",
        prevSlug: "quddus-kengashi",
        nextChapter: "Салоника ва Афинада",
        nextSlug: "salonika-va-afinada",
      },
      {
        id: 5022,
        numeration: 14,
        slug: "salonika-va-afinada",
        title: "Салоника ва Афинада",
        middleBtmNav: "Салоника ва Афинада",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddus-kengashi/salonika-va-afinada"),
        prevChapter: "Зиндон мўъжизаси",
        prevSlug: "zindondagi-mojiza",
        nextChapter: "Қўринтус ва Эфесда",
        nextSlug: "qorintus-va-efesda",
      },
      {
        id: 5023,
        numeration: 15,
        slug: "qorintus-va-efesda",
        title: "Қўринтус ва Эфесда",
        middleBtmNav: "Қўринтус ва Эфесда",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddus-kengashi/qorintus-va-efesda"),
        prevChapter: "Салоника&Афинада",
        prevSlug: "salonika-va-afinada",
        nextChapter: "Эфесдаги жанжал",
        nextSlug: "efesdagi-janjal",
      },
      {
        id: 5024,
        numeration: 16,
        slug: "efesdagi-janjal",
        title: "Эфесда бўлган жанжал",
        middleBtmNav: "Эфесдаги жанжал",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddus-kengashi/efesdagi-janjal"),
        prevChapter: "Қўринтус&Эфесда",
        prevSlug: "qorintus-va-efesda",
        nextChapter: "Видолашув",
        nextSlug: "birodarlar-bilan-xayrlashgani",
      },
      {
        id: 5025,
        numeration: 17,
        slug: "birodarlar-bilan-xayrlashgani",
        title: "Биродарлар билан видолашув",
        middleBtmNav: "Биродарлар билан видолашув",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/quddus-kengashi/birodarlar-bilan-xayrlashgani"),
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
    slug: "tolut-hibsga-olinadi",
    title: "Толутнинг ҳибсга олиниши",
    middleBtmNav: "Толут ҳибсга олинади",
    component: () =>
      import("../qisas-uzb-chapters/tariqatda/tolut-hibsga-olinadi"),
    prevChapter: "Видолашув",
    prevSlug: "birodarlar-bilan-xayrlashgani",
    nextChapter: "Яҳудийлар суиқасди",
    nextSlug: "yahudiylar-suiqasd-uyushtiradi",
    subChapters: [
      {
        id: 5031,
        numeration: 19,
        slug: "yahudiylar-suiqasd-uyushtiradi",
        title: "Яҳудийлар суиқасди",
        middleBtmNav: "Яҳудийлар суиқасди",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/tolut-hibsga-olinadi/yahudiylar-suiqasd-uyushtiradi"),
        prevChapter: "Толут ҳибсда",
        prevSlug: "tolut-hibsga-olinadi",
        nextChapter: "Фестус ҳузурида",
        nextSlug: "hokim-festus-huzurida",
      },
      {
        id: 5032,
        numeration: 20,
        slug: "hokim-festus-huzurida",
        title: "Ҳоким Фестус ҳузурида",
        middleBtmNav: "Фестус ҳузурида",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/tolut-hibsga-olinadi/hokim-festus-huzurida"),
        prevChapter: "Яҳудийлар суиқасди",
        prevSlug: "yahudiylar-suiqasd-uyushtiradi",
        nextChapter: "Агриппа билан суҳбат",
        nextSlug: "podshoh-agrippa-bilan-suhbat",
      },
      {
        id: 5033,
        numeration: 21,
        slug: "podshoh-agrippa-bilan-suhbat",
        title: "Агриппа билан суҳбат",
        middleBtmNav: "Агриппа билан суҳбат",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/tolut-hibsga-olinadi/podshoh-agrippa-bilan-suhbat"),
        prevChapter: "Фестус ҳузурида",
        prevSlug: "hokim-festus-huzurida",
        nextChapter: "Денгиз тўфони",
        nextSlug: "dengizdagi-tofan",
      },
      {
        id: 5034,
        numeration: 22,
        slug: "dengizdagi-tofan",
        title: "Денгиздаги тўфон",
        middleBtmNav: "Денгиздаги тўфон",
        component: () =>
          import("../qisas-uzb-chapters/tariqatda/tolut-hibsga-olinadi/dengizdagi-tofan"),
        prevChapter: "Агриппа ҳузурида",
        prevSlug: "podshoh-agrippa-bilan-suhbat",
        nextChapter: "Боб тугади",
        nextSlug: "dengizdagi-tofan",
      },
    ],
  },
];