// app/qisas-nl-chapters/tawrat/adam-alayhissalam/index.tsx

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
    'bubble8',
  ]);

return (
<main className="stories relative">
  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Volgens wat in de Edele Qur’an geschreven staat,
      schiep Allah de Verhevene Adam alayhis-salam uit de aarde —
      uit klei
      (Soera Sad 38:71)
      <sup>1</sup>.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> Qur’an-ayah:
          “Gedenk toen jouw Heer tegen de engelen zei:
          ‘Voorwaar, Ik schep een mens uit klei.
          Wanneer Ik hem dan gevormd heb
          en in hem van Mijn Geest heb geblazen,
          val dan voor hem neer in sajdah.’
          Toen wierpen alle engelen zich gezamenlijk neer”
          (Soera Sad 38:71-73).
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
    <p>DE SCHEPPING VAN ADAM</p> <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Allah, Machtig en Majestueus,
      vormde de mens uit het stof van de aarde
      en blies in zijn neusgaten
      de adem van het leven vanuit Zijn eigen Geest,
      en de mens begon te ademen.

      <span className="vitalic">
        {' '}
        In die tijd
        was er geen ander mens
        op het aangezicht van de aarde behalve hij.<sup>2</sup>
      </span>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup> Volgens de edele ahadith
          werd Adam alayhis-salam op een vrijdag geschapen
          (Muslim, Abu Dawud, Tirmidhi, Ibn Majah).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Daarna schiep Allah, Machtig en Majestueus,
      een tuin op een plaats die Eden genoemd werd
      en vulde die met prachtige bomen
      die zoete vruchten droegen.

      Midden in de tuin
      groeiden twee bomen:
      de ene was de Boom van het Leven,
      en de andere was de Boom van de Kennis van Goed en Kwaad.

      Allah de Verhevene plaatste Adam alayhis-salam daar,
      zodat hij voor de tuin zou zorgen.
    </p>

    <p  className='cursor-pointer' onClick={() => toggleBubble('bubble3')}>
      Daarna waarschuwde Hij hem:

      “Je mag eten van de vruchten
      van elke boom in de tuin.

      Maar eet niet van de Boom
      van de Kennis van Goed en Kwaad.

      Op de dag dat je daarvan eet,
      zul je zeker sterven!”<sup>3</sup>
    </p>
 {openBubbles['bubble3'] && (
   <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
    <p className="vitalic">
      <sup>3</sup> In Soera Ta-Ha
      staat geschreven dat Allah de Verhevene
      Adam alayhis-salam waarschuwde voor Shaytan:

      <span className="boldItalic">
        {' '}
        “O Adam,
        voorwaar, hij is een vijand voor jou
        en voor jouw vrouw.
        Laat hem jullie beiden dus niet uit het Paradijs verdrijven,
        waardoor jij ongelukkig wordt”
      </span>
      {' '}
      (20:117).
    </p>
    </div>
 )}
  </div>

  <div className="paragraph_heading">
    <p>DE EERSTE PROFEET</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      Abu Dharr رضي الله عنه,
      een van de edele Sahaba,
      vroeg onze Profeet ﷺ eens:

      “Wie was de eerste profeet?”

      De Boodschapper van Allah ﷺ zei:

      “De eerste boodschapper-profeet was Adam alayhis-salam.
      Allah vormde hem met Zijn eigen Hand,
      blies de geest in hem,
      en schiep hem als een mooie mens.”

      In een andere overlevering van Abu Dharr رضي الله عنه
      wordt gezegd:

      “Ik vroeg de Boodschapper van Allah ﷺ:

      ‘O Boodschapper van Allah,
      behoorde Adam tot de profeten?’

      De Boodschapper van Allah ﷺ antwoordde:

      ‘Zeker,
      Adam was de eerste profeet
      die rechtstreeks met Allah sprak.’”
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup> Abu Ja‘far Muhammad ibn Jarir al-Tabari,
          “Tarikh al-Umam wa al-Muluk”.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>HET BENOEMEN VAN DE DIEREN</p>
  </div>

  <div className="main_text">
    <p>
      <span className="vitalic">
        Terwijl Profeet Adam alayhis-salam door de tuin van het Paradijs liep,
        zag hij de dieren in paren bewegen
        en de prachtige vogels in groepen vliegen.
        Alles was zeer mooi
        en werkelijk wonderlijk.
      </span>
    </p>

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Allah bracht de levende schepselen
      die Hij vóór Adam alayhis-salam had geschapen,
      en Adam gaf namen<sup>5</sup> {" "}
      aan hen allemaal —
      de dieren en de vogels.
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble -mt-10"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup> Soera Al-Baqarah:
          “En Hij onderwees Adam alle namen”
          (2:31).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Het enige wat voor hem nog ontbrak,
      was dat er nog geen geschikte metgezel
      voor hem gevonden was.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup> Dieren hebben ook
          een bepaalde mate van intelligentie gekregen,
          maar zij bezitten niet
          het soort overdenking en redenering
          dat bij de mens gevonden wordt.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading relative">
    <p>DE SCHEPPING VAN MOEDER HAWWA</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      Allah, verheerlijkt en verheven is Hij,
      zei dat het niet goed was
      dat Adam alayhis-salam alleen zou zijn,
      en dat Hij voor hem
      een geschikte echtgenote zou scheppen
      <sup>7</sup>.

      Nadat Adam alayhis-salam de dieren namen had gegeven,
      schiep Allah Moeder Hawwa رضي الله عنها
      uit zijn zijde.
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble -mt-4"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup> In de Shariah
          wordt het belang van het kiezen
          van een geschikte echtgenoot of echtgenote
          bijzonder benadrukt.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      Toen Profeet Adam alayhis-salam Moeder Hawwa voor het eerst zag

      <span className="vitalic">
        {' '}
        (vol vreugde)
      </span>
      , zou hij hebben uitgeroepen:

      “Dus zij bestaat toch!”
      <sup>8</sup>
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble mt-6"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup> Volgens wat geschreven staat
          in het boek “Arais” van Hazrat Tha‘labi,
          liet Allah de Verhevene Adam alayhis-salam slapen
          en schiep Hij Moeder Hawwa
          uit zijn rib.
        </p>
      </div>
    )}

    <p>
      <span className="vitalic">
        Zo waren het vlees en bot van Moeder Hawwa
        oorspronkelijk genomen uit Vader Adam.
        Zoals in de Qur’an wordt gezegd:{' '}
      </span>

      <span className="boldItalic">
        “O mensheid!...
        Jullie Heer schiep jullie uit één enkele ziel,
        en uit haar schiep Hij haar echtgenote...”
      </span>
      {' '}

      <span className="vitalic">
        (Soera An-Nisa 4:1).
      </span>

      {' '}
      Daarom verlaat een mens,
      wanneer hij het huwelijk binnentreedt,
      zijn vader en moeder,
      wordt hij verbonden met zijn vrouw,
      en worden de twee één lichaam.
    </p>
  </div>
</main>
);
}