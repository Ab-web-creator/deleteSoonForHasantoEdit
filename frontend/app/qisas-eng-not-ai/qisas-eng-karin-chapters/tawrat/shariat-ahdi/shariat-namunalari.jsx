'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function ShariahLaws() {
  const { openBubbles, toggleBubble } = useSpeechBubbles(['bubble1']);

  return (
   <main className="stories relative">
  <div className="main_text">
    <p
      onClick={() => toggleBubble('bubble1')}
      className="cursor-pointer"
    >
      If a person strikes another with the intention of killing him and he
      dies, that person shall be sentenced to death. But if the death was
      accidental, he shall not receive the death penalty.
      <sup>1</sup>
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>{' '}
          Under the law of the Torah, a person who accidentally caused another's
          death could flee to designated cities of refuge, where he would be
          protected from the revenge of the victim’s family.
        </p>
      </div>
    )}

    <p>
      Whoever strikes or curses his father or mother shall be put to death.
    </p>

    <p>
      Whoever kidnaps a person, whether he sells him or not, deserves the death
      penalty.
    </p>

    <p>
      If two people quarrel and one strikes the other with a stone or with his
      fist, causing injury, but the injured person later recovers and walks
      again, the attacker shall not be punished. However, he must compensate
      the injured man for the time lost from work and pay all medical expenses
      until he is fully healed.
    </p>

    <p>
      If people are fighting and a pregnant woman is struck, causing her child
      to be born prematurely, but neither mother nor child suffers serious
      harm, the guilty party shall pay a fine determined by the woman's husband
      and approved by the judge.
    </p>

    <p>
      But if serious injury occurs, then the judgment shall be:
      life for life, eye for eye, tooth for tooth, hand for hand, foot for
      foot, burn for burn, bruise for bruise, and wound for wound.
    </p>

    <p className="vitalic">
      To better understand this law, imagine the following situation.
      Suppose your son strikes the child of a wealthy man or a powerful ruler
      and blinds him in one eye. What do you think that father might want to
      do? He may say, “I will kill him!” Or perhaps, “I will take both his
      eyes!”
      This law places limits on punishment. One eye may only be repaid with one
      eye. If a single tooth is broken, only one tooth may be demanded in
      return. Otherwise, people might say, “I will knock out all his teeth!”
      Yet forgiveness remains better and more noble.
    </p>

    <p>
      If someone’s ox gores a man or woman to death, the ox shall be stoned,
      and its meat must not be eaten. The owner shall not be held guilty.
      However, if people had previously warned the owner that the ox was
      dangerous and he failed to restrain it properly, then both the ox and its
      owner shall be put to death. If a ransom is demanded instead, the owner
      may pay the amount and save his life. The same ruling applies if the ox
      kills a child.
    </p>

    <p>
      If a man digs a pit and fails to cover it, and another person's donkey or
      livestock falls into it and dies, the one who dug the pit must compensate
      the owner for the animal. The dead animal, however, remains his property.
    </p>

    <p>
      If one man's ox gores another man's ox and kills it, they shall sell the
      living ox and divide the money between them. They shall also divide the
      dead animal. But if the owner knew that his ox had a habit of goring and
      failed to restrain it, he must replace the dead ox in full. The carcass
      of the dead animal then belongs to him.
    </p>

    <p>
      Whoever steals an ox or a sheep and either slaughters it or sells it must
      repay five oxen for one ox and four sheep for one sheep.
    </p>

    <p>
      If the stolen animal is found alive in the thief’s possession, he must
      repay double. If he cannot make restitution, he shall be sold into
      servitude to cover the debt.
    </p>

    <p>
      If a thief is struck and killed while breaking into a house at night, the
      person who killed him is not guilty. But if it happens during daylight,
      the killer shall be considered guilty of bloodshed.
    </p>

    <p>
      If someone's livestock enters another person's field or vineyard and
      causes damage, the owner must compensate from the best produce of his own
      field or vineyard.
    </p>

    <p>
      If a person kindles a fire and it spreads, burning another person's grain
      or crops, he must pay full compensation.
    </p>

    <p>
      If you entrust money or property to someone and a thief steals it, the
      thief, when found, must repay double. If the thief is not found, the
      owner of the house shall swear before Allah that he did not steal the
      entrusted property.
    </p>

    <p>
      If you entrust an ox, donkey, sheep, or any other animal to someone and
      the animal dies, is injured, or is taken away without witnesses, the
      person entrusted with it shall swear before Allah:
      “I have not acted dishonestly.”
      The owner shall accept the oath and demand no compensation.
      But if the animal was stolen, compensation must be paid.
      If it was killed by a wild beast, evidence of the remains must be shown,
      and no compensation is required.
    </p>

    <p>
      If you borrow another person's animal and it is injured or dies while in
      your care, you must pay compensation. However, if the owner was present
      when it happened, compensation is not required. If the animal was rented,
      the rental payment alone covers the loss.
    </p>

    <p>
      If a man seduces an unmarried girl and violates her chastity, he must pay
      the bridal gift and marry her. If her father refuses to give her in
      marriage, the man must still pay the customary bridal price as
      compensation.
    </p>

    <p>
      Those who practice sorcery and witchcraft shall receive the death
      penalty.
    </p>

    <p>
      Whoever engages in relations with an animal is deserving of death.
    </p>

    <p>
      Do not mistreat or oppress foreigners, for you yourselves were strangers
      in Egypt.
    </p>

    <p>
      Do not abuse widows or orphans. If you oppress them, they will cry out to
      Me, and I will surely hear their cry. My anger will burn against you.
      Your wives will become widows and your children orphans.
      Therefore do not harm them.
    </p>

    <p>
      Be generous toward your poor brothers. Do not harden your hearts against
      them. If someone asks for a loan, provide enough to meet his need. Do not
      charge interest on what you lend.
    </p>

    <p>
      Do not begrudge lending your money, for Allah will bless all the work of
      your hands.
    </p>

    <p>
      If you take a person's cloak as collateral, return it before sunset. It
      may be the only covering he possesses. What will he wrap himself in while
      sleeping? If he cries out to Me, I will hear him, for I am a God of mercy.
    </p>

    <p>
      Do not speak evil against Allah. Do not curse those who govern and lead
      the people.
    </p>

    <p>
      Do not spread false reports. Do not assist wrongdoers by giving false
      testimony.
    </p>

    <p>
      Do not join in wrongdoing even if the majority does so. When judging a
      case, do not follow the crowd into injustice. Likewise, do not favor a
      poor man simply because he is poor, nor deny anyone his rightful due.
    </p>

    <p>
      If you find your enemy's lost ox or donkey, return it to him.
    </p>

    <p>
      If you see the donkey of someone who hates you collapsed under its load,
      do not leave it there. Help him lift the animal and set it back on its
      feet.
    </p>

    <p>
      Do not participate in false accusations. Never have a hand in condemning
      innocent people to death. Whoever does such things will not escape My
      judgment.
    </p>

    <p>
      Do not accept bribes. For a bribe blinds those who can see and twists the
      cause of the righteous.
      <span className="vitalic">
        {' '}
        (In other words, it turns a seeing person into one who cannot see.)
      </span>
    </p>

    <p>
      Do not mistreat foreigners. You know what it means to live as strangers,
      for you yourselves were strangers in Egypt. In matters of justice, apply
      the same standard both to foreigners and to your own people.
    </p>

    <p>
      Whenever a person is sentenced to death, there must be at least two or
      three witnesses. Never decide such a matter on the testimony of a single
      witness.
    </p>

    <p>
      The witnesses themselves shall cast the first stones, and afterward the
      entire community shall carry out the sentence. In this way you will
      remove wickedness from among yourselves.
    </p>

    <p>
      Sow your fields and gather their produce for six years. But in the
      seventh year let the land rest. Do not cultivate it. Let the poor eat
      from whatever grows naturally, and let what remains be left for the wild
      animals. Do the same with your vineyards and olive groves.
    </p>

    <p>
      Work for six days, but rest on the seventh. Let your ox and donkey rest,
      and let your servants and the foreigners living among you also enjoy
      refreshment.
    </p>

    <p>
      My angel will lead you into the land of the Amorites, Hittites,
      Perizzites, Canaanites, Hivites, and Jebusites. When you enter and take
      possession of their land, do not bow down to their gods, serve them, or
      imitate their practices. Instead, destroy their idols and break down
      their sacred stones completely.
    </p>

    <p>
      For you belong to Me. If you worship Me, I will bless your provision and
      sustenance and protect you from every sickness.”
    </p>
  </div>
</main>
  );
}