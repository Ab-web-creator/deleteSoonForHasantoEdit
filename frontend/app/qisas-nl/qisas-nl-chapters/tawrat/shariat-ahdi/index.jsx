'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function ShariahRevealed() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble4',
    'bubble5',
  ]);

  return (
   <main className="stories relative">
  <div className="main_text">
    <p className="boldItalic">
      “Indeed, Allah commands justice, excellence, and generosity toward
      relatives, and He forbids immorality, wrongdoing, and oppression. He
      admonishes you so that you may take heed. And fulfill the covenant of
      Allah when you have pledged it. Do not break your oaths after confirming
      them, for you have made Allah your guarantor. Surely Allah knows all that
      you do.”
      <span className="vitalic"> (An-Nahl 16:90–91).</span>
    </p>
  </div>

  <div className="paragraph_heading">
    <p>A Call to the Covenant of Ibrahim</p>
  </div>

  <div className="main_text">
    <p>
      Two months after leaving Egypt, the Children of Isra’il arrived under the
      guidance of Allah in the wilderness of Sinai, at the mountain in the
      Valley of Tuwa, and made camp at its foot.
    </p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble1')}
      className="cursor-pointer"
    >
      Musa عليه السلام ascended the mountain to receive guidance from Allah.
      There he heard:
      “Behold, I have brought you safely out of Egypt, out of the house of
      slavery. Now you belong to Me. If you listen to My words and remain
      faithful to the covenant I made with Ibrahim عليه السلام, you shall be
      My treasured possession among all peoples. Yes, the whole earth belongs
      to Me, but you shall be My holy kingdom. You shall share knowledge and
      guidance with all nations.
      <sup>1</sup>{' '}
      Go now and convey these words to the people.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          In Surah al-Ma’idah, verse 20, Musa عليه السلام says to his people:
          “O my people, remember Allah’s favor upon you. He raised prophets
          among you, made you rulers, and granted you what He had not granted
          to anyone else among the worlds.”
        </p>
      </div>
    )}

    <p className="vitalic">
      When Allah made His covenant with Ibrahim عليه السلام, He promised:
      “Your descendants will live as strangers in a foreign land for four
      hundred years, but afterward I shall bring them out.”
      Now, after many centuries, that promise had finally come to pass. The
      Children of Isra’il had become heirs of the Covenant, People of the Book,
      and were meant to guide all nations toward the light of Allah.
    </p>

    <p>
      Musa عليه السلام then descended from the mountain and summoned the
      elders. He conveyed the call of Allah to them, and all of them answered
      with one voice:
      “We will do everything that Allah has commanded.”
    </p>

    <p className="vitalic">
      In other words, the Children of Isra’il pledged themselves to the
      friendship covenant that Allah had established with Ibrahim عليه السلام.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>“Prepare for the Meeting”</p>
  </div>

  <div className="main_text">
    <p>
      Then Allah said to Musa عليه السلام:
      “Let the people purify themselves today and tomorrow. Let them wash their
      garments and prepare for the third day. On the third day I shall reveal
      My signs upon Mount Sinai before the eyes of all the people.
    </p>

    <p>
      “Set boundaries around the mountain. Warn everyone not to approach it.
      Whoever steps upon the mountain must be put to death — whether by
      stoning or by arrows. Let no human hand touch him. Whether man or beast,
      he must not be allowed to live. Only when the sound of the trumpet
      continues for a long time may the people approach the mountain.”
    </p>

    <p>
      The Messenger of Allah descended and told the people:
      “Wash your garments and purify yourselves. Let no man approach his wife.
      Prepare yourselves for the third day.”
    </p>

    <p>
      On the morning of the third day, lightning flashed and thunder roared.
      A thick cloud covered the mountain, and the sound of a mighty trumpet was
      heard from every direction. Everyone in the camp trembled with fear.
    </p>

    <p>
      Musa عليه السلام then led the people out of the camp and brought them to
      the foot of the mountain to meet with Allah. The mountain shook
      violently. Allah had covered it with fire. Thick smoke rose toward the
      heavens, while the trumpet blasts grew louder and louder.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>The Encounter with Allah</p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble2')}
      className="boldItalic cursor-pointer"
    >
      “We gave Musa the Book so that they might believe in the meeting with
      their Lord.”
      <span className="vitalic">
        {' '}
        (Al-An‘am 6:154).
        <sup>2</sup>
      </span>
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          The full verse reads:
          <span className="boldItalic">
            {' '}
            “Then We gave Musa the Book as a completion of Our favor upon the
            one who did good, an explanation of all things, and guidance and
            mercy, so that they might believe in the meeting with their Lord.”
          </span>
        </p>

        <p className="MarginTop10px">
          <sup>3</sup>{' '}
          The people below could hear the words of Allah. In this way they were
          once again assured that Musa عليه السلام had truly been appointed by
          Allah as their leader.
        </p>
      </div>
    )}
  </div>

  <div
    className="main_text cursor-pointer"
    onClick={() => toggleBubble('bubble2')}
  >
    <p>
      Then Allah ﷻ spoke these words to Musa عليه السلام for the Children of
      Isra’il:
      <sup>3</sup>
    </p>

    <p>
      “I am al-Qayyum. I am your Lord who brought you out of Egypt, out of the
      house of slavery.
    </p>

    <p>
      “Do not worship any gods besides Me. Do not make for yourselves idols in
      the likeness of anything in the heavens above, on the earth below, or in
      the waters beneath. Do not bow down to them or worship them.
    </p>

    <p>
      “For I am a jealous God. The consequences of rejecting Me may reach even
      to the third and fourth generation, but My mercy never departs from those
      who love Me and obey My commands.
    </p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble4')}
      className="cursor-pointer"
    >
      “Do not take My Name in vain.
      <sup>4</sup>{' '}
      I am your Lord. Whoever misuses My Name shall not go unpunished.”
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>{' '}
          Literally, the original wording means:
          “Do not lift up My Name falsely or for nothing.”
          Since Allah is Holy, His Name is also holy. Therefore His Name must
          always be spoken with reverence. Do not use it for empty speech or
          falsehood. Do not use it for personal gain. Even the phrase “Alhamdulillah”
          loses its meaning if spoken without gratitude in the heart.
        </p>
      </div>
    )}

    <p>“Honor the sanctity of the Day of Rest.”</p>

    <p>
      “Honor your father and mother, so that your days may be long in the land
      I am giving you.”
    </p>

    <p>“Do not murder.”</p>

    <p>“Do not betray the marriage covenant.”</p>

    <p>“Do not take what belongs to another unjustly.”</p>

    <p>“Do not bear false witness.”</p>

    <p>
      “Do not covet your neighbor’s house, wife, servants, ox, donkey, or
      anything that belongs to another.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE CHILDREN OF ISRA’IL DID NOT DESIRE CLOSENESS TO ALLAH</p>
  </div>

  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble5')}
      className="cursor-pointer"
    >
      The people were overwhelmed with fear. The thunder, the trumpet blasts,
      and the terrifying flashes of lightning filled them with dread.
      They pleaded with the Messenger of Allah:
      “You speak to us yourself, and we will listen. But let Allah not speak to
      us, lest we die!”
      For they did not wish to ascend the mountain or enter into direct
      communion with Allah.
      <sup>5</sup>
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>{' '}
          The Qur’an says:
          “We gave them clear proofs concerning the matter, but they differed
          only after knowledge had come to them, out of mutual envy and
          hostility. Surely your Lord will judge between them on the Day of
          Resurrection concerning that over which they differed.”
          (45:17).
        </p>
      </div>
    )}

    <p>
      “Do not be afraid,” said Musa عليه السلام.
      “Why are you frightened? This is only a test. Allah has shown you these
      signs so that you may turn away from sin.”
    </p>

    <p>
      Yet the people refused to come near and continued watching from a
      distance.
    </p>

    <p>
      Then Allah called Musa عليه السلام back to the mountain:
      “Go and warn the people not to cross the boundary.
      Whoever approaches in order to see shall perish.
      I will now appoint priests from among your people.
      Yet even they must purify themselves before approaching Me.
      Go down now and bring Harun with you.”
    </p>

    <p className="vitalic">
      Thus the Children of Isra’il refused the invitation to meet Allah and to
      live in close communion with Him. For this reason, Allah granted them
      another covenant — the covenant of the Sacred Law, together with its
      commands and regulations.
    </p>
  </div>
</main>
  );
}