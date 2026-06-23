'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function CreationOfWorld() {
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
  <div className="decor_line"></div>

  <div className="main_text">
    <p className="vitalic">
      Allah de Allerhoogste schiep het gehele universum in zes dagen.
      In Soera Qaf zegt Hij:{' '}
      <span className="boldItalic">
        “Wij schiepen de hemelen en de aarde en alles wat zich daartussen bevindt in zes dagen.”
      </span>
      {' '} (50:38).
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Gedurende de eerste twee dagen scheidde Allah
      het licht van de duisternis
      en de aarde van de hemelen.
      Gedurende de overige vier dagen
      tooide Hij de aarde:
      door bergen te scheppen,
      de plantenwereld,
      en het dierenrijk
      voor de kinderen van Adam alayhis-salam.
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> In de Edele Qur'an staat:
          “Hij is het Die voor jullie heeft geschapen
          alles wat zich op de aarde bevindt”
          (Al-Baqarah 2:29).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Uiteindelijk schiep Hij,
      onder alle geschapen wezens,
      het mooiste van hen allen —
      de mensheid,
      onze vader Adam en moeder Hawwa.

      De Qur'an zegt:{' '}
      <span className="boldItalic">
        “Voorwaar, Wij hebben de mens geschapen
        in de mooiste vorm.”
      </span>
      {' '} (Soera At-Tin).

      In een andere ayah zegt Allah:{' '}
      <span className="boldItalic">
        “En voorzeker,
        Wij hebben de kinderen van Adam geëerd...
        en hen verheven boven velen van degenen die Wij hebben geschapen.”
      </span>
      {' '} (Al-Isra 17:70).
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup> De Profeet ﷺ zei eveneens:
          “Allah schiep Adam naar Zijn beeld”
          (Bukhari [6227], Muslim [6212]).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>EEN WERELD ZONDER VERDRIET</p>
  </div>

  <div className="main_text">
    <p>
      Alles wat Allah schiep
      was goed.

      <span className="vitalic">
        {' '}
        Hij is Degene Die{' '}
        <span className="boldItalic">
          “alles wat Hij schiep heeft vervolmaakt.”
        </span>
        {' '}
        (Qur'an 32:7).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Op Zijn bevel,
      “Wees!”
      <sup>3</sup>{' '}
      ontsproten planten uit de aarde,
      samen met bomen die
      allerlei soorten vruchten droegen.

      Op Zijn bevel,
      “Wees!”,
      vulden vissen de wateren
      en verschenen ontelbare schepselen
      in de zeeën.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup> In Soera Al-Baqarah,
          ayah 117, komt de uitdrukking
          “kun fa-yakun” voor.
          Dit betekent:
          “Wees, en het is.”
          Allah schiep de schepselen van de wereld
          door Zijn bevel:
          “Wees!”
        </p>
      </div>
    )}

    <p>
      Op Zijn bevel,
      “Wees!”,
      ontstonden alle soorten dieren
      en alle kleurrijke vogels.

      <span className="vitalic">
        {' '}
        De Barakah van Allah
        was overal zichtbaar.
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      In die tijd bestonden er op aarde
      geen ziekten,
      geen dood,
      geen zorgen
      en geen verdriet.

      De tuin was gevuld met bomen
      die allerlei soorten vruchten droegen,
      en Profeet Adam alayhis-salam
      en Moeder Hawwa leefden gelukkig
      in de nabijheid van Allah.

      Zij wisten nog niet
      wat het kwaad was.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup> Waarom werd de mens geschapen?

          Deze vraag wordt al sinds oude tijden
          door de geleerden besproken.

          In Soera Adh-Dhariyat zegt Allah
          dat Hij de mens heeft geschapen
          opdat zij Hem zouden aanbidden
          (51:56).

          De betekenis van aanbidding
          omvat toewijding,
          dienstbaarheid
          en overgave.

          Dit is tevens een van de bewijzen
          dat de mens het edelste is
          van alle geschapen wezens.

          Allah Subhanahu wa Ta'ala
          schiep Adam en Hawwa
          opdat zij dicht bij Hem zouden leven.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>
      PROFEET ADAM —
      ALLAHS KHALIFAH OP AARDE
    </p>
  </div>

  <div className="main_text">
    <p>
      Toen Allah azza wa jall
      onze vader Adam en moeder Hawwa schiep,
      zegende Hij hen
      en gaf Hij hun het bevel:

      “Wees vruchtbaar.
      Vermenigvuldig jullie
      en vervul de aarde.

      Zie,
      Ik heb deze aarde aan jullie gegeven.

      Heers over de vissen,
      de vogels
      en alle levende schepselen
      die op aarde leven.

      En zie,
      Ik heb voor jullie voorzien
      in elke plant die zaad voortbrengt
      en iedere boom
      die vrucht draagt met zaad erin,
      als voorziening voor jullie.”
      <sup>5</sup>
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          “Voorwaar, Wij hadden reeds een Ahd met Adam gesloten...”
          (Soera Ta-Ha, ayah 115).

          Dit was het eerste Ahd
          dat Allah de Allerhoogste
          met de mensheid sloot.
        </p>
      </div>
    )}

    <p className="vitalic">
      Zo werd aan Profeet Adam alayhis-salam
      de rang van Khalifah gegeven,
      het gezag om
      de gehele aarde te besturen.

      Zoals in de Qur'an vermeld wordt,
      deelde Allah,
      vóór de schepping van Profeet Adam alayhis-salam,
      aan de engelen mee:{' '}

      <span className="boldItalic">
        “Voorwaar, Ik zal op aarde een Khalifah aanstellen.”
      </span>
      {' '} (Al-Baqarah, ayah 30).
    </p>
  </div>
    <div className="paragraph_heading">
    <p>OVER IBLIS</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Hierna gaf Allah de Allerhoogste
      de engelen het bevel
      om sajdah te verrichten voor
      Profeet Adam alayhis-salam.

      De Edele Qur'an zegt:{' '}

      <span className="boldItalic">
        “Voorwaar, Wij hebben jullie geschapen
        en vervolgens vorm gegeven.

        Daarna zeiden Wij tegen de engelen:
        ‘Verricht sajdah voor Adam.’

        Toen verrichtten zij sajdah.

        Behalve Iblis;
        hij behoorde niet tot degenen
        die sajdah verrichtten.”
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Daarna vroeg Allah aan Iblis:

      “Waarom heb jij geen sajdah verricht?”

      Iblis antwoordde:
      <sup>6</sup>{' '}

      <span className="boldItalic">
        “Ik ben beter dan hij.
        U hebt mij uit vuur geschapen,
        terwijl U hem uit klei hebt geschapen.”
      </span>
      {' '} (Al-A‘raf 7:11–12).
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup> Iblis behoorde tot de djinn
          (Soera Al-Kahf, ayah 50).

          Voordat hij werd verstoten,
          aanbad hij Allah
          samen met de engelen
          met zo'n grote toewijding
          dat niemand hem daarin kon evenaren.

          Maar ondanks al die aanbidding
          bleef hoogmoed
          in zijn hart aanwezig.
        </p>
      </div>
    )}

    <p className="vitalic">
      Allah Subhanahu wa Ta'ala zei:{' '}

      <span className="boldItalic">
        “Daal dan af!
        Het past jou niet
        om hier hoogmoedig te zijn.

        Ga dus weg!
        Voorwaar,
        jij behoort tot de vernederden.”
      </span>

      {' '}Iblis antwoordde:{' '}

      <span className="boldItalic">
        “Geef mij uitstel
        tot de Dag waarop zij worden opgewekt.”
      </span>

      {' '}Allah zei:{' '}

      <span className="boldItalic">
        “Voorwaar,
        jij behoort tot degenen
        aan wie uitstel is verleend.”
      </span>

      {' '}Daarop zei Iblis:{' '}

      <span className="boldItalic">
        “Omdat U mij hebt laten afdwalen,
        zal ik hen zeker opwachten
        op Uw Rechte Pad.

        Vervolgens zal ik tot hen komen
        van voren,
        van achteren,
        van hun rechterzijde
        en van hun linkerzijde.

        En U zult de meesten van hen
        niet dankbaar vinden.”
      </span>

      {' '} (Al-A‘raf 7:13–17).
    </p>

    <p className="vitalic">
      Zo werd Iblis
      de gezworen vijand
      van de mensheid.
    </p>
  </div>
</main>
  );
}