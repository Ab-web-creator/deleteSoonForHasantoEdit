'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function MoreShariahLaws() {
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
      “We gave Musa the Book and made it a guidance for the Children of
      Isra’il, saying:
      <span className="vitalic">
        {' '}
        ‘Take none besides Me as your Protector.’
      </span>
      ” (Surah al-Isra’ 17:2).
    </p>

    <p>
      Among the commands Allah gave to Prophet Musa عليه السلام at that time
      were instructions concerning sacrifices offered as atonement for sin:
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble1')} className="cursor-pointer">
      “Tell the Children of Isra’il,” Allah said to Prophet Musa عليه السلام,
      “that whoever wishes to offer a sacrifice should bring a bull, a sheep,
      or a goat. The animal must be without defect, free from blemish, and
      male. If he desires that his sacrifice be accepted, let him bring it
      before the entrance of the Sacred Tent and place his hand upon the head
      of the animal. Then I shall make the death of the sacrifice an atonement
      <sup>1</sup>{' '}
      for his sins and transgressions.”
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          The word “atonement” literally carries the meaning of “covering.”
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>THE LAW CONCERNING THEFT</p>
  </div>

  <div className="main_text">
    <p>
      “If anyone betrays a trust, appropriates another person’s property, or
      finds something that was lost and lies about it, he becomes guilty of
      sin. He must restore what he has taken and add one-fifth of its value as
      compensation to the owner. Then he shall bring an unblemished ram as a
      sacrifice for his sin. Through the death of the sacrifice, his sin shall
      be forgiven.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>CLEAN AND UNCLEAN ANIMALS</p>
  </div>

  <div className="main_text">
    <p>
      “Among animals, those that both chew the cud and have completely split
      hooves are lawful for you. If an animal chews the cud but does not have
      split hooves, do not eat it. For example, camel meat is forbidden for
      you, because the camel chews the cud but does not possess split hooves.
      Likewise, the pig has split hooves but does not chew the cud; therefore
      its meat is forbidden.
    </p>

    <p>
      Creatures that live in water and possess both fins and scales are lawful
      for you and may be eaten. Do not eat aquatic creatures that lack fins or
      scales.
    </p>

    <p>
      Among birds, the eagle, vulture, kite, falcon, raven, ostrich, owl,
      seagull, hawk, eagle owl, carrion birds, ibis, swan, pelican, osprey,
      stork, heron, hoopoe, and bat are forbidden for you.
    </p>

    <p>
      Among flying insects, those that do not have jointed legs for hopping are
      forbidden. Locusts and other hopping insects with jointed legs are lawful
      for you.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble2')} className="cursor-pointer">
      “Animals that walk on paws<sup>2</sup>{' '}
      are forbidden for you, as are creatures such as moles, mice, lizards,
      and other crawling animals.”
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>{' '}
          That is, animals belonging to families such as the canine and feline
          species.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>DO NOT CONSUME BLOOD</p>
  </div>

  <div className="main_text">
    <p>
      “Whether native-born or foreigner, anyone among you who consumes blood
      shall be cut off from the community. I will turn My face away from such a
      person. For the life of every creature is in its blood. Through blood,
      atonement is made for life. Therefore, let no one eat anything with its
      blood still in it.
    </p>

    <p>
      If you hunt a bird or an animal, first drain out its blood and cover it
      with earth. For the life of every living creature is in its blood.
      Whoever consumes blood shall be removed from among the people.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>LAWS CONCERNING SEXUAL RELATIONS</p>
  </div>

  <div className="main_text">
    <p>
      “Behold, I am bringing you out of Egypt and leading you into the land of
      Canaan. You belong to Me. Do not imitate the sinful practices of the
      Egyptians or the Canaanites. Keep My commands, for the one who obeys them
      shall find blessing in life.
    </p>

    <p>
      Let no one among you have relations with close relatives:
    </p>

    <p>
      Do not have relations with your mother. She is your father's honor, and
      by doing so you violate your father's dignity.
    </p>

    <p>
      Do not have relations with your father's wife, for she belongs to your
      father.
    </p>

    <p>
      Do not have relations with your sisters, whether through your father or
      your mother.
    </p>

    <p>
      Do not have relations with your granddaughters, for they are your own
      flesh and blood.
    </p>

    <p>
      Do not have relations with your aunts, for they are close blood relatives.
    </p>

    <p>
      Do not have relations with your uncle's wife, for this dishonors your
      uncle.
    </p>

    <p>
      Do not have relations with your daughter-in-law, for she is your son's
      lawful wife.
    </p>

    <p>
      Do not have relations with your brother's wife, for this dishonors your
      brother.
    </p>

    <p>
      Do not have relations both with a woman and with her daughter or
      granddaughter. Such conduct is shameful.
    </p>

    <p>
      Do not marry your wife's sister while your wife is still living.
    </p>

    <p>
      Do not have relations with your wife during her monthly cycle.
    </p>

    <p>
      Do not defile yourself with another man's wife.
    </p>

    <p>
      A man must not have relations with another man. This is an abomination in
      the sight of Allah.
    </p>

    <p>
      Never have relations with animals. Such acts are unnatural{' '}
      <span className="vitalic">(that is, corruption and perversion).</span>
    </p>

    <p>
      Do not defile yourselves with any of these practices. The peoples of
      Canaan have filled their land with such sins. They even sacrifice their
      sons and daughters to idols by fire. Therefore I shall judge them and
      drive them from the land. But you must guard My commands as the apple of
      your eye. These laws apply equally to you and to the foreigners living
      among you.
    </p>

    <p>
      Be holy, for I, your Lord, am holy.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>SOME OTHER LAWS</p>
  </div>

  <div className="main_text">
    <p>
      When harvesting your fields, do not reap all the way to the edges. When
      gathering grapes, do not return to collect what remains. Leave the fallen
      grapes for the poor and for travelers, for all of you are My people.
    </p>

    <p>
      Do not steal. Do not lie. Do not deceive one another.
    </p>

    <p>
      Do not swear falsely by My Name, thereby dishonoring it. I am your Lord.
    </p>

    <p>
      Do not take what belongs to another. Do not oppress people. Pay laborers
      their wages without delay.
    </p>

    <p>
      Do not curse the deaf or place obstacles before the blind. Fear Allah.
    </p>

    <p>
      Judge fairly. Do not favor the poor because they are poor, nor the rich
      because they are rich. Even your closest relative must be judged with
      justice.
    </p>

    <p>
      Do not spread slander among the people. Do not become responsible for
      another person's death. Judgment belongs to Me.
    </p>

    <p>
      Do not harbor hatred in your hearts. If someone begins walking the path
      of sin, warn him openly; otherwise you too may share in the guilt.
    </p>

    <p>
      Do not seek revenge. Let love, not anger, rule among you. Love your
      neighbor as you love yourself. You have entered into covenant with Me, so
      obey My commands.
    </p>

    <p>
      Do not consume anything with its blood. Do not practice divination or
      sorcery.
    </p>

    <p>
      Do not turn your daughters into prostitutes, lest the land become filled
      with immorality and corruption.
    </p>

    <p>
      Do not seek out sorcerers or those who claim to communicate with spirits,
      for such things defile you.
    </p>

    <p>
      Rise in the presence of the elderly and show honor to those advanced in
      years. Otherwise, you dishonor Me.
    </p>

    <p>
      Do not mistreat foreigners living among you. Love them as yourselves, for
      you too were once strangers in Egypt.
    </p>

    <p>
      Do not use dishonest measures, weights, or scales. Let all your measures
      be accurate and just. I brought you out of Egypt, and you belong to Me.
      Therefore obey all My laws and decrees.
    </p>
  </div>
</main>
  );
}