'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Ishmael() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
  ]);

  return (
 
<main className="stories relative">
  <div className="div_with_borders">
    <p className="boldItalic">
      “En vermeld Ismail in het Boek.
      Voorwaar, hij was trouw aan zijn belofte,
      en hij was een Boodschapper en een Profeet.”
      <span className="vitalic"> (Surah Maryam 19:54).</span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Onze moeder Sarah voelde jaloezie tegenover Lady Hajar.
      Veel geleerden hebben dit vermeld.
      <sup>1</sup>{' '}
      Volgens al-Tabari
      stuurde Lady Sarah onze moeder Hajar niet één keer,
      maar twee keer weg uit het huis.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Bijvoorbeeld:
          al-Suhayli in “Al-Rawd al-Unuf”,
          Abu al-Fida in “Al-Bidayah wa al-Nihayah”,
          en al-Tabari in zijn “Tarikh”.

          Volgens al-Tha‘labi
          werd Lady Sarah op een keer zo boos
          dat zij erop stond:
          “Jij zult niet langer
          op dezelfde plaats wonen als ik”
          (“Arais”, p. 81).
        </p>
      </div>
    )}

    <p>
      Op een dag
      hield Ibrahim (a.s.) een groot feest
      ter gelegenheid van het spenen
      van zijn zoon Ishaq.

      Toen Lady Sarah Ismail zag,
      de zoon van onze moeder Hajar,
      lachend en vrolijk tijdens het feest,
      ging zij naar Ibrahim (a.s.) en eiste:

      “Stuur Hajar weg met haar zoon.
      De zoon van de slavin
      zal niet delen in de erfenis
      die aan mijn zoon toebehoort.”
    </p>

    <p>
      Deze woorden maakten de Boodschapper van Allah,
      Ibrahim (a.s.),
      diep bedroefd.

      Ismail (a.s.)
      was immers ook zijn zoon.

      Maar Allah openbaarde aan Zijn Boodschapper:

      “Doe zoals Sarah heeft gezegd.

      Want de belofte
      die Ik over jouw nageslacht heb gedaan,
      zal doorgaan via Ishaq.

      Maak je ook geen zorgen
      over Ismail en Hajar.

      Ik zal hen beschermen.

      Uit de nakomelingen van Ismail
      zal Ik een groot volk voortbrengen,
      want ook hij is jouw zoon.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ja,
      ook dit was een beproeving
      <sup>2</sup>{' '}
      van Allah.

      Is afscheid nemen
      van je eigen kind
      gemakkelijk?

      Ismail (a.s.)
      was tenslotte
      de eerstgeboren zoon
      van Profeet Ibrahim.
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Volgens Afif Abd al-Fattah Tabbara
          in “Ma‘a al-Anbiya fi al-Qur’an al-Karim”
          aanvaardde Allah,
          Verheven en Geprezen,
          de wens van Sarah
          en beval Hij Ibrahim عليه السلام
          om onze moeder Hajar
          en haar zoon
          naar een andere plaats te brengen.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE DUʿĀ VAN IBRAHIM</p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p className="vitalic">
      De duʿā van de Boodschapper van Allah
      staat vermeld in de Edele Qur’an:
    </p>

    <p className="boldItalic">
      “Onze Heer,
      ik heb een deel van mijn nageslacht
      gevestigd in een onbebouwde vallei
      nabij Uw Gewijde Huis,
      onze Heer,
      opdat zij het gebed zullen onderhouden.

      Laat daarom harten van mensen
      naar hen neigen,
      en voorzie hen van vruchten,
      zodat zij dankbaar zullen zijn.”
      <span className="vitalic">
        {' '}
        (Surah Ibrahim 14:37).
      </span>
    </p>

    <p className="vitalic">
      Nadat Lady Hajar en Ismail عليه السلام
      naar hun nieuwe verblijfplaats waren gebracht,
      zorgde Allah,
      de Allerhoogste,
      Zelf voor hen
      en hield hen onder Zijn bescherming.

      De bron
      die in de woestijn verscheen,
      was een van de tekenen
      van Allah’s barmhartigheid.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE BRON IN DE WOESTIJN</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Volgens de hadiths
      van rasulullah ﷺ
      legde Lady Hajar Ismail (a.s.)
      in de schaduw van een struik
      en hing zij de waterzak
      aan een tak.

      Zij en haar kind
      dronken uit die waterzak.
      <sup>3</sup>{' '}
      Na enige tijd
      raakte het water op.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Al-Bukhari, “Sahih”, vol. 4, p. 113.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Toen het water op was,
      zei Hajar (r.a.):
      “Ik kan het niet verdragen
      om mijn kind te zien sterven,”
      en zij ging een eind verderop
      en ging zitten.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Al-Azraqi, “Akhbar Makkah”, vol. 1, p. 55.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Daarna beklom zij een heuvel
      en keek om zich heen
      op zoek naar water.

      Zij keek in alle richtingen,
      hopend een geluid te horen,
      maar zij hoorde geen stem
      en zag niemand.

      Daarna rende zij naar beneden
      en beklom de volgende heuvel.

      Ook daar
      keek zij bezorgd om zich heen,
      maar zij zag niemand.

      Zo liep de bedroefde moeder
      heen en weer
      tussen de twee heuvels,
      huilend van nood.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          Volgens de boeken
          waren deze twee heuvels
          Safa en Marwah.

          In die tijd
          liep Lady Hajar
          zeven keer heen en weer
          tussen de twee heuvels
          (Imam al-Bukhari,
          al-Bayhaqi,
          al-Qurtubi,
          en anderen).
        </p>
      </div>
    )}

    <p className="vitalic">
      Toen verscheen een engel van Allah en zei:

      “Hajar,
      Hajar,
      waarom huil je?

      Wees niet bang.

      Jouw kreten
      hebben de Hoogste Hemel bereikt.

      Sta nu op,
      til het kind op.

      Allah zal uit zijn nakomelingen
      een groot volk voortbrengen.”
    </p>

    <p className="vitalic">
      Allah had daar
      een bron voor hen geopend,
      maar Lady Hajar
      had die nog niet gezien.

      Toen richtte Allah haar blik
      naar de bron.

      Zij keek —
      en daar was water!

      Levengevend water!

      Zij ging er onmiddellijk naartoe
      en dronk.

      Daarna vulde zij
      de waterzak
      en gaf haar zoon te drinken.

      Het water raakte niet op;
      het bleef uit de aarde opborrelen.
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Op deze manier
      was Allah,
      de Allerhoogste,
      altijd met hen.

      Ismail عليه السلام
      groeide op in de woestijn
      en werd een vaardige boogschutter.

      Later
      liet zijn moeder hem trouwen
      met een Egyptisch meisje.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Al-Bayhaqi,
          “Dala’il al-Nubuwwah”.
        </p>
      </div>
    )}
  </div>
</main>
 
  );
}