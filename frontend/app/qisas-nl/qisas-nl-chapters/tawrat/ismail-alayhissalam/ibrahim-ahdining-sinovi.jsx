'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function ZabihAllah() {
  const { openBubbles, toggleBubble } = useSpeechBubbles(['bubble1']);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p className="boldItalic text-center border border-gray-400 rounded-md py-3 px-2">
      “Voorwaar, dit was de duidelijke en onmiskenbare beproeving.”
      <span className="vitalic"> (Surah As-Saffat 37:106).</span>
    </p>
  </div>

  <div
    className="paragraph_heading cursor-pointer"
    onClick={() => toggleBubble('bubble1')}
  >
    <p>
      DE LAATSTE BEPROEVING<sup>1</sup> VAN IBRAHIM
    </p>
    <AlayhS className="text-green-800 font-medium" />
  </div>

  <div className="main_text">
    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Islamitische geleerden verschilden van mening
          over welke van de twee zonen van Ibrahim
          geofferd moest worden.

          Sommigen waren van mening
          dat het Ishaq ibn Ibrahim was,
          terwijl anderen stelden
          dat het Ismail ibn Ibrahim was.

          Beide groepen
          verwezen naar overleveringen
          die aan onze Profeet ﷺ
          worden toegeschreven.

          Degenen die meenden
          dat Ishaq de bedoelde zoon was,
          baseerden zich onder andere
          op overleveringen van
          Ibn Abbas رضي الله عنه.

          Volgens deze overleveringen
          werd de Profeet ﷺ,
          nadat het vers

          <span className="boldItalic">
            {' '}
            “En Wij kochten hem vrij
            met een groot offer”
          </span>

          {' '}
          was genoemd,
          gevraagd:

          “O Boodschapper van Allah,
          wie was de zoon
          die geofferd zou worden?”

          Hij antwoordde:

          “De zoon die geofferd zou worden,
          was Ishaq.”

          Vergelijkbare overleveringen
          zijn ook overgeleverd door
          Abu Hurayrah رضي الله عنه,
          Abdullah ibn Mas‘ud رضي الله عنه,
          Abdullah ibn Ubayd,
          Ibn Thabit,
          Abu Maysarah,
          Abu Malik,
          Masruq
          en anderen.

          <br />
          <br />

          Ka‘b al-Ahbar overleverde ook:

          “Toen Ibrahim عليه السلام
          de opdracht kreeg
          zijn zoon te offeren,
          ging Shaytan naar Sarah en zei:

          ‘Weet jij
          waar Ibrahim
          jouw zoon naartoe heeft meegenomen?’

          Zij antwoordde:

          ‘Zij zijn hout gaan verzamelen.’

          Shaytan zei:

          ‘Nee.
          Hij heeft hem meegenomen
          om hem te slachten.’

          Sarah antwoordde:

          ‘Onmogelijk.
          Een vader zou zijn eigen zoon
          nooit slachten.’

          Shaytan zei:

          ‘Hij beweert
          dat Allah hem dat heeft bevolen.’

          Sarah antwoordde:

          ‘Als Allah hem dat werkelijk heeft bevolen,
          dan doet hij er goed aan
          zijn Heer te gehoorzamen.’

          Daarna ging Shaytan
          naar de jongen en zei:

          ‘Weet jij
          waar jouw vader je naartoe brengt?’

          Hij antwoordde:

          ‘Om een bevel van Allah uit te voeren.’

          Shaytan zei:

          ‘Hij wil jou slachten.’

          De jongen antwoordde:

          ‘Als Allah hem dat heeft bevolen,
          laat hem dan doen
          wat hem is opgedragen.’

          Daarna ging Shaytan
          naar Ibrahim عليه السلام
          om hem van gehoorzaamheid af te brengen,
          maar Ibrahim wees hem af.

          <br />
          <br />

          Volgens veel geleerden
          is dit een van de redenen
          waarom tijdens de Hajj
          de zuilen symbolisch worden gestenigd,
          als herinnering aan
          Ibrahims afwijzing van Shaytan.

          Talrijke overleveringsketens
          van Ibn Abbas رضي الله عنه
          en andere vroege geleerden
          ondersteunen de opvatting
          dat Ishaq
          de bedoelde offerzoon was.

          Andere geleerden
          beschouwden echter
          Ismail عليه السلام
          als de offerzoon,
          op basis van andere overleveringen
          en tekstuele bewijzen.

          Daarom bleef deze kwestie
          onder de vroege generaties
          onderwerp van wetenschappelijke discussie.
        </p>
      </div>
    )}

    <p>
      Er ging een lange tijd voorbij.
      Toen besloot Allah (s.w.t.)
      op een dag
      de trouw van Ibrahim
      aan het verbond te beproeven:

      <span className="vitalic">
        {' '}
        Ibrahims trouw aan het verbond.
      </span>

      “Ibrahim!”
    </p>

    <p>
      “Labbayk!”
      antwoordde rasulullah (a.s.).
    </p>

    <p>
      “Neem je zoon
      en ga naar het land Moria,”
      zei Allah.

      “Daar,
      op een berg,
      moet je hem
      als offer aan Mij aanbieden.”
    </p>

    <p className="vitalic">
      Stel je voor
      dat jij ook een zoon hebt
      van wie je meer houdt
      dan van je eigen leven —
      een zoon
      die je pas op hoge leeftijd hebt gekregen.

      Stel je nu voor
      dat Allah tegen jou zou zeggen:

      “Offer die zoon aan Mij —
      juist die zoon
      om wie je vijfentwintig jaar hebt gebeden
      en op wie je hebt gewacht.”

      Wat zou er dan
      met jou gebeuren?

      Wat denk je
      dat Ibrahim عليه السلام
      op dat moment voelde?
    </p>

    <p className="vitalic">
      Hij hield zielsveel van zijn zoon.

      “Allah houdt ook van mijn zoon!
      Waarom heeft Hij mij dan bevolen
      hem te offeren?”

      Zulke gedachten
      vulden het hart van de vader.
    </p>

    <p className="vitalic">
      Misschien wilde Allah
      hem daarna weer tot leven brengen?

      “Allah is daar zeker toe in staat,”
      geloofde Ibrahim عليه السلام.

      “Maar wat als Hij hem
      niet terugbrengt?

      Wat zal er dan gebeuren?”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>GEHOORZAAMHEID</p>
  </div>

  <div className="main_text">
    <p>
      De volgende ochtend
      stond Ibrahim (a.s.) vroeg op,
      zadelde zijn ezel,
      kloof hout
      voor het brandoffer,
      nam twee van zijn dienaren mee
      en zijn zoon,
      en vertrok
      naar de plaats
      die Allah hem had aangewezen.
    </p>

    <p>
      Op de derde dag van de reis
      zagen zij de plaats
      al van verre.

      Toen zei de Boodschapper van Allah
      tegen zijn dienaren:

      “Blijf hier.

      Mijn zoon en ik
      zullen daarheen gaan,
      Allah aanbidden,
      en daarna
      weer bij jullie terugkomen.”

      Hij legde het hout
      op de schouders van zijn zoon,
      terwijl hij zelf
      het vuur
      en het mes droeg.

      Samen begonnen zij
      de berg te beklimmen.
    </p>

    <p>
      “Mijn vader,”
      zei de jongen onderweg.

      “Ja, mijn zoon?”

      antwoordde de Boodschapper van Allah.

      “Wij hebben het vuur
      en wij hebben het hout,
      maar waar is het lam
      voor het offer?”
    </p>

    <p>
      “Allah Zelf
      zal voor het offer zorgen,
      mijn zoon,”
      antwoordde Ibrahim alayhis-salam.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ALLAH ZAL VOORZIEN</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Toen hij oud genoeg was
      om met hem mee te gaan,
      zei hij:

      ‘Mijn lieve zoon,
      ik heb in een droom gezien
      dat ik jou offer.

      Vertel mij dus,
      wat denk jij?’

      Hij antwoordde:

      ‘Mijn vader,
      doe wat jou is bevolen.

      Als Allah wil,
      zul je mij
      onder de geduldigen vinden.’”

      <span className="vitalic">
        {' '}
        (Surah As-Saffat 37:102).
      </span>
    </p>

    <p>
      Toen zij de aangewezen plaats bereikten,
      bouwde Ibrahim (a.s.)
      een altaar
      en legde het hout erop.

      Daarna bond hij zijn zoon vast,
      legde hem op het altaar
      en nam het mes in zijn hand
      om hem te offeren.
    </p>

    <p>
      Plotseling
      klonk er een stem uit de hemel:

      “Ibrahim! Ibrahim!”

      “Labbayk!”
      antwoordde de Boodschapper van Allah.

      “Doe de jongen geen kwaad.
      Nu weet Ik
      hoe groot jouw toewijding is,
      want zelfs jouw geliefde zoon
      heb jij Mij niet onthouden.”
    </p>

    <p>
      Toen keek Ibrahim عليه السلام op.

      En zie
      de macht van Allah!

      Vlakbij stond een ram,
      met zijn horens
      verstrikt in een struik.

      Ibrahim ging erheen,
      nam de ram,
      en offerde hem
      in plaats van zijn zoon,
      waarmee het offer
      werd voltooid.
    </p>

    <p>
      (Later
      gaf de Boodschapper van Allah
      die plaats de naam:

      “Allah zal voorzien.”

      Daarom werd onder de mensen
      het gezegde bekend:

      “Op de berg van Allah
      zal Hij Zelf voorzien.”)
    </p>
  </div>

  <div className="paragraph_heading">
  <p>OVER HET BRANDOFFER</p>
