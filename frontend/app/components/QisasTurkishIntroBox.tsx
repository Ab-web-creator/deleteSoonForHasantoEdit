// app/components/QisasTurkishIntroBox.tsx

export default function QisasTurkishIntroBox() {
  return (
    <section
      className="
        absolute hidden top-4 xl:block 
        rounded-[18px]
        border border-[#eadfbe]
        p-6
      "
    >
      <p
        className="
          text-[12px]
          text-[#8d7425]
          italic
        "
      >
        Âlemlerin Rabbi olan Allah’a hamd olsun. Salât ve selâm,
        Efendimiz Muhammed’in, ailesinin ve ashabının üzerine olsun.
        Allah’ın selâmı, rahmeti ve bereketi üzerinize olsun. Amma ba’d...
      </p>

      <div className="my-4 space-y-2">
        <p
          className="
            text-[12px]
            text-[#4f463c]
          "
        >
          <span className="font-semibold text-[#8c7c05]">
            “Kısasü’l-Enbiyâ”
          </span>
          {" "}adlı bu eser, peygamberlerin (a.s.) hayatını anlatan
          önemli İslami kaynaklardan biridir ve güvenilir âlimlerin
          eserleri esas alınarak hazırlanmıştır. Kitapta, Kur’ân-ı
          Kerîm’de zikredilen peygamberlerin hayatları, kavimleri ve
          ibretli olaylar anlatılmaktadır.
        </p>

        <p
          className="
            text-[12px]
            text-[#4f463c]
          "
        >
          Ümit ediyoruz ki bu eser gönüllerinize ilham verir,
          sizleri iyiliğe, hakikate ve takva yoluna yönlendirir.
        </p>
      </div>

      <div>
        <p
          className="
            mt-3
            text-[12px]
            tracking-wide
            text-[#4f463c]
          "
        >
          Saygılarımızla,
          <br />
          tercüme heyeti.
        </p>
      </div>
    </section>
  );
}