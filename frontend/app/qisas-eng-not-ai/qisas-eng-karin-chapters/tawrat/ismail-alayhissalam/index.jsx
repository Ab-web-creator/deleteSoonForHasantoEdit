'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Ishmael() {
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
  <div className="div_with_borders">
    <p className="boldItalic">
      “And mention Ismail in the Book.
      Indeed, he was true to his promise,
      and he was a Messenger and a Prophet.”
      (Surah Maryam 19:54).
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Our mother Sarah felt jealousy toward Lady Hajar.
      Many scholars have mentioned this.
      <sup>1</sup>{' '}
      According to al-Tabari,
      Lady Sarah sent our mother Hajar away from the house not once,
      but twice.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          For example:
          al-Suhayli in “Al-Rawd al-Unuf”,
          Abu al-Fida in “Al-Bidayah wa al-Nihayah”,
          and al-Tabari in his “Tarikh”.

          According to al-Tha‘labi,
          Lady Sarah once became so upset that she insisted:
          “You shall no longer live in the same place as me”
          (“Arais”, p. 81).
        </p>
      </div>
    )}

    <p>
      One day,
      Ibrahim (a.s.) held a great feast
      on the occasion of his son Ishaq being weaned.

      When Lady Sarah saw Ismail,
      the son of our mother Hajar,
      laughing and enjoying himself at the feast,
      she went to Ibrahim (a.s.) and demanded:

      “Send Hajar away with her son.
      The son of the slave woman
      shall not share in the inheritance
      that belongs to my son.”
    </p>

    <p>
      These words deeply saddened Allah’s Messenger, Ibrahim (a.s.).
      After all,
      Ismail (a.s.) was also his son.

      But Allah revealed to His Messenger:

      “Do as Sarah has said.

      For the promise I gave concerning your offspring
      will continue through Ishaq.

      Do not worry about Ismail and Hajar either.

      I shall protect them.

      From the descendants of Ismail,
      I shall bring forth a great people,
      for he too is your son.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Yes,
      this too was a trial
      <sup>2</sup>{' '}
      from Allah.

      Is separation from one’s child easy?

      After all,
      Ismail (a.s.) was the firstborn son
      of Prophet Ibrahim.
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          According to Afif Abd al-Fattah Tabbara
          in “Ma‘a al-Anbiya fi al-Qur’an al-Karim”,
          Allah, Glorified and Exalted,
          accepted Sarah’s wish
          and commanded Ibrahim عليه السلام
          to move our mother Hajar
          and her son to another place.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE DU‘A OF IBRAHIM </p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p className="vitalic">
      The du‘a of Allah’s Messenger
      is recorded in the Noble Qur’an:
    </p>

    <p className="boldItalic">
      “Our Lord,
      I have settled some of my offspring
      in an uncultivated valley
      near Your Sacred House,
      our Lord,
      so that they may establish prayer.

      So make hearts among the people
      incline toward them,
      and provide them with fruits,
      so that they may be grateful.”
      <span className="vitalic">
        {' '}
        (Surah Ibrahim 14:37).
      </span>
    </p>

    <p className="vitalic">
      After Lady Hajar and Ismail عليه السلام
      were moved to their new dwelling place,
      Allah Most High Himself cared for them
      and kept them under His protection.

      The spring that appeared in the desert
      was one of the signs of Allah’s mercy.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE SPRING IN THE DESERT</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      According to the hadiths of rasulullah ﷺ,
      Lady Hajar placed Ismail (a.s.)
      beneath the shade of a shrub
      and hung the water-skin on a branch.

      She and her child drank from that water-skin.
      <sup>3</sup>{' '}
      After some time,
      the water ran out.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Al-Bukhari, “Sahih”, vol. 4, p. 113.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      When the water was finished,
      Hajar (r.a.) said,
      “I cannot bear to watch my child die,”
      and went some distance away
      and sat down.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Al-Azraqi, “Akhbar Makkah”, vol. 1, p. 55.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Then she climbed a hill
      and looked around in search of water.

      She gazed in every direction,
      hoping to hear some sound,
      but she heard no voice
      and saw no one.

      Then she ran down
      and climbed the next hill.

      There too,
      she looked around anxiously,
      but saw no one.

      In this way,
      the grieving mother wandered back and forth
      between the two hills,
      weeping in distress.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          According to the books,
          these two hills were Safa and Marwah.

          At that time,
          Lady Hajar went back and forth
          between the two hills seven times
          (Imam al-Bukhari,
          al-Bayhaqi,
          al-Qurtubi,
          and others).
        </p>
      </div>
    )}

    <p className="vitalic">
      Then an angel of Allah appeared and said:

      “Hajar,
      Hajar,
      why are you crying?

      Do not be afraid.

      Your cries have reached the Highest Heaven.

      Rise now,
      lift up the child.

      Allah will bring forth
      a great nation from his descendants.”
    </p>

    <p className="vitalic">
      Allah had opened a spring for them there,
      but Lady Hajar had not yet seen it.

      Then Allah turned her gaze toward the spring.

      She looked —
      and there was water!

      Life-giving water!

      She immediately went to it and drank.

      Then she filled the water-skin
      and gave her son to drink.

      The water did not run out;
      it continued to gush forth from the earth.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      In this way,
      Allah Most High was always with them.

      Ismail عليه السلام grew up in the desert
      and became a skilled archer.

      Later,
      his mother married him
      to an Egyptian girl.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Al-Bayhaqi,
          “Dala’il al-Nubuwwah”.
        </p>
      </div>
    )}
  </div>
</main>
 
  );
}