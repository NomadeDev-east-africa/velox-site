import Image from "next/image";
import clsx from "clsx";

/* Lockup de marque : icône carrée Velox + wordmark.
   L'icône a un fond noir plein, d'où le rounded + ring qui l'assoit sur le fond du site. */

const sizes = {
  sm: { box: "h-9 w-9", radius: "rounded-[10px]", text: "text-lg" },
  md: { box: "h-11 w-11", radius: "rounded-xl", text: "text-xl" },
  lg: { box: "h-14 w-14", radius: "rounded-2xl", text: "text-2xl" },
} as const;

export default function Logo({
  size = "md",
  className,
}: {
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <span
        className={clsx("relative overflow-hidden ring-1 ring-neon/25", s.box, s.radius)}
        style={{ boxShadow: "0 0 22px -4px rgba(155,255,58,.35)" }}
      >
        <Image
          src="/images/velox-icon.png"
          alt="Velox"
          fill
          sizes="56px"
          className="object-cover"
        />
      </span>
      <span
        className={clsx("font-display font-bold tracking-tight text-white", s.text)}
        style={{ textShadow: "0 0 18px rgba(155,255,58,.25)" }}
      >
        Velox
      </span>
    </span>
  );
}
