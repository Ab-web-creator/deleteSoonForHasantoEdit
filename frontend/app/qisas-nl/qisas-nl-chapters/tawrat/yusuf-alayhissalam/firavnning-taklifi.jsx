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
      News that Yusuf’s brothers had arrived quickly reached Pharaoh.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>PHARAOH'S INVITATION</p>
  </div>

  <div className="main_text">
    <p>
      Pharaoh and his officials were delighted. Pharaoh summoned Yusuf عليه السلام
      and said:
    </p>

    <p>
      “Tell your brothers to bring your father and their entire households and
      settle in Egypt. I will give them the finest and most fertile part of the
      land. Send wagons for your father, the women, and the young children.
      Also tell them not to trouble themselves by bringing everything from
      Canaan, for the best of Egypt shall be theirs.”
    </p>

    <p className="vitalic">
      Indeed, Pharaoh, the king of Egypt, honored them greatly and personally
      invited them to settle in Egypt. For this reason, the Children of Israel
      later had every right to leave Egypt if they so wished.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE CARAVAN SETS OUT</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Take this shirt of mine and cast it over my father’s face; his sight will
      return. Then bring all your family to me.”
      (Qur’an 12:93)
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Thus the sons of Isra’il (Ya‘qub) عليه السلام set out for Canaan with the
      wagons and provisions Pharaoh had given them. Yusuf عليه السلام presented
      each of his brothers with a set of garments, while Binyamin received five
      sets of clothing and three hundred mithqals<sup>1</sup>{' '}
      of silver. For his father, Yusuf عليه السلام loaded ten donkeys with the
      finest goods of Egypt. In addition, he sent ten more donkeys carrying
      grain, bread, and other provisions for the journey.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup> One mithqal equals approximately 11.6 grams.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          “And when the caravan departed, their father said:
          ‘You may think I have become senile, but indeed I can sense the scent
          of Yusuf.’”
          (Qur’an 12:94)
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      As he bid farewell to his brothers, Yusuf عليه السلام reassured them:
      “Do not be afraid. Everything will be well.”
      <sup>2</sup>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>GLAD TIDINGS!</p>
  </div>

  <div className="main_text">
    <p>
      They left Egypt and returned to Canaan, where their father Ya‘qub
      عليه السلام was waiting. The moment they saw him they exclaimed:
      “Yusuf is alive! He has become the ruler of Egypt!”
    </p>

    <p>
      Ya‘qub عليه السلام could hardly believe it.
    </p>

    <p>
      Only after seeing Pharaoh’s wagons and hearing Yusuf’s message did his
      spirit revive. Again and again he cried:
      “My son is alive! Yusuf, my son, is alive! I will go to him! Before I die,
      I will see him with my own eyes!”
      <span className="vitalic"> Weeping as he spoke.</span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“I WILL GO TO MY SON!”</p>
  </div>

  <div className="main_text">
    <p>
      Thus Isra’il (Ya‘qub) عليه السلام gathered his entire household and set
      out. When they reached Beersheba, he offered sacrifices to Allah.
    </p>

    <p>
      That night he saw a dream. In the dream he heard a voice calling:
      “Ya‘qub! Ya‘qub!”
    </p>

    <p>
      “Labbayk,” replied Ya‘qub عليه السلام.
    </p>

    <p>
      The voice said:
      “I am the God of your father Ishaq. Do not be afraid to go down to Egypt.
      I Myself will be with you. There I shall make from you a great nation.
      You will die there in the hands of your son Yusuf. Then, in time, I will
      bring your descendants back from Egypt and return them to Canaan.”
    </p>

    <p>
      Encouraged by this vision, Ya‘qub عليه السلام gathered all his descendants,
      his sons, daughters, and grandchildren, together with all his possessions,
      livestock, and flocks, and departed from Beersheba toward Egypt. Ya‘qub
      عليه السلام, the women, and the young children traveled in the wagons
      Pharaoh had provided.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE REUNION OF FATHER AND SON</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “When they entered upon Yusuf, he drew his parents close to himself and
      said:
      ‘Enter Egypt, if Allah wills, in safety.’
      And he raised his parents upon the throne, and they fell before him in
      prostration. Then he said:
      ‘O my father, this is the interpretation of my former dream. My Lord has
      made it come true.’”
      <span className="vitalic"> (12:99–100).</span>
    </p>

    <p>
      After arriving in Goshen, Yusuf عليه السلام mounted his royal chariot and
      traveled there in splendor to meet his father. The moment he saw him, he
      threw his arms around him and wept for a long time.
    </p>

    <p>
      “So the day has come when I can finally see you!” Ya‘qub عليه السلام kept
      saying.
      “Now I can leave this world in peace. I feared I might die without ever
      seeing you again.”
    </p>

    <p>
      Later Yusuf عليه السلام said to his brothers:
      “I will inform Pharaoh that you have arrived. I will tell him that you are
      shepherds, that you have brought all your livestock and possessions with
      you. When Pharaoh asks about your occupation, tell him that, like your
      fathers before you, you have cared for livestock since your youth. Then
      he will allow you to settle in Goshen.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE HOUSEHOLD OF YA‘QUB عليه السلام</p>
  </div>

  <div className="main_text">
    <p>
      The descendants of Ya‘qub عليه السلام who migrated to Egypt were as
      follows:
    </p>

    <p>
      Reuben رضي الله عنه, the firstborn son of Ya‘qub عليه السلام through Lady
      Leah, and Reuben’s sons: Hanoch, Pallu, Hezron, and Carmi;
    </p>
  </div>

  <div className="main_text">
    <p>
      Shim‘un رضي الله عنه, the second son, and his sons Jemuel, Jamin, Ohad,
      Jachin, Zohar, and Shaul, who was born to a Canaanite woman;
    </p>

    <p>
      Levi رضي الله عنه, the third son, and his sons Gershon, Kohath, and
      Merari;
    </p>

    <p>
      Yahudha رضي الله عنه, the fourth son, and his sons Er, Onan, Shelah,
      Perez, and Zerah; and the sons of Perez: Hezron and Hamul.
      (Er and Onan had already died earlier in Canaan.)
    </p>

    <p>
      Issachar رضي الله عنه, the fifth son, and his sons Tola, Puvah, Job, and
      Shimron;
    </p>

    <p>
      Zebulun رضي الله عنه, the sixth son, and his sons Sered, Elon, and
      Jahleel.
    </p>

    <p>
      These were the children whom Leah رضي الله عنها bore to Ya‘qub عليه السلام
      in Mesopotamia. Her daughter Dinah رضي الله عنها was also born there.
      Altogether, including children and grandchildren, Leah’s descendants
      numbered thirty-three.
    </p>

    <p>
      The descendants born to Ya‘qub عليه السلام through Zilpah, the servant
      whom Laban had given to Leah, totaled sixteen:
    </p>

    <p>
      Gad رضي الله عنه and his sons Zephon, Haggi, Shuni, Ezbon, Eri, Arodi,
      and Areli; and Asher رضي الله عنه with his sons Imnah, Ishvah, Ishvi,
      Beriah, and his daughter Serah. Beriah himself had two sons, Heber and
      Malchiel.
    </p>

    <p>
      Ya‘qub عليه السلام had two sons through Lady Rachel:
      Yusuf عليه السلام and Binyamin رضي الله عنه.
    </p>

    <p>
      Yusuf عليه السلام married Asenath, daughter of Potiphera, priest of On,
      and she bore him two sons: Manasseh and Ephraim.
      Binyamin رضي الله عنه had ten sons: Bela, Becher, Ashbel, Gera, Naaman,
      Ehi, Rosh, Muppim, Huppim, and Ard.
    </p>

    <p>
      Thus the descendants of Rachel, including children and grandchildren,
      numbered fourteen altogether.
    </p>

    <p>
      The descendants of Bilhah رضي الله عنها, the servant whom Laban had given
      to Rachel, numbered seven.
    </p>

    <p>
      Bilhah’s first son was Dan رضي الله عنه, whose son was Hushim; her second
      son was Naphtali رضي الله عنه, whose sons were Jahzeel, Guni, Jezer, and
      Shillem.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Altogether, the descendants of Ya‘qub عليه السلام who came with him to
      Egypt—excluding daughters-in-law—numbered sixty-six persons.
      <sup>3</sup>{' '}
      If Yusuf عليه السلام, his two sons born in Egypt, and Ya‘qub عليه السلام
      himself are included, the total becomes seventy.
      Thus the household of Ya‘qub عليه السلام in Egypt consisted of seventy
      people.
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          This count includes Dinah رضي الله عنها.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>SETTLING IN GOSHEN</p>
  </div>

  <div className="main_text">
    <p>
      Yusuf عليه السلام then went before Pharaoh and said:
      “My father and my brothers have arrived from Canaan with all their
      livestock and possessions. They are presently in Goshen.”
    </p>

    <p>
      He then brought five of his brothers before Pharaoh.
    </p>

    <p>
      “What is your occupation?” Pharaoh asked.
    </p>

    <p>
      “We are shepherds, just as our fathers were before us,” they replied.
      “There is severe famine in Canaan, and our livestock have no pasture.
      Therefore we have come to reside temporarily in your land. If you permit
      us, we would like to settle in Goshen.”
    </p>

    <p>
      Pharaoh turned to Yusuf عليه السلام and said:
      “Your father and your brothers have come to our land. Excellent. Settle
      them in Goshen—the finest region in Egypt. And if you find capable men
      among them, let them oversee my own livestock as well.”
    </p>

    <p>
      Yusuf عليه السلام then brought his father before Pharaoh. After Ya‘qub
      عليه السلام blessed Pharaoh, Pharaoh asked him:
      “How old are you?”
    </p>

    <p>
      Ya‘qub عليه السلام replied:
      “The years of my wandering have reached one hundred and thirty. My fathers
      lived longer than I have, yet their lives were not as difficult as mine.”
    </p>

    <p>
      Before departing, he blessed Pharaoh once more.
    </p>

    <p className="vitalic">
      (Indeed, these words spoken by Ya‘qub عليه السلام himself provide a fitting
      summary of his remarkable life.)
    </p>
  </div>
</main>
 
  );
}