import Image from "next/image";
import Reveal from "./Reveal";

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
          </p>
          <a
            href="#"
            className="btn-neon mt-8 inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold tracking-wide"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M3 20.5V3.5c0-.6.3-1.1.8-1.4L13.5 12 3.8 21.9c-.5-.3-.8-.8-.8-1.4zM16.8 15.3l-2.4-2.4 2.4-2.4 2.9 1.7c.9.5.9 1.8 0 2.3l-2.9 1.7zM5.3 2.2l9.5 5.5-2.1 2.1L5.3 2.2zM12.7 14.2l2.1 2.1-9.5 5.5 7.4-7.6z" />
            </svg>
            Disponible sur Google Play
          </a>
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
