'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function WhoAmI() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
    'bubble9',
    'bubble11',
    'bubble13',
    'bubble14',
    'bubble15',
    'bubble16',
  ]);

  return (
   <main className="stories relative">
  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      When the child had grown a little older, his mother brought him to
      Pharaoh’s daughter. She adopted him as her own son and named him Musa,
      saying:
      “I drew him out of the water.”
      Years passed, and Musa عليه السلام grew into manhood.
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          <span className="vitalic">
            According to the Noble Qur’an, Pharaoh’s wife said to those around
            her:{' '}
            <span className="boldItalic">
              “He will be a comfort to my eyes and yours. Do not kill him. Perhaps
              he may benefit us, or we may adopt him as a son.”
            </span>{' '}
            (Al-Qasas 28:9). She was aware of who the child was. Whether she had
            heard it from his birth mother who nursed him, or whether others who
            wished him harm and wanted him removed from Pharaoh’s palace informed
            her, we do not know. What is certain is that Musa عليه السلام knew the
            history of his people and was aware of Allah’s covenant and promises.
          </span>
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE FLIGHT FROM EGYPT</p>
  </div>

  <div className="main_text">
    <p>
      One day, while visiting his people, Musa عليه السلام saw an Egyptian
      beating a Hebrew man. Looking around and seeing no one nearby, he struck
      the Egyptian and killed him, then hid the body in the sand.
    </p>

    <p>
      The following day he returned again to his people. This time he found two
      Hebrews fighting one another.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      “Why are you striking him?” asked Musa عليه السلام.
      “Are we not brothers?”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          “One day Musa entered the city when its people were unaware and found
          two men fighting. One belonged to his own people and the other to his
          enemies. ... Musa struck him and killed him. Then, regretting what had
          happened, he said:
          <span className="boldItalic">
            {' '}
            ‘This is from the work of Shaytan. Indeed, he is a clear and
            misleading enemy.’
          </span>{' '}
          (Al-Qasas).
        </p>

        <p className="MarginTop10px">
          <sup>3</sup> Al-Qasas, verse 19.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      “What business is it of yours?” the man replied.
      “Do you intend to kill me as you killed someone yesterday?”
      <span className="boldItalic">
        {' '}
        “Do you want to kill me as you killed a man yesterday?”
      </span>
      <sup>3</sup>{' '}
      At that moment Musa عليه السلام realized that news of the Egyptian’s death
      had already become known.
    </p>

    <p className="vitalic">
      Indeed, the matter had spread throughout the city. The Noble Qur’an says:{' '}
      <span className="boldItalic">
        “Then a man came running from the farthest part of the city and said:
        ‘O Musa, the chiefs are plotting to kill you. Leave at once! I am
        sincerely advising you.’ So he departed from there, fearful and
        vigilant, saying: ‘My Lord, save me from the wrongdoing people.’”
      </span>{' '}
      (Al-Qasas 28:20–21).
    </p>

    <p>
      When Pharaoh learned of what had happened, he ordered:
      “Execute Musa!”
      So Musa عليه السلام fled to the land of Madyan.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>AMONG THE HANIF ARAB TRIBES</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      At that time there lived in Madyan a righteous elder named Shu‘ayb
      عليه السلام. He had seven daughters. Every day they brought their
      father’s sheep to a well to water them, but whenever they were about to do
      so, other shepherds would arrive and take control of the well.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          There is some disagreement among scholars regarding the name of the
          elder of Madyan. Hasan al-Basri and Malik ibn Anas identified him as
          Shu‘ayb عليه السلام, while Ibn Abbas رضي الله عنه and Abu Ubaydah
          رضي الله عنه referred to him as Yatrun.
        </p>
      </div>
    )}

    <p>
      On that very day, the daughters again brought their sheep to the well.
      Musa عليه السلام had just arrived from Egypt and was resting nearby.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      As the girls were drawing water and filling the troughs, the shepherds
      arrived once again.
      “Move aside!” they shouted.
      “We will water our flocks first. Take your sheep elsewhere!”
      Musa عليه السلام rose, pushed the shepherds back, and helped the young
      women water their sheep.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          See Al-Qasas 28:23–24.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      When the daughters returned home, Shu‘ayb عليه السلام asked:
      “What happened? Why have you returned so early today?”
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Al-Tabari, <span className="vitalic">Tarikh</span>, vol. 1, p. 205;
          Al-Tha‘labi, <span className="vitalic">‘Arais</span>, p. 174;
          Ibn ‘Asakir, <span className="vitalic">Tarikh</span>, vol. 6, p. 322;
          Ibn al-Athir, <span className="vitalic">Al-Kamil</span>, vol. 1,
          p. 176.
        </p>
      </div>
    )}

    <p>
      “An Egyptian man helped us,” they replied.
      “He protected us from the shepherds, then drew water from the well and
      watered our sheep.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      “Where is he?” asked Shu‘ayb عليه السلام.
      “Why did you not invite him to our home? Go and bring him so that he may
      be our guest.”
      Thus Musa عليه السلام began living with that family.
      <sup>7</sup>
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          “Then you remained among the people of Madyan for many years.”
          <span className="vitalic"> (Ta-Ha 20:40).</span>
        </p>
      </div>
    )}

    <p>
      Later, Shu‘ayb عليه السلام gave his daughter Safira in marriage to him.
      In due time, Safira gave birth to a son. Musa عليه السلام named him
      Gershom, meaning “stranger,” saying:
      “I have become a stranger in a foreign land.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ALLAH INTENDS TO DELIVER THE CHILDREN OF ISRA’IL</p>
  </div>

  <div className="main_text">
    <p>
      Many years passed. The king of Egypt also died. Yet the Children of
      Isra’il continued to suffer under slavery. At last they cried out to Allah
      in anguish and desperation.
    </p>

    <p>
      Then Allah decreed to set them free, for He is Ar-Rahman and Ar-Rahim.
      Long before, He had made a covenant with Ibrahim, Ishaq, and Ya‘qub
      عليهم السلام.
    </p>

    <p className="vitalic">
      If you remember, Allah had promised them three things:
    </p>
  </div>

  <div className="border rounded-md border-green-600 p-1">
    <p className="vitalic px-4">
      ~First, He promised Prophet Ibrahim عليه السلام that his descendants would
      become numerous. Indeed, over the course of four hundred years, the people
      of Isra’il grew from seventy individuals into several million.
    </p>

    <p className="vitalic px-4">
      ~The second promise concerned the land. Allah said:
      “Your descendants will live as strangers in a foreign land for four hundred
      years. They will suffer oppression and slavery. Then I will bring them out
      of that land ... and I will give this land to them as an inheritance.”
    </p>

    <p className="vitalic px-4">
      ~The third promise was that all the nations of the earth would receive
      blessing through one zurriyya of Ibrahim  (a.s.). Allah promised:
      “Because you obeyed Me, I will bless all the peoples of the earth through
      your offspring.”
    </p>
  </div>

  <div>
    <p className="vitalic">
      As you can see, the first promise had already been fulfilled by the time
      of Musa عليه السلام. The descendants of Ya‘qub عليه السلام had become a
      great nation. Now Allah intended to fulfill His second promise.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE BURNING BUSH</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “When he came to it, a voice called out:
      ‘O Musa! Indeed, I am your Lord. Remove your sandals...’”
      <span className="vitalic"> (Ta-Ha 20:11–12).</span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      Musa عليه السلام was tending the sheep of his father-in-law. One day he
      drove the flock beyond the wilderness toward the mountain in Tuwa
      <sup>8</sup>{' '}
      when Allah, Glorious and Exalted, caused a fire to appear before him.
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup>
          Mount Sinai.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble9')}
    >
      Musa عليه السلام saw a bush burning, yet it was not consumed by the fire.
      “How strange! Why does this bush burn without being consumed?”
      he wondered,
      <sup>9</sup>{' '}
      and{' '}
      <span className="boldItalic">
        “said to his family: ‘Wait here. I have seen a fire. Perhaps I can bring
        you a burning brand from it, or find guidance at the fire.’”
      </span>
      <sup>10</sup>{' '}
      Then he approached the bush.
    </p>

    {openBubbles['bubble9'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble9')}
      >
        <p>
          <sup>9</sup>
          Abu al-Faraj Ibn al-Jawzi,
          <span className="vitalic"> Tabsirah</span>, vol. 1, pp. 219–220.
        </p>

        <p className="MarginTop10px">
          <sup>10</sup>
          Qur’an 20:10.
        </p>
      </div>
    )}

    <p>
      Then a voice came from the fire:
      “Musa! Musa!”
    </p>

    <p>
      “Labbayk!” replied Musa عليه السلام.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble11')}
    >
      “Stop! Do not come any closer. Remove your sandals, for you are standing
      on holy ground. I am the God of your forefathers Ibrahim, Ishaq, and
      Ya‘qub,” said the voice.
      <sup>11</sup>
    </p>

    {openBubbles['bubble11'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble11')}
      >
        <p>
          <sup>11</sup>
          The Qur’an also contains the phrase:
          “the God of Ibrahim, Isma‘il, and Ishaq”
          (Al-Baqarah 2:133). In the Torah, this expression emphasizes Allah’s
          covenant with these prophets.
        </p>

        <p className="MarginTop10px">
          <sup>12</sup>
          Allah ﷻ will also illuminate the earth with His Light on the Day of
          Judgment:
          <span className="boldItalic">
            {' '}
            “And the earth will shine with the Light of its Lord...”
          </span>{' '}
          (Az-Zumar 39:69).
        </p>
      </div>
    )}

    <p>
      Musa عليه السلام covered his face, afraid to gaze upon the Light of Allah.
      <sup>12</sup>
    </p>

    <p>
      “My people are suffering under oppression. They cry out because of their
      taskmasters. I am Ar-Rahman. The time has come to rescue My people from
      the grip of the Egyptians,” said Allah.
      “I will bring them to Canaan, a land flowing with milk and honey. Prepare
      yourself. I am sending you to Pharaoh. You shall lead My people, the
      Children of Isra’il, out of Egypt.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble13')}
    >
      Allah is Most Compassionate and Most Merciful. Seeing the Children of
      Isra’il suffering in slavery, He showed them mercy.
      <sup>13</sup>
    </p>

    {openBubbles['bubble13'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble13')}
      >
        <p>
          <sup>13</sup>
          Al-Tabari,
          <span className="vitalic"> Tarikh</span>, vol. 1, p. 206;
          Ibn al-Athir,
          <span className="vitalic"> Al-Kamil</span>, vol. 1, p. 178.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>
      “GO TO PHARAOH, FOR HE HAS TRANSGRESSED ALL BOUNDS”
      <sup>14</sup>
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble14'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble14')}
      >
        <p>
          <sup>14</sup>
          Qur’an, Ta-Ha 20:24.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble14')}
    >
      “Who am I that I should go before Pharaoh?” asked Musa عليه السلام.
      “How can I possibly bring the Children of Isra’il out of Egypt?”
    </p>

    <p>
      “I will be with you and support you,” Allah replied.
      “You will leave Egypt and return to this very place. Upon this mountain
      you shall worship Me. That will be the sign that I have truly sent you.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble15')}
    >
      Then Musa عليه السلام asked:
      “If the Children of Isra’il ask me,
      ‘Who is our God? What can He do?’
      what shall I tell them?”
      <sup>15</sup>
    </p>

    {openBubbles['bubble15'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble15')}
      >
        <p>
          <sup>15</sup>
          The people of Isra’il had lived in Egypt for many generations as
          slaves, and their knowledge of Allah, the Lord of all worlds, had
          become weak.
        </p>
      </div>
    )}

    <p>
      Allah said:
      “I am Al-Qayyum. This Name of Mine shall be remembered through the
      generations. Go to Egypt and gather the elders. Tell them:
      ‘Al-Qayyum, the God of our fathers Ibrahim, Ishaq, and Ya‘qub, has
      appeared to me.’
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble16')}
    >
      ‘I have seen your condition in Egypt. According to My promise, I will
      bring you out of this house of suffering and lead you into a land flowing
      with milk and honey.’
      Tell them this, and they will listen to you. Then go to Pharaoh and say:
      ‘Allah has summoned us to meet with Him. He has commanded us to journey
      three days into the wilderness and offer sacrifice to Him there.’”
      <sup>16</sup>
    </p>

    {openBubbles['bubble16'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble16')}
      >
        <p>
          <sup>16</sup>
          The Qur’an says:
          <span className="boldItalic">
            {' '}
            “And We gave Musa the Book, completing Our favor upon those who do
            good, explaining all things in detail, and as guidance and mercy, so
            that they might believe in the meeting with their Lord.”
          </span>{' '}
          (Al-An‘am 6:154).
        </p>
      </div>
    )}

    <p>
      “But Pharaoh will not permit you to leave. Then I shall manifest My power
      and My signs. I shall send calamities upon the Egyptians. Only then will
      he be forced to let you go.”
    </p>
  </div>
</main>
    
  );
}