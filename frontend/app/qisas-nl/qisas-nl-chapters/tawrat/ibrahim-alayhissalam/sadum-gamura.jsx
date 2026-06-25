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
  <div className="mb-8 border border-brand-400 rounded-md px-4">
    <p className="!text-brand-700 !text-sm">
      “Zou Ik voor Ibrahim verbergen
      wat Ik van plan ben te doen?”
      zegt Allah.

      “Ik heb hem uitgekozen,
      zodat hij zijn kinderen
      en zijn huisgezin zal leren
      te wandelen in rechtvaardigheid en gerechtigheid,
      en hen zal leiden op de weg van Allah.

      Want Ik zal de belofte vervullen
      die Ik hem heb gedaan:

      Ik zal uit hem
      een machtig volk doen voortkomen
      en door Ibrahim
      zal Ik zegen verspreiden
      onder alle volken van de aarde.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>HET DOEL VAN HUN BEZOEK</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      Daarna stonden de gasten op
      en gingen op weg naar Sodom.
      <sup>1</sup>{' '}

      De Boodschapper van Allah,
      Ibrahim عليه السلام,
      begeleidde hen
      een eind op hun weg
      om afscheid van hen te nemen.

      Zij zeiden tegen hem:

      “De mensen van Sodom en Gomorra
      zijn diep weggezonken in de zonde.

      De kreten
      van degenen
      die door hen lijden,
      zijn zeer talrijk geworden.

      Daarom zijn wij gekomen
      om deze klachten te onderzoeken,
      die zijn opgestegen
      tot de Hoogste Hemel.”
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
            De Qur'an bevat hierover ook deze verzen:
          </span>{' '}

          “Hij zei:

          ‘O boodschappers,
          wat is jullie opdracht?’

          Zij zeiden:

          ‘Wij zijn gezonden
          naar een zondig volk
          om hen te vernietigen.

          Maar de familie van Lut
          zullen wij volledig redden,
          behalve zijn vrouw.’”
        </p>

        <p className="who_wrote">
          (Surah Al-Hijr 15:57–60)
        </p>

        <p className="vitalic">
          <sup>2</sup>
          De mensen van Sodom en Gomorra
          leefden diep in de zonde
          en begingen schandelijke daden.

          {' '}
          <span className="boldItalic">
            “Onze boodschappers kwamen naar Ibrahim en zeiden:

            ‘Wij gaan de inwoners
            van deze stad vernietigen,
            want zij zijn onrechtplegers.’

            Hij zei:

            ‘Maar Lut is daar!’”
          </span>
        </p>

        <p className="who_wrote">
          (Surah Al-Ankabut 29:31–32)
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE DUʿĀ VAN IBRAHIM عليه السلام</p>
  </div>

  <div className="main_text">
    <p>
      “Mijn Heer,
      zou U werkelijk
      de rechtvaardigen vernietigen
      samen met de goddelozen?”
      bad de Boodschapper van Allah.

      “Als daar vijftig rechtvaardigen zijn,
      zult U de stad dan toch vernietigen?

      U zult de rechtvaardigen toch niet
      samen met de kwaaddoeners vernietigen!

      O Heer der Werelden,
      U oordeelt altijd
      met volmaakte rechtvaardigheid.”
    </p>

    <p>
      “Inderdaad,” antwoordde Allah.
      “Als er vijftig rechtvaardigen
      in Sodom gevonden zouden worden,
      zou Ik de stad sparen.”
    </p>

    <p>
      “Mijn Heer,
      hoewel ik slechts Uw nederige dienaar ben,
      sta mij toe verder te spreken,”
      zei Ibrahim عليه السلام.

      “Wat als er veertig zijn?”
    </p>

    <p>
      “Omwille van veertig mensen
      zou Ik de stad nog steeds sparen,”
      antwoordde Allah.
    </p>

    <p>
      “Mijn Heer,
      wees niet boos op mij
      omdat ik verder spreek.

      Wat als er slechts dertig rechtvaardigen zijn?”
    </p>

    <p>
      “Zelfs als er dertig zijn,
      zal Ik de stad niet vernietigen,”
      antwoordde Allah.
    </p>

    <p>
      “Mijn Heer,
      vergeef mijn vrijmoedigheid;
      wat als er slechts twintig zijn?”

      “Zelfs omwille van twintig,”
      zei Allah.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      Opnieuw vroeg de Boodschapper van Allah,
      nadat hij om vergeving had gevraagd:

      “Wat als er slechts tien zijn?
      Wat zou U dan doen?”

      Allah antwoordde:

      “Zelfs omwille van tien
      zou Ik de stad niet vernietigen.

      {' '}
      <span className="boldItalic">
        Maar Wij vonden daar
        slechts één huisgezin van moslims.”
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
    <p>SLAVEN VAN HUN BEGEERTEN</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      De engelen kwamen
      tegen de avond
      aan in Sodom.

      Toen zij de stad binnengingen,
      zat Profeet Lut (vrede zij met hem)
      <sup>4</sup>{' '}
      op het stadsplein
      bij de stadspoort.

      Toen hij de vreemdelingen zag,
      stond hij op om hen te begroeten
      en zei:

      “Welkom.

      Bewijs mijn huis de eer
      om bij ons te overnachten.

      Breng de nacht bij ons door,
      en morgen kunt u
      uw reis voortzetten.”

      Zij antwoordden:

      “Nee,
      wij zullen overnachten
      op het stadsplein.”

      Maar Lut عليه السلام
      drong erop aan,
      en uiteindelijk
      gingen zij met hem mee naar huis.
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Lut عليه السلام was de profeet
          die naar het volk van Sodom
          werd gezonden.

          Maar het volk
          wees zijn oproep af.

          (Abu al-Faraj Ibn al-Jawzi,
          “Tabsirah”, vol. 1, p. 150.)
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      Na de avondmaaltijd,
      nog voordat iemand was gaan slapen,
      verzamelden mannen,
      jong en oud,
      uit alle delen van Sodom zich
      en omsingelden het huis van Lut عليه السلام.

      Zij riepen:

      “Lut! Lut!
      Waar zijn de mannen
      die vandaag bij jou zijn gekomen?

      Breng hen naar buiten,
      zodat wij ons aan hen kunnen vergrijpen!”
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>

          “Toen de inwoners van de stad hoorden
          dat knappe jonge mannen
          in het huis van Lut waren gekomen,
          kwamen zij juichend aangerend.

          Lut zei:

          ‘Dit zijn mijn gasten!
          Breng mij niet in schande.

          Vrees Allah
          en verneder mij niet!’

          Zij antwoordden:

          ‘Hebben wij jou niet verboden
          je met onze zaken te bemoeien?’

          Lut zei:

          ‘Als jullie dan toch iets willen doen,
          hier zijn mijn dochters.’”
        </p>

        <p className="who_wrote">
          (Surah Al-Hijr 15:67–71)
        </p>
      </div>
    )}

    <p>
      Profeet Lut ging naar buiten,
      sloot de deur achter zich
      en zei:

      “Mijn broeders,
      bega deze zonde niet.

      Hier zijn mijn twee ongehuwde dochters.

      Als jullie willen,
      zal ik hen naar buiten brengen.

      Doe met hen wat jullie willen,
      maar doe deze mannen geen kwaad.

      Zij zijn mijn gasten!”
    </p>

    <p>
      “Ga uit de weg!”
      schreeuwden zij.

      “Wie denk jij wel dat je bent,
      een vreemdeling
      die ons bevelen geeft?

      Wij zullen jou
      nog erger behandelen!”

      Daarna stormden zij
      op Lut (vrede zij met hem) af
      en probeerden de deur open te breken.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble6')}
    >
      Op dat moment
      strekten de gasten binnen
      hun handen uit,
      trokken Lut naar binnen
      en sloten de deur.

      Daarna sloegen zij
      alle mannen buiten
      met blindheid,
      van de oudste
      tot de jongste.
      <sup>6</sup>{' '}

      Omdat zij niets meer konden zien,
      kon niemand zelfs de deur nog vinden.
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>{' '}
          <span className="boldItalic">
            “Toen maakten Wij hun ogen blind.”
          </span>{' '}
          <span className="vitalic">
            (Surah Al-Qamar 54:37).
          </span>
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE BESTRAFFING VAN DE ZONDE</p>
  </div>

  <div className="div_with_borders">
    <p className="boldItalic">
      “Voorzeker,
      Wij hebben vóór jou
      boodschappers
      naar andere volken gezonden.

      Wij troffen hen
      met moeilijkheden en ellende,
      opdat zij zich zouden vernederen.

      Waarom vernederden zij zich niet
      toen Onze bestraffing tot hen kwam?

      Integendeel,
      hun harten werden hard,
      en Shayṭān liet hun daden
      mooi lijken.”
      <span className="vitalic">
        {' '}
        (Surah Al-An‘am 6:42–43).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p>
      “Wij staan op het punt
      deze stad volledig te vernietigen,”
      zeiden de engelen tegen Lut (a.s.).

      “De klachten tegen deze mensen
      zijn zo talrijk geworden,
      dat Allah ons heeft gezonden
      om de stad te vernietigen.

      Wie heb je hier nog meer?

      Verzamel hen allemaal
      en vertrek onmiddellijk.”
    </p>

    <p className="vitalic">
      Wat denk jij?

      Als de hele bevolking
      van een stad
      zo diep in de zonde leefde,
      wie riep er dan
      tot Allah om hulp
      tegen hen?
    </p>

    <p className="vitalic">
      Stel je voor
      dat jij met je gezin
      naar zo'n stad zou reizen.

      De mensen van Sodom
      waren niet gastvrij.

      Waar zou je overnachten?

      Waarschijnlijk op straat.

      Maar als je op straat bleef,
      wat zouden zij dan met je doen?

      En tot wie zou je om hulp roepen?

      Tot Allah.

      Volgens de engelen
      waren er zóveel noodkreten
      tegen deze mensen opgestegen,
      dat het nauwelijks voor te stellen is.
    </p>

    <p>
      Daarna ging Lut (a.s.)
      naar de mannen
      die met zijn dochters verloofd waren
      en zei:

      “Snel!

      Wij moeten deze plaats verlaten.

      Allah staat op het punt
      de stad te vernietigen!”

      Maar zij dachten
      dat hij een grap maakte.
    </p>

    <p>
      Bij het aanbreken van de dag
      spoorden de engelen
      Lut (a.s.) aan:

      “Snel!
      Neem je vrouw
      en je dochters mee
      en vertrek,
      anders zul jij ook omkomen.”
    </p>

    <p>
      Toch aarzelde hij.

      Toen,
      zie de barmhartigheid van Allah:

      de engelen namen hem,
      zijn vrouw
      en zijn twee dochters
      bij de hand
      en leidden hen
      buiten de stad.
    </p>

    <p>
      “Blijf nergens stilstaan,”
      zei een van de engelen.

      “Kijk niet achterom.

      Vlucht naar de bergen,
      anders zul je omkomen.”
    </p>

    <p>
      “Nee, mijn heer,”
      smeekte Lut (a.s.).

      “U hebt ons grote goedheid bewezen
      door ons leven te redden.

      Maar wij kunnen de bergen
      niet bereiken.

      De ramp zal ons inhalen
      voordat wij daar aankomen.

      Kijk,
      daar ligt een klein stadje,
      heel dichtbij.

      Sta ons toe
      daarheen te vluchten
      en ons leven te redden.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble7')}
    >
      “Goed,”
      antwoordde de engel.

      “Ik zal je verzoek inwilligen.

      Ik zal het stadje
      dat jij noemde
      niet vernietigen.

      Maar haast je
      en red jezelf.

      Want ik kan niets doen
      totdat jij daar bent aangekomen.”

      (Daarom kreeg die stad
      later de naam Zoar.)
      <sup>7</sup>
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          De naam “Zoar”
          betekent
          “klein”.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble8')}
    >
      Lut (a.s.) bereikte Zoar
      juist toen de zon opkwam.

      Daarna liet Allah,
      de Allerhoogste,
      brandende stenen
      uit de hemel regenen
      op Sodom en Gomorra.

      De andere steden
      en dorpen van de vallei,
      samen met alle levende wezens,
      planten
      en bomen,
      werden volledig vernietigd.
      <sup>8</sup>{' '}

      De vrouw van Lut عليه السلام
      keek achterom
      en veranderde
      in een zoutpilaar.
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>{' '}
          <span className="boldItalic">
            “Terwijl zij doelloos ronddwaalden
            in hun verblinding,
            trof hen bij zonsopgang
            de machtige schreeuw.

            Daarna keerden Wij de stad
            ondersteboven
            en lieten stenen
            van gebakken klei
            op hen neerdalen.

            Daarin zijn zeker tekenen
            voor degenen
            die nadenken.”
          </span>{' '}
          <span className="vitalic">
            (Surah Al-Hijr 15:72–75).
          </span>
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble9')}
    >
      Vroeg in de ochtend
      vertrok Profeet Ibrahim (a.s.)
      naar de streek van Sodom.

      Toen hij de vallei naderde,
      keek hij van verre
      naar Sodom en Gomorra.

      Overal steeg rook op,
      als rook uit een oven.

      Toen Allah
      deze steden vernietigde,
      redde Hij Lut (a.s.)
      omwille van Ibrahim
      (vrede zij met hem).
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
            “Wij redden hem
            en zijn familie,
            behalve zijn vrouw,
            die behoorde
            tot degenen
            die achterbleven.”
          </span>{' '}
          <span className="vitalic">
            (Surah Al-A‘raf 7:83).
          </span>
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE GEBOORTE VAN PROFEET ISHAQ</p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p>
      Allah vervulde Zijn belofte.

      Onze moeder Sarah (r.a.) werd zwanger
      en baarde
      op de vastgestelde tijd
      een zoon
      voor Ibrahim عليه السلام.
    </p>

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble10')}
    >
      De Boodschapper van Allah
      gaf zijn zoon
      de naam Ishaq
      en besneed hem,
      zoals Allah had bevolen,
      op de achtste dag.

      Op dat moment
      was Ibrahim عليه السلام
      honderd jaar oud.
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
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble11')}
    >
      “Allah heeft mij
      laten lachen,”
      zei Sarah (r.a.).

      “Iedereen
      die dit hoort,
      zal met mij meeglachen.
      <sup>11</sup>{' '}

      Wie had ooit gedacht
      dat ik nog een kind
      zou voeden?

      Toch heb ik
      op hoge leeftijd
      een zoon gebaard
      voor mijn heer!”
    </p>

    {openBubbles['bubble11'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble11')}
      >
        <p>
          <sup>11</sup>
          De naam “Ishaq”
          betekent:
          “hij lacht.”
        </p>
      </div>
    )}
  </div>
</main>
  );
}