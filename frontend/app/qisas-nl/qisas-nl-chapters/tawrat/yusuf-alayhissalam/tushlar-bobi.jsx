'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EXAMPLE() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble4',
  ]);

  return (
 
    <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Then two young men entered prison with him. One of them said:
      ‘I saw myself pressing grapes for wine.’
      The other said:
      ‘I saw myself carrying bread upon my head, and birds were eating from it.’”
      (Surah Yusuf 12:36).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE DREAMS OF THE BAKER AND THE CUPBEARER</p>
  </div>

  <div className="main_text">
    <p>
      One day Pharaoh became angry with his chief baker and his chief cupbearer,
      and both men were thrown into the same prison where Yusuf عليه السلام was
      confined. The commander of the royal guards appointed Yusuf عليه السلام to
      attend to them.
    </p>

    <p>
      After a considerable time had passed, both the cupbearer and the baker saw
      dreams on the same night. Each dream carried its own meaning. The next
      morning Yusuf عليه السلام came to them and noticed that both men appeared
      troubled.
    </p>

    <p className="!my-0">
      —What has happened? You both seem distressed.
    </p>

    <p className="!my-0">
      —Last night we each saw a dream, but there is no one here who can explain
      them, they replied.
      Yusuf عليه السلام then said:
    </p>

    <p className="!my-0">
      —The ability to interpret dreams comes from Allah. Tell me what you saw,
      and Allah may grant understanding of their meaning.
    </p>

    <p>
      The chief cupbearer spoke first:
      “I saw a vine before me. It had three branches. Suddenly the branches
      budded, blossomed, and produced clusters of ripe grapes. Pharaoh’s cup was
      in my hand. I took the grapes, squeezed them into the cup, and then placed
      the cup into Pharaoh’s hand.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ALLAH GRANTS THE INTERPRETATION OF DREAMS</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “This is the interpretation of your dream,” said Yusuf عليه السلام.
      “The three branches represent three days. After three days Pharaoh will
      release you from prison and restore you to your former position as his
      cupbearer. When your life has returned to normal, please remember me.
      Speak to Pharaoh about me and ask him to free me from prison. I was taken
      from my homeland unjustly, and I have committed no crime here. Yet I have
      been thrown into prison.”
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          In the Zabur it is written concerning this imprisonment:
          “They bruised his feet with shackles, and his neck was put in irons,
          until the time came for his words to be fulfilled and the word of the
          Lord proved him true.”
        </p>
      </div>
    )}

    <p>
      Seeing that the cupbearer’s dream had a favorable meaning, the baker also
      related his dream:
      “In my dream I was carrying three baskets on my head. The top basket
      contained all kinds of baked goods prepared for Pharaoh, but birds came
      and ate the bread from the basket.”
    </p>

    <p>
      Yusuf عليه السلام replied:
      “This is the interpretation of your dream. The three baskets represent
      three days. After three days Pharaoh will lift up your head from you,
      execute you, and hang your body upon a stake. Then the birds will come and
      eat your flesh.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FULFILLMENT OF THE DREAMS</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      “O my fellow prisoners, one of you will pour wine for his master, while
      the other will be crucified and birds will eat from his head. The matter
      about which you inquired has already been decreed.”
      <sup>2</sup>{' '}
      And Yusuf عليه السلام said to the one whom he knew would be saved:
      “Mention me before your master.”
      But Shaytan caused him to forget mentioning Yusuf to his master.
      <span className="vitalic"> (Surah Yusuf 12:41-42).</span>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          The Noble Qur’an mentions that Yusuf عليه السلام called both men to the
          path of Allah. Even in difficult circumstances, a believer should
          remain firm upon the truth and invite others to it.
        </p>
      </div>
    )}

    <p>
      Three days later it was Pharaoh’s birthday. On that occasion he held a
      great banquet for all his officials. Then, exactly as Yusuf عليه السلام
      had interpreted, the cupbearer was restored to his former office, while
      the baker was executed. Once he returned to his position, however, the
      cupbearer forgot all about Yusuf عليه السلام.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>PHARAOH'S DREAMS</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “The king said:
      ‘I see in a dream seven fat cows being eaten by seven lean cows, and seven
      green ears of grain and seven dry ones. O nobles, if you can interpret
      dreams, explain my vision to me.’
      They replied:
      ‘These are confused dreams, and we do not know how to interpret such
      things.’”
      (Surah Yusuf 12:43-44).
    </p>

    <p>
      Two years later Pharaoh saw a troubling dream. In the dream he was
      standing beside the River Nile. Suddenly seven healthy, well-fed cows came
      up out of the river and began grazing among the reeds. Then seven ugly,
      gaunt cows emerged from the river behind them and devoured the healthy
      cows. At that moment Pharaoh awoke.
    </p>

    <p>
      Later he fell asleep again and saw another dream. This time seven full,
      healthy ears of grain grew upon a single stalk. Then seven thin ears,
      scorched by the east wind, sprang up and swallowed the healthy ears.
      Pharaoh awoke once more and realized it had been a dream.
    </p>

    <p>
      These dreams greatly troubled him. Early the next morning he summoned all
      the magicians and wise men of Egypt, but none of them could explain his
      dreams.
    </p>

    <p>
      Then Pharaoh’s cupbearer spoke:
      “Your Majesty, today I have remembered something I should have mentioned
      long ago. When you became angry and imprisoned both me and the chief
      baker, we each saw dreams in prison. There was a young Hebrew man there,
      a servant of the commander of the guards. We told him our dreams, and he
      interpreted them. Three days later everything happened exactly as he had
      said: I was restored to my position, and the baker was executed.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Then he said:
      <span className="boldItalic">
        {' '}
        “I will bring you the interpretation of these dreams. Send me.”
      </span>
      <sup>3</sup>{' '}
      He went to the prison, spoke with Yusuf عليه السلام, and then returned
      with the explanation.
      <sup>4</sup>{' '}
      Pharaoh immediately ordered:
      “Bring Yusuf to me.”
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>3</sup>
          Qur’an 12:45.
        </p>

        <p>
          <sup>4</sup>
          Yusuf عليه السلام interpreted Pharaoh’s dreams while still in prison.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>YUSUF عليه السلام BEFORE PHARAOH</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “When the messenger came to him, Yusuf said:
      ‘Return to your master and ask him about the women who cut their hands.’
      ”
      <span className="vitalic">
        {' '}
        (12:50). In this way, the charges against Yusuf عليه السلام were
        investigated once again, and his innocence was proven yet another time.
      </span>
    </p>

    <p>
      After that, Yusuf عليه السلام was quickly brought out of prison. He was
      groomed, given fresh clothing, and taken before Pharaoh.
    </p>

    <p>
      “I have seen dreams,” Pharaoh said to him, “but no one can interpret them.
      I have heard that whenever you hear a dream, you are able to explain its
      meaning.”
    </p>

    <p>
      “This ability does not come from me,” Yusuf عليه السلام replied.
      “But Allah will grant an interpretation that will bring peace to your
      heart.”
    </p>

    <p>Then Pharaoh described his dreams:</p>

    <p>
      “In my dream I was standing beside the Nile. Seven healthy, well-fed cows
      came out of the river and grazed among the reeds. Then seven ugly, thin
      cows emerged after them. Never in all Egypt have I seen such miserable
      animals. These thin cows devoured the seven healthy cows. Yet after eating
      them, they remained just as thin and ugly as before. Then I awoke.
    </p>

    <p>
      Later I dreamed again. Seven full ears of grain grew on one stalk. Then
      seven withered ears, scorched by the east wind, appeared and swallowed the
      healthy ears. I told these dreams to the magicians, but none of them could
      explain them.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE INTERPRETATION OF THE DREAMS</p>
  </div>

  <div className="main_text">
    <p>
      “Your Majesty,” Yusuf عليه السلام replied,
      “both dreams carry the same meaning. Allah has shown you what He is about
      to do. The seven healthy cows and the seven full ears of grain represent
      seven years of abundance. The seven thin cows and the seven scorched ears
      represent seven years of severe famine that will follow.
    </p>

    <p>
      Allah has shown you what is coming: for seven years Egypt will enjoy
      plentiful harvests. But after that, seven years of such devastating famine
      will come that people will forget the prosperity that came before it. The
      fact that the dream was repeated twice indicates that Allah has firmly
      decreed this matter and that it will happen soon.
    </p>

    <p>
      Therefore, Your Majesty, appoint a wise and discerning man over the land
      of Egypt. Place overseers throughout the country and have them collect
      one-fifth of the harvest during the seven years of abundance. Let them
      store grain in the cities as reserves. Then, during the seven years of
      famine, the people may draw from those reserves. Otherwise Egypt will be
      devastated by hunger.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YUSUF عليه السلام IS APPOINTED TO OFFICE</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “After speaking with Yusuf, the king said:
      ‘Today you are established in our presence as one trusted and honored.’”
      <span className="vitalic"> (Qur’an 12:54).</span>
    </p>

    <p>
      The words of Yusuf عليه السلام pleased both Pharaoh and the royal court.
      Pharaoh then said to his officials:
      “Who could carry out this task better than Yusuf? It is clear that Allah
      has filled him with wisdom and understanding.”
    </p>

    <p>
      Turning to Yusuf عليه السلام, he said:
      “Since Allah has revealed all of this to you, there is no one wiser or
      more discerning than you. You shall take charge of this matter. From today
      you are my chief minister. Everyone except me shall answer to you. The
      whole of Egypt will be under your authority, and you shall administer the
      affairs of the kingdom.”
    </p>

    <p>
      Pharaoh removed his signet ring and placed it upon Yusuf’s finger. He
      dressed him in fine linen garments and placed a golden chain around his
      neck. Then he had him ride in the second royal chariot of the kingdom.
      Wherever Yusuf عليه السلام traveled, heralds went before him proclaiming:
      “Bow in respect! Make way!”
    </p>

    <p>
      Thus Pharaoh appointed Yusuf عليه السلام as ruler over all Egypt and
      married him to the daughter of one of his noble officials. At that time
      Yusuf عليه السلام was thirty years old.
    </p>
  </div>
</main>
   
  );
}