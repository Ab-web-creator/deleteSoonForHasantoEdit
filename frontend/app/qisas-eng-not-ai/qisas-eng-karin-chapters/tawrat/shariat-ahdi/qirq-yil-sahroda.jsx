'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function FourtyYearsInDesert() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
  ]);

  return (
     <main className="stories relative">
  <div className="main_text">
    <p className="vitalic">
      At last, the Children of Isra’il arrived at Qadesh, on the border of
      Canaan, and established their camp there. The time had come for them to
      enter the land that Allah had promised them.
    </p>

    <p>
      The people came to Musa عليه السلام and said:
      “Let us first explore the land. We should send several men to inspect the
      cities we are about to enter.”
    </p>

    <p>
      Then Allah revealed to Prophet Musa عليه السلام:
      “Send twelve men, one from each tribe, to examine the Promised Land.”
      So the Messenger of Allah sent twelve representatives into Canaan, each
      one a respected elder among the Children of Isra’il.
    </p>

    <p>
      The Messenger of Allah instructed them:
      “Observe everything carefully. Is the land good or poor? Are its people
      strong or weak? Are their cities fortified? Is the soil fertile or
      barren? See whether there are trees. And if possible, bring back some of
      the fruit.”
    </p>

    <p>
      The twelve elders entered the land of Canaan and explored it for forty
      days. When they returned to the camp, they brought with them
      pomegranates, figs, and grapes from the land. One cluster of grapes was
      so enormous that two men carried it suspended from a pole.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE TEST OF FAITH</p>
  </div>

  <div className="main_text">
    <p>
      “The land is indeed very good,” they reported. “It truly is a land
      flowing with milk and honey. But the people living there are extremely
      powerful. Their cities are large and heavily fortified. We are not strong
      enough to defeat them! The Amalekites dwell in the south and in the
      wilderness, while the Hittites, Jebusites, and Amorites live in the hill
      country, and the Canaanites occupy the regions along the sea and the
      rivers.”
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble1')} className="cursor-pointer">
      Fear immediately spread among the people.<sup>1</sup>{' '}
      Then Kalib (Caleb), one of the twelve elders who had been sent, saw that
      the people were losing heart and declared:
      “Do not be afraid! We can overcome them. We are capable of taking the
      land.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          “Musa said: ‘O my people, enter the Holy Land which Allah has
          prescribed for you, and do not turn back, lest you become losers.’
          They said: ‘O Musa, there is a tyrannical people there, and we will
          never enter it until they leave. If they leave, then we shall enter.’
          Two men from among those who feared Allah and upon whom Allah had
          bestowed His favor said: ‘Enter upon them through the gate. If you
          enter it, you will surely be victorious. And put your trust in Allah,
          if you are believers’” (Surah al-Ma’idah 5:21–23).
        </p>
      </div>
    )}

    <p>
      But the others responded:
      “No! They are far too strong for us. Their men are giants. We even saw
      descendants of mighty warriors there. Compared to them, we seemed like
      grasshoppers.”
    </p>

    <p>
      When the people heard these reports, panic swept through the camp. Many
      cried throughout the night. Others began complaining against Allah:
      “Allah must have brought us out of Egypt because He hates us! Now He
      intends to hand us over to the Amorites so that we may die. Their cities
      are surrounded by towering walls, and their men are giants. We are doomed!”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PEOPLE REBEL</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “They said: ‘O Musa, as long as they remain there, we will never enter
      it. So go, you and your Lord, and fight. We will stay here and wait.’
      ... He said: ‘Then indeed it is forbidden to them for forty years. They
      will wander through the land in confusion. So do not grieve over the
      defiantly disobedient people.’”
      <span className="vitalic">
        {' '}
        (Surah al-Ma’idah 5:24, 26).
      </span>
    </p>

    <p>
      Then the people began saying among themselves:
      “It would have been better if we had died in Egypt! Are our wives and
      children now to become plunder for our enemies? Would it not be better to
      appoint a leader and return to Egypt?”
    </p>

    <p>
      When Musa and Harun عليهما السلام heard this, they fell on their faces
      before Allah in full view of the people and began to pray.
    </p>

    <p className="vitalic">
      Allah had delivered an entire nation from slavery in Egypt. He had
      promised them freedom, protection, and provision. To confirm His promise,
      He showed them miracle after miracle. Yet now, when the time had come to
      enter the “land flowing with milk and honey,” the people again fell into
      disbelief. Instead of trusting in Allah’s help, they became terrified.
      They preferred the rule of Pharaoh to the promise of Allah and cried,
      “Let us return to Egypt.”
    </p>

    <p>
      Musa عليه السلام said to them:
      “Do not panic! Why are you afraid? Did you not witness the power of Allah
      in Egypt? Allah Himself will support us. Place your trust in Him!”
    </p>

    <p>
      Two of the twelve elders — Yusha and Kalib son of Yufanna — tore their
      garments in grief and pleaded with the people:
      “Brothers, do not rebel against Allah! He is giving us a wonderful land.
      We have seen it with our own eyes. Why fear these people? Allah is with
      us! He has promised to give us that land.”
    </p>

    <p>
      But the people had lost all reason. Some even shouted:
      “Stone them!”
      Then suddenly, before the eyes of the entire nation, the Majesty and
      Glory of Allah appeared.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PUNISHMENT FOR REBELLION</p>
  </div>

  <div className="main_text">
    <p>
      “When will this people truly believe in Me?” Allah said.
      “How long will they continue provoking My anger? Even after witnessing so
      many miracles, they still refuse to believe. I will destroy them and
      raise up a new nation through you alone!”
      He said to Prophet Musa عليه السلام.
    </p>

    <p>
      “My Lord,” the Messenger of Allah pleaded,
      “You brought us out of Egypt through mighty miracles. Your cloud stands
      above us each day. By day You guide us with a cloud, and by night with
      fire. If You destroy this people, the nations will say:
      ‘Allah was unable to fulfill His promise. He led them into the wilderness
      only to destroy them.’
      Yet You Yourself have declared:
      ‘I am patient, rich in mercy, and forgiving of sins.’
      From the day we left Egypt until now, You have continually forgiven us.
      For the sake of Your perfect love, forgive the sins of Your people.”
    </p>

    <p>
      Allah replied:
      “For your sake I have forgiven them. Yet this generation has witnessed My
      miracles and still tested My patience time after time. Again and again
      they refused My commands. Therefore they shall not enter the Promised
      Land.
    </p>

    <p>
      Not one man over twenty years of age will enjoy the land flowing with
      milk and honey. You said:
      ‘Our children will become prey to our enemies.’
      It is not you but your children who shall inherit the land. As for you,
      your bodies will fall in the wilderness.”
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble2')} className="cursor-pointer">
      “Turn back. Until this generation has passed away, I will make you wander
      in the wilderness. You explored the land for forty days; therefore you
      shall wander for forty years.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          Surah al-Ma’idah 5:26 states:
          “Indeed, it shall be forbidden to them for forty years. They will
          wander through the land in confusion. So do not grieve over the
          defiantly disobedient people.”
        </p>
      </div>
    )}

    <p className="vitalic">
      (At that time Allah declared that only Yusha ibn Nun and Kalib son of
      Yufanna would enter the Promised Land. The other ten spies died that very
      day from a plague sent by Allah.)
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PEOPLE REFUSED TO LEARN</p>
  </div>

  <div className="main_text">
    <p>
      When the people heard Allah’s judgment, they regretted what they had
      done. The next morning they said:
      “We have sinned. Now we will go and enter the land that Allah promised.”
    </p>

    <p>
      “Why are you once again opposing the command of your Lord?”
      Musa عليه السلام replied.
      “Do not go. Allah will not go with you. The Amalekites and the
      Canaanites will defeat you.”
    </p>

    <p>
      Nevertheless, a group of the people armed themselves and marched toward
      Canaan. The Amalekites and the Canaanites came down against them, routed
      them, and pursued them all the way to the Valley of Hormah.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>QUARRELING OVER WATER</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Many years passed. The Children of Isra’il continued wandering through
      the wilderness.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble3')} className="cursor-pointer">
      At last Allah ﷻ brought them once again to Qadesh in the Wilderness of
      Sin.
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>{' '}
          Maryam (RA), the sister of Musa عليه السلام, passed away here.
        </p>
      </div>
    )}

    <p>
      There was no drinking water at Qadesh. The people came before Musa and
      Harun عليهما السلام and complained:
      “If only Allah had allowed us to die! Why did you bring us here? Was it
      so that we and our livestock would perish? Why did you lead us out of
      Egypt into this miserable place? There is no grain, no figs, no grapes,
      no pomegranates — not even water to drink!”
    </p>

    <p>
      Musa and Harun عليهما السلام went to the entrance of the Tent and fell
      with their faces to the ground.
    </p>

    <p>
      Then the Glory of Allah appeared, and revelation came to the Messenger of
      Allah:
      “Musa, take your staff. Gather the people together with your brother
      Harun, and command the rock before their eyes to give water.”
    </p>
  </div>
</main>
     
  );
}