'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Jacob() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
  ]);

  return ( 
 <main className="stories relative">
  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “And remember Our servants Ibrahim, Ishaq, and Ya‘qub,
      men of strength and insight.

      Indeed, We chose them for a special quality:
      remembrance of the Hereafter.

      And surely, in Our sight,
      they were among the chosen and the most righteous.”
      <sup>1</sup>{' '}
      <span className="vitalic">
        (The Noble Qur’an, 38:45–47).
      </span>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          The Arabic word
          <span className="boldItalic">
            {' '}
            akhyar
          </span>
          {' '}
          means “the very best” or “the most excellent.”

          The prophets mentioned in this verse —
          Ibrahim, Ishaq, and Ya‘qub عليهم السلام —
          were among those specially chosen by Allah
          as His most righteous servants.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>SETTING OUT ON THE JOURNEY</p>
  </div>

  <div className="main_text">
    <p>
      Lady Rifqah رضي الله عنها
      knew of Esau’s intentions.

      Therefore she called Ya‘qub عليه السلام and said:

      “Your brother intends to kill you.

      You must leave at once
      and go to Haran,
      to your uncle Laban.

      Remain there until your brother’s anger subsides.

      When he has forgotten what happened,
      I will send word for you to return.

      I cannot bear to lose both of you in a single day!”
    </p>

    <p>
      Then she went to Ishaq عليه السلام and said:

      “These Hittite daughters-in-law
      have made my life miserable.

      If Ya‘qub also takes a wife from among the Hittites,
      I would rather die!”
    </p>

    <p>
      Ishaq عليه السلام called his son Ya‘qub
      and blessed him, saying:

      “I do not want you to marry a Canaanite woman.

      Set out today for Mesopotamia,
      to the house of your grandfather Bethuel.

      There,
      marry one of the daughters of your uncle Laban.

      May Allah bless you,
      grant you many children,
      and multiply your descendants
      until they become a great assembly of peoples.

      May you and your offspring inherit
      the blessing promised to your grandfather Ibrahim,
      and may you inherit the land of Canaan,
      the land in which we now live as strangers.”
    </p>

    <p>
      With these words,
      Prophet Ishaq sent Ya‘qub عليه السلام
      on his way to Mesopotamia,
      to the household of his uncle Laban.
    </p>

    <p>
      When Esau رضي الله عنه saw
      how displeased his father was
      with the Canaanite wives,
      and how Ya‘qub had been blessed and sent away
      with instructions not to marry among the Canaanites,
      he went to the family of his uncle Ismail عليه السلام
      and married Mahalath,
      the daughter of Ismail عليه السلام
      and sister of Nabayoth.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE DREAM OF YA‘QUB عليه السلام</p>
  </div>

  <div className="main_text">
    <p>
      Thus Ya‘qub عليه السلام
      departed from Beersheba
      and set out toward Haran,
      where his uncle lived.

      As the sun was setting,
      he stopped at a certain place
      to spend the night.

      Taking one of the stones there,
      he placed it beneath his head
      and fell asleep.
    </p>

    <p>
      During the night,
      he saw a dream.

      In the dream,
      there was a ladder.

      One end stood upon the earth,
      while the other reached into the highest heavens.

      The angels of Allah
      were ascending and descending upon it.
    </p>

    <p>
      Then Allah Most High spoke to Ya‘qub عليه السلام
      from above:

      “I am the God
      who established a covenant
      with your grandfather Ibrahim
      and your father Ishaq.

      The land upon which you are lying,
      I shall give to you
      and to your descendants.

      Your offspring shall become
      as numerous as the dust of the earth.

      You shall spread
      to the west and to the east,
      to the north and to the south.

      Through you and your descendants,
      all the peoples of the earth
      shall receive blessing.”
    </p>

    <p>
      “I am with you.

      Wherever you go,
      I shall protect you.

      And when the appointed time comes,
      I shall bring you back to this land.

      I will never abandon you.

      I shall remain with you
      and fulfill every promise
      that I have spoken to you.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>PROMISES GIVEN TO YA‘QUB عليه السلام</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Thus Allah, Mighty and Majestic,
      gave Ya‘qub عليه السلام
      the same three promises:
    </p>
  </div>

  <div className="border rounded-md border-green-600 p-3">
    <p className="vitalic pl-4">
      ~ that his descendants would become numerous,
    </p>

    <p className="vitalic pl-4">
      ~ that his descendants would inherit the land,
    </p>

    <p className="vitalic pl-4">
      ~ and that through his offspring,
      all the peoples of the earth
      would receive blessing.
    </p>
  </div>

  <div>
    <p className="vitalic">
      If you remember,
      these were exactly the same promises
      that had previously been given
      to Prophet Ibrahim عليه السلام
      and to Ishaq عليه السلام.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YA‘QUB عليه السلام MAKES A VOW</p>
  </div>

  <div className="main_text">
    <p>
      When Ya‘qub عليه السلام awoke from his sleep,
      he said in amazement:

      “Surely this place is sacred!
      I did not know it.”
    </p>

    <p>
      Then fear filled his heart,
      and he exclaimed:

      “This truly is the gateway to the highest heavens!”
    </p>

    <p>
      Early in the morning,
      Ya‘qub عليه السلام rose,
      took the stone upon which he had rested his head,
      set it upright,
      poured olive oil upon it,
      and dedicated it to Allah.

      He then named that place
      Bayt-El
      (its former name had been Luz).
    </p>

    <p>
      Then he said:

      “If Allah remains with me,
      protects me on my journey,
      provides me with food to eat
      and clothing to wear,
      and returns me safely
      to my father’s house,

      then I shall worship Him alone.

      This stone which I have set up
      shall become a House dedicated to Allah.

      And whatever Allah grants me,
      I shall give a tenth of it
      as an offering.”
    </p>

    <p className="vitalic">
      Allah revealed Himself to Prophet Ya‘qub
      through a dream.

      Just imagine:
      what if there truly were a staircase
      reaching from the earth
      all the way to where Allah has placed His command?

      We would climb it,
      see many things,
      and understand much that is hidden from us,
      would we not?

      Perhaps we might even glimpse Paradise itself.
      What do you think?
    </p>
  </div>

  <div className="paragraph_heading">
    <p>AT HIS UNCLE’S HOUSE</p>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub عليه السلام continued his journey
      and eventually arrived in the land of Haran.

      There he saw a well.

      Beside the well lay three flocks of sheep,
      and over the mouth of the well
      was a large stone.

      (The stone would only be removed
      once all the shepherds had gathered.

      After the sheep had finished drinking,
      the stone would be rolled back into place.)
    </p>

    <p className="!my-0">
      —Brothers,
      where are you from?
      asked Ya‘qub عليه السلام.
    </p>

    <p className="!my-0">
      —From Haran,
      they replied.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer !my-0"
      onClick={() => toggleBubble('bubble2')}
    >
      —Do you know a man named Laban?
      The grandson of Nahur?
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Nahur was the brother of Ibrahim عليه السلام.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="!my-0">—Yes, we know him.</p>

    <p className="!my-0">—Is he well?</p>

    <p className="!my-0">
      —Yes, he is well,
      one of the shepherds replied.

      Look,
      his daughter Rachel is coming now,
      bringing her sheep.
    </p>

    <p className="!my-0">
      —There is still plenty of daylight.
      Why do you not water your flocks
      and take them back out to pasture?
    </p>

    <p className="!my-0">
      —We cannot move the stone
      until all the flocks have gathered,
      they answered.
    </p>

    <p>
      While they were speaking,
      Rachel arrived with her father’s sheep.

      (Rachel herself cared for her father’s flock.)

      Immediately,
      Ya‘qub عليه السلام rolled the stone away
      from the mouth of the well
      and watered his uncle’s sheep.

      Then,
      while speaking with Rachel,
      he became overwhelmed with emotion
      and began to weep.
    </p>

    <p>
      “I am the son of your aunt Rifqah,”
      he told her.

      Rachel ran home at once
      and informed her father.
    </p>

    <p>
      When Laban heard
      that his nephew had arrived,
      he hurried out to meet him.

      He embraced him,
      kissed him,
      and brought him into his home.

      There,
      Ya‘qub عليه السلام told his uncle
      everything that had happened.
    </p>

    <p>
      “Do not worry,”
      said Laban.

      “You are my own flesh and blood.

      Stay here with me.”
    </p>
  </div>
</main>
  );
}