'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Abraham() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble7',
    'bubble8',
    'bubble10',
    'bubble11',
  ]);

  return (
   <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Allah has spoken the truth.
      Therefore follow the way of Ibrahim,
      who was upright in faith
      and was never among the idolaters.”
      <span className="vitalic">
        {' '}
        (Qur’an, Surah Aal ʿImran 3:95).
      </span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FATHER OF PROPHET IBRAHIM</p>
  </div>

  <div className="main_text">
    <p>
      Terah had three sons:
      Ibrahim,
      Nahor,
      and Haran.

      At that time they lived in the city of Ur
      in the land of the Chaldeans.

      Haran later married
      and had a son named Lut
      and two daughters named Milkah and Iskah.

      Afterwards,
      while his father was still alive,
      Haran passed away in his homeland,
      the city of Ur.

      Ibrahim also married.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      But his wife Sarah
      was unable to bear children.

      Then one day Terah gathered his family
      and set out for the land of Canaan.

      However,
      when they reached Harran,
      <sup>1</sup>   they remained there
      for various reasons
      and did not continue their journey.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Since a vast desert lay between them and Canaan,
          they first traveled north to the city of Harran,
          intending later to continue southward toward Canaan.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE YOUTH OF IBRAHIM (PEACE BE UPON HIM)</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      According to the historical accounts,
      the people of Ibrahim (peace be upon him)
      worshipped lifeless idols
      and did not acknowledge the Living Allah.

      Ibrahim, however,
      searched for answers to questions such as:

      “Does this universe have an Owner?”
      and
      “Who is the Lord of all the worlds?”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE SEARCH FOR ALLAH</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “When the darkness of night enveloped him,
      he saw a star and said:
      ‘This is my Lord.’

      But when it set,
      he said:
      ‘I do not love those that disappear.’

      Then, when he saw the moon rising,
      he said:
      ‘This is my Lord.’”
      {' '}
      <span className="vitalic">
        (But the moon also set.)
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      “When it too disappeared,
      he said:

      ‘I was mistaken.
      If my Lord does not guide me,
      I shall surely be among those who go astray.’

      Then, when he saw the sun rising,
      he said:

      ‘This is my Lord.
      This is greater.’

      But when it also set,”
      {' '}
      <span className="vitalic">
        (he reflected:
        surely there must be One
        who created all of these
        and is greater than them all.
        Then he declared:)
      </span>
      {' '}
      “‘O my people,
      I disassociate myself
      from everything you associate with Allah.

      I have turned my face toward the One
      who created the heavens and the earth.
      I seek the straight path,
      and I am not among the idolaters.’”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Surah Al-An‘am 6:76–79.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      During those days,
      Allah, Mighty and Majestic,
      sent revelation to him and said:
{" "}
      <span className="boldItalic">
        “Aslim.”
      </span>
{" "}
      Meaning:
      “Submit yourself to Me.”

      Ibrahim (peace be upon him) immediately replied:

      {' '}
      <span className="boldItalic">
        “Aslamtu li Rabbil-‘Alamin.”
      </span>
      <sup>3</sup>
{" "}
      Meaning:

      “I have submitted myself
      to the Lord of all the worlds.
      I have believed.”

      Thereafter,
      he sought to turn his father
      and his people away from idol worship
      and call them back
      to the worship of the One Allah,
      the Lord of the heavens and the earth.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Surah Al-Baqarah 2:131.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>SMASHING THE IDOLS</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      “He said to his father and his people:

      ‘What is it that you worship?’

      They replied:

      ‘We worship idols,
      and we shall remain devoted to them.’

      He asked:

      ‘Do they hear you when you call upon them?
      Can they benefit you
      or harm you?’

      They replied:

      ‘No.
      But this is what our forefathers did,
      and we merely follow their example.’”
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Surah Al-Shu‘ara 26:70–74.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      One day there was a festival.

      When everyone had left for the celebration,
      Ibrahim (peace be upon him)
      took an axe and entered the temple of idols.

      Seeing the food that had been placed before them,
      he said:

      {' '}
      <span className="boldItalic">
        “Why do you not eat?
        What is wrong with you?
        Why do you not speak?”
        Then he approached them
        and began striking them down.
      </span>
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          Surah Al-Saffat 37:91–93.
        </p>
      </div>
    )}

    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      In Surah Al-Anbiya,
      it is written:

      {' '}
      <span className="boldItalic">
        “So he smashed them into pieces,
        except for the largest of them,”
        <sup>6</sup>
      </span>
      {' '}
      and then he hung the axe
      around the neck of the largest idol
      and left the temple.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      Some time later,
      the people returned from the festival
      and found their idols shattered.

      Enraged,
      they brought Ibrahim (peace be upon him) before them
      and asked:

      {' '}
      <span className="boldItalic">
        “Did you do this to our gods,
        O Ibrahim?”
      </span>
 {' '}
      He replied mockingly:

      {' '}
      <span className="boldItalic">
        “No.
        This largest one did it.
        Ask them,
        if they can speak.”
      </span>
      <sup>7</sup>
 {' '}
      They answered:

      “You know very well
      that idols cannot speak!”

      Ibrahim then said:

      “Then why do you worship,
      instead of Allah,

      {' '}
      <span className="boldItalic">
        things that can neither benefit you
        nor harm you?
      </span>
      ”
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>6, 7</sup>
          Surah Al-Anbiya 21:58 and 21:62–67.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THEY CAST THE MESSENGER INTO THE FIRE</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      After this,
      the king of that people
      <sup>8</sup>  {' '}
      summoned Ibrahim (peace be upon him) and asked:

      “Who is your god?
      Have you ever seen Him?”

      The Messenger of Allah replied:

      “My Lord is the One who gives life
      and causes death.”

      The king responded:

      “I can do that as well.
      If two men are sentenced to death,
      I can execute one
      and pardon the other.”

      Ibrahim (peace be upon him) then said:

      {' '}
      <span className="boldItalic">
        “Allah causes the sun to rise from the east.
        If you are able,
        make it rise from the west.”
      </span>
      <sup>9</sup> {' '} The king was left speechless.
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>
          In many historical works,
          this king is identified as Nimrod.
        </p>

        <p>
          <sup>9</sup>
          Surah Al-Baqarah 2:258.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble10')}
    >
      The king then decided
      to burn Allah’s Messenger alive.

      For this purpose,
      a huge pit was dug
      and filled with wood
      that would burn for a long time.

      When everything was ready,
      an enormous fire was lit,
      <sup>10</sup>  {' '}      and Ibrahim (peace be upon him)
      was thrown into the flames.
    </p>

    {openBubbles['bubble10'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble10')}
      >
        <p>
          <sup>10</sup>
          According to some scholars,
          gathering the wood alone
          took three months
          (Ibn Iyas, “Bada’i al-Zuhur”).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>LESSONS FROM THE STORY</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Because Ibrahim (peace be upon him)
      placed his complete trust in Allah,
      he never abandoned his faith,
      even when they threatened
      to burn him alive.

      In such moments,
      every believer places hope
      in Allah’s help and support.

      After all,
      if Allah wills,
      He can save a person
      from the trial of fire
      just as He can save him
      from the trial of water.

      Yet even if He chooses not to save us,
      we must never surrender our faith.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble11')}
    >
      When Ibrahim (peace be upon him)
      was cast into the fire,
      Allah Most High protected him.

      The Noble Qur’an records the command:

      {' '}
      <span className="boldItalic">
        “O fire,
        be coolness and safety for Ibrahim.”
        <sup>11</sup>
      </span>

      {' '}
      Thus,
      although his people intended evil against him,
      Allah made them the true losers.
    </p>

    {openBubbles['bubble11'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble11')}
      >
        <p>
          <sup>11</sup>
          Surah Al-Anbiya 21:69.
        </p>
      </div>
    )}
  </div>
</main>
  );
}