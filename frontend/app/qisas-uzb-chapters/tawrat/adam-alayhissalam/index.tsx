// app/qisas-uzb-chapters/tawrat/adam-alayhissalam/index.tsx

'use client';

import '../../../qisas-uzb/stories.css';
import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';



export default function AdamAlayhissalam() {
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
    <div className="stories">
      <div className="separate_into_two_columns">
        <main className="sep_part1 relative">
          <div className="decor_line"></div>

          <div className="main_text">
            {openBubbles['bubble1'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble1')}
              >
                <p>
                  <sup>1</sup> Қуръон ояти: «Эсла! Ўшанда Раббинг
                  фаришталарга: «Албатта, мен лойдан инсон
                  яратгувчидирман. Бас, қачонки уни ростлаб,
                  ичига Руҳимдан пуфлаганимда, унга сажда қилиб
                  йиқилинглар!» деган эди. Бас, фаришталар
                  барчалари жамланиб, сажда қилдилар»
                  (Сод сураси 38:71-73).
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble1')}
            >
              Қуръони каримда ёзилишича, Оллоҳ таоло
              Одам (а.с.) ни тупроқдан-лойдан яратган экан
              (Сод сураси 38:71)
              <sup>1</sup>.
            </p>
          </div>

          <div className="arabic_quran pt-4 pb-3 px-6 border border-gray-300 rounded-md">
            <span className="font-amiri">
              إِذْ قَالَ رَبُّكَ لِلْمَلَـٰٓئِكَةِ إِنِّى خَـٰلِقٌۢ بَشَرًۭا مِّن طِينٍۢ
              فَإِذَا سَوَّيْتُهُۥ وَنَفَخْتُ فِيهِ مِن رُّوحِى فَقَعُوا۟ لَهُۥ سَـٰجِدِينَ
              فَسَجَدَ ٱلْمَلَـٰٓئِكَةُ كُلُّهُمْ أَجْمَعُونَ
            </span>
          </div>

          <div className="paragraph_heading">
            <p>ОДАМ (A.С.) НИНГ ЯРАТИЛИШИ</p>
          </div>

          <div className="main_text">
            {openBubbles['bubble2'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble2')}
              >
                <p>
                  <sup>2</sup> Ҳадиси шарифларга биноан
                  Одам алайҳис-салом жума куни яратилган
                  эканлар (Муслим, Абу Довуд, Термизий,
                  Ибн Можа).
                </p>
              </div>
            )}

            <p
              className="cursor-pointer "
              onClick={() => toggleBubble('bubble2')}
            >
              Оллоҳ (а.ж.) тупроқдан одам ясаб,
              димоғига Ўз руҳидан ҳаёт нафасини уфуради
              ва одам нафас ола бошлайди.

              <span className="vitalic">
                {' '}
                Ўшанда ер юзида у кишидан бошқа инсон
                йўқ эди.<sup>2</sup>
              </span>
            </p>
          </div>

          <div className="main_text">
            <p>
              Кейин Оллоҳ (а.ж.) Адан деган жойда бир боғ
              яратиб, чиройли ва меваси ширин дарахтлар
              билан тўлдиради. Боғнинг ўртасида икки
              дарахт ўсган экан: бири ҳаёт дарахти,
              иккинчиси эса яхши ва ёмонни билиш дарахти.
              Оллоҳ таоло Одам (а.с.) ни, боғни парвариш
              қилсин, деб ана шу ерга жойлаштиради.
            </p>

            <p>
              Кейин огоҳлантиради:
              «Боғдаги ҳамма дарахтлар мевасидан еявер.
              Фақат яхши ва ёмонни билиш дарахтидан ема.
              Еган куниёқ ўласан!»
            </p>

            <p className="vitalic">
              То-Ҳо сурасида Оллоҳ таолонинг
              Одам (а.с.) га шайтон ҳақида
              огоҳлантириш бергани ёзилган:

              <span className="boldItalic">
                {' '}
                «Эй Одам, албатта, у сенга ва
                жуфтингга душмандир. Яна у икковингизни
                жаннатдан чиқариб, бадбахт бўлиб қолмагин»
              </span>{' '}
              (20:117).
            </p>
          </div>

          <div className="paragraph_heading">
            <p>БИРИНЧИ ПАЙҒАМБАР</p>
          </div>

          <div className="main_text">
            {openBubbles['bubble3'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble3')}
              >
                <p>
                  <sup>3</sup> Абу Жаъфар Муҳаммад ибн
                  Жарир ат-Табарий, “Тарихул умам вал мулук”.
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer text-justify"
              onClick={() => toggleBubble('bubble3')}
            >
              Улуғ саҳобалардан Абу Зар (р.а.)
              пай­ғам­ба­римиз (с.а.в.) дан:
              «Биринчи пай­ғам­бар ким?» деб сўраган экан.

              Расу­луллоҳ (с.а.в.):
              «Би­рин­чи мурсал пайғамбар — Одам (а.с.).
              Оллоҳ уни қўли билан ясади,
              унга руҳ киритди ва гўзал инсон қилиб
              яратди», деб айтадилар.

              Абу Зардан (р.а.) қилинган бошқа бир
              ривоятда шундай дейилади:

              «Мен расулуллоҳдан (с.а.в.):
              «Эй Оллоҳнинг расули,
              Одам пайғамбарлардан эдими?» деб сў­ра­дим.

              Расулуллоҳ (с.а.в.):
              «Албатта, Одам — биринчи бўлиб
              Оллоҳ билан бе­во­си­та гаплашган
              пай­ғам­бар», деб жавоб бердилар».
              <sup>3</sup>
            </p>
          </div>

          <div className="paragraph_heading">
            <p>ҲАЙВОНЛАРГА ОТ БЕРИШ</p>
          </div>

          <div className="main_text">
            {openBubbles['bubble4'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble4')}
              >
                <p>
                  <sup>4</sup> Бақара сураси:
                  «(Оллоҳ) Одамга исмларнинг
                  барчасини ўргатди» (2:31).
                </p>
              </div>
            )}

            <p>
              <span className="vitalic">
                Ҳазрати Одам жаннати боғни кезар эканлар,
                жуфт-жуфт бўлиб юрган ҳайвонларни,
                гала-гала учиб юрган чиройли қушларни
                томоша қилардилар.
                Ҳамма нарса жуда гўзал,
                жуда ажойиб эди.
              </span>
            </p>

            <p
              className="cursor-pointer "
              onClick={() => toggleBubble('bubble4')}
            >
              Худо Ўзи яратган жониворларни
              Одам (а.с.) нинг олдига келтиради
              ва у киши ҳаммасига,
              ҳайвонлару қушларга от
              <sup>4</sup> қўядилар.
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble5'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble5')}
              >
                <p>
                  <sup>5</sup> Ҳайвонларга ҳам муайян
                  миқдорда ақл берилган,
                  лекин инсонда бор тафаккур
                  уларда йўқ.
                </p>
              </div>
            )}

            <p
              className="cursor-pointer "
              onClick={() => toggleBubble('bubble5')}
            >
              Унга етишмай турган биттаю битта нарса —
              ўзига муносиб шерикнинг
              топилмагани эди.
              <sup>5</sup>
            </p>
          </div>

          <div className="paragraph_heading">
            <p>МОМО ҲАВВОНИНГ ЯРАТИЛИШИ</p>
          </div>

          <div className="main_text">
            {openBubbles['bubble6'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble6')}
              >
                <p>
                  <sup>6</sup> Шариатда муносиб жуфт
                  танлаш кераклиги алоҳида уқтирилган.
                </p>
              </div>
            )}

            <p
              className="cursor-pointer "
              onClick={() => toggleBubble('bubble6')}
            >
              Оллоҳ субҳанаҳу ва таоло,
              Одамнинг ёлғиз бўлиши яхши эмас,
              Мен унга муносиб жуфт
              <sup>6</sup> яратаман,
              деб айтган эди.

              Одам (а.с.) ҳайвонларга
              от қўйганларидан кейин,
              Худо у кишининг биқинидан
              Момо Ҳаввони (р.а.) яратади.
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble7'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble7')}
              >
                <p>
                  <sup>7</sup> Ҳазрати Салабийнинг
                  “Ароис” китобида ёзилишича
                  Оллоҳ таоло Одам (а.с.) ни ухлатиб,
                  қовурғасидан Момо Ҳавони
                  яратган экан.
                </p>
              </div>
            )}

            <p
              className="cursor-pointer "
              onClick={() => toggleBubble('bubble7')}
            >
              Ҳазрати Одам Момо Ҳаввони (р.а.)
              биринчи бор кўрганларида

              <span className="vitalic">
                {' '}
                (хурсанд бўлиб)
              </span>

              : «Бор экан-ку!»
              деб хитоб қилган эканлар.
              <sup>7</sup>
            </p>

            <p>
              <span className="vitalic">
                Шундай қилиб,
                Момо Ҳаввонинг эт-суяги аслида
                Одам Атодан олинган.
                Қуръонда айтилганидек:{' '}
              </span>

              <span className="boldItalic">
                «Эй одамлар!..
                Раббингиз сизларни бир жондан
                яратган ва ундан унинг жуфтини
                яратган...»
              </span>{' '}

              <span className="vitalic">
                (Нисо сураси 4:1).
              </span>

              {' '}
              Шу сабабдан инсон никоҳ қурар экан,
              ота-онасини қўйиб,
              хотинига пайванд бўлади ва
              иккови бир танага айланадилар.
            </p>
            </div>      
            
            {/* <div className="bism">
                <p>
                  t Q E y u I a d Z
                </p>
              </div>

              <div className="symbol_group">
                <span>
                  &#9760; &#9872; &#9990; &#9993; &#9881; &#9874; &#9850; &#9836;
                </span>

                <span>
                  &#9832; &#9789; &#9790; &#9752; &#9756; &#9758; &#9752; &#9743; &#9734; &#9733; &#9737; &#9998; &#10003; &#10004; &#10005; &#10019; &#10017; &#10142; &#10143; &#10148; &#10146; &#10227; &#10606;
                </span>

                <span>
                  &#10025; &#10043; &#10044; &#10052; &#10056; &#10070; &#10084;
                </span>

                <span>
                  &#8364; &#65284; &#8858; &#8861; &#167; &#169; &#182; &#183; &#8213;
                </span>
              </div> */}

        </main>
      </div>
    </div>
  );
}