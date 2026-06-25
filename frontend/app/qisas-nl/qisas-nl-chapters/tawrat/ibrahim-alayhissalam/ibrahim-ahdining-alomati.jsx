'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function SignOfCovenant() {
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
  <div className="main_text">
    <p>
      Dertien jaar gingen voorbij.

      Op een dag verscheen Allah,
      Die macht heeft over alle dingen,
      opnieuw aan Ibrahim عليه السلام en zei:

      “Ibrahim,
      blijf trouw aan Ons verbond,
      waardeer Onze vriendschap
      en behoor tot de mensen van taqwā.

      Ik zal altijd met jou zijn.
      Ik zal jou beschermen.
      En Ik zal jouw nakomelingen
      zeer talrijk maken.”
    </p>

    <p>
      De Boodschapper van Allah,
      Ibrahim عليه السلام,
      wierp zich neer in sujūd.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      “Jij zult de vader worden van vele volken
      <sup>1</sup>,
      ” zei Allah.

      “Ik zal uit jou
      vele kinderen
      en vele volkeren voortbrengen.

      Koningen zullen
      uit jouw nakomelingen voortkomen.

      Ik zal Mijn verbond
      met jou
      en jouw nageslacht
      van generatie op generatie voortzetten.

      Dit land,
      waarin jij nu als vreemdeling verblijft,
      zal Ik geven
      aan jou
      en aan jouw nakomelingen
      als een eeuwig bezit.

      Jullie zullen onder Mijn bescherming blijven.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          In Surah Al-Baqarah
          zegt Allah tegen Ibrahim عليه السلام:

          {' '}
          <span className="boldItalic">
            “Voorwaar,
            Ik zal jou tot een leider
            voor de mensheid maken.”
          </span>
          {' '}
          <span className="vitalic">(2:124).</span>
        </p>
      </div>
    )}

    <p>
      “Maar jij moet Mijn verbond bewaren:

      jij
      en jouw nakomelingen
      moeten eraan trouw blijven.

      Iedere man onder jullie
      moet besneden worden.

      Dit zal het teken zijn
      van het verbond tussen Ons.

      Besnijd jullie zonen
      wanneer zij acht dagen oud zijn.

      Ook jullie dienaren —
      zowel degenen
      die in jullie huis geboren zijn
      als degenen
      die van andere volken zijn gekocht —
      moeten besneden worden.

      Dit teken aan jullie lichaam
      zal het bewijs zijn
      dat Mijn verbond met jullie
      eeuwig is.

      Wie weigert zich te laten besnijden,
      zal van zijn volk afgesneden worden,
      want hij heeft Mijn verbond verworpen.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ISHAQ — “HIJ LACHT”</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “En Wij gaven hem de blijde tijding van Ishaq,
      een rechtschapen profeet.
      En Wij schonken hem
      en Ishaq Onze zegen.”
      <span className="vitalic">
        {' '}
        (Surah As-Saffat 37:112–113).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      “Je zult je vrouw
      niet langer Sarah noemen,”
      vervolgde de Heer.

      “Vanaf nu
      zal haar naam Sarah zijn.
      <sup>2</sup>{' '}
      Ik zal haar zegenen.

      Zij zal de moeder worden
      van vele volken.

      Koningen zullen voortkomen
      uit haar nakomelingen.”
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          De naam Sarah betekent
          “prinses”
          of
          “koningin”.
        </p>
      </div>
    )}

    <p>
      Ibrahim عليه السلام
      wierp zich neer in sujūd.

      Gedachten gingen door zijn hoofd:

      “Ik ben bijna honderd jaar oud,
      en Sarah is negentig.”

      Toen glimlachte hij bij zichzelf
      en dacht:

      “Kan Sarah
      op zo'n hoge leeftijd
      werkelijk nog een kind krijgen?”

      Daarna zei hij:

      “O Allah,
      zegen mijn zoon Ismail.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      “Ibrahim,” zei Allah,
      “volgend jaar
      zal Sarah jou een zoon schenken.

      Je zult hem Ishaq noemen.
      <sup>3</sup>

      Door deze zoon
      zal Ik het verbond voortzetten
      dat Ik met jou heb gesloten.”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          De naam “Ishaq” betekent:
          “hij lacht.”
        </p>
      </div>
    )}

    <p>
      “Wat Ismail betreft,
      stel je hart gerust,”
      vervolgde Allah.

      “Ik zal hem zeker zegenen.

      Ik zal zijn nakomelingen
      talrijk maken
      en uit hem
      een groot volk doen ontstaan.

      Hij zal de vader worden
      van twaalf leiders.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      Nog diezelfde dag
      begon de Boodschapper van Allah,
      Ibrahim عليه السلام,
      het bevel van Allah uit te voeren.

      Hij besneed
      iedere man in zijn huis —
      degenen
      die in zijn huis geboren waren,
      degenen
      die hij had gekocht,
      en alle jongens.

      Op dat moment
      was Ibrahim عليه السلام
      negenennegentig jaar oud,
      terwijl Ismail عليه السلام
      dertien jaar oud was.

      Zo werden Ibrahim,
      Ismail,
      de dienaren,
      en iedere man
      die in het huis geboren was
      of daarin was opgenomen,
      op diezelfde dag besneden.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Abd al-Razzaq,
          “Musannaf”, vol. 2, p. 175;
          Ibn Abi Shaybah,
          “Musannaf”, vol. 11, p. 522;
          Al-Bukhari,
          “Al-Adab al-Mufrad”, p. 322.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>HET BEZOEK VAN DRIE GASTEN</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Heeft het verhaal jou bereikt
      van de geëerde gasten van Ibrahim? ...

      Zij zeiden:

      ‘Wees niet bang,’

      en zij brachten hem
      de blijde tijding
      van een wijze zoon.”
      <span className="vitalic">
        {' '}
        (Surah Adh-Dhariyat 51:24, 28).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      Op een dag zat Ibrahim عليه السلام
      bij de ingang van zijn tent
      <sup>5</sup>{' '}
      tijdens de hitte van de middag.

      Plotseling zag hij
      drie mannen
      voor zich staan.

      <span className="vitalic">
        {' '}
        Het waren engelen
        die door Allah waren gezonden
        om Zijn besluit
        aan de Boodschapper van Allah over te brengen.
      </span>{' '}

      Ibrahim stond onmiddellijk op,
      haastte zich om hen te begroeten,
      boog eerbiedig
      en zei:

      “Mijn heren,
      bewijs mij de eer
      om hier te blijven.

      Ga uw dienaar niet voorbij.

      Laat er water gebracht worden,
      zodat u uw voeten kunt wassen.

      Rust een tijdje uit
      onder de schaduw van de boom.

      Ik zal u iets te eten brengen.

      Daarna kunt u uw reis voortzetten.”
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          In die tijd
          stond zijn tent
          bij de boom van Mamre.
        </p>
      </div>
    )}

    <p>
      Zij antwoordden:

      “Goed.
      Laat het zo zijn
      als je hebt gezegd.”
    </p>

    <p>
      Ibrahim عليه السلام
      haastte zich de tent binnen
      en zei tegen Lady Sarah رضي الله عنها:

      “Snel,
      bereid drie maten
      van het beste meel
      en bak vers brood.”

      Daarna liep hij zelf
      naar de kudde
      en koos een vet kalf uit.

      Zijn dienaar slachtte het onmiddellijk
      en begon de maaltijd klaar te maken.

      Toen het vlees gereed was,
      zette de Boodschapper van Allah
      het voor zijn gasten neer,
      samen met melk
      en gestremde yoghurt,
      onder de boom.

      Maar...
    </p>

    <p className="boldItalic">
      “Toen hij zag
      dat hun handen
      zich niet naar het voedsel uitstrekten,
      werd hij ongerust
      en voelde angst in zichzelf.

      Zij zeiden:

      ‘Wees niet bang.
      Wij zijn gezonden
      naar het volk van Lut.’”
      <span className="vitalic">
        {' '}
        (Surah Hud 11:70).
      </span>
    </p>

    <p>
      Daarna vroegen de gasten:

      “Waar is jouw vrouw Sarah?”

      Ibrahim عليه السلام antwoordde:

      “Zij is hier,
      binnen in de tent.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“VOLGEND JAAR ZAL SARAH EEN ZOON HEBBEN”</p>
  </div>

  <div className="main_text">
    <p>
      “Rond deze tijd volgend jaar
      zal ik terugkomen,”
      zei een van de gasten.

      “En wanneer ik terugkeer,
      zal jouw vrouw Sarah
      een zoon in haar armen hebben.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble6')}
    >
      Op dat moment
      stond Sarah رضي الله عنها
      achter Ibrahim عليه السلام
      in de tent
      te luisteren naar het gesprek.

      Toen zij de woorden van de gast hoorde,
      lachte zij in zichzelf.
      <sup>6</sup>{' '}

      Want zowel Ibrahim عليه السلام
      als zijzelf
      waren op zeer hoge leeftijd gekomen,
      en haar maandelijkse cyclus
      was al lang opgehouden.

      Zij dacht bij zichzelf:

      “Kan zo'n vreugde
      mij op mijn oude dag
      werkelijk nog ten deel vallen?

      Ook mijn man
      is oud geworden...”
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p className="boldItalic">
          <sup>6</sup>
          “En zijn vrouw stond daar,
          en zij lachte.

          Toen gaven Wij haar
          de blijde tijding van Ishaq...

          Zij zei:

          ‘Wee mij!
          Zal ik nog een kind krijgen,
          terwijl ik een oude vrouw ben
          en mijn man een oude man is?’

          Zij zeiden:

          ‘Verwonder jij je
          over het besluit van Allah?

          De barmhartigheid
          en de zegeningen van Allah
          rusten op dit huisgezin.’”
          <span className="vitalic">
            {' '}
            (Surah Hud 11:71–73).
          </span>
        </p>
      </div>
    )}

    <p>
      Toen zei de engel van Allah
      tegen Ibrahim عليه السلام:

      “Waarom lachte Sarah?

      Waarom twijfelt zij
      dat zij een kind zal krijgen?

      Is er iets onmogelijk
      voor Allah?

      Rond deze tijd volgend jaar
      zal ik terugkomen,
      en Sarah zal een baby
      in haar armen hebben.”
    </p>

    <p>
      “Ik heb niet gelachen,”
      zei onze moeder Sarah
      uit angst.

      Maar hij antwoordde:

      “Nee,
      je hebt wel gelachen.”
    </p>
  </div>
</main>
  );
}