</div>

<div className="main_text">
  <p className="vitalic">
    Sommigen vragen zich misschien af:

    Werden offers in die tijd
    werkelijk door vuur verbrand?

    Waarom legde Ibrahim عليه السلام
    eerst hout
    op het altaar?
  </p>

  <p className="vitalic">
    In de geopenbaarde Schriften
    stond dit soort offer bekend als

    <span className="boldItalic">
      {' '}
      “een brandoffer”
    </span>{' '}

    (Zie Surah Aal ‘Imran 3:183).

    Bij dit offer
    werd het hele dier
    aan Allah aangeboden.

    Geen enkel deel van het vlees
    werd achtergehouden.

    Het was een teken
    dat de aanbidder
    zichzelf volledig overgaf
    aan de wil van Allah.

    Er werd niets
    voor zichzelf achtergehouden.
  </p>
</div>

<div className="paragraph_heading">
  <p>WAT IS KOSTBAARDER: DE RAM OF DE ZOON?</p>
</div>

<div className="main_text">
  <p className="vitalic">
    De zoon van Ibrahim
    zou sterven.

    Toch zorgde Allah
    voor een ram
    in zijn plaats.

    Ibrahim (a.s.)
    nam de ram
    en offerde hem
    in plaats van zijn zoon.
  </p>

  <p className="vitalic">
    De Edele Qur’an zegt:

    <span className="boldItalic">
      {' '}
      “En Wij kochten hem vrij
      <span className="vitalic">
        {' '}
        (zijn zoon)
      </span>
      {' '}
      met een groot offer.”
    </span>{' '}

    <span className="vitalic">
      (Surah As-Saffat 37:107).
    </span>
  </p>

  <p className="vitalic">
    Wat denk jij
    was waardevoller:

    de zoon
    of de ram?

    Natuurlijk de zoon.

    Niemand zou zijn eigen kind
    ruilen
    voor duizend rammen.

    Waarom noemt Allah dit dan
    “een groot offer”?
  </p>

  <p className="vitalic">
    Het antwoord is
    dat deze ram
    een symbool was
    van een groter offer
    dat Allah
    in de toekomst zou geven.

    Welk offer was dat?

    Wij zijn niet volmaakt.

    Onze gehoorzaamheid aan Allah
    is niet volmaakt.

    Daarom heeft de mensheid
    behoefte aan
    het volmaakte offer
    dat Allah Zelf geeft.

    Een offer
    is datgene
    wat gegeven wordt
    in plaats van
    onze onvolmaakte gehoorzaamheid.

    Zonder offer
    kunnen wij
    niet volledig delen
    in de zegeningen
    en beloften
    van het verbond.
  </p>
