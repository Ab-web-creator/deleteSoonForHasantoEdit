"use client";

import ReusableNavbarForThree from "../components/ReusableNavbarForThree";
import LeftSideHomepage from "./components/LeftSideHomepage";
import RightSideHomepage from "./components/RightSideHomepage";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-surface pb-[70px] md:pb-0">
      <ReusableNavbarForThree
        mobileLinks={[
          { label: "Ana Sayfa", href: "/irsad-home" },
          { label: "Kısas'ul Enbiya, Türkçe", href: "/kisas-trk" },
          { label: "Qisas al-anbiya, Özbekça", href: "/qisas-uzb" },
          { label: "Döküman Yönetimi", href: "/irsad-docs" },
          { label: "Öğrenme Platformu", href: "/ogrenme-platformu" },
        ]}
      />

      {/* HERO */}
      <section className="relative w-full bg-brand-50 sm:pb-10 lg:pt-6">
        <div
          className="
            absolute bottom-0 left-0
            hidden h-full w-full
            bg-cover bg-left-bottom bg-no-repeat
            lg:block
          "
          style={{
            backgroundImage: "url('/images/blueMasjid.png')",
            
          }}
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-surface/70 via-surface/70 to-transparent opacity-80 lg:block" />

        {/* CONTENT */}
        <div className="relative mx-auto h-full max-w-7xl pb-8 sm:h-fit">
          <div
            id="home"
            className="scroll-mt-40 flex h-full flex-col justify-between gap-4 sm:h-fit sm:gap-20 lg:mt-10 lg:flex-row"
          >
            {/* LEFT */}
            <div className="flex-1">
              <LeftSideHomepage />
            </div>

            {/* RIGHT */}
            <div className="flex-1 px-4 sm:px-8">
              <RightSideHomepage />
            </div>
          </div>
        </div>
      </section>

      {/* MEKTEP */}
      <section
        id="mektep"
        className="scroll-mt-20 bg-white px-6 py-6 sm:py-20 md:px-12 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="hidden lg:block">
            <img
              src="/images/traveller.png"
              alt="Islamic education"
              className="h-[300px] w-auto rounded-[2rem] object-cover shadow-[0_24px_80px_rgba(157,132,47,0.14)]"
            />
          </div>

          <div>
            <div className="text-center lg:text-left">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.1em] text-brand-600">
                İrşad Mektebi
              </p>

              <h2 className="font-serif text-3xl leading-tight text-brand-700">
                Hakikati Arayanlar İçin Bir Mektep
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              <p className="max-w-2xl text-lg leading-8 text-ink-muted lg:mx-0">
                Kur’an’ın rehberliğinde, peygamberlerin ortak mesajını öğrenmek
                ve hayatın anlamı üzerine samimiyetle düşünmek isteyenler için
                hazırlanmış bir ilim ve tefekkür alanı.
              </p>

              <p className="text-lg leading-8 text-ink-muted">
                İnsanlık boyunca Allah, insanlara yol göstermek için
                peygamberler gönderdi. İrşad Mektebi; vahyin ışığında hakikati
                öğrenmek, anlamak ve hayatına taşımak isteyenler için
                hazırlanmış sade ve güvenilir bir öğrenme ortamıdır.
              </p>

              <p className="text-lg leading-8 text-ink-muted">
                Burada amaç tartışma üretmek değil; düşünmek, araştırmak ve
                insanın kalbini hakikate açmasına yardımcı olmaktır. Geçmişin
                hikmetini bugünün insanına sade, anlaşılır ve huzur veren bir
                dille ulaştırmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="relative scroll-mt-20 overflow-hidden border-t border-brand-100 bg-brand-50/50 px-6 py-10 sm:py-20 md:px-12 lg:px-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,132,47,0.10),transparent_30%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-16 lg:items-start lg:justify-between">
          <div className="mx-auto max-w-md">
            <p className="text-center text-sm font-medium uppercase tracking-[0.1em] text-brand-600">
              İrşad Mektebi
            </p>

            <h3 className="mt-2 text-center font-serif text-3xl leading-tight text-brand-700">
              Düşünen Kalpler İçin
            </h3>

            <p className="mt-6 max-w-[35ch] text-center leading-8 text-ink-muted">
              Kur’an’ın rehberliğinde; ilim, tefekkür ve hikmet yolculuğuna
              davet eden sade ve huzurlu bir öğrenme platformu.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <h4 className="text-center font-serif text-2xl text-brand-700">
              İletişim
            </h4>

            <div className="mt-6 space-y-2 text-ink-muted">
              <a
                href="mailto:info@irsadmektebi.com"
                className="block text-center transition hover:text-accent-600"
              >
                info@irsadmektebi.com
              </a>

              <p className="text-center">İstanbul, Türkiye</p>

              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white px-5 py-1 text-sm font-medium text-brand-700 transition hover:bg-brand-100"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#25D366]" />
                WhatsApp: +90 555 555 55 55
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl border-t border-brand-100 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-ink-subtle">
            <p>© 2026 İrşad Mektebi. Tüm hakları saklıdır.</p>

            <p className="italic text-brand-600">
              “Hakikat kalbe huzur verir.”
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}