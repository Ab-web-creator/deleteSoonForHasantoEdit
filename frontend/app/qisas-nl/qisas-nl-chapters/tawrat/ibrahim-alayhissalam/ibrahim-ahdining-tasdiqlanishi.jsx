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
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Later, Allah Most High gave Ibrahim (peace be upon him) a vision and said:
      “Do not fear, Ibrahim.
      I am making a covenant
      <sup>1</sup>{" "}
      with you.
      You are under My protection.
      Your reward shall be very great.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          “Remember when We took from the prophets their covenant:
          from you,
          from Nuh,
          from Ibrahim,
          from Musa,
          and from Isa son of Maryam.
          We took from them a solemn covenant.”
          (Surah Al-Ahzab 33:7).
        </p>
      </div>
    )}

    <p>
      The Messenger of Allah said:
      “O my Lord, Allah!
      I still have no child.
      So what shall I do with the reward You give me?

      Will Eliezer of Damascus inherit my wealth when I die?

      You have not granted me a child,
      so my servant will become my heir.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “No,” said Allah (Subhanahu wa Ta‘ala).
      “Your servant will not inherit you.
      Rather,
      a son from your own body
      will be your heir.”

      Then He brought Ibrahim outside and said:

      “Look at the stars in the sky.
      You cannot count them to the end.

      Your descendants will be as numerous as those stars.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>2</sup>
          Al-Ya‘qubi, “Tarikh”, vol. 1, p. 25.
        </p>

        <p>
          <sup>3</sup>
          The Noble Qur’an says:
          “Mention Ibrahim in the Book.
          Indeed, he was a man of truth and a prophet”
          (Surah Maryam, verse 41).

          The meaning is faithfulness to the covenant
          and loyalty to Allah.

          A truthful person is a faithful person;
          but when the letter dal carries a shaddah,
          the meaning is intensified:
          “extremely truthful,”
          “deeply faithful.”
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      (Ibrahim عليه السلام
      was a man who relied upon Allah.
      For this reason,
      Allah granted him the rank of
       Siddiq
      <sup>3</sup>.)
    </p>

    <p>
      Then Allah said to him:
      “I am the One who brought you
      out of the city of the Chaldeans
      in order to give you this land.”
    </p>

    <p>
      Ibrahim (peace be upon him) asked:
      “O my Lord,
      how shall I know
      that You will give me this land?”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Allah Most High said:
      “Bring Me a three-year-old heifer,
      a three-year-old goat,
      a three-year-old ram,
      a turtledove,
      and a young pigeon.”
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          “And remember when his Lord tested Ibrahim
          with certain commands,
          and he fulfilled them completely.”
          (Surah Al-Baqarah 2:124).
        </p>
      </div>
    )}

    <p>
      The Messenger of Allah went
      and brought what had been commanded.
      He cut all of them in half,
      except the birds,
      and placed the pieces opposite one another.

      As the sun was setting,
      he fell into a deep sleep.
      In his vision,
      a terrifying darkness covered everything.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Then a voice from Allah came to him:

      “You shall live a long life
      and depart from this world in peace.

      Your descendants,
      however,
      will live as strangers in a foreign land
      for four hundred years.
      <sup>5</sup> {" "}

      They will suffer oppression in slavery.

      Afterwards,
      I will punish the people of that land
      and bring your descendants out into freedom.

      After four generations,
      when the sin of the Amorites reaches its fullness,
      they will return to this land.”
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          The timespan contained in this covenant
          covered a very long period.

          For example,
          there were still four hundred years
          before the mission of Prophet Musa would begin.

          In short,
          the covenant given to Ibrahim (peace be upon him)
          was intended for many generations
          and was a covenant that connected
          the prophets to one another.
        </p>
      </div>
    )}

    <p>
      After the sun had set
      and darkness had fallen,
      something like a smoking oven
      and a blazing torch appeared
      and passed between the divided sacrifices.

      In this way,
      Allah Most High established a covenant
      with Ibrahim (peace be upon him)
      and promised:

      “I shall give this land
      to your descendants.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>UNDERSTANDING THE COVENANT</p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Let us briefly explain
      what a covenant means.

      In that era,
      the word covenant meant that two parties
      had entered a new relationship with one another.

      From that point on,
      they were no longer strangers,
      but close companions,
      bound by loyalty and faithfulness.

      For this reason,
      in ancient writings,
      the word covenant often appears
      together with the idea of faithfulness.

      A covenant therefore includes
      duty and responsibility.

      When Allah said to Ibrahim (peace be upon him),
      “I have made a covenant with you,”
      it meant:

      “I shall always remain faithful to you,
      and I shall fulfill the promises I have given.”

      Whoever enters into covenant with Allah
      shares in His promises —
      that is,
      in the blessings of the covenant.

      Here we should also mention something else:
      a covenant made with Allah
      was not only for one generation
      or only for that person himself,
      but also for his descendants.

      This is why Ibrahim (peace be upon him)
      wondered:

      “I have no children.
      Will my inheritance pass to my servant?”

      But Allah, Glorified and Exalted,
      graciously replied:

      “No.
      I shall grant you children.
      Your descendants shall inherit these lands.”
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          From Imam al-Suyuti’s “Al-Durr al-Manthur”:

          Abu Dharr said:
          “O Messenger of Allah,
          are there passages in the Scrolls of Ibrahim and Musa
          that resemble what Allah has revealed to you in the Book?”

          The Messenger of Allah ﷺ replied:
          “O Abu Dharr,
          recite this verse:

          {' '}
          <span className="boldItalic">
            ‘Indeed,
            successful is the one who purifies himself,
            remembers the Name of his Lord,
            and prays.

            Yet you prefer the life of this world,
            while the Hereafter is better and more lasting.

            Indeed,
            this is in the former scriptures —
            the scriptures of Ibrahim and Musa.’
          </span>
          {' '}
          (Surah Al-A‘la 87:14–19).”
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE PROMISES GIVEN THROUGH THE COVENANT</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Thus Allah promised Prophet Ibrahim
      three things.

      What were they?
    </p>

    <div className="p-3  border rounded-md border-green-600">
      <p className="vitalic !my-0 py-1 px-4">
        ~ that his descendants would become many,
      </p>

      <p className="vitalic !my-0 py-1 px-4">
        ~ that his descendants would inherit the land,
      </p>

      <p className="vitalic !my-0 py-1 px-4">
        ~ and that through his offspring,
        blessing would be shared
        with all the peoples of the earth.
      </p>
    </div>

    <p className="vitalic">
      Yet at that time,
      Ibrahim (peace be upon him)
      had no children.

      He was living in tents
      on the borders of Canaan,
      a traveler with no permanent home of his own.
    </p>
  </div>
</main>
  );
}