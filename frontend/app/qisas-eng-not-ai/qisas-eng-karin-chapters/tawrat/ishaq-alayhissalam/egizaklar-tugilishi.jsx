'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function IsaaksTwins() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
    'bubble7',
  ]);

  return (
     
    <main className="stories relative">
  <div className="paragraph_heading">
    <p>THE PASSING OF IBRAHIM</p>
    <AlayhS className='text-green-800 font-medium' />
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Prophet Ibrahim lived to the age of one hundred and
      seventy-five.
      <sup>1</sup>{' '}

      As Allah (s.w.t.) had promised,
      he enjoyed a long life and passed away peacefully.

      His sons,
      Ismail and Ishaq عليهما السلام,
      buried him beside Lady Sarah (r.a.)
      in the Cave of Machpelah,
      near Mamre,
      in the field that had belonged to Ephron son of Zohar the Hittite.

      Ibrahim alayhis-salam had purchased that land
      from the Hittites.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          Al-Tabari and Abu al-Fida
          (“Al-Bidayah wa al-Nihayah”,
          vol. 1, p. 174).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>WHAT KIND OF LIFE DID IBRAHIM (a.s.) LIVE?</p>
  </div>

  <div className="main_text">
    <p className="my-1 vitalic">
      ~ When Allah commanded him,
      “Leave your father’s house and go to the land that I will show you,”
      he obeyed his Lord.
    </p>

    <p
      className="my-1 vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      ~ He regarded Allah as his closest Friend.
      He would bring all his difficulties and concerns before Him.
      <sup>2</sup>
    </p>
  {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          One narration states:

          When our Prophet ﷺ met Ibrahim عليه السلام,
          the Friend of Allah said:

          “Convey my salam to your Ummah,
          and tell them to increase their planting in Paradise,
          for the soil of Paradise is fertile
          and its water is sweet.”

          The Prophet ﷺ asked:

          “What are the plants of Paradise?”

          Ibrahim عليه السلام replied:

          “Subhanallahi wal-hamdu lillahi wa la ilaha illa Allahu wallahu akbar.
          Wa la hawla wa la quwwata illa billah.”

          (Al-Tirmidhi, “Sunan”, vol. 5, p. 510;
          Al-Tabarani, “Al-Mu‘jam al-Saghir”, vol. 2, p. 196;
          Ahmad ibn Hanbal, “Musnad”, vol. 5, p. 418;
          Al-Suyuti, “Al-Khasa’is”, vol. 1, p. 414;
          Al-Halabi, vol. 2, p. 123.)
        </p>
      </div>
    )}

    <p className="my-1 vitalic">
      ~ Because he trusted completely in the goodness of Allah,
      he was willing even to take his son for sacrifice.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>RIFQAH (r.a.) CONCEIVES</p>
  </div>

  <div className="main_text">
    <p
      className="boldItalic cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “And among their descendants are those who do good,
      and those who clearly wrong themselves.”
      <span className="vitalic">
        {' '}
        (Qur’anic verse).
        <sup>3</sup>
      </span>
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
   
        <p>
          <sup>3</sup>
          Surah As-Saffat 37:113.
        </p>
      </div>
    )}

    <p>
      Lady Rifqah (r.a.) had been unable to bear children.

      Ishaq alayhis-salam repeatedly turned to Allah,
      praying for offspring.

      At last,
      his du‘a was answered,
      and his wife became pregnant.
    </p>

    <p>
      Yet something unusual occurred.

      The babies struggled against one another
      within their mother’s womb.

      Distressed by this,
      Rifqah (r.a.) turned to Allah
      seeking an answer.
    </p>

    <p>
      Allah azza wa jall said to her:

      “Two nations are within your womb.

      Two separate peoples shall come forth from you.

      One shall be stronger than the other,
      and the elder shall serve the younger.”
    </p>

    <p>
      Eventually the time came for her to give birth.

      She bore twin sons.

      The first was reddish in complexion,
      and his entire body was covered with hair
      like a fur garment.

      Therefore they named him Esau.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      The second son emerged holding his brother’s heel in his hand.

      For this reason they named him Ya‘qub.
      <sup>4</sup>{' '}

      When the twins were born,
      Prophet Ishaq عليه السلام was sixty years old.
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          The name Ya‘qub means
          “the one who grasps the heel.”
        </p>
      </div>
    )}

    <p className="vitalic">
      Thus the chain of Barakah continued.

      Do you remember?

      Allah (s.w.t.) had promised Ibrahim alayhis-salam:

      “All the peoples of the earth
      shall be blessed through your zurriya” (descendant).
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Ibrahim alayhis-salam had several sons.

      The first was Ismail alayhis-salam,
      the second was Ishaq alayhis-salam,
      and later there were sons born to Lady Keturah.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          Some sources also mention
          another wife of Ibrahim عليه السلام
          named Hajjun.
        </p>
      </div>
    )}

    <p>
      However,
      the chain of blessing continued through Ishaq عليه السلام,
      because Allah had previously promised this to Lady Sarah.

      (Although Ismail alayhis-salam was the firstborn son.)
    </p>

    <p>
      Now Ishaq (a.s.) himself
      had two twin sons:
      Esau and Ya‘qub.

      Ishaq عليه السلام assumed
      that the covenantal blessing
      would continue through the firstborn son.

      Yet even before they were born,
      Allah had informed Lady Rifqah:

      “The elder shall serve the younger.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ESAU (r.a.) SELLS HIS BIRTHRIGHT</p>
  </div>

  <div className="main_text">
    <p>
      The boys grew up.

      Esau (r.a.) became a skilled hunter
      who loved roaming the open country.

      Ya‘qub عليه السلام was gentle in nature
      and preferred to remain near the camp.
    </p>

    <p>
      Prophet Ishaq especially enjoyed the game
      that Esau brought home from hunting,
      and because of this he favored him more.

      Lady Rifqah,
      however,
      loved Ya‘qub more.
    </p>

    <p>
      One day Esau (r.a.) returned exhausted from hunting.

      Ya‘qub عليه السلام was preparing a pot of stew.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      “Give me some of that red
      <sup>6</sup>{' '}
      stew,”
      said Esau (r.a.).

      “I am starving.”

      “Very well,”
      replied Ya‘qub (a.s.).

      “But first sell me your birthright.”

      “I am about to die from hunger,”
      his brother answered.

      “What use is the birthright to me?
      Take it—it is yours.”

      But Ya‘qub alayhis-salam insisted:

      “First swear an oath.”

      So Esau swore an oath
      and sold his birthright to his younger brother.
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          For this reason,
          Esau later became known as Edom,
          meaning “red.”
        </p>
      </div>
    )}

    <p>
      Thus,
      for a piece of bread and a bowl of stew,
      he exchanged his birthright.

      He treated lightly the inheritance that had come down from Ibrahim عليه السلام —
      the chain of Barakah itself.

      After eating and drinking,
      he simply got up
      and went about his business
      as though nothing important had happened.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>
      ALLAH REMINDS ISHAQ (a.s.)
      OF HIS COVENANT PROMISE
    </p>
  </div>

  <div className="main_text">
    <p>
      Another famine struck the land,
      similar to the famine that had occurred
      in the days of Ibrahim عليه السلام.

      Therefore Ishaq (a.s.) traveled to Gerar,
      the land of the Philistines,
      where King Abimelech ruled.
    </p>

    <p>
      There Allah appeared to Ishaq (a.s.) and said:

      “Do not go down to Egypt.

      Do not leave the land of Canaan.

      I shall be with you
      and I shall bless you.

      I will give all these lands
      to you and your descendants.

      I shall fulfill the oath
      that I swore to your father Ibrahim.

      Because Ibrahim obeyed Me,
      kept My commands,
      My statutes,
      and My laws,
      I shall multiply your descendants
      like the stars of the heavens.

      I shall give all these lands to them.

      Through your offspring,
      all the nations of the earth
      shall receive blessing.”
    </p>

    <p className="vitalic">
      Thus Allah repeated to Ishaq عليه السلام
      the same three promises:
    </p>
  </div>

  <div className="main_text border rounded-md border-green-600 p-3">
    <p className="vitalic !my-0 py-1 px-4">
      ~ that his descendants would become numerous,
    </p>

    <p className="vitalic !my-0 py-1 px-4">
      ~ that his descendants would inherit the land,
    </p>

    <p className="vitalic !my-0 py-1 px-4">
      ~ and that through his offspring
      all the peoples of the earth
      would receive blessing.
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      If you remember,
      these were the
      <span className="font-semibold">
        {' '}
        very same promises
      </span>
      {' '}
      that Allah had given to Prophet Ibrahim khalilullah.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ISHAQ (a.s.) AND THE KING OF GERAR</p>
  </div>

  <div className="main_text">
    <p>
      Ishaq alayhis-salam lived in Gerar.

      Out of fear,
      he told people that Rifqah was his sister,
      reasoning:

      “If I say she is my wife,
      they may kill me in order to marry her.”

      (Lady Rifqah was indeed very beautiful.)
    </p>

    <p>
      Some time later,
      the Philistine king happened to look out of a window
      and saw Ishaq and Rifqah together.
    </p>

    <p>
      He summoned Ishaq (a.s.) and said:

      “She is your wife!

      Why did you say,
      ‘She is my sister’?”
    </p>

    <p>
      “I was afraid that I might be killed because of her,”
      replied Ishaq (a.s.).
    </p>

    <p>
      The king said:

      “What have you done?

      Someone might easily have taken her as his wife,
      and you would have brought guilt upon us!”
    </p>

    <p>
      Then he issued a public decree:

      “Whoever harms this man
      or his wife
      shall surely be put to death.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE BLESSING OF ALLAH</p>
  </div>

  <div className="main_text">
    <p>
      That very year,
      the crops planted by Ishaq alayhis-salam
      yielded a hundredfold harvest.

      Allah had greatly blessed him.

      His wealth continued to increase
      until he became exceedingly prosperous.

      He possessed flocks,
      herds,
      servants,
      and maidservants.

      Because of this,
      the Philistines grew jealous of him
      and filled in the wells
      that had originally been dug
      by hazrat Ibrahim.
    </p>

    <p>
      Eventually the king of Gerar said to Ishaq (a.s.):

      “You have become too powerful for us.

      You must move elsewhere.”
    </p>

    <p>
      So Ishaq (a.s.) settled in the Valley of Gerar
      and reopened the wells
      that had been dug by his father Ibrahim (a.s.)
      and later blocked by the Philistines.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE WIVES OF ESAU</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble7')}
    >
      At the age of forty,
      Esau married Judith,
      the daughter of Beeri the Hittite,
      and later Basemath,
      the daughter of Elon the Hittite.
      <sup>7</sup>{' '}

      These Canaanite wives
      caused great grief
      to Ishaq (a.s.) and Rifqah.
    </p>

    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>
          The Hittites were an idolatrous people
          known for practices that were considered corrupt and detestable.
        </p>
      </div>
    )}
  </div>
</main>
  );
}