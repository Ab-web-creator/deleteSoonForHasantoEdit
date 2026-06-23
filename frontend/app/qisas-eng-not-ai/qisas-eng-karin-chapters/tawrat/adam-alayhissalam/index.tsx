// app/qisas-eng-karin-chapters/tawrat/adam-alayhissalam/index.tsx

'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function AdamAlayhissalam() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
  ]);

return (
<main className="stories relative">
  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      As it is written in the Qur&apos;an, Allah Almighty created Adam (a.s.)
      from the soil-mud (Saad 38:71).<sup>a</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>a</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="arabic_quran pt-4 pb-3 px-6 border border-gray-300 rounded-md">
    <span className="font-amiri">
      إِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى خَـٰلِقٌۢ بَشَرًۭا مِّن طِينٍۢ
      فَإِذَا سَوَّيْتُهُۥ وَنَفَخْتُ فِيهِ مِن رُّوحِى فَقَعُوا۟ لَهُۥ سَـٰجِدِينَ
      فَسَجَدَ ٱلْمَلَـٰٓئِكَةُ كُلُّهُمْ أَجْمَعُونَ
    </span>
  </div>

  <div className="paragraph_heading mt-10">
    <p>The creation of the Adam (a.s.)</p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble2')}>
      Allah makes a man from the soil and breathes from His spirit the life
      (-giving) breath into his nostrils, and the man started breathing.

      <span className="vitalic">
        {' '}
        At that time there was no one else on the earth besides Hazrat Adam
        (a.s.).<sup>b</sup>
      </span>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>b</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Then God made a garden in a place called Eden and filled it with beautiful
      and delicious fruit trees. There grew two trees in the middle of the
      garden: one was the tree of life, and the second one was the tree of
      knowing good and evil. Allah ta&apos;ala placed Adam (a.s.) in this place
      saying, &quot;Let him take care of the garden.&quot;
    </p>

    <p>
      Then He warned him, saying: &quot;Go ahead and eat the fruit of all these
      trees. Only do not eat from the tree of the knowledge of good and evil,
      because you will die on the same day as you eat.&quot;
    </p>

    <p className="vitalic">
      In the sura Taa-Haa it is written that Allah (s.w.t.) warned Adam (a.s.)
      about Satan:{' '}

      <span className="boldItalic">
        &quot;Oh Adam, of course, he is your enemy and the enemy of your wife,
        (be careful) so that he will not kick the two of you out of Janna and
        you will be unhappy&quot;
      </span>
      {' '}
      (20:117).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>The First prophet</p>
  </div>

  <div className="main_text">
    <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble3')}>
      One of the great sahaba — Abu Zarr (r.a.) asked the prophet (s.a.w.):
      &quot;Who was the first among prophets?&quot; The Messenger (s.a.w.) said:
      &quot;Adam (a.s.) is the first sent prophet, Allah made him by His hand and
      put the spirit in him and created him as a handsome human being.&quot; In
      another narration from Abu Zarr (r.a.) it says: &quot;I asked the messenger
      (s.a.v.): &quot;Oh the messenger of Allah, was Adam from among prophets?&quot;
      The messenger (s.a.v.) answered saying: &quot;Of course, Adam was the prophet
      who spoke first with Allah without a middle person.&quot;<sup>c</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>c</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>Naming the animals</p>
  </div>

  <div className="main_text">
    <p>
      <span className="vitalic">
        As Hazrat Adam walked through the garden of paradise, he was watching
        pairs of animals that were walking, and beautiful birds flying together.
        Everything was made very beautifully and wonderfully.
      </span>
    </p>

    <p className="cursor-pointer" onClick={() => toggleBubble('bubble4')}>
      Allah ta&apos;ala brought all the creatures He had created into the
      presence of Adam (a.s.) and he (a.s.) named them all the things, animals
      and birds.<sup>d</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
        <p>
          <sup>d</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble5')}>
      He lacked only one thing and so it was that there was not found a suitable
      companion.<sup>e</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble5')}>
        <p>
          <sup>e</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>The creation of Mother Eve</p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble6')}>
      Allah the Highest had said before: &quot;It is not good for Adam to be
      alone, I will create a suitable companion<sup>f</sup> After Adam (a.s.) had
      named the animals, God created Mother Eve from his side.
    </p>

    {openBubbles['bubble6'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble6')}>
        <p>
          <sup>f</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble7')}>
      When Hazrat Adam first saw Mother Eve he was so happy and cheered up
      saying: &quot;So there is such a one (for me)!&quot;<sup>g</sup>
    </p>

    {openBubbles['bubble7'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble7')}>
        <p>
          <sup>g</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}

    <p>
      So, Mother Eve&apos;s bones andflesh were originally taken from Adam. As it
      is said in the Qur&apos;an:{' '}

      <span className="boldItalic">
        «Oh you people! Your Rabb had created you from one soul and He created
        his pair from him...»
      </span>
      {' '}
      (Sura Nisa 4:1). That is why when a man gets married, he puts his parents
      aside, and will be welded with his wife and the two of them will become one
      body.
    </p>
  </div>
</main>
);
}