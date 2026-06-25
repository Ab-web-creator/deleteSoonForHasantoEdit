'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Isaak() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
  ]);

  return (
<main className="stories relative">
  <div className="decor_line"></div>

  <div className="main_text">
    <p>
      <span className="vitalic">
        Er ging veel tijd voorbij.
        Daarna overleed ook onze moeder Sarah رضي الله عنها.
      </span>
      {' '}
      Ibrahim عليه السلام had toen een hoge leeftijd bereikt,
      en Allah, Verheven en Geprezen,
      had hem in alle opzichten gezegend.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>HET HUWELIJK VAN ISHAQ</p>
    <AlayhS className="text-green-800 font-medium" />
  </div>

  <div className="main_text">
    <p>
      Op een dag riep Profeet Ibrahim (a.s.)
      zijn meest vertrouwde dienaar bij zich:
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      “Kom hier!
      Zweer mij dat je voor mijn zoon Ishaq
      geen vrouw zult nemen
      uit de Kanaänieten.
      <sup>1</sup>{' '}

      In plaats daarvan
      moet je naar mijn verwanten gaan
      en uit hun midden
      een bruid voor hem terugbrengen.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Het land Kanaän werd bewoond
          door heidense volkeren
          die afgoden aanbaden.
        </p>
      </div>
    )}

    <p>
      “Maar wat als de jonge vrouw
      weigert met mij hierheen terug te keren?”
      vroeg de dienaar.

      “Moet ik uw zoon dan
      terugbrengen naar uw geboorteland?”
    </p>

    <p>
      “Nee!”
      antwoordde rasulullah.

      “Breng mijn zoon daar nooit heen.

      Allah, de Allerhoogste,
      zal Zijn engel met jou meesturen.

      Jij zult voor mijn zoon
      een vrouw terugbrengen
      uit mijn verwanten.

      De God Die mij
      uit mijn geboorteland heeft geleid,
      heeft mij beloofd:

      ‘Ik zal dit land
      aan jouw nakomelingen geven.’

      Als de vrouw weigert mee te komen,
      dan ben je vrij
      van je eed.

      Maar onder geen enkele omstandigheid
      mag je mijn zoon daarheen brengen.”
    </p>

    <p>
      Nadat hij de eed
      tegenover zijn meester had gezworen,
      laadde de dienaar van Ibrahim
      tien kamelen
      met kostbare geschenken
      en ging op reis.

      Uiteindelijk kwam hij aan
      in Aram-Naharaim,
      de streek waar Nahur woonde.
    </p>

    <p>
      Daar liet hij de kamelen knielen
      bij een bron buiten de stad.

      Het was avond,
      en de vrouwen van de stad
      kwamen zoals gewoonlijk
      water putten.
    </p>

    <p>
      Toen hief de dienaar
      zijn handen op in duʿā:

      “O Allah,
      Heer Die een verbond sloot
      met mijn meester Ibrahim!

      Ik smeek U,
      onthoud Uw gunst
      niet aan mijn meester.

      Schenk succes
      aan mijn opdracht.

      Hier sta ik
      bij de bron,
      terwijl de dochters van de stad
      komen om water te putten.

      Als ik tegen een van hen zeg:
      ‘Laat uw kruik zakken,
      zodat ik kan drinken,’

      en zij antwoordt:
      ‘Drink,
      en ik zal ook water putten
      voor uw kamelen,’

      laat zij dan de vrouw zijn
      die U hebt gekozen
      voor Uw dienaar Ishaq.

      Hierdoor zal ik weten
      dat U barmhartigheid hebt getoond
      aan mijn meester Ibrahim...”
    </p>
  </div>
  <div className="paragraph_heading">
  <p>HET ANTWOORD OP DE DUʿĀ</p>
</div>

<div className="main_text">
  <p>
    Nog voordat hij zijn duʿā
    had voltooid,
    kwam een jonge vrouw,
    Rifqah genaamd,
    de dochter van Bethuel,
    aan met een waterkruik
    op haar schouder.

    (Bethuel was de zoon van Nahur,
    de broer van Ibrahim عليه السلام.)
  </p>

  <p>
    Rifqah was buitengewoon mooi.

    Zij daalde af naar de bron,
    vulde haar kruik
    en kwam weer naar boven.
  </p>

  <p>
    De dienaar liep snel naar haar toe
    en zei:

    “Mag ik alstublieft
    een beetje water drinken
    uit uw kruik?”
  </p>

  <p>
    “Drink, heer,”
    antwoordde Rifqah,
    terwijl zij de kruik
    van haar schouder liet zakken.

    Daarna voegde zij eraan toe:

    “Ik zal ook water putten
    voor uw kamelen.”

    Zij rende naar de drinkbak,
    goot het overgebleven water uit,
    en haastte zich
    steeds opnieuw terug naar de bron,
    totdat alle kamelen
    genoeg hadden gedronken.
  </p>

  <p>
    Ondertussen
    keek de dienaar van Ibrahim
    zwijgend naar haar
    en dacht:

    “Het lijkt erop
    dat Allah
    mijn reis heeft gezegend.”
  </p>

  <p>
    Toen de kamelen
    klaar waren met drinken,
    haalde hij
    een kostbare gouden neusring
    en twee grote gouden armbanden tevoorschijn.

    Daarna vroeg hij:

    “Van wie bent u de dochter?

    Is er plaats
    in het huis van uw familie
    zodat wij daar vannacht kunnen verblijven?”
  </p>

  <p>
    “Ik ben de dochter van Bethuel,”
    antwoordde zij.

    “De kleindochter
    van Nahur en Milkah.

    Er is volop plaats
    in ons huis,
    en wij hebben voldoende stro
    en voer
    voor uw kamelen.”
  </p>

  <p>
    Meteen
    boog de dienaar van Ibrahim zich neer
    en verrichtte sujūd
    voor Allah.

    Hij zei:

    “O Allah,
    God van mijn meester Ibrahim!

    Nooit hebt U
    Uw barmhartigheid
    en trouw
    aan mijn meester onthouden.

    Vandaag opnieuw
    hebt U mijn weg geleid
    en mij gebracht
    naar het huis
    van zijn verwanten.

    Alle lof behoort U toe!”
  </p>
