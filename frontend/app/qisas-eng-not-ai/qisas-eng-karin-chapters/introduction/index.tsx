'use client';

import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';
import ConverterForQisas from './ConverterForQisas';
import '@/app/styles/stories.css';

export default function Introduction() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return (
    <main className="stories relative">
      <div className="main_text">
        <p>Bismillah al-raḥmān al-raḥīm</p>
      </div>

      <div className="main_text">
        <p>
          <span className="boldItalic">
            "God, holder of all control, You give control to whomever You will and remove it from whomever You will; You elevate whoever You will and humble whomever You will. All that is good lies in Your hand: You have power over everything. You merge night into day and day into night; You bring the living out of the dead and the dead out of the living; You provide limitlessly for whomever You will."
          </span>{' '}
          ( Āl ʾImrān 3:26-27).
        </p>
      </div>

      <div className="paragraph_heading">
        <p onClick={() => toggleBubble('bubble1')} className="cursor-pointer">    
            "There is a lesson in the stories of such people for those who understand."
          <br />
          <span style={{ textTransform: "none" }} className='vitalic'>( Yūsuf 12:111).</span>
        </p>


      </div>

      <div className="main_text">
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

        <p>Alḥamdulillah. Alḥamdulillah rabbī al-amīn. Wa-l-salatu wa-l-salamu ʿalā sayyidīna Muḥammad wa ʿalā ālihi wa-l-shabihi ajmayn. Ammā baʿd...</p>
      </div>

      <div className="main_text">
        <p>This book follows the tradition that is called "<span className="vitalic">Qiṣaṣ al-Anbiyāʾ</span>" in Arabic, which are books that tell the history of the prophets (a.s). There are several books that were written in this group of literature. The first of them is the collection written by Muḥammad Ibn Isḥāq. He dedicated his work to three topics: the creation of the world and the history of the prophets before Muḥammad (s.a.w.) (<span className="vitalic"> Kitāb al-mubtadaʾ</span>); the life of our prophet (s.a.w.) and the revelations he had recieved (Sira); and his military advances ("<span className="vitalic"> maghāzī</span>"). Unfortunately, the book of Ibn Isḥāq was lost. However, some scholars mentioned the words/writing of Ibn Isḥāq many times. For example, al-Ṭabarī wrote about Ibn Isḥāq's book in his tafsīr and in his book about the history of the world (see: <span className="vitalic"> Tārīkh al-rusul wa-l-mulūk</span>). In particular, the ideas and the form of al-Ṭabarī's history book were strongly influenced by Ibn Isḥāq.</p>
      </div>

      <div className="main_text">
        <p>Another writer who wrote about <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> was a Yemeni, Wahb Ibn Munabbih, who was originally from Persia. He compiled/put together a collection of books telling the history of the lives of prophets. He knew Hebrew and Aramaic as well as Arabic and could read the books of <span className="vitalic"> Tawrāt </span> and <span className="vitalic"> Zabūr </span> in the original languages. That is why he described the history of the ancient prophets with strong a dalilsa* and a hujjaa*.</p>
      </div>

      <div className="main_text">
        <p onClick={() => toggleBubble('bubble2')} className="cursor-pointer">
          Another collection of <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> belongs to Isḥāq Ibn Bishr from Khorasan. He wrote a book about the history of prophets called "<span className="vitalic">Mubtadaʾ al-dunya wa qiṣaṣ al-anbiyāʾ</span>" (which means, "The beginning of the world and the history of the prophets"). Until recently this book was considered lost, but fortunately just a few years ago the first part of the book was found. This manuscript narrates/tells about the world's creation, the story of Ibrāhīm (a.s.) and stories of the prophets that lived before him.
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
        <p onClick={() => toggleBubble('bubble3')} className="cursor-pointer">
          The next collection of <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> belongs to Abū Isḥāq al-Thaʿlabī. Al-Thaʿlabī was an analytic scholar who lived 400 years after Muḥammad (s.a.s.). The tafsīrs that he wrote about heavenly scriptures were of high scientific importance, they didn't become very popular. The next writer is Al-Haysam b. Muḥammad al-Bushanji. His collection of "<span className="vitalic"> Qiṣaṣ al-Qurʾān</span>" in Arabic is worthy of special attention. That book describes the history of the prophets mentioned in the Qurʾān, legends about the prophets, and also the life of nabī Muḥammad (s.a.w.). Aḥmād b. Abū Uzayba from Baytul-Muqaddas also collected <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span>, but only one of his manuscripts has survived until today.
        </p>

        {openBubbles['bubble3'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
            <p>
              <sup>3</sup> Abu Ishaq was a scholar and commentator who lived about
              four hundred years after our Prophet Muhammad ﷺ.
            </p>
          </div>
        )}
      </div>

      <div className="main_text">
        <p onClick={() => toggleBubble('bubble4')} className="cursor-pointer">
          Among non-Arab authors, perhaps the most important book was written by Nasiruddin Rabguzi in the Turkish language. He wrote many stories about the prophets that include detailed legends and narrations. Later, Ibn Taymiya and his student Ibn Kathīr investigated the books of <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> that existed at that time. They rejected some narrations, especially the ones that were influenced by Jews and Christians. (We have to admit, though, that for the last 100 years, the collection of Ibn Kathīr has had a great impact on many people.)
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
      </div>

      <div className="main_text">
        <p>Yes, the books of <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> -- which have been passed down from generation to generation -- are still very popular. "The stories of the prophets" are being published again and again in Arab, Farsi and Turkish speaking nations. For example, the <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> of al-Sharawī from Miṣr is also very popular. That book consists of more than 3,000 pages in 5 volumes. It describes the history of the prophets in a modern way and it includes a lot of information.</p>
      </div>

      <div className="main_text">
        <p>Until now, the history of the prophets was published many times in the Arabic, Farsi and Turkish languages. But, unfortunately, in our language this kind of literature has not been available. That's why we decided to present some information about the lives of the prophets. This series has been collected by Muhammad Abdur-Rahman al-Haj. He has looked for Ḥikma in ancient traditions and writings, with careful attention to the Qurʾān al-Karīm and the Sunna of the Prophet. He studied the biographies of prophets from ancient reliable sources and did analyses of verses of Qurʾān al-Karīm. He also considered the commentaries of great Islamic scholars like al-Ṭabarī, Ibn Isḥāq, Ibn Khaldūn and al-Yaʿqūbī. We have translated his work to the best of our ability into our language. Inshallah this collection of <span className="vitalic"> Qiṣaṣ al-Anbiyāʾ</span> will give inspiration to your heart, give you examples of goodness and uprightness, and will lead you to a life of a taqwāa*. </p>

        <p className='my-0'>With respect, The Translators Team.</p>
        <p className='my-0'>© 2016 Abdul-Ghafur ibn Abdul-Sattar</p>
      </div>
          
      <ConverterForQisas />
    </main>
  );
}