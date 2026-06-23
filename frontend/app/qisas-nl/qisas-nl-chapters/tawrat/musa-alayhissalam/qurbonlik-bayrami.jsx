'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function QurbonlikBayrami() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
    'bubble10',
    'bubble12',
    'bubble13',
    'bubble14',
  ]);

  return ( 
 <main className="stories relative">
  <div className="main_text">
    <p>
      After this, Allah commanded Musa and Harun عليهما السلام:
      “Let this month be the first month of your year. Tell the people that on
      the tenth day of this month every man must select a lamb or a young goat
      for his household. If the animal is too large for one family, they should
      share it with their nearest neighbor according to the number of people.
    </p>

    <p>
      Be careful when choosing the animal. It must be without blemish, a
      one-year-old male. Care for it until the fourteenth day of the month, and
      then slaughter it at twilight. Take some of its blood and apply it around
      the doorway of the house in which the meat will be eaten.
    </p>

    <p>
      That same night roast all the meat over fire and eat it with bitter herbs
      and unleavened bread. Do not eat it raw or boiled in water. None of the
      cooked meat should remain until morning. If anything is left over, burn
      it in the fire.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          The Torah also mentions the death of the firstborn animals.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      Eat the meal in readiness for departure — with your garments tucked up,
      your staff in hand, and your sandals on your feet. This is the sacrifice
      through which the heirs of the covenant will be delivered. That night the
      Angel of Death will pass through Egypt and strike down the firstborn sons
      of the Egyptians.
      <sup>1</sup>
    </p>

    <p>
      All the gods of Egypt will be put to shame, for there is no god besides
      Me. The blood upon your doorways will be the sign marking the houses in
      which you dwell. When death sees the blood, it will pass over that house.
      Destruction will not touch you. This day shall become a memorial for you.
      Celebrate it forever as a festival dedicated to Allah.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FEAST OF UNLEAVENED BREAD</p>
  </div>

  <div className="main_text">
    <p>
      “For seven days you shall eat unleavened bread. From the very first day,
      remove all leaven from your homes. Whoever eats bread made with leaven
      during those seven days shall be cut off from among the people of
      Isra’il. On the first day and on the seventh day you shall gather
      together as a community. During those days no work is to be done except
      the preparation of food.
    </p>

    <p>
      Every year celebrate the Feast of Unleavened Bread, for it was on this
      very day that I brought you out of Egypt. Let this be an everlasting
      ordinance for all generations. From the evening of the fourteenth day of
      the first month until the evening of the twenty-first day, you shall eat
      unleavened bread.
    </p>

    <p>
      During those seven days there must not be the slightest trace of leaven
      in your homes. Whoever eats anything made with leaven, whether native-born
      or a foreigner living among you, shall be removed from the community of
      Isra’il. Eat nothing containing leaven. Wherever you live, you must eat
      unleavened bread.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“ALLAH SPARED US THROUGH THE SACRIFICE”</p>
  </div>

  <div className="main_text">
    <p>
      Then Musa عليه السلام gathered all the elders of Isra’il and said:
      “Go and tell everyone that each family must choose a lamb for sacrifice
      and slaughter it on the fourteenth day. Collect its blood in a basin.
      Then take a bunch of hyssop and apply the blood around the doorways.
      No one is to leave his house until morning. When the Angel of Death comes
      to strike the Egyptians, he will see the blood and pass over our homes.
    </p>

    <p>
      We and our descendants must preserve this observance forever as a sacred
      command. Even after entering the land Allah has promised, continue to
      observe it.
    </p>

    <p>
      Your children will ask:
      ‘What does this act of worship mean?’
      Then you shall answer:
      ‘This is the Sacrifice of Deliverance offered to Allah. When He sent the
      Angel of Death, He passed over our homes and spared us.’”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE DEATH OF THE FIRSTBORN</p>
  </div>

  <div className="main_text">
    <p>
      When the people heard the words of Musa عليه السلام, they prostrated
      themselves before Allah and gave thanks. Then they went and carried out
      every command exactly as they had been instructed.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          The firstborn male animals also perished that night.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      At last the appointed night arrived. At midnight, every firstborn son in
      Egypt died — from the firstborn son of Pharaoh himself to the firstborn
      son of the prisoner confined in a dungeon. In Pharaoh’s palace, in the
      houses of his nobles, and even in the huts of the poor, everyone rose in
      alarm. A great cry arose throughout Egypt, for there was not a single
      household untouched by death.
      <sup>2</sup>
    </p>

    <p className="boldItalic">
      “Indeed, We showed him all of Our signs, yet he denied them and refused.”
      <span className="vitalic"> (Ta-Ha 20:56).</span>
    </p>

    <p className="vitalic">
      Yes, on that night the Angel of Death passed over only the homes of the
      believers. They had believed in Allah and His Messenger and had offered
      the sacrifice exactly as Allah commanded. The sacrifice preserved the
      Children of Isra’il.
      Do you remember what spared the son of Ibrahim عليه السلام from death?
      A sacrifice appointed by Allah.
      Just any sacrifice? No.
      Not just any sacrifice. The sacrifice decreed by Allah had to be without
      fault or blemish. And as you may remember, it was Allah Himself who
      provided that sacrifice for Ibrahim عليه السلام.
    </p>

    <p>
      That very night Pharaoh summoned Musa and Harun عليهما السلام and said:
      “Enough! Take your people and leave this land. Go and worship your Lord.
      Take your livestock as well. Only please, pray for me!”
    </p>

    <p>
      The Egyptians also urged them to leave quickly, saying:
      “Go at once, or we shall all perish!”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE EXODUS FROM EGYPT</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>{' '}
          Ash-Shu‘ara 26:52:
          “And We revealed to Musa:
          ‘Travel by night with My servants, for you will surely be pursued.’”
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      Thus the Hebrews wrapped their bowls of unleavened dough in their
      garments and carried them on their shoulders. Excluding women and
      children, approximately six hundred thousand men set out on foot from
      Ra‘amses toward the city of Sukkot.
      <sup>3</sup>
    </p>

    <p>
      Along the way they baked unleavened bread from the dough they had brought
      out of Egypt. They had departed in such haste that they had no time to
      prepare bread beforehand.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>{' '}
          Throughout that night they remained under the watchful care of Allah.
          For this reason the people of Isra’il were commanded to commemorate
          that night every year by glorifying their Creator.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      Altogether, the people of Isra’il had lived in Egypt for four hundred and
      thirty years. On the final day of those four hundred and thirty years,
      they all departed from Egypt.
      <sup>4</sup>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ADDITIONAL COMMANDS REGARDING THE SACRIFICE</p>
  </div>

  <div className="main_text">
    <p>
      Through Musa عليه السلام, Allah revealed further regulations concerning
      the Festival of Sacrifice:
    </p>

    <p>
      “No one outside the covenant may eat of the sacrificial meat. Your slaves
      may eat of it if they have been circumcised. Travelers and hired workers
      may not eat from it. The sacrifice must be eaten within a single house,
      and not one piece of it may be taken outside. Not a single bone is to be
      broken.
    </p>

    <p>
      The entire community of Isra’il must observe this sacred festival. If a
      foreigner living among you wishes to participate, every male in his
      household must first be circumcised. Then he may take part in the
      celebration as though he were native-born. No uncircumcised male may eat
      of the sacrificial meat. This law applies equally to you and to the
      foreigners dwelling among you.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ON THE JOURNEY</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Indeed, We gave the Children of Isra’il the Scripture, judgment, and
      prophethood. We provided them with pure sustenance and favored them above
      the peoples of the world.”
      <span className="vitalic"> (Qur’an 45:16).</span>
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>{' '}
          Al-Qurtubi, <span className="vitalic">Tafsir</span>, vol. 13, p. 100.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      <span className="vitalic">
        Thus the people of Allah set out toward the land that had been promised
        to them.
      </span>
      <sup>5</sup>
    </p>

    <p>
      The shortest route to Canaan passed through the land of the Philistines.
      Yet Allah did not lead them that way. He said:
      “If they encounter war, they may lose heart and wish to return to Egypt.”
      Therefore He led them through the wilderness toward the Red Sea.
    </p>

    <p>
      Musa عليه السلام also carried with him the bones of Yusuf عليه السلام.
      Before his death, Yusuf عليه السلام had made the Children of Isra’il
      swear:
      “Allah will surely come to your aid and bring you out of Egypt. When He
      does, take my bones with you.”
    </p>

    <p>
      After leaving Sukkot, the Children of Isra’il camped at Etham on the edge
      of the wilderness. Day and night Allah was with His people. His glory
      appeared as a pillar of cloud by day and a pillar of fire by night,
      giving them light and guidance.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>PHARAOH GIVES CHASE</p>
  </div>

  <div className="main_text">
    <p>
      After the Children of Isra’il had departed from Egypt, Pharaoh and his
      nobles began to regret their decision:
      “Why did we let them go? Who will serve us now?”
    </p>

    <p>
      At that time the Children of Isra’il, by Allah’s command, had returned
      near Baal-Zephon and made camp beside the sea.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>{' '}
          Pharaoh took with him six hundred of his finest war chariots.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble6')}
    >
      Hearing this, Pharaoh thought:
      “They have become lost in the wilderness and cannot escape.”
      So he assembled his chariots and armies and set out in pursuit of the
      Children of Isra’il.
      <sup>6</sup>
    </p>

    <p>
      All of this was taking place according to Allah’s decree. Allah had
      withdrawn His mercy from Pharaoh, and thus Pharaoh remained firm in his
      rebellion.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>{' '}
          “Then the army pursued them at sunrise. When the two groups came
          within sight of one another, the companions of Musa said:
          ‘We are surely overtaken!’”
          <span className="vitalic"> (Ash-Shu‘ara 26:60–61).</span>
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble7')}
    >
      Pharaoh’s armies approached in formation after formation.
      <sup>7</sup>{' '}
      When the Children of Isra’il saw them, they were terrified and cried out
      to Allah for help.
    </p>

    <p>
      Then they complained to Musa عليه السلام:
      “Why have you brought us into the wilderness? Was it so that we could die
      here? Were there no graves in Egypt? Why did you bring us out? Did we not
      tell you to leave us alone so that we could continue serving the
      Egyptians? It would have been far better to remain slaves in Egypt than
      to perish in the wilderness!”
    </p>

    <p>
      “Do not be afraid,” said Musa عليه السلام.
      “Stand firm and you will witness how Allah delivers you. These Egyptians
      whom you see today, you will never see again. Allah Himself will fight
      for you. You need only remain patient and keep silent.”
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>{' '}
          “Then We revealed to Musa:
          ‘Strike the sea with your staff.’”
          <span className="vitalic"> (Ash-Shu‘ara 26:63).</span>
        </p>

        <p className="MarginTop10px">
          <sup>9</sup>{' '}
          In Surah Ta-Ha it is written:
          “We revealed to Musa:
          ‘Travel by night with My servants and strike for them a dry path
          through the sea. Fear neither being overtaken nor drowning.’”
          <span className="vitalic"> (20:77).</span>
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble8')}
    >
      Then revelation came from Allah to Musa عليه السلام:
      “Stop the cries and lamentation. Tell the people to move forward. Raise
      your staff and stretch it out over the sea. Divide the waters.
      <sup>8</sup>{' '}
      A dry path will appear, and you shall pass through it.”
      <sup>9</sup>
    </p>

    <p>
      At that moment the pillar of cloud moved behind the people of Isra’il,
      placing itself between the Egyptians and the Hebrews. Throughout the
      night it gave light to one side while casting darkness upon the other.
      Thus Pharaoh’s army could not approach the Children of Isra’il.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE DEFEAT OF THE EGYPTIANS</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Remember when We parted the sea for you and saved you, while drowning
      Pharaoh’s people before your very eyes.”
      <span className="vitalic"> (Qur’an 2:50).</span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble10')}
    >
      As soon as the Messenger of Allah stretched out his staff toward the sea,
      Allah sent a mighty east wind. All through the night the wind pushed back
      the waters and divided the sea into two.
      <sup>10</sup>{' '}
      A great dry roadway appeared through the midst of the sea
      <sup>11</sup>{' '}
      and the people began crossing toward the opposite shore. The waters stood
      like walls on their right and on their left.
    </p>

    {openBubbles['bubble10'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble10')}
      >
        <p>
          <sup>10</sup>{' '}
          Abul-Fida, <span className="vitalic">Al-Bidayah wan-Nihayah</span>,
          vol. 1, p. 271.
        </p>

        <p className="MarginTop10px">
          <sup>11</sup>{' '}
          Al-Mas‘udi, <span className="vitalic">Akhbar az-Zaman</span>,
          p. 251.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble12')}
    >
      At daybreak Pharaoh’s armies began pursuing the Children of Isra’il
      through the sea.
      <sup>12</sup>
    </p>

    {openBubbles['bubble12'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble12')}
      >
        <p>
          <sup>12</sup>{' '}
          According to the Torah, Allah removed fear from Pharaoh and his army
          on that day. Therefore, despite witnessing so many miracles, they
          stubbornly followed the Children of Isra’il into the sea.
        </p>
      </div>
    )}

    <p>
      Then Allah cast terror into the Egyptian army from within the pillar of
      fire and caused the wheels of their chariots to break apart.
    </p>

    <p>
      Seeing this, the Egyptians cried out:
      “Run! Their God is fighting against us! Retreat!”
    </p>

    <p>
      Then Allah said to Musa عليه السلام:
      “Stretch out your hand over the sea so that the waters may return upon
      the Egyptians.”
      Musa عليه السلام stretched out his hand over the sea.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble13')}
    >
      Dawn was breaking. The sea returned to its normal state. As the
      Egyptians fled, the waters swept over them and drowned them.
      Pharaoh’s entire army — the chariots and horsemen who had pursued the
      Children of Isra’il — perished beneath the sea.
      <sup>13</sup>{' '}
      Not a single one survived. Meanwhile, the people of Isra’il crossed
      safely along the dry path through the sea, with walls of water standing
      on both sides.
    </p>

    {openBubbles['bubble13'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble13')}
      >
        <p>
          <sup>13</sup>{' '}
          “So We seized him and his soldiers and cast them into the sea.
          Observe, then, the end of the wrongdoers.”
          <span className="vitalic"> (Al-Qasas 28:40).</span>
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble14')}
    >
      Thus Allah ﷻ defeated Pharaoh’s seemingly invincible army and displayed
      His majesty and glory before all nations.
      <sup>14</sup>
    </p>

    {openBubbles['bubble14'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble14')}
      >
        <p>
          <sup>14</sup>{' '}
          “Indeed, We bestowed favor upon Musa and Harun. We saved them and
          their people from a great distress. We granted them victory, and they
          were the triumphant ones.”
          <span className="vitalic"> (Qur’an 37:114–116).</span>
        </p>
      </div>
    )}

    <p>
      In this way Allah delivered the descendants of Prophet Ya‘qub عليه السلام
      from the Egyptians. They saw the bodies of the Egyptians lying along the
      seashore. With their own eyes they witnessed the power of Allah, and fear
      of Him entered their hearts. They believed in Allah and in His servant
      Musa عليه السلام.
    </p>
  </div>
</main>
 
  );
}