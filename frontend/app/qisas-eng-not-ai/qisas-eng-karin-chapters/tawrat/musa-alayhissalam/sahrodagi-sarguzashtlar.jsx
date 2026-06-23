'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function DesertAdventures() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “And We made the oppressed people inherit the eastern and western parts
      of the land”
      <span className="vitalic"> (Al-A‘raf 7:137).</span>
    </p>

    <p className="vitalic">
      Thus the Children of Isra’il set out under the guidance of Allah toward
      the land that had been promised to them as an inheritance. The distance
      from Egypt to Canaan was not especially great; by horse or camel, the
      journey would have taken only a few weeks. Yet for the people of Allah,
      what should have been a journey of two weeks would eventually stretch
      into forty years.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Complaints About Food</p>
  </div>

  <div className="main_text">
    <p>
      The community of Isra’il then departed from Elim and arrived in the
      Wilderness of Sin, between Elim and Sinai. It had been a month and a half
      since they left Egypt.
    </p>

    <p>
      When they reached the Wilderness of Sin, the people began complaining
      against Musa and Harun عليهما السلام. They said to Musa:
      “We should never have left Egypt. It would have been a thousand times
      better if Allah had let us die there beside the pots of meat. At least we
      could eat as much meat as we wished. But you have brought us into the
      wilderness to starve us to death.”
    </p>

    <p>
      Allah the Exalted then said to Musa عليه السلام:
      “I shall send down bread for you from heaven. Let the people go out each
      day and gather their daily provision. In this way I will test them and
      see whether they will obey My guidance or not.”
    </p>

    <p>
      Musa and Harun عليهما السلام gathered the people and said:
      “It was not we who brought you out of Egypt — it was Allah. It is not we
      who provide for you — it is Allah. You are not rebelling against us; you
      are rebelling against Allah. This evening He will satisfy you with meat,
      and tomorrow He will satisfy you with bread. After witnessing these
      signs, will you still refuse to come to your senses? Know that it is
      Allah against whom you are complaining!”
    </p>

    <p>
      At that moment, before the eyes of the people, the radiant glory of Allah
      appeared in the form of a cloud. Then revelation came to Musa
      عليه السلام:
      “I have heard the complaints of the Children of Isra’il. Tell them:
      ‘In the evening you shall eat meat, and in the morning you shall be
      satisfied with bread. Then you will know that I am your Lord.’”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>BREAD FROM HEAVEN</p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble1')}
      className="boldItalic cursor-pointer"
    >
      “We shaded you with clouds and sent down manna
      <sup>1</sup>{' '}
      and quail for you, saying:
      ‘Eat from the pure things We have provided for you.’
      Yet they did not wrong Us; rather, they wronged themselves.”
      <span className="vitalic"> (Al-Baqarah 2:57).</span>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          According to Ibn Kathir, manna was a substance that could be eaten as
          food or sweetened as a delicacy, and when mixed with water could also
          serve as a drink.
        </p>
      </div>
    )}

    <p>
      That evening quail came and covered the entire camp. In the morning the
      ground around the camp was covered with dew. When the dew disappeared,
      fine flakes resembling frost remained upon the earth. The people asked
      one another:
      “What is this?”
    </p>

    <p>
      The Messenger of Allah said to them:
      “This is the bread Allah has given you. Let each person gather only what
      is needed. Collect one omer for every member of your household. This is
      the command of Allah.”
    </p>

    <p>
      The people did as they were instructed. Large families gathered more, and
      smaller families gathered less. Yet when they measured it, those who had
      gathered much had no excess, and those who had gathered little had no
      shortage. Every household had exactly what it needed.
    </p>

    <p>
      (The bread made from this heavenly provision was pale white, like
      coriander seed, and tasted like bread baked with honey.)
    </p>

    <p className="vitalic">
      Yes, human life is not free from hardship. Sometimes we must pass through
      our own “wildernesses” and endure seasons of hunger and difficulty. There
      are moments when even thoughts such as “Do I truly have faith?” may enter
      the heart.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Gather Only Your Daily Provision</p>
  </div>

  <div className="main_text">
    <p>
      Musa عليه السلام also instructed the people:
      “Allah provides your daily sustenance day by day. Therefore do not store
      this bread for tomorrow. Allah will provide for you again tomorrow. Take
      only enough for one day.”
    </p>

    <p>
      Yet some ignored the words of Musa عليه السلام and set aside part of
      their bread for the next day. When they looked at it the following
      morning, they found that it had spoiled and become infested with worms.
    </p>

    <p className="vitalic">
      Entrusting tomorrow to Allah is not always easy. Anxiety has a power of
      its own. Are there things that trouble you? What are they? Which of them
      can you place into the hands of Allah?
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Provision for the Day of Rest</p>
  </div>

  <div className="main_text">
    <p>
      Every morning the people gathered as much manna as they needed. When the
      sun grew hot, whatever remained on the ground melted away. But on the
      sixth day they discovered that twice as much manna had appeared. The
      elders came to Musa عليه السلام and asked about it.
    </p>

    <p>
      “Allah says that tomorrow is the seventh day — a day of rest,” replied
      the Messenger of Allah.
      “Allah has set aside one day for rest. Therefore whatever you intend to
      bake tomorrow, bake today. Whatever you intend to boil tomorrow, boil
      today. Eat part of it today and keep the rest for tomorrow.”
    </p>

    <p>
      The people obeyed and saved half of the food for the next day. This time
      it neither spoiled nor became infested with worms.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE SEVENTH DAY — A DAY OF REST</p>
  </div>

  <div className="main_text">
    <p>
      That evening Musa عليه السلام gathered the people and said:
      “Tomorrow is a day of rest. No bread will fall from heaven. For six days
      you shall gather bread, but on the seventh day there will be none.”
    </p>

    <p>
      Even after hearing this, some people still went out to gather manna on
      the seventh day, but they found nothing. Then Allah revealed to Musa
      عليه السلام:
      “How long will you refuse to obey My commands and guidance? I have
      appointed a day of rest for you. Remember it well. On the sixth day I
      provide enough for two days. Therefore remain at rest on the seventh day.
      Let no one go out searching for bread.”
      From that time onward, the people observed the seventh day as a day of
      rest.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>***</p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble2')}
      className="cursor-pointer"
    >
      The descendants of Ya‘qub عليه السلام continued receiving manna from
      heaven six days every week until they finally reached the Promised Land.
      Later, by the command of Allah, Harun عليه السلام placed a portion of
      that manna inside the Ark of the Covenant
      <sup>2</sup>{' '}
      so that future generations could see it and remember. The Children of
      Isra’il lived on this heavenly bread for forty years before entering the
      land of Canaan.
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          The Ark of the Covenant was built by the command of Allah and is
          mentioned in the Noble Qur’an as the “Tabut” (Al-Baqarah 2:248). It
          measured two and a half cubits in length and one and a half cubits in
          width and height. Both inside and outside were overlaid with pure
          gold. Four golden rings were attached to its sides, through which
          gold-covered poles were inserted for carrying it. Upon the Ark was a
          lid of pure gold, and above the lid stood two golden cherubim.
          Allah had said:
          “My tranquility shall descend between the cherubim, and there I shall
          reveal My commands to you.”
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>Complaints About Water</p>
  </div>

  <div className="main_text">
    <p>
      Then, by the command of Allah, the community of Isra’il departed from the
      Wilderness of Sin and came to Rephidim, where they made camp. But there
      was no drinking water there. The people came to the Messenger of Allah
      and demanded:
      “Give us water to drink!”
    </p>

    <p>
      “Why do you accuse me?” he replied.
      “Why do you test Allah and insist on having your own way?”
      Yet the people would not listen.
      “Why did you bring us out of Egypt?” they argued.
      “Do you intend to let us, our children, and our livestock die of thirst?”
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Why had Musa عليه السلام brought them out of Egypt?
      In truth, it was not Musa who brought them out — it was Allah.
      And why had Allah delivered them from Egypt?
      Was it to destroy them?
    </p>

    <p
      onClick={() => toggleBubble('bubble3')}
      className="vitalic cursor-pointer"
    >
      No! Allah intended to make them successors upon the earth,
      <sup>3</sup>{' '}
      and to bring them into a land flowing with milk and honey.
      He had promised this repeatedly. Yet whenever even the slightest hardship
      appeared, the people immediately rebelled and tested the patience of
      Allah through their stubbornness.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>{' '}
          In Surah Al-A‘raf Allah says:
          “Perhaps your Lord will destroy your enemy and make you successors
          upon the earth, then see how you act”
          (7:129).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>Water from the Rock</p>
  </div>

  <div className="main_text">
    <p>
      Then the Messenger of Allah cried out:
      “My Lord, how am I to guide this people?”
      The people were truly ready to stone Musa عليه السلام.
      Then a voice came from Allah:
      “Take in your hand the staff with which you struck the Nile. Bring some
      of the elders with you and go to Mount Sinai. There I shall show you a
      rock. Strike it with your staff, and water will flow from it.”
    </p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble4')}
      className="cursor-pointer"
    >
      Musa عليه السلام did exactly as he was instructed. The moment his staff
      struck the rock, water burst forth before the eyes of the elders.
      The Messenger of Allah named that place Massah and Meribah.
      <sup>4</sup>{' '}
      For there the people had tested Allah by asking:
      “Is Allah truly with us or not?”
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>{' '}
          Meaning: Testing and Quarreling.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>The Visit of Shu‘ayb عليه السلام</p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble5')}
      className="cursor-pointer"
    >
      Shu‘ayb عليه السلام — the father-in-law of Musa عليه السلام — heard
      that the Children of Isra’il had left Egypt. He brought his daughter
      Safura and his grandchildren
      <sup>5</sup>{' '}
      and set out to meet his son-in-law. At that time the Children of Isra’il
      were camped in the plains near Mount Sinai.
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>{' '}
          Some time earlier, Musa عليه السلام had sent his wife Safura and his
          two sons back to Madyan to stay with her father.
        </p>
      </div>
    )}

    <p>
      When Musa عليه السلام heard that his father-in-law was approaching, he
      went out to welcome him. He knelt before him and kissed his hands. After
      exchanging greetings, they entered the tent. The Messenger of Allah then
      described everything that had happened — how they had departed from Egypt
      and all the hardships the Children of Isra’il had endured on their
      journey.
    </p>

    <p>
      Shu‘ayb عليه السلام rejoiced when he heard of Allah’s kindness toward
      them. He praised and glorified Allah, saying:
      “Indeed, He is greater than all false gods! He has delivered you from the
      hands of the arrogant Egyptians.”
      Then he offered a number of sacrifices in gratitude to Allah.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>The Appointment of Judges</p>
  </div>

  <div className="main_text">
    <p>
      The following day Musa عليه السلام was occupied with settling disputes
      among the people. From morning until evening the people stood around him.
      Observing this, his father-in-law asked:
      “What are you doing? Why do you judge every matter alone while all these
      people stand before you from dawn until dusk?”
    </p>

    <p>
      Musa عليه السلام replied:
      “The people come to me seeking the will of Allah. Whenever a dispute
      arises, I explain the commands and laws of Allah and make a judgment
      between the two parties.”
    </p>

    <p>
      Shu‘ayb عليه السلام said:
      “This is not good. You will wear yourself out, and you will wear out the
      people as well. You cannot carry this burden alone.
      May Allah help you.
      Listen to my advice:
      You represent the people before Allah and bring their concerns before
      Him. You teach them His commands and laws and show them how to walk in
      the right path.
      But when it comes to administration, choose capable men from among the
      people — men who fear Allah, hate dishonesty, reject bribery, and can be
      trusted. Appoint them over thousands, hundreds, fifties, and tens.
      Let them judge the ordinary matters. Only the most important cases should
      be brought to you. In this way your burden will become lighter, and the
      people will return home satisfied. This is pleasing to Allah.”
    </p>

    <p>
      Musa عليه السلام accepted his father-in-law’s advice. He selected capable
      men from among the people and appointed them as leaders over thousands,
      hundreds, fifties, and tens. From then on they handled the ordinary legal
      matters, while only the most difficult and important cases were brought
      before the Messenger of Allah.
      A few days later Shu‘ayb عليه السلام bid farewell to Musa عليه السلام
      and returned to his own land.
    </p>
  </div>
</main>
  );
}