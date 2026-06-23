'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function AbrahamicCovenant() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble5',
    'bubble6',
  ]);

  return ( 
   <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Who is better in religion than one who submits himself to Allah,
      does good,
      and follows the upright way of Ibrahim?
      For Allah took Ibrahim as His close friend.”
      <span className="vitalic">
        {' '}
        (Surah An-Nisa 4:125).
      </span>
    </p>

    <p>
      One day Allah said to Prophet Ibrahim:

      “Leave your father's house
      and go to the land that I will show you.

      I shall make from you a great nation.
      I shall bless you,
      make your name great,
      and you shall become a source of blessing.

      I will bless those who bless you,
      and I will curse those who curse you.

      Through you,
      all the nations of the earth shall receive blessing.”
    </p>

    <p className="vitalic">
      Allah Most High desired that humanity
      restore its relationship with Him
      and that the vicegerency first entrusted to Adam (peace be upon him)
      continue upon the earth.

      For this reason,
      He chose to establish a covenant
      with Ibrahim (peace be upon him).
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE PROMISE OF BLESSING</p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Thus Allah, Mighty and Majestic,
      took Ibrahim (peace be upon him)
      under His protection and declared:

      “All the nations of the earth
      shall be blessed through you.”

      Do you remember how Adam (peace be upon him)
      and our mother Hawwa (may Allah be pleased with her)
      once lived in Paradise,
      in the presence of Allah?

      Whoever is a friend of Allah
      lives beneath His blessing.

      Yet after eating from the forbidden tree,
      they went astray.

      As a result,
      death,
      curse,
      and sin entered the world.

      Allah did not warn them in vain when He said:

      “The day you eat from it,
      you shall surely die.”

      (This refers not only to physical death,
      but also to spiritual death —
      separation from the presence of Allah.)
    </p>
  </div>

  <div className="main_text">
    <p
      className="vitalic cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Now Allah was promising Prophet Ibrahim
      a blessing intended for all peoples and nations of the earth —
      the blessing of faith.

      Whoever becomes part of Ibrahim’s family
      shares in that blessing.

      His sins are forgiven,
      and he becomes one of those
      brought near to Allah.

      This is why the Qur’an says:

      {' '}
      <span className="boldItalic">
        “Follow the way of Ibrahim.”
        <sup>1</sup>
      </span>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          The Qur’an also says:

          {' '}
          <span className="boldItalic">
            “Who would turn away from the way of Ibrahim
            except one who has debased himself?

            We chose him in this world,
            and in the Hereafter
            he will surely be among the righteous.”
          </span>
          {' '}
          (Al-Baqarah 2:130).
        </p>
      </div>
    )}

    <p className="vitalic">
      But who are the descendants of Ibrahim?

      Not everyone can simply claim
      to belong to his family.

      How can you become a member
      of the family of Ibrahim?
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble2')}
    >
      At that time,
      the Messenger of Allah was seventy-five years old.

      Obeying Allah,
      he took his wife Sarah,
      his nephew Lut,
      <sup>2</sup> {" "} together with the wealth,
      servants,
      and possessions he had acquired in Harran,
      and departed for the land of Canaan.

      After arriving there,
      Allah Most High revealed His purpose to Ibrahim (peace be upon him):

      “This land I shall give to your descendants.”

      (At that time,
      Ibrahim still had no children.)
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          Lut (peace be upon him)
          was the first person
          to believe in Ibrahim (peace be upon him)
          (see Surah Al-‘Ankabut 29:26).

          Later,
          he migrated alongside Ibrahim
          for the sake of Allah
          (Mir Khwand, “Rawdat al-Safa”).
        </p>
      </div>
    )}

    <p className="vitalic">
      Among all the prophets,
      Ibrahim (peace be upon him)
      became known as
      <span className="boldItalic"> Khalilullah </span>
      — the Friend of Allah.

      He believed in Allah.

      Because he believed,
      he obeyed.

      When Allah commanded him to set out,
      he departed,
      even though he did not know where the journey would lead.

      Through faith,
      he settled in a foreign land.

      He lived as a traveler in tents
      wherever Allah directed him.

      His eyes were fixed upon a true homeland —
      an everlasting abode
      whose Architect and Builder is Allah Himself.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>IBRAHIM'S JOURNEY TO EGYPT</p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      During this period,
      a severe famine struck the land,
      and the Messenger of Allah
      temporarily traveled to Egypt.

      As they approached Egypt,
      he said to his wife Sarah:

      “You are a very beautiful woman.

      If the Egyptians discover
      that I am your husband,
      they may kill me because of you.

      Therefore tell them:
      ‘I am his sister.’
      <sup>3</sup>

      If you do so,
      they will treat me well
      and spare my life.”
      <sup>4</sup> {" "}

      Indeed,
      as soon as they arrived,
      Sarah’s beauty attracted everyone’s attention.

      Pharaoh’s officials,
      seeing her extraordinary beauty,
      praised her before Pharaoh
      <sup>5</sup>{" "}
      and Sarah was brought into the royal palace.
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>3</sup>
          In a hadith narrated by Imam al-Bukhari,
          Ibrahim (peace be upon him) said:

          “I introduced you to them as my sister.
          Do not contradict my statement.
          By Allah,
          there are no believers on earth today
          besides you and me.”
        </p>

        <p>
          <sup>4</sup>
          Muslim, Sahih, vol. 4, p. 1840.
        </p>

        <p>
          <sup>5</sup>
          Al-Mas‘udi, “Akhbar al-Zaman”.
          See also al-Bukhari, vol. 4, p. 112.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>BUT...</p>
  </div>

  <div className="main_text">
    <p>
      Allah Most High afflicted Pharaoh
      and the people of his palace
      with severe illnesses
      because they had taken Sarah (may Allah be pleased with her)
      into the palace.

      Terrified by what was happening,
      Pharaoh quickly summoned Ibrahim (peace be upon him) and said:

      “Why did you do this?

      Why did you not tell me
      that Sarah was your wife?

      Why did you call her your sister?

      Had you told me the truth,
      I would never have brought her into my palace.

      Take your wife
      and leave my land.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble6')}
    >
      Then Pharaoh commanded his men:

      “Escort this man,
      his wife,
      and all his possessions
      safely to the border.”

      Thus Ibrahim (peace be upon him)
      returned to Canaan
      with his wife
      and all that he possessed.
      <sup>6</sup>
    </p>

    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>
          Pharaoh presented Ibrahim (peace be upon him)
          with many gifts and much wealth.

          Hajar,
          our noble mother,
          who was given to Sarah as a servant,
          was also among Pharaoh’s gifts
          (Ibn Sa‘d, “Tabaqat”).
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>LUT (PEACE BE UPON HIM) SEPARATES FROM IBRAHIM</p>
  </div>

  <div className="main_text">
    <p>
      Both Ibrahim (peace be upon him)
      and Lut (peace be upon him),
      who traveled with him,
      possessed large flocks
      and many servants.

      One day,
      the grazing land became insufficient,
      and a dispute broke out
      between the shepherds of Ibrahim
      and those of Lut.

      The Canaanites and Perizzites
      were also living in the area at that time.

      Then Ibrahim said to Lut:

      “We are relatives.
      There must be no quarrel
      between us,
      nor between our shepherds.

      The land is vast.

      Let us separate peacefully.

      If you remain here,
      I will go elsewhere.

      If you leave,
      I shall remain.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>LUT CHOOSES SODOM</p>
  </div>

  <div className="main_text">
    <p>
      Lut (peace be upon him)
      looked toward Sodom
      and the Jordan Valley
      and could not take his eyes from it.

      The region was fertile
      and rich in water,
      much like the lands of Egypt.

      “I choose the Jordan Valley,”
      said Lut.

      He parted from Ibrahim (peace be upon him),
      took his livestock and servants,
      and moved there,
      settling among the cities of the valley.

      He pitched his tents near Sodom.

      (The people of Sodom were wicked,
      given to grave sins
      and rebellion against Allah.)

      {' '}
      <span className="vitalic">
        We shall soon tell the rest of that story
        and how it came to its end.
      </span>
    </p>
  </div>
</main>
  );
}