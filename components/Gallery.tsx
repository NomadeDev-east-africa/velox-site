import Image from "next/image";
import Reveal from "./Reveal";

const shots = [
  { src: "/images/home.jpeg", alt: "Écran des services Velox" },
  { src: "/images/food.jpeg", alt: "Restaurants disponibles" },
  { src: "/images/restaurant.jpeg", alt: "Page d'un restaurant" },
  { src: "/images/menu.jpeg", alt: "Détail d'un plat" },
  { src: "/images/checkout.jpeg", alt: "Validation de commande" },
  { src: "/images/tracking.jpeg", alt: "Suivi de livraison" },
  { src: "/images/vtc-confirm.jpeg", alt: "Confirmation de course VTC" },
  { src: "/images/vtc-ride.jpeg", alt: "Course VTC en cours" },
];

export default function Gallery() {
  return (
    <section id="apercu" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">Aperçu</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          L'application en images
        </h2>
        <p className="mt-3 text-muted">Une interface sombre et élégante, rapide à prendre en main.</p>
      </Reveal>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {shots.map((s, i) => (
          <Reveal
            key={s.src}
            delay={(i % 4) * 70}
            className="group overflow-hidden rounded-2xl border border-white/5 bg-black transition duration-500 hover:-translate-y-1.5 hover:border-neon/40 hover:shadow-2xl"
          >
            <div className="relative aspect-[9/19] w-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
