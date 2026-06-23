'use client';


import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function FightWithAngel() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
  ]);

  return ( 
<main className="stories relative">
  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble1')}
    >
      Ya‘qub عليه السلام continued his journey.
      <sup>1</sup>{' '}
      At that time, his twin brother, Esau رضي الله عنه,
      was living in the land of Edom, in a place called Seir.
    </p>

    {openBubbles['bubble1'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble1')}
      >
        <p>
          <sup>1</sup>
          During this journey, Prophet Ya‘qub عليه السلام saw the angels of Allah
          and named that place Mahanaim.
        </p>
      </div>
    )}
  </div>

  <div className="paragraph_heading">
    <p>SENDING MESSENGERS TO HIS BROTHER</p>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub عليه السلام sent messengers ahead to his brother and instructed
      them:
      “Go to my brother and say:
      ‘Your servant Ya‘qub has sent us. Until now he has been living in the
      household of your uncle Laban. Allah has blessed him with livestock,
      donkeys, sheep, goats, servants, and maidservants. He is now returning
      to the land of his father. He has sent us ahead to inform you, hoping
      that you will show him kindness and mercy.’”
    </p>

    <p>
      The messengers returned and said:
      “We met your brother. He is on his way here with four hundred men.”
    </p>

    <p>
      Ya‘qub عليه السلام became afraid. Thinking,
      “If my brother attacks, at least one group may survive,”
      he divided his people and livestock into two camps.
    </p>

    <p>
      Then he fell to his knees and supplicated:
      “O Allah! God of my grandfather Ibrahim and my father Ishaq!
      You told me:
      ‘Return to your homeland, and I shall bless you.’
      I am not worthy of all the loyalty, mercy, and kindness You have shown me.
      When I left home, I possessed nothing but my staff.
      Now I have become two great camps.
      O Allah, I beg You, save me from my brother.
      I fear that he may attack and destroy me, my wives, and my children.
      Yet You promised me:
      ‘I shall bless you and make your descendants as numerous as the sand of
      the sea.’”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>GIFTS PREPARED FOR ESAU</p>
  </div>

  <div className="main_text">
    <p>
      That evening Ya‘qub عليه السلام selected from his livestock
      two hundred female goats, twenty male goats,
      two hundred sheep, twenty rams,
      thirty camels with their young,
      forty cows, ten bulls,
      twenty female donkeys, and ten male donkeys
      as a gift for his brother Esau رضي الله عنه.
    </p>

    <p>
      He divided the animals into separate herds and entrusted each herd to a
      servant, saying:
      “Go ahead of me and keep some distance between the herds.”
    </p>

    <p>
      To the first servant he said:
      “When my brother Esau meets you and asks:
      ‘Whose servant are you? Where are you going? Whose animals are these?’
      you shall answer:
      ‘They belong to your servant Ya‘qub.
      He has sent them as a gift to his master Esau.
      He himself is coming behind us.’”
    </p>

    <p>
      He gave the same instructions to all the other servants:
      “Say the same thing when you meet my brother.
      And do not forget to add:
      ‘Your servant Ya‘qub is coming behind us.’”
      Ya‘qub عليه السلام hoped that these gifts would soften his brother’s heart
      so that he would receive him kindly when they met face to face.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE EVENT OF THE NIGHT</p>
  </div>

  <div className="main_text">
    <p>
      Thus Ya‘qub عليه السلام sent the gift herds ahead.
      Several hours later, during the night,
      he led his two wives, his two maidservants,
      his eleven sons, and all his possessions across the Jabbok River.
      Afterwards he returned alone to his camp.
      Then an{' '}
      <span className="vitalic">angel of Allah</span>{' '}
      appeared in the{' '}
      <span className="vitalic">form of a man</span>{' '}
      and wrestled with him until dawn.
    </p>

    <p>
      At last, seeing that he could not overcome Ya‘qub عليه السلام,
      he struck him hard and dislocated his hip.
      Then he said:
    </p>

    <p className="!my-0">
      —Let me go, for dawn is breaking.
    </p>

    <p className="!my-0">
      —No,
      replied Ya‘qub عليه السلام.
      I will not let you go unless you bless me.
    </p>

    <p>Then the angel asked:</p>

    <p className="!my-0">
      —What is your name?
    </p>

    <p className="!my-0">
      —Ya‘qub.
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer !my-0"
      onClick={() => toggleBubble('bubble2')}
    >
      —Your name shall no longer be Ya‘qub, but Israel.
      <sup>2</sup>{' '}
      For throughout your life you have struggled with men and even with an
      angel, and you have endured the trials of Allah.
    </p>

    {openBubbles['bubble2'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble2')}
      >
        <p>
          <sup>2</sup>
          For this reason, his descendants later became known as Bani Isra’il,
          meaning “the Children of Israel.”
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p className="!my-0">
      —What is your name?
      asked Ya‘qub عليه السلام.
      But the angel did not answer.
    </p>

    <p className="!my-0">
      —Why do you ask?
      he replied.
      Then he blessed Ya‘qub عليه السلام.
    </p>

    <p>
      (Later, Ya‘qub عليه السلام named that place Peniel, saying:
      “I have seen the angel of Allah face to face, and yet my life has been
      spared.”)
    </p>

    <p>
      As Ya‘qub عليه السلام departed from Peniel,
      the sun was just rising.
      Because of his injured hip, he walked with a limp.
      (For this reason, the Children of Israel traditionally do not eat the
      tendon attached to the hip socket.)
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE REUNION OF THE TWO BROTHERS</p>
  </div>

  <div className="main_text">
    <p>
      Then Ya‘qub عليه السلام saw his brother Esau approaching from afar with
      four hundred men.
      He placed the children with their mothers:
      Bilhah and Zilpah with their children in the front,
      Leah and her children in the middle,
      and Rachel with Yusuf عليه السلام at the rear.
      He himself went ahead of them all and bowed to the ground seven times as
      he approached his brother.
    </p>

    <p>
      Esau رضي الله عنه ran to meet him,
      embraced him,
      and kissed him.
      Both brothers wept.
      Then Esau looked at the women and children and asked:
    </p>

    <p className="!my-0">
      —Who are these?
    </p>

    <p className="!my-0">
      —They are the children Allah has graciously given to Your servant,
      replied Ya‘qub عليه السلام.
    </p>

    <p>
      Then Bilhah and Zilpah approached with their children and bowed.
      After them came Leah and her children.
      Finally Rachel and Yusuf عليه السلام came forward and bowed.
    </p>

    <p className="!my-0">
      —And what was the purpose of all those herds I met on the road?
      Esau رضي الله عنه asked.
    </p>

    <p className="!my-0">
      —I sent them in order to find favor in your sight,
      replied Ya‘qub عليه السلام.
    </p>

    <p className="!my-0">
      —My dear brother, keep your wealth.
      I already have plenty.
    </p>

    <p className="!my-0">
      —No, my brother.
      If I have truly found favor with you,
      please accept my humble gift.
      You have received me kindly,
      so please receive my gift as well.
      All praise belongs to Allah —
      He has blessed me with abundant wealth.
    </p>

    <p>
      After Ya‘qub عليه السلام insisted repeatedly,
      Esau رضي الله عنه finally accepted the gifts.
    </p>

    <p className="!my-0">
      —Come then,
      let us travel together,
      Esau said.
    </p>

    <p>But Ya‘qub عليه السلام replied:</p>

    <p className="!my-0">
      —You can see, my brother, that the children are still young.
      Besides, many lambs and young animals have only recently been born.
      If they are driven too hard for even one day, they will die.
      Please go ahead.
      I will travel slowly behind with the children and the livestock.
      We shall meet again in Seir.
    </p>

    <p className="!my-0">
      —Very well,
      said his brother.
      At least let me leave some of my men with you.
    </p>

    <p className="!my-0">
      —No, there is no need.
      Please do not trouble yourself,
      Ya‘qub عليه السلام replied.
    </p>

    <p>
      Thus Esau رضي الله عنه returned to Seir that same day with his men.
      Ya‘qub عليه السلام journeyed with his family to Succoth,
      and from there arrived safely in the city of Shechem in the land of
      Canaan.
    </p>

    <p className="vitalic">
      Thus, as you can see, Ya‘qub عليه السلام returned safely to Canaan.
      Do you remember when he fled from his brother and left Canaan?
      At that time he had said:
      “If Allah returns me safely to my father's house,
      then I shall worship Him alone.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>YA‘QUB’S THANKSGIVING TO ALLAH</p>
  </div>

  <div className="main_text">
    <p>
      After arriving in Shechem,
      Ya‘qub عليه السلام purchased a piece of land outside the city from the
      sons of the ruler of Shechem for one hundred pieces of silver and built a
      settlement there.
      Then he offered sacrifices to Allah, saying:
      “You are the One who granted me refuge and preserved me in safety.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>A GREAT DISHONOR...</p>
  </div>

  <div className="main_text">
    <p>
      The ruler of the city was a Hivite named Hamor,
      who had a son named Shechem.
      One day Dinah, the daughter of Leah,
      went out to visit the young women of the city.
      Shechem saw her and violated her honor.
    </p>

    <p>
      Yet Shechem became deeply attached to Dinah.
      He spoke tenderly to her and tried to win her affection.
      Then he went to his father and said:
      “Get this girl for me as a wife.”
    </p>

    <p>
      Ya‘qub عليه السلام also heard that his daughter’s honor had been violated,
      but he remained silent until his sons returned.
      At that time they were out in the fields tending the flocks.
    </p>

    <p>
      Meanwhile Hamor came with his son Shechem to Ya‘qub’s settlement.
      While they were sitting together,
      Dinah’s brothers returned from the fields.
      When they heard what had happened,
      they became furious.
      It was a shameful and disgraceful act,
      bringing great dishonor upon the household of Israel.
    </p>

    <p className="!my-0">
      —My son Shechem has fallen deeply in love with your daughter,
      Hamor began.
      I have come hoping that we might become relatives.
      Let us intermarry.
      Give daughters to us and take daughters from us.
      Our land is open before you.
      Settle wherever you wish.
      Live among us,
      trade with us,
      and acquire property.
    </p>

    <p className="!my-0">
      —Please do not refuse,
      pleaded Shechem.
      Whatever you ask I will give.
      Name the bride-price and the gifts,
      and I will gladly pay them.
      Only give me your daughter as my wife.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE DECEPTION...</p>
  </div>

  <div className="main_text">
    <p>
      Ya‘qub’s sons intended to take revenge.
      Therefore they answered deceitfully:
      “We cannot give our sister to an uncircumcised man.
      That would be a disgrace for us.
      If all the men among your people become circumcised as we are,
      then it will be different.
      Only then can we intermarry with you.
      We will become one people together.
      But if you refuse circumcision,
      we will take our sister and leave.”
    </p>

    <p>
      Hamor and Shechem accepted their condition.
      Shechem was the most respected man among his people.
      Because he loved Dinah,
      he wasted no time.
      He and his father immediately went to the city gate and addressed the
      people:
    </p>

    <p>
      “These people are friendly toward us.
      Let them live in our land and trade among us.
      We can intermarry.
      The land is large enough for both them and us.
      They are willing to become one people with us,
      but they have one condition:
      all our men must be circumcised just as they are.
      If we agree,
      they will live among us.
      Their flocks,
      their possessions,
      and all their wealth will become ours.”
    </p>

    <p>
      All the men gathered at the city gate accepted the proposal,
      and every male in the city was circumcised.
    </p>
  </div>

  <div className="paragraph_heading">
    <p>...AND THE REVENGE</p>
  </div>

  <div className="main_text">
    <p>
      But on the third day,
      while the men were still suffering from their wounds,
      Dinah’s brothers Shim‘un and Levi entered the city with swords and struck
      down every male without resistance.
      They killed Hamor and his son Shechem,
      rescued Dinah from Shechem’s house,
      and brought her away.
    </p>

    <p>
      Afterwards they plundered the city that had dishonored their sister.
      They took all the sheep,
      goats,
      cattle,
      and donkeys they found in the city and the surrounding fields.
      Everything from the houses was seized,
      while the women and children were taken captive.
    </p>

    <p>
      Ya‘qub عليه السلام had known nothing of this.
      When he heard what had happened,
      he became extremely angry.
    </p>

    <p>
      “You have brought disaster upon me!
      You have disgraced me!”
      Ya‘qub عليه السلام shouted at Shim‘un and Levi.
      “Now the Canaanites and Perizzites will hate us.
      We are few in number.
      If they unite against us,
      none of us will survive!”
    </p>

    <p>
      But Shim‘un and Levi replied:
      “Should our sister have been treated like a prostitute?
      The disgrace had to be avenged.”
    </p>
  </div>

  <div className="paragraph_heading">
    <p>THE RENEWAL OF FAITH</p>
  </div>

  <div className="main_text">
    <p>
      Then revelation came from Allah:
      “Rise and go to Bayt-El.
      There offer sacrifices for My sake.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble3')}
    >
      Upon hearing this,
      Ya‘qub عليه السلام said to his household and his servants:
      “Prepare yourselves and change your garments.
      Destroy the idols and false gods.
      <sup>3</sup>{' '}
      We are going to Bayt-El.
      There we shall worship Allah,
      who supported me in times of hardship
      and accompanied me wherever I went.”
    </p>

    {openBubbles['bubble3'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble3')}
      >
        <p>
          <sup>3</sup>
          Among the captives taken by Ya‘qub’s sons were women who had worshipped idols.
          They had brought their idols with them into the household of Ya‘qub
          عليه السلام.
        </p>
      </div>
    )}

    <p>
      Thus he gathered his entire household and servants and set out to worship
      Allah.
      As they traveled,
      none of the surrounding towns dared pursue them,
      for Allah cast fear into their hearts.
    </p>

    <p>
      After they arrived at Bayt-El,
      Allah, Mighty and Majestic, said to Ya‘qub عليه السلام:
      “I am Allah, the Almighty.
      Nations shall come forth from you,
      even an assembly of nations.
      Kings shall arise from your descendants.
      Be fruitful and multiply.
      The land that I gave to your grandfather Ibrahim and your father Ishaq,
      I now give to you and to your descendants after you.”
    </p>
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble4')}
    >
      Afterwards Ya‘qub عليه السلام left Bayt-El and set out toward Ephrath.
      <sup>4</sup>{' '}
      Along the way Rachel went into labor and gave birth to her second son,
      Binyamin.
      But her labor was extremely difficult,
      and she passed away.
      Ya‘qub عليه السلام buried her beside the road to Ephrath.
    </p>

    {openBubbles['bubble4'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble4')}
      >
        <p>
          <sup>4</sup>
          That is, Bethlehem.
          Ephrath was the ancient name of Bethlehem.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p
      className="cursor-pointer "
      onClick={() => toggleBubble('bubble5')}
    >
      Continuing their journey,
      they eventually arrived at Hebron,
      <sup>5</sup>{' '}
      where Ishaq عليه السلام was living.
      (Prophet Ibrahim عليه السلام had also lived there.)
    </p>

    {openBubbles['bubble5'] && (
      <div
        className="speech-bubble"
        onClick={() => toggleBubble('bubble5')}
      >
        <p>
          <sup>5</sup>
          Prophet Ibrahim عليه السلام and Mother Sarah had been buried in a cave
          there in Hebron.
        </p>
      </div>
    )}

    <p>
      When Ishaq عليه السلام passed away at the age of one hundred and eighty,
      his sons Esau رضي الله عنه and Ya‘qub عليه السلام buried him together in
      the resting place where their grandfather Ibrahim عليه السلام had been
      laid to rest.
    </p>
  </div>
</main>
    
  );
}