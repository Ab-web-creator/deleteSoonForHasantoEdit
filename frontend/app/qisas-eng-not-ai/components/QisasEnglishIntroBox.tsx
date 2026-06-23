// app/components/QisasEnglishIntroBox.tsx

export default function QisasEnglishIntroBox() {
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
        All praise is due to Allah, Lord of the worlds. May blessings and
        peace be upon our master Muhammad, and upon his family and companions
        altogether. Assalamu alaykum wa rahmatullahi wa barakatuh. Amma ba'd...
      </p>

      <div className="my-4 space-y-2">
        <p
          className="
            text-[12px]
            text-[#4f463c]
          "
        >
          This book, <span className="font-semibold text-[#8c7c05]">“Qisas al-Anbiya”</span>,
          is one of the well-known Islamic works on the history of the Prophets
          (peace be upon them). It has been compiled from the narrations of
          early scholars and reliable historical sources. The book recounts the
          lives of the Prophets mentioned in the Noble Qur’an, the stories of
          their peoples, and the lessons that can be drawn from their lives.
        </p>

        <p
          className="
            text-[12px]
            text-[#4f463c]
          "
        >
          The stories of the Prophets have been widely read and cherished for
          centuries among Arabic, Persian, and Turkic-speaking peoples.
          Unfortunately, there are relatively few works available on this
          subject in the Uzbek language. For this reason, we have made our best
          effort to translate this collection into Uzbek and make it accessible
          to a wider audience.
        </p>

        <p
          className="
            text-[12px]
            text-[#4f463c]
          "
        >
          We hope that this book will inspire your heart and encourage you to
          walk the path of goodness, truth, and God-consciousness.
        </p>
      </div>

      <p
        className="
          text-[12px]
          tracking-wide
        "
      >
        Respectfully,
        <br />
        The Translation Team.
      </p>
    </section>
  );
}