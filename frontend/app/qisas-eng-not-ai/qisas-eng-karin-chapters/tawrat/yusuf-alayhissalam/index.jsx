'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function Yusuf() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
  ]);

  return (
    <main className="stories relative">
      <div className="main_text">
        <p className="boldItalic">
          “Indeed, in the story of Yusuf and his brothers there are signs for those
          who ask and reflect.”
          <span className="vitalic"> (Surah Yusuf 12:7).</span>
        </p>
      </div>

      <div className="paragraph_heading">
        <p>THE DREAMS OF YUSUF عليه السلام</p>
      </div>

      <div className="main_text">
        <p className="boldItalic">
          “We relate to you the best of stories through what We have revealed to you
          in this Qur’an, although before it you were among those unaware. Remember
          when Yusuf said to his father:
          ‘O my father, I saw eleven stars, and the sun and the moon; I saw them
          prostrating themselves before me.’”
          <span className="vitalic"> (12:3-4).</span>
        </p>
      </div>

      <div className="main_text">
        <p>
          Yusuf عليه السلام was the eleventh son in the family. Ya‘qub عليه السلام
          loved him more than his other children and often spoiled him, saying:
          “He is the son I was granted in my old age.”
          His brothers could not bear this. Yusuf عليه السلام helped his older
          brothers tend their father’s flocks, and whenever he saw or heard them
          doing something wrong, he would tell his father. When he reached the age
          of seventeen, his father had a beautiful multicolored robe made for him.
          After that, his brothers no longer spoke kindly to him.
        </p>

        <p>
          One day he saw a dream and said to his brothers:
          “Last night I saw a dream. We were all binding sheaves in a field. Then my
          sheaf stood upright while yours gathered around mine and bowed to it.”
          His brothers hated him even more and exclaimed:
          “What?! What did you say? Do you intend to become our ruler?”
        </p>

        <p>
          Not long afterward, Yusuf عليه السلام saw another dream and said:
          “I saw the sun, the moon, and eleven stars bowing before me.”
        </p>

        <p>
          He also told his father, who rebuked him:
          “What kind of dream is this? Shall I, your mother, and your brothers all
          come and bow before you?”
          Yet the dreams of Yusuf عليه السلام remained in the thoughts of Ya‘qub
          عليه السلام.
        </p>

        <p className="boldItalic">
          “Then he said:
          ‘My dear son, do not relate your dream to your brothers, lest they plot
          against you. Surely Satan is a clear enemy to mankind. Thus your Lord will
          choose you, teach you the interpretation of dreams, and complete His favor
          upon you and upon the family of Ya‘qub, just as He completed it upon your
          forefathers Ibrahim and Ishaq.’”
          <span className="vitalic"> (Qur’an 12:5-6).</span>
        </p>

        <p className="vitalic">
          But Yusuf عليه السلام had already told his brothers about the dream.
        </p>
      </div>

      <div className="paragraph_heading">
        <p>THE PLAN OF THE BROTHERS</p>
      </div>

      <div className="main_text">
        <p className="boldItalic">
          <span className="vitalic">
            Filled with jealousy, the brothers would say:
          </span>{' '}
          “Our father loves Yusuf and Binyamin more than us, even though we are the
          stronger group.”
          <span className="vitalic">
            {' '}
            Therefore they decided:
            “Yusuf must be removed.”
            Then they went to Ya‘qub عليه السلام and said:
          </span>{' '}
          “Our father, why do you not trust us with Yusuf? We are sincere toward
          him. Send him with us tomorrow so that he may eat, play, and enjoy
          himself. We will certainly protect him.”
          Their father replied:
          “It saddens me that you should take him away. I fear that a wolf may
          devour him while you are careless.”
          <span className="vitalic">
            {' '}
            (Surah Yusuf, verses 11–14).
          </span>
        </p>
      </div>

      <div className="paragraph_heading">
        <p>MAN OR ANGEL?</p>
      </div>

      <div className="main_text">
        <p>
          Some time later, the brothers had taken the flocks to Shechem. One day
          Ya‘qub عليه السلام said to Yusuf:
          “Go to Shechem and see how your brothers are doing and how the flocks are
          faring.”
          Yusuf عليه السلام agreed and set out.
        </p>

        <p>
          In the fields of Shechem, a man met him and asked:
          “What are you looking for?”
          Yusuf عليه السلام replied:
          “I am searching for my brothers. They were tending sheep. Have you seen
          them?”
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble1')}
        >
          “They are not here. I heard them saying they were going to Dothan,”
          the man replied. So Yusuf عليه السلام continued after his brothers toward
          Dothan.
          <sup>1</sup>
        </p>

        {openBubbles['bubble1'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble1')}
          >
            <p>
              <sup>1</sup>
              The distance was approximately seventy kilometers.
            </p>
          </div>
        )}
      </div>

      <div className="paragraph_heading">
        <p>WHERE HATRED CAN LEAD...</p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble2')}
        >
          When the brothers saw Yusuf عليه السلام from afar, they began planning his
          death.
          “Look, here comes the dreamer!” they said.
          “Come, let us kill him and throw him into a well. Then we will tell our
          father that a wolf devoured him. Then we shall see what becomes of his
          dreams.”
          <sup>2</sup>
        </p>

        {openBubbles['bubble2'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble2')}
          >
            <p>
              <sup>2</sup>
              Ironically, they wanted to kill Yusuf عليه السلام because of his
              dreams. Yet their evil plan became one of the very means through which
              those dreams were eventually fulfilled.
            </p>
          </div>
        )}

        <p>
          “No,” said Reuben رضي الله عنه, wishing to save his younger brother.
          “Let us not stain our hands with blood. Instead, throw him alive into a
          well and let him perish there.”
          Reuben intended later to rescue Yusuf عليه السلام secretly and return him
          to his father.
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble3')}
        >
          As soon as Yusuf عليه السلام arrived, his brothers seized him, stripped
          off his multicolored robe, and threw him into an old dry well.
          <sup>3</sup>
        </p>

        {openBubbles['bubble3'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble3')}
          >
            <p>
              <sup>3</sup>
              The Qur’an says:
              “And when they agreed to throw him into the depths of the well, We
              revealed to him:
              ‘You will surely inform them of this deed of theirs while they do not
              recognize you.’”
              (12:15).
            </p>
          </div>
        )}
      </div>

      <div className="paragraph_heading">
        <p>THE SUGGESTION OF YAHUDA رضي الله عنه</p>
      </div>

      <div className="main_text">
        <p>
          While they were sitting down to eat, they noticed a caravan approaching in
          the distance. The travelers were Ishmaelite merchants carrying perfumes
          and spices from Gilead to Egypt.
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble4')}
        >
          Then Yahuda رضي الله عنه said:
          “What benefit is there in killing Yusuf? Let us sell him to the
          Ishmaelites. After all, he is our brother.”
          The suggestion pleased the others.
          <sup>4</sup>
        </p>

        {openBubbles['bubble4'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble4')}
          >
            <p>
              <sup>4</sup>
              Ibn al-Athir, Al-Kamil, vol. 1, p. 139.
            </p>
          </div>
        )}

        <p className="boldItalic">
          “Then travelers came, and they sent their water-drawer. He lowered his
          bucket and cried:
          ‘Good news! Here is a boy!’
          They concealed him as merchandise.
          Allah was fully aware of what they were doing.
          They sold him for a cheap price — only a few silver coins.”
          <span className="vitalic"> (12:19-20).</span>
        </p>

        <p>
          Thus the brothers pulled Yusuf عليه السلام from the well and sold him to
          the merchants for twenty pieces of silver. The merchants then took him
          with them to Egypt.
        </p>
      </div>

      <div className="paragraph_heading">
        <p>THE BLOOD-STAINED ROBE</p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble5')}
        >
          Reuben رضي الله عنه was not present when the caravan arrived. When he
          returned and saw that Yusuf was gone from the well, he tore his garments
          in grief and cried:
          “Yusuf is gone! What shall I do now? What will I say to my father?”
          Then the brothers slaughtered a goat and stained Yusuf’s robe with its
          blood.
          <sup>5</sup>{' '}
          They sent it to their father, saying:
          “We found this robe in the wilderness. See whether it belongs to Yusuf.”
          Ya‘qub عليه السلام recognized it immediately:
          “Yes, it is Yusuf’s robe! Yusuf’s robe! Has a wolf devoured him?”
        </p>

        {openBubbles['bubble5'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble5')}
          >
            <p>
              <sup>5</sup>
              Al-Tha‘labi, Arais, p. 114.
            </p>
          </div>
        )}

        <p className="vitalic">
          According to the Qur’an, he then said:
          <span className="boldItalic">
            {' '}
            “No! Your souls have enticed you to something...”
          </span>
          <span className="vitalic"> (12:18).</span>
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble6')}
        >
          Afterwards he tore his garments in grief and clothed himself in sackcloth.
          For many days he wept for his son. No matter how much his sons and
          daughters tried to comfort him, nothing helped.
          <span className="boldItalic">
            “I complain of my sorrow and grief only to Allah, and I know from Allah
            what you do not know.”
          </span>
          <sup>6</sup>{' '}
          “Until I enter my grave, I shall continue grieving for him,”
          he would say, and then weep again for Yusuf عليه السلام.
        </p>

        {openBubbles['bubble6'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble6')}
          >
            <p>
              <sup>6</sup>
              Qur’an 12:86.
            </p>
          </div>
        )}

        <p>
          The merchants arrived in Egypt and sold Yusuf عليه السلام to one of
          Pharaoh’s officials, Potiphar, the chief of the royal guards.
        </p>
      </div>

      <div className="paragraph_heading">
        <p>YUSUF عليه السلام IN EGYPT</p>
      </div>

      <div className="main_text">
        <p className="vitalic">
          The Qur’an says:
          <span className="boldItalic">
            {' '}
            “The man from Egypt who purchased him said to his wife:
            ‘Treat him honorably. Perhaps he may benefit us, or we may adopt him as
            a son.’
            Thus We established Yusuf in the land and taught him the interpretation
            of dreams.”
          </span>
          <br />
          (Surah Yusuf 12:21).
        </p>

        <p>
          Thus began the life of Yusuf عليه السلام in Egypt. Allah was always with
          him and blessed everything he did. Seeing that Allah’s favor accompanied
          Yusuf عليه السلام and that every task entrusted to him prospered,
          Potiphar grew fond of him and eventually entrusted his entire household and
          all his wealth to his care.
        </p>

        <p>
          From that day onward Allah blessed Potiphar’s household because of Yusuf
          عليه السلام. Blessings became evident in his home, his fields, and his
          flocks. Potiphar became free from all household concerns except his own
          food and drink, for Yusuf عليه السلام managed every affair.
        </p>
      </div>

      <div className="paragraph_heading">
        <p>DESIRE AND FALSE ACCUSATION</p>
      </div>

      <div className="main_text">
        <p>
          Yusuf عليه السلام was a handsome and noble young man. Because of this,
          Potiphar’s wife began to desire him. One day she approached him and
          commanded:
          “Come, lie with me.”
        </p>

        <p>
          Yusuf عليه السلام refused:
          “My lady, my master has trusted me with everything in this house. He has
          placed me in the highest position. Nothing has been withheld from me
          except you, because you are his wife. How could I commit such an evil
          deed? How could I sin against Allah?”
        </p>

        <p>
          Potiphar’s wife spoke to him day after day, but Yusuf عليه السلام never
          yielded and avoided her whenever possible. One day he entered the house on
          business and found no one else inside.
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble7')}
        >
          Then Potiphar’s wife seized him by his garment and said:
          “Come! Come with me!”
          Yusuf عليه السلام fled toward the door.
          <sup>7</sup>{' '}
          But his shirt tore and remained in her hand. Seeing him escape, she cried
          out:
          “My husband brought this Hebrew slave into our house to mock us! He tried
          to violate me! When I screamed, he left his garment behind and fled!”
        </p>

        {openBubbles['bubble7'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble7')}
          >
            <p>
              <sup>7</sup>
              Qur’an 12:25.
            </p>
          </div>
        )}

        <p>
          She kept Yusuf’s garment until her husband returned. Then she repeated her
          fabricated story:
          “This Hebrew slave whom you brought tried to dishonor me. When I cried
          out, he left his garment and ran away.”
        </p>
      </div>

      <div className="main_text">
        <p
          className="cursor-pointer "
          onClick={() => toggleBubble('bubble8')}
        >
          Potiphar became furious when he heard his wife’s accusation.
          <span className="vitalic">
            {' '}
            He investigated the matter. The Qur’an says:
          </span>{' '}
          <span className="boldItalic">
            “A witness from her household testified:
            ‘If his shirt is torn from the front, then she is truthful and he is
            lying. But if his shirt is torn from the back, then she is lying and he
            is truthful.’”
          </span>
          <sup>8</sup>{' '}
          <span className="vitalic">
            This is recorded in the Qur’an.
          </span>
        </p>

        {openBubbles['bubble8'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble8')}
          >
            <p>
              <sup>8</sup>
              Qur’an 12:26-27.
            </p>
          </div>
        )}

        <p>
          Nevertheless, although Yusuf عليه السلام was innocent, Potiphar placed
          him in prison, where the king’s prisoners were confined.
        </p>
      </div>

      <div className="main_text">
        <p className="vitalic">
          (The Qur’an relates that before Yusuf عليه السلام was imprisoned, the
          women of the city criticized Potiphar’s wife because a noblewoman had
          become infatuated with a foreign slave. She therefore invited them to a
          banquet and placed knives in their hands. Then she called Yusuf عليه
          السلام into the room. When the women saw him, they were astonished and cut
          their hands, exclaiming:
          “This is no ordinary human being — this is an angel!”)
        </p>
      </div>

      <div className="paragraph_heading">
        <p>YUSUF عليه السلام IN PRISON</p>
      </div>

      <div className="main_text">
        <p>
          Yet even there Allah remained with Yusuf عليه السلام. Allah showed him
          mercy and caused the prison warden to regard him with affection. Before
          long, Yusuf عليه السلام was placed in charge of the prison and began
          overseeing its affairs.
        </p>

        <p>
          After that, the warden stopped interfering in the matters entrusted to
          Yusuf عليه السلام. Allah supported him in every task and remained with him
          at all times.
        </p>
      </div>
    </main>
  );
}