</div>

<div className="paragraph_heading">
  <p>“ALLE VOLKEN ZULLEN GEZEGEND WORDEN DOOR JOUW NAKOMELING”</p>
</div>

<div className="main_text">
  <p>
    Toen zei Allah,
    عز وجل,
    tegen Ibrahim alayhis-salam:

    “Ik zweer bij Mijn Eigen Naam:

    omdat jij Mij hebt vertrouwd,

    omdat jij Mij
    zelfs jouw geliefde zoon
    niet hebt onthouden,

    zal Ik jou
    zeker zegenen.

    Ik zal jouw nakomelingen
    talrijk maken
    als de sterren aan de hemel
    en als het zand
    aan de oever van de zee.

    Omdat jij Mij hebt gehoorzaamd,

    zullen alle volken van de aarde
    gezegend worden
    door jouw zurriyya”
    (nakomeling).
  </p>

  <p className="vitalic">
    Dit was
    een bijzondere zegen —
    een belofte
    over de redding
    die in de toekomst zou komen.

    Door de zonde van Adam
    was de aarde
    onder een vloek gekomen.

    Nu zou
    één van de nakomelingen
    van Ibrahim
    op een dag
    vergeving brengen
    voor de wereld.

    Maar die vergeving
    zou komen
    door het verbond.

    Wie het verbond binnengaat,
    erft het Paradijs.

    Zoals geschreven staat
    in Surah Al-Mu’minun:

    <span className="boldItalic">
      {' '}
      “Degenen die trouw zijn
      aan hun toevertrouwde zaken
      en aan hun verbonden,

      en degenen
      die hun gebeden onderhouden —

      zij zijn de erfgenamen.

      Zij zullen Firdaus erven
      en daarin
      voor eeuwig verblijven.”
    </span>{' '}

    <span className="vitalic">
      (23:8–11).
    </span>
  </p>
