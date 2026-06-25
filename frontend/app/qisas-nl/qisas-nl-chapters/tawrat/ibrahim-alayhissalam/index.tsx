'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Abraham() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble7',
    'bubble8',
    'bubble10',
    'bubble11',
  ]);

  return (
<main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Allah heeft de waarheid gesproken. Volg daarom de weg van Ibrahim, die
      oprecht was in het geloof en nooit tot de afgodendienaren behoorde.”
      <span className="vitalic">
        {' '}
        (Qur’an, Surah Aal ʿImran 3:95).
      </span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE VADER VAN PROFEET IBRAHIM</p>
  </div>

  <div className="main_text">
    <p>
      Terah had drie zonen: Ibrahim, Nahor en Haran. In die tijd woonden zij in
      de stad Ur, in het land van de Chaldeeën. Haran trouwde later en kreeg een
      zoon genaamd Lut en twee dochters genaamd Milkah en Iskah. Daarna, terwijl
      zijn vader nog leefde, overleed Haran in zijn geboorteland, de stad Ur.
      Ook Ibrahim trouwde.
    </p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble1')}>
      Maar zijn vrouw Sarah kon geen kinderen krijgen. Toen verzamelde Terah op
      een dag zijn familie en vertrok naar het land Kanaän. Maar toen zij Harran
      bereikten,<sup>1</sup> bleven zij daar om verschillende redenen en zetten
      hun reis niet voort.
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>1</sup> Omdat er een uitgestrekte woestijn tussen hen en Kanaän
          lag, reisden zij eerst noordwaarts naar de stad Harran, met de
          bedoeling later zuidwaarts verder te reizen naar Kanaän.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE JEUGD VAN IBRAHIM (VREDE ZIJ MET HEM)</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Volgens de historische verslagen aanbaden de mensen van Ibrahim (vrede zij
      met hem) levenloze afgoden en erkenden zij de Levende Allah niet. Ibrahim
      zocht echter naar antwoorden op vragen zoals: “Heeft dit heelal een
      Eigenaar?” en “Wie is de Heer van alle werelden?”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE ZOEKTOCHT NAAR ALLAH</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Toen de duisternis van de nacht hem omhulde, zag hij een ster en zei:
      ‘Dit is mijn Heer.’ Maar toen zij onderging, zei hij: ‘Ik houd niet van
      wat verdwijnt.’ Toen hij daarna de maan zag opkomen, zei hij: ‘Dit is mijn
      Heer.’”
      {' '}
      <span className="vitalic">(Maar ook de maan ging onder.)</span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      “Toen ook zij verdween, zei hij: ‘Ik had mij vergist. Als mijn Heer mij
      niet leidt, zal ik zeker behoren tot degenen die dwalen.’ Toen hij daarna
      de zon zag opkomen, zei hij: ‘Dit is mijn Heer. Deze is groter.’ Maar toen
      ook zij onderging,”{' '}
      <span className="vitalic">
        (dacht hij na: er moet zeker Eén zijn Die dit alles heeft geschapen en
        groter is dan alles. Daarna verklaarde hij:)
      </span>{' '}
      “‘O mijn volk, ik neem afstand van alles wat jullie met Allah vereenzelvigen.
      Ik heb mijn gezicht gewend naar Degene Die de hemelen en de aarde heeft
      geschapen. Ik zoek het rechte pad, en ik behoor niet tot de
      afgodendienaren.’”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>2</sup> Surah Al-An‘am 6:76–79.
        </p>
      </div>
    )}
  </div>
    <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      In die dagen zond Allah, de Verhevene en Almachtige, openbaring naar hem
      en zei:
      {' '}
      <span className="boldItalic">“Aslim.”</span>{' '}
      Dat betekent:
      “Onderwerp jezelf aan Mij.”

      Ibrahim (vrede zij met hem) antwoordde onmiddellijk:

      {' '}
      <span className="boldItalic">
        “Aslamtu li Rabbil-‘Alamin.”
      </span>
      <sup>3</sup>{' '}
      Dat betekent:

      “Ik heb mij overgegeven aan de Heer van alle werelden.
      Ik geloof.”

      Daarna probeerde hij zijn vader en zijn volk af te brengen van de
      afgoderij en hen terug te roepen naar de aanbidding van de Ene Allah,
      de Heer van de hemelen en de aarde.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Surah Al-Baqarah 2:131.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>HET VERNIETIGEN VAN DE AFGODEN</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      “Hij zei tegen zijn vader en zijn volk:

      ‘Wat is het dat jullie aanbidden?’

      Zij antwoordden:

      ‘Wij aanbidden afgoden,
      en wij zullen hen trouw blijven.’

      Hij vroeg:

      ‘Horen zij jullie wanneer jullie hen aanroepen?
      Kunnen zij jullie voordeel brengen
      of schade berokkenen?’

      Zij antwoordden:

      ‘Nee.
      Maar dit is wat onze voorouders deden,
      en wij volgen slechts hun voorbeeld.’”
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Surah Al-Shu‘ara 26:70–74.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      Op een dag was er een feest.

      Toen iedereen naar de viering was vertrokken,
      nam Ibrahim (vrede zij met hem)
      een bijl en ging de tempel van de afgoden binnen.

      Toen hij het voedsel zag
      dat voor hen was neergezet,
      zei hij:

      {' '}
      <span className="boldItalic">
        “Waarom eten jullie niet?
        Wat is er met jullie?
        Waarom spreken jullie niet?”
        Daarna liep hij op hen af
        en begon hen stuk te slaan.
      </span>
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          Surah Al-Saffat 37:91–93.
        </p>
      </div>
    )}

    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble7')}
    >
      In Surah Al-Anbiya staat geschreven:

      {' '}
      <span className="boldItalic">
        “Toen sloeg hij ze in stukken,
        behalve de grootste van hen,”
        <sup>6</sup>
      </span>{' '}
      waarna hij de bijl om de hals van het grootste beeld hing
      en de tempel verliet.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble7')}
    >
      Enige tijd later keerde het volk terug van het feest
      en trof hun afgoden vernietigd aan.

      Woedend brachten zij Ibrahim (vrede zij met hem) voor zich
      en vroegen:

      {' '}
      <span className="boldItalic">
        “Heb jij dit met onze goden gedaan,
        o Ibrahim?”
      </span>{' '}

      Hij antwoordde spottend:

      {' '}
      <span className="boldItalic">
        “Nee.
        Deze grootste heeft het gedaan.
        Vraag het hun maar,
        als zij kunnen spreken.”
      </span>
      <sup>7</sup>{' '}

      Zij antwoordden:

      “Jij weet heel goed
      dat afgoden niet kunnen spreken!”

      Ibrahim zei daarop:

      “Waarom aanbidden jullie dan,
      in plaats van Allah,

      {' '}
      <span className="boldItalic">
        iets dat jullie
        geen voordeel kan brengen
        en jullie ook geen schade kan berokkenen?
      </span>
      ”
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>6, 7</sup>
          Surah Al-Anbiya 21:58 en 21:62–67.
        </p>
      </div>
    )}
  </div>
    <div className="paragraph_heading">
    <p>ZIJ WIERPEN DE BOODSCHAPPER IN HET VUUR</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble8')}
    >
      Daarna riep de koning van dat volk
      <sup>8</sup>{' '}
      Ibrahim (vrede zij met hem) bij zich en vroeg:

      “Wie is jouw god?
      Heb je Hem ooit gezien?”

      De Boodschapper van Allah antwoordde:

      “Mijn Heer is Degene Die leven geeft
      en de dood doet intreden.”

      De koning antwoordde:

      “Dat kan ik ook.
      Als twee mannen ter dood zijn veroordeeld,
      kan ik de één laten doden
      en de ander gratie geven.”

      Ibrahim (vrede zij met hem) zei toen:

      {' '}
      <span className="boldItalic">
        “Allah laat de zon opkomen vanuit het oosten.
        Als jij daartoe in staat bent,
        laat haar dan opkomen vanuit het westen.”
      </span>
      <sup>9</sup>{' '}
      De koning bleef sprakeloos achter.
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>
          In veel historische werken wordt deze koning Nimrod genoemd.
        </p>

        <p>
          <sup>9</sup>
          Surah Al-Baqarah 2:258.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble10')}
    >
      De koning besloot daarna
      om Allah’s Boodschapper levend te verbranden.

      Voor dit doel werd een enorme kuil gegraven
      en gevuld met hout
      dat lang zou blijven branden.

      Toen alles gereed was,
      werd een geweldig vuur aangestoken,
      <sup>10</sup>{' '}
      en Ibrahim (vrede zij met hem)
      werd in de vlammen geworpen.
    </p>

    {openBubbles['bubble10'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble10')}
      >
        <p>
          <sup>10</sup>
          Volgens sommige geleerden
          duurde alleen al het verzamelen van het hout
          drie maanden
          (Ibn Iyas, “Bada’i al-Zuhur”).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>LESSEN UIT HET VERHAAL</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Omdat Ibrahim (vrede zij met hem)
      volledig op Allah vertrouwde,
      liet hij zijn geloof nooit los,
      zelfs niet toen zij dreigden
      hem levend te verbranden.

      Op zulke momenten
      stelt iedere gelovige zijn hoop
      op Allah’s hulp en steun.

      Want als Allah wil,
      kan Hij een mens redden
      uit de beproeving van vuur,
      net zoals Hij hem kan redden
      uit de beproeving van water.

      Maar zelfs als Hij ervoor kiest
      ons niet te redden,
      mogen wij ons geloof nooit opgeven.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble11')}
    >
      Toen Ibrahim (vrede zij met hem)
      in het vuur werd geworpen,
      beschermde Allah de Allerhoogste hem.

      De Edele Qur’an vermeldt het bevel:

      {' '}
      <span className="boldItalic">
        “O vuur,
        wees koelte en veiligheid voor Ibrahim.”
        <sup>11</sup>
      </span>

      {' '}
      Zo maakte Allah,
      hoewel zijn volk kwaad tegen hem wilde,
      hen tot de werkelijke verliezers.
    </p>

    {openBubbles['bubble11'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble11')}
      >
        <p>
          <sup>11</sup>
          Surah Al-Anbiya 21:69.
        </p>
      </div>
    )}
  </div>
</main>
  );
}