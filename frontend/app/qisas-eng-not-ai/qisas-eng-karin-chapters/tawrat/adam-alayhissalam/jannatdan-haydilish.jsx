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
      We said, ‘Ādam, live with your wife in this garden. Both of you eat freely there as you will, but do not go near this tree, or you will both become wrongdoers.’
      {' '} <span className='vitalic'>( Al-Baqara 2:35)</span>
    </p>
  </div>

  <div className="main_text">
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble1')}>
      One day Shayṭān came to Ḥawwāʾ in the shape of a snake and asked: "Did Allāh indeed say not to eat from the fruit of any tree of the garden?"<sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>1</sup> The purpose of Shayṭān was to attract Mother Ḥawwāʾ's attention to one thing — to the tree that gives the knowledge of good and evil.
        </p>
      </div>
    )}

    <p>"We can eat the fruit of any tree in the garden," said the woman.</p>

    <p>
      "Allāh made only one tree haraam for us. He said: 'Do not eat from the fruit of it, and do not even touch it, otherwise you will die.'"
    </p>

    <p>
      "No, you won't die," said Shayṭān to woman. "Allāh said this to you for a reason: If you eat the fruit of this tree, your eyes will open. Then you will be like Allāh, and you will be able to tell the difference between good and evil".
    </p>

    <p>
      The woman could not take her eyes away from the fruit. The fruit looked very beautiful and seemed very delicious. She said to herself, "If I eat it, I will have knowledge." And so she picked the fruit and ate it. Then she gave it to her husband who was standing beside her, and he also ate it.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Leaving the Straight/Right Path</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      "Ādam disobeyed his Lord and was led astray."
    {' '} <span className='vitalic'>( Tāʾ Hāʾ 20:121)</span>
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Shayṭān wanted to call Allāh a liar. He told Ḥawwāʾ that Allāh said this to her for a reason. "Oh," thought Ḥawwāʾ. That means that there are some things that Allāh doesn't want us to know!"
    </p>

    <p className="vitalic">
      Shayṭān was giving here this temptation: "If you eat from the fruit of this tree, you will be like Allāh. How long do you want to live in ignorance? Do not you want to know what is good and what is evil?" This was the message in the words of Shayṭān. Then what did Hawwa think? She probably thought, "So, if Allāh is hiding this from us, then He does not love us!"
    </p>

    <p className="vitalic">
      So, what should we do if Allāh is not giving something to us? Should we try to get it with our own power? Shayṭān's tempatation was: "Take it, take it, do not be afraid! If you trust Allāh, you will end up with nothing!" So up until this time in the story, our first father and mother were relying on Allāh, believing Him and asking Him for guidance. But now they decided to live independently — living without involving Allāh in their lives.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>As a result ....</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      (Shayṭān) lured them with lies. Their nakedness became exposed to them when they had eaten from the tree: they began to put together leaves from the Garden to cover themselves.
    {' '} <span className='vitalic'>( Al-Aʿrāf 7:22).</span>
    </p>

    <p>
      Immediately the eyes of both of them were opened and they suddenly realized that they were naked, so they made coverings for themselves from fig leaves.
    </p>

    <p className="cursor-pointer" onClick={() => toggleBubble('bubble2')}>
      In the afternoon, when the evening breeze was blowing, they heard the sound of Allāh. Both of them <span className="vitalic">fell into panic, and</span> they ran and hid themselves among the trees.<sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>2</sup> You see, sin gives people a feeling of guilt and shame. The fact that Ādam (a.s.) was ashamed and ran away is narrated by Aḥmad ibn Ḥanbal (in the book of "<span className="vitalic">Al-Zuhd</span>") as well as by Ṭabarī, Thaʿlabī, and Ibn al-Asīr.
        </p>
      </div>
    )}

    <p>"Where are you?" called Allāh (s.w.t.).</p>

    <p>
      "I was afraid when I heard you coming," said Ādam (a.s.), "because I am naked."
    </p>

    <p>
      "Who told you that you are naked?" said Allāh to Hazrat Ādam. "Or did you eat the fruit that I told you not to eat?"
    </p>

    <p>
      Ādam (a.s.) answered, "The woman You gave to me, she gave that fruit to me. Then I ate it".
    </p>

    <p>
      Then Allāh said to Ḥawwāʾ: "What have you done?" "The snake tricked me, and then I ate it", said Ḥawwāʾ.
    </p>

    <p>
      Allāh spoke to the snake: "Because of what you have done, you will be the most cursed among the animals. All of your life you will crawl on your stomach and you will eat dust.
    </p>

    <p>
      To Adam (a.s.) he said: "I will make you and the woman, your zurriyya and her zurriyya mutual enemies. You will strike his heel, and he will crush your head."
    </p>

    <p>
      Then Allāh (s.w.t.) said to the woman: "From now on, you will bear children with great suffering and much pain. From now on, you will always be attracted toward your husband, and he will rule over you".
    </p>

    <p>
      Then He said to Ādam (a.s.): "Because you listened to your wife and ate the fruit I had made haraam, the earth will be cursed. From now on, all of your life, you will only get food by working hard.
    </p>

    <p>
      The earth will grow thorns and will make life difficult for you.
    </p>

    <p>
      You will sweat as you work all your life to earn a living. Eventually you will return to the soil. Because you were taken from the soil, you will become soil once again".
    </p>

    <p className="vitalic">
      So we see that because of sin, this curse entered the world.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Sent Away</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      "But Satan made them slip, and removed them from the state they were in. We said, ‘Get out, all of you! You are each other’s enemy. On earth you will have a place to stay and livelihood for a time.’"
      {' '}<span className='vitalic'>( Al-Baqara 2:36)</span>
    </p>

    <p className="cursor-pointer" onClick={() => toggleBubble('bubble3')}>
      Then Allāh (s.w.t.) made clothes out of animal skins and put the clothes on them. He said: "Humans were hasty and wanted to know good and evil, as We do, before it was time for them. Now We will not let them live eternally by eating from the Tree of Life. Let them go and labor on the soil." Then He sent them out<sup>3</sup> of the garden, and <span className="vitalic">removed them from living in His presence.</span>
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>3</sup> Ādam (a.s.) was taken out of Janna on Friday (al-Tirmidhī, Ibn Maja, Muslim) and his repentance was accepted also on Friday (Abū Dāwūd).
        </p>
      </div>
    )}

    <p>
      And He appointed creatures called Karub as guards at the door of the garden. A sword of fire that moved in all directions was guarding the road.
    </p>

    <p className="vitalic">
      Because of sin people were removed from living in the presence of Allāh. Only life with Allāh can be called "TRULY HAPPY LIFE". What can we call life without Allah?
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Can we call it DEATH?</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      That is right. The word "death" indeed expresses "separation". When a man dies, he is separated or removed from his relatives and from his family. But the worst death is when one is separated from Allāh, removed from the presence of Allāh. It was for good reason that Allāh said "...if you eat from it, you will die on that same day."
    </p>
  </div>

  <div className="paragraph_heading">
    <p>So what actually happened?</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      You may think: "Okay, so what happened, really?" Well, if sin had not happened, we would not have been sent away from the presence of Allāh. But now there is a wall between us and Allāh.
    </p>

    <p className="vitalic">
      If there were no sin, we would not have diseases or death. Allāh did not create Ādam just so he would become ill or to die after a few years.
    </p>

    <p className="vitalic">
      If there were no sin, we would not have frustration, offence, misunderstanding or hatred between people. Allāh created human beings so that they would be merciful and loving to each other, and so they would have have pure good relationships.
    </p>

    <p className="vitalic">
      Look around you. None of the bad things you see were there at the beginning. Allāh created humanity to have a beautiful life, to have true life. But because of sin, the world has changed.
    </p>

    <p className="vitalic">
      Allāh also created us as caretakers for the earth. But now people are doing the opposite: The earth is being polluted, the water is being poisoned, and the air is getting dirty... People are not living for Allāh: They are not living the way Allāh wants.
    </p>

    <p>
      <span className="vitalic">
        The worst thing is that humanity was removed from Allāh's presence. We were driven out — driven out of the presence of Allāh.
      </span>{' '}
      <span className="boldItalic">
        "Then Ādam received some words from his Lord and He accepted his repentance: He is the Ever Relenting, the Most Merciful. We said, ‘Get out, all of you! But when guidance comes from Me, as it certainly will, there will be no fear for those who follow My guidance nor will they grieve."
      </span>{' '}
      ( Al-Baqara 2:37-38)
    </p>
  </div>
</main>
  );
}