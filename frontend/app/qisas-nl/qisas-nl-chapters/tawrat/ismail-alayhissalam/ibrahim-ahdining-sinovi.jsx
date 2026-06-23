'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function ZabihAllah() {
  const { openBubbles, toggleBubble } = useSpeechBubbles(['bubble1']);

  return ( 
    <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic text-center border border-gray-400 rounded-md py-3 px-2">
      “Indeed, this was the clear and unmistakable trial.”
      (Surah As-Saffat 37:106).
    </p>
  </div>

  <div
    className="paragraph_heading cursor-pointer "
    onClick={() => toggleBubble('bubble1')}
  >
    <p>
      THE FINAL TEST<sup>1</sup> {" "} OF IBRAHIM</p>
      <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
   {openBubbles['bubble1'] && (
  <div
    className="speech-bubble"
    onClick={() => toggleBubble('bubble1')}
  >
    <p>
      <sup>1</sup>
      Islamic scholars have differed regarding which of Ibrahim’s two sons
      was commanded to be offered as a sacrifice.

      Some held that the intended sacrifice was Ishaq ibn Ibrahim,
      while others maintained that it was Ismail ibn Ibrahim.

      Both groups cited reports attributed to our Prophet ﷺ
      in support of their position.

      Those who held that Ishaq was the intended sacrifice
      relied upon narrations from Ibn Abbas رضي الله عنه and others.

      According to these reports,
      when the verse,
      <span className="boldItalic">
        {' '}
        “And We ransomed him with a mighty sacrifice”
      </span>
      {' '}
      was mentioned,
      the Prophet ﷺ was asked:
      “O Messenger of Allah,
      who was the son that was to be sacrificed?”
      He replied:
      “The sacrificial son was Ishaq.”

      Similar reports were also narrated from
      Abu Hurayrah رضي الله عنه,
      Abdullah ibn Mas‘ud رضي الله عنه,
      Abdullah ibn Ubayd,
      Ibn Thabit,
      Abu Maysarah,
      Abu Malik,
      Masruq,
      and others.

      <br />
      <br />

      Ka‘b al-Ahbar also narrated:

      “When Ibrahim عليه السلام was commanded
      to sacrifice his son,
      Shaytan went to Sarah and said:

      ‘Do you know where Ibrahim has taken your son?’

      She replied:
      ‘They have gone to gather firewood.’

      Shaytan said:
      ‘No.
      He has taken him in order to slaughter him.’

      Sarah replied:
      ‘Impossible.
      A father would never slaughter his own son.’

      Shaytan answered:
      ‘He claims that Allah has commanded him to do so.’

      Sarah said:
      ‘If Allah has indeed commanded him,
      then he is right to obey his Lord.’”

      Then Shaytan went to the boy and said:

      “Do you know where your father is taking you?”

      He replied:
      “To carry out a command from Allah.”

      Shaytan said:
      “He intends to slaughter you.”

      The boy answered:
      “If Allah has commanded him,
      then let him do as he has been ordered.”

      Shaytan then approached Ibrahim عليه السلام
      and attempted to turn him away from obedience,
      but Ibrahim rejected him.
<br />
<br />
      According to many scholars,
      this is one of the reasons why the rites of Hajj include
      the symbolic stoning of the pillars,
      commemorating Ibrahim’s rejection of Shaytan.

      Numerous chains of transmission from Ibn Abbas رضي الله عنه
      and other early scholars support the view
      that the intended sacrifice was Ishaq.

      Other scholars, however,
      considered Ismail عليه السلام to be the sacrificial son,
      citing different narrations and textual evidence.

      For this reason,
      the matter remained a subject of scholarly discussion
      among the early generations.
    </p>
  </div>
)}
    <p>
      A long time passed. Then one day, Allah (s.w.t.) decided to test
      <span className="vitalic">
        {' '}
        Ibrahim’s faithfulness to the covenant
      </span>
      :

      “Ibrahim!”
    </p>

    <p>
      “Labbayk!”
      replied rasulullah (a.s.).
    </p>

    <p>
      “Take your son
      and go to the land of Moriah,”
      Allah said.

      “There,
      upon a mountain,
      offer him to Me as a sacrifice.”
    </p>

    <p className="vitalic">
      Imagine that you too have a son
      whom you love more than your own life —
      a son born to you in old age.

      Now imagine that Allah were to say to you:

      “Offer that son to Me as a sacrifice —
      the very son for whom you prayed
      and waited twenty-five years.”

      What would become of you?

      What do you think Ibrahim عليه السلام felt at that moment?
    </p>

    <p className="vitalic">
      He loved his son dearly.

      “Allah loves my son too!
      Why then has He commanded me
      to sacrifice him?”

      Such thoughts filled the heart of the father.
    </p>

    <p className="vitalic">
      Perhaps Allah intended to bring him back to life?

      “Surely Allah is capable of that,”
      Ibrahim عليه السلام believed.

      “But what if He does not restore him?
      Then what will happen?”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>OBEDIENCE</p>
  </div>

  <div className="main_text">
    <p>
      The next morning,
      Ibrahim (a.s.) rose early,
      saddled his donkey,
      split wood for the burnt offering,
      took two of his servants and his son,
      and set out toward the place
      Allah had shown him.
    </p>

    <p>
      On the third day of the journey,
      the destination came into view from afar.

      Then Allah’s Messenger said to his servants:

      “Remain here.

      My son and I will go over there,
      worship Allah,
      and then return to you.”

      He placed the wood upon his son’s shoulders,
      while he himself carried the fire-starter and the knife,
      and together they began climbing the mountain.
    </p>

    <p>
      “My father,”
      said the boy along the way.

      “Yes, my son?”

      replied Allah’s Messenger.

      “We have the fire
      and we have the wood,
      but where is the lamb
      for the sacrifice?”
    </p>

    <p>
      “Allah Himself will provide the sacrifice,
      my son,”
      Ibrahim alayhis-salam replied.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ALLAH WILL PROVIDE</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Then when he was old enough to accompany him,
      he said:

      ‘O my dear son,
      indeed I have seen in a dream
      that I am sacrificing you.

      So tell me,
      what do you think?’

      He replied:

      ‘O my father,
      do as you have been commanded.

      If Allah wills,
      you will find me among the patient.’”
     {" "} <span className='vitalic'> (Surah As-Saffat 37:102). </span>
    </p>

    <p>
      When they reached the appointed place,
      Ibrahim (a.s.) built an altar
      and arranged wood upon it.

      Then he bound his son,
      laid him upon the altar,
      and took the knife in his hand
      to sacrifice him.
    </p>

    <p>
      Suddenly a call came from the heavens:

      “Ibrahim! Ibrahim!”

      “Labbayk!”
      replied Allah’s Messenger.

      “Do not harm the boy. Now I know your devotion,
      for you did not withhold from Me
      even your beloved son.”
    </p>

    <p>
      Then Ibrahim عليه السلام looked up. And behold the power of Allah!

      A ram stood nearby, its horns caught in a thicket.

      Ibrahim went, took the ram,
      and sacrificed it in place of his son,
      thus completing the offering.
    </p>

    <p>
      (Later,
      Allah’s Messenger named that place:
      “Allah Will Provide.”

      Because of this,
      the saying,
      “On the mountain of Allah,
      He Himself will provide,”
      became a well-known proverb among the people.)
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ABOUT THE BURNT OFFERING</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Some may wonder:

      Were sacrifices in those days
      really burned in fire?

      Why did Ibrahim عليه السلام
      first arrange wood upon the altar?
    </p>

    <p className="vitalic">
      In the revealed scriptures,
      this type of sacrifice was known as
      <span className="boldItalic">
        {' '}
        “a burnt offering”
      </span> {" "}

      (See Surah Aal ‘Imran 3:183).

      In this offering,
      the entire animal was presented to Allah.

      No portion of the meat was kept back.

      It symbolized that the worshipper himself
      was surrendering completely
      to the will of Allah.

      Nothing was being withheld.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>WHICH IS MORE PRECIOUS: THE RAM OR THE SON?</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Ibrahim’s son was supposed to die.

      Yet Allah provided a ram in his place.  Ibrahim (a.s.) took the ram and sacrificed it instead of his son.
    </p>

    <p className="vitalic">
      The Noble Qur’an says:

      <span className="boldItalic">
        {' '}
        “And We ransomed him
        <span className="vitalic">
          {' '}
          (his son)
        </span>
        {' '}
        with a mighty sacrifice.”
      </span>
      {' '}
      (Surah As-Saffat 37:107).
    </p>

    <p className="vitalic">
      What do you think was more valuable:
      the son or the ram?

      Surely the son.

      You would not exchange your own child
      for a thousand rams.

      Then why does Allah describe it as
      “a mighty sacrifice”?
    </p>

    <p className="vitalic">
      The answer is that this ram
      was a symbol of a greater sacrifice
      that would be provided in the future.

      What sacrifice was that?

      We are not perfect.

      Our obedience to Allah is not perfect.

      Therefore humanity stands in need
      of the perfect sacrifice
      that Allah Himself provides.

      Sacrifice is what is given
      in place of our imperfect obedience.

      Without sacrifice,
      we cannot fully partake
      in the blessings and promises
      of the covenant.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“ALL NATIONS SHALL BE BLESSED THROUGH YOUR DESCENDANT”</p>
  </div>

  <div className="main_text">
    <p>
      At that time,
      Allah azza wa jall said to Ibrahim alayhis-salam:

      “I swear by My own Name:
      because you trusted Me,
      because you did not withhold from Me
      your beloved son,
      I shall surely bless you.

      I shall multiply your descendants
      like the stars of the heavens
      and like the sand upon the seashore.

      Because you obeyed Me,
      all the nations of the earth
      shall receive blessing
      through your zurriyya” (descendant).
    </p>

    <p className="vitalic">
      This was a special blessing —
      a promise concerning the salvation
      that would come in the future.

      Through Adam’s sin,
      the earth had come under a curse.

      Now,
      one of Ibrahim’s descendants
      would one day bring forgiveness
      to the world.

      Yet that forgiveness would come
      through the covenant.

      Those who enter the covenant
      inherit Paradise.

      As it is written in Surah Al-Mu’minun:

      <span className="boldItalic">
        {' '}
        “Those who are faithful
        to their trusts and their covenants,
        and those who guard their prayers —

        they are the inheritors.

        They shall inherit Firdaus
        and abide therein forever”
      </span>
      {' '}
      (23:8–11).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FAITH OF IBRAHIM </p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p className="vitalic">
      Ibrahim (a.s.) believed
      in the promises of Allah.

      Since Allah had said,
      “Your descendants shall continue through your son,”
      he was willing to take that son
      to the place of sacrifice.

      He firmly believed that Allah
      was able to raise his son from the dead.
    </p>

    <p className="vitalic">
      It is easy to speak of such things.

      But to lead your own child toward death —
      that is another matter entirely.

      Only a person who truly trusts
      in the goodness of Allah
      can show such courage.

      To surrender to Allah,
      you must first believe
      that He is good.
    </p>

    <p className="vitalic">
      Whoever wishes to draw near to Allah
      must believe that He exists
      and that He rewards those
      who sincerely seek Him.

      Seek Allah.

      Those who seek Him
      with a sincere heart
      are never deprived
      of His mercy.
    </p>
  </div>
</main>
  );
}