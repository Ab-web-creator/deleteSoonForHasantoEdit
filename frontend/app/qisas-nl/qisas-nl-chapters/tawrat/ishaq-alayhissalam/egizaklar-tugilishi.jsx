'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function IsaaksTwins() {
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
  <div className="paragraph_heading">
    <p>HET OVERLIJDEN VAN IBRAHIM</p>
    <AlayhS className="text-green-800 font-medium" />
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      Profeet Ibrahim leefde
      honderdvijfenzeventig jaar.
      <sup>1</sup>{' '}

      Zoals Allah (s.w.t.) had beloofd,
      genoot hij van een lang leven
      en overleed hij in vrede.

      Zijn zonen,
      Ismail en Ishaq عليهما السلام,
      begroeven hem naast Lady Sarah (r.a.)
      in de grot van Machpela,
      bij Mamre,
      op het veld dat had toebehoord
      aan Efron,
      de zoon van Zohar,
      de Hethiet.

      Ibrahim alayhis-salam
      had dat stuk grond
      van de Hethieten gekocht.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Al-Tabari en Abu al-Fida
          ("Al-Bidayah wa al-Nihayah",
          deel 1, p. 174).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>WAT VOOR LEVEN LEEFDE IBRAHIM (a.s.)?</p>
  </div>

  <div className="main_text">
    <p className="my-1 vitalic">
      ~ Toen Allah hem opdroeg:
      "Verlaat het huis van je vader
      en ga naar het land
      dat Ik je zal tonen,"
      gehoorzaamde hij zijn Heer.
    </p>

    <p
      className="my-1 vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      ~ Hij beschouwde Allah
      als zijn meest nabije Vriend.
      Al zijn zorgen
      en moeilijkheden
      legde hij bij Hem neer.
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Volgens een overlevering zei Ibrahim
          عليه السلام
          tegen onze Profeet ﷺ:

          "Breng mijn salām over
          aan jouw ummah
          en zeg hun
          dat zij veel bomen
          in het Paradijs moeten planten,
          want de grond van het Paradijs
          is vruchtbaar
          en het water is zoet."

          De Profeet ﷺ vroeg:

          "Wat zijn de bomen
          van het Paradijs?"

          Ibrahim عليه السلام antwoordde:

          "Subḥānallāhi wal-ḥamdu lillāhi
          wa lā ilāha illallāhu wallāhu akbar.
          Wa lā ḥawla wa lā quwwata illā billāh."

          (Al-Tirmidhi, "Sunan",
          deel 5, p. 510;
          Al-Tabarani,
          "Al-Mu'jam al-Saghir",
          deel 2, p. 196;
          Ahmad ibn Hanbal,
          "Musnad",
          deel 5, p. 418;
          Al-Suyuti,
          "Al-Khasa'is",
          deel 1, p. 414;
          Al-Halabi,
          deel 2, p. 123.)
        </p>
      </div>
    )}

    <p className="my-1 vitalic">
      ~ Omdat hij volledig vertrouwde
      op de goedheid van Allah,
      was hij zelfs bereid
      zijn zoon te offeren
      toen Allah hem dat beval.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>RIFQAH (r.a.) WORDT ZWANGER</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      "Onder hun nakomelingen
      bevinden zich mensen
      die goed doen,
      en ook mensen
      die zichzelf duidelijk onrecht aandoen."
      {' '}
      <span className="vitalic">
        (Sura As-Saffat 37:113).
      </span>
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble mt-20"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Sura As-Saffat 37:113.
        </p>
      </div>
    )}

    <p>
      Lady Rifqah (r.a.)
      kon lange tijd
      geen kinderen krijgen.

      Ishaq alayhis-salam
      richtte zich daarom
      steeds opnieuw tot Allah
      met duʿā
      om nakomelingen.

      Uiteindelijk
      werd zijn duʿā verhoord
      en werd zijn vrouw zwanger.
    </p>

    <p>
      Toch gebeurde er
      iets bijzonders.

      De kinderen
      bewogen en worstelden
      met elkaar
      in de baarmoeder.

      Rifqah (r.a.)
      maakte zich hierover zorgen
      en wendde zich tot Allah
      om uitleg.
    </p>

    <p>
      Allah, de Verhevene,
      zei tegen haar:

      "Twee volken
      bevinden zich
      in jouw schoot.

      Uit jou
      zullen twee verschillende volken
      voortkomen.

      De één
      zal sterker zijn
      dan de ander,

      en de oudste
      zal de jongste dienen."
    </p>

    <p>
      Toen de tijd
      van de bevalling kwam,
      schonk zij het leven
      aan een tweeling.

      De eerste zoon
      had een rossige huid
      en zijn hele lichaam
      was bedekt met haar,
      alsof hij
      een harige mantel droeg.

      Daarom
      gaven zij hem
      de naam Esau.
    </p>
  </div>

  <div className="paragraph_heading">
  <p>ESAU (r.a.) VERKOOPT ZIJN EERSTGEBOORTERECHT</p>