</div>

<div className="paragraph_heading">
  <p>IN HET HUIS VAN BETHUEL</p>
</div>

<div className="main_text">
  <p>
    Rifqah rende naar huis
    en vertelde haar familie
    alles wat er was gebeurd.

    Zij had een broer
    die Laban heette.

    Toen hij haar verhaal hoorde
    en de ring
    en de armbanden zag,
    haastte hij zich onmiddellijk
    naar de bron.

    De dienaar van Ibrahim
    stond daar nog steeds
    naast de kamelen.
  </p>

  <p>
    Laban begroette hem
    en zei:

    “Waarom staat u hier?

    Kom naar ons huis.

    Ik heb een plaats
    voor u klaargemaakt,
    en er is ook ruimte
    voor de kamelen.”
  </p>

  <p>
    Zij gingen allemaal
    naar het huis van Laban.

    De dienaren laadden
    de kamelen uit,
    gaven hun voer,
    en brachten water
    zodat de dienaar van Ibrahim
    en zijn reisgenoten
    hun voeten konden wassen.
  </p>

  <p>
    Toen het eten
    werd opgediend,
    zei de dienaar van Ibrahim:

    “Ik zal niet eten,
    voordat ik u verteld heb
    waarom ik gekomen ben.”

    “Goed,”
    zei Laban.

    “Vertel ons
    waarvoor u gekomen bent.”
  </p>

  <p>
    “Ik ben de dienaar
    van Profeet Ibrahim,”
    begon hij.

    “Allah heeft mijn meester
    overvloedig gezegend.

    Hij is een man geworden
    van aanzien
    en grote rijkdom.

    Allah heeft hem
    kudden,
    vee,
    zilver,
    goud,
    dienaren
    en dienaressen geschonken.”
  </p>

  <p>
    Op hoge leeftijd
    schonk zijn vrouw Sarah
    hem een zoon.

    Aan die zoon
    heeft hij nu
    alles nagelaten
    wat hij bezit.
  </p>

  <p>
    Voordat mijn meester
    mij hierheen stuurde,
    liet hij mij zweren
    dat ik geen vrouw
    voor zijn zoon zou nemen
    uit de Kanaänieten.

    In plaats daarvan
    moest ik
    naar zijn geboorteland
    en naar zijn verwanten gaan.
  </p>

  <p>
    Ik vroeg:

    ‘Maar wat als
    de jonge vrouw
    weigert mee te komen?’

    Hij antwoordde:

    ‘Ik wandel
    op de weg van Allah.

    Hij zal Zijn engel
    met jou meesturen
    en jouw reis
    laten slagen.

    Jij zult een vrouw
    voor mijn zoon nemen
    uit mijn verwanten
    en uit het huis
    van mijn vader.

    Als zij weigeren,
    ben jij vrij
    van je eed.’
  </p>

  <p>
    Vandaag,
    bij de bron,
    bad ik:

    ‘O Allah,
    maak mijn weg gemakkelijk.

    Als de jonge vrouw
    tegen wie ik zeg:

    “Laat mij
    een beetje water drinken,”

    antwoordt:

    “Drink,
    en ik zal ook water putten
    voor uw kamelen,”

    dan zal ik weten
    dat zij degene is
    die U
    voor Ishaq hebt uitgekozen.’
  </p>

  <p>
    Terwijl ik
    nog in mijn hart bad,
    kwam Rifqah aan
    met een kruik.

    Zij vulde die
    bij de bron.

    Ik vroeg haar
    om wat water.

    Meteen liet zij
    de kruik zakken
    en zei:

    ‘Drink.’

    Daarna bood zij aan
    ook de kamelen
    water te geven.
  </p>

  <p>
    Nadat de kamelen
    genoeg hadden gedronken,
    vroeg ik:

    ‘Van wie bent u de dochter?’

    Zij antwoordde:

    ‘Ik ben de dochter
    van Bethuel,
    kleindochter
    van Nahur en Milkah.’

    Daarna plaatste ik
    een ring
    in haar neus
    en armbanden
    om haar polsen.

    Vervolgens
    verrichtte ik sujūd
    en prees Allah,
    de God
    van mijn meester Ibrahim,

    Die mij rechtstreeks geleid heeft
    naar de familie
    van de broer
    van mijn meester.

    Dit is het hele verhaal.

    Wat zegt u ervan?

    Wilt u instemmen
    met het verzoek
    van mijn meester?

    Zo niet,
    zeg het mij dan eerlijk,
    zodat ik weet
    wat ik verder moet doen.”
  </p>

  <p>
    Laban en Bethuel
    luisterden
    en antwoordden:

    “Deze zaak
    komt van Allah.

    Wat zouden wij
    daartegen kunnen zeggen?

    Hier is Rifqah.

    Neem haar mee
    en ga.

    Wij stemmen toe.

    Laat haar
    de vrouw worden
    van de zoon
    van uw meester,
    zoals Allah
    heeft bepaald.”
  </p>

  <p>
    Toen de dienaar van Ibrahim
    dit hoorde,
    verrichtte hij sujūd
    voor Allah.

    Daarna haalde hij
    goud,
    zilver,
    prachtige kleding
    en kostbare geschenken tevoorschijn
    en gaf die aan Rifqah.

    Ook haar broer
    en haar moeder
    gaf hij waardevolle geschenken.

    Daarna aten
    en dronken
    hij en zijn reisgenoten
    en brachten daar de nacht door.
  </p>
