'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EXAMPLE() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
  ]);

  return (
<main className="stories relative">
  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Ishaq عليه السلام was oud geworden,
      en zijn zicht was zwak geworden.
      <sup>1</sup>{' '}

      Op een dag
      riep hij zijn eerstgeboren zoon Esau bij zich:

      “Mijn zoon!”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Ibn Habib,
          “Kitab al-Muhabbar”, p. 296;
          Al-Mas‘udi,
          “Muruj al-Dhahab”, vol. 1, p. 47.
        </p>
      </div>
    )}

    <p>
      “Labbayk,
      mijn vader,”
      antwoordde Esau رضي الله عنه.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ishaq عليه السلام zei:

      “Ik ben oud geworden,
      en ik weet niet
      wanneer mijn tijd zal komen.

      Neem daarom je boog,
      ga naar buiten
      en jaag wat wild voor mij.

      Maak daarvan het eten
      waar ik van houd.

      Voordat ik sterf,
      wil ik jou
      de zegen van Allah geven.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Hij dacht dat de keten van zegen
          die aan Ibrahim عليه السلام was beloofd,
          moest doorgaan via zijn eerstgeboren zoon.
        </p>
      </div>
    )}

    <p>
      Lady Rifqah رضي الله عنها
      luisterde naar hun gesprek.

      Zodra Esau vertrok om te jagen,
      riep zij snel haar jongere zoon Ya‘qub en zei:
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “Mijn zoon!
      Ik hoorde je vader tegen Esau zeggen:

      ‘Ga wat wild voor mij jagen.
      Maak het eten
      waar ik van houd.
      Voordat ik sterf,
      wil ik jou
      de zegen van Allah geven.’

      Luister nu goed
      naar wat ik je zeg.

      Ga snel naar de kudde
      en breng mij
      twee vette jonge geiten.

      Ik zal daarvan
      het eten bereiden
      waar je vader van houdt.

      Jij zult het
      naar je vader brengen,
      en nadat hij gegeten heeft,
      vóórdat hij sterft,
      zal hij de zegen
      aan jou geven,
      niet aan Esau.
      <sup>3</sup>”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Esau had zijn eerstgeboorterecht
          al verkocht
          aan zijn jongere broer Ya‘qub.

          Toch zei hij hierover niets
          tegen zijn vader
          en ging hij op jacht.
        </p>
      </div>
    )}

    <p className="vitalic">
      Weet je nog?

      Allah, Verheven en Geprezen,
      had ooit tegen Lady Rifqah gezegd:

      “Twee volken
      bevinden zich in jouw schoot.
      Twee verschillende volken
      zullen uit jou voortkomen.
      De één zal sterker zijn
      dan de ander,
      en de oudste
      zal de jongste dienen.”

      Deze twee volken
      zouden voortkomen
      uit deze twee broers.

      De uitspraak:
      “de oudste zal de jongste dienen,”
      betekende dat de keten van zegen
      zou doorgaan
      via de nakomelingen
      van haar jongere zoon.

      Daarom werd Lady Rifqah
      diep bezorgd
      toen zij hoorde
      wat Ishaq عليه السلام had gezegd.
    </p>

    <p>
      “Moeder!”
      zei Ya‘qub عليه السلام.

      “Het lichaam van mijn broer
      is behaard,
      maar het mijne is glad.

      Als mijn vader mij aanraakt,
      zal ik voor hem lijken
      op een bedrieger.

      Dan zal hij mij
      misschien vervloeken
      in plaats van zegenen
      en zeggen:
      ‘Probeer je mij
      voor de gek te houden?’”
    </p>

    <p>
      “Laat die vloek
      dan op mij komen,”
      antwoordde Rifqah رضي الله عنها.

      “Ga nu,
      en doe precies
      wat ik je heb gezegd.

      Breng mij
      de jonge geiten.”
    </p>

    <p>
      Ya‘qub عليه السلام
      bracht de geiten
      en slachtte ze.

      Lady Rifqah bereidde het eten
      waar Ishaq عليه السلام van hield.

      Daarna nam zij
      de mooiste kleren van Esau
      uit het huis
      en kleedde Ya‘qub عليه السلام ermee.

      Zij bedekte zijn handen
      en zijn hals
      met de huiden
      van de jonge geiten.

      Daarna legde zij
      het eten en het brood
      in zijn handen
      en stuurde hem
      naar zijn vader.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">—Vader!</p>

    <p className="!my-0">
      —Ja, mijn zoon?
      Wie ben jij —
      Esau of Ya‘qub?
      vroeg zijn vader.
    </p>

    <p className="!my-0">
      —Ik ben het,
      uw eerstgeboren zoon Esau,
      zei Ya‘qub tegen zijn vader.

      Ik heb eten bereid
      van de jacht,
      zodat ik uw du‘a mag ontvangen.

      Sta alstublieft op
      en eet.
    </p>

    <p className="!my-0">
      —Hoe heb je het
      zo snel gevonden?
      vroeg zijn vader verbaasd.
    </p>

    <p className="!my-0">
      —Allah bracht het
      voor mij,
      antwoordde Ya‘qub عليه السلام.
    </p>

    <p className="!my-0">
      —Kom dichterbij,
      mijn zoon.
      Laat mij je aanraken
      en zien
      of je werkelijk Esau bent.
    </p>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub عليه السلام
      kwam dichter bij zijn vader.

      Zijn vader raakte hem aan en zei:

      “De stem
      is de stem van Ya‘qub,
      maar de handen
      zijn de handen van Esau.”
    </p>

    <p>
      De handen van Ya‘qub
      waren bedekt met huiden,
      waardoor ze behaard aanvoelden
      als de handen
      van zijn broer Esau.

      Daarom dacht
      Ishaq عليه السلام
      dat hij Esau was.

      Toch vroeg hij nog een keer:
    </p>

    <p className="!my-0">
      —Ben jij werkelijk Esau?
    </p>

    <p className="!my-0">
      —Ja,
      ik ben Esau,
      antwoordde Ya‘qub عليه السلام.
    </p>

    <p>
      Toen zei zijn vader:

      “Breng mij je eten.
      Nadat ik gegeten heb,
      zal ik jou de zegen geven.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE ZEGEN DIE MAAR ÉÉN KEER GEGEVEN WERD</p>
  </div>

  <div className="main_text">
    <p>
      Nadat hij had gegeten en gedronken,
      zei Ishaq عليه السلام:

      “Kom dichterbij,
      mijn zoon,
      en kus mij.”

      Ya‘qub عليه السلام
      kwam dichterbij
      en kuste zijn vader.

      Ishaq عليه السلام
      rook de geur van zijn kleren,
      zegende hem en zei:

      “De geur van mijn zoon
      is als de geur van een veld
      dat door Allah is gezegend!
    </p>

    <div className="pl-4 leading-tight">
      <p className="!my-0">
        Moge Allah altijd regen zenden
        over jouw gewassen,
      </p>

      <p className="!my-0">
        mogen jouw landen vruchtbaar zijn,
        jouw graan overvloedig,
        en jouw druiven talrijk.
      </p>

      <p className="!my-0">
        Mogen volken jou dienen,
        en naties zich voor jou buigen.
      </p>

      <p className="!my-0">
        Jij zult heer zijn
        over je broers,
      </p>

      <p className="!my-0">
        en jouw verwanten
        zullen zich voor jou buigen.
      </p>

      <p className="!my-0">
        Mogen degenen die jou vervloeken
        vervloekt worden,
      </p>

      <p className="!my-0">
        en mogen degenen die jou zegenen
        gezegend worden!”
      </p>
    </div>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub عليه السلام
      ontving de du‘a van zijn vader
      en was nog maar net vertrokken
      toen zijn broer Esau
      terugkwam van de jacht.

      Hij bereidde het eten
      en ging naar zijn vader toe:

      “Vader,
      sta alstublieft op.

      Ik heb voor u
      het eten bereid
      waar u van houdt,
      van de jacht.

      Eet,
      en zegen mij daarna.”
    </p>
  </div>

  <div className="leading-tight space-y-0">
    <p className="!my-0 leading-tight">
      —Wat?!
      Wie ben jij?
      vroeg Ishaq عليه السلام.
    </p>

    <p className="!my-0 leading-tight">
      —Ik ben uw eerstgeboren zoon Esau.
    </p>
  </div>

  <div className="main_text">
    <p>
      Toen Ishaq عليه السلام dit hoorde,
      beefde hij hevig
      en raakte diep bedroefd.

      “Wie was het dan
      die eten heeft bereid
      en het naar mij heeft gebracht?

      Ik heb ervan gegeten
      en hem de zegen gegeven.

      Nu behoort de zegen
      aan hem toe,”
      zei hij bevend.
    </p>

    <p>
      Toen Esau رضي الله عنه dit hoorde,
      werd hij overweldigd
      door woede en verdriet.

      Daarna smeekte hij:

      “Vader,
      mijn vader,
      zegen mij ook,
      mijn vader!”
    </p>

    <p>
      “Je broer is gekomen
      met list
      en heeft jouw zegen genomen,
      mijn zoon,”
      zei Ishaq عليه السلام.
    </p>

    <p>
      Esau رضي الله عنه riep uit:

      “Heet hij niet terecht Ya‘qub?

      Dit is de tweede keer
      dat hij mij heeft bedrogen.

      Eerst nam hij
      mijn eerstgeboorterecht,
      en nu heeft hij ook
      mijn zegen genomen.

      Hebt u dan
      niet één zegen
      voor mij overgelaten?”
    </p>

    <p>
      “Ik heb hem
      heer over jou gemaakt,”
      zei Ishaq عليه السلام.

      “Ik heb verklaard
      dat al zijn broers
      hem zouden dienen.

      Ik heb hem voorzien
      van graan en wijn.

      Wat kan ik dan nog
      voor jou doen,
      mijn zoon?”
    </p>

    <p>
      “Hebt u maar één zegen?

      Zegen mij ook!”
      huilde hij.
    </p>

    <p>
      “Jij zult verstoken zijn
      van de rijkste landen.

      Jij zult leven
      in de schaduw van je zwaard,
      en jij zult je broer dienen.

      Maar wanneer jij
      naar vrijheid verlangt,
      zul jij zijn juk
      van je nek breken,”
      zei Ishaq عليه السلام.
    </p>

    <p>
      Esau رضي الله عنه
      begon zijn broer
      diep te haten.

      “Zolang mijn vader leeft,
      zal ik zwijgen.

      Maar wanneer de tijd komt,
      zal ik hem zeker doden,”
      zei hij bij zichzelf.
    </p>
  </div>
</main>
  );
}