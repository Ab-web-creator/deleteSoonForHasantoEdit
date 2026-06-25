'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function MotherAgar() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p>
      Sarah, de vrouw van Ibrahim عليه السلام, had geen kinderen gekregen.
      Daarom sprak zij op een dag met haar man over haar Egyptische dienares en zei:
      “Allah heeft mij geen kind geschonken.
      Ga naar Hajar;
      misschien zal ik via haar een kind krijgen.”
      De Boodschapper van Allah, Ibrahim عليه السلام, stemde toe.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Zo gaf Lady Sarah رضي الله عنها,
      tien jaar nadat zij zich in Kanaän hadden gevestigd,
      haar Egyptische dienares Hajar
      aan haar man als vrouw.
      Niet lang daarna
      werd Hajar zwanger.
      Toen zij besefte dat zij zwanger was,
      begon zij neer te kijken op haar medevrouw,
      Lady Sarah.
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Ibn Khaldun, “Tarikh”, vol. 2, part 1, p. 36.
        </p>
      </div>
    )}

    <p>
      Toen kwam onze moeder Sarah naar de Boodschapper van Allah en klaagde:
      “Jij bent verantwoordelijk voor dit alles!
      Ik heb deze dienares aan jouw zorg toevertrouwd,
      en nu zij zwanger is,
      behandelt zij mij niet meer met respect.
      Laat Allah Zelf tussen ons oordelen!”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ibrahim عليه السلام antwoordde:
      “Zij staat onder jouw gezag.
      Doe met haar wat jij passend vindt.”

      Daarna begon Sarah رضي الله عنها
      haar dienares hard te behandelen.
      Uiteindelijk vluchtte onze moeder Hajar weg van die plaats.
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Volgens al-Tabari’s “Tarikh”,
          Ibn al-Athir’s “Al-Kamil”,
          en al-Suhayli’s “Al-Rawd al-Unuf”,
          verdreef Lady Sarah,
          overmand door jaloezie en boosheid,
          onze moeder Hajar.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE ENGEL VAN ALLAH STUURT LADY HAJAR TERUG</p>
  </div>

  <div className="main_text">
    <p>
      In de wildernis,
      bij een bron op de weg naar Shur,
      verscheen een engel van Allah aan Hajar رضي الله عنها en vroeg:
      “Hajar,
      dienares van Sarah,
      waar kom je vandaan,
      en waar ga je heen?”

      Lady Hajar antwoordde:
      “Ik vlucht weg van mijn meesteres.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “Nee,” zei de engel tegen haar.
      “Keer terug naar je meesteres
      en gehoorzaam haar.

      Allah, de Allerhoogste, zal jou steunen.

      Hij zal jouw nakomelingen
      zo sterk vermenigvuldigen
      dat niemand hen zal kunnen tellen.

      Je bent nu zwanger,
      en je zult een zoon baren.

      Noem hem Ismail.
      <sup>3</sup>

      Want Allah heeft jouw nood gehoord.

      Je zoon zal vrijheidslievend zijn als een adelaar
      en onafhankelijk als een wild paard van de woestijn.

      Hij zal apart leven van al zijn broeders.

      Zijn hand zal tegen iedereen zijn,
      en ieders hand zal tegen hem zijn.”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          De naam Ismail betekent
          “Allah hoort.”
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DE GEBOORTE VAN ISMAIL</p> <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Zo keerde onze moeder Hajar terug naar Lady Sarah.
      Toen haar tijd voltooid was,
      baarde zij een zoon voor de Boodschapper van Allah,
      Ibrahim عليه السلام.

      Profeet Ibrahim noemde zijn zoon Ismail.

      (In die tijd
      was Ibrahim عليه السلام zesentachtig jaar oud.
      <sup>4</sup>)
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Dit bericht wordt ook genoemd door Ibn Khaldun.
          Zie ook:
          Ibn Qutaybah, “Al-Ma‘arif”, p. 16;
          al-Ya‘qubi, “Tarikh”, vol. 1, p. 25.
        </p>
      </div>
    )}
  </div>
</main>
  );
}