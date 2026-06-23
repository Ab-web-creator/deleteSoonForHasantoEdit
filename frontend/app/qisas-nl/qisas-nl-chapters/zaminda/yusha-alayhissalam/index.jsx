'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Yusha() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
  ]);

  return (
  <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Indeed, We gave the Children of Isra’il the Scripture, wisdom, and
      prophethood. We provided them with pure sustenance and favored them above
      the worlds.”{' '}
      <span className="vitalic">
        (Qur’an, Surah al-Jathiyah 45:16).
      </span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“I WILL NEVER LEAVE YOU”</p>
  </div>

  <div className="main_text">
    <p>
      After Prophet Musa عليه السلام passed away, Allah the Exalted revealed to
      Yusha عليه السلام:
      “Cross over the Jordan River and enter the land I have promised you.
    </p>

    <p>
      I have given all this land to you. From the southern wilderness to the
      mountains of Lebanon, and as far as the great Euphrates River in the
      northeast, all of it shall belong to you.
    </p>

    <p>
      Do not be afraid. Just as I was with Musa عليه السلام, I shall be with
      you. No one will be able to stand against you all the days of your life.
    </p>

    <p>
      Obey My commands and the laws I revealed through Musa عليه السلام. If you
      desire your work to be fruitful, do not turn from them to the right or to
      the left. Let the words of the Book never depart from your mouth. Meditate
      upon them day and night so that you may fulfill them completely. Then your
      path will open before you, and your work will be blessed.
    </p>

    <p>
      Be strong and courageous. Fear nothing! I will never leave you, and I
      will never abandon you.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      When Yusha عليه السلام heard these words, he summoned the elders and
      said:
      “Tell the people to prepare their provisions. We are going to cross the
      Jordan River and take possession of the land our Lord has given us!”
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          The land of Canaan lay on the other side of the Jordan River.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>IN THE HOUSE OF A PROSTITUTE</p>
  </div>

  <div className="main_text">
    <p>
      Prophet Yusha عليه السلام then sent two men to Jericho to spy out the
      land of Canaan. The spies entered the city and spent the night in the
      house of a woman named Rahab, who was a prostitute.
    </p>

    <p>
      When some people saw them, they informed the ruler of the city:
      “Hebrew spies have come into our city today.”
      So the ruler sent men to Rahab’s house to arrest them.
    </p>

    <p>
      But Rahab had taken the Hebrews up to the roof and hidden them beneath
      stalks of flax. Then she said to the men who came:
    </p>

    <p>
      “Yes, two men did come to my house, but I did not know where they were
      from. They left at night just as the city gate was being closed. I do not
      know where they went. If you hurry, you may still catch them.”
    </p>

    <p>
      The men of the city set out toward the Jordan River to search for them.
      As soon as they left, the city gates were shut tightly.
    </p>

    <p>
      Then Rahab went up to the roof to the guests and said:
      “I know that Allah has given this land to you. All our people are afraid
      of you. We have heard how Allah divided the Red Sea for you and how He
      defeated the Amorites. Because of this, everyone here is terrified of
      you. The God you worship is truly mighty!”
    </p>

    <p>
      Then she pleaded:
      “I have shown kindness to you. Now swear that you will show kindness to
      my household as well. Promise that you will spare my father and mother,
      my brothers and sisters, and all their children.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE RED CORD</p>
  </div>

  <div className="main_text">
    <p>
      “Very well,” the guests replied.
      “If harm comes to you, may Allah take our lives instead. Only do not tell
      anyone about us. When Allah gives this land to us, we will repay your
      kindness to you and to your relatives.”
    </p>

    <p>
      Rahab’s house was built into the city wall, and its window opened toward
      the outside.
    </p>

    <p>
      “Go to the hills and hide there for three days,” Rahab advised them.
      “After those searching for you have returned, you may go on your way. The
      city gates are closed now, so I will lower you from the window with a
      rope.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      Then the guests said to Rahab:
      “When we return, tie this red cord
      <sup>2</sup>{' '}
      in your window. Gather your father, mother, brothers, sisters, and all
      your family into your house. If you do not gather them, or if you betray
      us, we shall be released from the oath we have sworn. If anyone goes
      outside your door, his death will be his own responsibility, not ours.
      But if anyone inside your house is harmed, we will be responsible.”
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          After the messengers left, Rahab tied the red cord in her window.
        </p>
      </div>
    )}

    <p>
      Then the men returned to Yusha عليه السلام and reported everything that
      had happened. They said:
      “Indeed, Allah is about to deliver all the people of Canaan into our
      hands. Everyone there is filled with fear of us.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>BY THE JORDAN RIVER</p>
  </div>

  <div className="main_text">
    <p>
      Early the next morning, Yusha عليه السلام set out with all the people of
      Isra’il and came to the Jordan River, where they made camp.
    </p>

    <p>
      The people rested there for three days. On the third day, the tribal
      leaders went through the camp and instructed the people:
    </p>

    <p>
      “When you see the priests carrying the Ark of the Covenant and setting
      out, follow behind it. But keep a distance of two thousand cubits between
      yourselves and the Ark. Do not come closer than that.”
    </p>

    <p>
      Then Yusha عليه السلام said to the people:
      “Purify yourselves, for tomorrow you will witness a miracle from Allah.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      The next day he announced:
      “We shall cross to the other side of the river. Rabb al-‘Alamin has told
      me that as soon as the priests’ feet touch the water, the river will
      stop, and dry ground will appear. Our Lord Himself will open the way for
      us.”
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>{' '}
          During harvest season, the Jordan River would normally overflow its
          banks.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE MIRACLE IN THE RIVER</p>
  </div>

  <div className="main_text">
    <p>
      So the priests lifted the Ark of the Covenant and set out.
    </p>

    <p>
      As soon as their feet touched the water, the flowing river stopped
      completely. The waters gathered like a high wall near the city of Adam.
    </p>

    <p>
      The water flowing downward toward the Dead Sea disappeared, and in this
      way the Children of Isra’il crossed to the other side. Until everyone had
      passed over, the priests carrying the Ark of the Covenant stood still in
      the middle of the riverbed.
    </p>

    <p>
      Once everyone had crossed, Allah the Exalted commanded Yusha عليه السلام:
      “Tell the priests to come up out of the river.”
    </p>

    <p>
      As soon as the priests stepped onto dry ground, the waters of the Jordan
      returned to their place and flowed as before, overflowing its banks. It
      was the tenth day of the first month. The Children of Isra’il then made
      camp at Gilgal, east of the city of Jericho.
    </p>

    <p>
      Soon the news spread everywhere:
      “The God of the Hebrews has stopped the Jordan! He held back its waters
      until they crossed!”
      The Amorite and Canaanite kings heard the report as well. Fear seized
      them all, and their hearts were filled with dread.
    </p>
  </div>
</main>
  );
}