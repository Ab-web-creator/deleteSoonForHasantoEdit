'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function EgyptPlagues() {
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
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p>
      Then Allah said to Musa عليه السلام:
      “Go once again to Pharaoh and tell him to let the Children of Isra’il go.
      When Pharaoh asks for a miracle, Harun should cast down his staff before
      him. The staff will turn into a serpent.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE STAFF TURNS INTO A SERPENT</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          “Then he cast it down, and suddenly it became a clear serpent.
          Then he drew forth his hand, and behold, it appeared white to the
          onlookers.”
          <span className="vitalic"> (Al-A‘raf 7:107–108).</span>
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble1')}
    >
      Thus Musa and Harun عليهما السلام returned once more to Pharaoh.
      As Allah had foretold, Pharaoh demanded a miracle. Harun عليه السلام
      threw down his staff before Pharaoh. Instantly the staff turned into a
      serpent.
      <sup>1</sup>
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
          See Ash-Shu‘ara 26:37.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble2')}
    >
      When Pharaoh witnessed the miracle, he summoned the scholars and
      magicians of his court.
      <sup>2</sup>{' '}
      The Egyptian magicians also cast down their staffs and turned them into
      serpents.
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
          Al-A‘raf 7:117.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble3')}
    >
      But Harun’s serpent was stronger than theirs. It swallowed every staff
      the Egyptians had thrown down — that is, all of the serpents.
      <sup>3</sup>
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>{' '}
          According to the Qur’an, some of the magicians fell down in
          prostration when they witnessed Allah’s miracle
          (see Ta-Ha 20:70). Pharaoh, however, still refused to submit to Allah.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble4')}
    >
      Yet Pharaoh remained stubborn and, just as Allah had warned Musa
      عليه السلام beforehand, refused to let the Children of Isra’il go.
      <sup>4</sup>
    </p>

    <p>
      At that time Musa عليه السلام was eighty years old, while Harun
      عليه السلام was eighty-three.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FIRST PLAGUE</p>
  </div>

  <div className="main_text">
    <p>
      “Pharaoh’s heart is still hardened and he refuses to release My people,”
      Allah said to Musa عليه السلام.
      “Tomorrow, when he goes down to the river, meet him by the Nile. Carry in
      your hand the staff that became a serpent.
    </p>

    <p>
      Say to him:
      ‘Allah has sent me to you once again. He commanded you to let His people
      go, yet you have not obeyed. Therefore He is about to send a calamity
      upon your land. I shall strike the Nile with my staff, and the river will
      turn into blood. Then you will know the power of Allah.’
    </p>

    <p>
      As soon as your staff touches the water, it will become blood. All the
      fish will die, the river will stink, and the Egyptians will not be able
      to drink a single drop of its water. Then tell Harun to stretch out his
      staff over all the rivers, streams, canals, and pools of Egypt. Their
      waters too will become blood — even the water stored inside jars in
      people’s homes.”
    </p>

    <p>
      Musa and Harun عليهما السلام did exactly as Allah commanded. The Nile
      turned into blood. The fish died and the water became foul. The Egyptians
      could no longer drink from the river. Throughout Egypt every body of
      water had become blood. Then the Egyptian magicians also turned water
      into blood through their sorcery.
    </p>

    <p>
      Seeing this, Pharaoh hardened his heart once again and, just as Allah had
      foretold, refused to let the Children of Isra’il go. He paid no heed to
      Allah’s power.
    </p>

    <p>
      The Egyptians began digging wells along the riverbanks in search of
      drinking water, for blood flowed where water had once been.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE SECOND PLAGUE</p>
  </div>

  <div className="main_text">
    <p>
      A week passed. Then Allah ﷻ said to Musa عليه السلام:
    </p>

    <p>
      “Go to Pharaoh and tell him:
      ‘Allah commands: Let My people go. Otherwise I will fill the Nile with
      frogs. The frogs will come up out of the river and invade the homes of
      your people and officials. Your palace, your bedroom, your beds, and even
      your kneading bowls will be filled with frogs.’”
    </p>

    <p>
      But Pharaoh still refused to listen. Then Allah said to Musa عليه السلام:
      “Tell Harun to stretch out his staff over the rivers and lakes. Let Egypt
      be filled with frogs.”
    </p>

    <p>
      And so it happened. Yet the Egyptian magicians used their sorcery to do
      the same thing, bringing frogs from the water onto the land. Frogs
      covered everything. Finally Pharaoh summoned Musa and Harun عليهما السلام:
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — Pray to Allah and ask Him to remove the frogs from us. Then I will
      permit you to go into the wilderness and worship.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — You may choose the time yourself, — replied Musa عليه السلام.
      — When shall I pray for you?
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — Tomorrow, — said Pharaoh.
    </p>
  </div>

  <div className="main_text">
    <p className="!my-0">
      — Very well, it shall be as you have said, — replied the Messenger of
      Allah. — Then you will know that none is equal to our Lord Allah.
    </p>
  </div>

  <div className="main_text">
    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>{' '}
          Tha‘labi, <span className="vitalic">‘Arais</span>, pp. 193–194.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble5')}
    >
      The next day the prayer of Musa عليه السلام was answered. Every frog
      upon the land died. The Egyptians gathered them into great heaps, and the
      entire country stank. Yet when Pharaoh saw that the frogs were gone, he
      hardened his heart once more and did not keep his promise.
      <sup>5</sup>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE THIRD PLAGUE</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble6'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble6')}
      >
        <p>
          <sup>6</sup>{' '}
          In the Qur’an this creature is called
          <span className="vitalic"> qummal </span>
          (Al-A‘raf 7:133). Scholars differ concerning its precise meaning.
          Many translators render it as “lice.” ‘Abdur-Rahman ibn Zayd ibn
          Aslam interpreted it as “fleas,” while Ibn ‘Abbas رضي الله عنه
          described it as a small insect that emerges from grain. The Hebrew
          term in the Torah likewise carries several possible meanings,
          including lice, fleas, and flies.
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble6')}
    >
      Then Allah said to Musa عليه السلام:
      “Tell Harun to strike the earth with his staff. Let the dust of the
      ground become fleas throughout Egypt.”
      And so it happened. Harun عليه السلام struck the ground with his staff,
      and the dust throughout Egypt became fleas
      <sup>6</sup>{' '}
      that tormented both people and animals.
    </p>

    <p>
      The Egyptian magicians tried to do the same but failed. Then they said to
      Pharaoh:
      “This is the finger of God.”
    </p>

    <p>
      Yet Pharaoh’s heart remained hard, and just as Allah had said, he refused
      to let the Children of Isra’il go.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE FOURTH PLAGUE</p>
  </div>

  <div className="main_text">
    {openBubbles['bubble7'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble7')}
      >
        <p>
          <sup>7</sup>{' '}
          According to the Torah, Allah said:
          “In this way I will make a distinction between My people and your
          people.”
        </p>
      </div>
    )}

    <p
      className="cursor-pointer"
      onClick={() => toggleBubble('bubble7')}
    >
      “Rise early tomorrow and meet Pharaoh by the river,” Allah said to Musa
      عليه السلام.
      “Tell him:
      ‘Let My people go, otherwise Allah will fill your homes with swarms of
      flies. Every place inhabited by the Egyptians will be overrun. But in the
      land of Goshen, where the Children of Isra’il live, there will be no
      flies. Then you will know that the owner of this land is not you, but
      Allah.
      <sup>7</sup>{' '}
      This sign will come to pass tomorrow.’”
    </p>

    <p>
      Everything happened exactly as Allah had said. Pharaoh’s palace and the
      houses of his nobles were filled with swarms of flies. They covered the
      land and made life miserable.
    </p>

    <p>
      At last Pharaoh could endure it no longer and summoned Musa and Harun
      عليهما السلام.
    </p>
  </div>

  {/* Continue with the same style for the remaining plagues:
      Fifth (Livestock Pestilence),
      Sixth (Boils),
      Seventh (Hail),
      Eighth (Locusts),
      Ninth (Darkness),
      preserving all speech bubbles and references. */}
</main>
  );
}