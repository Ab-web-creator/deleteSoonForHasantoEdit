'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EXAMPLE() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
    'bubble9',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p>
      Nadat Ya‘qub عليه السلام daar ongeveer een maand had gewoond,
      vroeg zijn oom hem:

      “Alleen omdat je mijn familielid bent,
      zou je dan zonder loon voor mij moeten werken?

      Vertel mij,
      wat zal ik je betalen voor je dienst?”
    </p>

    <p>
      Laban had twee dochters.

      De oudste heette Leah,
      terwijl de jongste Rachel heette —
      dezelfde jonge vrouw
      die Ya‘qub عليه السلام
      bij de bron had ontmoet
      terwijl zij haar schapen water gaf.

      (Rachel was een vrouw
      van opvallende schoonheid
      en sierlijke gestalte.

      Leah daarentegen
      had een aangename
      en zachte uitstraling.)
    </p>

    <p>
      Ya‘qub عليه السلام
      hield van Rachel.

      Daarom zei hij:

      “Als u mij
      uw jongere dochter Rachel
      tot vrouw geeft,
      zal ik zeven jaar
      voor u dienen.”
    </p>

    <p>
      “Goed,”
      antwoordde Laban.

      “Het is beter
      dat ik haar aan jou geef
      dan aan een vreemde.”

      Zo diende
      Ya‘qub عليه السلام
      zijn oom zeven jaar
      in ruil voor Rachel.

      Maar door zijn liefde
      voor haar
      leken die zeven jaren
      voor hem
      slechts enkele dagen.
    </p>

    <p>
      Toen de zeven jaren
      voorbij waren,
      zei hij tegen Laban:

      “De afgesproken tijd
      is voorbij.

      Sta nu alstublieft toe
      dat het huwelijk plaatsvindt.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>HET HUWELIJK</p>
  </div>

  <div className="main_text">
    <p>
      Laban verzamelde de mensen
      en hield een bruiloftsfeest.

      Maar die nacht,
      in plaats van Rachel te brengen,
      bracht hij zijn oudste dochter Leah
      naar Ya‘qub.

      (Laban had Leah ook
      een dienares gegeven
      genaamd Zilpah
      om haar te dienen.)
    </p>

    <p>
      De volgende ochtend
      keek Ya‘qub عليه السلام —

      en het was Leah
      die naast hem lag,
      niet Rachel!

      “Wat hebt u gedaan?”
      riep hij tegen zijn oom.

      “Ik heb u zeven jaar
      gediend voor Rachel!

      Waarom hebt u mij bedrogen?”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      “Bij ons volk
      wordt de jongere dochter
      niet uitgehuwelijkt
      vóór de oudere,”
      antwoordde Laban.

      “Als je wilt,
      wacht dan één week
      <sup>1</sup>{' '}
      totdat de bruiloftsfeesten
      voorbij zijn.

      Daarna zal ik
      Rachel ook aan jou geven.

      Maar je moet
      nog zeven jaar
      voor mij dienen.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Volgens de gewoonte
          van die tijd
          duurden bruiloftsfeesten
          zeven dagen.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      Ya‘qub عليه السلام
      stemde toe.

      Nadat de bruiloftsweek
      voorbij was,
      gaf Laban ook
      zijn jongere dochter Rachel
      aan Ya‘qub عليه السلام
      tot vrouw.
      <sup>2</sup>{' '}

      (Hij gaf Rachel ook
      een dienares
      genaamd Bilhah.)

      <span className="vitalic">
        {' '}
        Zo kwam Profeet Ya‘qub
        tot het huwelijk.
      </span>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Volgens de gebruiken
          van die tijd
          was het toegestaan
          om met twee zussen
          te trouwen.

          Later werd zo'n praktijk
          in de Shariah verboden.
        </p>
      </div>
    )}

    <p>
      Toch hield
      Ya‘qub عليه السلام
      meer van Rachel
      dan van Leah.

      Daarom diende hij Laban
      nog eens zeven jaar
      voor Rachel.
    </p>

    <p className="vitalic">
      Het klinkt misschien vreemd
      voor moderne oren
      dat Ya‘qub عليه السلام
      veertien jaar werkte
      om met Rachel te kunnen trouwen,
      nietwaar?

      Maar de waarheid is
      dat mensen bereid zijn
      een grote prijs te betalen
      voor wat zij werkelijk waarderen.

      Blijkbaar was het trouwen
      met een rechtschapen
      en geliefde vrouw
      zeer belangrijk
      voor Profeet Ya‘qub.

      Hij verlangde ernaar
      zijn hele leven
      met Rachel door te brengen.
    </p>

    <p className="vitalic">
      Laten wij even
      over onszelf nadenken.

      Wat beschouw jij
      als het belangrijkste
      in het leven?

      Voor welk doel
      zou jij bereid zijn
      je jaren,
      je kracht
      of je bezit
      te besteden?

      Waar besteed jij
      vandaag je tijd aan?

      En is datgene
      wat jouw tijd
      en middelen opeist
      werkelijk
      zo'n offer waard?
    </p>
  </div>
  <div className="paragraph_heading">
  <p>RACHEL EN LEAH</p>
