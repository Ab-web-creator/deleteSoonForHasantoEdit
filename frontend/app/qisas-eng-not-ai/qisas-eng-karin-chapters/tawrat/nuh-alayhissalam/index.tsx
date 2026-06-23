'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';
import { transform } from 'next/dist/build/swc';

export default function NuhAlayhissalam() {
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
    <p>The story of Nūḥ (a.s.)</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      "My reward is with Allāh alone, and I am commanded to be one of those who devote themselves to Him. But they rejected him. We saved him and those with him on the boat and let them survive; and We drowned those who denied Our revelations– see what was the end of those who were forewarned!"
    {' '}<span className='vitalic'>( Yūnus 10:72-73).</span>
    </p>
  </div>

  <div className="main_text">
    <p className="vitalic">
      Many years passed. People increased in number on the earth. As they increased in number, the weight of their sin also increased.
    </p>

    <p>
      Evil was increasing greatly; people were not living in the straight/right path; and all their thoughts were busy with evil. This caused Allāh (s.w.t.) to be very displeased, because the people who were created by Allāh went against the will of Allāh and chose the way of rebellion.
    </p>

    <p>Allāh said, "I will destroy mankind from the face of the earth." But Allāh was pleased with the way Nūḥ (a.s.) lived.</p>

    <p>
      Hazrat Nūḥ was loyal (wafāʿ) to Allah's covenant with him and was thankful for Allah's friendship. According to those people who were around him, he lived with taqwā.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Verdict given for Sin</p>
  </div>

  <div className="main_text">
    <p>
      Allāh (s.w.t.) saw that people were corrupted and given to violence. Every inclination of their heart was evil, and all the earth was filled with their unrighteous deeds and with oppression.
    </p>

    <p>
      He said to the prophet Nūḥ: "People have filled the earth with oppression. Now I will destroy all humanity.
    </p>

    <p>
      I want you to build a boat from cypress wood and to put rooms in it. Then cover it with tar on both the inside and outside.
    </p>

    <p>
      Make a roof for it and leave a 44 centimeter opening below the roof all the way around the boat. Put a door on its side, and build three decks inside the boat—lower, middle, and upper.
    </p>

    <p>
      I will send a flood of water upon the earth. And I will destroy all the people and animals on the earth.
    
      But with you I will make a covenant. I will save your family in the boat: you, your wife, your sons and your daughters-in-law".
    </p>

    <p>Then Hazrat Nūḥ obeyed all the commands of Allāh (s.w.t.) as he was told.</p>
  </div>

  <div className="paragraph_heading">
    <p className="boldItalic">"Nūḥ's people called the prophets liars"
      <br />
    <span  style={{ textTransform: "none" }} className='text-blue-600'>( Al-Shuʿarāʾ 26:105).</span> </p>
  </div>

  <div className="main_text">
    <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble1')}>
      Imagine: The prophet Nūḥ was busy building a big boat in a field where there was no river or sea. The length of the boat was about 137 meters, the width was 23 meters and its height was 14 meters<sup>1</sup>. It took a long time to finish it. What did Nūḥ's (a.s.) friends and neighbours think when they saw him building the boat for so many years?
    </p>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>1</sup> Nasafī, "<span className="vitalic">Madārik</span>"; Suyūṭī, "<span className="vitalic">Dur al-Manthūr</span>".
        </p>
      </div>
    )}

    <p className="vitalic">
      Some people probably thought that he had lost his mind. Some laughed at him. And maybe some people did not like him telling them, "Allāh is going to send a flood to the earth, repent!" They probably thought, "What?! A flood?! What are you talking about?!" But the truth was, Allāh indeed had promised to send a flood upon the earth.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>The Flood</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      "We sent Nūḥ to his people... but they called him a liar. We saved him, and those who were with him, on the Ark and We drowned those who rejected Our revelations."
    {' '}<span className='vitalic'>( Al-Aʿrāf 7:59,64)</span>
    </p>
  </div>

  <div className="main_text">
    <p>
      Finally, when the time came, Allāh (s.w.t.) said to Nūḥ (a.s.): "Go, take your family and enter the boat. I have not found any righteous men on the earth besides you.
    </p>

    <p>
      Take seven pairs of every halal (clean) animal and bird with you, and one pair from the unclean animals—a male and female of each—so that the birds and animals will survive.
    </p>

    <p>
      In seven days from now, I will send rain for forty days and forty nights on the earth, and I will wipe out all the living beings that I have created on the earth".
    </p>

    <p>Nūḥ (a.s.) did all the commands of Allāh (s.w.t.) as he was told.</p>

    <p className="cursor-pointer" onClick={() => toggleBubble('bubble2')}>
      He took his wife,<sup>2</sup> sons and his daughters-in-law and got on the boat<sup>3</sup> in order to be saved from the flood.
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>2</sup> The Qurʾān al-Karīm does not tell us when the wife was judged by Allāh (s.w.t.) <span className="boldItalic">"Allāh has given examples of disbelievers: the wives of Nūḥ and Lūṭ who married two of Our righteous servants but betrayed them. Their husbands could not help them against Allāh: it was said, ‘Both of you enter the Fire with the others.’"</span> ( Al-Taḥrīm 66:10)
        </p>

        <p>
          <sup>3</sup> Nūḥ (a.s.) said, <span className="boldItalic">"Get on the boat. In the name of Allāh it shall sail and anchor. My God is most forgiving and merciful."</span> ( Al-Hūd, 11:41).
        </p>
      </div>
    )}

  </div>
  <div className="main_text">
    
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble3')}>
      As Allāh had said, big and small animals and birds of every kind came to Hazrat Nūḥ in pairs<sup>4</sup>—male and female—and entered the boat.
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>4</sup> See Al-Hūd 11:40.
        </p>
      </div>
    )}

  </div>
  <div className="main_text">
    
    <p className="cursor-pointer" onClick={() => toggleBubble('bubble4')}>
      After that, Allāh closed the door of the boat. Then .... the flood began! All the springs in the earth gushed out. The gates of the sky were opened, and strong rain fell on the earth for forty days and forty nights.<sup>5</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
        <p>
          <sup>5</sup> Al-Ṭabarī: "<span className="vitalic">Tarīkh</span>", book 1, page 94; al-Zamakhsharī: "<span className="vitalic">Kashshāf</span>", book 4, page 37.
        </p>
      </div>
    )}

    <p>
      At this time Hazrat Nūḥ was sitting inside the boat with his family: his wife, his sons Shīm, Ḥām, Yāfit, and their wives. At that time Hazrat Nūḥ was six hundred years old.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>Did all the rest die?</p>
  </div>

  <div className="main_text">
    <p className="boldItalic">
      "So We opened the gates of the sky with torrential water, burst the earth with gushing springs: the waters met for a preordained purpose. We carried him along on a vessel of planks and nails."
    </p>
    <p>( Al-Qamar 54:11-13).</p>
  </div>

  <div className="main_text">
    <p>The flood of waters continued for forty days. As the water increased, it raised the boat high above the ground.</p>

    <p>Eventually the level of the water became so high that even the highest mountains were below the water.</p>

    <p className="cursor-pointer" onClick={() => toggleBubble('bubble5')}>
      There was so much water that it rose fifteen dhirāʿs<sup>6</sup> above the peaks of the mountains.
    </p>

    {openBubbles['bubble5'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble5')}>
        <p>
          <sup>6</sup> "elbows", about 75 centimeters. See the works of al-Ṭabarī, al-Thaʿlabī and al-Qurṭubī.
        </p>
      </div>
    )}

    <p>Everything that lives on the ground died: animals, birds and humans. Indeed, all the creatures that breathe air perished.</p>

    <p>
      Allāh destroyed all life on the land — from humans to animals, from moving creatures on the ground to birds that fly on the sky. Only Hazrat Nūḥ and those who went into the boat with him were left alive.
    </p>

    <p className="vitalic">
      Why would Allāh (swt) decree that Bānī Ādam should perish in a great flood? Perhaps a better question is why Bānī Ādam would not listen to the daʿwa of Hazrat Nūḥ. Did he not warn them, "Because of oppression and violence, Allāh (swt) will destroy all living things on the earth. Repent and help me build the boat that He has ordered." But they preferred oppression and violence. They would not abandon their evil ways. They did not want to worship Allāh, but instead wanted to defy Him.
    </p>

    <p className="vitalic">
      How are you responding to the violence and oppression that you face? Do you seek a place of refuge in the Creator's plan for your life? Or do you join those who oppress others and celebrate violence? Which "boat" will you enter?
    </p>
  </div>
</main>
  );
}