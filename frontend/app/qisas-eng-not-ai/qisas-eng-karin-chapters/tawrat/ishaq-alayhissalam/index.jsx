'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Isaak() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
  ]);

  return (
  <main className="stories relative">
  <div className="decor_line"></div>

  <div className="main_text">
    <p>
      <span className="vitalic">
        Much time passed.
        Then our mother Sarah رضي الله عنها also passed away.
      </span>
      {' '}
      Ibrahim عليه السلام had by then reached an advanced age,
      and Allah, Glorified and Exalted,
      had blessed him in every way.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE MARRIAGE OF ISHAQ </p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p>
      One day, prophet Ibrahim (a.s.) called for his most trusted servant:
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “Come here!
      Swear to me that you will not take a wife
      for my son Ishaq from among the Canaanites.
      <sup>1</sup>{' '}

      Instead,
      you shall go to my relatives
      and bring back a bride for him from among them.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          The land of Canaan was inhabited by pagan peoples
          who worshipped idols.
        </p>
      </div>
    )}

    <p>
      “But what if the young woman refuses to return here with me?”
      the servant asked.
      “Should I then take your son back to your homeland?”
    </p>

    <p>
      “No!” replied rasulullah. “Never take my son there. Allah Most High will send His angel with you.

      You shall bring back a wife for my son from among my relatives.

      The God who brought me out of my homeland
      promised me:
      ‘I shall give this land to your descendants.’

      If the woman refuses to come,
      then you are released from your oath.

      But under no circumstances
      are you to take my son there.”
    </p>

    <p>
      After swearing the oath before his master,
      Ibrahim’s servant loaded ten camels
      with precious gifts
      and set out on his journey.

      Eventually he arrived in Aram-Naharaim,
      the region where Nahur lived.
    </p>

    <p>
      There he made the camels kneel
      beside a well outside the city.

      It was evening,
      and the women of the town
      were coming as usual
      to draw water.
    </p>

    <p>
      Then the servant raised his hands in du‘a:

      “O Allah,
      Lord who established a covenant with my master Ibrahim!

      I beg You,
      do not withhold Your favor from my master.

      Grant success to my mission.

      Here I stand beside the well,
      while the daughters of the city come to draw water.

      If I say to one of them,
      ‘Please lower your jar that I may drink,’
      and she replies,
      ‘Drink,
      and I shall also draw water for your camels,’
      then let that be the woman
      whom You have chosen for Your servant Ishaq.

      Through this,
      I shall know that You have shown mercy
      to my master Ibrahim...”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE ANSWER TO THE DU‘A</p>
  </div>

  <div className="main_text">
    <p>
      Before he had even finished making du‘a,
      a young woman named Rifqah,
      the daughter of Bethuel,
      arrived carrying a water jar upon her shoulder.

      (Bethuel was the son of Nahur,
      the brother of Ibrahim عليه السلام.)
