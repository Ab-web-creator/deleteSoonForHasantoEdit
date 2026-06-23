'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';


export default function TheFall() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “En Wij zeiden:
      ‘O Adam, woon jij en jouw echtgenote in het Paradijs
      en eet daar vrijelijk waar jullie maar willen.
      Maar nader deze boom niet,
      anders zullen jullie tot de onrechtplegers behoren.’”
      <span className="vitalic">
        {' '} (Qur'an, Soera Al-Baqarah 2:35).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Op een dag kwam Shaytan naar Moeder Hawwa رضي الله عنها
      in de gedaante van een slang en vroeg:

      “Heeft Allah jullie werkelijk verboden
      van enige boom in de tuin te eten?”
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> Het doel van Shaytan was
          de aandacht van Hawwa te vestigen
          op één bepaalde zaak —
          de Boom van de Kennis van Goed en Kwaad.
        </p>
      </div>
    )}

    <p>
      “Wij mogen eten van alle bomen in de tuin,”
      antwoordde onze moeder Hawwa.

      “Allah heeft ons slechts één boom verboden.

      Hij zei:
      ‘Eet niet van zijn vruchten
      en raak hem zelfs niet aan,
      anders zullen jullie sterven.’”
    </p>

    <p>
      “Nee, jullie zullen niet sterven,”
      zei Shaytan.

      “Allah heeft dat bewust tegen jullie gezegd.

      Want als jullie van deze boom eten,
      zullen jullie ogen geopend worden.

      Dan zullen jullie kennis hebben
      van goed en kwaad.”
    </p>

    <p>
      Moeder Hawwa رضي الله عنها
      kon haar ogen niet van de vrucht afhouden.

      Zij leek mooi,
      heerlijk
      en begeerlijk.

      Terwijl zij dacht:

      “Als ik hiervan eet,
      zal ik wijsheid verkrijgen,”

      plukte zij de vrucht
      en at ervan.

      Daarna gaf zij ook aan haar echtgenoot,
      die naast haar stond,
      en ook hij at ervan.
    </p>
  </div>

  <div className="paragraph_heading mt-10">
    <p className="boldItalic spec_font">
      “Zo was Adam ongehoorzaam aan zijn Heer
      en dwaalde hij af.”
      <br />
      <span className="vitalic">
        (Soera Ta-Ha, ayah 121).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Op deze manier probeerde Shaytan
      Allah als onwaarachtig voor te stellen.

      “Hij heeft dat alleen maar bewust tegen jullie gezegd,”
      beweerde hij.
    </p>

    <p className="vitalic">
      “Ach,”
      zou onze moeder Hawwa misschien gedacht hebben,

      “betekent dit dat Allah niet wil
      dat wij bepaalde dingen weten?”
    </p>

    <p className="vitalic">
      Wat was de influistering van Shaytan?

      “Als jullie van deze boom eten,
      zullen jullie worden als goden.

      Hoe lang willen jullie onwetend blijven?

      Willen jullie dan niet weten
      wat goed en wat kwaad is?”

      Dat was de verborgen betekenis
      van zijn woorden.
    </p>

    <p className="vitalic">
      En wat zou Hawwa gedacht kunnen hebben?

      “Als Allah dit voor ons verborgen houdt,
      houdt Hij dan werkelijk van ons?”

      Wat moest er dan gebeuren?

      Als Allah het niet geeft,
      moeten wij het dan zelf nemen?

      “Neem het.
      Ga je gang.
      Wees niet bang,”
      leek de influistering te zeggen.

      “Als je alleen op Allah vertrouwt,
      zul je nooit vooruitkomen.”
    </p>

    <p className="vitalic">
      Zo kozen onze vader Adam
      en moeder Hawwa,
      die tot dan toe hadden geleefd
      door Allahs leiding te zoeken,
      op Hem te vertrouwen
      en zich aan Hem toe te vertrouwen,

      ervoor zelfstandig te handelen
      en zonder Zijn leiding verder te leven.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE GEVOLGEN</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Zo misleidde hij hen
      en bracht hij hen ten val.

      Toen zij van de boom proefden,
      werd hun schaamte zichtbaar voor hen,
      en zij begonnen zich te bedekken
      met bladeren uit het Paradijs.”
      <span className="vitalic">
        {' '} (Qur'an, Soera Al-A‘raf 7:22).
      </span>
    </p>

    <p>
      Onmiddellijk werden hun ogen geopend
      en beseften zij
      dat zij naakt waren.

      Daarom maakten zij voor zichzelf
      bedekkingen van vijgenbladeren.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Toen de koele avondwind begon te waaien,
      daalde de Majesteit van Allah neer over de tuin.

      Adam en Hawwa werden{' '}
      <span className="vitalic">door angst overvallen.</span>

      Zij vluchtten weg
      en verborgen zich tussen de bomen.
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup> Zonde brengt gevoelens van schuld
          en schaamte voort.

          De schaamte van Adam
          en zijn poging zich te verbergen
          worden vermeld door Ahmad ibn Hanbal
          in “Az-Zuhd”,
          evenals door al-Tabari,
          al-Tha‘labi
          en Ibn al-Athir.
        </p>
      </div>
    )}

    <p>
      “Waar zijn jullie?”
      riep Allah.
    </p>

    <p>
      “Ik hoorde Uw komst
      en werd bang,”
      antwoordde Profeet Adam alayhis-salam,

      “omdat ik naakt ben.”
    </p>

    <p>
      “Wie heeft jou verteld
      dat je naakt bent?

      Heb je gegeten van de boom
      waarvan Ik jou had bevolen
      niet te eten?”
    </p>

    <p>
      “De vrouw die U mij hebt gegeven,
      heeft mij van de vrucht gegeven,”
      antwoordde Profeet Adam alayhis-salam.

      “En toen heb ik ervan gegeten.”
    </p>

    <p>
      Vervolgens zei Allah tegen Hawwa:

      “Wat heb jij gedaan?”

      Zij antwoordde:

      “De slang heeft mij misleid
      en ik heb gegeten.”
    </p>
        <p>
      Allah zei tegen de slang:

      “Vanwege wat jij hebt gedaan,
      ben jij vervloekt boven alle dieren.

      Op jouw buik zul je kruipen
      zolang je leeft,
      en stof zal jouw voedsel zijn.

      Ik zal vijandschap plaatsen
      tussen jou en de vrouw,
      en tussen jouw nakomelingen
      en de hare.

      Jij zult hem in zijn hiel bijten,
      maar hij zal jouw kop vermorzelen.”
    </p>

    <p>
      Vervolgens zei Hij tegen Hawwa:

      “Met moeite en pijn
      zul jij kinderen baren.

      Jouw verlangen zal uitgaan naar jouw echtgenoot,
      en hij zal verantwoordelijkheid over jou dragen.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Tegen Profeet Adam alayhis-salam zei Hij:

      “Omdat jij naar jouw vrouw hebt geluisterd
      en gegeten hebt van de vrucht
      die Ik jou verboden had,

      zal de aarde vanwege jou vervloekt zijn.
      <sup>3</sup>{' '}

      Met moeite zul jij
      je levensonderhoud verdienen
      gedurende heel je leven.

      De aarde zal doornen voortbrengen
      en jou veel moeite bezorgen.

      In het zweet van jouw voorhoofd
      zul jij je brood verdienen,
      totdat jij terugkeert naar de aarde.

      Want uit stof ben jij genomen
      en tot stof zul jij terugkeren.”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup> Door de zonde
          kwam er een vloek over de aarde.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE VERBANNING UIT HET PARADIJS</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      “Toen liet Shaytan hen uitglijden
      en verdreef hij hen uit de toestand
      waarin zij zich bevonden.
      <sup>4</sup>

      En Wij zeiden:

      ‘Daal af!

      Jullie zullen vijanden van elkaar zijn.

      Op aarde zullen jullie verblijven
      en voor een bepaalde tijd voorziening ontvangen.’”
      <span className="vitalic">
        {' '} (Soera Al-Baqarah 2:36).
      </span>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup> Profeet Adam alayhis-salam
          werd op een vrijdag uit het Paradijs verdreven
          (Tirmidhi, Ibn Majah, Muslim).

          Ook zijn tawbah werd op een vrijdag aanvaard
          (Abu Dawud).
        </p>
      </div>
    )}

    <p>
      Vervolgens maakte Allah kleding van huiden
      voor Adam en Hawwa en zei:

      “De mens heeft kennis van goed en kwaad gezocht
      voordat daarvoor de tijd gekomen was.

      Laat hem nu niet ook eten
      van de Boom des Levens
      en voor altijd blijven leven.

      Laat hem gaan
      en de aarde bewerken.”
    </p>

    <p>
      Zo werden zij uit de tuin verdreven.

      <span className="vitalic">
        {' '}
        Zij werden beroofd van het leven
        in de nabijheid van Allah.
      </span>
    </p>

    <p>
      Bij de ingang van de tuin
      plaatste Allah wakers,
      en de weg werd bewaakt
      zodat niemand terug kon keren.
    </p>

    <p className="vitalic">
      Door de zonde
      werd de mens beroofd
      van het verblijven in de nabijheid van Allah.

      Het ware leven,
      het gezegende leven,
      is het leven met Allah.
    </p>

    <p className="vitalic">
      En hoe moeten wij dan een leven noemen
      zonder Allah?

      Dood?
    </p>

    <p className="vitalic">
      Jazeker.

      Dood betekent in zijn diepste betekenis:
      scheiding.

      Iemand die sterft,
      wordt gescheiden van familie,
      verwanten
      en geliefden.
    </p>

    <p className="vitalic">
      Maar de zwaarste dood van allemaal
      is de scheiding van Allah
      en van Zijn nabijheid.

      Allah zei niet zonder reden:

      “Op de dag dat jullie ervan eten,
      zullen jullie de dood ontmoeten.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>WAT IS ER WERKELIJK GEBEURD?</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Misschien vraag je je af:

      “Wat is hier eigenlijk zo ernstig aan?”
    </p>

    <p className="vitalic">
      Als er geen zonde was geweest,
      zouden wij nooit verwijderd zijn
      uit de nabijheid van Allah.

      Er is nu een barrière tussen ons gekomen.
    </p>

    <p className="vitalic">
      Als er geen zonde was geweest,
      zouden er geen ziekten zijn
      en geen dood.

      Allah schiep Adam alayhis-salam niet
      om ziek te worden
      of om na een bepaald aantal jaren te sterven.
    </p>

    <p className="vitalic">
      Als er geen zonde was geweest,
      zouden er geen wrok,
      bitterheid,
      misverstanden,
      woede
      of haat bestaan tussen mensen.

      Allah schiep de mensheid
      om elkaar barmhartigheid te tonen
      en zuivere, mooie relaties op te bouwen.
    </p>

    <p className="vitalic">
      Kijk om je heen.

      Geen van de slechte dingen
      die je vandaag ziet,
      bestond in het begin.

      Allah schiep de mensheid
      voor een mooi leven,
      voor het ware leven.

      De zonde veranderde de wereld.
    </p>

    <p className="vitalic">
      Allah schiep ons ook
      om de aarde te verzorgen
      en te bebouwen.

      Maar tegenwoordig doet de mens vaak het tegenovergestelde:

      de aarde wordt vervuild,
      het water wordt vervuild,
      de lucht wordt vervuild...

      De mens leeft niet meer
      zoals Allah het bedoeld heeft.
    </p>

    <p className="vitalic">
      Het ergste van alles is dat de mens
      werd beroofd van de nabijheid van Allah.

      Wij werden verdreven —
      verdreven van onze Heer.
    </p>

    <p className="boldItalic">
      “Daarop ontving Adam woorden van zijn Heer,
      waarna Hij zijn tawbah aanvaardde.

      Voorwaar,
      Hij is de Aanvaarder van Tawbah,
      de Meest Barmhartige.

      Wij zeiden:

      ‘Daal allen af.

      Wanneer er leiding van Mij tot jullie komt,
      volg die dan.

      Wie Mijn leiding volgt,
      zal geen angst kennen
      en niet bedroefd zijn.’”
      <span className="vitalic">
        {' '} (Soera Al-Baqarah 2:37–38).
      </span>
    </p>

    <div className="flex items-center justify-center gap-3 my-8 text-brand-500">
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></span>
      <span className="text-xl">❖</span>
      <span className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent"></span>
    </div>

    <p className="vitalic">
      Er bestaat ook een hadith
      over het volgen van de leiding
      die Allah heeft gezonden.

      Abu Hurayrah رضي الله عنه overlevert
      dat de Profeet Muhammad ﷺ zei:
    </p>

    <p className="vitalic">
      “Tijdens een van zijn vertrouwelijke gesprekken
      met zijn Heer
      vroeg Musa alayhis-salam om zeven zaken.

      Zes daarvan waren voor hemzelf,
      terwijl de zevende iets was
      waar Musa niet van hield.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Mijn Heer,
      welke van Uw dienaren heeft de meeste taqwa?”

      Allah antwoordde:

      “Degene die Mij voortdurend gedenkt
      en Mij niet vergeet.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Welke van Uw dienaren
      bevindt zich op het meest rechte pad?”

      Allah antwoordde:

      “Degene die Mijn leiding volgt.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Welke van Uw dienaren
      bezit het zuiverste oordeel?”

      Allah antwoordde:

      “Degene die over anderen oordeelt
      zoals hij over zichzelf zou oordelen.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Welke van Uw dienaren
      is het meest geleerd?”

      Allah antwoordde:

      “Degene die nooit tevreden raakt met kennis
      en de kennis van anderen toevoegt
      aan zijn eigen kennis.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Welke van Uw dienaren
      is het meest eervol?”

      Allah antwoordde:

      “Degene die vergeeft,
      ook wanneer hij de macht heeft
      om te straffen.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Welke van Uw dienaren
      is het rijkst?”

      Allah antwoordde:

      “Degene die dankbaar is
      voor wat hem gegeven is.”
    </p>

    <p className="vitalic">
      Hij vroeg:

      “Welke van Uw dienaren
      is het armst?”

      Allah antwoordde:

      “Degene die voortdurend gebrek voelt
      en nooit tevredenheid vindt.”
    </p>
  </div>
</main>
  );
}