</div>

<div className="main_text">
  <p>
    Allah, de Verhevene,
    zag dat Leah
    minder geliefd was.

    Daarom schonk Hij haar kinderen.

    Rachel daarentegen
    bleef onvruchtbaar.
  </p>

  <p>
    Leah werd zwanger
    en baarde een zoon.

    Zij gaf hem de naam Reuben,
    want zij zei:

    “Allah heeft
    mijn verdriet gezien.

    Nu zal mijn echtgenoot
    van mij houden.”
  </p>

  <p>
    Daarna werd zij opnieuw zwanger
    en baarde nog een zoon.

    Zij noemde hem Simeon.

    Zij zei:

    “Allah heeft gehoord
    dat ik niet geliefd ben,
    daarom heeft Hij mij
    ook deze zoon geschonken.”
  </p>

  <p>
    Vervolgens werd zij
    voor de derde keer zwanger.

    Zij baarde opnieuw een zoon
    en noemde hem Levi.

    Zij zei:

    “Nu zal mijn man
    zich werkelijk
    aan mij hechten,
    want ik heb hem
    drie zonen geschonken.”
  </p>

  <p>
    Daarna werd zij
    opnieuw zwanger.

    Zij baarde een vierde zoon
    en noemde hem Juda.

    Zij zei:

    “Nu zal ik
    Allah prijzen.”

    Daarna kreeg zij
    een tijdlang
    geen kinderen meer.
  </p>
</div>

<div className="main_text">
  <p>
    Toen Rachel zag
    dat zij geen kinderen kreeg,
    werd zij jaloers
    op haar zuster.

    Zij zei tegen
    Ya‘qub عليه السلام:

    “Geef mij kinderen!

    Anders sterf ik!”
  </p>

  <p>
    Ya‘qub عليه السلام
    antwoordde:

    “Ben ik soms Allah,
    Die jou
    kinderen onthoudt?”
  </p>

  <p>
    Toen zei Rachel:

    “Hier is mijn dienares Bilhah.

    Neem haar tot vrouw.

    Als zij kinderen krijgt,
    zullen zij
    als de mijne worden beschouwd.”
  </p>

  <p>
    Zo gaf zij
    haar dienares Bilhah
    aan Ya‘qub عليه السلام
    tot vrouw.

    Bilhah werd zwanger
    en baarde een zoon.
  </p>

  <p>
    Rachel zei:

    “Allah heeft
    recht over mij gesproken.

    Hij heeft
    mijn smeekbede gehoord
    en mij
    een zoon geschonken.”

    Daarom gaf zij hem
    de naam Dan.
  </p>
</div>

