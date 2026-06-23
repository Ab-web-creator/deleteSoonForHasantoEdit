'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function SignOfCovenant() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble6',
  ]);

  return (
    <main className="stories relative">
  <div className="main_text">
    <p>
      Thirteen years passed.

      One day Allah, Who has power over all things,
      again appeared to Ibrahim عليه السلام and said:

      “Ibrahim,
      remain faithful to Our covenant,
      value Our friendship,
      and be among the people of taqwā.

      I shall always be with you.
      I shall protect you.
      And I shall greatly multiply your descendants.”
    </p>

    <p>
      Allah’s Messenger, Ibrahim عليه السلام,
      fell down in prostration.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      “You shall become the father of many nations
      <sup>1</sup>
      ,” Allah said.

      “I shall bring forth from you
      many children and many peoples.

      Kings shall arise from your descendants.

      I shall continue My covenant
      with you and your offspring
      from generation to generation.

      This land in which you now live as a traveler
      I shall give to you
      and to your descendants
      as an everlasting possession.

      You shall remain under My protection.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          In Surah Al-Baqarah,
          Allah says to Ibrahim عليه السلام:
          {' '}
          <span className="boldItalic">
            “Indeed, I am going to make you a leader for mankind.”
          </span>
          {' '}
          (2:124).
        </p>
      </div>
    )}

    <p>
      “But you must uphold My covenant:
      you and your descendants
      must remain faithful to it.

      Every male among you
      shall be circumcised.

      This shall be the sign
      of the covenant between us.

      Circumcise your sons
      when they are eight days old.

      Your servants as well —
      whether born in your household
      or purchased from other peoples —
      shall also be circumcised.

      This mark upon your bodies
      shall be evidence
      that My covenant with you
      is everlasting.

      Whoever refuses circumcision
      shall be cut off from among his people,
      for he has rejected My covenant.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>ISHAQ — “HE LAUGHS”</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “And We gave him the glad tidings of Ishaq,
      a righteous prophet.
      And We bestowed blessings upon him and upon Ishaq.”
      <span className="vitalic">
        {' '}
        (Surah As-Saffat 37:112–113).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      “You shall no longer call your wife Sarah,”
      the Lord continued.

      “From now on,
      her name shall be Sarah.
      <sup>2</sup>{" "} I shall bless her.

      She shall become the mother of many nations.

      Kings shall arise from her descendants.”
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          The name Sarah means “princess” or “queen.”
        </p>
      </div>
    )}

    <p>
      Ibrahim عليه السلام fell into prostration.

      Thoughts passed through his mind:

      “I am nearly one hundred years old,
      and Sarah is ninety.”

      Then he smiled to himself and thought:

      “Can Sarah really bear a child at such an age?”

      Afterwards he said:

      “O Allah,
      bless my son Ismail.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      “Ibrahim,” Allah said,
      “next year Sarah will bear you a son.

      You shall name him Ishaq.
      <sup>3</sup>

      Through this son
      I shall continue the covenant
      that I made with you.”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          The name “Ishaq” means
          “he laughs.”
        </p>
      </div>
    )}

    <p>
      “As for Ismail,
      set your heart at ease,”
      Allah continued.

      “I shall surely bless him.

      I shall multiply his descendants
      and make from him a great nation.

      He shall become the father
      of twelve rulers.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      That very day,
      Allah’s Messenger, Ibrahim عليه السلام,
      began carrying out Allah’s command.

      He circumcised every male in his household —
      those born in his home,
      those he had purchased,
      and all the boys.

      At that time,
      Ibrahim عليه السلام was ninety-nine years old,
      while Ismail عليه السلام was thirteen years old.

      Thus Ibrahim,
      Ismail,
      the servants,
      and every male born in or brought into the household
      were circumcised on that same day.
      <sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          Abd al-Razzaq, “Musannaf”, vol. 2, p. 175;
          Ibn Abi Shaybah, “Musannaf”, vol. 11, p. 522;
          Al-Bukhari, “Al-Adab al-Mufrad”, p. 322.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE VISIT OF THREE GUESTS</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      “Has the story reached you
      of Ibrahim’s honored guests? ...

      They said:
      ‘Do not be afraid,’
      and they gave him the glad tidings
      of a wise son.”
      <span className="vitalic">
        {' '}
        (Surah Adh-Dhariyat 51:24, 28).
      </span>
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      One day Ibrahim عليه السلام
      was sitting at the entrance of his tent
      <sup>5</sup>{' '}
      during the heat of midday.

      Suddenly he noticed three men
      standing before him.

      <span className="vitalic">
        {' '}
        They were angels sent by Allah
        to convey His decree
        to Allah’s Messenger.
      </span>
      {' '}

      Ibrahim immediately rose,
      hurried to greet them,
      bowed respectfully,
      and said:

      “My lords,
      please honor me by staying.
      Do not pass by your servant.

      Let water be brought
      so that you may wash your feet.

      Rest for a while beneath the shade of the tree.

      I shall bring you something to eat.

      Then you may continue your journey.”
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          At that time,
          his tent stood near the Mamre tree.
        </p>
      </div>
    )}

    <p>
      They replied:
      “Very well.
      Let it be as you have said.”
    </p>

    <p>
      Ibrahim عليه السلام hurried into the tent
      and said to Lady Sarah رضي الله عنها:

      “Quickly,
      prepare three measures
      of the finest flour
      and bake fresh bread.”

      Then he himself ran to the herd
      and selected a fat calf.

      His servant immediately slaughtered it
      and began preparing the meal.

      When the meat was ready,
      Allah’s Messenger placed it before the guests
      together with milk and curdled yogurt
      beneath the tree.

      But...
    </p>

    <p className="boldItalic">
      “When he saw that their hands
      did not reach for the food,
      he became uneasy and felt fear within himself.

      They said:
      ‘Do not be afraid.
      We have been sent
      to the people of Lut.’”
      <span className="vitalic">
        {' '}
        (Surah Hud 11:70).
      </span>
    </p>

    <p>
      Then the guests asked:

      “Where is your wife Sarah?”

      Ibrahim عليه السلام replied:

      “She is here,
      inside the tent.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“NEXT YEAR SARAH WILL HAVE A SON”</p>
  </div>

  <div className="main_text">
    <p>
      “At this time next year
      I shall return,”
      said one of the guests.

      “And when I return,
      your wife Sarah
      will have a son in her arms.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      At that moment,
      Sarah رضي الله عنها
      was standing inside the tent behind Ibrahim عليه السلام,
      listening to the conversation.

      When she heard the guest’s words,
      she laughed inwardly.
      <sup>6</sup>{' '}

      For both Ibrahim عليه السلام and she herself
      had reached a very advanced age,
      and her monthly cycle
      had long since ceased.

      She thought to herself:

      “Could such joy really come to me
      in my old age?

      My husband too has become elderly...”
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p className="boldItalic">
          <sup>6</sup>
          “And his wife was standing there,
          and she laughed.

          So We gave her the glad tidings of Ishaq...

          She said:
          ‘Alas for me!
          Shall I bear a child
          when I am an old woman
          and my husband is an old man?’

          They said:
          ‘Do you marvel at the decree of Allah?

          The mercy and blessings of Allah
          are upon this household.’”
        </p>

        <p className="who_wrote">
          (Surah Hud 11:71–73)
        </p>
      </div>
    )}

    <p>
      Then the angel of Allah said to Ibrahim عليه السلام:

      “Why did Sarah laugh?

      Why does she doubt
      that she will bear a child?

      Is anything impossible for Allah?

      At this same time next year
      I shall return,
      and Sarah will have a baby in her arms.”
    </p>

    <p>
      “I did not laugh,”
      our mother Sarah said in fear.

      But he replied:

      “No,
      you did laugh.”
    </p>
  </div>
</main>
  );
}