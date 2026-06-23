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
    <p>
      After Yusuf عليه السلام was born,
      Ya‘qub عليه السلام said to his father-in-law:

      “Now permit me to return
      to my father's homeland.

      I will take my wives and children with me.

      You know how faithfully I have served you for them.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE COVENANT BETWEEN LABAN AND YA‘QUB عليه السلام</p>
  </div>

  <div className="main_text">
    <p className="!mb-0">
      —Do not leave,
      said Laban.

      Allah has blessed me because of you.

      Look how prosperous I have become.

      It would be better if you stayed.

      Tell me how much wages you desire,
      and I will pay it.
    </p>

    <p className="!my-0">
      —You know very well how I have served you
      and how I have cared for your flocks and herds,
      replied Ya‘qub عليه السلام.

      Before I came,
      you did not possess this much wealth.

      Since my arrival,
      Allah has blessed you abundantly.

      Your livestock have multiplied greatly.

      Now it is time for me
      to think about providing for my own household as well.
    </p>

    <p className="!my-0">
      —What shall I pay you then?
    </p>

    <p className="!my-0">
      —I do not want your money.

      I am willing to continue tending your flocks,
      but I have one condition.

      Today let us separate from the flocks
      all the speckled,
      spotted,
      and dark-colored sheep,
      and all the speckled and spotted goats.

      Those shall be my wages.

      Afterwards,
      if you ever find among my animals
      a plain white sheep
      or a goat without spots or markings,
      you may accuse me of stealing it.
    </p>
  </div>

  <div className="main_text">
    <p
      className="!my-0 cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      —Very well,
      let it be as you have said,
      replied Laban.
      <sup>1</sup>{' '}

      That very day,
      he separated all the speckled and spotted goats,
      together with the spotted,
      speckled,
      and dark-colored sheep.

      Then he entrusted them to his sons and instructed them:

      “You will tend Ya‘qub’s animals.

      Keep the flocks three days’ journey apart from one another.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          At that time,
          speckled and spotted goats,
          as well as dark-colored and marked sheep,
          were relatively rare among the flocks.

          Therefore Laban considered Ya‘qub’s proposal
          to be highly favorable to himself.
        </p>
      </div>
    )}

    <p>
      Meanwhile,
      Ya‘qub عليه السلام continued tending his uncle’s flocks.

      While shepherding,
      he did something unusual.

      He cut branches from poplar,
      almond,
      and plane trees,
      and peeled strips of bark from them,
      leaving white streaks visible.

      Then he placed the peeled branches
      near the watering troughs
      where the animals came to drink.
    </p>

    <p>
      When the animals came to the troughs,
      they would mate in front of the branches.

      Afterwards,
      many of their offspring were born speckled and spotted.
    </p>

    <p>
      Ya‘qub عليه السلام separated these animals for himself.

      He also positioned the stronger animals
      facing the marked flocks.

      Whenever the robust animals mated,
      he placed the branches before them.

      But when weaker animals mated,
      he did not.

      As a result,
      the weaker livestock remained with Laban,
      while the stronger animals belonged to Ya‘qub عليه السلام.

      Thus Ya‘qub became exceedingly prosperous.

      He acquired large flocks,
      camels,
      donkeys,
      servants,
      and maidservants.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE DEPARTURE</p>
  </div>

  <div className="main_text">
    <p>
      One day,
      Ya‘qub عليه السلام overheard Laban’s sons saying:

      “Ya‘qub has taken everything that belonged to our father.

      He has become wealthy at our father’s expense.”

      Laban’s attitude toward him
      was no longer what it once had been.
    </p>

    <p>
      Around that time,
      a message came from Allah:

      “O Ya‘qub,
      return now to the land of your forefathers
      and to your relatives.

      I shall be with you.”

      Thereupon,
      Ya‘qub عليه السلام sent word to Rachel and Leah
      to come out to the fields
      where he was with the sheep.
    </p>

    <p>
      When they arrived,
      he said:

      “Your father no longer looks upon me as he once did.

      Yet the God of my father
      has always been with me.

      You know how wholeheartedly I have served him.

      Nevertheless,
      he has deceived me repeatedly.

      He has changed my wages ten times.

      But Allah did not allow him to harm me.

      Whenever he said,
      ‘The spotted animals shall be your wages,’
      the animals gave birth to spotted offspring.

      And when he said,
      ‘The speckled animals shall be your wages,’
      they all produced speckled young.

      Thus Allah took your father's wealth
      and granted it to me.
    </p>

    <p>
      During the mating season
      I saw a dream.

      In the dream,
      the goats and rams that were mating
      were speckled and spotted.

      Then an angel of Allah called to me:

      ‘Ya‘qub.’

      I replied:

      ‘Labbayk.’

      The angel said:

      ‘Look carefully.

      Do you see that all the animals mating
      are speckled and spotted?

      Allah has seen all the injustice
      that Laban has done to you.

      Do you remember what happened at Bayt-El?

      There you set up a memorial stone,
      poured oil upon it,
      and made a vow to Allah.

      Now leave this land
      and return to the place where you were born.’

      What do you think?”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Rachel and Leah رضي الله عنهما replied:

      “We have become like strangers to our father.

      We no longer expect to receive any inheritance from him.

      He has treated us as though we were foreigners.

      He sold us
      and spent for himself
      the bride-price he received on our behalf.
      <sup>2</sup>{' '}

      Therefore all the wealth
      that Allah has taken from him
      and given to you
      belongs to us and to our children.

      Whatever Allah has commanded you,
      do it.”
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Ya‘qub عليه السلام had worked for Laban’s flocks
          for fourteen years
          as the bridal payment for his wives.
        </p>
      </div>
    )}

    <p>
      So Ya‘qub عليه السلام loaded his wives and children
      onto camels,
      gathered his flocks,
      possessions,
      and all the wealth he had acquired in Mesopotamia,
      and set out toward the land of Canaan,
      where his father Ishaq عليه السلام was living.

      (Rachel also secretly took
      her father's household idols with her.)

      At that time,
      Laban had gone away
      to shear his sheep.
    </p>

    <p>
      Thus Ya‘qub عليه السلام departed secretly,
      taking everything that belonged to him.

      He crossed the Euphrates River
      and headed toward the mountains of Gilead.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>LABAN PURSUES YA‘QUB AND ALLAH INTERVENES</p>
  </div>

  <div className="main_text">
    <p>
      For three days,
      Laban did not know they had fled.

      As soon as he heard,
      he gathered his relatives
      and pursued them.

      After seven days,
      he reached the mountains of Gilead,
      near the place where Ya‘qub عليه السلام had pitched his tents.

      That night,
      Allah warned Laban in a dream:

      “Be careful.
      Do not threaten Ya‘qub.”
    </p>

    <p>
      The next day Laban confronted Ya‘qub عليه السلام:

      “What have you done?

      You left without telling me
      and carried my daughters away
      like captives!

      Why did you flee in secret?

      Had you told me,
      I would have sent you away with celebration,
      songs,
      and music.

      You did not even allow me
      to kiss my grandchildren goodbye.

      You acted foolishly.

      I have the power to harm you,
      but last night
      the God of your father appeared to me in a dream and said:
      ‘Be careful.
      Do not threaten Ya‘qub.’

      Very well,
      perhaps you longed for your father’s house.

      But why did you steal my idols?”
    </p>

    <p>
      “I was afraid,”
      Ya‘qub عليه السلام replied.

      “I thought you might take your daughters away from me.

      As for your idols,
      whoever has taken them shall not live.

      Search wherever you wish.

      Our relatives are witnesses.

      If you find anything that belongs to you,
      then speak.”

      Ya‘qub عليه السلام did not know
      that Rachel had taken them.
    </p>

    <p>
      Laban began searching.

      First he searched Ya‘qub’s tent,
      then Leah’s,
      then the tents of Bilhah and Zilpah.

      Finding nothing,
      he entered Rachel’s tent.

      Rachel had hidden the idols
      beneath a camel saddle
      and was sitting on it.

      Laban searched everywhere carefully.

      Then Rachel said:

      “Father,
      please do not be offended that I cannot rise before you.

      I am experiencing my monthly condition.”

      Therefore she remained seated.
    </p>

    <p>
      Laban found nothing and came outside.

      By then,
      Ya‘qub’s patience had reached its limit.

      “What is my crime?
      What sin have I committed
      that you pursue me like this?”
      he said angrily.

      “You have searched everything.

      Have you found even one thing
      that belongs to you?

      If so,
      bring it here before our relatives
      and let them judge between us!
    </p>

    <p>
      I have worked for you twenty years.

      During all those years,
      not one of your animals miscarried.

      I never slaughtered a single sheep from your flock for myself.

      If a wild beast carried off an animal,
      I personally bore the loss.

      Whether by day or by night,
      every missing animal was charged to me.

      I suffered under the heat of the day
      and the cold of the night.

      Sleep fled from my eyes.

      Twenty years of my life passed in your service.

      Fourteen years I worked for your two daughters.

      Then six more years I tended your flocks.

      During those six years,
      you changed my wages ten times.

      Had the God of my grandfather Ibrahim
      and my father Ishaq
      not intervened,
      you would have sent me away empty-handed even now.

      Allah saw my hardship,
      my suffering,
      and all my labor.

      That is why He warned you last night.”
    </p>

    <p>
      Laban replied:

      “Your wives are my daughters.

      Your children are my grandchildren.

      Your flocks are my flocks.

      In truth,
      all these things are mine.

      Yet today
      I can no longer exercise authority
      over my daughters and grandchildren.

      Come then,
      let us make a covenant together.

      Let it stand as a witness between us.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE COVENANT BETWEEN YA‘QUB عليه السلام AND LABAN</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Ya‘qub عليه السلام agreed.

      He set up a large stone as a memorial marker.

      Then he said to his relatives:

      “Gather stones.”

      They piled the stones together into a heap.

      Laban named it Jegar-Sahadutha,
      while Ya‘qub عليه السلام called it Galeed.

      (Both names mean
      “heap of witness.”

      Jegar-Sahadutha is Aramaic,
      while Galeed is Hebrew.

      The place was also called Mizpah.)
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          The word Mizpah means
          “watchtower” or “place of watching.”

          Laban had said:

          “Since we shall now live apart,
          may Allah Himself watch over us
          and see how faithfully we keep this covenant.”
        </p>
      </div>
    )}

    <p>
      “If you mistreat my daughters,
      or if you take other wives in addition to them,
      remember:
      even if I do not see it,
      Allah sees it,”
      said Laban.

      “This heap and this pillar
      shall witness the covenant between us.

      Neither of us shall cross this boundary
      to harm the other.

      May the God of our fathers —
      the God of Ibrahim and Nahur —
      judge between us.”

      Then Ya‘qub عليه السلام swore an oath
      by the God of his forefathers.
    </p>

    <p>
      Afterwards,
      he offered a sacrifice upon the mountain
      and invited everyone to a meal.

      They ate together
      and spent the night there.
      {' '}

      <span className="vitalic">
        (This meal was part of the covenant ceremony.
        In those days,
        when people entered into an agreement,
        they often shared a meal together as a sign of their covenant.)
      </span>
    </p>

    <p>
      Early the next morning,
      Laban rose,
      kissed his daughters and grandchildren,
      blessed them,
      and returned home.
    </p>
  </div>
</main>
  );
}