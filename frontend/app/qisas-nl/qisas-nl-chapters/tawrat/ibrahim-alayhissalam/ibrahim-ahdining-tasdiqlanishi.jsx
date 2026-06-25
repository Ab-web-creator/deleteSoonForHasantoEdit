'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function AbrahamicCovenantConfirmed() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
  ]);

  return (
<main className="stories relative">
  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      Later gaf Allah, de Allerhoogste, Ibrahim (vrede zij met hem) een visioen
      en zei:

      “Wees niet bang, Ibrahim.
      Ik sluit een verbond
      <sup>1</sup>{' '}
      met jou.
      Jij staat onder Mijn bescherming.
      Jouw beloning zal zeer groot zijn.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          “Gedenk toen Wij van de profeten hun verbond namen:
          van jou,
          van Nūḥ,
          van Ibrahim,
          van Mūsā,
          en van ʿĪsā, zoon van Maryam.
          Wij namen van hen een plechtig verbond.”
          <span className="vitalic"> (Surah Al-Ahzab 33:7).</span>
        </p>
      </div>
    )}

    <p>
      De Boodschapper van Allah zei:

      “O mijn Heer, Allah!
      Ik heb nog steeds geen kind.
      Wat zal ik dan doen
      met de beloning die U mij geeft?

      Zal Eliëzer uit Damascus
      mijn bezit erven wanneer ik sterf?

      U hebt mij geen kind geschonken,
      dus zal mijn dienaar mijn erfgenaam worden.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      “Nee,” zei Allah (Subḥānahu wa Taʿālā).
      “Jouw dienaar zal jou niet erven.
      Integendeel,
      een zoon uit jouw eigen lichaam
      zal jouw erfgenaam zijn.”

      Daarna bracht Hij Ibrahim naar buiten en zei:

      “Kijk naar de sterren aan de hemel.
      Je kunt ze niet tellen.

      Zo talrijk zullen jouw nakomelingen zijn.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>2</sup>
          Al-Yaʿqubi, <span className="vitalic">Tarikh</span>, deel 1, p. 25.
        </p>

        <p>
          <sup>3</sup>
          De Edele Qur’an zegt:

          “En gedenk Ibrahim in het Boek.
          Voorwaar, hij was een waarheidsgetrouw man
          en een profeet.”
          <span className="vitalic"> (Surah Maryam 19:41).</span>

          Daarmee wordt trouw aan het verbond
          en oprechtheid tegenover Allah bedoeld.

          Een waarheidsgetrouw mens is trouw,
          maar wanneer de letter <span className="vitalic">dāl</span> een
          <span className="vitalic"> shaddah</span> draagt,
          wordt de betekenis versterkt:
          “uiterst waarheidsgetrouw”
          en “volkomen trouw”.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      (Ibrahim عليه السلام
      was een man die volledig op Allah vertrouwde.
      Daarom schonk Allah hem de rang van
      Siddīq
      <sup>3</sup>.)
    </p>

    <p>
      Daarna zei Allah tegen hem:

      “Ik ben Degene
      Die jou uit de stad van de Chaldeeën
      heeft weggevoerd
      om jou dit land te geven.”
    </p>

    <p>
      Ibrahim (vrede zij met hem) vroeg:

      “O mijn Heer,
      hoe zal ik weten
      dat U mij dit land zult geven?”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      Allah, de Allerhoogste, zei:

      “Breng Mij
      een driejarige vaars,
      een driejarige geit,
      een driejarige ram,
      een tortelduif
      en een jonge duif.”
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          “En gedenk toen zijn Heer Ibrahim
          met bepaalde beproevingen testte,
          en hij deze allemaal volbracht.”
          <span className="vitalic"> (Surah Al-Baqarah 2:124).</span>
        </p>
      </div>
    )}

    <p>
      De Boodschapper van Allah ging
      en bracht alles wat hem was opgedragen.

      Hij sneed alle dieren doormidden,
      behalve de vogels,
      en legde de helften tegenover elkaar.

      Terwijl de zon onderging,
      viel hij in een diepe slaap.

      In zijn visioen
      bedekte een angstaanjagende duisternis alles.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      Toen kwam een stem van Allah tot hem:

      “Jij zult een lang leven hebben
      en deze wereld in vrede verlaten.

      Jouw nakomelingen echter
      zullen vierhonderd jaar lang
      als vreemdelingen
      in een vreemd land wonen.
      <sup>5</sup>{' '}

      Zij zullen onderdrukking
      en slavernij ondergaan.

      Daarna zal Ik
      de bewoners van dat land straffen
      en jouw nakomelingen
      in vrijheid uitleiden.

      Na vier generaties,
      wanneer de zonde van de Amorieten
      haar volle maat heeft bereikt,
      zullen zij naar dit land terugkeren.”
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          De tijdsperiode
          die dit verbond omvatte
          was zeer lang.

          Er moesten bijvoorbeeld
          nog vierhonderd jaar verstrijken
          voordat de zending
          van Profeet Mūsā begon.

          Kortom,
          het verbond dat aan Ibrahim
          (vrede zij met hem) werd gegeven,
          was bedoeld voor vele generaties
          en verbond de profeten
          met elkaar.
        </p>
      </div>
    )}

    <p>
      Nadat de zon was ondergegaan
      en de duisternis was ingevallen,
      verscheen iets
      als een rokende oven
      en een brandende fakkel,
      die tussen de gedeelde offers doorging.

      Zo sloot Allah,
      de Allerhoogste,
      een verbond met Ibrahim
      (vrede zij met hem)
      en beloofde:

      “Ik zal dit land
      aan jouw nakomelingen geven.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>HET VERBOND BEGRIJPEN</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer"
      onClick={() => toggleBubble('bubble6')}
    >
      Laten wij kort uitleggen
      wat een verbond betekent.

      In die tijd betekende een verbond
      dat twee partijen
      een nieuwe relatie met elkaar aangingen.

      Vanaf dat moment
      waren zij geen vreemden meer,
      maar nauwe metgezellen,
      verbonden door trouw
      en loyaliteit.

      Daarom komt in oude geschriften
      het woord “verbond”
      vaak samen voor
      met het begrip trouw.

      Een verbond brengt dus
      plichten
      en verantwoordelijkheid met zich mee.

      Toen Allah tegen Ibrahim
      (vrede zij met hem) zei:

      “Ik heb een verbond met jou gesloten,”

      betekende dat:

      “Ik zal jou altijd trouw blijven
      en Mijn beloften vervullen.”

      Wie een verbond met Allah sluit,
      krijgt deel aan Zijn beloften —
      dat wil zeggen:
      aan de zegeningen van het verbond.

      Hier moeten wij nog iets vermelden:

      Een verbond met Allah
      gold niet alleen
      voor één generatie
      of alleen voor die ene persoon,
      maar ook voor zijn nakomelingen.

      Daarom vroeg Ibrahim
      (vrede zij met hem) zich af:

      “Ik heb geen kinderen.
      Zal mijn dienaar mijn erfenis ontvangen?”

      Maar Allah,
      de Verhevene,
      antwoordde genadig:

      “Nee.
      Ik zal jou kinderen schenken.
      Jouw nakomelingen
      zullen dit land erven.”
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Uit Imam al-Suyuti’s
          <span className="vitalic"> Al-Durr al-Manthur</span>:

          Abu Dharr zei:

          “O Boodschapper van Allah,
          bevatten de Geschriften
          van Ibrahim en Mūsā
          passages
          die lijken op wat Allah
          aan u in het Boek heeft geopenbaard?”

          De Boodschapper van Allah ﷺ antwoordde:

          “O Abu Dharr,
          reciteer deze verzen:

          {' '}
          <span className="boldItalic">
            ‘Waarlijk,
            geslaagd is hij
            die zichzelf zuivert,
            de Naam van zijn Heer gedenkt
            en het gebed verricht.

            Maar jullie geven
            de voorkeur aan het wereldse leven,
            terwijl het Hiernamaals
            beter
            en blijvender is.

            Voorwaar,
            dit staat ook
            in de vroegere Geschriften —
            de Geschriften van Ibrahim
            en Mūsā.’
          </span>
          {' '}
          <span className="vitalic">(Surah Al-A‘la 87:14–19).</span>
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE BELOFTEN VAN HET VERBOND</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Zo beloofde Allah
      aan Profeet Ibrahim
      drie dingen.

      Welke waren dat?
    </p>

    <div className="p-3 border rounded-md border-green-600">
      <p className="vitalic !my-0 py-1 px-4">
        ~ dat zijn nakomelingen talrijk zouden worden,
      </p>

      <p className="vitalic !my-0 py-1 px-4">
        ~ dat zijn nakomelingen het land zouden erven,
      </p>

      <p className="vitalic !my-0 py-1 px-4">
        ~ en dat door zijn nageslacht
        alle volken van de aarde
        gezegend zouden worden.
      </p>
    </div>

    <p className="vitalic">
      Toch had Ibrahim
      (vrede zij met hem)
      op dat moment
      nog geen kinderen.

      Hij woonde in tenten
      aan de grenzen van Kanaän,
      als een reiziger
      zonder een eigen vaste woonplaats.
    </p>
  </div>
</main>
  );
}