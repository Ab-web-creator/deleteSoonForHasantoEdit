'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EXAMPLE() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
  ]);

  return (
    <main className="stories relative">
  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Ishaq عليه السلام had grown old,
      and his eyesight had become weak.
      <sup>1</sup>{' '}

      One day,
      he called his firstborn son Esau to him:

      “My son!”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Ibn Habib,
          “Kitab al-Muhabbar”, p. 296;
          Al-Mas‘udi,
          “Muruj al-Dhahab”, vol. 1, p. 47.
        </p>
      </div>
    )}

    <p>
      “Labbayk,
      my father,”
      Esau رضي الله عنه replied.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ishaq عليه السلام said:

      “I have grown old,
      and I do not know when my time will come.

      So take your bow,
      go out,
      and hunt some game for me.

      Then prepare from it the food I love.

      Before I die,
      I wish to give you the blessing of Allah.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          He thought that the chain of blessing
          promised to Ibrahim عليه السلام
          should continue through his firstborn son.
        </p>
      </div>
    )}

    <p>
      Lady Rifqah رضي الله عنها
      was listening to their conversation.

      As soon as Esau left to hunt,
      she quickly called her younger son Ya‘qub and said:
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “My son!
      I heard your father say to Esau:

      ‘Go hunt some game for me.
      Prepare the food I love.
      Before I die,
      I wish to give you the blessing of Allah.’

      Now listen carefully to what I tell you.

      Go quickly to the flock
      and bring me two fat young goats.

      I will prepare from them
      the food your father loves.

      You will take it in to your father,
      and after he eats,
      before he dies,
      he will give the blessing to you,
      not to Esau.
      <sup>3</sup>”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Esau had already sold his birthright
          to his younger brother Ya‘qub.

          Even so,
          he said nothing about this to his father
          and went out to hunt.
        </p>
      </div>
    )}

    <p className="vitalic">
      Do you remember?

      Allah, Glorified and Exalted,
      had once told Lady Rifqah:

      “Two nations are within your womb.
      Two separate peoples shall come forth from you.
      One shall be stronger than the other,
      and the elder shall serve the younger.”

      These two nations would arise
      from these two brothers.

      The statement,
      “the elder shall serve the younger,”
      meant that the chain of blessing
      would continue through the descendants
      of her younger son.

      For this reason,
      when Lady Rifqah heard what Ishaq عليه السلام had said,
      she became deeply troubled.
    </p>

    <p>
      “Mother!”
      said Ya‘qub عليه السلام.

      “My brother’s body is hairy,
      but mine is smooth.

      If my father touches me,
      I will appear to him as a deceiver.

      Then instead of blessing me,
      he may curse me and say:
      ‘Are you trying to make a fool of me?’”
    </p>

    <p>
      “Let that curse fall upon me,”
      replied Rifqah رضي الله عنها.

      “Go now,
      and do exactly as I have told you.

      Bring me the young goats.”
    </p>

    <p>
      Ya‘qub عليه السلام brought the goats and slaughtered them.

      Lady Rifqah prepared the food
      that Ishaq عليه السلام loved.

      Then she took Esau’s finest clothes from the house
      and dressed Ya‘qub عليه السلام in them.

      She covered his hands and neck
      with the skins of the young goats.

      Then she placed the food and bread in his hands
      and sent him in to his father.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">—Father!</p>

    <p className="!my-0">
      —Yes, my son?
      Who are you —
      Esau or Ya‘qub?
      asked his father.
    </p>

    <p className="!my-0">
      —It is I,
      your firstborn son Esau,
      Ya‘qub said to his father.

      I have prepared food from the hunt
      so that I may receive your du‘a.

      Please rise and eat.
    </p>

    <p className="!my-0">
      —How did you find it so quickly?
      his father asked in surprise.
    </p>

    <p className="!my-0">
      —Allah brought it before me,
      Ya‘qub عليه السلام replied.
    </p>

    <p className="!my-0">
      —Come closer, my son.
      Let me touch you
      and see whether you are truly Esau.
    </p>
  </div>

  <div className="main_text">
    <p className="">
      Ya‘qub عليه السلام came near to his father.

      His father touched him and said:

      “The voice is the voice of Ya‘qub,
      but the hands are the hands of Esau.”
    </p>

    <p>
      Ya‘qub’s hands were covered with skins,
      so they felt hairy like the hands of his brother Esau.

      Because of this,
      Ishaq عليه السلام thought he was Esau.

      Still,
      he asked once more:
    </p>

    <p className="!my-0">
      —Are you truly Esau?
    </p>

    <p className="!my-0">
      —Yes,
      I am Esau,
      Ya‘qub عليه السلام replied.
    </p>

    <p>
      Then his father said:

      “Bring me your food.
      After I eat,
      I will give you the blessing.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE BLESSING GIVEN ONLY ONCE</p>
  </div>

  <div className="main_text">
    <p>
      After he had eaten and drunk,
      Ishaq عليه السلام said:

      “Come closer,
      my son,
      and kiss me.”

      Ya‘qub عليه السلام came near
      and kissed his father.

      Ishaq عليه السلام smelled the scent of his garments,
      then blessed him and said:

      “The scent of my son
      is like the scent of a field
      blessed by Allah!
    </p>

    <div className="pl-4 leading-tight">
      <p className="!my-0">
        May Allah always send rain upon your crops,
      </p>

      <p className="!my-0">
        may your lands be fertile,
        your grain abundant,
        and your grapes plentiful.
      </p>

      <p className="!my-0">
        May peoples serve you,
        and nations bow before you.
      </p>

      <p className="!my-0">
        You shall be lord over your brothers,
      </p>

      <p className="!my-0">
        and your relatives shall bow before you.
      </p>

      <p className="!my-0">
        May those who curse you be cursed,
      </p>

      <p className="!my-0">
        and may those who bless you be blessed!”
      </p>
    </div>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub عليه السلام received his father’s du‘a
      and had only just left
      when his brother Esau returned from the hunt.

      He prepared the food
      and came in to his father:

      “Father,
      please rise.

      I have prepared for you
      the food you love from the hunt.

      Eat,
      and then bless me.”
    </p>
  </div>

  <div className="leading-tight space-y-0">
    <p className="!my-0 leading-tight">
      —What?!
      Who are you?
      asked Ishaq عليه السلام.
    </p>

    <p className="!my-0 leading-tight">
      —I am your firstborn son Esau.
    </p>
  </div>

  <div className="main_text">
    <p>
      When Ishaq عليه السلام heard this,
      he trembled greatly and became deeply troubled.

      “Then who was it
      who prepared food and brought it to me?

      I ate it
      and gave him the blessing.

      Now the blessing belongs to him,”
      he said, trembling.
    </p>

    <p>
      When Esau رضي الله عنه heard this,
      he became overwhelmed with anger and grief.

      Then he pleaded:

      “Father,
      my father,
      bless me too,
      my father!”
    </p>

    <p>
      “Your brother came with cunning
      and took your blessing,
      my son,”
      Ishaq عليه السلام said.
    </p>

    <p>
      Esau رضي الله عنه cried out:

      “Was he not rightly named Ya‘qub?

      This is the second time
      he has deceived me.

      First he took my birthright,
      and now he has taken my blessing too.

      Have you not left even one blessing for me?”
    </p>

    <p>
      “I have made him lord over you,”
      said Ishaq عليه السلام.

      “I declared that all his brothers
      would serve him.

      I provided him with grain and wine.

      What then can I still do for you,
      my son?”
    </p>

    <p>
      “Do you have only one blessing?

      Bless me too!”
      he wept.
    </p>

    <p>
      “You shall be deprived
      of the richest lands.

      You shall live by the shadow of your sword,
      and you shall serve your brother.

      But when you long for freedom,
      you shall break his yoke
      from your neck,”
      said Ishaq عليه السلام.
    </p>

    <p>
      Esau رضي الله عنه came to hate his brother deeply.

      “As long as my father is alive,
      I will remain silent.

      But when the time comes,
      I will surely kill him,”
      he said to himself.
    </p>
  </div>
</main>
  );
}