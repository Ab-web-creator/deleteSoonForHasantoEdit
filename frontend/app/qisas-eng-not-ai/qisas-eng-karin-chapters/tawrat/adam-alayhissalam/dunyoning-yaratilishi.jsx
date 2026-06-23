'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function CreationOfWorld() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
  ]);

  return (
<main className="stories relative">
  <div className="decor_line"></div>

  <div className="main_text">
    <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble1')}>
      Allāh Almighty (s.w.t.) created the whole world in six days. In the surah Qāf there is a verse which says:{' '}
      <span className="boldItalic">
        "We created the heavens, the earth, and everything between, in six days,"
      </span>{' '}
      ( Qāf 50:38 ). In the first two days Allāh separated the light from the darkness and the earth from heavens. During the other four days he gave beauty to the earth: he created mountains, the plant world and animal world for Banī Ādam
      <sup>1</sup>. At the end, he created the most beautiful creation among the created — our first granddad and grandmom. It is written in Qurʾān:{' '}
      <span className="boldItalic">"We create man in the finest state."</span>{' '}
      ( Al-Tīn 95:4). In another āya Qurʾān says:{' '}
      <span className="boldItalic">
        "We have honoured the children of Ādam... and favoured them specially above many of those We have created."
      </span>{' '}
      ( Al-Isrāʾ 17:70).<sup>2</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>1</sup> There is an aya in the Qurʾān:{' '}
          <span className="boldItalic">
            "He created all that is on the earth for you."
          </span>{' '}
          ( Al-Baqara 2:29)
        </p>

        <p>
          <sup>2</sup> The prophet (s.a.s.) also said: "Allāh created Ādam in His image" (narrated by al-Bukhārī (6227) and Muslim (6212) from Abu Hurayrah r.a.)
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>The World Without Sorrow</p>
  </div>

  <div className="main_text">
    <p>
      Everything Allāh had created was good.{' '}
      <span className="boldItalic">"He gave everything its perfect form."</span>{' '}
      <span className="vitalic">( Al-Sajda 32:7).</span>
    </p>

    <p className="cursor-pointer" onClick={() => toggleBubble('bubble2')}>
      When He commanded "Let there be!", all kinds of plants and trees which give fruit came out of the earth. When He commanded "Let there be!", fish and different kinds of sea animals appeared in the water. When He commanded "Let there be<sup>3</sup>!" all kinds of animals and different coloured birds came into existence.{' '}
      <span className="vitalic">Allāh's blessing was seen in every thing.</span>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>3</sup> In sūra <span className="vitalic">Baqara 2:117</span> there is a phrase "<span className="vitalic">kun-fa-yakun</span>". Translated it means "<span className="vitalic">If he says 'Be', it will be.</span>" So Allāh created the creation of the world by the word "Be".
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble3')}>
      There were no diseases, no death, no sadness. The garden was full of trees that gave all kinds of fruits, and Ādam (a.s.) and Ḥawwāʾ were living happily in the presence of Allāh. They did not know yet what evil was.
      <sup>4</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>4</sup> Why Did Allāh Create Humans? It is not easy to answer this question. For example, in the surah Al-Dhāriyāt, it says:{' '}
          <span className="boldItalic">
            "I created jinn and mankind only to do ibāda to Me"
          </span>{' '}
          ( 51:56). The meaning of ibāda is to worship and serve. This is also a proof that human beings are the greatest among created creatures. Allāh (s.w.t.) created Ādam and Ḥawwāʾ to be in munaja with Him.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>Hazrat Ādam is the Khalīfa of Allāh on the Earth</p>
  </div>

  <div className="main_text">
    <p>
      When Allāh (s.w.t.) created our first father and mother, He blessed them and commanded them saying this: "Be fruitful. Multiply and fill the earth. I have given this earth to you. Govern the fish, birds, and all animals living on the earth. Here, I have given you for food all kinds of grain and trees which have seeds in their fruits."
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      So, it turns out that Hazrat Ādam was given the title of Khalīfa — the right to rule over the entire Earth. As it is written in the Qur'an, Allāh informed angels about this before He created Ādam (a.s.):{' '}
      <span className="boldItalic">
        "I am putting a Khalīfa on the earth."
      </span>{' '}
      ( Al-Baqara 2:30).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>The Role of Iblīs</p>
  </div>

  <div className="main_text">
    <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble4')}>
      After that Allāh (s.w.t.) ordered the angels to prostrate themselves before Ādam (a.s.). It is written in Qurʾān al-Karīm:{' '}
      <span className="boldItalic">
        "We created you, We gave you shape, and then We said to the angels, ‘Bow down before Ādam,’ and they did. But not Iblīs: he was not one of those who bowed down."
      </span>{' '}
      After that Allāh asked Iblīs,{' '}
      <span className="boldItalic">"Why did not you bow down?"</span> and Iblīs answered:{' '}
      <span className="boldItalic">
        "I am better than he: You created me from fire, and him from clay."
      </span>
      <sup>5</sup>{' '}
      <span className="boldItalic">
        "(Allāh) said, ‘Get down from here! This is no place for your arrogance. Get out! You are contemptible!’ but Iblīs said, ‘Give me respite until the Day people are raised from the dead,’ and Allāh replied, ‘You have respite.’ And then Iblīs said, ‘Because You have put me in the wrong, I will lie in wait for them all on Your straight path: I will come at them– from their front and their back, from their right and their left– and You will find that most of them are ungrateful.’"
      </span>{' '}
      ( Al-Aʿrāf 7:11-17).
    </p>

    {openBubbles['bubble4'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
        <p>
          <sup>5</sup> ( Al-Aʿrāf 7:11-12).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble5')}>
      This is how Iblīs became an enemy of humankind.<sup>6</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble5')}>
        <p>
          <sup>6</sup> Iblīs was of the jinn ( Al-Kahf 18:50). Before he was kicked out, he was performing very much ibādāt to Allāh, near the angels, and no-one was able to do ibādāt as he. However, that ibādāt could not take away the pride he had in his heart.
        </p>
      </div>
    )}
  </div>
</main>
  );
}