</div>

<div className="main_text">
  <p>
    De jongens groeiden op.

    Esau (r.a.) werd een bekwaam jager
    die graag door het open veld trok.

    Yaʿqub alayhis-salam
    was zacht van aard
    en bleef liever
    dicht bij de tenten.
  </p>

  <p>
    Profeet Ishaq hield bijzonder veel
    van het wild
    dat Esau van de jacht meebracht.

    Daarom gaf hij
    iets meer de voorkeur aan hem.

    Lady Rifqah daarentegen
    hield meer van Yaʿqub.
  </p>

  <p>
    Op een dag
    kwam Esau (r.a.)
    uitgeput terug van de jacht.

    Yaʿqub alayhis-salam
    was juist bezig
    een pan stoofpot te bereiden.
  </p>
</div>

<div className="main_text">
  <p
    className="cursor-pointer"
    onClick={() => toggleBubble('bubble6')}
  >
    “Geef mij wat
    van die rode
    <sup>6</sup>{' '}
    stoofpot,”
    zei Esau (r.a.).

    “Ik sterf van de honger.”

    “Goed,”
    antwoordde Yaʿqub (a.s.).

    “Maar verkoop mij eerst
    jouw eerstgeboorterecht.”

    “Ik ga dood van de honger,”
    antwoordde zijn broer.

    “Wat heb ik
    aan dat eerstgeboorterecht?

    Neem het maar,
    het is van jou.”

    Maar Yaʿqub alayhis-salam zei:

    “Zweer het eerst met een eed.”

    Toen legde Esau een eed af
    en verkocht hij
    zijn eerstgeboorterecht
    aan zijn jongere broer.
  </p>

  {openBubbles['bubble6'] && (
    <div
      className="speech-bubble"
      onClick={() => toggleBubble('bubble6')}
    >
      <p>
        <sup>6</sup>
        Daarom werd Esau later
        ook Edom genoemd,
        wat
        "rood"
        betekent.
      </p>
    </div>
  )}

  <p>
    Zo verruilde hij
    voor een stuk brood
    en een kom stoofpot
    zijn eerstgeboorterecht.

    Hij hechtte geen waarde
    aan de erfenis
    die van Ibrahim
    alayhis-salam
    was doorgegeven —

    de keten van Barakah zelf.

    Nadat hij gegeten
    en gedronken had,
    stond hij eenvoudig op
    en ging weer verder,
    alsof er niets bijzonders
    was gebeurd.
  </p>
</div>

<div className="paragraph_heading">
  <p>
    ALLAH HERINNERT ISHAQ (a.s.)
    AAN ZIJN BELOFTE VAN HET VERBOND
  </p>
</div>

<div className="main_text">
  <p>
    Opnieuw
    kwam er hongersnood
    in het land,

    net zoals
    in de dagen
    van Ibrahim
    alayhis-salam.

    Daarom reisde Ishaq (a.s.)
    naar Gerar,
    het land
    van de Filistijnen,

    waar koning Abimelech regeerde.
  </p>

  <p>
    Daar verscheen Allah
    aan Ishaq (a.s.)
    en zei:

    “Ga niet
    naar Egypte.

    Verlaat het land Kanaän niet.

    Ik zal met jou zijn
    en jou zegenen.

    Ik zal al deze landen geven
    aan jou
    en aan jouw nakomelingen.

    Ik zal de eed vervullen
    die Ik
    aan jouw vader Ibrahim
    heb gezworen.

    Omdat Ibrahim
    Mij gehoorzaamde,

    Mijn geboden,
    Mijn voorschriften
    en Mijn wetten onderhield,

    zal Ik
    jouw nakomelingen
    talrijk maken
    als de sterren
    aan de hemel.

    Ik zal hun
    al deze landen geven.

    En door jouw nageslacht
    zullen alle volken
    van de aarde
    gezegend worden.”
  </p>

  <p className="vitalic">
    Zo herhaalde Allah
    aan Ishaq عليه السلام
    dezelfde drie beloften:
  </p>
</div>

