'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function BaniIsraelAcceptedShariah() {
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
    'bubble11',
    'bubble12',
    'bubble13',
    'bubble14',
    'bubble15',
    'bubble16',
    'bubble17',
    'bubble18',
    'bubble19',
  ]);

  return (
 
 <main className="stories relative">
  <div className="main_text">
    <p onClick={() => toggleBubble('bubble1')} className="cursor-pointer">
      Then Allah, glorified and exalted is He, commanded Musa عليه السلام to
      come up the mountain, bringing Harun عليه السلام, Nadab son of Harun,
      Abihu son of Harun, and seventy elders from among the Children of
      Israel
      <sup>1</sup>. But the Children of Israel themselves were forbidden from
      ascending the mountain. Musa عليه السلام went and conveyed the commands
      of Allah to the people. They all answered with one voice:
      “We will obey every command of our Creator.”
      Afterward, Prophet Musa wrote down all the commands that Allah had
      given.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          <span className="boldItalic">
            “Musa chose seventy men from his people for Our appointed meeting.”
          </span>{' '}
          (Surah al-A‘raf 7:155). The Arabic word{' '}
          <span className="boldItalic">miqat</span> means “appointed meeting.”
        </p>
      </div>
    )}

    <p>
      The next morning they built an altar at the foot of the mountain. They
      offered sacrifices to Allah and collected the blood in basins. Then the
      Book of the Covenant was read aloud to the people. The people replied:
      “We will listen to all of Allah’s commands and obey everything He has
      spoken.”
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble2')} className="cursor-pointer">
      Then Musa took the blood from the basins and declared:
      “Allah is making a covenant with you. This blood shall be a witness to
      all the words that I have read to you.”
      <sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          In this way the Children of Israel entered into a covenant with
          Allah. However, this covenant differed from the covenant that Allah
          had made with Ibrahim عليه السلام.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>UNDER THE MAJESTY OF ALLAH</p>
  </div>

  <div className="main_text">
    <p>
      Then Musa, Harun, Nadab, Abihu, and seventy elders of the Children of
      Israel climbed the mountain to the place Allah had appointed.
    </p>

    <p>
      Above them appeared something like a clear pavement shining with the
      brilliance of sapphire, as pure as the sky itself. Above it radiated the
      Majesty of Allah. Allah did not harm the leaders of the Children of
      Israel. There they shared a covenant meal and ate in His presence.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble3')} className="cursor-pointer">
      After the feast, Allah called Prophet Musa into His presence. He was
      about to receive the stone tablets upon which the divine commands were
      written.
      “I am going up into the Presence of Allah,” said Musa عليه السلام.
      “Remain here until I return. If any matter arises, seek the counsel of
      Harun or Hur.”
      <sup>3</sup>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>{' '}
          At that time Musa عليه السلام instructed his brother Harun:
          “Take my place among my people, act righteously, and do not follow
          the path of the corrupters” (Surah al-A‘raf 7:142). Allah had not
          permitted the elders of the Children of Israel to ascend further
          into His Presence.
        </p>
      </div>
    )}

    <p>
      As soon as the Messenger of Allah ascended higher, the mountain was
      covered by a fiery cloud. The Glory of Allah descended upon it.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble4')} className="cursor-pointer">
      For six days the cloud covered the mountain, and on the seventh day
      Allah spoke to Musa عليه السلام from within the cloud.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>{' '}
          During this time, Yusha ibn Nun, the assistant of Musa عليه السلام,
          was also with him.
        </p>
      </div>
    )}

    <p>
      To the Children of Israel, the Glory and Majesty of Allah appeared like
      a blazing fire burning on the summit of the mountain.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble5')} className="cursor-pointer">
      Prophet Musa remained on the mountain for forty days and forty nights
      <sup>5</sup>, in the Presence of Allah.
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>{' '}
          “We appointed for Musa thirty nights and completed them with ten
          more, making the appointed term of his Lord forty nights”
          (Surah al-A‘raf 7:142).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE GOLDEN CALF</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “And remember when We appointed forty nights for Musa, and then, after
      he had gone, you wronged yourselves by taking the calf for worship.”
      <span className="vitalic"> (Surah al-Baqarah 2:51).</span>
    </p>

    <p>
      When Prophet Musa did not return from the mountain, the people gathered
      around Harun عليه السلام and said:
      “Something must have happened to Musa on the mountain. Make a god for
      us! Otherwise, who will guide us through the wilderness?”
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble6')} className="vitalic cursor-pointer">
      Imagine the situation. The Children of Israel had been waiting nearly
      forty days for Prophet Musa. Yet there was still no news from him — from
      the leader whom Allah Himself had appointed. What were they to do? Who
      would lead them now? In whom could they place their hope?
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>{' '}
          Harun عليه السلام was unable to stop the pressure coming from the
          idolaters. According to the Qur’an, he feared that open conflict
          would divide the people and lead to greater fitnah
          (Qur’an 20:94).
        </p>
      </div>
    )}

    <p className="vitalic">
      Yes, the Children of Israel had grown weary of waiting. If Musa عليه السلام
      was gone, who would now connect them to Allah? Who would be their god?
      In the end they decided to make a god for themselves. In the sight of
      Allah, this was an extremely grave sin.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble7')} className="vitalic cursor-pointer">
      As it is written in the Noble Qur’an:
      <sup>7</sup>{' '}
      <span className="boldItalic">
        “The Samiri produced for them the image of a calf that made a
        lowing sound. They said: ‘This is your god and the god of Musa, but he
        has forgotten.’”
      </span>
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>{' '}
          Surah Ta-Ha 20:88. Ibn Abbas رضي الله عنه said:
          “No, by Allah, the calf never actually mooed. Rather, the wind would
          enter through one opening and exit through another, producing a
          sound” (Haythami, Majma‘ al-Zawa’id, vol. 7, p. 64).
        </p>
      </div>
    )}

    <p>
      The idolaters then began shouting at the top of their voices:
      “O Children of Israel! Here is the god who brought us out of Egypt!”
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble8')} className="vitalic cursor-pointer">
      In other words, fitnah had spread among the people. In an effort to turn
      them away from sin, Harun عليه السلام called out:
      <span className="boldItalic">
        {' '}
        “O my people! You are only being tested by this. Indeed, your Lord is
        the Most Merciful. So follow me and obey my command.”
      </span>{' '}
      <sup>8</sup>
    </p>

    {openBubbles['bubble8'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble8')}
      >
        <p>
          <sup>8</sup> Surah Ta-Ha 20:90.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble9')} className="cursor-pointer">
      Then an altar was built before the golden calf, and the announcement was
      made:
      “Tomorrow there will be a feast dedicated to Allah.”
      <sup>9</sup>
    </p>

    {openBubbles['bubble9'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble9')}
      >
        <p>
          <sup>9</sup>{' '}
          Harun عليه السلام hoped in this way to bring the people back to
          Allah.
        </p>

        <p className="MarginTop10px">
          <sup>10</sup> Surah Ta-Ha 20:91.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble9')} className="cursor-pointer">
      <span className="vitalic">
        But the people had already gone astray.
      </span>{' '}
      <span className="boldItalic">
        “The Children of Israel said: ‘We will continue worshipping it until
        Musa returns to us.’”
      </span>{' '}
      The next morning they rose early and began offering sacrifices before
      the calf. Eating, drinking, and festivities reached their peak.
      <sup>10</sup>
    </p>
  </div>

  {/* Remaining text continues in the same style */}
</main>
  );
}