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
    <p className="vitalic">
      Allah Almighty created the whole world in 6 days. In the sura Qaaf there
      is a verse which says:{' '}

      <span className="boldItalic">
        &quot;Of course, We have created the heavens and earth, and the things in
        them in 6 days&quot;
      </span>
      {' '}
      (50:38).
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      In the first two days Allah (t) separated the light from the darkness and
      the earth from heavens. During the remaining 4 days he gives beauty to the
      earth: he creates mountains, the plant world and animal world for Bani
      Adam.<sup>h</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>h</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      And at the end, he created the most beautiful creation among the created —
      our first grandfather and grandmother. It is written in the Qur&apos;an:{' '}

      <span className="boldItalic">
        «Definitely, we have created the man in the best image.»
      </span>
      {' '}
      (Sura at-Tiyn). In another aya Qur&apos;an says:{' '}

      <span className="boldItalic">
        &quot;We have created Bani Adam aziz and blessed... Better than many
        creatures of ours&quot;
      </span>
      {' '}
      (Isra 17:70).<sup>i</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>i</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>The World without Sorrow</p>
  </div>

  <div className="main_text">
    <p>
      Everything God had created was good.

      <span className="vitalic">
        {' '}
        &quot;He is the one who{' '}
        <span className="boldItalic">«created everything beautiful»</span>
        &quot; (Qur&apos;an 32:7).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      With His command &quot;Let there be!&quot;, all kinds of plants and trees
      which give paradise-kind fruits came out of the earth. With His command
      &quot;Let there be&quot;,<sup>j</sup> there appeared fishes in waters and
      different kinds of sea animals.
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>j</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}

    <p>
      With His command &quot;Let there be!&quot; all kinds of animals and
      differently coloured birds came into existence.

      <span className="vitalic">
        {' '}
        Allah&apos;s blessing was seen in everything.
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      There were no diseases, no death, no sadness. The garden was full of trees
      that gave all kinds of fruits, and Adam (a.s.) and Mother Eve were living
      happily in the presence of Allah. They did not know yet what evil was.
      <sup>k</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
        <p>
          <sup>k</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>Hazrat Adam is the Khalif of Allah on the earth</p>
  </div>

  <div className="main_text">
    <p>
      When Allah (s.w.t.) created our first father and mother, He blessed them
      and commanded them saying: &quot;Be fruitful. Multiply and fill the earth.
      I have given this earth to you. Govern the fish, birds, and all animals
      living on the earth. Here, I gave you for food all the green plants and
      trees which have seeds in their fruits.&quot;
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      So, it turns out that Hazrat Adam was given the title of Khalifa — given
      the right to rule over the entire Earth. As it is written in the Qur&apos;an,
      Allah informed angels about this before He created Adam (a.s.):{' '}

      <span className="boldItalic">
        &quot;I am going to make a Khalifa on the Earth.&quot;
      </span>
      {' '}
      (Sura al-Baqara, 30).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Information about Iblees</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      After that Allah ta&apos;ala orders the angels to prostrate before Adam
      (a.s.). It is written in Qur&apos;an kareem:{' '}

      <span className="boldItalic">
        &quot;Indeed We have created you (plural) and then gave you (plural) our
        image. Then We said to the angels: &quot;Prostrate before Adam&quot;.
        They prostrated. Except Iblees, he was not among the prostrated&quot;.
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      After that Allah asked Iblees: &quot;Why did not you prostrate?&quot; and
      Iblees answered:{' '}

      <span className="boldItalic">
        &quot;I am better than him, because You created me from fire, and him from
        mud.&quot;
      </span>
      {' '}
      Sura A&apos;raaf 11-12.<sup>a</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble5')}>
        <p>
          <sup>a</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}

    <p className="vitalic">
      <span className="boldItalic">
        &quot;Allah said: &quot;Come down from it! There is no way for you to walk
        there with pride. Go out! Indeed you will be put down&quot;.
      </span>
      {' '}

      (But Iblees) said:{' '}

      <span className="boldItalic">
        &quot;Give me time till they resurrect.&quot;
      </span>
      {' '}

      He said:{' '}

      <span className="boldItalic">&quot;I have given.&quot;</span>
      {' '}

      (Iblees) said:{' '}

      <span className="boldItalic">
        &quot;Because you put me in ighwa, I will obscure them from your True
        Path. Then I will come to them from their front and back and right and
        left. And you will not find many of them thankful&quot;
      </span>
      {' '}
      (Sura A&apos;raaf 13-17).
    </p>

    <p className="vitalic">
      This way Iblis has became an enemy of humankind.
    </p>
  </div>
</main>
  );
}