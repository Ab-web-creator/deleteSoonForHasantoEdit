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
  ]);

return (
<main className="stories relative">
  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Ab: deleted 7 JULY Volgens wat in de Edele Qur’an geschreven staat,
      schiep Allah de Verhevene Adam alayhis-salam
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
      Allah
      vormde de mens uit het stof van de aarde
      en blies in zijn neusgaten
      de leven gevende adem van Zijn Geest,
      en de mens begon te ademen.

      <span className="vitalic">
        {' '}
        In die tijd
        was er behalve Adam (a.s.) geen ander mens
        op de aarde.<sup>2</sup>
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
      Allah schiep een tuin op een plaats die Aden genoemd werd
      en vulde die met prachtige bomen
      die heerlijke vruchten droegen.

      Midden in de tuin
      groeiden twee speciale bomen:
      de ene was de boom van het leven,
      en de andere was de boom van de kennis van goed en kwaad.

      Allah (s.w.t.) plaatste Adam (a.s.) in deze tuin en beval hem dat hij
      voor de tuin zou zorgen.
    </p>

    <p>
      Daarna waarschuwde Hij hem:

      “Het is halal voor jou om te eten van de vruchten
      van elke boom in de tuin, behalve van één. Eet niet van de boom
      van de kennis van goed en kwaad, want op de dag dat je daarvan eet, zul je sterven.”
    </p>

    <p className="vitalic">
      In Soera Ta-Ha
      staat geschreven dat Allah (s.w.t.)
      Adam (a.s.) waarschuwde voor Shaytan:

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

  <div className="paragraph_heading">
    <p>DE EERSTE PROFEET</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      Abu Dharr (r.a.),
      een van de edele Sahaba,
      vroeg de Profeet (s.a.w.) eens:

      “Wie was de eerste profeet?”

      Rasul Allah zei:

      “Adam (a.s.). was de eerste gezonden profeet.
      Allah vormde hem met Zijn eigen Hand, 
      blies de geest in hem,
      en schiep hem als een mooie mens.”

      In een andere overlevering van Abu Dharr (r.a.)
      wordt gezegd:

      “Ik vroeg de Rasul (s.a.w.):

      ‘O Boodschapper van Allah,
      behoorde Adam tot de profeten?’

      De Rasul (s.a.w.) antwoordde:

      ‘Jazeker,
      Adam was de eerste profeet
      die rechtstreeks met Allah sprak.’”
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup> Abu Ja‘far Muhammad ibn Jarir al-Tabari,
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
        Terwijl Adam (a.s) door jannat 'adn liep,
        zag hij de prachtige perfecte schoonheid die hem omringde.
        </span>
    </p>

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Allah (s.w.t) bracht al de levende schepselen
      die Hij had geschapen naar Adam (a.s.)
      zodat hij (a.s.) ze allemaal een naam kon geven.<sup>4</sup> {" "}
      </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup> Soera Al-Baqarah:
          “En Hij onderwees Adam alle namen”
          (2:31).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Nadat hij ze allemaal een naam had gegeven, realiseerde Allah (s.w.t.) dat het Adam (a.s.)
      aan één ding ontbrak. Er was geen geschikte metgezel voor hem.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup> Dieren hebben ook
          een bepaalde mate van intelligentie gekregen,
          maar zij bezitten niet
          het soort overdenking en redenering
          dat bij de mens gevonden wordt.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE SCHEPPING VAN UMM HAWWA</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Voordat Allah, de Verhevene, de dieren aan Adam (a.s.) toonde, openbaarde Hij: "Het is niet goed voor Adam (a.s.) dat hij alleen is.
      Ik zal een geschikte echtgenote voor hem scheppen.
      <sup>6</sup> Nadat Adam (a.s.) de dieren namen had gegeven,
      schiep Allah Umm Hawwa
      uit zijn zijde.
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup> In de Shariah
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
      onClick={() => toggleBubble('bubble7')}
    >
      Toen Adam (a.s.) Umm Hawwa voor het eerst zag
      <span className="vitalic">
        {' '}
      
      </span>
      , riep hij vol vreugde uit:

      “Deze beenderen zijn van mijn beenderen, dit vlees is van mijn vlees; ik noem haar vrouw, want zij was geschapen uit de rib van de man!”
      <sup>7</sup>
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup> Volgens wat geschreven staat
          in het boek “Arais” van Tha‘labi,
          liet Allah (s.w.t. ) Adam (a.s.) slapen
          en schiep Hij Umm Hawwa
          uit zijn rib.
        </p>
      </div>
    )}

    <p>
      <span className="vitalic">
        Zo waren de beenderen en het vlees van Umm Hawwa
        oorspronkelijk genomen uit Adam (a.s.).
        Zoals in de Qur’an al Karim wordt gezegd:{' '}
      </span>

      <span className="boldItalic">
        “O mensheid!...
        Jullie Heer schiep jullie uit één enkele ziel,
        en uit haar schiep Hij zijn echtgenoot...”
      </span>
      {' '}

      <span className="vitalic">
        (Soera An-Nisa 4:1).
      </span>

      {' '}
      Dat is waarom
      wanneer een man trouwt hij zijn ouders verlaat,
      verbonden wordt met zijn vrouw,
      en de twee één lichaam worden.
    </p>
  </div>
</main>
);
}