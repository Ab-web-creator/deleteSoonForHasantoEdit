// app/qisas-eng-karin-chapters/tawrat/adam-alayhissalam/index.tsx

'use client';

import AlayhS from '@/app/components/AlayhS';
import { useSpeechBubbles } from '@/app/hooks/useSpeechBubbles';

export default function AdamAlayhissalam() {
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
        <p className="vitalic">
          As it is written in the Qurʾān al-Karīm,
        </p>

        <p className="boldItalic cursor-pointer" onClick={() => toggleBubble('bubble1')}>
          "Allāh Almighty (s.w.t.) created Ādam (a.s.) from clay." ( Ṣād 38:71).
          <sup>1</sup>
        </p>

        {openBubbles['bubble1'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
            <p>
              <sup>1</sup> Your Lord said to the angels, ‘I will create a man from
              clay. When I have shaped him and breathed from My Spirit into him, bow
              down before him.’ The angels all bowed down together. ( Ṣād 38:71-73)
            </p>
          </div>
        )}
      </div>

      <div className="paragraph_heading mt-10">
        <p>The Creation of Ādam (a.s.)</p>
      </div>

      <div className="main_text">
        <p className="cursor-pointer" onClick={() => toggleBubble('bubble2')}>
          Allāh made a man from the soil and breathed life-giving breath from{' '}
          <span className="vitalic">His spirit</span> into the man's nostrils, and
          the man started breathing.<sup>2</sup>{' '}
          <span className="vitalic">
            At that time there was no-one else on the earth besides Ādam (a.s.).
          </span>
        </p>

        {openBubbles['bubble2'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
            <p>
              <sup>2</sup> According to ḥadīth, Ādam (a.s.) was created on Friday
              (Muslim, Abū Dāwūd, al-Tirmidhī, Ibn Mājah).
            </p>
          </div>
        )}
      </div>

      <div className="main_text">
        <p>
          Allāh made a garden in a place called ʿAdn and filled it with beautiful
          and delicious fruit trees. There were two special trees in the middle of
          the garden: one was the tree of life, and the second one was the tree of
          knowing good and evil.
        </p>

        <p>
          So Allāh (s.w.t.) placed Ādam (a.s.) in this garden and commanded him to
          take care of the garden.
        </p>

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble3')}>
          Then Allāh (s.w.t) warned him saying: "Go ahead. It is{' '}
          <span className="wa">ḥalāl</span> for you to eat fruit from any of these
          trees, except for one. Do not eat from the tree of the knowledge of good
          and evil, because you will die on the same day that you eat from it."
          <sup>3</sup>
        </p>

        {openBubbles['bubble3'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
            <p>
              <sup>3</sup> In sūra <span className="vitalic">Tāʾ Hāʾ</span> it is
              written that Allāh (s.w.t.) warned Ādam (a.s.) about Shayṭān:{' '}
              <span className="boldItalic">
                "Ādam, this is your enemy, yours and your wife’s: do not let him
                drive you out of the garden and make you miserable."
              </span>{' '}
              ( 20:117).
            </p>
          </div>
        )}
      </div>

      <div className="paragraph_heading">
        <p>The First Prophet</p>
      </div>

      <div className="main_text">
        <p className="vitalic cursor-pointer" onClick={() => toggleBubble('bubble4')}>
          One of the great ṣaḥāba, Abū Dhar (r.a.), asked the prophet (s.a.w.):
          "Among the prophets, who was the first?" Rasul Allāh (s.a.w.) said: "Ādam
          (a.s.) is the first sent prophet. Allāh made him by His hand and put spirit
          in him and created him as a handsome human being." Another narration from
          Abū Dhar (r.a.) says: "I asked the messenger (s.a.w.): "Oh messenger of
          Allāh, was Ādam one of the prophets?" The messenger (s.a.w.) answered
          saying: "Of course, Ādam was the first prophet who spoke with Allāh
          directly."<sup>4</sup>
        </p>

        {openBubbles['bubble4'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
            <p>
              <sup>4</sup> Abū Jaʿfar b. Jarīr al-Ṭabarī, "
              <span className="vitalic">Tarīkh al-umam wa-l-mulūk</span>".
            </p>
          </div>
        )}
      </div>

      <div className="paragraph_heading">
        <p>Naming the Animals</p>
      </div>

      <div className="main_text">
        <p className="vitalic">
          As Ādam (a.s.) walked through <span className="wa">jannat ʿadn</span>, he
          observed the beautiful perfection that surrounded him.
        </p>

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble5')}>
          Allāh (s.w.t.) brought all the creatures He had created to Ādam's (a.s.)
          presence so that he (a.s.) could name them.<sup>5</sup> When he finished
          naming them, he realized that Ādam (a.s.) lacked only one thing. There was
          no suitable companion for him.<sup>6</sup>
        </p>

        {openBubbles['bubble5'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble5')}>
            <p>
              <sup>5</sup> There is a verse in Qurʾān, which says{' '}
              <span className="boldItalic">"(Allāh) taught Ādam all the names"</span>{' '}
              ( Al-Baqara 2:31).
            </p>

            <p>
              <sup>6</sup> Someone might ask: "Why would animals not be a suitable
              companion for Ādam (a.s.)?" Animals have a certain amount of
              understanding, but the ability to imagine is given only to man.
            </p>
          </div>
        )}
      </div>

      <div className="paragraph_heading">
        <p>The Creation of Umm Ḥawwāʾ</p>
      </div>

      <div className="main_text">
        <p className="cursor-pointer" onClick={() => toggleBubble('bubble6')}>
          Before Allāh the Highest presented the living creatures to Nabī Ādam, he
          revealed: "It is not good for Ādam to be alone. I will create a suitable
          companion for him."<sup>7</sup> So after Ādam (a.s.) had named the animals,
          Allāh created Umm Ḥawwāʾ from Ādam's (a.s.) side.<sup>8</sup>
        </p>

        {openBubbles['bubble6'] && (
          <div className="speech-bubble" onClick={() => toggleBubble('bubble6')}>
            <p>
              <sup>7</sup> According to Sharīʿa, it is stressed that we need to
              choose our spouses fittingly.
            </p>

            <p>
              <sup>8</sup> The book of Thaʿlabī "
              <span className="vitalic">ʿArāʾis</span>" says that Allāh put Ādam
              (a.s.) to sleep and created Mother Ḥawwāʾ from his rib.
            </p>
          </div>
        )}
      </div>

      <div className="main_text">
        <p>
          When Ādam (a.s.) first saw Umm Ḥawwāʾ, he rejoiced and said, "These bones
          are from my bones; this flesh is from my flesh; I name her 'woman', for she
          was created from man's rib."
        </p>

        <p className="vitalic">
          So Umm Ḥawwāʾ's bone and flesh were originally taken from Ādam. As it is
          said in the Qurʾān al-Karīm:{' '}
          <span className="boldItalic">
            "People, be mindful of your Lord, who created you from a single soul,
            and from it created its mate..."
          </span>{' '}
          ( Al-Nisāʾ 4:1). That is why when a man gets married he leaves his
          parents, becomes joined to his wife, and the two of them become one body.
        </p>
      </div>
    </main>
  );
}