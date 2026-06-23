'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Musa() {
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
      “Indeed, We bestowed favor upon Musa and Harun. We delivered them and
      their people from a tremendous distress. We granted them victory, so they
      became triumphant. We gave them the clear and enlightening Book, and We
      guided them both to the Straight Path.”
      <span className="vitalic"> (As-Saffat 37:114–118).</span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>A NEW PHARAOH ASCENDS THE THRONE</p>
  </div>

  <div className="main_text">
    <p>
      About three hundred and twenty years passed after the death of Prophet
      Yusuf عليه السلام. During that time, the descendants of Ya‘qub عليه السلام
      multiplied rapidly and grew into a great nation.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Then a new king came to the throne of Egypt. He knew nothing of Yusuf
      عليه السلام and did not acknowledge the services he had rendered to Egypt.
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> Unlike the earlier Pharaohs, this ruler was exceedingly
          ignorant, tyrannical, and hostile toward the Children of Isra’il. Even
          though he was merely a man, he proclaimed himself a god. As recorded
          in Surah An-Nazi‘at, he declared:
          <span className="boldItalic">
            {' '}
            “I am your supreme lord.”
          </span>{' '}
          (79:24).
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      He said to his people:
      “The Children of Isra’il are becoming more numerous every day. If we do
      not take action, they will become too powerful. Should war break out, they
      may join our enemies and fight against us—or even leave the country
      altogether.”
    </p>

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      Thereafter the Egyptians began oppressing the Children of Isra’il with
      hard labor. Overseers were appointed over them to make their burdens even
      heavier. The store-cities of Pithom and Raamses were built during these
      difficult years.
      <sup>2</sup>
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup> Neither Pharaoh nor the wealthy Egyptians wanted to lose
          their free labor force.
        </p>
      </div>
    )}

    <p className="vitalic">
      Can you imagine what it means to be a slave? First, your hands are never
      free from labor, morning until night. Second, you cannot eat what you
      wish or wear what you wish. You are considered the property of your
      master. Third, your owner may beat you whenever he pleases. Worst of all,
      there is no hope that your life will improve. Your hands and feet are
      shackled, and you cannot free yourself.
      How, then, can a slave ever gain freedom?
    </p>

    <p className="vitalic">
      One possibility is that the master chooses to release him. But such cases
      are rare.
    </p>

    <p className="vitalic">
      Another possibility is that wealthy relatives pay a ransom and purchase
      his freedom.
    </p>

    <p className="vitalic">
      Do you know that sin resembles chains as well? A person trapped in the
      shackles of sin cannot easily break free. Have you ever resolved not to
      commit a certain wrong, only to find yourself returning to it again and
      again despite your efforts? From whom, then, should salvation be sought?
      From your parents? Your siblings? Turn instead to Allah. Pray to Him and
      seek deliverance from Him. If you ask sincerely, Allah will surely help
      you.
    </p>

    <p>
      Yet despite the increasing oppression of the Egyptians, the Children of
      Isra’il continued to multiply. Alarmed by this growth, the Egyptians
      intensified their persecution even further.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE COMMAND GIVEN TO THE MIDWIVES</p>
  </div>

  <div className="main_text">
    <p>
      Pharaoh then summoned the midwives and commanded:
      “When the Hebrew women give birth, examine the child. If it is a girl, let
      her live. But if it is a boy, kill him.”
    </p>

    <p>
      The midwives, however, feared Allah. Therefore they refused to obey
      Pharaoh’s command and did not kill the newborn boys.
    </p>

    <p>
      After some time Pharaoh summoned them and demanded:
      “Why have you disobeyed my order? Why are you allowing the boys to live?”
    </p>

    <p>
      They replied:
      “Your Majesty, it is not our fault. The Hebrew women are not like the
      Egyptian women. They are strong and give birth before the midwife can even
      arrive. There is nothing we can do.”
    </p>

    <p>
      Thus the Children of Isra’il continued to increase and became a great
      nation. Allah bestowed His favor upon the midwives and granted them
      children of their own because their hearts were filled with fear of Him.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE NEXT PROGRAM</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “The people of Pharaoh subjected you to terrible torment, slaughtering
      your sons and sparing your daughters...”
      <span className="vitalic"> (Al-Baqarah 2:49).</span>
    </p>

    <p>
      Then Pharaoh issued a decree to all the people of Egypt:
      “Throw every newborn Hebrew boy into the Nile River, but allow the girls
      to live.”
    </p>

    <p className="vitalic">
      Can you imagine such a thing? Place yourself in their position for a
      moment. Picture the mothers crying out in anguish. Try to understand the
      fathers standing helpless, unable to protect their children. Can you
      imagine it? This was a massive crime committed by one people against
      another.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE BIRTH OF A PROPHET UPON WHOM ALLAH PLACED HIS LOVE</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Place him in the chest, then cast it into the river. The river will carry
      him to the shore, where he will be taken by an enemy of Mine and an enemy
      of his. And I cast upon you love from Me, so that you might be raised
      under My watchful eye.”
      <span className="vitalic"> (Ta-Ha 20:39).</span>
    </p>

    <p>
      During those dark days, a son was born into the tribe of Levi. The child
      was exceptionally beautiful. Seeing this, his mother hid him for three
      months.
    </p>

    <p>
      When she could no longer conceal him, she took a basket woven from reeds,
      coated it with pitch and tar, placed her son inside, and set it among the
      reeds along the bank of the Nile. Meanwhile, the baby’s sister stood at a
      distance, watching to see what would become of her little brother.
    </p>

    <p>
      Not long afterward, Pharaoh’s daughter came to the river to bathe. She
      noticed a basket among the reeds and said to one of her attendants:
      “Go and bring me that basket.”
    </p>

    <p>
      When the basket was opened, she saw a crying infant inside.
      “This is one of the Hebrew children,” she said compassionately.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      At that moment the child’s sister hurried forward and asked:
      “Shall I go and find a Hebrew woman to nurse the child for you?”
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          “And remember when your sister came and said:
          ‘Shall I direct you to someone who will take care of him for you?’”
          <span className="vitalic"> (Ta-Ha 20:40a).</span>
        </p>
      </div>
    )}

    <p>
      “Yes,” replied Pharaoh’s daughter. “Bring her.”
    </p>

    <p>
      So the girl went and brought her own mother.
      Pharaoh’s daughter said:
      “Take this child and nurse him for me. I will pay you for your service.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Thus the infant was returned to the loving arms of his mother once again.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Allah says in the Noble Qur’an:
          <span className="boldItalic">
            {' '}
            “Then We returned you to your mother so that her eyes might be
            comforted and she would not grieve.”
          </span>{' '}
          (Ta-Ha 20:40b).
        </p>
      </div>
    )}
  </div>
</main>
  );
}