'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EXAMPLE() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return (
     <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Thus We established Yusuf عليه السلام in the land, allowing him to settle
      wherever he wished” (Qur’an 12:56).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE YEARS OF ABUNDANCE</p>
  </div>

  <div className="main_text">
    <p>
      The years of abundance began. For seven years the crops flourished, and
      plentiful harvests were gathered throughout the land. Every year Yusuf
      عليه السلام set aside one-fifth of the harvest and stored it in the cities.
      The grain accumulated in such enormous quantities that eventually Yusuf
      عليه السلام stopped trying to count it.
    </p>

    <p>
      During those years, Yusuf’s wife gave birth to two sons. Yusuf عليه السلام
      named his firstborn Manasseh, saying:
      “Allah has made me forget all my hardships and the loss of my family.”
      He named the second son Ephraim, saying:
      “Allah has granted fruitfulness to me in the land of my exile.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FAMINE BEGINS</p>
  </div>

  <div className="main_text">
    <p>
      At last the seven years of prosperity came to an end, and just as Yusuf
      عليه السلام had foretold, seven years of famine began. The famine also
      affected the lands surrounding Egypt. When the Egyptian people came to
      Pharaoh seeking help, he told them:
      “Go to Yusuf. Whatever he tells you to do, do it.”
    </p>

    <p>
      Yusuf عليه السلام then opened the storehouses and began selling grain to
      the people of Egypt. News spread that grain could be obtained in Egypt,
      and people from other nations also began coming to Yusuf عليه السلام,
      because severe famine had struck their lands as well.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FIRST MEETING WITH HIS BROTHERS</p>
  </div>

  <div className="main_text">
    <p>
      Famine had also reached Canaan. When Ya‘qub عليه السلام heard that grain
      was available in Egypt, he called his sons and said:
      “Why do you keep looking at one another? I have heard that there is grain
      in Egypt. Go there and buy food for us, otherwise we will perish from
      hunger.”
    </p>

    <p>
      So he sent ten of his sons to Egypt. He did not allow his youngest son,
      Binyamin, to accompany them because he feared that some harm might come
      to him.
    </p>

    <p>
      Thus the sons of Ya‘qub عليه السلام arrived in Egypt to buy grain. Since
      Yusuf عليه السلام was responsible for distributing grain, they came before
      him and bowed down in respect.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THEIR BOWING IS FULFILLED</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      “The brothers of Yusuf came and entered before him. He recognized them,
      but they did not recognize him.”
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> Qur’an 12:58.
        </p>
      </div>
    )}

    <p>
      Although Yusuf عليه السلام recognized his brothers immediately, he
      pretended not to know them. Calling for his interpreter, he said sternly:
      “Ask them where they have come from.”
    </p>

    <p>
      “We have come from Canaan, my lord, to purchase grain,” they replied,
      completely unaware that they were speaking to Yusuf عليه السلام.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YUSUF عليه السلام TESTS HIS BROTHERS</p>
  </div>

  <div className="main_text">
    <p>
      At that moment the dreams Yusuf عليه السلام had seen many years earlier
      came back to his mind.
    </p>

    <p className="!my-0">
      —No, you are spies. You have come to investigate the weaknesses of the
      land.
    </p>

    <p className="!my-0">
      —No, my lord. We are merely your servants seeking grain. We are all sons
      of one father. We are honest men, not spies.
    </p>

    <p className="!my-0">
      —You are lying, Yusuf replied. You have come here as spies.
    </p>

    <p className="!my-0">
      —My lord, we were twelve brothers. We are from Canaan. Our youngest
      brother remains with our father, and another brother is no longer with us.
    </p>

    <p className="!my-0">
      —No, you are spies! said Yusuf عليه السلام.
      I will test your story. One of you must go and bring your youngest
      brother. The rest will remain imprisoned until then. By Pharaoh’s life,
      if you do not bring him to me, you will not leave this place. Then we
      shall see whether you are truthful or not.
    </p>

    <p>
      Yusuf عليه السلام kept them in prison for three days. On the third day he
      said:
    </p>

    <p>
      “I am a God-fearing man. If you do as I say, you shall live. If you are
      truthful, one of your brothers will remain here while the rest return with
      grain for your starving families. Then bring your youngest brother back to
      me. In this way your honesty will be proven and you will escape the death
      penalty.”
    </p>

    <p>
      They agreed to these terms. Then they began saying among themselves:
      “All of this has happened because of what we did to Yusuf. We saw his
      distress and heard his cries, yet we showed him no mercy. That is why
      this calamity has come upon us.”
    </p>

    <p>
      Reuben said:
      “Did I not tell you not to harm the boy? But you would not listen. Now
      his blood is being demanded from us.”
    </p>

    <p>
      Yusuf عليه السلام understood every word they said, though they did not
      realize it because he was speaking through an interpreter. Hearing
      Reuben’s words, Yusuf could no longer contain his emotions. He left the
      room, found a private place, and wept. Then he returned and spoke with
      them again. Before their eyes he ordered Shim‘un to be bound.
    </p>

    <p>
      Yusuf عليه السلام then instructed his servants:
      “Fill their sacks with grain and provide provisions for their journey.”
      Secretly, he also ordered that the money they had paid for the grain be
      returned to each of their sacks.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ON THE JOURNEY HOME</p>
  </div>

  <div className="main_text">
    <p>
      The nine brothers loaded their grain onto their donkeys and set out for
      Canaan. One evening they stopped to rest. As one of them opened his sack
      to feed his donkey, he discovered that the money he had paid was lying
      inside.
    </p>

    <p>
      He quickly called his brothers:
      “Look! My money has been returned!”
    </p>

    <p>
      When they saw it, fear seized them all.
      “What is Allah causing to happen to us?” they wondered anxiously.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>BACK IN CANAAN</p>
  </div>

  <div className="main_text">
    <p>
      When they returned home, they told Ya‘qub عليه السلام everything that had
      happened:
    </p>

    <p>
      “The ruler of Egypt treated us harshly and accused us of being spies. We
      told him that we were honest men, twelve brothers from one family, that
      our youngest brother remained with our father, and that another brother
      was gone.
    </p>

    <p>
      He said that if we were truthful, one brother must remain behind while the
      rest take grain home. Then we must bring our youngest brother back to him.
      Only then would he believe that we were not spies. He promised to release
      our brother and allow us to trade freely in Egypt.”
    </p>

    <p>
      Then they emptied their sacks and discovered that every man’s money had
      been returned. Both Ya‘qub عليه السلام and his sons were frightened.
    </p>

    <p className="!my-0">
      —What?! Are you trying to take all my sons away from me? cried Ya‘qub
      عليه السلام.
      Yusuf is gone, Shim‘un is gone, and now you want to take Binyamin too?
    </p>

    <p className="!my-0">
      —Father, said Reuben, entrust Binyamin to me. If I do not bring him back
      safely, you may put my two sons to death.
    </p>

    <p className="!my-0">
      —No! replied Ya‘qub عليه السلام.
      My son will not go with you. He has already lost his brother. If anything
      happens to him as well, you will bring my gray head down to the grave in
      sorrow.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>WHEN THE GRAIN RAN OUT</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Shall I entrust him to you as I entrusted his brother before?
      ...I will never send him with you until you give me a solemn pledge before
      Allah that you will surely bring him back to me.”
      (Qur’an 12:64, 66).
    </p>

    <p>
      The famine continued to intensify in Canaan. When the grain they had
      brought from Egypt was exhausted, Ya‘qub عليه السلام said:
    </p>

    <p className="!my-0">
      —You must go again and buy more grain.
    </p>

    <p className="!my-0">
      —Father, said Yahudha رضي الله عنه, the ruler warned us:
      “Do not appear before me unless your brother is with you.”
      If you send Binyamin with us, we can go. Otherwise we cannot.
    </p>

    <p className="!my-0">
      —Why did you tell him that you had another brother? Ya‘qub cried.
      You have brought trouble upon me!
    </p>

    <p className="!my-0">
      —He questioned us closely about our family. We had no choice but to
      answer. How could we know he would demand to see our brother?
    </p>

    <p className="!my-0">
      —Entrust Binyamin to me, said Yahudha.
      Otherwise all of us will die of hunger—you, we, and our children. I
      guarantee his safe return. If I fail, let me bear the blame forever.
    </p>

    <p>
      At last Ya‘qub عليه السلام agreed:
      “If there is no other choice, then go. But do not go empty-handed. Take
      some of the finest products of Canaan—a little balm, honey, spices,
      myrrh, pistachios, and almonds—as a gift for the ruler. Return the money
      that was found in your sacks. Perhaps some mistake was made. Take your
      brother and go. Allah is capable of all things. May He place mercy for you
      in that man’s heart and allow both Binyamin and his brother to return. And
      if I must lose my children, then so be it.”
    </p>

    <p>
      Ya‘qub عليه السلام could do nothing except place his trust in Allah.
      His entire hope rested with his Lord:
      <span className="boldItalic">
        {' '}
        “Judgment belongs to Allah alone. In Him I place my trust, and in Him
        let all who trust place their trust.”
      </span>
      <span className="vitalic"> (Surah Yusuf 12:67).</span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>BACK IN EGYPT</p>
  </div>

  <div className="main_text">
    <p>
      Thus they set out once again for Egypt, carrying gifts and twice as much
      money as before. Binyamin traveled with them.
    </p>

    <p>
      When they arrived, they went directly to Yusuf عليه السلام.
    </p>

    <p>
      The moment Yusuf عليه السلام saw Binyamin, he instructed his steward:
      “Take these men to my house. Slaughter an animal and prepare a meal. They
      will dine with me at midday.”
    </p>

    <p>
      As they were led toward Yusuf’s residence, fear overcame them.
      “This is because of the money that was returned in our sacks,” they said.
      “Now he will seize us, take our belongings, and make us slaves.”
    </p>

    <p>
      Reaching the gate, they approached Yusuf’s steward and explained:
    </p>

    <p>
      “Sir, when we returned home after our previous visit, we found the money
      we had paid still inside our sacks. We have brought it back and also
      brought new money to purchase grain. We do not know who returned it.”
    </p>

    <p>
      “Do not be afraid,” the steward replied.
      “Your God and the God of your fathers must have placed the money in your
      sacks. I received your payment.”
    </p>

    <p>
      Then he brought Shim‘un out to them, welcomed them into Yusuf’s house,
      provided water for washing their feet, and fed their donkeys.
    </p>

    <p>
      Hearing that they would dine with the governor, the eleven brothers
      prepared the gifts they had brought. When Yusuf عليه السلام entered, they
      bowed before him and presented their gifts.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE BANQUET</p>
  </div>

  <div className="main_text">
    <p>
      After exchanging greetings, Yusuf عليه السلام asked:
      “How is your father? Is he well?”
    </p>

    <p>
      “Praise be to Allah, he is well,” they replied, bowing once again before
      Yusuf عليه السلام.
    </p>

    <p>
      “Is this the younger brother you told me about?” Yusuf عليه السلام asked,
      looking at Binyamin.
      Then he said:
      “May Allah bless you, my son.”
    </p>

    <p>
      Overcome with emotion, he hurried out of the room. Entering his private
      chamber, he wept. After washing his face and regaining composure, he
      returned and ordered:
      “Bring the food.”
    </p>

    <p>
      A separate table was prepared for Yusuf عليه السلام and another for his
      brothers. The Egyptians sat elsewhere, since they considered it improper
      to eat with Hebrews.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      The guests were seated according to age. The brothers looked at one
      another in astonishment. Food was served to them from Yusuf’s table, but
      Binyamin received five times more than anyone else.
      <sup>2</sup>{' '}
      All of them ate and drank to their satisfaction.
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Qur’an 12:69:
          “When they entered upon Yusuf, he drew his brother close to himself
          and said: ‘Indeed, I am your brother, so do not grieve over what they
          used to do.’”
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE “THIEF” IS DISCOVERED</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      When the time came for the brothers to return to Canaan, Yusuf عليه السلام
      instructed his steward:
      “Fill their sacks with grain. Place each man’s payment back into his sack.
      And put my silver cup into the sack of the youngest.”
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          “And when he had furnished them with their supplies, he placed the
          drinking cup in his brother’s bag” (Qur’an 12:70).
        </p>
      </div>
    )}

    <p>
      At dawn they departed. But before they had gone far, Yusuf عليه السلام
      ordered his steward:
      “Follow them immediately. When you catch up to them, ask:
      ‘Why have you repaid kindness with evil? Why have you stolen my master’s
      cup?’”
    </p>

    <p>
      The steward quickly overtook them and delivered the accusation.
    </p>

    <p>
      The brothers protested:
      “How can you say such a thing? We would never do that! We even brought
      back the money that was returned to us. How could we steal anything from
      your master’s house?”
    </p>

    <p>
      They added:
      “Search us. If the cup is found with any one of us, you may execute him,
      and the rest of us may become your master’s slaves.”
    </p>

    <p>
      “Very well,” said the steward.
      “The one with whom the cup is found shall become a slave. The rest may go
      free.”
    </p>

    <p>
      The sacks were searched, beginning with the oldest brother. At last the
      silver cup was found in Binyamin’s sack.
    </p>

    <p>
      Overwhelmed with grief, the brothers loaded their belongings once more and
      returned to the city with the steward and Binyamin.
    </p>

    <p className="vitalic">
      (Why do you think Yusuf عليه السلام did this?)
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YAHUDHA PLEADS FOR HIS BROTHER</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “They said:
      ‘O noble one, he has an aged father. Take one of us in his place. We see
      that you are among those who do good.’
      ” (Qur’an 12:78).
    </p>

    <p>
      When they returned, Yusuf عليه السلام was still at home. The brothers fell
      before him once again.
    </p>

    <p>
      “What have you done?” Yusuf asked.
      “Did you not know that a man like me can discover such matters?”
    </p>

    <p>
      “My lord,” said Yahudha رضي الله عنه,
      “we do not know what to say. How can we defend ourselves? Allah has
      exposed our wrongdoing. Here we all are, including the one in whose sack
      the cup was found. We are ready to become your slaves.”
    </p>

    <p>
      “No,” Yusuf replied.
      “Only the one with whom the cup was found shall remain. The rest of you
      may return home.”
    </p>

    <p>
      Yahudha then stepped forward and delivered a long plea on behalf of
      Binyamin, recounting their father’s love for him, the loss of Yusuf,
      Ya‘qub’s sorrow, and the solemn promise he had made to bring the boy home
      safely.
    </p>

    <p>
      Finally he said:
      “My lord, I beg you—take me as a slave in his place and let the boy return
      to his father. How can I face my father if the boy is not with me? How
      can I bear to see the grief that would fall upon him?”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>WHEN ALL HOPE SEEMED LOST</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Yusuf عليه السلام replied:
      <span className="boldItalic">
        {' '}
        “Allah forbid that we should seize anyone except the one with whom we
        found our property. Otherwise we would indeed be wrongdoers.”
      </span>
      {' '}
      When the brothers lost all hope, they withdrew and consulted privately...
      (Qur’an 12:79-83, 87, 67).
    </p>

    <p className="vitalic">
      At that time Ya‘qub عليه السلام
      <span className="boldItalic">
        {' '}
        “turned away from them and said: ‘Oh, my grief for Yusuf!’ and his eyes
        became white with sorrow”
      </span>
      {' '}
      (Qur’an 12:84).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YUSUF عليه السلام REVEALS HIMSELF</p>
  </div>

  <div className="main_text">
    <p>
      Yusuf عليه السلام had understood everything they said. Unable to contain
      himself any longer, he ordered all his servants to leave the room. Once
      they were alone, he revealed his identity to his brothers.
    </p>

    <p>
      Then he wept so loudly that even the Egyptians outside heard him and
      reported it to Pharaoh.
    </p>

    <p>
      “It is I—Yusuf! Yusuf! Is my father still alive?”
      he cried.
    </p>

    <p>
      His brothers were so shocked that they could hardly speak.
    </p>

    <p>
      “Come closer,” Yusuf عليه السلام said.
      “I am Yusuf, the brother whom you sold into Egypt. Do not grieve or blame
      yourselves. Allah sent me here before you so that lives might be saved.
      The famine has lasted two years, and five more years remain. Allah sent me
      ahead of you to preserve a remnant and save many people.”
    </p>

    <p>
      “It was not you who sent me here, but Allah. He made me an adviser to
      Pharaoh and ruler over all Egypt. Hurry back to my father and tell him:
      ‘Your son Yusuf has been made ruler over Egypt. Come to me without delay.’
      Bring all your families here, because five years of famine still remain.”
    </p>

    <p>
      “You can see with your own eyes that I am Yusuf, and Binyamin is my
      witness. Tell my father of the honor Allah has given me in Egypt and bring
      him here as quickly as possible.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Then Yusuf عليه السلام embraced Binyamin رضي الله عنه and wept. Afterward
      he embraced all his brothers. They too wept, and only then did they find
      the courage to speak with him.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          “They said:
          ‘Are you really Yusuf?’
          He said:
          ‘I am Yusuf, and this is my brother.’
          ...
          They said:
          ‘By Allah, Allah has certainly preferred you over us, and indeed we
          have been sinners’” (Qur’an 12:90-91).
        </p>
      </div>
    )}
  </div>
</main>
  
  );
}