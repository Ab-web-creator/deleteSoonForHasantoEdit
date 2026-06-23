'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';


export default function TheFall() {
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
      We said: &quot;You Man/Adam, keep Paradise as your place with your mate and
      feel free to eat in any place you want. Just do not come near this tree,
      otherwise you will become among the oppressors.&quot;
      <span className="vitalic">
        {' '}
        (Qur&apos;an kareem, Sura Baqara, 35).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble1')}>
      One day Satan came to Mother Eve in the shape of snake and asked:
      &quot;Did God indeed say not to eat from the fruit of any tree of the
      garden?&quot;<sup>b</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>b</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}

    <p>
      &quot;We can eat the fruit of any tree in the garden, — said the woman. —
      God made only one tree haraam for us. He said: &apos;Do not eat from the
      fruit of it, and do not even touch, otherwise you will die.&apos;
    </p>

    <p>
      &quot;No, you won&apos;t die, — said Satan to the woman. — God said this to
      you with a purpose. If you eat the fruit of this tree, your eyes will
      open. Then you will be like God, and you will be able to differentiate
      between good and evil&quot;.
    </p>

    <p>
      The woman could not take her eyes away from the fruit. The fruit looked
      very beautiful and seemed very delicious. If I eat it, I will have
      knowledge, said she ... and picked the fruit and ate it. Then she gave it
      to her husband who was standing beside her, and he also ate.
    </p>
  </div>

  <div className="paragraph_heading mt-10">
    <p className="boldItalic spec_font">
      &quot;Adam rebelled against his Provider and got out of the right path&quot;
      <br />
      <span className="vitalic"> (Qur&apos;an, Taha, 121).</span>
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Satan wanted to make God a liar. He said, God said this to you with
      purpose.
    </p>

    <p className="vitalic">
      &quot;Oh, — thought Mother Eve. — Then God doesn&apos;t want us to know some
      things!&quot;
    </p>

    <p className="vitalic">
      What was the temptation Satan was giving: &quot;If you eat from the fruit
      of this tree, you will be like God. How long will you live in ignorance?
      Do not you want to know what is good and what is evil?&quot; This was the
      message in the words of Satan.
    </p>

    <p className="vitalic">
      Then, what did Mother Eve think about? &quot;So, if God is hiding this from
      us, then He does not love us!&quot; was probably her thought. Then what
      needs to be done? If God is not giving, what shall we do? Shall we get it
      with our own power? &quot;Take, take it, do not be afraid, — the temptation
      was telling. — If you trust God, you will be left with nothing!&quot;
    </p>

    <p className="vitalic">
      So, our first father and mother, till this time, were relying on God,
      believing Him, counselling with Him. And now they decided to live
      independently, living without involving God.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>As a result ....</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      &quot;Well, Satan through deception put them down (to a low state). When
      they tasted from that tree, their awrat (private parts of the body) were
      exposed and they started covering themselves with the leaves of Janna.&quot;
      <span className="vitalic"> (Qur&apos;an, sura A&apos;raf, 22).</span>
    </p>

    <p>
      Immediately their eyes were opened and they knew suddenly that they were
      naked, and they made loin coverings for themselves from the fig leaves.
    </p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble2')}>
      After noon, when the evening breeze was there, they heard the sound of
      God, and both of them fell into panic, and they ran and hid themselves
      among the trees.<sup>c</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>c</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}

    <p>&quot;Where are you?&quot; called Allah ta&apos;ala.</p>

    <p>
      &quot;I was afraid, hearing you coming, — said Adam (a.s.), — because I am
      naked.&quot;
    </p>

    <p>
      &quot;Who told you that you are naked? — said God to Hazrat Adam. — Or did
      you eat the fruit that I told you not to eat?&quot;
    </p>

    <p>
      &quot;The woman You gave me has given this fruit to me, — said Adam (a.s.).
      — Then I ate it&quot;.
    </p>

    <p>
      Then God said to Mother Eve: &quot;What have you done?&quot; &quot;The snake
      tricked me, then I ate&quot;, said Mother Eve.
    </p>

    <p>
      God spoke to the snake: &quot;For this deed of yours, you are cursed among
      animals. All of your life you will be crawling on your stomach and your
      food will be the dust. I will make you and the woman, your zurriyya and
      her zurriyya mutual enemies. You will strike his heel, and he will crush
      your head.&quot;
    </p>

    <p>
      &quot;From now on, you will bear children through great suffering and hard
      pain, — said Allah ta&apos;ala to the woman. — From now on, you will always
      be attracted to your husband, but he will rule over you&quot;.
    </p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble3')}>
      Then He said to Adam (a.s.): &quot;Because you listened to your wife and ate
      the fruit I had made haraam, the earth will be cursed.<sup>d</sup> From
      now on, all of your life, you will find bread through hard work on the
      earth; the earth will grow thorns and will make life difficult for you, —
      God said. — Untill you return to the earth, you will get bread through
      your sweat (i.e. hard labor). Eventually you will return to the soil. For
      you were taken from the soil, and you will become soil once more&quot;.
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>d</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>To be sent away</p>
  </div>

  <div className="main_text">
    <p className="boldItalic cursor-pointer" onClick={() => toggleBubble('bubble4')}>
      Well, Satan deceived them and got them out of their place and We said:
      &quot;Go down! You are enemies to each other. Now you will live on the earth
      for some time.&quot; (Sura Baqara, 36)<sup>e</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
        <p>
          <sup>e</sup> [Speech bubble placeholder]
        </p>
      </div>
    )}

    <p>
      Then Allah ta&apos;ala made clothes out of animal skins and clothed them and
      said: &quot;Humanity has wanted suddenly to know good and evil, like We do,
      before its time. Now We won&apos;t let them live eternally by eating from
      the Tree of Life. Let them go and labor on the soil&quot;, saying this He
      sent them out. He sent them out of the garden, and deprived them of living
      in His presence. And He appointed creatures called Karub as guards at the
      door of the garden. The fire sword, which moves in all directions, was
      guarding the road.
    </p>

    <p className="vitalic">
      Because of sin people were deprived of life in the presence of Allah. Only
      life with Allah can be called the &quot;TRULY HAPPY LIFE&quot;. Then what do
      we call life without Allah?
    </p>

    <p className="vitalic">Can we call it DEATH?</p>

    <p className="vitalic">
      You are right. The word &quot;death&quot; indeed expresses
      &quot;separation&quot;. A man, when he dies, is separated from his relatives
      and his family. But the worst death is when one is deprived from God, from
      the presence of God. It was for a good reason that God said &quot;...if you
      eat from it, you will die on that same day&quot;.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>So what happened in fact?</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      You may think: &quot;Okay, so what happened, really?&quot; You know, if sin
      was not there (did not happen), we would not have been sent away from the
      presence of God. But now there is a wall inbetween us.
    </p>

    <p className="vitalic">
      If sin was not there, we would not have diseases or death. God had not
      created Adam to become ill or to die after certain years.
    </p>

    <p className="vitalic">
      If sin was not there, we would not have frustrations, offence,
      misunderstanding or hatred between people. God created the human beings so
      that they would be merciful and loving to each other, and to have pure,
      good relationships.
    </p>

    <p className="vitalic">
      Look around you. None of the bad things you see werethere at the
      beginning. God had created humanity for the beautiful life, for the true
      life. But because of sin, the world has changed.
    </p>

    <p className="vitalic">
      God also created us so that we would take care of the earth. But now
      people are doing the opposite: Earth is poisoned, water is poisoned, air is
      poisoned... People do not live for God, do not live the way God wants.
    </p>

    <p className="vitalic">
      The worst thing is, humanity got deprived of God&apos;s presence. We were
      driven out — driven out of the presence of God.
    </p>

    <p className="boldItalic">
      Then Adam received several words from His Provider and Allah accepted his
      repentance. Surely He is Kind Being who acceptes repentance. We said:
      &quot;Go down from that place. When the Guidance comes from Us, follow Him.
      Those who follow My guidance, they will have no danger and they will not
      be sad.&quot;
      <span className="vitalic"> (Sura Baqara, 37-38)</span>
    </p>
  </div>
</main>
  );
}