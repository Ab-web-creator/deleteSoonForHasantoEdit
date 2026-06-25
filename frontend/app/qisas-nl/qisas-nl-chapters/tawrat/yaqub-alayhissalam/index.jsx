'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Jacob() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p
      className="boldItalic cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      “En gedenk Onze dienaren Ibrahim, Ishaq en Ya‘qub,
      mannen van kracht en inzicht.

      Voorwaar, Wij hebben hen uitverkoren
      vanwege één bijzondere eigenschap:
      het gedenken van het Hiernamaals.

      En voorwaar,
      in Onze ogen
      behoorden zij tot de uitverkorenen
      en de meest rechtschapenen.”
      <sup>1</sup>{' '}
      <span className="vitalic">
        (De Edele Qur'an, 38:45–47).
      </span>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Het Arabische woord
          <span className="boldItalic"> akhyar</span>
          {' '}
          betekent
          "de allerbesten"
          of
          "de voortreffelijksten".

          De profeten
          Ibrahim,
          Ishaq
          en Ya‘qub عليهم السلام,
          die in deze aya worden genoemd,
          behoorden tot degenen
          die Allah speciaal had uitgekozen
          als Zijn meest rechtschapen dienaren.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>VERTREK OP REIS</p>
  </div>

  <div className="main_text">
    <p>
      Lady Rifqah رضي الله عنها
      wist wat Esau van plan was.

      Daarom riep zij
      Ya‘qub عليه السلام
      bij zich en zei:

      “Je broer
      wil je doden.

      Je moet onmiddellijk vertrekken
      en naar Haran gaan,
      naar je oom Laban.

      Blijf daar
      totdat de woede van je broer
      is bedaard.

      Wanneer hij vergeten is
      wat er gebeurd is,
      zal ik je laten weten
      dat je kunt terugkomen.

      Ik kan het niet verdragen
      om jullie allebei
      op één dag te verliezen!”
    </p>

    <p>
      Daarna ging zij
      naar Ishaq عليه السلام
      en zei:

      “Deze Hethitische schoondochters
      maken mijn leven ondraaglijk.

      Als Ya‘qub ook
      een vrouw neemt
      uit de Hethieten,
      dan sterf ik liever!”
    </p>

    <p>
      Ishaq عليه السلام
      riep zijn zoon Ya‘qub
      en zegende hem:

      “Ik wil niet
      dat jij trouwt
      met een Kanaänitische vrouw.

      Vertrek vandaag nog
      naar Mesopotamië,
      naar het huis
      van je grootvader Bethuël.

      Trouw daar
      met één van de dochters
      van je oom Laban.

      Moge Allah jou zegenen,
      jou veel kinderen schenken
      en jouw nakomelingen vermeerderen,
      totdat zij
      een grote gemeenschap
      van volken worden.

      Moge jij
      en jouw nageslacht
      de zegen erven
      die aan jouw grootvader Ibrahim
      is beloofd.

      En moge jij
      het land Kanaän erven,
      het land
      waarin wij nu
      als vreemdelingen wonen.”
    </p>

    <p>
      Met deze woorden
      stuurde Profeet Ishaq
      Ya‘qub عليه السلام
      op weg
      naar Mesopotamië,
      naar het huis
      van zijn oom Laban.
    </p>

    <p>
      Toen Esau رضي الله عنه zag
      hoe ontevreden zijn vader was
      over de Kanaänitische vrouwen,

      en hoe Ya‘qub
      was gezegend
      en weggestuurd
      met de opdracht
      niet met een Kanaänitische vrouw
      te trouwen,

      ging hij
      naar de familie
      van zijn oom Ismail عليه السلام
      en trouwde
      met Mahalath,
      de dochter van Ismail عليه السلام
      en de zuster van Nabayoth.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE DROOM VAN YA‘QUB عليه السلام</p>
  </div>

  <div className="main_text">
    <p>
      Zo vertrok
      Ya‘qub عليه السلام
      uit Beersheba
      naar Haran,
      waar zijn oom woonde.

      Toen de zon onderging,
      kwam hij
      op een bepaalde plaats
      om daar te overnachten.

      Hij nam
      één van de stenen
      die daar lag,
      legde die
      onder zijn hoofd
      en viel in slaap.
    </p>

    <p>
      Die nacht
      zag hij een droom.

      In de droom
      stond er een ladder.

      Het ene uiteinde
      stond op de aarde,

      terwijl het andere
      reikte
      tot de hoogste hemelen.

      De engelen van Allah
      stegen erop op
      en daalden weer af.
    </p>

    <p>
      Toen sprak Allah,
      de Verhevene,
      van bovenaf
      tot Ya‘qub عليه السلام:

      “Ik ben de God
      Die een verbond sloot
      met jouw grootvader Ibrahim
      en jouw vader Ishaq.

      Het land
      waarop jij nu ligt,
      zal Ik geven
      aan jou
      en aan jouw nakomelingen.

      Jouw nageslacht
      zal zo talrijk worden
      als het stof
      van de aarde.

      Jij zult je uitbreiden
      naar het westen
      en het oosten,
      naar het noorden
      en het zuiden.

      Door jou
      en jouw nakomelingen
      zullen alle volken
      van de aarde
      gezegend worden.”
    </p>

    <p>
      “Ik ben met jou.

      Waar je ook gaat,
      Ik zal jou beschermen.

      En wanneer
      de vastgestelde tijd komt,
      zal Ik jou
      terugbrengen
      naar dit land.

      Ik zal jou
      nooit verlaten.

      Ik zal bij jou blijven
      en iedere belofte vervullen
      die Ik jou heb gedaan.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE BELOFTEN AAN YA‘QUB عليه السلام</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Zo gaf Allah,
      de Almachtige,
      aan Ya‘qub عليه السلام
      dezelfde drie beloften:
    </p>
  </div>

  <div className="border rounded-md border-green-600 p-3">
    <p className="vitalic pl-4">
      ~ dat zijn nakomelingen talrijk zouden worden,
    </p>

    <p className="vitalic pl-4">
      ~ dat zijn nakomelingen het land zouden erven,
    </p>

    <p className="vitalic pl-4">
      ~ en dat door zijn nageslacht
      alle volken van de aarde
      gezegend zouden worden.
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Als je het je herinnert,

      waren dit precies
      dezelfde beloften
      die eerder
      waren gegeven
      aan Profeet Ibrahim عليه السلام
      en aan Ishaq عليه السلام.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YA‘QUB عليه السلام LEGT EEN GELOFTE AF</p>
  </div>

  <div className="main_text">
    <p>
      Toen Ya‘qub عليه السلام
      wakker werd,
      zei hij verbaasd:

      “Voorwaar,
      deze plaats is heilig!

      Dat wist ik niet.”
    </p>

    <p>
      Zijn hart
      werd vervuld met ontzag,
      en hij zei:

      “Dit is werkelijk
      de poort
      naar de hoogste hemelen!”
    </p>

    <p>
      Vroeg in de ochtend
      stond Ya‘qub عليه السلام op.

      Hij nam de steen
      waarop hij had gerust,
      zette die rechtop,
      goot er olijfolie over
      en wijdde die toe aan Allah.

      Daarna gaf hij
      die plaats
      de naam Bayt-El.

      (De vroegere naam
      was Luz.)
    </p>

    <p>
      Daarna zei hij:

      “Als Allah
      met mij blijft,

      mij beschermt
      op mijn reis,

      mij voedsel geeft
      om te eten
      en kleding
      om te dragen,

      en mij veilig
      terugbrengt
      naar het huis
      van mijn vader,

      dan zal ik
      alleen Hem aanbidden.

      Deze steen,
      die ik heb opgericht,

      zal een Huis worden
      dat aan Allah is gewijd.

      En van alles
      wat Allah mij schenkt,

      zal ik
      een tiende deel
      als offer geven.”
    </p>

    <p className="vitalic">
      Allah openbaarde Zich
      aan Profeet Ya‘qub
      door middel
      van een droom.

      Stel je eens voor:

      wat als er werkelijk
      een trap zou zijn
      die vanaf de aarde
      helemaal reikt
      tot de plaats
      waar Allah Zijn bevel laat uitgaan?

      Wij zouden erop klimmen,

      veel dingen zien,

      en veel begrijpen
      wat nu nog
      voor ons verborgen is,
      nietwaar?

      Misschien zouden wij
      zelfs een glimp
      van het Paradijs zien.

      Wat denk jij?
    </p>
  </div>

  <div className="paragraph_heading">
    <p>IN HET HUIS VAN ZIJN OOM</p>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub عليه السلام
      vervolgde zijn reis
      en kwam uiteindelijk
      aan
      in het land Haran.

      Daar zag hij
      een waterput.

      Naast de put
      lagen drie kudden schapen,

      en over de opening
      van de put
      lag een grote steen.

      (De steen
      werd pas weggehaald
      wanneer alle herders
      bijeen waren gekomen.

      Nadat de schapen
      hadden gedronken,

      werd de steen
      weer teruggerold.)
    </p>

    <p className="!my-0">
      —Broeders,
      waar komen jullie vandaan?
      vroeg Ya‘qub عليه السلام.
    </p>

    <p className="!my-0">
      —Uit Haran,
      antwoordden zij.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer !my-0"
      onClick={() => toggleBubble('bubble2')}
    >
      —Kennen jullie
      een man
      die Laban heet?

      De kleinzoon van Nahur?
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Nahur was
          de broer
          van Ibrahim عليه السلام.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="!my-0">
      —Ja,
      wij kennen hem.
    </p>

    <p className="!my-0">
      —Gaat het goed met hem?
    </p>

    <p className="!my-0">
      —Ja,
      het gaat goed met hem,

      antwoordde
      één van de herders.

      Kijk,

      zijn dochter Rachel
      komt daar nu aan
      met haar schapen.
    </p>

    <p className="!my-0">
      —Er is nog
      genoeg daglicht.

      Waarom geven jullie
      de schapen
      niet eerst water
      en brengen jullie ze
      daarna weer
      naar de weide?
    </p>

    <p className="!my-0">
      —Wij kunnen
      de steen niet verplaatsen
      voordat alle kudden
      verzameld zijn,
      antwoordden zij.
    </p>

    <p>
      Terwijl zij
      nog aan het praten waren,

      kwam Rachel aan
      met de schapen
      van haar vader.

      (Rachel zorgde zelf
      voor de kudde
      van haar vader.)

      Meteen
      rolde Ya‘qub عليه السلام
      de steen weg
      van de opening
      van de put

      en gaf
      de schapen
      van zijn oom
      water.

      Daarna,

      terwijl hij
      met Rachel sprak,

      werd hij
      zo door emoties
      overweldigd

      dat hij begon te huilen.
    </p>

    <p>
      “Ik ben de zoon
      van jouw tante Rifqah,”
      vertelde hij haar.

      Rachel rende
      onmiddellijk naar huis

      en vertelde het
      aan haar vader.
    </p>

    <p>
      Toen Laban hoorde
      dat zijn neef
      was aangekomen,

      haastte hij zich
      om hem te ontmoeten.

      Hij omhelsde hem,

      kuste hem,

      en nam hem mee
      naar zijn huis.

      Daar vertelde
      Ya‘qub عليه السلام
      zijn oom
      alles
      wat er was gebeurd.
    </p>

    <p>
      “Maak je geen zorgen,”
      zei Laban.

      “Jij bent
      mijn eigen vlees en bloed.

      Blijf hier
      bij mij.”
    </p>
  </div>
</main>
  );
}