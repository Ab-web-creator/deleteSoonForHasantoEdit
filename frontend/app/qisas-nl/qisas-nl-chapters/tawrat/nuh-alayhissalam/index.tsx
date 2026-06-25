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
      “Mijn beloning is alleen bij Allah,” zei{' '}
      <span className="vitalic">(Nuh alayhis-salam).</span>

      {' '}“En mij is bevolen
      tot degenen te behoren
      die zich aan Hem overgeven.”

      Toch verklaarden zij hem tot leugenaar.

      Daarom redden Wij hem
      en degenen die met hem waren in de Ark,
      en maakten Wij hen tot opvolgers op aarde.

      En Wij verdronken degenen
      die Onze tekenen verloochenden.

      Zie dan hoe het einde was
      van degenen die gewaarschuwd werden.”
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> Qur'an, Soera Yunus 10:72–73.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Er verstreek veel tijd.

      {' '}
      <span className="vitalic">
        Naarmate de mensheid zich vermeerderde,
        nam ook de zonde toe.
      </span>

      {' '}
      Het kwaad verspreidde zich overal,
      en de gedachten en verlangens van de mensen
      raakten vervuld van verdorvenheid.

      Allah was hierover niet tevreden,
      want de mensen die Hij had geschapen
      waren in opstand gekomen tegen Zijn wil
      en hadden gekozen
      voor het pad van ongehoorzaamheid.
    </p>

    <p>
      “Ik zal de mensheid
      van het aangezicht van de aarde wegvagen,”
      verklaarde Allah.
    </p>

    <p>
      Maar Nuh alayhis-salam
      vond genade bij Allah.

      Hij was een rechtschapen dienaar,
      gehoorzaam aan zijn Heer,
      en stond onder zijn volk bekend
      als een man van eerlijkheid
      en voortreffelijk karakter.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>HET OORDEEL OVER DE ZONDE</p>
  </div>

  <div className="main_text">
    <p>
      Toen Allah de Allerhoogste zag
      hoe verdorven de mensheid was geworden,
      hoe het geweld zich had verspreid,
      en hoe de aarde gevuld was geraakt
      met zulm (onderdrukking)
      en verderf,

      zei Hij tegen Profeet Nuh alayhis-salam:
    </p>

    <p>
      “De mensen hebben de aarde gevuld
      met zulm en verdorvenheid.

      Nu zal Ik de mensheid vernietigen.

      Bouw een Ark van cipressenhout.

      Maak daarin verschillende vertrekken
      en bestrijk haar van binnen en van buiten
      met pek.

      Plaats haar deur aan de zijkant.

      Ik sta op het punt
      een grote vloed over de aarde te zenden.

      Ik zal alle levende mensen vernietigen.

      Maar met jou zal Ik een Ahd sluiten.

      Ik zal jou bewaren,
      jouw gezin,
      jouw zonen
      en jouw schoondochters
      in de Ark.”
    </p>

    <p>
      Profeet Nuh alayhis-salam
      voerde elk bevel van Allah uit
      precies zoals hem was opgedragen.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Stel je het eens voor:

      De Boodschapper van Allah
      was bezig met de bouw
      van een enorme Ark
      in een land waar geen zee
      en zelfs geen grote rivier was.

      Het schip was ongeveer
      137 meter lang,
      23 meter breed
      en 14 meter hoog.
      <sup>2</sup>

      Zo'n project zou vanzelfsprekend
      vele jaren in beslag nemen.

      Wat zouden de buren van Nuh,
      zijn kennissen
      en zijn stadsgenoten hebben gedacht
      terwijl zij hem jaar na jaar
      aan die Ark zagen bouwen?
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
      Sommigen dachten
      dat hij zijn verstand had verloren.

      Anderen dreven openlijk de spot met hem.

      Wanneer hij hen waarschuwde:

      “Allah staat op het punt
      een vloed over de aarde te zenden!

      Heb berouw
      en keer terug naar Hem!”

      reageerden velen vijandig.

      “Welke vloed?

      Waar heb jij het eigenlijk over?”

      Toch had Allah werkelijk beloofd
      dat er een vloed zou komen.
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          “Het volk van Nuh
          loochende de boodschappers.”
          (Qur'an, Soera Ash-Shu‘ara 26:105).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE VLOED</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Voorwaar,
      Wij zonden Nuh naar zijn volk...

      Maar zij verklaarden hem tot leugenaar.

      Daarom redden Wij hem
      en degenen die met hem waren in de Ark,
      en Wij verdronken degenen
      die Onze tekenen verloochenden.”
      <span className="vitalic">
        {' '}
        (Soera Al-A‘raf 7:59, 64).
      </span>
    </p>

    <p>
      Uiteindelijk brak de vastgestelde tijd aan.

      Allah de Allerhoogste zei tegen
      Nuh alayhis-salam:

      “Ga en betreed de Ark
      met jouw gezin.

      Ik heb op aarde niemand gevonden
      die rechtschapener is dan jij.

      Neem zeven paren mee
      van de reine dieren en vogels,
      zodat hun nakomelingen blijven voortbestaan,

      en één paar van iedere onreine soort,
      mannelijk en vrouwelijk.

      Over zeven dagen
      zal Ik regen op de aarde doen neerdalen
      gedurende veertig dagen
      en veertig nachten,

      en Ik zal ieder levend wezen
      dat Ik heb geschapen uitwissen.”
    </p>
  </div>
    <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Nuh alayhis-salam
      gehoorzaamde elk bevel van Allah
      precies zoals hem was opgedragen.

      Hij verzamelde zijn gezin,
      zijn zonen en hun echtgenotes,
      en betrad de Ark
      <sup>4</sup>
      om gered te worden van de vloed.

      Op dat moment
      was de Boodschapper van Allah,
      Nuh alayhis-salam,
      zeshonderd jaar oud.
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble -mt-10"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          “Stap erin.

          Haar vaart en haar aanlegplaats
          zijn in de Naam van Allah.

          Voorwaar,
          mijn Heer is Zeker Vergevensgezind,
          Meest Barmhartig.”
          (Nuh alayhis-salam,
          Soera Hud 11:41).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Precies zoals Allah had bepaald,
      kwamen dieren en vogels van iedere soort —
      rein en onrein,
      groot en klein,
      mannelijk en vrouwelijk —

      in paren naar Profeet Nuh alayhis-salam
      en gingen de Ark binnen.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup> Zie Soera Hud 11:40.
        </p>
      </div>
    )}

    <p>
      Daarna sloot Allah Zelf
      de deur van de Ark.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Toen begon de vloed.

      De bronnen onder de aarde
      barstten open,
      en de poorten van de hemel
      werden geopend.

      Hevige regen stortte neer op de aarde
      gedurende veertig dagen
      en veertig nachten.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Al-Tabari, “Tarikh”, deel 1, p. 94;
          Al-Zamakhshari, “Al-Kashshaf”,
          deel 4, p. 37.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Gedurende al deze tijd
      verbleven Profeet Nuh alayhis-salam
      en zijn gezin,
      samen met zijn zonen —
      Sam, Ham en Yafith
      رضي الله عنهم —
      en hun echtgenotes,
      veilig binnen in de Ark.
    </p>
  </div>

  <div className="paragraph_heading flex justify-center">
    <p>KWAM IEDEREEN ANDERS OM?</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Wij openden de poorten van de hemel
      met neerstortend water,

      en Wij deden bronnen uit de aarde opwellen.

      Zo ontmoetten de wateren elkaar
      voor een zaak die reeds was bepaald.

      En Wij droegen hem
      op een schip van planken en spijkers.”
      <span className="vitalic">
        {' '}
        (Soera Al-Qamar 54:11–13).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      De vloed duurde veertig dagen.

      Het water steeg steeds hoger
      en tilde de Ark boven de aarde uit.

      Uiteindelijk nam het water zo sterk toe
      dat zelfs de hoogste bergen
      onder het water verdwenen.

      Het water steeg vijftien el
      <sup>7</sup>
      boven de bergtoppen uit.
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          “Vijftien el”:
          zie de tafsirs van
          al-Tabari,
          al-Tha‘labi
          en al-Qurtubi.
        </p>
      </div>
    )}

    <p>
      Ieder levend wezen op aarde kwam om:
      dieren,
      vogels
      en mensen.

      Alles wat op het droge leefde
      en ademhaalde,
      werd vernietigd.

      Van de mens
      tot het vee,
      van de kruipende dieren op aarde
      tot de vogels in de lucht,
      alles werd weggevaagd.

      Alleen Profeet Nuh alayhis-salam
      en degenen die samen met hem
      de Ark waren binnengegaan,
      overleefden.
    </p>

    <p className="vitalic">
      Waarom liet Allah de Allerhoogste
      deze mensen sterven?

      Was het omdat zij weigerden
      afstand te nemen van de zonde?

      Op een dag
      zal ieder van ons
      voor Allah staan
      om geoordeeld te worden.

      Hij zal ons beoordelen
      naar onze daden.

      Waar zullen wij op die Dag
      redding vinden?

      Zal er dan een Ark zijn
      die ons kan redden?

      Of moeten degenen
      die geven om hun Akhirah
      nu al beginnen te zoeken
      naar de Ark van de Redding?
    </p>
  </div>
</main>
  );
}