'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function NoahCovenant() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble6',
    'bubble7',
    'bubble8',
  ]);

  return (
    <main className="stories relative">
      <div className="paragraph_heading">
        <p className="boldItalic center">
          “O Nuh, ... descend from the Ark.”
          <span className="vitalic center">
            {' '}<br />
            (Surah Hud 11:48).
          </span>
        </p>
      </div>

  <div className="main_text">
    <p>
      After the floodwaters receded and the earth became dry,
      Allah’s Messenger emerged from the Ark with his family.
      He then offered sacrifices to Allah,
      slaughtering one animal from each of the lawful species
      and one bird from each lawful kind.
    </p>

    <p>
      At that time Allah Most High said:
      “Mankind is inclined toward sin from an early age.
      Even so,
      I shall never again curse the earth in this manner,
      nor shall I destroy every living creature.
      As long as the world remains,
      seedtime and harvest,
      heat and cold,
      summer and winter,
      day and night
      shall never cease.”
    </p>
  </div>

  <div className="main_text">
    <p>
      Then He blessed Nuh (peace be upon him)
      and his sons, saying:

      “Be fruitful and multiply,
      and fill the earth!

      The beasts of the earth,
      the birds of the sky,
      and the fish of the sea
      shall fear you.

      Just as I gave you the green plants,
      I now place them under your authority as well.

      But do not eat animals with their blood,
      for life is in the blood.”
    </p>

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “I forbid you from shedding human blood.
      Whoever sheds the blood of a human being
      shall answer to Me.
      For I created mankind in My image.
      <sup>1</sup> Whether man or beast,
      whoever takes a human life
      shall be subject to the penalty of death.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          In both Sahih al-Bukhari and Sahih Muslim
          there is a hadith:
          “Allah created Adam in His image.”

          We mentioned this earlier in the book.

          How should this statement be understood?

          If mankind is creation
          and Allah is the Creator,
          can we really resemble Allah?

          We are imperfect,
          deficient,
          and full of faults.

          The Qur’an states:

          “There is nothing whatsoever like unto Him”
          (42:11).

          Yet must resemblance be absolute?

          Imam al-Ghazali,
          discussing this subject,
          writes:

          “The purpose of human life is reflected
          in the meanings of the Most Beautiful Names.
          A person seeks to emulate these Names,
          adorning his character with them,
          striving according to his ability
          to embody their meanings,
          so that he may draw nearer to the Truth.”
        </p>
      </div>
    )}

    <p>
      “I establish a covenant with you,
      your descendants,
      and every living creature that came out of the Ark —
      every bird and animal.

      Never again shall all life on earth
      be destroyed by a flood.

      Such a flood will never occur again.”
    </p>

    <p>
      Allah continued:

      “I place My rainbow among the clouds.

      It shall be the sign of My covenant
      with you and with every living creature.

      Whenever clouds gather
      and My rainbow appears among them,
      I will remember My covenant with you.

      Never again shall a flood come
      to destroy all life.

      Whenever the rainbow appears in the clouds,
      I shall look upon it
      and remember the everlasting covenant
      that I have established
      with every living creature upon the earth.

      This is the sign of My covenant
      with all living beings.”
    </p>

    <p className="vitalic">
      The next time you see a rainbow in the sky,
      remember these events.

      Never forget:
      Allah does not desire our destruction;
      He desires our salvation.

      Seek the path of deliverance.

      Do not be careless with your life
      like the people of Nuh (peace be upon him).
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      After the flood,
      Nuh (peace be upon him)
      lived for another three hundred and fifty years,
      <sup>2</sup> reaching the age of nine hundred and fifty       before passing away.
      <sup>3</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Ibn Qutaybah, “Al-Ma‘arif”;
          Al-Mas‘udi, “Muruj al-Dhahab”.
        </p>

        <p>
          <sup>3</sup>
          See Surah Al-‘Ankabut, verse 14.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE DESCENDANTS OF NUH (PEACE BE UPON HIM)</p> 
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Indeed, We sent Nuh and Ibrahim as prophets,
      and We placed prophethood and revelation
      among their descendants.”
      <span className="vitalic">
        {' '}
        (Al-Hadid 57:26).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      <span className="vitalic">
        As mentioned earlier,
      </span>
      {' '}
      Prophet Nuh had three sons
      who survived the flood:
      Sam,
      Ham,
      and Yafith (may Allah be pleased with them).
      <sup>4</sup> All people living on earth today
      are descended from these three sons
      of Nuh (peace be upon him).
      <sup>5</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Ibn Abd Rabbih,
          “Al-‘Iqd al-Farid”,
          vol. 3, p. 405.
        </p>

        <p>
          <sup>5</sup> One of Nuh’s sons perished in the flood.

          As related in the Qur’an,
          he said:

          “I will seek refuge upon a mountain,
          and it will protect me from the water.”

          Nuh replied:

          “Today there is no protection
          from Allah’s command,
          except for those upon whom He shows mercy.”

          Nuh called him to board the Ark,
          but a wave separated them,
          and the son drowned.
          (Surah Hud 11:43).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Yafith (may Allah be pleased with him)
      had sons named
      Gomer,
      Magog,
      Madai,
      Javan,
      Tubal,
      Meshech,
      and Tiras.

      Gomer fathered
      Ashkenaz,
      Riphath,
      and Togarmah.

      Javan fathered
      Elishah,
      Tarshish,
      and the ancestors of the Kittim
      and Rodanim peoples.
    </p>

    <p>
      Ham (may Allah be pleased with him)
      had sons named
      Cush,
      Mizraim,
      Put,
      and Canaan.

      Cush fathered
      Seba,
      Havilah,
      Sabtah,
      Raamah,
      Nimrod,
      and Sabteca.

      Raamah fathered
      Sheba
      and Dedan.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Nimrod —
      the famous mighty hunter —
      ruled over the land of Shinar,
      a vast region including the cities of
      Babylon,
      Erech,
      Akkad,
      and Calneh.

      Later he went to Assyria
      and established the cities of
      Nineveh,
      Rehoboth-Ir,
      Calah,
      and Resen.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>The city of Resen
          was located between Nineveh and Calah.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      From Mizraim came the peoples known as
      the Ludim,
      Anamim,
      Lehabim,
      Naphtuhim,
      Pathrusim,
      Caphtorim,
      and Casluhim —
      from whom the Philistines descended.

      From Canaan came Sidon and Heth,
      and from them emerged the Jebusites,
      Amorites,
      Girgashites,
      Hivites,
      Arkites,
      Sinites,
      Arvadites,
      Zemarites,
      and Hamathites.
    </p>

    <p>
      These Canaanite tribes later occupied the land
      stretching from Sidon
      toward Gaza,
      and eastward toward the cities of
      Sodom,
      Gomorrah,
      Admah,
      Zeboiim,
      and Lasha.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      Sam (may Allah be pleased with him)
      fathered
      Elam,
      Asshur,
      Arphaxad,
      Lud,
      and Aram.
      <sup>7</sup> Aram fathered
      Uz,
      Hul,
      Gether,
      and Mash.

      Arphaxad fathered
      Shelah,
      and Shelah fathered Eber.

      Eber had two sons.

      The first was named Peleg,
      meaning “division,”
      because humanity was divided during his time.

      The second was named Joktan.

      Joktan fathered
      Almodad,
      Sheleph,
      Hazarmaveth,
      Jerah,
      Hadoram,
      Uzal,
      Diklah,
      Obal,
      Abimael,
      Sheba,
      Ophir,
      Havilah,
      and Jobab.

      They lived in the region stretching from Mesha
      to the eastern hill country of Sephar.
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          This genealogy appears in Ibn Ishaq’s “Sirah”
          and in many other classical works,
          including Ibn Sa‘d’s “Tabaqat”,
          al-Tabari,
          Ibn Qutaybah,
          al-Mas‘udi,
          and Ibn Asakir.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      Peleg fathered Reu,
      Reu fathered Serug,
      Serug fathered Nahor,
      and Nahor fathered Terah,
      <sup>8</sup> who later became the father of
      Ibrahim (peace be upon him).
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>
          The father of Ibrahim (peace be upon him)
          is also known by the name Azar
          (Surah Al-An‘am 6:74).
        </p>
      </div>
    )}
  </div>
</main>
  
  );
}