'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function MotherAgar() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return ( 
  <main className="stories relative">
  <div className="main_text">
    <p>
      Sarah, the wife of Ibrahim عليه السلام, had not borne any children.
      So one day she spoke to her husband about her Egyptian maidservant and said:
      “Allah has not granted me a child.
      Go in to Hajar;
      perhaps through her I may have a child.”
      Allah’s Messenger, Ibrahim عليه السلام, agreed.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Thus, ten years after they had settled in Canaan,
      Lady Sarah رضي الله عنها gave her Egyptian maidservant Hajar
      to her husband as a wife.
      Before long,
      Hajar became pregnant.
      When she realized that she had conceived,
      she began to look down upon her co-wife,
      Lady Sarah.
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Ibn Khaldun, “Tarikh”, vol. 2, part 1, p. 36.
        </p>
      </div>
    )}

    <p>
      Then our mother Sarah came to Allah’s Messenger and complained:
      “You are responsible for all of this!
      I placed this maidservant in your care,
      and now that she has conceived,
      she no longer regards me with respect.
      Let Allah Himself judge between us!”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ibrahim عليه السلام replied:
      “She is under your authority.
      Do with her as you see fit.”

      After that,
      Sarah رضي الله عنها began to treat her maidservant harshly.
      In the end,
      our mother Hajar fled from that place.
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          According to al-Tabari’s “Tarikh”,
          Ibn al-Athir’s “Al-Kamil”,
          and al-Suhayli’s “Al-Rawd al-Unuf”,
          Lady Sarah,
          overcome by jealousy and anger,
          drove our mother Hajar away.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE ANGEL OF ALLAH TURNS LADY HAJAR BACK</p>
  </div>

  <div className="main_text">
    <p>
      In the wilderness,
      beside a spring on the road to Shur,
      an angel of Allah appeared to Hajar رضي الله عنها and asked:
      “Hajar,
      maidservant of Sarah,
      where have you come from,
      and where are you going?”

      Lady Hajar replied:
      “I am fleeing from my mistress.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “No,” the angel said to her.
      “Return to your mistress
      and obey her.

      Allah Most High will support you.

      He will multiply your descendants
      so greatly
      that no one will be able to count them.

      You are now pregnant,
      and you will give birth to a son.

      Name him Ismail.
      <sup>3</sup>

      For Allah has heard your distress.

      Your son will be freedom-loving like an eagle
      and independent like a wild horse of the desert.

      He will live apart from all his brothers.

      His hand will be against everyone,
      and everyone’s hand will be against him.”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          The name Ismail means
          “Allah hears.”
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE BIRTH OF ISMAIL</p> <AlayhS className='text-green-800 font-medium' />
  </div> 

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      So our mother Hajar returned to Lady Sarah.
      When her time was complete,
      she bore a son to Allah’s Messenger, Ibrahim عليه السلام.

      Prophet Ibrahim named his son Ismail.

      (At that time,
      Ibrahim عليه السلام was eighty-six years old.
      <sup>4</sup>)
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          This report is also mentioned by Ibn Khaldun.
          See also:
          Ibn Qutaybah, “Al-Ma‘arif”, p. 16;
          al-Ya‘qubi, “Tarikh”, vol. 1, p. 25.
        </p>
      </div>
    )}
  </div>
</main>
  );
}