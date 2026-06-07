'use client';

import '../../../qisas-uzb/stories.css';
import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';

export default function InsideFish() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
  ]);

  return (
    <main className="stories relative">
      <div className="main_text">
        <p className="boldItalic">
          «Бас, уни маломатга лойиқ бўлган ҳолида наҳанг балиқ ютди»{' '}
          <span className="vitalic">Вас-Соффот 37:142.</span>
        </p>
        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble1'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble1')}
          >
            <p>
              <sup>1</sup> Қатода (р.а.) нинг айтишича, Юнус (а.с.) балиқ ичида
              уч кун бўлганлар.
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble1')}>
          Оллоҳ таоло эса, Юнус (а.с.) ни ютсин деб катта бир балиқ юборди ва у
          киши уч кечаю уч кундуз<sup>1</sup> ба­лиқ­нинг ичида бўлдилар. Балиқ
          ичида Юнус (а.с.) Оллоҳ таолога дуо қилади:
        </p>
        <p></p>
      </div>

      <div className="main_text">
        <p className='sm:ml-4 my-1'>Ўлим оғушида чекдим оҳу-дод, </p>
        <p className='sm:ml-4 my-1'>Оллоҳим, нажот бер, деб қилдим фарёд. </p>
      </div>

      <div className="main_text">
        {openBubbles['bubble2'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble2')}
          >
            <p>
              <sup>2</sup> «(Юнус) зулматларда туриб, Сендан ўзга Илоҳ йўқ, Сен
              поксан, албатта, мен золимлардан бўлдим, деб нидо қилди» (Анбиё
              сураси 21:87).
            </p>
          </div>
        )}
      </div>
      <div className='cursor-pointer' onClick={() => toggleBubble('bubble2')}>
        <p className=" sm:ml-4 my-1" >
          Оллоҳ мени денгиз қаърига отди,<sup>2</sup>
        </p>
        <p className='sm:ml-4 my-1'>Қаро тўлқин вужудимни қуршади. </p>
 
      </div>

      <div className="main_text">
        <p className="sm:ml-20 mb-1">Тушкунликка тушиб дедим: «Мабодо, </p>
        <p className="sm:ml-20 my-1">Ҳаёт нафасидан бўлдимми жудо? </p>
        <p className="sm:ml-20 my-1">Магар энди ибодатлар қилолмам, </p>
        <p className="sm:ml-20 my-1">Ал-Ақсони зиёрат ҳам этолмам?» </p>
      </div>

      <div className="main_text">
        <p className="sm:ml-4 mb-1">Пастга тортар эди гирдоб сувлари, </p>
        <p className="sm:ml-4 my-1">Бўйнимдан бўғарди денгиз ўтлари. </p>
      
        <p className="sm:ml-4 my-1">Чўкиб Барзақ тубига етган эрдим, </p>
        <p className="sm:ml-4 my-1">Умид узиб жаҳондан кетган эрдим. </p>
      </div>

      <div className="main_text">
        <p className="sm:ml-20 mb-1">Ўликлар маскани ичра қамалда </p>
        <p className="sm:ml-20 my-1">ётардим, эй Оллоҳ, шундай маҳалда</p>
        <p className="sm:ml-20 my-1">иноят кўрсатиб тутдинг қўлимдан, </p>
        <p className="sm:ml-20 my-1">мени қутқаздинг-ку мангу ўлимдан. </p>
      </div>

      <div className="main_text">
        <p className="sm:ml-4 mb-1">Нафасим узилиб, барча умидим </p>
        <p className="sm:ml-4 my-1">Тугаганда, Оллоҳ, Сени эсладим. </p>
        <p className="sm:ml-4 my-1">Сени эсладим-у, Сенга дод солдим, </p>
        <p className="sm:ml-4 my-1">Байтуллоҳга етиб борди дуойим! </p>
        <p></p>
      </div>

      <div className="main_text">
        <p className="sm:ml-4 mb-1">Кимки тавоф этар арзимас бутни, </p>
        <p className="sm:ml-4 my-1">инкор этар Худо меҳри-лутфини.</p>
        <p className='sm:ml-4 my-1'>Мен-чи шукур қилиб, айтиб олқишлар, </p>
        <p className="sm:ml-4 my-1">Сенга қиладурман қурбон-назрлар.</p>
      </div>

      <div className="cursor-pointer" onClick={() => toggleBubble('bubble3')}>
        <p className="sm:ml-20 mb-1">Қутқарувчи Сенсан, Сендадир ҳаёт, </p>
      </div>

      <div className="main_text">
        {openBubbles['bubble3'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble3')}
          >
            <p>
              <sup>3</sup> «Бас, Биз унинг (дуосини) ижобат қилдик. Унга ғамдан
              нажот бердик. Мўминларга шундай нажот берурмиз» (Анбиё сураси
              21:88).
            </p>
          </div>
        )}

        <p className="cursor-pointer sm:ml-20 my-1" onClick={() => toggleBubble('bubble3')}>
          Сендан келар қудрат, Сендадир нажот!<sup>3</sup>
        </p>
      </div>

      <div className="paragraph_heading">
        <p> НАЙНАВО АҲЛИНИНГ ТАВБА ҚИЛИШИ </p>
      </div>

      <div className="main_text">
        <p className="boldItalic">
          «Энди агар у тасбеҳ айтувчилардан бўл­маса эди, албатта у балиқ
          қорнида то қайта тириладиган кунгача қолиб кетган бўлур эди. Бас Биз
          уни... қуруқликка отдик»{' '}
          <span className="vitalic">Вас-Соффот сураси, 143-145.</span>
        </p>

        <p>
          Кейин Оллоҳ таоло балиққа амр қилди ва балиқ ҳазрати Юнусни қуруқликка
          чиқариб ташлади. Ва Оллоҳдан Юнус пай­ғам­бар­га иккинчи марта буйруқ
          келди: «Тур, Найнаво шаҳрига бор! Уларга Ме­нинг сўзларимни эълон
          қил!» деди. Юнус (а.с.) Оллоҳ­нинг амрига бўйсуниб, Най­на­вога
          бор­­ди­лар.
        </p>

        <p className="boldItalic">
          «Биз уни юз мингдан ортиқ{' '}
          <span className="vitalic">(одам яшай­ди­ган жой)</span> га пайғамбар
          қилиб юбордик». <span className="vitalic"> Вас-Соффот 37:147.</span>
        </p>

        <p>Найнаво жуда катта ва муҳим шаҳар бўлиб, уни зиёрат қилишга уч кун вақт кетар эди.</p>

        <p>Юнус (а.с.) шаҳарда юриб куни билан: “Қирқ кундан кейин Найнаво вайрон бўлади”, деб жар солдилар.</p>

        <p>
          Найнаволиклар Оллоҳ­нинг сўзини эшитиб, ишониб, тавбага юз тутдилар.
          Шаҳардаги каттаю кичик қанорга ўраниб рўза тута бошлади. Най­на­во
          подшоҳи ҳам тахтидан тушиб, шоҳо­на кийимларини ечди, қанорга ўра­ниб,
          усти­га кул сочди ва бутун Найнаво аҳлига:
        </p>

        <p>
          «Ҳеч ким – на инсон, на ҳайвон овқат ема­син, сув ичмасин. Ҳамма қанор
          кийсин! Оллоҳ­га ялининглар! Илтижо қи­линг­лар! Гу­ноҳ ишлардан
          қайтинглар, зулм­дан қўл тор­тинг­лар! Ким билади, бал­ки Оллоҳнинг
          раҳми келиб ғазабидан қайтар, биз­ни ўлдирмас?» деб фар­мон бер­ди.
        </p>

        <p>
          Шундай қи­либ Найнаво халқи тав­ба қилди, ёмон ишлардан қўл тортди.
          Буни кўрган Худо уларга раҳм қилиб, айт­ган му­си­ба­тини уларга
          юбор­гани йўқ.
        </p>

        <p></p>
      </div>
    </main>
  );
}