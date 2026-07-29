import Image from "next/image";
import Reveal from "./Reveal";
import StoreBadges from "./StoreBadges";

export default function Download() {
  return (
    <section id="telecharger" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[28px] border border-neon/20 bg-ink p-10 sm:p-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-neon/10 blur-[120px]" />
        <div className="relative">
          <span className="eyebrow">Prêt à gagner du temps ?</span>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Téléchargez Velox et gagnez du temps, chaque jour.
          </h2>
          <p className="mt-4 text-muted">
            Livraison de repas et courses VTC à Djibouti, en quelques secondes.
            Disponible sur iPhone et Android.
          </p>
          <StoreBadges className="mt-8" />
        </div>

        <div className="relative flex justify-center">
          <div className="phone-frame w-[230px]">
            <Image
              src="/images/home2.jpeg"
              alt="Application Velox"
              width={460}
              height={970}
              className="w-full"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
