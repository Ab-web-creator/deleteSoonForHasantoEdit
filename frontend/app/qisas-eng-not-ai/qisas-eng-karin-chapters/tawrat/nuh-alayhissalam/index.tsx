'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function NuhAlayhissalam() {
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
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “My reward is with Allah alone,” said{' '}
      <span className="vitalic">(Nuh, peace be upon him).</span>
      {' '}“And I have been commanded to be among those who submit to Him.”
      Yet they declared him a liar.
      So We saved him and those who were with him in the Ark,
      and We made them successors upon the earth.
      And We drowned those who denied Our signs.
      So consider what became of those who were warned.”
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> Qur’an, Surah Yunus 10:72–73.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Much time passed.
      {' '}
      <span className="vitalic">
        As mankind multiplied,
        sin multiplied with them.
      </span>
      {' '}
      Evil became widespread,
      and people’s thoughts and desires
      became occupied with wickedness.
      Allah was displeased with this,
      for the people He had created
      had rebelled against His will
      and chosen the path of disobedience.
    </p>

    <p>
      “I will wipe mankind from the face of the earth,”
      Allah declared.
    </p>

    <p>
      Yet Nuh (peace be upon him)
      found favor in the sight of Allah.
      He was a righteous servant,
      obedient to his Lord,
      and was known among his people
      as a man of integrity and upright character.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE JUDGMENT UPON SIN</p>
  </div>

  <div className="main_text">
    <p>
      When Allah Most High saw
      how corrupt mankind had become,
      how violence had spread,
      and how the earth had been filled
      with oppression and wrongdoing,
      He said to Prophet Nuh:
    </p>

    <p>
      “The people have filled the earth with ظلم (violence) and corruption.
      I shall now destroy mankind.
      Build an Ark from cypress wood.
      Construct it with compartments,
      and coat it inside and outside with pitch.
      Place its door on the side.

      I am about to send a great flood upon the earth.
      I will wipe out all living people.
      But with you I shall establish a covenant.
      I will preserve you,
      your family,
      your sons,
      and your daughters-in-law within the Ark.”
    </p>

    <p>
      Prophet Nuh (peace be upon him)
      carried out every command of Allah
      exactly as he had been instructed.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Imagine it:
      Allah’s Messenger was busy constructing
      an enormous Ark
      in a land with neither sea nor river.
      The vessel measured approximately
      137 meters in length,
      23 meters in width,
      and 14 meters in height.
      <sup>2</sup>
      Such a project would naturally require years to complete.

      What must Nuh’s neighbors,
      acquaintances,
      and fellow townspeople have thought
      as they watched him building this Ark year after year?
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup> Al-Nasafi, “Madarik”;
          Al-Suyuti, “Al-Durr al-Manthur”.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Some thought he had lost his mind.
      Others mocked him openly.

      Whenever he warned them,
      “Allah is about to send a flood upon the earth!
      Repent and return to Him!”
      many reacted with hostility.

      “What flood?
      What are you even talking about?”

      Yet Allah had indeed promised
      that a flood would come.
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          “The people of Nuh denied the messengers.”
          (Qur’an, Al-Shu‘ara 26:105).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE FLOOD</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Indeed, We sent Nuh to his people...
      But they rejected him.
      So We saved him
      and those with him in the Ark,
      and We drowned those who denied Our signs.”
      <span className="vitalic">
        {' '}
        (Surah Al-A‘raf 7:59, 64).
      </span>
    </p>

    <p>
      At last the appointed time arrived.

      Allah Most High said to Nuh (peace be upon him):

      “Go and enter the Ark with your household.
      I have found no one more righteous than you upon the earth.

      Take with you seven pairs
      of the lawful animals and birds,
      so that their descendants may survive,
      and one pair of each unlawful species,
      male and female.

      Seven days from now,
      I shall send rain upon the earth
      for forty days and forty nights,
      and I shall wipe away every living creature
      that I created.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Nuh (peace be upon him)
      obeyed every command of Allah exactly as instructed.
      He gathered his family,
      his sons and their wives,
      and entered the Ark
      <sup>4</sup> in order to be saved from the flood.

      At that time,
      the Messenger of Allah Nuh
      was six hundred years old (peace be upon him).
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          “Board it.
          Its course and its anchoring
          are in the Name of Allah.
          Indeed, my Lord is Most Forgiving,
          Most Merciful.”
          (Nuh, peace be upon him,
          Surah Hud 11:41).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Just as Allah had decreed,
      animals and birds of every kind —
      lawful and unlawful,
      large and small,
      male and female —
      came in pairs before Prophet Nuh
      and entered the Ark.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup> See Surah Hud 11:40.
        </p>
      </div>
    )}

    <p>
      Then Allah Himself
      closed the door of the Ark.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Then the flood began.

      The springs beneath the earth burst forth,
      and the gates of heaven were opened.

      Torrential rain poured down upon the earth
      for forty days and forty nights.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Al-Tabari, “Tarikh”, vol. 1, p. 94;
          Al-Zamakhshari, “Al-Kashshaf”,
          vol. 4, p. 37.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      During all this,
      Prophet Nuh and his household,
      together with his sons —
      Sam, Ham, and Yafith
      (may Allah be pleased with them) —
      and their wives,
      remained safely inside the Ark.
    </p>
  </div>

  <div className="paragraph_heading flex justify-center">
    <p>DID EVERYONE ELSE PERISH?</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “We opened the gates of heaven
      with pouring water,
      and caused springs to gush forth from the earth.
      Then the waters met
      for a matter already decreed.
      And We carried him upon
      a vessel of planks and nails.”
      <span className="vitalic">
        {' '}
        (Surah Al-Qamar 54:11–13).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      The flood continued for forty days.

      The waters rose higher and higher,
      lifting the Ark above the earth.

      Eventually the waters increased so greatly
      that even the highest mountains
      disappeared beneath them.

      The waters rose fifteen cubits
      <sup>7</sup> above the mountain peaks.
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup> 
          “Fifteen cubits”:
          see the Tafsirs of
          Al-Tabari,
          Al-Tha‘labi,
          and Al-Qurtubi.
        </p>
      </div>
    )}

    <p>
      Every living creature upon the earth perished:
      animals,
      birds,
      and human beings.

      Everything that breathed upon dry land was destroyed.

      From mankind to beasts,
      from crawling creatures upon the earth
      to birds flying in the sky,
      all were wiped away.

      Only Prophet Nuh
      and those who entered the Ark with him
      survived.
    </p>

    <p className="vitalic">
      Why did Allah Most High
      decree death upon the people?

      Was it because they refused to turn away from sin?

      One day,
      each of us will stand before Allah
      to be judged.

      He will judge us according to our deeds.

      Where shall we find salvation on that Day?

      Will there be an Ark to save us?

      Or should those who care about their Hereafter
      begin seeking the Ark of Salvation even now?
    </p>
  </div>
</main>
  );
}