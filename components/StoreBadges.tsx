import clsx from "clsx";

/* Badges de téléchargement App Store + Google Play.
   Les SVG sont des reproductions inline des badges officiels (version française) :
   proportions, hiérarchie typographique et zone de protection des guidelines Apple
   Marketing Resources / Google Play Brand. Vectoriels, donc nets en retina. */

export const APP_STORE_URL = "https://apps.apple.com/us/app/velox/id6786928598";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=dj.velox.client";

const FONT = "var(--font-inter), system-ui, -apple-system, sans-serif";

/* Hauteur commune aux deux badges — les guidelines imposent une hauteur équivalente. */
const BADGE = "h-[46px] w-auto sm:h-[52px]";

function AppStoreBadge() {
  return (
    <svg viewBox="0 0 152 44" className={BADGE} role="img" aria-hidden="true" focusable="false">
      <rect x="0.6" y="0.6" width="150.8" height="42.8" rx="8.4" fill="#000" />
      <rect
        x="0.6"
        y="0.6"
        width="150.8"
        height="42.8"
        rx="8.4"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      {/* Logo Apple */}
      <g transform="translate(14 10.5) scale(0.96)" fill="#fff">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08z" />
        <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </g>
      <text x="45" y="18" fill="#fff" fontFamily={FONT} fontSize="8.4" fontWeight="400">
        Télécharger dans
      </text>
      <text x="44.2" y="33.6" fill="#fff" fontFamily={FONT} fontSize="15" fontWeight="600">
        l&apos;App Store
      </text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 152 44" className={BADGE} role="img" aria-hidden="true" focusable="false">
      <rect x="0.6" y="0.6" width="150.8" height="42.8" rx="8.4" fill="#000" />
      <rect
        x="0.6"
        y="0.6"
        width="150.8"
        height="42.8"
        rx="8.4"
        fill="none"
        stroke="#fff"
        strokeOpacity="0.55"
        strokeWidth="1.2"
      />
      {/* Logo Google Play — 4 facettes depuis le pli gauche */}
      <g transform="translate(13 11)">
        <path d="M3.5 1.6 13.4 12 3.5 22.4A1.7 1.7 0 0 1 3 21.2V2.8c0-.45.18-.87.5-1.2z" fill="#00D3FF" />
        <path d="M3.5 1.6 16.8 8.6 13.4 12 3.5 1.6z" fill="#00F076" />
        <path d="M3.5 22.4 13.4 12l3.4 3.4-13.3 7z" fill="#FF3A44" />
        <path d="M16.8 8.6 20.3 10.5c.93.53.93 1.87 0 2.4l-3.5 1.9L13.4 12l3.4-3.4z" fill="#FFCE00" />
      </g>
      <text
        x="45"
        y="17.6"
        fill="#fff"
        fontFamily={FONT}
        fontSize="7.2"
        fontWeight="500"
        letterSpacing="0.85"
      >
        DISPONIBLE SUR
      </text>
      <text x="44.2" y="33.6" fill="#fff" fontFamily={FONT} fontSize="15" fontWeight="600">
        Google Play
      </text>
    </svg>
  );
}

export default function StoreBadges({ className }: { className?: string }) {
  return (
    <div className={clsx("flex flex-wrap items-center gap-3 sm:gap-4", className)}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Télécharger Velox dans l'App Store"
        className="inline-flex rounded-[9px] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon"
      >
        <AppStoreBadge />
      </a>
      <a
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Télécharger Velox sur Google Play"
        className="inline-flex rounded-[9px] transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neon"
      >
        <GooglePlayBadge />
      </a>
    </div>
  );
}
