'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function SadomGamorra() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
    'bubble9',
    'bubble11',
  ]);

  return (
        <main className="stories relative">
  <div className="mb-8 border border-brand-400 rounded-md px-4 ">
    <p className="!text-brand-700 !text-sm">
      “Shall I hide from Ibrahim what I am about to do?” says Allah.
      “I have chosen him so that he may teach his children and his household
      to walk in righteousness and justice,
      guiding them in the way of Allah.

      For I shall fulfill the promise I made to him:
      I shall raise from him a mighty nation
      and through Ibrahim I shall spread blessing
      to all the peoples of the earth.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PURPOSE OF THEIR VISIT</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Afterwards the guests rose
      and set out toward Sodom.
      <sup>1</sup>{' '}

      Allah’s Messenger, Ibrahim عليه السلام,
      accompanied them for some distance
      to see them off.

      They said to him:

      “The people of Sodom and Gomorrah
      have become deeply immersed in sin.

      The cries of those suffering because of them
      have become very great.

      Therefore we have come
      to investigate these complaints
      that have risen all the way
      to the Highest Heaven.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p className="boldItalic">
          <sup>1</sup>{' '}
          <span className="vitalic">
            The Qur’an also contains these verses regarding this event:
          </span>
          {' '}
          “He said:
          ‘O messengers,
          what is your mission?’

          They said:
          ‘We have been sent to a sinful people
          in order to destroy them.

          But we shall save the family of Lut completely,
          except for his wife.’”
        </p>

        <p className="who_wrote">
          (Surah Al-Hijr 15:57–60)
        </p>

        <p className="vitalic">
          <sup>2</sup>
          The people of Sodom and Gomorrah
          were steeped in sin
          and engaged in shameful acts.

          {' '}
          <span className="boldItalic">
            “Our messengers came to Ibrahim and said:
            ‘Indeed,
            we are going to destroy the people of this town,
            for its people are wrongdoers.’

            He said:
            ‘But Lut is there!’”
          </span>
        </p>

        <p className="who_wrote">
          (Surah Al-Ankabut 29:31–32)
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE DU‘A OF IBRAHIM عليه السلام</p>
  </div>

  <div className="main_text">
    <p>
      “My Lord,
      would You really destroy the righteous
      together with the wicked?”
      Allah’s Messenger prayed.

      “If fifty righteous people are found there,
      surely You would not destroy the city?

      You would not destroy the righteous
      together with the evil-doers!

      O Lord of the Worlds,
      You always judge with perfect justice.”
    </p>

    <p>
      “Indeed,” Allah replied.
      “If fifty righteous people were found in Sodom,
      I would spare the city.”
    </p>

    <p>
      “My Lord,
      though I am but Your humble servant,
      permit me to speak,”
      said Ibrahim عليه السلام.

      “What if there are forty?”
    </p>

    <p>
      “For forty people,
      I would still spare the city,”
      Allah replied.
    </p>

    <p>
      “My Lord,
      do not be displeased with me for speaking further.

      What if only thirty righteous people are found?”
    </p>

    <p>
      “Even if thirty are found,
      I shall not destroy the city,”
      Allah replied.
    </p>

    <p>
      “My Lord,
      forgive my boldness;
      what if only twenty are found?”

      “Even for twenty,”
      said Allah.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Again seeking forgiveness,
      Allah’s Messenger asked:

      “What if there are only ten?
      What would You do then?”

      Allah replied:

      “Even for ten,
      I would not destroy the city.

      {' '}
      <span className="boldItalic">
        But We found there only one household of Muslims.”
        <sup>3</sup>
      </span>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Surah Adh-Dhariyat 51:36.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>SLAVES OF DESIRE</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      The angels arrived in Sodom
      at evening time.

      As they entered the city, prophet (peace be upon him)
      <sup>4</sup>{' '} was sitting in the public square
      near the city gate.

      Seeing the strangers,
      he rose to greet them and said:

      “Welcome.
      Please honor my home with your presence.

      Spend the night with us,
      and tomorrow you may continue your journey.”

      They replied:

      “No,
      we shall spend the night in the town square.”

      But Lut alayhis-salam insisted,
      and eventually they accompanied him home.
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Lut  alayhis-salam was the prophet
          sent to the people of Sodom.

          However,
          the people refused his call
          (Abu al-Faraj Ibn al-Jawzi,
          “Tabsirah”, vol. 1, p. 150).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      After the evening meal, before anyone had gone to sleep,
      men both young and old gathered from every quarter of Sodom
      and surrounded the house of Lut alayhis-salam.

      They shouted:  “Lut! Lut! Where are the men who came to your house today? Bring them out to us, so that we may have our way with them!”
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p className="">
          <sup>5</sup>
          “When the people of the city heard
          that handsome young men
          had come to Lut’s house,
          they arrived rejoicing.

          Lut said:

          ‘These are my guests!
          Do not disgrace me.

          Fear Allah
          and do not shame me!’

          They replied:

          ‘Did we not forbid you
          from interfering in our affairs?’

          Lut said:

          ‘If you must do something,
          here are my daughters.’”
        </p>

        <p className="who_wrote">
          (Surah Al-Hijr 15:67–71)
        </p>
      </div>
    )}

    <p>
      Prophet Lut went outside, shut the door behind him, 
      and said:

      “My brothers,
      do not commit this sin.

      Here are my two virgin daughters.

      If you wish,
      I shall bring them before you.

      Do whatever you will with them,
      but do not harm these men.

      They are my guests!”
    </p>

    <p>
      “Get out of our way!”
      they shouted.

      “Who do you think you are,
      a foreigner giving orders to us?

      We shall treat you even worse!”

      Then they rushed toward Lut (peace be upon him)
      and tried to break down the door.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      At that moment,
      the guests inside stretched out their hands,
      pulled Lut inside,
      and bolted the door.

      Then they struck all the men outside
      with blindness,
      from the oldest to the youngest.
      <sup>6</sup>{' '}

      Unable to see anything,
      not one of them could even find the door.
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          <span className="boldItalic">
            “So We blinded their eyes.”
          </span>
          {' '}
          <span>
            (Surah Al-Qamar 54:37).
          </span>
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE PUNISHMENT FOR SIN</p>
  </div>

  <div className="div_with_borders">
    <p className="boldItalic">
      “Indeed,
      We sent messengers to nations before you.

      We afflicted them with hardship and suffering
      so that they might humble themselves.

      Why then,
      when Our punishment came to them,
      did they not humble themselves?

      Rather,
      their hearts became hardened,
      and Satan made their deeds appear fair to them.”
      (Surah Al-An‘am 6:42–43).
    </p>
  </div>

  <div className="main_text">
    <p>
      “We are about to destroy the city completely,”
      the angels told Lut (a.s.).

      “The cries against these people
      have become so numerous
      that Allah has sent us
      to destroy the city.

      Who else do you have here?

      Gather them all
      and leave immediately.”
    </p>

    <p className="vitalic">
      What do you think?

      If the entire population of a city
      had become so consumed by sin,
      who was crying out to Allah against them?
    </p>

    <p className="vitalic">
      Imagine that you were traveling
      with your family
      and happened to arrive in such a city.

      The people of Sodom
      were not hospitable.

      Where would you spend the night?

      Most likely in the street.

      But if you stayed in the street,
      what would they do to you?

      And to whom would you cry for help?

      To Allah.

      According to the angels,
      so many cries had risen against these people
      that one can scarcely imagine it.
    </p>

    <p>
      Then Lut (a.s.) went
      to the men engaged to his daughters
      and said:

      “Hurry!
      We must leave this place.

      Allah is about to destroy the city!”

      But they thought
      he was joking.
    </p>

    <p>
      At dawn,
      the angels urged Lut (a.s.):

      “Quickly! Take your wife and your daughters and leave,
      or you too will perish.”
    </p>

    <p>
      Yet he hesitated.

      Then,
      behold the mercy of Allah:

      the angels took him,
      his wife,
      and his two daughters by the hand
      and led them outside the city.
    </p>

    <p>
      “Do not stop anywhere,”
      one of the angels said.

      “Do not look back.

      Flee toward the mountains,
      or you will perish.”
    </p>

    <p>
      “No, my lord,”
      pleaded Lut (a.s.).

      “You have shown great kindness
      by saving our lives.

      But we cannot reach the mountains.

      Disaster will overtake us before we arrive.

      Look,
      there is a small town nearby,
      a very small town.

      Allow us to flee there
      and save our lives.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      “Very well,”
      the angel replied.

      “I grant your request.

      I shall not destroy the town you mentioned.

      Now hurry and save yourself.

      For I can do nothing
      until you arrive there.”

      (That is why the town
      later came to be called Zoar.)
      <sup>7</sup>
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          The name “Zoar”
          means “small.”
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      Lut (a.s.) reached Zoar
      just as the sun was rising.

      Then Allah Most High
      caused burning stones
      to rain down from the sky
      upon Sodom and Gomorrah.

      The other towns and villages of the valley,
      together with all living creatures,
      vegetation,
      and trees,
      were consumed and destroyed.
      <sup>8</sup>{' '}

      The wife of Lut alayhis-salam looked back
      and became a pillar of salt.
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>{' '}
          <span className="boldItalic">
            “While they wandered blindly in their intoxication,
            the mighty blast seized them at sunrise.

            Then We turned the city upside down
            and rained upon them stones of baked clay.

            Surely in this are signs
            for those who reflect.”
          </span>
          {' '}
          (Surah Al-Hijr 15:72–75).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble9')}
    >
      Early that morning,
      Prophet Ibrahim (a.s.) set out toward the region of Sodom.

      As he approached the valley,
      he looked from afar
      toward Sodom and Gomorrah.

      Smoke was rising everywhere,
      like smoke from a furnace.

      When Allah destroyed those cities,
      He saved Lut (a.s.)
      because of Ibrahim (peace be upon him).
      <sup>9</sup>
    </p>

    {openBubbles['bubble9'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble9')}
      >
        <p>
          <sup>9</sup>{' '}
          <span className="boldItalic">
            “We saved him and his family,
            except for his wife,
            who was among those left behind.”
          </span>
          {' '}
          (Surah Al-A‘raf 7:83).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE BIRTH OF PROPHET ISHAQ    </p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p>
      Allah fulfilled His promise.

      Our mother Sarah (r.a.) conceived
      and at the appointed time
      gave birth to a son for Ibrahim alayhis-salam.
    </p>

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble10')}
    >
      Allah’s Messenger named his son Ishaq
      and, as Allah had commanded,
      circumcised him on the eighth day.

      At that time,
      Ibrahim عليه السلام had reached one hundred years of age.
      <sup>10</sup>
    </p>

    {openBubbles['bubble10'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble10')}
      >
        <p>
          <sup>10</sup>
          Ibn Qutaybah,
          “Al-Ma‘arif”, p. 16.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble11')}
    >
      “Allah has given me laughter,”
      Sarah (r.a.) would say.

      “Now everyone who hears of it
      will laugh with me.
      <sup>11</sup>{' '}

      Who could have imagined
      that I would one day nurse a child?

      Yet I have borne a son
      for my master in his old age!”
    </p>

    {openBubbles['bubble11'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble11')}
      >
        <p>
          <sup>11</sup>
          The name “Ishaq” means
          “he laughs.”
        </p>
      </div>
    )}
  </div>
</main>
  );
}