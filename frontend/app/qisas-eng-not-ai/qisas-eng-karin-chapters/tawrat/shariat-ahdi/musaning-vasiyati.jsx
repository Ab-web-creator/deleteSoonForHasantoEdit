'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function MosesGoodWill() {
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
    <p className="vitalic">
      Knowing that the hour of his departure was drawing near, Prophet Musa
      عليه السلام gave the Children of Isra’il a series of final exhortations
      and commands. Below are some examples of those instructions:
    </p>

    <p>
      “Behold, I have taught you all the laws that Allah has taught me. Let
      these laws be your standard in the land that has been promised to you. By
      observing them, you will demonstrate to other nations that you are a
      people of wisdom and understanding.
    </p>

    <p>
      When other peoples hear of the laws by which you live, they will say:
      ‘Surely this is a great nation, a people endowed with wisdom and
      understanding.’ For what nation has a god so near to it as our Lord is to
      us? What people possesses laws as just and righteous as the commands we
      have received?
    </p>

    <p>
      Remember this well: there is no deity besides Allah! Love your Lord with
      all your heart, all your soul, and all your strength. Guard His commands
      as the apple of your eye. Impress them upon your children. Speak of them
      when you sit in your homes, when you travel, when you lie down, and when
      you rise. Bind them upon your hands and place them before your eyes as a
      reminder. Write them upon your doorposts and your gates.
    </p>

    <p>
      Your Lord, the God of our forefathers Ibrahim عليه السلام, Ishaq
      عليه السلام, and Ya‘qub عليه السلام, will give you the land He promised
      them: great and beautiful cities that you did not build, wealth that you
      did not gather, wells that you did not dig, vineyards and olive groves
      that you did not plant. You will eat and be satisfied. But beware! Do not
      forget the Lord who brought you out of Egypt, out of the land of slavery.
      Do not follow the false gods worshipped by other nations and provoke the
      anger of your Lord.
    </p>

    <p>
      Keep all the commandments of Allah. Treasure them carefully. Then the
      Promised Land shall be yours.
    </p>

    <p>
      Never forget that for forty years your Lord led you through the
      wilderness in order to humble you, test you, and reveal what was in your
      hearts—whether or not you would obey His commands.
    </p>

    <p>
      He allowed you to experience hunger and hardship. Then He fed you with
      food neither you nor your forefathers had ever known. Through this He
      taught you that man does not live by bread alone, but by every word that
      proceeds from Allah.
    </p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble1')}
      className="cursor-pointer "
    >
      For forty years your clothes did not wear out, your feet did not swell,
      and even your sandals did not deteriorate.
      <sup>1</sup>{' '}
      Just as a father disciplines his child, so Allah nurtured and disciplined
      you.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          According to al-Tabari’s <span className="vitalic">Tarikh</span>:
          “Their garments grew with them according to their size and neither
          tore nor wore out” (al-Tabari, Tarikh, vol. 1, p. 222; al-Tha‘labi,
          Arais, pp. 245–246; Ibn al-Athir, al-Kamil, vol. 1, p. 196).
        </p>
      </div>
    )}

    <p>
      Therefore obey His commands, walk in His ways, and honor Him. Your Lord
      is bringing you into a land like a garden—well-watered, prosperous, rich
      with wheat, barley, fruits, olives, and honey. You shall lack nothing.
    </p>

    <p>
      When you have eaten your fill, give thanks to Allah for His blessings.
      Never say within yourselves: “I gained this wealth through my own power
      and labor.”
    </p>

    <p>
      Nor should you imagine: “Allah gave us this land because we are
      righteous.” No! You are a stubborn people. Allah is not giving you this
      land because of your righteousness, but because of the wickedness of the
      nations who dwell there. Moreover, He swore to our forefathers Ibrahim
      عليه السلام, Ishaq عليه السلام, and Ya‘qub عليه السلام that their
      descendants would inherit it.
    </p>

    <p>
      O Children of Isra’il! What does your Lord require of you? Fear Allah,
      walk in His ways, love Him, and serve Him with all your heart and soul.
      Keep His commandments and decrees so that you may prosper.
    </p>

    <p>
      The heavens, the highest heavens, the earth, and everything in it belong
      to Allah. Yet He loved our forefathers and chose you, their descendants,
      from among all peoples.
    </p>

    <p>
      Therefore circumcise your hearts and abandon your stubbornness. Allah is
      the King of kings and the Lord of lords—mighty and awesome. He shows no
      favoritism and accepts no bribe. He upholds the cause of the orphan and
      the widow and cares for the stranger. Fear Him and serve Him.
    </p>

    <p>
      Allah is our glory and our praise. He performed mighty and awe-inspiring
      miracles on our behalf and multiplied us until we became as numerous as
      the stars of heaven. When our forefathers entered Egypt, they were only
      seventy persons. Look now at how greatly our numbers have increased!”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>JUDGES AND KINGS</p>
  </div>

  <div className="main_text">
    <p>
      In the cities that Allah gives you, appoint judges and elders for every
      tribe. Let them judge the people with fairness and integrity. They must
      not show favoritism or accept bribes, for bribes blind the eyes of the
      wise and pervert justice. Righteous judgment must never be corrupted. If
      you wish to remain in the land Allah is giving you, hold firmly to
      justice.
    </p>

    <p>
      In the future you may say: “Let us have a king like the nations around
      us.” When that time comes, appoint the man whom Allah chooses. Do not
      place a foreigner over yourselves as king.
    </p>

    <p>
      Let your king not become obsessed with silver and gold, magnificent
      horses, or many wives. Otherwise his heart may turn away from Allah.
    </p>

    <p>
      When he ascends the throne, he should make for himself a copy of the
      divine law under the supervision of the religious leaders. He must keep
      it with him and read it all the days of his life, learning to fear Allah
      and obey His commands. He must not exalt himself above his brothers nor
      depart from Allah’s commandments. Then he and his descendants shall reign
      over the people for many years.
    </p>

    <p>
      When you enter the Promised Land, do not learn the detestable customs of
      its inhabitants. Let there be no one among you who sacrifices a son or
      daughter in fire, practices divination, sorcery, witchcraft, fortune
      telling, spiritism, or communication with the dead. Such things are
      abhorrent before Allah. Because of these abominations, Allah is driving
      those nations out and giving their land to you. Therefore be wholly
      devoted to your Lord.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PROMISE OF A FUTURE PROPHET</p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble2')}
      className="cursor-pointer "
    >
      Allah will raise up for you from among your own brothers a prophet like
      me.
      <sup>2</sup>{' '}
      You must listen to him. For at Mount Sinai you yourselves pleaded:
      “Let us not hear the voice of Allah again or see that terrifying fire,
      lest we die!”
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          Prophet Musa عليه السلام was extraordinarily close to Allah. Allah
          dealt with him unlike other prophets, speaking to him as one speaks to
          a close friend. Remember that when Allah invited the Children of
          Isra’il into a covenant of nearness and friendship, they were
          unwilling to draw near. As a result, Prophet Musa became an
          intermediary between the people and their Lord.
        </p>
      </div>
    )}

    <p>
      At that time Allah said to me:
      “What they have spoken is right. I will raise up for them a prophet from
      among their brothers, one like you. I will put My words in his mouth, and
      he will declare to them all that I command him. Whoever refuses to listen
      to the words he speaks on My behalf will be held accountable before Me.”
    </p>
  </div>
</main>
  );
}