</div>

<div className="paragraph_heading">
  <p>HET GELOOF VAN IBRAHIM</p>
  <AlayhS className="text-green-800 font-medium" />
</div>

<div className="main_text">
  <p className="vitalic">
    Ibrahim (a.s.)
    geloofde
    in de beloften van Allah.

    Omdat Allah had gezegd:

    “Jouw nakomelingen
    zullen doorgaan
    via jouw zoon,”

    was hij bereid
    diezelfde zoon
    naar de plaats van het offer
    te brengen.

    Hij geloofde
    met heel zijn hart
    dat Allah
    zijn zoon
    uit de dood kon opwekken.
  </p>

  <p className="vitalic">
    Het is gemakkelijk
    om zulke dingen te zeggen.

    Maar je eigen kind
    naar de dood brengen —

    dat is iets heel anders.

    Alleen iemand
    die werkelijk vertrouwt
    op de goedheid van Allah
    kan zo'n moed tonen.

    Om je aan Allah over te geven,
    moet je eerst geloven
    dat Hij goed is.
  </p>

  <p className="vitalic">
    Wie dichter bij Allah wil komen,
    moet geloven
    dat Hij bestaat
    en dat Hij
    degenen beloont
    die Hem oprecht zoeken.

    Zoek Allah.

    Wie Hem zoekt
    met een oprecht hart,

    zal nooit verstoken blijven
    van Zijn barmhartigheid.
  </p>
</div>
</main>
  );
}