</p>
<p>
  
      Rifqah was exceptionally beautiful.

      She went down to the well,
      filled her jar,
      and came back up.
    </p>

    <p>
      The servant hurried toward her and said:

      “Please,
      let me drink a little water from your jar.”
    </p>

    <p>
      “Drink, sir,”
      Rifqah replied,
      lowering the jar from her shoulder.

      Then she added:

      “I shall also draw water for your camels.”

      She ran to the trough,
      emptied the remaining water,
      and hurried back to the well again and again
      until all the camels had drunk their fill.
    </p>

    <p>
      Meanwhile,
      Ibrahim’s servant watched her carefully in silence,
      thinking:

      “It seems Allah has blessed my journey.”
    </p>

    <p>
      When the camels had finished drinking,
      he brought out a valuable gold nose ring
      and two large gold bracelets.

      Then he asked:

      “Whose daughter are you?

      Is there room in your family’s home
      for us to spend the night?”
    </p>

    <p>
      “I am the daughter of Bethuel,”
      she replied.

      “The granddaughter of Nahur and Milkah.

      There is plenty of room in our home,
      and we have abundant straw and fodder
      for your camels.”
    </p>

    <p>
      At once,
      Ibrahim’s servant bowed down
      and prostrated before Allah.

      He said:

      “O Allah,
      God of my master Ibrahim!

      Never have You withheld
      Your mercy and faithfulness from my master.

      Today once again
      You have guided my path
      and brought me to the house of his relatives.

      All praise belongs to You!”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>IN THE HOUSE OF BETHUEL</p>
  </div>

  <div className="main_text">
    <p>
      Rifqah ran home
      and told her family everything that had happened.

      She had a brother named Laban.

      When he heard her account
      and saw the ring and bracelets,
      he immediately hurried to the well.

      Ibrahim’s servant was still standing there
      beside the camels.
    </p>

    <p>
      Laban greeted him and said:

      “Why are you standing here?

      Come to our house.

      I have prepared a place for you,
      and there is room for the camels as well.”
    </p>

    <p>
      They all went to Laban’s house.

      The servants unloaded the camels,
      gave them fodder,
      and brought water
      for Ibrahim’s servant and his companions
      to wash their feet.
    </p>

    <p>
      When food was set before them,
      Ibrahim’s servant said:

      “I will not eat
      until I have told you why I have come.”

      “Very well,”
      said Laban.

      “Tell us your purpose.”
    </p>

    <p>
      “I am the servant of prophet Ibrahim,”
      he began.

      “Allah has greatly blessed my master.

      He has become a man of honor and wealth.

      Allah has granted him flocks,
      herds,
      silver,
      gold,
      servants,
      and maidservants.
    </p>

    <p>
      In his old age,
      his wife Sarah bore him a son.

      He has now made that son
      the heir to all that he possesses.
    </p>

    <p>
      Before sending me here,
      my master made me swear
      that I would not take a wife
      for his son from among the Canaanites.

      Instead,
      I was to come to his homeland
      and to his relatives.
    </p>

    <p>
      I asked:
      ‘What if the young woman refuses to come?’

      He replied:

      ‘I walk in the path of Allah.

      He will send His angel with you
      and grant success to your journey.

      You shall take a wife for my son
      from among my relatives
      and from my father’s household.

      If they refuse,
      then you are released from your oath.’
    </p>

    <p>
      Today at the well
      I prayed:

      ‘O Allah,
      open the way before me.

      If the young woman to whom I say,
      “Let me drink a little water,”
      replies,
      “Drink,
      and I shall also draw water for your camels,”
      then I shall know
      that she is the one You have chosen
      for Ishaq.’
    </p>

    <p>
      While I was still praying in my heart,
      Rifqah arrived carrying a jar.

      She filled it at the well.

      I asked for a drink.

      Immediately she lowered the jar and said:

      ‘Drink.’

      Then she offered
      to water the camels as well.
    </p>

    <p>
      After the camels had drunk,
      I asked:

      ‘Whose daughter are you?’

      She replied:

      ‘I am the daughter of Bethuel,
      granddaughter of Nahur and Milkah.’

      Then I placed a ring in her nose
      and bracelets upon her wrists.

      Afterwards I bowed in prostration
      and praised Allah,
      the God of my master Ibrahim,
      who guided me directly
      to the family of my master’s brother.

      That is the matter in full.

      What do you say?

      Will you grant my master’s request?

      If not,
      tell me plainly,
      and I shall decide what to do next.”
    </p>

    <p>
      Laban and Bethuel listened
      and replied:

      “This matter has come from Allah.

      What can we say against it?

      Here is Rifqah.

      Take her and go.

      We consent.

      Let her become the wife
      of your master’s son,
      as Allah has decreed.”
    </p>

    <p>
      When Ibrahim’s servant heard this,
      he bowed down in prostration before Allah.

      Then he brought out the gold,
      silver,
      fine garments,
      and precious gifts
      and presented them to Rifqah.

      He also gave valuable gifts
      to her brother and her mother.

      Afterwards,
      he and his companions ate and drank
      and spent the night there.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE JOURNEY HOME</p>
  </div>

  <div className="main_text">
    <p>
      Early the next morning he said:

      “Permit me now
      to return to my master.”
    </p>

    <p>
      But Rifqah’s brother and mother replied:

      “Do not hurry.

      Let our daughter remain with us
      for another ten days or so.

      After that you may depart.”
    </p>

    <p>
      He answered:

      “No.

      Allah has granted success to my mission.

      Please do not delay me.

      Let me return to my master.”
    </p>

    <p>
      Then they said:

      “Let us call the young woman
      and ask her directly.”

      They summoned Rifqah and asked:

      “This man wishes to leave.
      Will you go with him?”
    </p>

    <p>
      “I will go,”
      she replied.
    </p>

    <p>
      So they sent Rifqah away
      together with her nurse
      and the travelers.

      Before she departed,
      they blessed her saying:

      “Our sister,
      may Allah grant you many children.

      May your descendants become countless.

      May your offspring possess
      the cities of their enemies.”
    </p>

    <p>
      Then Rifqah and her maidservants
      mounted the camels
      and set out
      with Ibrahim’s servant.
    </p>

    <p>
      At that time,
      Ishaq عليه السلام
      had returned from Beer-lahai-roi
      to the southern region.

      One evening he was walking in the field,
      deep in thought,
      when he noticed camels approaching.

      He began walking toward them.
    </p>

    <p>
      Rifqah also saw Ishaq.

      She immediately dismounted from her camel
      and asked Ibrahim’s servant:

      “Who is that man?”
    </p>

    <p>
      “That is my master,”
      he replied.

      Rifqah then drew her veil
      and covered her face.

      Afterwards,
      the servant told Ishaq
      everything that had happened.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Ishaq (a.s.) brought Rifqah
      into the tent of Lady Sarah.

      He married her,
      and after the passing of his mother
      he found great comfort in her companionship,
      for he loved her deeply.
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Ishaq عليه السلام was forty years old
          when he married Lady Rifqah.
        </p>
      </div>
    )}
  </div>
</main>
    
  );
}