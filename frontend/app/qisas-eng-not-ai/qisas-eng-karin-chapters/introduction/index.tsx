'use client';

import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';
import ConverterForQisas from './ConverterForQisas';
import '@/app/styles/stories.css';
// import './converterForQisas.css';

export default function Introduction() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return (
        <main className="stories relative">
          <p className="!text-[rgba(133,127,0,0.9)] font-['Aga_islamic'] !text-[32px] text-center mt-10 !mb-20">
            ﷽
          </p>

          <article className="hidden mb-10 sm:flex gap-6">
            <div className="w-1/2">
              <p className='!text-[10px] font-normal !leading-[20px]'>
                “O Allah, Lord of all sovereignty! You grant sovereignty to whom You will,
                and You take sovereignty away from whom You will. You honor whom You will,
                and You humble whom You will. All goodness is in Your Hand. Indeed, You
                have power over all things. You cause the night to pass into the day, and
                You cause the day to pass into the night. You bring forth the living from
                the dead, and You bring forth the dead from the living, and You provide
                for whom You will without measure.” <span className="vitalic">(Āl ʿImrān 3:26–27).</span>
              </p>
            </div>

            <div className="w-1/2 rtl">
               <p 
                  dir="rtl" 
                  lang="ar" 
                  className="font-amiri !text-[18px] !leading-[26px]  text-justify"
                >
                ٱللَّهُمَّ مَـٰلِكَ ٱلْمُلْكِ تُؤْتِى ٱلْمُلْكَ مَن تَشَآءُ وَتَنزِعُ
                ٱلْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ ۖ
                بِيَدِكَ ٱلْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ تُولِجُ
                ٱلَّيْلَ فِى ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِى ٱلَّيْلِ ۖ وَتُخْرِجُ
                ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَتُخْرِجُ ٱلْمَيِّتَ مِنَ ٱلْحَىِّ ۖ
                وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍۢ
              </p>
            </div>
          </article>

    

          <div className="uzbek_quron relative">
            <article
              className="w-full boldItalic cursor-pointer border border-gray-400  px-4 rounded-md"
              onClick={() => toggleBubble('bubble1')}
            >
              <p className='boldItalic my-2'>
                “Indeed, in the stories of the <span className="vitalic">(prophets)</span>
              there is a lesson for people of understanding.”
              <span className="vitalic"> (Surah Yusuf, verse 111)</span>
              <sup>1</sup>
              </p>
            </article>

            {openBubbles['bubble1'] && (
              <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
                <p>
                  <sup>1</sup> Abu Dharr al-Ghifari said: “I asked, ‘O Messenger of Allah,
                  what was contained in the Scrolls of Musa?’ The Prophet, peace be upon
                  him, replied: ‘All of it was admonition and wisdom.’”
                </p>
                <p className="who_wrote">(Ibn Saʿd, “Tabaqat”, Vol. 1, p. 155.)</p>
              </div>
            )}
          </div>

          <div className="main_text">
            <p>
              All praise belongs to Allah, Lord of all worlds. May peace and blessings be
              upon our master Muhammad, and upon his family and all his companions.
              Assalamu alaykum wa rahmatullahi wa barakatuh. To proceed...
            </p>

            <p>
              This book is known in Arabic as “Qisas al-Anbiya” and tells the history of
              the prophets, peace be upon them. A number of books have been written in
              this genre. The first of them was the collection of Muhammad ibn Ishaq, who
              devoted his work mainly to three subjects: the creation of the world and the
              history of the prophets before Muhammad ﷺ (Kitab al-mubtada’), the life of
              our Prophet ﷺ and the revelations he received (Sirah), and his military
              expeditions (Maghozi).
            </p>

            <p>
              Sadly, the work of Ibn Ishaq has not reached us in full. However, some
              scholars, such as al-Tabari, repeatedly mentioned Ibn Ishaq’s reports in his
              tafsir and in his book on world history (see: Tarikh al-rusul wa-l-muluk).
              In particular, Ibn Ishaq’s influence is very strong in both the idea and the
              structure of that later work.
            </p>

            <p>
              Another writer who contributed to the Qisas al-Anbiya genre was Wahb ibn
              Munabbih, a Yemeni scholar of Persian origin. He possessed a collection of
              one hundred sections narrating the history of the prophets. In addition to
              Arabic, he also knew Hebrew and Aramaic well. He could read the Torah and
              the Psalms in their original texts, and for this reason he narrated the
              history of the ancient prophets with strong evidence and documentation.
            </p>
          </div>

          <div className="main_text">
           
            <p
              onClick={() => toggleBubble('bubble2')}
              className="cursor-pointer "
            >
              Another collection of Qisas al-Anbiya belongs to Ishaq ibn Bishr of
              Khurasan. He also wrote works on other subjects, but for the history of the
              prophets he authored a book called “Mubtada’ al-dunya wa qisas al-Anbiya”,
              meaning “The Beginning of the World and the Stories of the Prophets”. Until
              recently this book was considered lost, but by Allah’s grace, a few years
              ago the first part of the book was discovered, and the world’s libraries
              were enriched with yet another manuscript.<sup>2</sup>
            </p>
             {openBubbles['bubble2'] && (
              <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
                <p>
                  <sup>2</sup> This manuscript describes the creation of the world, the
                  story of Ibrahim, peace be upon him, and the history of the prophets who
                  lived before him.
                </p>
              </div>
            )}
          </div>

          <div className="main_text">
            

            <p
              onClick={() => toggleBubble('bubble3')}
              className="cursor-pointer "
            >
              The next collection of prophetic history belongs to Abu Ishaq al-Thaʿlabi.
              <sup>3</sup> Although his commentaries on the revealed scriptures carry
              great scholarly value, they did not become very widely known among the
              common people.
            </p>

            {openBubbles['bubble3'] && (
              <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
                <p>
                  <sup>3</sup> Abu Ishaq was a scholar and commentator who lived about
                  four hundred years after our Prophet Muhammad ﷺ.
                </p>
              </div>
            )}

            <p>
              The next writer was al-Haytham ibn Muhammad al-Bushanjī. His Arabic
              collection “Qisas al-Qur’an” is also worthy of special attention. The book
              narrates the history of the prophets mentioned in the Qur’an, the reports
              transmitted about them, and the life of the Prophet Muhammad ﷺ.
            </p>

            <p>
              Ahmad ibn Abu Uzaybah of Jerusalem also compiled a “Qisas al-Anbiya”, but
              only one manuscript of his work has reached us.
            </p>

            <p>
              Among non-Arab authors, perhaps the most important place belongs to
              Nasiruddin Rabghuzi’s book written in the Turkic language. His stories about
              the prophets are extensive and consist of narrations and traditional tales
              containing many details.
            </p>
          </div>

          <div className="main_text">
           

            <p
              onClick={() => toggleBubble('bubble4')}
              className="cursor-pointer "
            >
              Later, Ibn Taymiyyah and his student Ibn Kathir examined the Qisas
              al-Anbiya books that existed in their time. They rejected some stories,
              especially those narratives found in Jewish and Christian texts.<sup>4</sup>
            </p>

            {openBubbles['bubble4'] && (
              <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
                <p>
                  <sup>4</sup> It should be mentioned that during the last hundred years,
                  Ibn Kathir’s collection has had a wide influence among the general
                  public.
                </p>
              </div>
            )}

            <p>
              Yes, this literary genre, passed down from generation to generation through
              the centuries — the books of “Qisas al-Anbiya” — remains popular among
              readers even today. Among Arab, Persian, and Turkic peoples, “The History
              of the Prophets” continues to be published again and again. For example,
              the Egyptian scholar al-Shaʿrawi’s “Qisas al-Anbiya” is also very well
              known. This book, consisting of five volumes and more than 3,000 pages,
              explains the history of the prophets in a modern style and, though at times
              brief in depth, contains a great amount of information.
            </p>

            <p>
              Until now, the history of the prophets has been published many times in
              Arabic, Persian, and Turkic languages. Sadly, however, this literary genre
              has been printed very little in Uzbek. For this reason, although our effort
              may not be much, we too have labored a little in this field and tried to
              convey at least some knowledge about the history of the prophets of the
              past.
            </p>

            <p>
              This book is the collection of Abu Hamid ibn Muhammad. He studied the
              history of the prophets from ancient and reliable sources, especially from
              the noble Torah and Psalms. He also examined the verses of the Noble Qur’an
              concerning this subject and considered the explanations of great scholars
              of Islam, including al-Tabari, Ibn Ishaq, Ibn Khaldun, and al-Yaʿqubi. We
              have translated this collection into Uzbek to the best of our ability. We
              hope that the stories of the prophets will inspire your heart and call you
              toward goodness, truthfulness, and a life of taqwa.
            </p>

            <p>With respect, the translation team.</p>
          </div>

          {/* <ConverterForQisas /> */}

          <footer>
            <div>
              <p>© 2016 Abdul-Ghafur ibn Abdul-Sattar</p>
            </div>
          </footer>
        </main>

  );
}