</div>
<div className="paragraph_heading">
  <p>DE TERUGREIS</p>
</div>

<div className="main_text">
  <p>
    Vroeg de volgende morgen zei hij:

    “Sta mij nu toe
    terug te keren
    naar mijn meester.”
  </p>

  <p>
    Maar de broer van Rifqah
    en haar moeder antwoordden:

    “Haast u niet.

    Laat onze dochter
    nog ongeveer tien dagen
    bij ons blijven.

    Daarna kunt u vertrekken.”
  </p>

  <p>
    Hij antwoordde:

    “Nee.

    Allah heeft mijn opdracht
    doen slagen.

    Houd mij alstublieft niet op.

    Laat mij terugkeren
    naar mijn meester.”
  </p>

  <p>
    Toen zeiden zij:

    “Laten wij
    de jonge vrouw roepen
    en haar zelf vragen.”

    Zij riepen Rifqah
    en vroegen:

    “Deze man
    wil vertrekken.

    Wil jij met hem meegaan?”
  </p>

  <p>
    “Ik zal meegaan,”
    antwoordde zij.
  </p>

  <p>
    Zo namen zij afscheid
    van Rifqah,
    samen met haar voedster
    en de reizigers.

    Voordat zij vertrok,
    zegenden zij haar met de woorden:

    “Onze zuster,

    moge Allah jou
    vele kinderen schenken.

    Mogen jouw nakomelingen
    ontelbaar worden.

    Mogen jouw afstammelingen
    de steden
    van hun vijanden bezitten.”
  </p>

  <p>
    Daarna stegen Rifqah
    en haar dienaressen
    op de kamelen
    en vertrokken
    met de dienaar van Ibrahim.
  </p>

  <p>
    In die tijd
    was Ishaq عليه السلام
    teruggekeerd
    van Beer-lahai-roi
    naar het zuidelijke gebied.

    Op een avond
    wandelde hij
    peinzend over het veld,
    toen hij
    kamelen zag naderen.

    Hij liep hun tegemoet.
  </p>

  <p>
    Ook Rifqah
    zag Ishaq.

    Zij stapte onmiddellijk
    van haar kameel af
    en vroeg
    aan de dienaar van Ibrahim:

    “Wie is die man?”
  </p>

  <p>
    “Dat is mijn meester,”
    antwoordde hij.

    Toen nam Rifqah
    haar sluier
    en bedekte haar gezicht.

    Daarna vertelde
    de dienaar
    aan Ishaq
    alles wat er was gebeurd.
  </p>
</div>

<div className="main_text">
  <p
    className="cursor-pointer"
    onClick={() => toggleBubble('bubble2')}
  >
    Ishaq (a.s.)
    bracht Rifqah
    in de tent
    van Lady Sarah.

    Hij trouwde met haar,
    en na het overlijden
    van zijn moeder
    vond hij grote troost
    in haar gezelschap,
    want hij hield
    heel veel van haar.
    <sup>2</sup>
  </p>

  {openBubbles['bubble2'] && (
    <div
      className="speech-bubble"
      onClick={() => toggleBubble('bubble2')}
    >
      <p>
        <sup>2</sup>
        Ishaq عليه السلام
        was veertig jaar oud
        toen hij trouwde
        met Lady Rifqah.
      </p>
    </div>
  )}
</div>
</main>
  );
}