<div className="main_text border rounded-md border-green-600 p-3">
  <p className="vitalic !my-0 py-1 px-4">
    ~ dat zijn nakomelingen
    talrijk zouden worden,
  </p>

  <p className="vitalic !my-0 py-1 px-4">
    ~ dat zijn nakomelingen
    het land zouden erven,
  </p>

  <p className="vitalic !my-0 py-1 px-4">
    ~ en dat door zijn nageslacht
    alle volken van de aarde
    gezegend zouden worden.
  </p>
</div>

<div className="main_text">
  <p className="vitalic">
    Als je het je herinnert,

    waren dit precies {' '}
    <span className="font-semibold">
      dezelfde beloften
    </span>
    {' '}
    die Allah
    eerder had gegeven
    aan Profeet Ibrahim,
    khalilullah.
  </p>
</div>
<div className="paragraph_heading">
  <p>ISHAQ (a.s.) EN DE KONING VAN GERAR</p>
</div>

<div className="main_text">
  <p>
    Ishaq alayhis-salam
    woonde in Gerar.

    Uit angst
    vertelde hij de mensen
    dat Rifqah
    zijn zuster was.

    Hij dacht:

    “Als ik zeg
    dat zij mijn vrouw is,

    zullen zij mij misschien doden
    om met haar te kunnen trouwen.”

    (Lady Rifqah
    was inderdaad
    buitengewoon mooi.)
  </p>

  <p>
    Enige tijd later
    keek de koning
    van de Filistijnen
    uit het raam

    en zag Ishaq
    samen met Rifqah.
  </p>

  <p>
    Hij liet Ishaq (a.s.) roepen
    en zei:

    “Zij is jouw vrouw!

    Waarom heb je gezegd:

    ‘Zij is mijn zuster’?”
  </p>

  <p>
    “Ik was bang
    dat ik vanwege haar
    gedood zou worden,”
    antwoordde Ishaq (a.s.).
  </p>

  <p>
    De koning zei:

    “Wat heb je gedaan?

    Iemand had haar gemakkelijk
    tot vrouw kunnen nemen,

    en daardoor
    zou je schuld
    over ons hebben gebracht!”
  </p>

  <p>
    Daarna vaardigde hij
    een bevel uit:

    “Wie deze man
    of zijn vrouw
    kwaad doet,

    zal zeker
    ter dood gebracht worden.”
  </p>
</div>

<div className="paragraph_heading">
  <p>DE ZEGEN VAN ALLAH</p>
</div>

<div className="main_text">
  <p>
    In datzelfde jaar
    bracht het land
    dat Ishaq alayhis-salam
    had ingezaaid,

    een oogst voort
    die honderdmaal groter was.

    Allah
    had hem rijkelijk gezegend.

    Zijn bezit
    bleef toenemen,

    totdat hij
    buitengewoon welvarend werd.

    Hij bezat kudden,
    vee,
    dienaren
    en dienaressen.

    Daarom
    werden de Filistijnen
    jaloers op hem

    en maakten zij
    de waterputten dicht

    die eerder
    door Hazrat Ibrahim
    waren gegraven.
  </p>

  <p>
    Uiteindelijk zei
    de koning van Gerar
    tegen Ishaq (a.s.):

    “Je bent
    te machtig geworden
    voor ons.

    Je moet
    ergens anders gaan wonen.”
  </p>

  <p>
    Daarom vestigde
    Ishaq (a.s.) zich
    in de vallei van Gerar,

    waar hij
    de waterputten
    opnieuw opende

    die zijn vader,
    Ibrahim (a.s.),
    had gegraven

    en die later
    door de Filistijnen
    waren dichtgemaakt.
  </p>
</div>

<div className="paragraph_heading">
  <p>DE VROUWEN VAN ESAU</p>
</div>

<div className="main_text">
  <p
    className="cursor-pointer"
    onClick={() => toggleBubble('bubble7')}
  >
    Op veertigjarige leeftijd
    trouwde Esau
    met Judith,

    de dochter van Beëri,
    de Hethiet.

    Later trouwde hij ook
    met Basemat,

    de dochter van Elon,
    de Hethiet.
    <sup>7</sup>{' '}

    Deze Kanaänitische vrouwen
    bezorgden
    Ishaq (a.s.)
    en Rifqah
    veel verdriet.
  </p>

  {openBubbles['bubble7'] && (
    <div
      className="speech-bubble"
      onClick={() => toggleBubble('bubble7')}
    >
      <p>
        <sup>7</sup>
        De Hethieten
        waren een afgodisch volk,

        bekend om gebruiken
        die als verdorven
        en verwerpelijk
        werden beschouwd.
      </p>
    </div>
  )}
</div>
</main>

  );
}