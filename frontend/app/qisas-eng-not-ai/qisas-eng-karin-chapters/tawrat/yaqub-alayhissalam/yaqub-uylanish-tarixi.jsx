'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EXAMPLE() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
    'bubble9',
  ]);

  return ( 
     <main className="stories relative">
  <div className="main_text">
    <p>
      After Ya‘qub عليه السلام had lived there for about a month,
      his uncle asked him:

      “Just because you are my relative,
      should you work for me without wages?

      Tell me,
      what shall I pay you for your service?”
    </p>

    <p>
      Laban had two daughters.

      The elder was named Leah,
      while the younger was Rachel —
      the same young woman whom Ya‘qub عليه السلام had met
      by the well while she was watering her sheep.

      (Rachel was a woman of striking beauty and graceful form.
      Leah, on the other hand,
      was pleasant and gentle in appearance.)
    </p>

    <p>
      Ya‘qub عليه السلام loved Rachel.

      Therefore he said:

      “If you give me your younger daughter Rachel in marriage,
      I will serve you for seven years.”
    </p>

    <p>
      “Very well,”
      Laban replied.

      “It is better that I give her to you
      than to a stranger.”

      Thus Ya‘qub عليه السلام served his uncle
      for seven years in exchange for Rachel.

      Yet because of his love for her,
      those seven years seemed to him
      like only a few days.
    </p>

    <p>
      When the seven years had passed,
      he said to Laban:

      “The agreed time has ended.

      Please allow the wedding to take place.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE WEDDING</p>
  </div>

  <div className="main_text">
    <p>
      Laban gathered the people
      and held a wedding feast.

      But that night,
      instead of bringing Rachel,
      he brought his elder daughter Leah to Ya‘qub.

      (Laban had also given Leah
      a servant girl named Zilpah
      to attend her.)
    </p>

    <p>
      The next morning,
      Ya‘qub عليه السلام looked —
      and it was Leah lying beside him,
      not Rachel!

      “What have you done?”
      he cried to his uncle.

      “I served you seven years for Rachel!

      Why have you deceived me?”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “Among our people,
      the younger daughter is not given in marriage
      before the elder,”
      Laban replied.

      “If you wish,
      wait one week
      <sup>1</sup>{' '}
      until the wedding celebrations are finished.

      Then I will also give Rachel to you.

      But you must serve me
      for another seven years.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          According to the custom of that time,
          wedding celebrations lasted seven days.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ya‘qub عليه السلام agreed.

      After the wedding week had ended,
      Laban gave his younger daughter Rachel
      to Ya‘qub عليه السلام in marriage as well.
      <sup>2</sup>{' '}

      (He also gave Rachel
      a servant girl named Bilhah.)

      <span className="vitalic">
        {' '}
        This is how Prophet Ya‘qub came to marry.
      </span>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          According to the customs of that era,
          it was permissible to marry two sisters.

          Later,
          such a practice was prohibited in the Shariah.
        </p>
      </div>
    )}

    <p>
      Yet Ya‘qub عليه السلام loved Rachel
      more than Leah.

      Therefore he served Laban
      another seven years for Rachel.
    </p>

    <p className="vitalic">
      It sounds unusual to modern ears
      that Ya‘qub عليه السلام worked fourteen years
      in order to marry Rachel,
      does it not?

      But the truth is that people are willing
      to pay a great price
      for what they truly value.

      Apparently,
      marrying a righteous and beloved wife
      was extremely important to Prophet Ya‘qub.

      He desired to spend his entire life
      with Rachel.
    </p>

    <p className="vitalic">
      Let us think about ourselves for a moment.

      What do you consider
      the most important thing in life?

      For what goal
      would you be willing to spend
      your years,
      your strength,
      or your wealth?

      What are you spending your time on today?

      And is the thing consuming your time and resources
      truly worthy of that sacrifice?
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE RIVALRY BETWEEN RACHEL AND LEAH</p>
  </div>

  <div className="main_text">
    <p>
      Seeing that her husband loved her less,
      Allah, Glorified and Exalted,
      blessed Leah with children.

      Rachel,
      however,
      remained unable to conceive.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      When Leah رضي الله عنها gave birth to her first son,
      she said:

      “Allah has seen my humiliation
      and has given me a son.

      Surely now my husband will love me.”

      Therefore she named him Reuben.
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          The name Reuben means:
          “Behold, a son.”
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      When she gave birth to her second son,
      she said:

      “Allah heard that my husband does not love me,
      and He has given me another son.”

      Therefore she named him Simeon.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Derived from a word meaning
          “one who hears.”
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Then she conceived a third time
      and bore another son.

      She said:

      “Now that I have borne my husband three sons,
      he will surely become attached to me.”

      Therefore she named him Levi.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          Meaning:
          “to be joined” or “attached.”
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Then she gave birth to a fourth son.

      “All praise belongs to Allah!”
      she exclaimed.

      Therefore she named him Judah.
      <sup>6</sup>

      After that,
      she stopped bearing children for a time.
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          The name Judah means:
          “praise” or “thanksgiving.”
        </p>
      </div>
    )}

    <p>
      Rachel,
      unable to have children,
      became jealous of her sister.

      One day she even quarreled with her husband,
      saying:

      “Give me children,
      or I shall die!”
    </p>

    <p>
      Ya‘qub عليه السلام became upset and replied:

      “Am I Allah,
      that I can give you children?”
    </p>

    <p>
      Then Rachel رضي الله عنها said:

      “In that case,
      take my servant girl
      and let her bear children on my behalf,
      so that I too may become a mother.”

      Thus she gave her servant Bilhah
      to her husband.
    </p>

    <p>
      Bilhah conceived
      and gave birth to a son.

      Rachel said:

      “Allah has vindicated me.

      He has heard my plea
      and granted me a child.”

      Therefore she named him Dan.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      Later Bilhah conceived again
      and bore Ya‘qub عليه السلام another son.

      This time Rachel رضي الله عنها said:

      “I have wrestled greatly with my sister,
      and I have prevailed.”

      Therefore she named the child Naphtali.
      <sup>7</sup>
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          The name Naphtali means:
          “my wrestling.”
        </p>
      </div>
    )}

    <p>
      Leah رضي الله عنها,
      seeing that she was no longer bearing children,
      gave her servant Zilpah
      to her husband as a wife.

      Zilpah conceived
      and bore a son.

      Then Leah said:

      “Good fortune has come to me!”

      And she named him Gad.
    </p>

    <p>
      Afterwards Zilpah bore another son.

      “How happy I am!”
      said Leah.

      “Now women will call me blessed.”

      Therefore she named him Asher.
    </p>

    <p>
      During the wheat harvest,
      Reuben brought some mandrakes from the field
      and gave them to his mother Leah.

      Rachel then said to Leah:

      “Please give me some of the mandrakes
      your son brought.”
    </p>

    <p>
      “Is it not enough
      that you have taken my husband?”
      Leah replied.

      “Now you want to take
      my son’s mandrakes as well?”
    </p>

    <p>
      “Very well,”
      said Rachel.

      “Give me the mandrakes,
      and in exchange
      my husband shall spend tonight with you.”
    </p>

    <p>
      That evening,
      when Ya‘qub عليه السلام returned from the field,
      Leah went out to meet him and said:

      “Tonight you must stay with me.

      I have hired you
      with my son’s mandrakes.”
    </p>

    <p>
      So Ya‘qub عليه السلام spent the night with her.

      She conceived
      and bore him a fifth son.

      Allah had answered Leah’s prayers.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      Leah said:

      “Allah has rewarded me
      because I gave my servant to my husband.”

      Therefore she named her son Issachar.
      <sup>8</sup>
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>
          The name Issachar means:
          “reward.”
        </p>
      </div>
    )}

    <p>
      Then she conceived again
      and bore Ya‘qub عليه السلام a sixth son.

      “This is Allah’s gift to me,”
      she said.

      “I have borne my husband six sons.
      Surely now he will honor me.”

      Therefore she named him Zebulun.

      Afterwards she gave birth to a daughter
      and named her Dinah.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble9')}
    >
      At last,
      Rachel’s prayers were also answered.

      She conceived
      and gave birth to a son.

      “Allah has removed my disgrace
      and delivered me
      from the shame people spoke of,”
      she said.

      “May Allah grant me yet another son.”

      Therefore she named the child Yusuf.
      <sup>9</sup>
    </p>

    {openBubbles['bubble9'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble9')}
      >
        <p>
          <sup>9</sup>
          The name Yusuf,
          in Hebrew,
          means:
          “may He add” or “increase.”
        </p>
      </div>
    )}
  </div>
</main>
  );
}