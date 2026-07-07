'use client';

 
import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';

export default function Maryam() {
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
    'bubble10',
    'bubble11',
    'bubble12',
    'bubble13',
  ]);

  return (
    <main className="stories relative">
   

      <article className="flex gap-6">
        <div className="sm:w-1/2">
          <p className='!text-green-600 sm:!text-gray-600 !text-[14px] leading-[15.5px]'>
         «Албатта, Оллоҳ Одамни, Нуҳни, аҳли Иброҳимни, аҳли Имронни оламлар
            ус­ти­дан танлаб олди»{' '}
            <span className=""> (Оли Имрон сураси 3:33). </span>
          </p>
        </div>

        <div className="-mt-3 hidden sm:block sm:w-1/2 rtl">
          <p   dir="rtl" 
                  lang="ar" 
                  className="font-amiri !text-[18px] !leading-[40px]">
          
           إِنَّ ٱللَّهَ ٱصْطَفَىٰٓ ءَادَمَ وَنُوحًۭا وَءَالَ إِبْرَٰهِيمَ
            وَءَالَ عِمْرَٰنَ عَلَى ٱلْعَـٰلَمِينَ
          </p>
        </div>
      </article>

      <div className="paragraph_heading">
        <p> Марям (р.а.) нинг дунёга келиши </p>
      </div>

      <div className="main_text">
        {openBubbles['bubble1'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble1')}
          >
            <p>
              <sup>1</sup> Табарий. “Тарих”, 2-жилд, 13-бет.
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble1')}>
          Марям (р.а.) нинг онаси – Ҳанна бинти Фа­ҳуд<sup>1</sup> деган аёл
          бўлиб, у Закариё пай­ғам­бар­нинг аёли Ашба Биби билан опа-сингил
          бўлган.
        </p>

        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble2'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble2')}
          >
            <p>
              <sup>2</sup> Салабий. “Ароис”, 371-бет.
            </p>
          </div>
        )}

        <p
          className="vitalic cursor-pointer"
          onClick={() => toggleBubble('bubble2')}
        >
          Ҳанна опа, ёши анча жойга бориб қол­ган­да ҳомиладор бўлади<sup>2</sup>{' '}
          ва бир қушнинг по­ла­по­нига ов­қат бераётганини кўриб Оллоҳга дуо
          қи­ла­ди. Бу дуо Қуръони каримнинг Оли Имрон сураси, 35-оятида бундай
          деб баён қилинган:
        </p>

        <p className="boldItalic">
          «Имроннинг хотини: «Эй Роббим! Ал­бат­та, мен қорнимдагини холис
          Ўзингга назр қилдим. Бас, мендан қабул эт. Албатта, Сенинг Ўзинг
          эшитувчи, би­лув­чи зотсан», деганини эсла!»
        </p>

        <p></p>
      </div>

      <div className="main_text vitalic">
        {openBubbles['bubble3'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble3')}
          >
            <p>
              <sup>3</sup> Ибн-и Асир. “Комил”, 1-жилд 298-бет.
            </p>
          </div>
        )}

        <p
          className="vitalic cursor-pointer"
          onClick={() => toggleBubble('bubble3')}
        >
          Ўша пайтда маъбад хизматига фақат ўғил болалар назр қилинар эди.
          <sup>3</sup> Ҳанна қор­ни­даги ҳамласини Оллоҳга назр қил­га­нида,
          эри Имрон: «Нега бундай қилдинг? Агар қиз бўлса нима қиласан?» деб
          сўрайди. Кўз ёриган пайтда кўрсалар, фарзанд дар­ҳа­қиқат қиз экан:
        </p>

        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble4'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble4')}
          >
            <p>
              <sup>4</sup> Зуррият сўзига эътибор беринг: Иброҳим (а.с.) билан
              қилинган Аҳдда ҳам айни шу сўз тилга олинган эди.
            </p>
          </div>
        )}

        <p
          className="boldItalic border p-4 rounded-md border-1 border-green-600 cursor-pointer"
          onClick={() => toggleBubble('bubble4')}
        >
          «Туққан чоғида: «Эй Раббим, мен буни қиз туғдим-ку!!» деди. Ҳолбуки,
          Оллоҳ унинг нима туққанини яхши билади. «Ўғил қиздек эмас. Мен унга
          Марям деб ном қўйдим ва, албатта, Сендан унга ва унинг зурриятига
          <sup>4</sup> шайтонир ражимдан паноҳ тилайман», деди»{' '}
          <span className="vitalic">
            (Қуръони карим, Оли Имрон сураси, 36-оят).
          </span>
        </p>

        <p></p>
      </div>

      <div className="main_text ">
        {openBubbles['bubble5'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble5')}
          >
            <p>
              <sup>5</sup> Салабийнинг “Ароис” кито­би­да ёзилишича, бу ҳужра
              маъбадда бўлган (372-373 бет­лар).
            </p>
          </div>
        )}

        <p className="cursor-pointer vitalic" onClick={() => toggleBubble('bubble5')}>
          Орадан бир қанча вақт ўткач, Закариё (а.с.) Марям учун ка­фил-оталикка
          сайланиб уни ўз тарбиясига оладилар. Балоғат ёши­га етгач, алоҳида бир
          ҳуж­ра­га<sup>5</sup> жой­лайдилар. Шунда бир мўъ­жи­за­нинг
          гу­во­ҳи бўладилар, қачонки Марям­нинг хо­на­­си­­га кирсалар, фаслда
          йўқ ме­ва­лар­нинг, яъни қишда ёзги меваларнинг ва ёзда қиш­ки
          меваларнинг турганини кўрадилар.
        </p>

        <p className="boldItalic">
          <span className="vitalic">
            Бу xусусда Қуръони Каримда бундай деб ёзилган:{' '}
          </span>
          «Бас Парвардигори <span className="vitalic">(Марямни)</span> хуш қабул
          айлаб, чиройли парвариш этди ва унга Закариёни кафил қилди. Ҳар қа­чон
          Закариё унинг олдига ҳуж­ра­га кир­га­нида, унинг ҳузурида бир
          ризқ-на­си­ба кўрди. «Эй Марям, бу нарсалар сенга қаeрдан келди?»
          деганида, <span className="vitalic">(Марям)</span> айтдики: «Булар
          Оллоҳнинг ҳу­зу­ри­дан. Албатта Оллоҳ Ўзи истаган ки­ши­ларга беҳисоб
          ризқ берур»{' '}
          <span className="vitalic">
            (Қуръони карим, Оли Имрон сураси, 37-оят.){' '}
          </span>
        </p>

        <p className='vitalic'>
          Бу воқеаларнинг ҳаммаси Ашба Биби Яҳё (а.с.) га ҳамладор бўлишидан
          аввал со­дир бўлган эди.
        </p>
      </div>

      <div className="paragraph_heading">
        <p> Биби Марямнинг ҳамладор бўлиши </p>
      </div>

      <div className="main_text">
        {openBubbles['bubble6'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble6')}
          >
            <p>
              <sup>6</sup> Оли Имрон сурасида бир нечта фариштанинг келгани
              ёзил­ган: «Фа­риш­та­лар­нинг: “Эй Марям, Раб­­бинг­га итоат қил
              ва ру­куъ қилувчилар би­лан бирга сажда ва рукуъ қил”,
              де­ган­ла­­ри­ни эсла» (43-оят.)
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble6')}>
          Закариё (а.с.) нинг хотини ҳомиладор бў­либ, ҳамласига олти ой
          тўлганда, Оллоҳ (с.в.т.) Марям (а.с.) нинг олдига ҳам Жаб­ро­ил
          (а.с.) ни <span className="vitalic">(бир гуруҳ фаришталар билан)</span>
          <sup>6</sup> юбо­ра­ди.
        </p>

        <p>Марям (а.с.) бу пайтда Носира шаҳ­ри­да яшар, Юсуф исмли бир йигитга унаш­ти­рил­ган эди.</p>

        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble7'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble7')}
          >
            <p>
              <sup>7-8</sup> Қуръони карим, Марям сураси, 19:17-18 оятлар.
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble7')}>
          Қуръонда Жаброил (а.с.) нинг инсон кў­ри­ни­шида юборилгани айтилган:  <span className='boldItalic'>  «Биз (Мар­ям­га) руҳимизни юбордик ва у (Мар­ям­га) бус-бутун инсон
          кў­ри­ни­ши­да намоён бўлди».<sup>7</sup>
          </span>
        </p>

        <p></p>
      </div>

      <div className="main_text">
        <p className="cursor-pointer" onClick={() => toggleBubble('bubble7')}>
          Марям (а.с.) қўрқиб кетадилар. Кейин:{' '}
          <span className="boldItalic">
            «Мен Раҳмондан сендан паноҳ беришини сў­рай­ман, агар тақводор
            бўлсанг...»,
          </span>
          <sup>8</sup> дей­ди­лар.
        </p>

        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble9'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble9')}
          >
            <p>
              <sup>9</sup> Оли Имрон сураси 42-оят.
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble9')}>
          Фаришталар эса: «(Қўрқма){' '}
          <span className="boldItalic">
            эй Мар­ям, шуб­ҳа­сиз, Оллоҳ сени танлади, пок­лади ва бутун
            оламлардаги аёллар­дан аф­зал қил­ди
          </span>
          »,<sup>9</sup> деб башорат беришади.
        </p>

        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble10'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble10')}
          >
            <p>
              <sup>10</sup> Марям сураси 19:19. Покиза сўзи араб тилида «закий»
              сўзи билан берилган. Мана шу оятга асосан, ҳазрати Муҳаммад
              соллаллоҳу алайҳи ва салламнинг ҳадисларида айтилганки, ҳар бир
              инсон зоти дунёга келар экан, шайтон унга нишини санчади, кейин
              чақалоқ йиғлайди, лекин Исо (а.с.) туғилганларида бундай бўлмаган
              экан (имом Бухорий).
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble10')}>
          Кейин Жаброил (а.с.): «Оллоҳнинг мар­ҳа­ма­тига сазовор бўлдинг.{' '}
          <span className="boldItalic">Оллоҳ сенга по­ки­за бир ўғил ҳадя этмоқчи,</span>
          <sup>10</sup> – деди. – Энди ҳамладор бўлиб, ўғил туғасан. Ис­ми­ни
          Исо қўясан. У буюк инсон бўлғай, Оллоҳ­нинг Масиҳи деб аталгай.
          Пар­вар­ди­го­ри­миз уни Ўз Салтанати тах­ти­га ўт­қа­за­ди ва у
          тоабад под­шоҳлик қилади», деди.
        </p>

        <p></p>
      </div>

      <div className="main_text">
        <p>Шунда Биби Марям нима бўлаётганини ту­шун­май:</p>

        {openBubbles['bubble11'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble11')}
          >
            <p>
              <sup>11</sup> Яъни, Биби Марям ўшанда бокира бўлган.
            </p>
          </div>
        )}

        <p
          className="boldItalic cursor-pointer"
          onClick={() => toggleBubble('bubble11')}
        >
          «Менга одамзод тегмаган бўл­са, бузуқ аёл бўлмасам, қаёқдан фар­занд
          бўлсин?» дейди.
          <sup>11</sup>
        </p>

        <p></p>
      </div>

      <div className="main_text">
        {openBubbles['bubble12'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble12')}
          >
            <p>
              <sup>12</sup> Марям сураси 19:20-21.
            </p>
          </div>
        )}

        <p
          className="boldItalic cursor-pointer"
          onClick={() => toggleBubble('bubble12')}
        >
          <span className="vitalic">(Фаришта)</span> эса: «Ҳа, шун­дай.
          Раббимиз дейди-ки, бу Мен учун осон. Биз уни{' '}
          <span className="vitalic">(зурриятни)</span> инсоният учун оят-мўъ­жиза
          ва Биздан бўлган раҳмат қилиб{' '}
          <span className="vitalic">(юбор­яп­миз)</span>. Бу – битган иш»,{' '}
          <span className="vitalic">деб жа­воб беради.</span>
          <sup>12</sup>
        </p>

        <p></p>
      </div>

      <div>
        <p className='boldItalic'>
          <span className="vitalic">Оли Имрон сурасида бу во­қеа ҳақида бундай деб ёзил­ган: </span>
          «Эй Марям, дарҳақиқат Оллоҳ сенга Ўз Сўзининг хушхабарини бермоқда-ки,
          унинг исми ал-Масиҳ, Ийсо ибн Марямдир. У бу дунёда ҳам, охиратда ҳам
          обрўли ва яқин бандалардан. У одамларга бешикда ҳам, қарирган чоғида
          ҳам гапиради ва солиҳлардандир».
        </p>

         <p className='boldItalic'>
          <span className="vitalic">(Шунда Марям)</span> деди: «Эй Раб­бим, менга
          башар қўл тек­киз­маган бўлса, қан­дай қи­либ болам бўлади?!»
        </p>

        <p className='boldItalic'>
          У зот: «Шундай, Оллоҳ хоҳ­ла­ганини қи­ла­ди. Бир ишни ирода қилса,
          «Бўл!» дейиши ки­фоя, бў­ла­ве­ра­ди», деди»{' '}
          <span className="vitalic">(Оли Имрон 3:45-47 оятлар). </span>
        </p>
      </div>

      <div className="border pt-0 px-4 my-10 rounded-md border-green-600">
        <div>
          <p className="text-center !font-bold uppercase vitalic"> Исо (а.с.) га берилган сифатлар </p>
        </div>

        <div className="main_text vitalic">
          <p className='vitalic'>
            Қуръоннинг ушбу ояти ка­ри­ма­ла­ри­дан ҳазрати Исо ҳақида берилган
            баъзи бир маълумотларни таъ­кид­ла­ши­миз мумкин. Айтилган оятларга
            биноан у киши:
          </p>

          <ul className=''>
            <li>
              <span className='boldItalic' style={{ fontWeight: '900' }}>закий</span>, яъни бегуноҳ
              инсон бўлганлар (шайтон у кишининг устидан ҳукм юргиза олмаган);
            </li>
            <li>
              <span className='boldItalic' style={{ fontWeight: '900' }}>масиҳ</span>, яъни подшоҳлик
              мақомига эга бўлганлар;
            </li>
            <li>
              <span style={{ fontWeight: '900' }}>
                </span> инсоният учун{' '}
              <span className='boldItalic' style={{ fontWeight: '900' }}>Оят</span> эдилар (Оятуллоҳ
              исми Ислом динида фақат ҳазрати Исо (а.с.) га хос);
            </li>
            <li>
              <span style={{ fontWeight: '900' }}>
                </span> Оллоҳнинг{' '}
              <span className='boldItalic' style={{ fontWeight: '900' }}>Раҳмати </span> эдилар
              (Раҳматуллоҳ);
            </li>
            <li>
              <span style={{ fontWeight: '900' }}></span> Оллоҳдан келган{' '}
              <span className='boldItalic' style={{ fontWeight: '900' }}> Сўз </span> эдилар
              (Калиматуллоҳ);
            </li>
            <li>
              <span style={{ fontWeight: '900' }}></span> бу дунёда ҳам, у
              дунёда ҳам <span className='boldItalic' style={{ fontWeight: '900' }}> обрўли</span>;
            </li>
            <li>
              <span style={{ fontWeight: '900' }}></span> Оллоҳга{' '}
              <span className='boldItalic' style={{ fontWeight: '900' }}> яқин </span> (муқарраб) банда
              бўлганлар;
            </li>
            <li>
              <span className='boldItalic' style={{ fontWeight: '900' }}>солиҳ</span> инсон эдилар;
            </li>
            <li>
              <span style={{ fontWeight: '900' }}></span> бешикда ҳам гапиришга
              қодир бўлганлар.
            </li>
          </ul>
        </div>
      </div>

      <div className="main_text">
        <p></p>

        <p>
          <span className="vitalic">
            Инжили шарифда Жаброил (а.с) нинг мана бу сўзлари ҳам баён этилган:{' '}
          </span>
          «Оллоҳ таоло Ўз Руҳини юборади, Оллоҳнинг қудрати билан ҳамладор
          бўласан. Шу сабабдан туғилажак муқаддас фар­занд Оллоҳнинг Масиҳи деб
          аталади. Ана, холанг Ашба ҳам бе­пушт эди – қарирган чоғида ҳомиладор
          бўлди. Оллоҳ учун ило­жи йўқ нарсанинг ўзи йўқ!»
        </p>

        {openBubbles['bubble13'] && (
          <div
            className="speech-bubble"
            onClick={() => toggleBubble('bubble13')}
          >
            <p>
              <sup>13</sup> Марям сураси 22-оят.
            </p>
          </div>
        )}

        <p className="cursor-pointer" onClick={() => toggleBubble('bubble13')}>
          «Майли, – деди Марям. – Мен Оллоҳ­нинг бандасиман, нима деса розиман».
          Шундан сўнг Жаброил фаришта кўздан ғойиб бўл­ди, Марям (р.а.) нинг
          қорнида эса фар­занд пайдо бўлди:{' '}
          <span className="boldItalic"> «Бас, у ҳамладор бўлди».</span>
          <sup>13</sup>
        </p>
      </div>
    </main>
  );
}