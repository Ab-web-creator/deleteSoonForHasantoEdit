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
      “O Nuh, ... verlaat de Ark.”
      <span className="vitalic center">
        {' '}<br />
        (Soera Hud 11:48).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p>
      Nadat het water van de vloed was gezakt
      en de aarde weer droog geworden was,
      kwam de Boodschapper van Allah,
      Profeet Nuh alayhis-salam,
      samen met zijn gezin uit de Ark.

      Vervolgens bracht hij offers aan Allah
      door van elke toegestane diersoort
      één dier te offeren
      en van elke toegestane vogelsoort
      één vogel.
    </p>

    <p>
      Toen zei Allah de Allerhoogste:

      “De mens is van jongs af aan
      geneigd tot zonde.

      Toch zal Ik de aarde
      nooit meer op deze wijze vervloeken,

      en Ik zal nooit meer
      alle levende schepselen vernietigen.

      Zolang de wereld bestaat,
      zullen zaaitijd en oogsttijd,
      warmte en koude,
      zomer en winter,
      dag en nacht
      niet ophouden.”
    </p>
  </div>

  <div className="main_text">
    <p>
      Daarna zegende Hij
      Nuh alayhis-salam
      en zijn zonen
      en zei:

      “Wees vruchtbaar,
      vermeerder jullie
      en vul de aarde!

      De dieren van de aarde,
      de vogels van de hemel
      en de vissen van de zee
      zullen ontzag voor jullie hebben.

      Zoals Ik jullie de groene planten gaf,
      zo plaats Ik nu ook deze onder jullie gezag.

      Maar eet geen dieren
      waarin nog bloed aanwezig is,
      want het leven bevindt zich in het bloed.”
    </p>

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “Ik verbied jullie
      menselijk bloed te vergieten.

      Wie het bloed van een mens vergiet,
      zal daarvoor tegenover Mij rekenschap afleggen.

      Want Ik schiep de mens
      naar Mijn beeld.
      <sup>1</sup>

      Of het nu mens of dier is,
      wie een mensenleven neemt,
      zal de doodstraf verdienen.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>

          Zowel in Sahih al-Bukhari
          als in Sahih Muslim
          wordt een hadith overgeleverd:

          “Allah schiep Adam naar Zijn beeld.”

          Eerder in dit boek
          hebben wij deze hadith reeds genoemd.

          Hoe moet deze uitspraak begrepen worden?

          Als de mens een schepsel is
          en Allah de Schepper,
          kunnen wij dan werkelijk op Allah lijken?

          Wij zijn onvolmaakt,
          gebrekkig
          en vol tekortkomingen.

          De Qur'an zegt:

          “Niets is aan Hem gelijk”
          (42:11).

          Maar moet gelijkenis
          absoluut zijn?

          Imam al-Ghazali schrijft hierover:

          “Het doel van het menselijk leven
          wordt weerspiegeld
          in de betekenissen van
          de Schone Namen van Allah.

          De mens probeert deze Namen na te volgen,
          zich ermee te sieren
          en naar vermogen
          hun betekenissen in zijn karakter te verwezenlijken,
          zodat hij dichter bij al-Haqq kan komen.”
        </p>
      </div>
    )}

    <p>
      “Ik sluit een Ahd met jou,
      jouw nakomelingen
      en alle levende schepselen
      die uit de Ark zijn gekomen —
      iedere vogel
      en ieder dier.

      Nooit meer zal al het leven op aarde
      door een vloed worden vernietigd.

      Zo'n vloed zal nooit meer plaatsvinden.”
    </p>

    <p>
      Allah vervolgde:

      “Ik plaats Mijn regenboog
      tussen de wolken.

      Hij zal het teken zijn
      van Mijn Ahd
      met jou
      en met alle levende schepselen.

      Wanneer de wolken zich verzamelen
      en Mijn regenboog verschijnt,

      zal Ik Mijn Ahd met jullie gedenken.

      Nooit meer zal er een vloed komen
      die al het leven vernietigt.

      Wanneer de regenboog in de wolken verschijnt,
      zal Ik ernaar kijken
      en het eeuwige Ahd gedenken
      dat Ik heb gesloten
      met alle levende schepselen op aarde.

      Dit is het teken van Mijn Ahd
      met alle levende wezens.”
    </p>

    <p className="vitalic">
      Denk aan deze gebeurtenissen
      de volgende keer dat je een regenboog ziet.

      Vergeet nooit:

      Allah verlangt niet naar onze vernietiging;
      Hij verlangt naar onze redding.

      Zoek daarom de weg van de redding.

      Wees niet achteloos met je leven,
      zoals het volk van Nuh alayhis-salam was.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Na de vloed leefde
      Profeet Nuh alayhis-salam
      nog driehonderdvijftig jaar,
      <sup>2</sup>

      totdat hij de leeftijd bereikte
      van negenhonderdvijftig jaar
      en vervolgens overleed.
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
          Zie Soera Al-‘Ankabut, ayah 14.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE NAKOMELINGEN VAN NUH ALAYHIS-SALAM</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Voorwaar,
      Wij zonden Nuh en Ibrahim
      en plaatsten het profeetschap
      en de Openbaring
      onder hun nakomelingen.”
      <span className="vitalic">
        {' '}
        (Soera Al-Hadid 57:26).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      <span className="vitalic">
        Zoals eerder vermeld,
      </span>
      {' '}
      had Profeet Nuh alayhis-salam
      drie zonen
      die de vloed overleefden:

      Sam,
      Ham
      en Yafith
      رضي الله عنهم.
      <sup>4</sup>

      Alle mensen die vandaag op aarde leven,
      stammen af van deze drie zonen
      van Nuh alayhis-salam.
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
          deel 3, p. 405.
        </p>

        <p>
          <sup>5</sup>

          Eén van de zonen van Nuh
          kwam om tijdens de vloed.

          Zoals in de Qur'an wordt verteld,
          zei hij:

          “Ik zal schuilen op een berg,
          die mij tegen het water zal beschermen.”

          Nuh antwoordde:

          “Vandaag is er geen bescherming
          tegen het bevel van Allah,
          behalve voor degene
          aan wie Hij barmhartigheid schenkt.”

          Nuh riep hem op
          om de Ark binnen te gaan,
          maar een golf scheidde hen van elkaar,
          waarna de zoon verdronk.

          (Soera Hud 11:43).
        </p>
      </div>
    )}
  </div>
  <div className="main_text">
    <p>
      Yafith رضي الله عنه
      had zonen met de namen:

      Gomer,
      Magog,
      Madai,
      Javan,
      Tubal,
      Meshech
      en Tiras.

      Gomer kreeg op zijn beurt zonen:

      Ashkenaz,
      Riphath
      en Togarmah.

      Javan kreeg zonen met de namen:

      Elishah,
      Tarshish
      en de voorouders van de volken
      Kittim
      en Rodanim.
    </p>

    <p>
      Ham رضي الله عنه
      had zonen met de namen:

      Cush,
      Mizraim,
      Put
      en Kanaän.

      Cush kreeg zonen met de namen:

      Seba,
      Havilah,
      Sabtah,
      Raamah,
      Nimrod
      en Sabteca.

      Raamah kreeg zonen met de namen:

      Sheba
      en Dedan.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Nimrod —
      de beroemde machtige jager —

      regeerde over het land Shinar,
      een uitgestrekt gebied
      waarin zich de steden bevonden:

      Babylon,
      Erech,
      Akkad
      en Calneh.

      Later trok hij naar Assyrië
      en stichtte daar de steden:

      Nineveh,
      Rehoboth-Ir,
      Calah
      en Resen.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          De stad Resen
          lag tussen Nineveh en Calah.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Uit Mizraim kwamen de volken voort
      die bekend stonden als:

      de Ludim,
      Anamim,
      Lehabim,
      Naphtuhim,
      Pathrusim,
      Caphtorim
      en Casluhim —

      van wie de Filistijnen afstamden.
    </p>

    <p>
      Uit Kanaän kwamen Sidon en Heth voort.

      Uit hun nakomelingen ontstonden later:

      de Jebusieten,
      Amorieten,
      Girgasieten,
      Hivieten,
      Arkieten,
      Sinieten,
      Arvadieten,
      Semarieten
      en Hamathieten.
    </p>

    <p>
      Deze Kanaänitische stammen
      vestigden zich later in het gebied
      dat zich uitstrekte van Sidon
      richting Gaza,

      en verder oostwaarts
      naar de steden:

      Sodom,
      Gomorra,
      Admah,
      Zeboiim
      en Lasha.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      Sam رضي الله عنه
      kreeg zonen met de namen:

      Elam,
      Asshur,
      Arphaxad,
      Lud
      en Aram.
      <sup>7</sup>

      Aram kreeg zonen met de namen:

      Uz,
      Hul,
      Gether
      en Mash.

      Arphaxad kreeg een zoon,
      Shelah,

      en Shelah kreeg een zoon,
      Eber.

      Eber had twee zonen.

      De eerste heette Peleg,
      wat “verdeling” betekent,

      omdat de mensheid
      tijdens zijn leven verdeeld werd.

      De tweede heette Joktan.

      Joktan kreeg zonen met de namen:

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
      Havilah
      en Jobab.

      Zij leefden in het gebied
      dat zich uitstrekte van Mesha
      tot aan het oostelijke bergland van Sephar.
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>

          Deze genealogie wordt vermeld
          in de “Sirah” van Ibn Ishaq
          en in vele andere klassieke werken,

          waaronder de “Tabaqat” van Ibn Sa'd,
          al-Tabari,
          Ibn Qutaybah,
          al-Mas‘udi
          en Ibn Asakir.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      Peleg kreeg een zoon,
      Reu.

      Reu kreeg een zoon,
      Serug.

      Serug kreeg een zoon,
      Nahor.

      Nahor kreeg een zoon,
      Terah,
      <sup>8</sup>

      die later de vader werd van
      Ibrahim alayhis-salam.
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>

          De vader van Ibrahim alayhis-salam
          staat ook bekend onder de naam Azar
          (Soera Al-An‘am 6:74).
        </p>
      </div>
    )}
  </div>
</main>  
  );
}