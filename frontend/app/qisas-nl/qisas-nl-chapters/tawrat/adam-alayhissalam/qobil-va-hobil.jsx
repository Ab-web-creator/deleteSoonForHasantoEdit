'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function KainAbel() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
  ]);

  return ( 
    <main className="stories relative">
      <div className="main_text">
        <p className="boldItalic">
          “En draag hun het ware verhaal voor
          van de twee zonen van Adam.

          Toen zij beiden een offer brachten,
          werd het van de één aanvaard
          en van de ander niet aanvaard.

          De één zei:
          ‘Ik zal jou zeker doden.’

          Zijn broer antwoordde:
          ‘Allah aanvaardt alleen
          van degenen die taqwa hebben.’”
          <span className="vitalic"> (Soera Al-Ma’idah 5:27). </span>
        </p>
      </div>

      <div className="main_text">
        <p>
          Profeet Adam alayhis-salam
          en Moeder Hawwa رضي الله عنها
          kregen later kinderen.

          Zij noemden hun eerste zoon Qabil
          en hun tweede zoon Habil.

          Jaren gingen voorbij
          en de twee broers groeiden op.

          Habil werd herder,
          terwijl Qabil landbouwer werd.
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble1')}
        >
          Op een dag bracht Qabil een deel
          van de opbrengst die hij
          uit de aarde had geoogst
          en bood dit aan Allah aan.

          Habil daarentegen offerde
          een van de beste
          <sup>1</sup> rammen uit zijn kudde
          en bood de beste delen ervan aan.

          De Schepper was tevreden met Habil
          en aanvaardde zijn offer.
        </p>

        {openBubbles['bubble1'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble1')}
          >
            <p>
              <sup>1</sup> Zie “Tarikh” van al-Tabari.
            </p>
          </div>
        )}

        <p>
          Maar Qabil en zijn offer
          werden niet aanvaard.

          Qabil werd zeer boos
          en zijn gezicht verduisterde
          door wrok.
        </p>

        <p>
          “Waarom ben je boos?”
          vroeg Allah.

          “Waarom is je gezicht somber geworden?

          Weet dat een rechtschapen daad,
          wanneer zij op de juiste wijze wordt verricht,
          aanvaard wordt.

          Maar als je daad niet juist is,
          ligt de zonde al op de loer
          bij je deur.

          Als je niet voorzichtig bent,
          zal zij grip op je krijgen!

          Toch is het de bedoeling
          dat jij haar overwint.”
        </p>

        <p className="vitalic">
          Zie je?

          Nadat het offer van Qabil
          niet werd aanvaard,
          werd hij boos.

          Hij was niet tevreden
          met Allahs besluit.

          En dat op zichzelf is al zonde.

          Als je toegeeft aan zonde,
          zal zij ook jou tot slaaf maken.

          In werkelijkheid
          is het de bedoeling dat wij
          over de zonde heersen,
          niet dat wij door haar beheerst worden.
        </p>
      </div>

      <div className="paragraph_heading">
        <p>DE MACHT VAN DE ZONDE</p>
      </div>

      <div className="main_text">
        <p
          className="boldItalic cursor-pointer "
          onClick={() => toggleBubble('bubble2')}
        >
          “Toen maakte zijn nafs
          het doden van zijn broer
          aantrekkelijk voor hem.

          Zo doodde Qabil hem
          en werd hij een van de verliezers.”
          <span className="vitalic"> (Soera Al-Ma’idah 5:30).</span>
          <sup>2</sup>
        </p>

        {openBubbles['bubble2'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble2')}
          >
            <p>
              <sup>2</sup> In de volgende ayah
              vermeldt Allah de Allerhoogste
              dat Hij een kraai stuurde
              om te tonen hoe een dode begraven moest worden.

              Dit was de eerste dood op aarde.
            </p>
          </div>
        )}
      </div>

      <div className="main_text">
        <p>
          <span className="vitalic">
            Qabil kon de woorden van Allah
            niet tot zich nemen.

            In plaats van Allah te gehoorzamen,
          </span>{' '}
          nam hij zijn jongere broer Habil mee
          naar het open veld
          en doodde hem.

          Daarna vroeg Allah aan Qabil:

          “Waar is jouw broer Habil?”

          Qabil antwoordde:

          “Ik weet het niet.

          Ben ik soms de hoeder van mijn broer?”
        </p>

        <p>
          “Wat heb jij gedaan?!”
          zei Allah.

          “Het bloed van jouw broer
          roept tot Mij vanuit de aarde!

          Nu zal de aarde jou vervloeken.

          Hoeveel je haar ook bewerkt,
          zij zal haar opbrengst
          niet meer aan jou geven.

          Je zult heel je leven
          ver van je thuisland leven,
          zwervend en rusteloos.”
        </p>

        <p className="vitalic">
          Vraag:

          Waarom doodde Qabil Habil?

          Waarom lukt het mensen zo vaak niet
          om zichzelf tegen te houden
          van zondige daden?

          Wat denk jij?

          Zou het kunnen dat zonde
          een macht in zich draagt
          die een mens tot slaaf kan maken?
        </p>

        <p className="boldItalic">
          “Wij hebben Bani Israil voorgeschreven
          dat wie een ziel doodt
          zonder recht
          en zonder dat deze verderf
          op aarde verspreidde,

          het is alsof hij
          de hele mensheid heeft gedood.

          En wie een leven redt,
          het is alsof hij
          de hele mensheid heeft gered.

          Voorzeker,
          Onze boodschappers kwamen tot hen
          met duidelijke bewijzen.

          Toch bleven velen van hen,
          zelfs daarna,
          buitensporig handelen op aarde.”
          <span className="vitalic"> (Soera Al-Ma’idah 5:32).</span>
        </p>
      </div>
    </main>
  );
}