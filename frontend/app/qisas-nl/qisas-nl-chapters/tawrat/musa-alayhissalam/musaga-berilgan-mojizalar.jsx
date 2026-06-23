'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function ThreeMiracles() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
    'bubble8',
    'bubble9',
    'bubble10',
  ]);

  return ( 
 <main className="stories relative">
  <div className="main_text">
    <p>Then Musa عليه السلام said:</p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — What if the Children of Isra’il do not believe me or refuse to listen
      to my words? — he asked.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — What is that in your hand? — Allah asked.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — A staff, — replied Musa عليه السلام.
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
          “So he threw it down, and suddenly it became a living serpent,
          moving swiftly. Allah said:
          <span className="boldItalic">
            {' '}
            ‘Take hold of it and do not fear. We shall return it to its former
            state. And place your hand under your arm; it will come forth
            shining white without any harm.’
          </span>{' '}
          (Ta-Ha 20:20–22).
        </p>
      </div>
    )}

    <p
      className="!my-0 cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      — Throw it on the ground! — Allah commanded.
      <sup>1</sup>
    </p>

    <p>
      Musa عليه السلام cast down the staff in his hand. Instantly it turned
      into a serpent.
    </p>

    <p className="boldItalic">
      “But when he saw it moving like a serpent, he turned and fled without
      looking back.
      <span className="vitalic">
        {' '}
        (Then We said:)
      </span>{' '}
      ‘O Musa, do not be afraid...’”
      <span className="vitalic"> (An-Naml 27:10).</span>
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — Stretch out your hand and seize it by the tail, — Allah said.
      As soon as Musa عليه السلام touched the serpent’s tail, it became a staff
      once more!
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
          In the Torah there is a passage here that says:
          “I am the God who made a covenant with Ibrahim, Ishaq, and Ya‘qub.”
          In other words, the same Allah who had established a covenant with our
          righteous forefathers was now sending revelation to Musa عليه السلام.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer my-1"
      onClick={() => toggleBubble('bubble2')}
    >
      — After seeing this miracle, the people will believe that I have truly
      sent you, — Allah said.
      — Now place your hand inside your garment!
      <sup>2</sup>
    </p>
  </div>

  <div className="main_text">
    <p>
      Musa عليه السلام placed his hand inside his garment. When he drew it
      out, it had become brilliantly white, resembling the hand of someone
      afflicted with leprosy.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — Put your hand back inside your garment! — Allah said.
      Musa عليه السلام did so, and when he withdrew it again, it had returned
      to its normal state.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — If the people do not believe the first sign, show them the second,
      — Allah said.
      — And if they still refuse to believe, take water from the Nile and pour
      it onto dry ground. The water you take from the river will turn into red
      blood upon the earth.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>MUSA عليه السلام ASKS FOR HELP</p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — My Lord, I have never been eloquent in speech, — said Musa عليه السلام.
      — Even now, after all that You have spoken to Your servant, I do not know
      how I can convey these words to the Children of Isra’il.
      <span className="boldItalic">
        {' '}
        “My Lord, expand my chest for me, make my task easy for me, and loosen
        the knot from my tongue so that they may understand my speech.”
      </span>{' '}
      <span className="vitalic">Qur’an 20:25–28.</span>
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — Who gave mankind the power of speech? — Allah replied.
      — Who makes a person mute or deaf, seeing or blind? Go now. I Myself
      shall help you and teach you what to say.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>{' '}
          According to the Noble Qur’an, Musa عليه السلام prayed:
          <span className="boldItalic">
            {' '}
            “Appoint for me a minister from among my family — Harun, my
            brother”
          </span>{' '}
          (Ta-Ha 20:29–30).
        </p>
      </div>
    )}

    <p
      className="cursor-pointer my-1"
      onClick={() => toggleBubble('bubble3')}
    >
      — My Lord, send whomsoever You will, — Musa عليه السلام pleaded.
      <sup>3</sup>
    </p>
  </div>

  <div className="main_text">
    <p>
      <span className="vitalic">
        He still doubted whether he could carry out such a tremendous mission.
        Although this hesitation displeased Allah, his request was nevertheless
        granted:
      </span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“O MUSA, YOUR REQUEST HAS BEEN GRANTED”</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>{' '}
          Allah had already commanded Harun عليه السلام to set out and meet
          Musa عليه السلام on the way.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      — Your brother Harun will be your spokesman,
      <sup>4</sup>{' '}
      Allah said.
      — You will explain to him what must be said, and he will speak on your
      behalf before the people. He will convey your words to them. I shall help
      both of you and teach you what you must do. Now go. Take the staff with
      you as well, for through it you will perform miracles.
    </p>

    <p>
      Then Musa عليه السلام said:
      <span className="boldItalic">
        {' '}
        “My Lord, I have killed a man among them, and I fear they may kill me.”
      </span>{' '}
      Allah replied:
      “Do not fear. Not one of those who sought your life is still alive.”
    </p>

    <p className="vitalic">
      At that moment Allah ﷻ was calling Musa عليه السلام into His service.
      He may also call you into His service one day. If He does, how will you
      answer? Will you obey, or will you refuse? We are servants of Allah, and
      we are created to serve Him. Indeed, one of the original meanings of the
      word <span className="boldItalic">‘ibadah</span> is service.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE RETURN OF MUSA عليه السلام TO EGYPT</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>{' '}
          Al-Tabari, <span className="vitalic">Tarikh</span>, vol. 1, p. 206.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      After this, Musa عليه السلام went to his father-in-law and asked
      permission to depart.
      <sup>5</sup>
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
          “And We bestowed upon him, out of Our mercy, his brother Harun as a
          prophet.”
          <span className="vitalic"> (Maryam 19:53).</span>
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      After receiving his father-in-law’s blessing, he placed his wife and
      children upon a donkey, took in his hand the staff Allah had commanded
      him to carry, and set out for Egypt. At Tur Sinai he met his brother
      Harun عليه السلام,
      <sup>6</sup>{' '}
      and told him everything Allah had spoken, including all the signs and
      miracles they were to show in Egypt.
    </p>
  </div>

  <div className="main_text">
    <p>
      Upon arriving in Egypt, they gathered all the elders of the Children of
      Isra’il. Harun عليه السلام delivered the words Allah had spoken, and
      Musa عليه السلام confirmed them through miraculous signs. The people
      believed. When they heard that Allah had seen their suffering and had
      remembered them, they all bowed down in prostration.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>BEFORE PHARAOH</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>{' '}
          “We sent Musa with Our signs to Pharaoh and his people, but they
          rejected them in arrogance and disbelief. So observe the fate of the
          corrupters.”
          <span className="vitalic"> (Al-A‘raf 7:103).</span>
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      Then Musa and Harun عليهما السلام went before Pharaoh together with the
      elders of the Children of Isra’il and said:
      “Your Majesty, Allah has commanded you:
      ‘Let My people go, so that they may journey into the wilderness and
      worship Me.’”
      <sup>7</sup>
    </p>
  </div>

  <div className="main_text">
    <p>
      Pharaoh replied:
      “And who is this Allah of yours, that I should obey Him and release the
      Children of Isra’il? I do not know this Allah.”
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
          The Egyptians of that era were idol worshippers who believed in many
          gods. For that reason Musa and Harun عليهما السلام had to explain
          Allah as “our God.”
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble8')}
    >
      “Your Majesty, our God
      <sup>8</sup>{' '}
      has revealed His will to us. Allow us to travel three days into the
      wilderness and offer sacrifice to Him. Otherwise He may send a sword or a
      plague upon us.”
    </p>

    <p>
      “Musa and Harun,” Pharaoh replied,
      “why are you distracting so many people from their work? Be gone! Let
      everyone return to his labor.”
    </p>

    <p>
      Then he issued an order to his overseers and taskmasters:
      “Do not provide straw to the Hebrews for making bricks any longer. Let
      them gather their own straw. Yet the number of bricks must not decrease.
      Clearly they have too much free time. Otherwise such thoughts as
      ‘Let us go and offer sacrifice to our God’ would never enter their heads.
      Increase their workload so much that they have no time left to listen to
      such nonsense.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE OPPRESSION INTENSIFIES</p>
  </div>

  <div className="main_text">
    <p>
      The overseers and taskmasters then proclaimed Pharaoh’s decree to the
      people of Isra’il:
      “By order of Pharaoh, you will no longer receive straw for making bricks.
      You must gather it yourselves. Yet your daily quota of bricks will remain
      unchanged.”
    </p>

    <p>
      The Children of Isra’il scattered throughout Egypt searching for straw.
      Meanwhile the Egyptian overseers continued to oppress them, demanding:
      “Do not reduce the number of bricks!” They beat the Hebrew foremen,
      saying:
      “Why are you not meeting your quota as before?”
    </p>

    <p>
      Finally the foremen went to Pharaoh and complained:
      “Why are we being treated this way? We are given no straw, yet the same
      number of bricks is demanded from us. We are beaten without cause. The
      fault is not ours.”
    </p>

    <p>
      “You are lazy, very lazy,” Pharaoh answered.
      “Otherwise you would not keep saying:
      ‘Let us go and sacrifice to our God.’
      Go back to your work! Not a handful of straw will be given to you!”
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble9'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble9')}
      >
        <p>
          <sup>9</sup>{' '}
          According to the Qur’an, Musa عليه السلام advised his people:
          <span className="boldItalic">
            {' '}
            “Seek help from Allah and remain patient. Indeed, the earth belongs
            to Allah. He grants it as an inheritance to whom He wills of His
            servants, and the good end belongs to the God-fearing.”
          </span>{' '}
          They replied:
          “We suffered before you came to us, and we continue to suffer after
          you have come.”
          Musa عليه السلام then said:
          <span className="boldItalic">
            {' '}
            “Perhaps your Lord will destroy your enemy and make you successors
            upon the earth, then see how you conduct yourselves.”
          </span>{' '}
          (Al-A‘raf 7:128–129).
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble9')}
    >
      Hearing this, the foremen realized the desperate situation they were in.
      As they left the royal palace, they met Musa and Harun عليهما السلام
      waiting outside and said:
      “May Allah judge between us! You have turned Pharaoh and his court against
      us. You have placed a sword in their hands to kill us.”
      <sup>9</sup>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PROMISE OF ALLAH</p>
  </div>

  <div className="main_text">
    <p>
      Then Musa عليه السلام turned to Allah in prayer and said:
      “My Lord, why have You allowed this evil to come upon these people? Is
      this why You sent me here? Ever since I delivered Your words to Pharaoh,
      he has oppressed this people even more, yet You have not delivered them.”
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble10'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble10')}
      >
        <p>
          <sup>10</sup>{' '}
          Just as the Hebrews were living as strangers in Egypt, Ibrahim,
          Ishaq, and Ya‘qub عليهم السلام had also lived as travelers and
          foreigners in the land of Canaan without permanent homes of their own.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble10')}
    >
      “You shall soon see what I will do to Pharaoh,” Allah replied.
      “Not only will he release you, but he will drive you out of Egypt
      altogether. I made a covenant with Ibrahim, Ishaq, and Ya‘qub and
      promised:
      ‘I shall give the land of Canaan to your descendants.’
      <sup>10</sup>{' '}
      Go and tell the Children of Isra’il:
      ‘I am Al-Qayyum. I shall free you from slavery through My mighty power
      and miraculous signs. Then you will know that I am Al-Qayyum. You shall
      be My people, and I shall be your God. I will bring you out of Egypt and
      lead you into the land I promised.’”
    </p>

    <p>
      Musa عليه السلام conveyed Allah’s words to the Children of Isra’il, but
      the Hebrews were so crushed by harsh labor and relentless beatings that
      they would not listen to him.
    </p>
  </div>
</main>
    
  );
}