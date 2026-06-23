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
      “Recite to them the true account of the two sons of Adam.
      When each of them offered a sacrifice,
      it was accepted from one of them
      and not accepted from the other.
      One said, ‘I will surely kill you.’
      His brother replied,
      ‘Allah accepts only from those who have taqwā.’”
      <span className="vitalic"> (Surah Al-Ma’idah 5:27). </span>
    </p>
  </div>

  <div className="main_text">
    <p>
      Adam (peace be upon him) and Hawwa (may Allah be pleased with her)
      later had children.
      They named their first son Qabil
      and their second son Habil.
      Years passed, and the two brothers grew up.
      Habil became a shepherd,
      while Qabil became a farmer.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      One day, Qabil brought a portion
      of the produce he had harvested from the earth
      and offered it to Allah.
      Habil, however, sacrificed one of the finest
      <sup>1</sup> rams from his flock,
      offering its best parts.
      The Creator was pleased with Habil
      and accepted his sacrifice.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> See al-Tabari’s “Tarikh”.
        </p>
      </div>
    )}

    <p>
      But Qabil and his offering
      were not accepted.
      Qabil became deeply angry
      and his face darkened with resentment.
    </p>

    <p>
      “Why are you upset?” Allah asked.
      “Why has your face fallen?
      Know that a righteous deed,
      done properly,
      is accepted.
      But if your deed is not right,
      sin is already lying in wait at your door.
      If you are not careful,
      it will take hold of you!
      Yet you are meant to master it.”
    </p>

    <p className="vitalic">
      Do you see?
      After Qabil’s sacrifice was not accepted,
      he became angry.
      He was displeased with Allah’s decree.
      And that itself is sin.
      If you give way to sin,
      it will enslave you as well.
      In truth,
      we are meant to rule over sin,
      not be ruled by it.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE POWER OF SIN</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      “Then his soul made the killing of his brother seem pleasing to him,
      so Qabil killed him
      and became among the losers.”
      <span className="vitalic"> (Surah Al-Ma’idah 5:30).</span>
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup> In the following verse,
          Allah Most High mentions that He sent a crow
          to show how a dead body should be buried.
          This was the first death upon the earth.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      <span className="vitalic">
        Qabil could not take in the words of Allah.
        Instead of obeying Allah,
      </span>{' '}
      he took his younger brother Habil
      out into the open land and killed him.
      Then Allah asked Qabil:
      “Where is your brother Habil?”
      Qabil replied:
      “I do not know.
      Am I my brother’s keeper?”
    </p>

    <p>
      “What have you done?!” Allah said.
      “Your brother’s blood
      is crying out to Me from the earth!
      Now the earth shall curse you.
      No matter how much you cultivate it,
      it will no longer yield its produce for you.
      You shall live your whole life
      far from your homeland,
      wandering in restlessness.”
    </p>

    <p className="vitalic">
      Question:
      Why did Qabil kill Habil?
      Why do people so often fail
      to stop themselves from sinful deeds?
      What do you think?
      Could it be that sin carries within it
      a power capable of enslaving a person?
    </p>

    <p className="boldItalic">
      “We decreed for the Children of Israel
      that whoever kills a soul
      unjustly or without spreading corruption in the land,
      it is as though he has killed all mankind.
      And whoever saves a life,
      it is as though he has saved all mankind.
      Indeed, Our messengers came to them
      with clear proofs.
      Yet even after that,
      many of them continued
      to transgress upon the earth.”
      <span className="vitalic"> (Surah Al-Ma’idah 5:32).</span>
    </p>
  </div>
</main>
  );
}