<div className="main_text">
  <p>
    Daarna werd Bilhah
    opnieuw zwanger
    en baarde
    een tweede zoon.
  </p>

  <p>
    Rachel zei:

    “Ik heb
    een zware strijd gevoerd
    met mijn zuster,
    en ik heb overwonnen.”

    Daarom noemde zij hem
    Naftali.
  </p>
</div>

<div className="main_text">
  <p>
    Toen Leah zag
    dat zij
    geen kinderen meer kreeg,
    gaf ook zij
    haar dienares Zilpah
    aan Ya‘qub عليه السلام
    tot vrouw.
  </p>

  <p>
    Zilpah werd zwanger
    en baarde een zoon.

    Leah zei:

    “Wat een geluk!”

    Daarom gaf zij hem
    de naam Gad.
  </p>

  <p>
    Daarna baarde Zilpah
    een tweede zoon.

    Leah zei:

    “Hoe gelukkig ben ik!

    De vrouwen
    zullen mij gelukkig prijzen.”

    Daarom noemde zij hem
    Asher.
  </p>
</div>

<div className="main_text">
  <p>
    In de tijd
    van de tarweoogst
    ging Reuben
    het veld in.

    Daar vond hij
    alruinen
    en bracht die
    naar zijn moeder Leah.

    Toen zei Rachel
    tegen Leah:

    “Geef mij alstublieft
    wat van de alruinen
    van jouw zoon.”
  </p>

  <p>
    Leah antwoordde:

    “Is het niet genoeg
    dat je mijn man
    van mij hebt afgenomen?

    Wil je nu ook nog
    de alruinen
    van mijn zoon afnemen?”
  </p>

  <p>
    Rachel zei:

    “Goed dan.

    Laat Ya‘qub
    vannacht bij jou blijven,
    in ruil voor
    de alruinen
    van jouw zoon.”
  </p>

  <p>
    Toen Ya‘qub عليه السلام
    die avond
    van het veld terugkwam,

    ging Leah hem tegemoet
    en zei:

    “Vanavond
    moet je bij mij komen.

    Ik heb je
    verkregen
    voor de alruinen
    van mijn zoon.”

    Zo bleef hij
    die nacht
    bij haar.
  </p>
</div>

<div className="main_text">
  <p>
    Allah verhoorde
    Leah.

    Zij werd opnieuw zwanger
    en baarde
    een vijfde zoon.

    Zij zei:

    “Allah heeft mij
    mijn beloning gegeven,
    omdat ik
    mijn dienares
    aan mijn echtgenoot
    heb gegeven.”

    Daarom noemde zij hem
    Issachar.
  </p>

  <p>
    Daarna werd zij
    opnieuw zwanger
    en baarde
    een zesde zoon.

    Zij noemde hem
    Zebulun.

    Zij zei:

    “Allah heeft mij
    een prachtig geschenk gegeven.

    Nu zal mijn man
    bij mij blijven,
    want ik heb hem
    zes zonen geschonken.”
  </p>

  <p>
    Daarna baarde zij
    een dochter
    en gaf haar
    de naam Dinah.
  </p>
</div>

<div className="main_text">
  <p>
    Vervolgens
    dacht Allah
    ook aan Rachel.

    Hij verhoorde
    haar smeekbede
    en schonk haar
    een zoon.
  </p>

  <p>
    Rachel zei:

    “Allah heeft
    mijn schande
    van mij weggenomen.”

    Daarom gaf zij hem
    de naam Yusuf.

    Zij zei:

    “Moge Allah
    mij nog
    een zoon schenken.”
  </p>

  <p className="vitalic">
    Zo werden
    de twaalf stammen
    van Bani Isra'il
    geboren.

    Uit deze twaalf zonen
    zouden later
    de twaalf stammen
    voortkomen,
    waaruit Allah
    vele profeten
    zou doen opstaan.
  </p>
</div>
</main>
  );
}