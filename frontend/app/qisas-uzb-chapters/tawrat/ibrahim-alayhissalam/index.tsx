'use client';

import '../../../qisas-uzb/stories.css';
import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';

export default function Abraham() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
    'bubble5',
    'bubble7',
    'bubble8',
    'bubble10',
    'bubble11',
  ]);

  return (
    <div className="stories relative">
      <div className="separate_into_two_columns">
        <main className="sep_part1">
          <div className="main_text">
            <p className="boldItalic">
              «Оллоҳнинг Сўзи ростдир. Бас, Ҳақ Йўлдан тоймаган ва мушриклардан
              бўлмаган Иброҳимнинг миллатига эргашинглар»
              <span className="vitalic"> (Қуръон, Оли-Имрон сураси, 95).</span>
            </p>
          </div>

          <div className="paragraph_heading">
            <p>ИБРОҲИМ ПАЙҒАМБАРНИНГ ОТАСИ</p>
          </div>

          <div className="main_text">
            <p>
              Торуҳдан Иброҳим, Ноҳур ва Ҳорон деган уч ўғил туғилди. Улар ўша
              пайтда калдонийларнинг Ур деган шаҳрида яшар эдилар. Ҳорон кейин
              уйланиб, Лут деган ўғил, Милка ва Иска деган қизлар кўрди.
              Кейинроқ у, отаси тириклигида, ўша юртда — Ур шаҳрида оламдан
              ўтди. Иброҳим ҳам уйланди.
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble1'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble1')}
              >
                <p>
                  <sup>1</sup> Ўртада чўл борлиги учун улар олдин шимолдаги
                  Ҳорон шаҳрига бориб, кейин жанубга — Канъонга бормоқчи эдилар.
                </p>
              </div>
            )}

            <p
              className="cursor-pointer "
              onClick={() => toggleBubble('bubble1')}
            >
              Лекин унинг хотини Сора ҳеч ҳомила бўлмас эди. Кунлардан бир кун
              Торуҳ, фарзандларини олиб, Канъон юртига қараб йўл олди. Лекин
              Ҳоронга
              <sup>1</sup> келганда, баъзи бир сабаблар билан ўша ерда қолиб
              кетдилар.
            </p>
          </div>

          <div className="paragraph_heading">
            <p>Иброҳим (а.с.) нинг ёшлиги</p>
          </div>

          <div className="main_text">
            <p className="vitalic">
              Китобларда ёзилишича Иброҳим (а.с.) нинг қавми жонсиз бутларга
              сиғинар, тирик Оллоҳни тан олмас эди. Иброҳим эса: «Дунёнинг эгаси
              борми? Бутун оламлар рабби ким экан?» деган саволларга жавоб
              изларди.
            </p>
          </div>

          <div className="paragraph_heading">
            <p>Оллоҳни излаш</p>
          </div>

          <div className="main_text">
            <p className="boldItalic">
              «Уни тун ўраб олганида юлдузни кўриб: «Мана шу менинг Раббим»,
              деди. Юлдуз ботиб кетганида эса: «Ботувчиларни ёқтирмадим», деди.
              Чиқаётган ойни кўргач: «Мана шу менинг Раббим», деди.{' '}
              <span className="vitalic">(Лекин ой ҳам ботиб кетди.)</span>
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble2'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble2')}
              >
                <p>
                  <sup>2</sup> Анъом сураси 6:76-79.
                </p>
              </div>
            )}

            <p
              className="boldItalic cursor-pointer "
              onClick={() => toggleBubble('bubble2')}
            >
              Ботганида: «Адашибман. Агар Раббим тўғри йўлга бошламаса, албатта
              адашувчилардан бўламан», деди. Чиқаётган қуёшни кўрганда: «Мана шу
              менинг Раббим. Бу каттароқ», деди. У ҳам ботиб кетгач,{' '}
              <span className="vitalic">
                (буларнинг ҳаммасини яратган ва булардан улуғроқ бир зот бўлиши
                керак, деб ўйланиб қолди. Кейин:)
              </span>{' '}
              «Эй қавмим, мен сиз ширк келтираётган нарсадан воз кечдим, — деди.
              — Мен юзимни осмонлару ерни яратган зотга бурдим, тўғри йўлни
              истайман, мушриклардан эмасман», деди».
              <sup>2</sup>
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble3'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble3')}
              >
                <p>
                  <sup>3</sup> Бақара сураси 131.
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble3')}
            >
              Шундай кунларнинг бирида Оллоҳ азза ва жалл у кишига ваҳий нозил
              қилиб: <span className="boldItalic">«Аслим»,</span> деди.
              Маъноси: «Менга таслим бўл», дегани. Иброҳим (а.с.) дарров:{' '}
              <span className="boldItalic">«Асламту лираббил-аъламийн»</span>
              <sup>3</sup> яъни: «Оламлар Раббига таслим бўлдим, иймон
              келтирдим», дедилар. Шундан кейин отасини ва қавмини бутларга
              топинишдан тўхтатиб, ягона Оллоҳга, еру кўкнинг эгасига
              қайтармоқчи бўлдилар.
            </p>
          </div>

          <div className="paragraph_heading">
            <p>БУТЛАРНИ ПАРЧАЛАШ</p>
          </div>

          <div className="main_text">
            {openBubbles['bubble4'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble4')}
              >
                <p>
                  <sup>4</sup> Шуаро 26:70-74 оятлар.
                </p>
              </div>
            )}

            <p
              className="boldItalic cursor-pointer "
              onClick={() => toggleBubble('bubble4')}
            >
              «У отаси ва қавмига: «Нимага ибодат қилмоқдасизлар?» деди. Улар:
              «Санамларга ибодат қилмоқдамиз. Ва уларга ихлос билан ибодат
              қилишда давом этамиз», дедилар. У: «Илтижо қилганингизда улар
              сизни эшитадими? Ёхуд наф ёки зарар етказа оладими?» деди. Улар:
              «Йўқ, лекин ота-боболаримиз шундай қилган, биз улардан шундай
              кўрганмиз», деб жавоб бердилар».
              <sup>4</sup>
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble5'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble5')}
              >
                <p>
                  <sup>5</sup> Ас-Саффот 91-93 оятлар.
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble5')}
            >
              Бир куни байрам бўлди. Ҳамма байрамга кетгач, Иброҳим (а.с.) болта
              кўтариб бутхонага бордилар ва бутларнинг олдида турган емакларни
              кўриб дедилар:{' '}
              <span className="boldItalic">
                «Қани, емайсизларми?! Сизларга нима бўлди?! Гапирмайсизларми?!»
                Сўнг уларга яқинлашиб, уларни ура бошлади.
              </span>
              <sup>5</sup>
            </p>

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble7')}
            >
              Қуръоннинг Анбиё сурасида:{' '}
              <span className="boldItalic">
                «Бас, уларни парча-парча қилиб ташлади. Магар энг каттасини»,
                <sup>6</sup>
              </span>{' '}
              деб ёзилган. Кейин болтани ўша катта бутнинг бўйнига осиб,
              бутхонани тарк этадилар.
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble7'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble7')}
              >
                <p>
                  <sup>6, 7</sup> Ал-Анбия сураси 58-оят ва 62-67 оятлар.
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble7')}
            >
              Бироз вақтдан сўнг одамлар байрамдан келиб, бутларнинг синиб
              ётганини кўрдилар ва ғазабланиб, Иброҳим (а.с.) ни олиб келдилар:{' '}
              <span className="boldItalic">
                «Худоларимизга буни сен қилдингми, эй Иброҳим?!»
              </span>{' '}
              У киши эса:{' '}
              <span className="boldItalic">
                «Йўқ, буни мана буниси, каттаси қилди. Агар гапирсалар,
                ўзларидан сўраб кўринглар»,
              </span>
              <sup>7</sup> дедилар калака қилиб. Шунда улар: «Сен бутларнинг
              гапира олмаслигини биласан-ку!» дедилар. У киши эса: «Унда{' '}
              <span className="boldItalic">
                нега Оллоҳни қўйиб, на фойда, на зарар бермайдиган нарсаларга
                ибодат қиласиз?!
              </span>
              » дедилар.
            </p>
          </div>

          <div className="paragraph_heading">
            <p>Расулуллоҳни оловга ташлайдилар</p>
          </div>

          <div className="main_text">
            {openBubbles['bubble8'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble8')}
              >
                <p>
                  <sup>8</sup> Кўп китобларда бу қиролнинг исми Намруд деб ёд
                  қилинган.
                </p>
                <p>
                  <sup>9</sup> Бақара сураси, 258-оят.
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble8')}
            >
              Шундан кейин ўша қавмнинг қироли
              <sup>8</sup> Иброҳим (а.с.) ни ҳузурига чақиртириб: «Сенинг
              худойинг ким, сен ўзи уни кўрганмисан?» деб савол беради.
              Расулуллоҳ жавоб бериб айтадиларки: «Менинг Раббим тирилтиргувчи
              ва ўлдиргувчи». У эса: «Мен ҳам бунга қодирман, — дейди. — Икки
              одам ўлимга буюрилса, бирини ўлдираман, бирини эса афу этаман».
              Шунда Иброҳим (а.с.):{' '}
              <span className="boldItalic">
                «Оллоҳ қуёшни шарқдан чиқаради, сен агар қодир бўлсанг, ғарбдан
                чиқариб кўр-чи!»
              </span>
              <sup>9</sup> дейдилар. Қирол жавоб беролмай, лол қолади.
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble10'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble10')}
              >
                <p>
                  <sup>10</sup> Баъзи олимларнинг ёзишича, ўтин йиғиш учун уч ой
                  вақт масраф бўлган экан (Ибн Аёс: «Бадайи уз-зуҳур»).
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble10')}
            >
              Шундан сўнг қирол, Оллоҳнинг расулини ўтда ёқиб ўлдиришга қарор
              қилади. Шу мақсад билан катта бир чуқур тайёрлаб ичига узоқ
              ёнадиган ўтинларни йиғдиради. Ҳамма нарса тайёр бўлгач, катта
              гулхан ёқиб,
              <sup>10</sup> Иброҳим (а.с.) ни оловга ташлайдилар.
            </p>
          </div>

          <div className="paragraph_heading">
            <p>ҚИССАДАН ҲИССА</p>
          </div>

          <div className="main_text">
            <p className="vitalic">
              Иброҳим (а.с.) Оллоҳга таваккул қилганлари учун, ҳатто ўтда
              куйдирамиз, десалар ҳам иймонидан воз кечмадилар. Бундай ҳолатда
              ҳар бир мўъмин Оллоҳнинг нусратига умид боғлайди. Ахир Оллоҳ
              истаса, ўт балосидан ҳам, сув балосидан ҳам сақлайди-ку. Лекин
              ҳатто сақламаса ҳам, биз иймонимизни қўлдан бой бермаслигимиз
              лозим.
            </p>
          </div>

          <div className="main_text">
            {openBubbles['bubble11'] && (
              <div
                className="speech-bubble"
                onClick={() => toggleBubble('bubble11')}
              >
                <p>
                  <sup>11</sup> Ал-Анбия сураси 21:69.
                </p>
              </div>
            )}

            <p
              className="vitalic cursor-pointer "
              onClick={() => toggleBubble('bubble11')}
            >
              Иброҳим (а.с.) оловга отилганда Оллоҳ таоло у кишини сақлади.
              Қуръони каримда:{' '}
              <span className="boldItalic">
                «Эй олов, сен Иброҳимга салқин ва саломатлик бўл!»
                <sup>11</sup>
              </span>{' '}
              деб айтилган амр бор. Чунки қавми ҳазрати Иброҳимга ёмонликни
              хоҳлаган бўлса-да, Оллоҳ уларнинг ўзларини зиёнкорлардан қилиб
              қўйди.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}