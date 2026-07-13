'use client';
import '@/app/styles/stories.css';

import { useSpeechBubbles } from '../../../hooks/useSpeechBubbles';
import ConverterForQisas from './ConverterForQisas';
 
// import './converterForQisas.css';

export default function Introduction() {
  const { openBubbles, toggleBubble } = useSpeechBubbles([
    'bubble1',
    'bubble2',
    'bubble3',
    'bubble4',
  ]);

  return (
  <main className="stories relative">
  <p className="!text-[rgba(133,127,0,0.9)] font-['Aga_islamic'] !text-[32px] text-center mt-10 !mb-20">
    ﷽
  </p>

  <article className="hidden mb-10 sm:flex gap-6">
    <div className="w-1/2">
      <p className="!text-[10px] font-normal !leading-[20px]">
        “O Allah, Heer van alle heerschappij! U geeft heerschappij aan wie U wilt,
        en U neemt heerschappij weg van wie U wilt. U eert wie U wilt,
        en U vernedert wie U wilt. Al het goede is in Uw Hand. Voorwaar, U
        heeft macht over alle dingen. U laat de nacht overgaan in de dag, en
        U laat de dag overgaan in de nacht. U brengt het levende voort uit
        het dode, en U brengt het dode voort uit het levende, en U voorziet
        wie U wilt zonder maat.” <span className="vitalic">(Soerah al-Imran 3:26–27).</span>
      </p>
    </div>

    <div className="w-1/2 rtl">
      <p
        dir="rtl"
        lang="ar"
        className="font-amiri !text-[18px] !leading-[26px] text-justify"
      >
        ٱللَّهُمَّ مَـٰلِكَ ٱلْمُلْكِ تُؤْتِى ٱلْمُلْكَ مَن تَشَآءُ وَتَنزِعُ
        ٱلْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ ۖ
        بِيَدِكَ ٱلْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ تُولِجُ
        ٱلَّيْلَ فِى ٱلنَّهَارِ وَتُولِجُ ٱلنَّهَارَ فِى ٱلَّيْلِ ۖ وَتُخْرِجُ
        ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَتُخْرِجُ ٱلْمَيِّتَ مِنَ ٱلْحَىِّ ۖ
        وَتَرْزُقُ مَن تَشَآءُ بِغَيْرِ حِسَابٍۢ
      </p>
    </div>
  </article>

  <div className="uzbek_quron relative">
    <article
      className="w-full boldItalic cursor-pointer border border-gray-400 px-4 rounded-md"
      onClick={() => toggleBubble('bubble1')}
    >
      <p className="boldItalic my-2">
        “Voorwaar, in de verhalen van de <span className="vitalic">(profeten)</span>
        is een les voor mensen van begrip.”
        <span className="vitalic"> (Soerah Yusuf, vers 111)</span>
        <sup>1</sup>
      </p>
    </article>

    {openBubbles['bubble1'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble1')}>
        <p>
          <sup>1</sup> Abu Dharr al-Ghifari zei: “Ik vroeg: ‘O Boodschapper van Allah,
          wat stond er in de Geschriften van Musa?’ De Profeet, vrede zij met
          hem, antwoordde: ‘Alles daarin was vermaning en wijsheid.’”
        </p>
        <p className="who_wrote">(Ibn Saʿd, “Tabaqat”, Vol. 1, p. 155.)</p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p>
      Alhamdulillah. Alhamdulillahi Rabbil-'Alamin. Wa-s-salatu wa-s-salamu 'ala Sayyidina Muhammad, wa 'ala alihi wa ashabihi ajma'in. Amma ba'd...
    </p>

    <p>
      Dit boek staat in het Arabisch bekend als Qisas al-Anbiya en vertelt de
      geschiedenis van de profeten, vrede zij met hen. Er zijn meerdere boeken
      in dit genre geschreven. Het eerste daarvan was de verzameling van
      Muhammad ibn Ishaq. Hij wijdde zijn werk vooral aan drie onderwerpen: de
      schepping van de wereld en de geschiedenis van de profeten vóór de Profeet Mohammed ﷺ
      (Kitab al-Mubtada), het leven van onze Profeet ﷺ en de openbaringen die
      hij ontving (Sirah), en zijn militaire expedities (Maghazi).
    </p>

    <p>
      Helaas is het werk van Ibn Ishaq verloren gegaan. Toch
      hebben sommige geleerden de overleveringen van Ibn Ishaq vaak genoemd in hun boeken. Al-Tabari gebruikte bijvoorbeeld geschriften van Ibn Ishaq in zijn tafsir en in zijn boek over de wereldgeschiedenis
      (zie: Tarikh al-rusul wa-l-muluk). De invloed van Ibn Ishaq is vooral
      sterk te zien in zowel het idee als de opbouw van zijn geschiedenis boek.
    </p>

    <p>
      Een andere schrijver die bijdroeg aan het genre Qisas al-Anbiya was Wahb
      ibn Munabbih, een Jemenitische geleerde van Perzische afkomst. Hij stelde
      een collectie van boeken samen waarin de geschiedenis van de profeten
      werd verteld. Naast het Arabisch beheerste hij ook het Hebreeuws en Aramees. Hierdoor kon hij de Tawrat en de Zabur in hun oorspronkelijke talen bestuderen en de verhalen van de vroegere profeten uiteenzetten op basis van uitgebreide kennis, overleveringen en historische bronnen.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble2')} className="cursor-pointer">
      Een andere verzameling van Qisas al-Anbiya behoort toe aan Ishaq ibn Bishr
      uit Khurasan. Hij schreef een boek over de
      geschiedenis van de profeten met de titel “Mubtada’
      al-dunya wa qisas al-Anbiya”, (“Het Begin van de Wereld en
      de Verhalen van de Profeten”). Tot voor kort werd dit boek als verloren
      beschouwd, maar door Allah’s gunst werd recent het eerste
      deel van dit boek ontdekt.<sup>2</sup>
    </p>

    {openBubbles['bubble2'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble2')}>
        <p>
          <sup>2</sup> Dit manuscript beschrijft de schepping van de wereld, het
          verhaal van Ibrahim (a.s.), en de geschiedenis van de
          profeten die vóór hem leefden.
        </p>
      </div>
    )}
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble3')} className="cursor-pointer">
      De volgende verzameling van profetische geschiedenis behoort toe aan Abu
      Ishaq al-Thaʿlabi.<sup>3</sup> Hoewel zijn commentaren op de geopenbaarde
      geschriften grote wetenschappelijke waarde hebben, zijn ze onder het
      gewone volk niet erg bekend geworden.
    </p>

    {openBubbles['bubble3'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble3')}>
        <p>
          <sup>3</sup> Abu Ishaq was een geleerde die ongeveer
          vierhonderd jaar na de Profeet Mohammed ﷺ leefde.
        </p>
      </div>
    )}

    <p>
      De volgende schrijver was al-Haytham ibn Muhammad al-Bushanjī. Zijn
      Arabische verzameling van de Qisas al-Koran verdient ook bijzondere aandacht.
      Het boek beschrijft de geschiedenis van de profeten die in de Koran worden
      genoemd, de overleveringen die over hen zijn doorgegeven, en het leven van
      de Profeet Mohammed ﷺ.
    </p>

    <p>
      Ahmad ibn Abu Uzaybah uit al-Quds stelde ook een Qisas al-Anbiya
      samen, maar slechts één manuscript van zijn werk is tot ons gekomen.
    </p>

    <p>
      Onder de niet-Arabische boeken is misschien de belangrijkste 
      het boek van Nasir al-Din Rabghuzi, geschreven in het Turks. Zijn
      verhalen over de profeten zijn uitgebreid en bestaan uit overleveringen en
      traditionele vertellingen met veel details.
    </p>
  </div>

  <div className="main_text">
    <p onClick={() => toggleBubble('bubble4')} className="cursor-pointer">
      Later onderzochten Ibn Taymiyyah en zijn leerling Ibn Kathir de boeken van
      Qisas al-Anbiya die in hun tijd bestonden. Zij verwierpen sommige
      verhalen, vooral de vertellingen die in Joodse en Christelijke teksten
      werden gevonden.<sup>4</sup>
    </p>

    {openBubbles['bubble4'] && (
      <div className="speech-bubble" onClick={() => toggleBubble('bubble4')}>
        <p>
          <sup>4</sup> Er moet worden vermeld dat de verzameling van Ibn Kathir
          in de laatste honderd jaar een grote invloed heeft gehad onder veel
          mensen.
        </p>
      </div>
    )}

    <p>
      Dit literaire genre, de boeken van Qisas al-Anbiya, dat door de eeuwen heen van generatie op generatie
      is doorgegeven, is tot op de dag van vandaag
      populair. Onder Arabisch, Perzisch en Turks sprekende volken wordt
      de geschiedenis van de Profeten steeds opnieuw gepubliceerd.
      De Qisas al-Anbiya van de Egyptische geleerde al-Shaʿrawi is bijvoorbeeld zeer
      bekend. Dit boek, bestaande uit vijf delen en meer dan 3.000 pagina’s,
      legt de geschiedenis van de profeten uit op een moderne manier en bevat
      een grote hoeveelheid informatie.
    </p>


    <p>
      De Qisas al-Anbiya op deze website is de verzameling van Muhammad Abdur-Rahman al-Haj. Hij zocht naar hikma (wijsheid)
      in oude overleveringen en boeken, met bijzondere aandacht voor de Edele Koran en de Soenna van de Profeet ﷺ.
      Hij bestudeerde biografieën van de profeten uit betrouwbare bronnen en analyseerde daarbij de verzen van de
      Koran en hield daarbij rekening met de uitleg van grote
      geleerden van de Islam, onder wie al-Tabari, Ibn Ishaq, Ibn Khaldun en
      al-Yaʿqubi. Wij hebben deze verzameling naar ons beste vermogen naar het Nederlands vertaald. Wij hopen dat de verhalen van de profeten uw hart zullen
      inspireren en u zullen uitnodigen tot goedheid, waarachtigheid en een leven
      van taqwa.
    </p>

    <p className='my-0'>Met respect, namens het vertaalteam.</p>
    <p className='my-0'>© 2026 Abdul-Ghafur ibn Abdul-Sattar</p>
  </div>

  {/* <ConverterForQisas /> */}
</main>
  );
}