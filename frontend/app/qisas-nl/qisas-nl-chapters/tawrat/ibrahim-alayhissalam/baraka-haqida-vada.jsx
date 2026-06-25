'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function AbrahamicCovenant() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble5',
    'bubble6',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Wie is beter in religie dan degene die zichzelf aan Allah overgeeft,
      goed doet en de oprechte weg van Ibrahim volgt? Want Allah nam Ibrahim
      als Zijn hechte vriend.”
      <span className="vitalic">
        {' '}
        (Surah An-Nisa 4:125).
      </span>
    </p>

    <p>
      Op een dag zei Allah tegen Profeet Ibrahim:

      “Verlaat het huis van je vader
      en ga naar het land dat Ik je zal tonen.

      Ik zal uit jou een groot volk maken.
      Ik zal je zegenen,
      je naam groot maken,
      en jij zult een bron van zegen worden.

      Ik zal zegenen wie jou zegenen,
      en Ik zal vervloeken wie jou vervloeken.

      Door jou
      zullen alle volkeren van de aarde zegen ontvangen.”
    </p>

    <p className="vitalic">
      Allah, de Allerhoogste, wilde dat de mensheid
      haar band met Hem zou herstellen
      en dat het khalīfa-schap dat eerst aan Adam (vrede zij met hem)
      was toevertrouwd,
      op aarde zou voortgaan.

      Daarom koos Hij ervoor
      een verbond te sluiten
      met Ibrahim (vrede zij met hem).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>DE BELOFTE VAN ZEGEN</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Zo nam Allah, de Machtige en Majesteitelijke,
      Ibrahim (vrede zij met hem)
      onder Zijn bescherming en verklaarde:

      “Alle volkeren van de aarde
      zullen door jou gezegend worden.”

      Herinner je je hoe Adam (vrede zij met hem)
      en onze moeder Hawwa (moge Allah tevreden met haar zijn)
      ooit in het Paradijs leefden,
      in de aanwezigheid van Allah?

      Wie een vriend van Allah is,
      leeft onder Zijn zegen.

      Maar nadat zij van de verboden boom hadden gegeten,
      dwaalden zij af.

      Daardoor kwamen dood,
      vloek
      en zonde de wereld binnen.

      Allah waarschuwde hen niet voor niets toen Hij zei:

      “Op de dag dat jullie ervan eten,
      zullen jullie zeker sterven.”

      (Dit verwijst niet alleen naar lichamelijke dood,
      maar ook naar geestelijke dood —
      verwijdering van de aanwezigheid van Allah.)
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      Nu beloofde Allah aan Profeet Ibrahim
      een zegen die bedoeld was voor alle volken en naties van de aarde —
      de zegen van īmān.

      Wie deel wordt van de familie van Ibrahim
      deelt in die zegen.

      Zijn zonden worden vergeven,
      en hij behoort tot degenen
      die dicht bij Allah worden gebracht.

      Daarom zegt de Qur’an:

      {' '}
      <span className="boldItalic">
        “Volg de weg van Ibrahim.”
        <sup>1</sup>
      </span>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          De Qur’an zegt ook:

          {' '}
          <span className="boldItalic">
            “Wie zou zich afwenden van de weg van Ibrahim
            behalve iemand die zichzelf heeft vernederd?

            Wij kozen hem in deze wereld,
            en in het Hiernamaals
            zal hij zeker tot de rechtschapenen behoren.”
          </span>
          {' '}
          (Al-Baqarah 2:130).
        </p>
      </div>
    )}

    <p className="vitalic">
      Maar wie zijn de nakomelingen van Ibrahim?

      Niet iedereen kan zomaar beweren
      tot zijn familie te behoren.

      Hoe kun je lid worden
      van de familie van Ibrahim?
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      In die tijd
      was de Boodschapper van Allah vijfenzeventig jaar oud.

      Gehoorzaam aan Allah
      nam hij zijn vrouw Sarah,
      zijn neef Lut,
      <sup>2</sup>{' '}
      samen met de rijkdom,
      dienaren
      en bezittingen die hij in Harran had verkregen,
      en vertrok naar het land Kanaän.

      Nadat hij daar was aangekomen,
      openbaarde Allah, de Allerhoogste, Zijn doel aan Ibrahim (vrede zij met hem):

      “Dit land zal Ik aan jouw nakomelingen geven.”

      (In die tijd
      had Ibrahim nog geen kinderen.)
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Lut (vrede zij met hem)
          was de eerste persoon
          die in Ibrahim (vrede zij met hem) geloofde
          (zie Surah Al-‘Ankabut 29:26).

          Later
          emigreerde hij samen met Ibrahim
          omwille van Allah
          (Mir Khwand, “Rawdat al-Safa”).
        </p>
      </div>
    )}

    <p className="vitalic">
      Onder alle profeten
      werd Ibrahim (vrede zij met hem)
      bekend als
      <span className="boldItalic"> Khalilullah </span>
      — de Vriend van Allah.

      Hij geloofde in Allah.

      Omdat hij geloofde,
      gehoorzaamde hij.

      Toen Allah hem beval te vertrekken,
      ging hij op weg,
      ook al wist hij niet waar de reis heen zou leiden.

      Door īmān
      vestigde hij zich in een vreemd land.

      Hij leefde als reiziger in tenten,
      waar Allah hem ook heen leidde.

      Zijn ogen waren gericht op een waar vaderland —
      een eeuwige verblijfplaats
      waarvan Allah Zelf de Ontwerper en Bouwer is.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>IBRAHIMS REIS NAAR EGYPTE</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      In deze periode
      trof een zware hongersnood het land,
      en de Boodschapper van Allah
      reisde tijdelijk naar Egypte.

      Toen zij Egypte naderden,
      zei hij tegen zijn vrouw Sarah:

      “Jij bent een zeer mooie vrouw.

      Als de Egyptenaren ontdekken
      dat ik jouw man ben,
      kunnen zij mij om jou doden.

      Zeg daarom tegen hen:
      ‘Ik ben zijn zus.’
      <sup>3</sup>

      Als je dat doet,
      zullen zij mij goed behandelen
      en mijn leven sparen.”
      <sup>4</sup>{' '}

      Inderdaad,
      zodra zij aankwamen,
      trok Sarahs schoonheid ieders aandacht.

      De dienaren van de Farao,
      die haar buitengewone schoonheid zagen,
      prezen haar bij de Farao
      <sup>5</sup>{' '}
      en Sarah werd naar het koninklijk paleis gebracht.
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>3</sup>
          In een hadith overgeleverd door Imam al-Bukhari,
          zei Ibrahim (vrede zij met hem):

          “Ik heb jou aan hen voorgesteld als mijn zus.
          Spreek mijn uitspraak niet tegen.
          Bij Allah,
          er zijn vandaag op aarde geen gelovigen
          behalve jij en ik.”
        </p>

        <p>
          <sup>4</sup>
          Muslim, Sahih, vol. 4, p. 1840.
        </p>

        <p>
          <sup>5</sup>
          Al-Mas‘udi, “Akhbar al-Zaman”.
          Zie ook al-Bukhari, vol. 4, p. 112.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>MAAR...</p>
  </div>

  <div className="main_text">
    <p>
      Allah, de Allerhoogste, trof de Farao
      en de mensen van zijn paleis
      met zware ziekten
      omdat zij Sarah (moge Allah tevreden met haar zijn)
      in het paleis hadden genomen.

      Doodsbang door wat er gebeurde,
      liet de Farao snel Ibrahim (vrede zij met hem) roepen en zei:

      “Waarom heb je dit gedaan?

      Waarom heb je mij niet verteld
      dat Sarah jouw vrouw was?

      Waarom noemde je haar je zus?

      Als je mij de waarheid had verteld,
      zou ik haar nooit in mijn paleis hebben gebracht.

      Neem je vrouw
      en verlaat mijn land.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble6')}
    >
      Daarna gaf de Farao zijn mannen opdracht:

      “Begeleid deze man,
      zijn vrouw
      en al zijn bezittingen
      veilig naar de grens.”

      Zo keerde Ibrahim (vrede zij met hem)
      terug naar Kanaän
      met zijn vrouw
      en alles wat hij bezat.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          De Farao schonk Ibrahim (vrede zij met hem)
          vele geschenken en grote rijkdom.

          Hajar,
          onze edele moeder,
          die aan Sarah als dienares werd gegeven,
          behoorde ook tot de geschenken van de Farao
          (Ibn Sa‘d, “Tabaqat”).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>LUT (VREDE ZIJ MET HEM) SCHEIDT ZICH VAN IBRAHIM</p>
  </div>

  <div className="main_text">
    <p>
      Zowel Ibrahim (vrede zij met hem)
      als Lut (vrede zij met hem),
      die met hem meereisde,
      bezaten grote kuddes
      en veel dienaren.

      Op een dag
      werd het weideland onvoldoende,
      en er ontstond een conflict
      tussen de herders van Ibrahim
      en die van Lut.

      De Kanaänieten en Perizzieten
      woonden in die tijd ook in het gebied.

      Toen zei Ibrahim tegen Lut:

      “Wij zijn familie.
      Er mag geen ruzie zijn
      tussen ons,
      noch tussen onze herders.

      Het land is ruim.

      Laten wij in vrede uit elkaar gaan.

      Als jij hier blijft,
      zal ik ergens anders heen gaan.

      Als jij vertrekt,
      zal ik blijven.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>LUT KIEST SODOM</p>
  </div>

  <div className="main_text">
    <p>
      Lut (vrede zij met hem)
      keek naar Sodom
      en de Jordaanvallei
      en kon zijn ogen er niet van afhouden.

      Het gebied was vruchtbaar
      en rijk aan water,
      net als de landen van Egypte.

      “Ik kies de Jordaanvallei,”
      zei Lut.

      Hij scheidde zich van Ibrahim (vrede zij met hem),
      nam zijn vee en dienaren mee,
      en trok daarheen,
      waar hij zich vestigde tussen de steden van de vallei.

      Hij sloeg zijn tenten op bij Sodom.

      (De mensen van Sodom waren slecht,
      begaan met zware zonden
      en opstand tegen Allah.)

      {' '}
      <span className="vitalic">
        Wij zullen binnenkort de rest van dat verhaal vertellen
        en hoe het tot zijn einde kwam.
      </span>
    </p>
  </div>
</main>
  );
}